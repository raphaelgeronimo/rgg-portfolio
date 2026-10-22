'use client';
// Tiny runtime shared by every generated theme component.
import React from 'react';
import { DEFAULT_CONTENT, normalizeContent } from './content';

// Live content. Mutated in place by <ContentRoot> before any theme renders,
// so every theme just reads C.email, C.projects[0].name, and so on.
export const C = normalizeContent({});
export function setContent(content) {
  Object.assign(C, content || DEFAULT_CONTENT);
}

export const up = (s) => String(s == null ? '' : s).toUpperCase();
export const nospace = (s) => String(s == null ? '' : s).replace(/\s+/g, '');

// A project screenshot if one was uploaded, otherwise the placeholder text.
export function shot(project) {
  if (project && project.image) {
    return React.createElement('img', {
      src: project.image,
      alt: project.name ? project.name + ' screenshot' : 'Project screenshot',
      style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
    });
  }
  return '[Project screenshot]';
}

// Inline CSS strings (from the original designs) -> React style objects.
const cache = new Map();
function splitDecls(str) {
  const out = [];
  let depth = 0, quote = null, cur = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (quote) { cur += ch; if (ch === quote && str[i - 1] !== '\\') quote = null; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out;
}
export function css(str) {
  if (!str) return undefined;
  const hit = cache.get(str);
  if (hit) return hit;
  const obj = {};
  for (const decl of splitDecls(String(str))) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    let val = decl.slice(i + 1).trim().replace(/\s*!important$/, '');
    if (!prop) continue;
    const key = prop.startsWith('--') ? prop : prop.replace(/^-(webkit|moz|ms)-/, (m, p) => p.charAt(0).toUpperCase() + p.slice(1) + '-').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj[key] = val;
  }
  if (cache.size > 5000) cache.clear();
  cache.set(str, obj);
  return obj;
}
