// Converts the design-tool .dc.html pages into React class components.
// Template holes {{x}} -> render values, sc-for/sc-if -> map/conditionals,
// content tokens ⟦path⟧ -> live CMS content via the shared runtime.
const fs = require('fs');
const path = require('path');
const { parseDocument } = require('htmlparser2');

const [, , srcDir, outDir, routesJson] = process.argv;
const ROUTES = JSON.parse(fs.readFileSync(routesJson, 'utf8')); // { File: { slug, comp } }

const VOID = new Set(['br', 'img', 'input', 'meta', 'link', 'hr', 'source', 'wbr', 'area', 'col']);
const ATTR_MAP = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', 'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', readonly: 'readOnly', maxlength: 'maxLength', colspan: 'colSpan', rowspan: 'rowSpan', autofocus: 'autoFocus', crossorigin: 'crossOrigin', srcset: 'srcSet', contenteditable: 'contentEditable', spellcheck: 'spellCheck' };

function camel(n) { return n.replace(/-([a-z])/g, (_, c) => c.toUpperCase()); }
function jsAttrName(n) {
  if (ATTR_MAP[n]) return ATTR_MAP[n];
  if (n.startsWith('data-') || n.startsWith('aria-')) return n;
  if (n.includes('-')) return camel(n);
  return n;
}

// ---- content tokens ----
function tokenExpr(tok, scope) {
  // tok like: email | company.name|up | p0.name | p{st.i}.shot | p0.type|up
  let [p, filter] = tok.split('|');
  let base;
  let m = /^p(\d+)\.(\w+)$/.exec(p) || /^p\{(.+)\}\.(\w+)$/.exec(p);
  let isShot = false;
  if (m) {
    const idx = /^\d+$/.test(m[1]) ? m[1] : holeExpr(m[1], scope);
    if (m[2] === 'shot') { isShot = true; base = `C.projects[${idx}]`; }
    else base = `C.projects[${idx}].${m[2]}`;
  } else base = 'C.' + p;
  if (isShot) return { expr: `shot(${base})`, node: true };
  if (filter === 'up') base = `up(${base})`;
  if (filter === 'nospace') base = `nospace(${base})`;
  return { expr: base, node: false };
}

// ---- holes ----
function holeExpr(e, scope) {
  e = e.trim();
  if (e === 'true' || e === 'false') return e;
  if (/^-?\d/.test(e)) return e;
  const m = /^([A-Za-z_$][\w$]*)/.exec(e);
  if (m && scope.includes(m[1])) return e;
  return 'v.' + e;
}

// split "a {{x}} b ⟦t⟧" into parts
function parts(str) {
  const out = [];
  const re = /\{\{([^}]+)\}\}|⟦([^⟧]+)⟧/g;
  let last = 0, m;
  while ((m = re.exec(str))) {
    if (m.index > last) out.push({ t: 'lit', v: str.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ t: 'hole', v: m[1] });
    else out.push({ t: 'tok', v: m[2] });
    last = re.lastIndex;
  }
  if (last < str.length) out.push({ t: 'lit', v: str.slice(last) });
  return out;
}
function tplEsc(s) { return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${'); }
function stringExpr(str, scope) {
  const ps = parts(str);
  if (ps.length === 1 && ps[0].t === 'hole') return holeExpr(ps[0].v, scope);
  if (ps.length === 1 && ps[0].t === 'tok') return tokenExpr(ps[0].v, scope).expr;
  if (ps.every((p) => p.t === 'lit')) return JSON.stringify(str);
  return '`' + ps.map((p) => p.t === 'lit' ? tplEsc(p.v) : '${' + (p.t === 'hole' ? holeExpr(p.v, scope) : tokenExpr(p.v, scope).expr) + '}').join('') + '`';
}

function textOf(node) {
  if (node.type === 'text') return node.data;
  return (node.children || []).map(textOf).join('');
}

// ---- JSX generation ----
function genChildren(children, scope, ind) {
  const out = [];
  children.forEach((c, i) => {
    if (c.type === 'comment') return;
    if (c.type === 'text') {
      let d = c.data;
      if (!d.trim()) {
        if (i === 0 || i === children.length - 1) return;
        out.push(ind + '{" "}');
        return;
      }
      // collapse whitespace like HTML would
      d = d.replace(/\s+/g, ' ');
      const ps = parts(d);
      out.push(ind + ps.map((p) => {
        if (p.t === 'lit') return '{' + JSON.stringify(p.v) + '}';
        if (p.t === 'hole') return '{' + holeExpr(p.v, scope) + '}';
        return '{' + tokenExpr(p.v, scope).expr + '}';
      }).join(''));
      return;
    }
    if (c.type === 'tag' || c.type === 'script' || c.type === 'style') out.push(genEl(c, scope, ind));
  });
  return out.join('\n');
}

function genEl(n, scope, ind) {
  const name = n.name;
  const a = n.attribs || {};
  if (name === 'sc-for') {
    const list = /\{\{(.+)\}\}/.exec(a.list)[1];
    const as = a.as || 'item';
    const sc = scope.concat([as]);
    return `${ind}{(${holeExpr(list, scope)} || []).map((${as}, __i${scope.length}) => (\n${ind}  <React.Fragment key={__i${scope.length}}>\n${genChildren(n.children, sc, ind + '    ')}\n${ind}  </React.Fragment>\n${ind}))}`;
  }
  if (name === 'sc-if') {
    const val = /\{\{(.+)\}\}/.exec(a.value)[1];
    return `${ind}{${holeExpr(val, scope)} ? (\n${ind}  <>\n${genChildren(n.children, scope, ind + '    ')}\n${ind}  </>\n${ind}) : null}`;
  }
  const attrs = [];
  // link rewriting for well-known contact anchors
  if (name === 'a') {
    const txt = textOf(n).trim();
    if (txt === 'GitHub') { a.href = '⟦links.github⟧'; a.target = '_blank'; a.rel = 'noreferrer'; }
    else if (txt === 'LinkedIn') { a.href = '⟦links.linkedin⟧'; a.target = '_blank'; a.rel = 'noreferrer'; }
    else if (txt.includes('⟦company.siteLabel')) { a.href = '⟦company.url⟧'; a.target = '_blank'; a.rel = 'noreferrer'; }
    else if (txt.includes('⟦email⟧')) { a.href = 'mailto:⟦email⟧'; }
  }
  for (const [k, val] of Object.entries(a)) {
    if (k.startsWith('hint-placeholder')) continue;
    const jk = jsAttrName(k);
    if (k === 'style') {
      attrs.push(`style={css(${stringExpr(val, scope)})}`);
      continue;
    }
    if (val === '' && !/\{\{|⟦/.test(val)) { attrs.push(`${jk}=""`); continue; }
    const ps = parts(val);
    if (ps.every((p) => p.t === 'lit')) attrs.push(`${jk}=${JSON.stringify(val)}`);
    else attrs.push(`${jk}={${stringExpr(val, scope)}}`);
  }
  const open = `<${name}${attrs.length ? ' ' + attrs.join(' ') : ''}`;
  if (VOID.has(name)) return `${ind}${open} />`;
  const kids = (n.children || []).filter((c) => !(c.type === 'text' && !c.data.trim() && (n.children.length === 1)));
  if (!kids.length) return `${ind}${open}></${name}>`;
  return `${ind}${open}>\n${genChildren(n.children, scope, ind + '  ')}\n${ind}</${name}>`;
}

// ---- JS (script) transformation ----
function transformJs(js) {
  // turn string literals containing tokens into template literals with live content
  js = js.replace(/'((?:[^'\\\n]|\\.)*⟦(?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*⟦(?:[^"\\\n]|\\.)*)"/g, (m, s1, s2) => {
    const raw = s1 !== undefined ? s1 : s2;
    const ps = parts(raw);
    return '`' + ps.map((p) => {
      if (p.t === 'lit') return p.v.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
      const te = tokenExpr(p.v, []);
      return '${' + (te.node ? te.expr.replace(/^shot\((.*)\)$/, '$1.name') : te.expr) + '}';
    }).join('') + '`';
  });
  // bare tokens left in JS (e.g. inside template literals) -> expressions
  js = js.replace(/⟦([^⟧]+)⟧/g, (m, t) => '${' + tokenExpr(t, []).expr + '}');
  return js;
}

function rewriteLinks(s) {
  return s.replace(/([A-Za-z]+)\.dc\.html/g, (m, f) => ROUTES[f] ? ROUTES[f].slug : m);
}

function convert(file) {
  let src = fs.readFileSync(path.join(srcDir, file + '.dc.html'), 'utf8');
  src = rewriteLinks(src);
  const sIdx = src.indexOf('<script type="text/x-dc"');
  const scriptBlock = src.slice(sIdx);
  const js = /<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/.exec(scriptBlock)[1];
  const bodyOpen = js.indexOf('{', js.indexOf('extends DCLogic'));
  const bodyClose = js.lastIndexOf('}');
  let classBody = transformJs(js.slice(bodyOpen + 1, bodyClose));

  const xdc = /<x-dc>([\s\S]*)<\/x-dc>/.exec(src.slice(0, sIdx))[1];
  const helmet = /<helmet>([\s\S]*?)<\/helmet>/.exec(xdc);
  const helmetHtml = helmet ? helmet[1] : '';
  const css = (/<style>([\s\S]*?)<\/style>/.exec(helmetHtml) || ['', ''])[1];
  const links = [...helmetHtml.matchAll(/<link[^>]*>/g)].map((m) => m[0]).filter((t) => /rel="stylesheet"/.test(t)).map((t) => /href="([^"]+)"/.exec(t)[1].replace(/&amp;/g, '&'));
  const bodyHtml = xdc.replace(/<helmet>[\s\S]*?<\/helmet>/, '');

  const doc = parseDocument(bodyHtml, { lowerCaseAttributeNames: false, lowerCaseTags: false, recognizeSelfClosing: true, decodeEntities: true });
  const jsx = genChildren(doc.children, [], '      ');

  const comp = ROUTES[file].comp;
  const out = `'use client';
// Generated from the ${file} design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = ${JSON.stringify(css)};
const FONTS = ${JSON.stringify(links)};

export default class ${comp} extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
${classBody}
  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
${jsx}
      </>
    );
  }
}
`;
  fs.writeFileSync(path.join(outDir, comp + '.jsx'), out);
}

for (const f of Object.keys(ROUTES)) {
  try { convert(f); console.log('ok', f); } catch (e) { console.log('FAIL', f, e.message); }
}
