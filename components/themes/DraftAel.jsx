'use client';
// Generated from the Draftael design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#16325C}\na{color:#FFFFFF}a:hover{color:#FFD65C}\n.bp{background-color:#1D3F73;background-image:linear-gradient(rgba(255,255,255,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.13) 1px,transparent 1px),linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:100px 100px,100px 100px,20px 20px,20px 20px}\n.tech{font-family:'Josefin Sans',sans-serif;text-transform:uppercase;letter-spacing:.12em}\n.note{font-family:'Architects Daughter',cursive}\n.dim{font-family:'Space Mono',monospace}\n.ln{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.thin{stroke-width:1;opacity:.7}\n.draw{stroke-dasharray:1;transition:stroke-dashoffset 1.6s cubic-bezier(.5,0,.3,1)}\n.sheet{position:relative;border:2px solid rgba(255,255,255,.85);outline:1px solid rgba(255,255,255,.4);outline-offset:6px}\n.zone{position:absolute;font-family:'Space Mono',monospace;font-size:11px;color:rgba(255,255,255,.6)}\n.bbtn{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;line-height:1;font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:15px;letter-spacing:.14em;text-transform:uppercase;background:transparent;color:#FFFFFF;border:2px solid #FFFFFF;border-radius:4px;padding:14px 18px 12px;min-height:48px;cursor:pointer}\n.bbtn:hover,.bbtn.on{background:#FFFFFF;color:#1D3F73}\n.room{cursor:pointer;transition:fill-opacity .25s}\n.tab{font:inherit;text-align:left;background:transparent;color:#FFFFFF;border:1px dashed rgba(255,255,255,.5);border-radius:4px;padding:12px 14px;cursor:pointer;min-height:48px;display:flex;flex-direction:column;gap:4px}\n.tab.on{border-style:solid;border-color:#FFD65C;background:rgba(255,214,92,.1)}\n.tb{border:1.5px solid rgba(255,255,255,.85);padding:10px 12px;display:flex;flex-direction:column;gap:4px;min-width:0}\n.tb .k{font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.14em;color:rgba(255,255,255,.65)}\n.tb .v{font-family:'Josefin Sans',sans-serif;font-weight:600;font-size:17px;text-transform:uppercase;letter-spacing:.06em;overflow-wrap:anywhere}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Architects+Daughter&family=Space+Mono:wght@400;700&display=swap"];

export default class DraftAel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.t1 = setTimeout(() => this.setState({ drawn: true }), 150);
  }
  componentWillUnmount() { clearTimeout(this.t1); }
  renderVals() {
    const s = this.state || {};
    const built = s.built || {};
    const room = s.room === undefined ? 0 : s.room;
    const roomsData = [
      { name: 'Front end', room: 'the living room', body: `Where people hang out, so it has to feel good. ${C.skills.frontend}` },
      { name: 'Business', room: 'the office', body: `Where the decisions get made. ${C.skills.business}` },
      { name: 'Back end', room: 'plumbing & wiring', body: `Nobody visits, everybody depends on it. ${C.skills.backend}` },
      { name: 'Coffee nook', room: 'essential', body: 'Load-bearing. Do not remove.' }
    ];
    const pick = (i) => () => this.setState({ room: i });
    const rf = {};
    [0, 1, 2, 3].forEach((i) => { rf['r' + (i + 1)] = room === i ? 0.22 : 0.0001; });
    const kinds = [`${C.projects[0].type}`, `${C.projects[1].type}`, `${C.projects[2].type}`];
    const allBuilt = [1, 2, 3].every((k) => built[k]);
    const projects = [1, 2, 3].map((k) => {
      const b = !!built[k];
      return {
        i: k - 1,
        dwg: 'DWG 0' + (k + 1) + ' · ELEVATION',
        status: b ? 'BUILT' : 'FOR REVIEW',
        kind: kinds[k - 1],
        dash: s.drawn ? 0 : 1,
        builtOp: b ? 1 : 0,
        builtSc: b ? 1 : 0.92,
        delay: b ? '.15s' : '0s',
        dimW: '1440 PX',
        dimH: '900 PX',
        btn: b ? 'Back to the drawing' : 'Build it',
        btnCls: b ? 'on' : '',
        toggle: () => { const o = Object.assign({}, built); o[k] = !o[k]; this.setState({ built: o }); }
      };
    });
    return {
      titleDash: s.drawn ? 0 : 900,
      titleFill: s.drawn ? 0.08 : 0,
      rf: rf,
      pick1: pick(0), pick2: pick(1), pick3: pick(2), pick4: pick(3),
      rooms: roomsData.map((r, i) => ({ name: r.name, room: r.room, body: r.body, open: room === i, cls: room === i ? 'on' : '', pressed: room === i ? 'true' : 'false', pick: pick(i) })),
      projects: projects,
      buildAll: () => this.setState({ built: allBuilt ? {} : { 1: true, 2: true, 3: true } }),
      buildAllLabel: allBuilt ? 'Back to drawings' : 'Build everything',
      stamp: () => this.setState({ stamped: !s.stamped }),
      stampLabel: s.stamped ? 'Approved' : 'Approve drawings',
      stampBtnCls: s.stamped ? 'on' : '',
      stampOp: s.stamped ? 1 : 0,
      stampSc: s.stamped ? 1 : 2.2,
      rev: s.stamped ? 'A · approved' : '0 · draft'
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="bp" style={css("min-height: 100vh; color: #FFFFFF; font-family: 'Josefin Sans', system-ui, sans-serif")}>
        <div style={css("background: #10264A; color: #DCE6F5; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center")} className="dim">
          <span>
            {"Theme: Draft-ael"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #FFD65C; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #FFD65C; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <div style={css("max-width: 1240px; margin: 0 auto; padding: 40px 24px 80px")}>
          <div className="sheet" style={css("padding: clamp(24px, 4vw, 56px)")}>
            <span className="zone" style={css("left: 25%; top: -18px")}>
              {"A"}
            </span>
            <span className="zone" style={css("left: 50%; top: -18px")}>
              {"B"}
            </span>
            <span className="zone" style={css("left: 75%; top: -18px")}>
              {"C"}
            </span>
            {" "}
            <span className="zone" style={css("left: -16px; top: 20%")}>
              {"1"}
            </span>
            <span className="zone" style={css("left: -16px; top: 45%")}>
              {"2"}
            </span>
            <span className="zone" style={css("left: -16px; top: 70%")}>
              {"3"}
            </span>
            {" "}
            {" "}
            <header id="top" style={css("display: flex; flex-direction: column; gap: 18px; padding-bottom: 56px; border-bottom: 1px dashed rgba(255,255,255,.4)")}>
              <div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px")}>
                <span className="dim" style={css("font-size: 13px; color: #DCE6F5")}>
                  {"DWG 00 · GENERAL ARRANGEMENT · SCALE 1:1"}
                </span>
                {" "}
                <span className="dim" style={css("font-size: 13px; color: #DCE6F5")}>
                  {"FULL-STACK DEVELOPER / FOUNDER"}
                </span>
              </div>
              {" "}
              <svg viewBox="0 0 1000 230" role="img" aria-label="Draft-ael" style={css("width: 100%; height: auto")}>
                {" "}
                <path className="ln thin" d="M20 18 V40 M980 18 V40 M20 29 H980"></path>
                {" "}
                <path className="ln thin" d="M20 29 l12 -5 v10 Z M980 29 l-12 -5 v10 Z" style={css("fill: #FFFFFF")}></path>
                {" "}
                <text x="500" y="22" textAnchor="middle" className="dim" style={css("font-size: 14px; fill: #DCE6F5")}>
                  {"3 NAMES · 1 BUILDER"}
                </text>
                {" "}
                <text x="500" y="180" textAnchor="middle" style={css(`stroke-dasharray: 900; font-family: 'Josefin Sans', sans-serif; font-weight: 300; font-size: 170px; letter-spacing: 6px; fill: rgba(255,255,255,${v.titleFill}); stroke: #FFFFFF; stroke-width: 2; stroke-dashoffset: ${v.titleDash}; transition: stroke-dashoffset 2.6s cubic-bezier(.5,0,.3,1), fill 1s ease 2.2s`)}>
                  {"DRAFT-AEL"}
                </text>
                {" "}
                <path className="ln thin" d="M40 205 H960" style={css("stroke-dasharray: 8 6")}></path>
                {" "}
                <circle cx="500" cy="205" r="6" className="ln thin"></circle>
              </svg>
              {" "}
              <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; align-items: end")}>
                <p style={css("margin: 0; font-size: 21px; line-height: 1.55; font-weight: 300")}>
                  {"Raphael Gabriel Geronimo. Every product starts as a careful drawing: the plan, the structure, the details, before a single line is built."}
                </p>
                {" "}
                <div style={css("display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-end; align-items: center")}>
                  <span className="note" style={css("font-size: 22px; color: #FFD65C; transform: rotate(-3deg)")}>
                    {"measured twice, built once →"}
                  </span>
                  {" "}
                  <a href="#plans" className="bbtn" style={css("text-decoration: none")}>
                    {"See the drawings"}
                  </a>
                </div>
              </div>
            </header>
            {" "}
            {" "}
            <section id="about" style={css("padding: 56px 0; border-bottom: 1px dashed rgba(255,255,255,.4); display: flex; flex-direction: column; gap: 24px")}>
              <div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 12px")}>
                <h2 className="tech" style={css("margin: 0; font-weight: 600; font-size: clamp(28px, 4vw, 44px)")}>
                  {"DWG 01 · Floor plan"}
                </h2>
                {" "}
                <span className="note" style={css("font-size: 20px; color: #FFD65C")}>
                  {"tap a room. every skill has its own space."}
                </span>
              </div>
              {" "}
              <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; align-items: center")}>
                <svg viewBox="0 0 600 400" aria-hidden="true" style={css("width: 100%; height: auto")}>
                  {" "}
                  <rect className="room" x="20" y="20" width="330" height="240" fill="#FFD65C" fillOpacity={v.rf.r1} onClick={v.pick1}></rect>
                  {" "}
                  <rect className="room" x="350" y="20" width="230" height="170" fill="#FFD65C" fillOpacity={v.rf.r2} onClick={v.pick2}></rect>
                  {" "}
                  <rect className="room" x="350" y="190" width="230" height="190" fill="#FFD65C" fillOpacity={v.rf.r3} onClick={v.pick3}></rect>
                  {" "}
                  <rect className="room" x="20" y="260" width="330" height="120" fill="#FFD65C" fillOpacity={v.rf.r4} onClick={v.pick4}></rect>
                  {" "}
                  {" "}
                  <path d="M20 20 H580 V380 H20 Z" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="miter" style={css("pointer-events: none")}></path>
                  {" "}
                  <path d="M350 20 V120 M350 170 V380 M350 190 H440 M490 190 H580 M20 260 H180 M230 260 H350" fill="none" stroke="#FFFFFF" strokeWidth="5" style={css("pointer-events: none")}></path>
                  {" "}
                  {" "}
                  <path d="M350 120 A50 50 0 0 1 400 170 M440 190 A50 50 0 0 0 490 240 M180 260 A50 50 0 0 1 230 310" className="ln thin" style={css("pointer-events: none")}></path>
                  {" "}
                  {" "}
                  <g className="ln thin" style={css("pointer-events: none")}>
                    <rect x="60" y="60" width="140" height="60" rx="10"></rect>
                    <rect x="230" y="70" width="80" height="80"></rect>
                    <circle cx="130" cy="185" r="30"></circle>
                    {" "}
                    <rect x="390" y="50" width="150" height="56"></rect>
                    <circle cx="465" cy="135" r="16"></circle>
                    {" "}
                    <rect x="380" y="290" width="70" height="70"></rect>
                    <rect x="470" y="290" width="80" height="70"></rect>
                    <path d="M380 260 H550"></path>
                    {" "}
                    <rect x="60" y="300" width="60" height="50" rx="25"></rect>
                    <circle cx="250" cy="320" r="22"></circle>
                  </g>
                  {" "}
                  <g className="tech" style={css("font-size: 15px; fill: #FFFFFF; pointer-events: none; letter-spacing: 2px")}>
                    <text x="185" y="236" textAnchor="middle">
                      {"FRONT END"}
                    </text>
                    {" "}
                    <text x="465" y="172" textAnchor="middle">
                      {"BUSINESS"}
                    </text>
                    {" "}
                    <text x="465" y="276" textAnchor="middle">
                      {"BACK END"}
                    </text>
                    {" "}
                    <text x="185" y="366" textAnchor="middle">
                      {"COFFEE NOOK"}
                    </text>
                  </g>
                  {" "}
                  <g className="dim" style={css("font-size: 11px; fill: #DCE6F5; pointer-events: none")}>
                    <text x="185" y="252" textAnchor="middle">
                      {"LIVING · WHERE PEOPLE HANG OUT"}
                    </text>
                  </g>
                  {" "}
                  <path d="M20 396 H580" className="ln thin" style={css("stroke-dasharray: 4 4; pointer-events: none")}></path>
                </svg>
                {" "}
                <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                  {(v.rooms || []).map((r, __i0) => (
                    <React.Fragment key={__i0}>
                      <button type="button" className={`tab ${r.cls}`} onClick={r.pick} aria-pressed={r.pressed}>
                        <span className="tech" style={css("font-weight: 700; font-size: 16px")}>
                          {r.name}{" "}
                          <span className="dim" style={css("text-transform: none; letter-spacing: 0; font-weight: 400; font-size: 12px; color: #DCE6F5")}>
                            {"· "}{r.room}
                          </span>
                        </span>
                        {" "}
                        {r.open ? (
                          <>
                            <span style={css("font-size: 16px; line-height: 1.5; font-weight: 300")}>
                              {r.body}
                            </span>
                          </>
                        ) : null}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
            {" "}
            {" "}
            <section id="plans" style={css("padding: 56px 0; border-bottom: 1px dashed rgba(255,255,255,.4); display: flex; flex-direction: column; gap: 28px")}>
              <div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 12px")}>
                <h2 className="tech" style={css("margin: 0; font-weight: 600; font-size: clamp(28px, 4vw, 44px)")}>
                  {"DWG 02–04 · Projects"}
                </h2>
                {" "}
                <button type="button" className="bbtn" onClick={v.buildAll}>
                  {v.buildAllLabel}
                </button>
              </div>
              {" "}
              <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px")}>
                {(v.projects || []).map((p, __i0) => (
                  <React.Fragment key={__i0}>
                    <article style={css("display: flex; flex-direction: column; gap: 14px")}>
                      <div style={css("position: relative")}>
                        <svg viewBox="0 0 400 300" aria-hidden="true" style={css("width: 100%; height: auto; display: block")}>
                          <rect x="30" y="20" width="340" height="230" rx="8" className="ln draw" pathLength="1" style={css(`stroke-dashoffset: ${p.dash}`)}></rect>
                          {" "}
                          <path d="M30 46 H370" className="ln draw" pathLength="1" style={css(`stroke-dashoffset: ${p.dash}; transition-delay: .2s`)}></path>
                          {" "}
                          <circle cx="46" cy="33" r="4" className="ln thin"></circle>
                          <circle cx="60" cy="33" r="4" className="ln thin"></circle>
                          <circle cx="74" cy="33" r="4" className="ln thin"></circle>
                          {" "}
                          <rect x="50" y="62" width="300" height="70" className="ln draw" pathLength="1" style={css(`stroke-dashoffset: ${p.dash}; transition-delay: .35s`)}></rect>
                          {" "}
                          <path d="M50 62 L350 132 M350 62 L50 132" className="ln thin draw" pathLength="1" style={css(`stroke-dashoffset: ${p.dash}; transition-delay: .5s`)}></path>
                          {" "}
                          <rect x="50" y="148" width="90" height="82" className="ln draw" pathLength="1" style={css(`stroke-dashoffset: ${p.dash}; transition-delay: .6s`)}></rect>
                          {" "}
                          <rect x="155" y="148" width="90" height="82" className="ln draw" pathLength="1" style={css(`stroke-dashoffset: ${p.dash}; transition-delay: .7s`)}></rect>
                          {" "}
                          <rect x="260" y="148" width="90" height="82" className="ln draw" pathLength="1" style={css(`stroke-dashoffset: ${p.dash}; transition-delay: .8s`)}></rect>
                          {" "}
                          {" "}
                          <path d="M30 268 V284 M370 268 V284 M30 276 H370" className="ln thin"></path>
                          {" "}
                          <text x="200" y="296" textAnchor="middle" className="dim" style={css("font-size: 11px; fill: #DCE6F5")}>
                            {p.dimW}
                          </text>
                          {" "}
                          <path d="M384 20 H394 M384 250 H394 M389 20 V250" className="ln thin"></path>
                          {" "}
                          <text x="0" y="0" transform="translate(16 135) rotate(-90)" textAnchor="middle" className="dim" style={css("font-size: 11px; fill: #DCE6F5")}>
                            {p.dimH}
                          </text>
                        </svg>
                        {" "}
                        {" "}
                        <div style={css(`position: absolute; left: 7.5%; top: 6.7%; width: 85%; height: 76.7%; border-radius: 6px; background: #F3F6FA; color: #1D3F73; display: flex; align-items: center; justify-content: center; font-family: 'Space Mono', monospace; font-size: 13px; opacity: ${p.builtOp}; transform: scale(${p.builtSc}); transition: opacity .6s ease ${p.delay}, transform .6s cubic-bezier(.3,1.4,.5,1) ${p.delay}; box-shadow: 0 20px 40px rgba(0,0,0,.35)`)}>
                          {shot(C.projects[p.i])}
                        </div>
                      </div>
                      {" "}
                      <div style={css("display: flex; justify-content: space-between; align-items: baseline; gap: 10px; border-top: 1.5px solid rgba(255,255,255,.85); padding-top: 12px")}>
                        <span className="dim" style={css("font-size: 12px; color: #DCE6F5")}>
                          {p.dwg}
                        </span>
                        {" "}
                        <span className="dim" style={css("font-size: 12px; color: #FFD65C")}>
                          {p.status}
                        </span>
                      </div>
                      {" "}
                      <h3 className="tech" style={css("margin: 0; font-weight: 700; font-size: 24px")}>
                        {C.projects[p.i].name}
                      </h3>
                      {" "}
                      <p style={css("margin: 0; font-size: 17px; line-height: 1.5; font-weight: 300")}>
                        {p.kind}{" "}{C.projects[p.i].summary}
                      </p>
                      {" "}
                      <div style={css("display: flex; flex-wrap: wrap; gap: 10px; align-items: center")}>
                        <button type="button" className={`bbtn ${p.btnCls}`} onClick={p.toggle}>
                          {p.btn}
                        </button>
                        {" "}
                        <a href="#plans" className="note" style={css("font-size: 19px")}>
                          {"see the build →"}
                        </a>
                      </div>
                    </article>
                  </React.Fragment>
                ))}
              </div>
            </section>
            {" "}
            {" "}
            <section id="venture" style={css("padding: 56px 0; border-bottom: 1px dashed rgba(255,255,255,.4); display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; align-items: center")}>
              <svg viewBox="0 0 500 320" aria-hidden="true" style={css("width: 100%; height: auto")}>
                <path d="M20 40 L460 20 L480 290 L40 300 Z" className="ln thin" style={css("stroke-dasharray: 10 6")}></path>
                {" "}
                <rect x="140" y="90" width="200" height="140" className="ln" style={css("fill: rgba(255,255,255,.08)")}></rect>
                {" "}
                <path d="M140 90 L340 230 M340 90 L140 230" className="ln thin"></path>
                {" "}
                <rect x="230" y="230" width="20" height="40" className="ln thin"></rect>
                {" "}
                <path d="M240 270 V300" className="ln thin" style={css("stroke-dasharray: 4 4")}></path>
                {" "}
                <g className="ln thin">
                  <circle cx="70" cy="110" r="16"></circle>
                  <circle cx="96" cy="200" r="20"></circle>
                  <circle cx="400" cy="250" r="18"></circle>
                  <circle cx="410" cy="80" r="14"></circle>
                </g>
                {" "}
                <g transform="translate(430 150)">
                  <circle r="22" className="ln thin"></circle>
                  <path d="M0 -20 L8 8 L0 2 L-8 8 Z" style={css("fill: #FFFFFF")}></path>
                  <text y="-28" textAnchor="middle" className="dim" style={css("font-size: 12px; fill: #FFFFFF")}>
                    {"N"}
                  </text>
                </g>
                {" "}
                <text x="240" y="166" textAnchor="middle" className="tech" style={css("font-size: 16px; fill: #FFFFFF; letter-spacing: 2px")}>
                  {up(C.company.name)}
                </text>
              </svg>
              {" "}
              <div style={css("display: flex; flex-direction: column; gap: 16px")}>
                <span className="dim" style={css("font-size: 13px; color: #DCE6F5")}>
                  {"DWG 05 · SITE PLAN · FOUNDER OF"}
                </span>
                {" "}
                <h2 className="tech" style={css("margin: 0; font-weight: 700; font-size: clamp(36px, 5vw, 60px); line-height: 1")}>
                  {C.company.name}
                </h2>
                {" "}
                <p style={css("margin: 0; font-size: 19px; line-height: 1.55; font-weight: 300")}>
                  {C.company.summary}{" Not one of my builds. This is the one I founded and run."}
                </p>
                {" "}
                <a href="#venture" className="bbtn" style={css("text-decoration: none; align-self: flex-start")}>
                  {"Visit the site"}
                </a>
              </div>
            </section>
            {" "}
            {" "}
            <section id="contact" style={css("padding-top: 56px; display: flex; flex-direction: column; gap: 22px")}>
              <div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 12px")}>
                <h2 className="tech" style={css("margin: 0; font-weight: 600; font-size: clamp(28px, 4vw, 44px)")}>
                  {"Title block"}
                </h2>
                {" "}
                <span className="note" style={css("font-size: 20px; color: #FFD65C")}>
                  {"every good drawing ends with who to call."}
                </span>
              </div>
              {" "}
              <div style={css("position: relative; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); border: 2px solid #FFFFFF")}>
                <div className="tb">
                  <span className="k">
                    {"PROJECT"}
                  </span>
                  <span className="v">
                    {"Your next one"}
                  </span>
                </div>
                {" "}
                <div className="tb">
                  <span className="k">
                    {"DRAWN & BUILT BY"}
                  </span>
                  <span className="v">
                    {"Raphael Gabriel Geronimo"}
                  </span>
                </div>
                {" "}
                <div className="tb" style={css("grid-column: span 2")}>
                  <span className="k">
                    {"CONTACT"}
                  </span>
                  <a href={`mailto:${C.email}`} className="v" style={css("text-transform: none; font-size: 22px")}>
                    {C.email}
                  </a>
                </div>
                {" "}
                <div className="tb">
                  <span className="k">
                    {"ALSO AT"}
                  </span>
                  <span style={css("display: flex; flex-wrap: wrap; gap: 6px 16px; font-weight: 600; font-size: 16px")}>
                    <a href={C.links.github} target="_blank" rel="noreferrer">
                      {"GitHub"}
                    </a>
                    <a href={C.links.linkedin} target="_blank" rel="noreferrer">
                      {"LinkedIn"}
                    </a>
                    <a href={C.company.url} target="_blank" rel="noreferrer">
                      {C.company.siteLabel}
                    </a>
                  </span>
                </div>
                {" "}
                <div className="tb">
                  <span className="k">
                    {"SHEET"}
                  </span>
                  <span className="v">
                    {"01 of 01"}
                  </span>
                </div>
                {" "}
                <div className="tb">
                  <span className="k">
                    {"REV"}
                  </span>
                  <span className="v">
                    {v.rev}
                  </span>
                </div>
                {" "}
                <div className="tb" style={css("align-items: flex-start; justify-content: center")}>
                  <button type="button" className={`bbtn ${v.stampBtnCls}`} onClick={v.stamp}>
                    {v.stampLabel}
                  </button>
                </div>
                {" "}
                <div aria-hidden="true" style={css(`position: absolute; right: 6%; top: -38px; width: 170px; height: 170px; border: 4px solid #FFD65C; border-radius: 50%; color: #FFD65C; display: flex; align-items: center; justify-content: center; text-align: center; font-family: 'Josefin Sans', sans-serif; font-weight: 700; font-size: 18px; letter-spacing: .1em; line-height: 1.2; pointer-events: none; opacity: ${v.stampOp}; transform: rotate(-14deg) scale(${v.stampSc}); transition: transform .35s cubic-bezier(.5,2,.5,.8), opacity .15s; background: rgba(29,63,115,.6)`)}>
                  {"APPROVED"}
                  <br />
                  {"FOR"}
                  <br />
                  {"CONSTRUCTION"}
                </div>
              </div>
              {" "}
              <span className="dim" style={css("font-size: 12px; color: #DCE6F5")}>
                {"© Raphael Gabriel Geronimo · all dimensions in pixels · do not scale drawing"}
              </span>
            </section>
          </div>
        </div>
      </div>
      </>
    );
  }
}
