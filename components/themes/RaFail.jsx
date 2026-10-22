'use client';
// Generated from the Rafail design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#0C0D10}\na{color:#8BD5FF}a:hover{color:#FFFFFF}\n.scan{background-image:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px)}\n.ln{display:grid;grid-template-columns:56px 118px 74px minmax(0,1fr);gap:0 14px;padding:3px 18px 3px 0;font-size:14px;line-height:1.6;align-items:baseline}\n.ln:hover{background:rgba(255,255,255,.03)}\n.no{color:#4B505C;text-align:right;user-select:none}\n.ts{color:#5E6472}\n.lv{font-weight:800}\n.INFO{color:#8BD5FF}.WARN{color:#FFC857}.ERROR{color:#FF4D6D}.OK{color:#39FF88}.FATAL{color:#0C0D10;background:#FF4D6D;padding:0 4px}.MOD{color:#C3A6FF}.ENV{color:#9AA0AC}\n@keyframes jit{0%,88%,100%{transform:translate(0,0)}90%{transform:translate(-5px,1px)}93%{transform:translate(6px,-2px)}96%{transform:translate(-2px,0)}}\n.glitch{text-shadow:4px 0 #FF2E63,-4px 0 #2EF2FF;animation:jit 2.6s infinite steps(1)}\n.frame{display:block;width:100%;text-align:left;background:transparent;border:0;color:inherit;font:inherit;cursor:pointer;padding:0}\n.frame:hover .fn{text-decoration:underline;text-underline-offset:4px}\n.btn{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:14px;background:transparent;color:#D6DAE3;border:1.5px solid #3A3F4B;padding:10px 16px;cursor:pointer;min-height:44px}\n.btn:hover{border-color:#8BD5FF;color:#8BD5FF}\n@media (max-width:720px){.ln{grid-template-columns:34px minmax(0,1fr);}.ln .ts,.ln .lv{display:none}}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;800&family=VT323&display=swap"];

export default class RaFail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  script() {
    return [
      { k: 'banner' },
      { k: 'line', lvl: 'INFO', msg: 'Booting raphael@portfolio …' },
      { k: 'line', lvl: 'INFO', msg: 'Identity resolved: Raphael Gabriel Geronimo' },
      { k: 'line', lvl: 'INFO', msg: 'Role resolved: full-stack developer + founder + professional tech geek' },
      { k: 'module', name: 'front_end', msg: `${C.skills.frontend}`, anchor: 'about' },
      { k: 'module', name: 'back_end', msg: `${C.skills.backend}` },
      { k: 'module', name: 'business', msg: `${C.skills.business}` },
      { k: 'line', lvl: 'WARN', msg: 'Curiosity exceeds recommended limits (it always does)' },
      { k: 'line', lvl: 'WARN', msg: 'Coffee level: [low / critical / irrelevant]' },
      { k: 'line', lvl: 'ERROR', msg: 'Too many skills for a single page' },
      { k: 'fatal' },
      { k: 'line', lvl: 'INFO', msg: 'Dumping core — here is everything that was running:' },
      { k: 'frame', name: `${nospace(C.projects[0].name)}`, file: 'web-app.js:01', pi: 0, type: `${C.projects[0].type}`, desc: `${C.projects[0].summary}`, anchor: 'work' },
      { k: 'frame', name: `${nospace(C.projects[1].name)}`, file: 'api-platform.ts:02', pi: 1, type: `${C.projects[1].type}`, desc: `${C.projects[1].summary}` },
      { k: 'frame', name: `${nospace(C.projects[2].name)}`, file: 'side-project.swift:03', pi: 2, type: `${C.projects[2].type}`, desc: `${C.projects[2].summary}` },
      { k: 'line', lvl: 'INFO', msg: 'Inspecting running processes …' },
      { k: 'process' },
      { k: 'line', lvl: 'ENV', msg: `env.LOCATION = ${C.city}` },
      { k: 'line', lvl: 'ENV', msg: 'env.OPEN_TO = [freelance / partnerships / roles]' },
      { k: 'line', lvl: 'INFO', msg: 'Attempting recovery …' },
      { k: 'line', lvl: 'OK', msg: 'Recovered. Portfolio restored. Nothing was actually broken.' },
      { k: 'contact' }
    ];
  }
  componentDidMount() {
    this.mounted = true;
    this.start();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  start() {
    clearInterval(this.timer);
    this.setState({ n: 1 });
    const total = this.script().length;
    this.timer = setInterval(() => {
      const n = (this.state && this.state.n) || 0;
      if (n >= total) { clearInterval(this.timer); return; }
      this.setState({ n: n + 1 });
    }, 260);
  }
  renderVals() {
    const s = this.state || {};
    const all = this.script();
    const total = all.length;
    const n = this.mounted ? Math.min(s.n || 0, total) : total;
    const open = s.open || {};
    let lineNo = 0;
    const lines = all.slice(0, n).map((l, i) => {
      lineNo += 1;
      const secs = (1.2 + i * 0.37).toFixed(3);
      const o = {
        no: lineNo,
        ts: '00:00:' + (secs.length < 6 ? '0' + secs : secs),
        lvl: l.lvl || '',
        msg: l.msg || '',
        name: l.name || '',
        file: l.file || '',
        type: l.type || '',
        desc: l.desc || '',
        anchor: l.anchor || ('l' + i),
        isBanner: l.k === 'banner', isLine: l.k === 'line', isModule: l.k === 'module', isFatal: l.k === 'fatal',
        pi: l.pi || 0, isFrame: l.k === 'frame', isProcess: l.k === 'process', isContact: l.k === 'contact'
      };
      if (l.k === 'frame') {
        const isOpen = open[i] !== false;
        o.open = isOpen;
        o.caret = isOpen ? '▾ collapse' : '▸ expand';
        o.toggle = () => {
          const next = Object.assign({}, (this.state && this.state.open) || {});
          next[i] = !isOpen;
          this.setState({ open: next });
        };
      }
      return o;
    });
    return {
      lines: lines,
      shown: n,
      total: total,
      streaming: this.mounted && n < total,
      skip: () => { clearInterval(this.timer); this.setState({ n: total }); },
      replay: () => this.start()
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="scan" style={css("min-height: 100vh; background: #0C0D10; color: #D6DAE3; font-family: 'JetBrains Mono', ui-monospace, monospace")}>
        <div style={css("background: #FF4D6D; color: #0C0D10; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-weight: 600")}>
          <span>
            {"Theme: Ra-fail"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #0C0D10; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #0C0D10; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <div style={css("position: sticky; top: 0; z-index: 5; background: #14161B; border-bottom: 1px solid #23262E; padding: 10px 18px; display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center; justify-content: space-between; font-size: 13px")}>
          <div style={css("display: flex; gap: 8px; align-items: center")}>
            <span aria-hidden="true" style={css("width: 11px; height: 11px; border-radius: 50%; background: #FF4D6D")}></span>
            <span aria-hidden="true" style={css("width: 11px; height: 11px; border-radius: 50%; background: #FFC857")}></span>
            <span aria-hidden="true" style={css("width: 11px; height: 11px; border-radius: 50%; background: #39FF88")}></span>
            <span style={css("margin-left: 8px; color: #9AA0AC")}>
              {"rgg.log — tail -f"}
            </span>
          </div>
          {" "}
          <div style={css("display: flex; gap: 8px; align-items: center; flex-wrap: wrap")}>
            <span style={css("color: #5E6472")}>
              {v.shown}{" / "}{v.total}{" lines"}
            </span>
            {" "}
            <button type="button" className="btn" onClick={v.skip} style={css("padding: 6px 12px; min-height: 36px")}>
              {"Skip to end"}
            </button>
          </div>
        </div>
        {" "}
        <main style={css("max-width: 1180px; margin: 0 auto; padding: 18px 0 80px")}>
          {(v.lines || []).map((l, __i0) => (
            <React.Fragment key={__i0}>
              {l.isBanner ? (
                <>
                  <section id="top" style={css("padding: 28px 18px 30px 70px; display: flex; flex-direction: column; gap: 10px")}>
                    <h1 className="glitch" style={css("margin: 0; font-family: 'VT323', monospace; font-weight: 400; font-size: clamp(96px, 16vw, 220px); line-height: 0.8; color: #FFFFFF")}>
                      {"Ra-fail"}
                    </h1>
                    {" "}
                    <p style={css("margin: 0; font-size: 16px; line-height: 1.7; color: #9AA0AC; max-width: 640px")}>
                      {"Raphael Gabriel Geronimo · full-stack developer & founder. This portfolio crashes on purpose — then recovers. Scroll the log."}
                    </p>
                  </section>
                </>
              ) : null}
              {" "}
              {l.isLine ? (
                <>
                  <div className="ln">
                    <span className="no">
                      {l.no}
                    </span>
                    <span className="ts">
                      {l.ts}
                    </span>
                    <span className={`lv ${l.lvl}`}>
                      {l.lvl}
                    </span>
                    <span>
                      {l.msg}
                    </span>
                  </div>
                </>
              ) : null}
              {" "}
              {l.isModule ? (
                <>
                  <div id={l.anchor} className="ln">
                    <span className="no">
                      {l.no}
                    </span>
                    <span className="ts">
                      {l.ts}
                    </span>
                    <span className="lv MOD">
                      {"MODULE"}
                    </span>
                    <span>
                      <b style={css("color: #C3A6FF")}>
                        {l.name}
                      </b>
                      {" "}
                      <span style={css("color: #5E6472")}>
                        {"··········"}
                      </span>
                      {" "}
                      <span style={css("color: #39FF88")}>
                        {"loaded"}
                      </span>
                      {" — "}{l.msg}
                    </span>
                  </div>
                </>
              ) : null}
              {" "}
              {l.isFatal ? (
                <>
                  <section style={css("margin: 18px 0; background: #1A0D12; border-top: 2px solid #FF4D6D; border-bottom: 2px solid #FF4D6D; padding: 22px 18px 22px 70px; display: flex; flex-direction: column; gap: 8px")}>
                    <div style={css("font-size: 13px; color: #FF4D6D; font-weight: 800")}>
                      {l.ts}{" · FATAL"}
                    </div>
                    {" "}
                    <div className="glitch" style={css("font-family: 'VT323', monospace; font-size: clamp(34px, 5.4vw, 64px); line-height: 0.95; color: #FFFFFF")}>
                      {"Uncaught TooManySkillsException"}
                    </div>
                    {" "}
                    <div style={css("font-size: 15px; color: #F2B8C4")}>
                      {"portfolio.render() overflowed: one page cannot contain this much developer."}
                    </div>
                  </section>
                </>
              ) : null}
              {" "}
              {l.isFrame ? (
                <>
                  <div id={l.anchor} style={css("border-left: 2px solid #3A3F4B; margin: 2px 0 2px 70px")}>
                    <button type="button" className="frame" onClick={l.toggle} aria-expanded={l.open}>
                      <div className="ln" style={css("grid-template-columns: minmax(0, 1fr) auto; padding-left: 14px")}>
                        <span>
                          <span style={css("color: #9AA0AC")}>
                            {"at"}
                          </span>
                          {" "}
                          <span className="fn" style={css("color: #FFFFFF; font-weight: 600")}>
                            {"Project."}{l.name}
                          </span>
                          {" "}
                          <span style={css("color: #5E6472")}>
                            {"("}{l.file}{")"}
                          </span>
                        </span>
                        <span style={css("color: #8BD5FF")}>
                          {l.caret}
                        </span>
                      </div>
                    </button>
                    {" "}
                    {l.open ? (
                      <>
                        <div style={css("padding: 6px 18px 18px 14px; display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start")}>
                          <div style={css("flex: 0 0 220px; height: 130px; border: 1px dashed #3A3F4B; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #5E6472")}>
                            {shot(C.projects[l.pi])}
                          </div>
                          {" "}
                          <div style={css("flex: 1 1 280px; display: flex; flex-direction: column; gap: 8px; font-size: 14px; line-height: 1.6")}>
                            <span style={css("color: #D6DAE3")}>
                              {l.desc}
                            </span>
                            {" "}
                            <span style={css("color: #9AA0AC")}>
                              {"stack: "}{C.projects[l.pi].stack}{" · type: "}{l.type}
                            </span>
                            {" "}
                            <a href="#work" style={css("align-self: flex-start")}>
                              {"open case study →"}
                            </a>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
              {" "}
              {l.isProcess ? (
                <>
                  <section id="venture" style={css("margin: 16px 18px 16px 70px; border: 1.5px solid #39FF88; padding: 18px 20px; display: flex; flex-wrap: wrap; gap: 12px 28px; align-items: center; justify-content: space-between")}>
                    <div style={css("display: flex; flex-direction: column; gap: 6px")}>
                      <span style={css("font-size: 13px; color: #39FF88")}>
                        {"PID 1 · founder · status: running ●"}
                      </span>
                      {" "}
                      <span style={css("font-family: 'VT323', monospace; font-size: 46px; line-height: 0.9; color: #FFFFFF")}>
                        {C.company.name}
                      </span>
                      {" "}
                      <span style={css("font-size: 14px; color: #9AA0AC")}>
                        {C.company.summary}
                      </span>
                    </div>
                    {" "}
                    <a href="#venture" className="btn" style={css("text-decoration: none")}>
                      {"attach to process →"}
                    </a>
                  </section>
                </>
              ) : null}
              {" "}
              {l.isContact ? (
                <>
                  <section id="contact" style={css("margin: 26px 18px 0 70px; padding: 26px 0 0; border-top: 1px solid #23262E; display: flex; flex-direction: column; gap: 14px")}>
                    <div style={css("font-size: 13px; color: #39FF88")}>
                      {"✓ system recovered · 0 projects lost"}
                    </div>
                    {" "}
                    <h2 style={css("margin: 0; font-family: 'VT323', monospace; font-weight: 400; font-size: clamp(56px, 9vw, 110px); line-height: 0.85; color: #FFFFFF")}>
                      {"Report a bug"}
                      <br />
                      <span style={css("color: #8BD5FF")}>
                        {"(or a project)."}
                      </span>
                    </h2>
                    {" "}
                    <a href={`mailto:${C.email}`} style={css("font-size: clamp(18px, 2.6vw, 24px); font-weight: 600")}>
                      {C.email}
                    </a>
                    {" "}
                    <div style={css("display: flex; flex-wrap: wrap; gap: 10px 22px; font-size: 14px")}>
                      <a href={C.links.github} target="_blank" rel="noreferrer">
                        {"GitHub"}
                      </a>
                      <a href={C.links.linkedin} target="_blank" rel="noreferrer">
                        {"LinkedIn"}
                      </a>
                      <a href={C.company.url} target="_blank" rel="noreferrer">
                        {C.company.siteLabel}
                      </a>
                    </div>
                    {" "}
                    <div style={css("display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-top: 8px")}>
                      <button type="button" className="btn" onClick={v.replay} style={css("border-color: #FF4D6D; color: #FF4D6D")}>
                        {"Crash it again"}
                      </button>
                      {" "}
                      <span style={css("font-size: 13px; color: #5E6472")}>
                        {"process exited with code 0 · © Raphael Gabriel Geronimo"}
                      </span>
                    </div>
                  </section>
                </>
              ) : null}
            </React.Fragment>
          ))}
          {" "}
          {v.streaming ? (
            <>
              <div style={css("padding: 6px 0 0 70px; color: #39FF88")}>
                {"▍"}
              </div>
            </>
          ) : null}
        </main>
      </div>
      </>
    );
  }
}
