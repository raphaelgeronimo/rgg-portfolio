'use client';
// Generated from the Retronimo design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#008080}\na{color:#000080}a:hover{color:#0000FF}\n.desk{position:relative;height:calc(100vh - 44px - 40px);min-height:680px;overflow:hidden;background-color:#008080;background-image:radial-gradient(rgba(0,0,0,.06) 1px,transparent 1.5px);background-size:4px 4px;font-family:Tahoma,Verdana,'Segoe UI',sans-serif;font-size:13px;color:#000000}\n.win{position:absolute;background:#C0C0C0;border:2px solid;border-color:#FFFFFF #404040 #404040 #FFFFFF;box-shadow:1px 1px 0 #000000;color:#000000}\n.bar{display:flex;justify-content:space-between;align-items:center;padding:3px 3px 3px 6px;font-weight:700;font-size:13px;color:#FFFFFF;cursor:grab;user-select:none;touch-action:none}\n.bar:active{cursor:grabbing}\n.wb{width:22px;height:20px;background:#C0C0C0;border:2px solid;border-color:#FFFFFF #404040 #404040 #FFFFFF;font-weight:700;font-size:12px;line-height:1;cursor:pointer;padding:0;color:#000000;margin-left:2px}\n.wb:active,.b95:active{border-color:#404040 #FFFFFF #FFFFFF #404040}\n.b95{background:#C0C0C0;border:2px solid;border-color:#FFFFFF #404040 #404040 #FFFFFF;padding:6px 16px;font-family:Tahoma,Verdana,sans-serif;font-size:13px;color:#000000;cursor:pointer;text-decoration:none;display:inline-block;min-height:30px;box-sizing:border-box}\n.inset{background:#FFFFFF;border:2px solid;border-color:#404040 #FFFFFF #FFFFFF #404040}\n.menu{display:flex;gap:14px;padding:3px 8px;font-size:13px}\n.menu span:first-letter{text-decoration:underline}\n.icon{background:transparent;border:1px dotted transparent;color:#FFFFFF;font-family:Tahoma,Verdana,sans-serif;font-size:13px;display:flex;flex-direction:column;align-items:center;gap:6px;width:92px;padding:6px 4px;cursor:pointer;text-shadow:1px 1px 0 #000000}\n.icon:hover,.icon:focus{border-color:#FFFFFF;background:rgba(0,0,128,.55)}\n.row{display:grid;grid-template-columns:28px minmax(0,1.6fr) minmax(0,1fr) minmax(0,2.4fr);gap:10px;align-items:center;padding:6px 8px;text-decoration:none;color:#000000}\n.row:hover{background:#000080;color:#FFFFFF}\n.task{display:flex;align-items:center;gap:6px;max-width:170px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:400}\n.smi{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:transparent;border:0;padding:8px 12px;font-family:Tahoma,Verdana,sans-serif;font-size:14px;cursor:pointer;color:#000000}\n.smi:hover{background:#000080;color:#FFFFFF}\n@media (max-width:760px){.desk{height:auto;min-height:0;overflow:visible;padding:12px;display:flex;flex-direction:column;gap:12px}.win{position:static !important;width:auto !important}.icons{flex-direction:row !important;flex-wrap:wrap}}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=VT323&display=swap"];

export default class RetroNimo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  defs() {
    return {
      welcome: { label: 'Welcome', x: 150, y: 24, open: true },
      projects: { label: 'My Projects', x: 260, y: 250, open: true },
      about: { label: 'about.txt', x: 520, y: 90, open: false },
      biz: { label: 'business.exe', x: 640, y: 200, open: false },
      mail: { label: 'contact.eml', x: 420, y: 150, open: false },
      bin: { label: 'Recycle Bin', x: 760, y: 320, open: false }
    };
  }
  componentDidMount() {
    this.tickClock();
    this.clockTimer = setInterval(() => this.tickClock(), 15000);
    this.onMove = (e) => {
      if (!this.dragging) return;
      const d = this.dragging;
      const pos = Object.assign({}, (this.state && this.state.pos) || {});
      const maxX = this.desk ? this.desk.clientWidth - 80 : 1200;
      const maxY = this.desk ? this.desk.clientHeight - 30 : 700;
      pos[d.id] = { x: Math.max(-200, Math.min(maxX, e.clientX - d.dx)), y: Math.max(0, Math.min(maxY, e.clientY - d.dy)) };
      this.setState({ pos: pos });
    };
    this.onUp = () => { this.dragging = null; };
    document.addEventListener('pointermove', this.onMove);
    document.addEventListener('pointerup', this.onUp);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
    document.removeEventListener('pointermove', this.onMove);
    document.removeEventListener('pointerup', this.onUp);
  }
  tickClock() {
    const d = new Date();
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    this.setState({ clock: h + ':' + m + ' ' + ap });
  }
  renderVals() {
    const s = this.state || {};
    const defs = this.defs();
    const ids = Object.keys(defs);
    const open = Object.assign({}, ...ids.map((id) => ({ [id]: defs[id].open })), s.open || {});
    const min = s.min || {};
    const pos = s.pos || {};
    const z = s.z || { welcome: 11, projects: 10 };
    const top = ids.filter((id) => open[id] && !min[id]).sort((a, b) => (z[b] || 0) - (z[a] || 0))[0];
    const setS = (patch) => this.setState(patch);
    const focus = (id) => {
      const cur = (this.state && this.state.z) || z;
      const hi = Math.max(10, ...Object.values(cur)) + 1;
      setS({ z: Object.assign({}, cur, { [id]: hi }) });
    };
    const openWin = (id) => {
      setS({ open: Object.assign({}, open, { [id]: true }), min: Object.assign({}, min, { [id]: false }), menuOpen: false });
      focus(id);
    };
    const W = {};
    ids.forEach((id) => {
      const p = pos[id] || defs[id];
      W[id] = {
        show: !!open[id] && !min[id],
        x: p.x, y: p.y, z: z[id] || 5,
        bar: top === id ? 'linear-gradient(90deg, #000080, #1084D0)' : '#808080',
        focus: () => focus(id),
        drag: (e) => { const q = (this.state && this.state.pos && this.state.pos[id]) || defs[id]; this.dragging = { id: id, dx: e.clientX - q.x, dy: e.clientY - q.y }; focus(id); },
        min: () => setS({ min: Object.assign({}, min, { [id]: true }) }),
        close: () => setS({ open: Object.assign({}, open, { [id]: false }) })
      };
    });
    const I = {};
    ids.forEach((id) => { I[id] = () => openWin(id); });
    const tasks = ids.filter((id) => open[id]).map((id) => {
      const active = top === id && !min[id];
      return {
        label: defs[id].label,
        border: active ? '#404040 #FFFFFF #FFFFFF #404040' : '#FFFFFF #404040 #404040 #FFFFFF',
        bg: active ? '#E0E0E0' : '#C0C0C0',
        click: () => {
          if (min[id]) { openWin(id); return; }
          if (active) { setS({ min: Object.assign({}, min, { [id]: true }) }); return; }
          focus(id);
        }
      };
    });
    return {
      W: W, I: I, tasks: tasks,
      menuOpen: !!s.menuOpen,
      startBorder: s.menuOpen ? '#404040 #FFFFFF #FFFFFF #404040' : '#FFFFFF #404040 #404040 #FFFFFF',
      toggleMenu: () => setS({ menuOpen: !s.menuOpen }),
      off: !!s.off,
      shutDown: () => setS({ off: true, menuOpen: false }),
      restart: () => setS({ off: false }),
      clock: s.clock || '12:00 PM',
      stop: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
      deskRef: (el) => { this.desk = el; }
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; background: #008080")}>
        <div style={css("background: #000080; color: #FFFFFF; font-family: Tahoma, Verdana, sans-serif; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center")}>
          <span>
            {"Theme: Retro-nimo"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #FFFF66; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #FFFF66; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <div className="desk" ref={v.deskRef}>
          <div className="icons" style={css("position: absolute; left: 12px; top: 12px; display: flex; flex-direction: column; gap: 8px; z-index: 1")}>
            <button type="button" className="icon" onClick={v.I.projects}>
              <svg aria-hidden="true" width="40" height="34" viewBox="0 0 44 36">
                <path d="M2 6h14l4 4h22v24H2z" fill="#FFD84D" stroke="#000000" strokeWidth="2"></path>
              </svg>
              <span>
                {"My Projects"}
              </span>
            </button>
            {" "}
            <button type="button" className="icon" onClick={v.I.about}>
              <svg aria-hidden="true" width="32" height="40" viewBox="0 0 36 44">
                <path d="M2 2h22l10 10v30H2z" fill="#FFFFFF" stroke="#000000" strokeWidth="2"></path>
                <path d="M8 18h20M8 24h20M8 30h14" stroke="#000080" strokeWidth="2"></path>
              </svg>
              <span>
                {"about.txt"}
              </span>
            </button>
            {" "}
            <button type="button" className="icon" onClick={v.I.biz}>
              <svg aria-hidden="true" width="40" height="36" viewBox="0 0 44 40">
                <rect x="2" y="4" width="40" height="28" fill="#C0C0C0" stroke="#000000" strokeWidth="2"></rect>
                <rect x="6" y="8" width="32" height="20" fill="#000080"></rect>
                <path d="M14 36h16" stroke="#000000" strokeWidth="3"></path>
              </svg>
              <span>
                {"business.exe"}
              </span>
            </button>
            {" "}
            <button type="button" className="icon" onClick={v.I.mail}>
              <svg aria-hidden="true" width="40" height="30" viewBox="0 0 44 32">
                <rect x="2" y="2" width="40" height="28" fill="#FFFFFF" stroke="#000000" strokeWidth="2"></rect>
                <path d="M2 2l20 16L42 2" fill="none" stroke="#000000" strokeWidth="2"></path>
              </svg>
              <span>
                {"contact.eml"}
              </span>
            </button>
            {" "}
            <button type="button" className="icon" onClick={v.I.bin}>
              <svg aria-hidden="true" width="32" height="38" viewBox="0 0 34 40">
                <path d="M4 8h26l-3 30H7z" fill="#E0E0E0" stroke="#000000" strokeWidth="2"></path>
                <path d="M2 8h30M12 4h10v4M12 14v18M17 14v18M22 14v18" stroke="#000000" strokeWidth="2" fill="none"></path>
              </svg>
              <span>
                {"Recycle Bin"}
              </span>
            </button>
          </div>
          {" "}
          {" "}
          {v.W.welcome.show ? (
            <>
              <section id="top" className="win" onPointerDown={v.W.welcome.focus} style={css(`left: ${v.W.welcome.x}px; top: ${v.W.welcome.y}px; z-index: ${v.W.welcome.z}; width: 560px`)}>
                <div className="bar" onPointerDown={v.W.welcome.drag} style={css(`background: ${v.W.welcome.bar}`)}>
                  <span>
                    {"Welcome — retro-nimo.exe"}
                  </span>
                  <span>
                    <button type="button" className="wb" aria-label="Minimise" onPointerDown={v.stop} onClick={v.W.welcome.min}>
                      {"_"}
                    </button>
                    <button type="button" className="wb" aria-label="Close" onPointerDown={v.stop} onClick={v.W.welcome.close}>
                      {"×"}
                    </button>
                  </span>
                </div>
                {" "}
                <div style={css("padding: 22px; display: flex; flex-direction: column; gap: 14px")}>
                  <div style={css("font-size: 12px")}>
                    {"Full-stack developer · Founder · Professional tech geek"}
                  </div>
                  {" "}
                  <h1 style={css("margin: 0; font-family: 'VT323', monospace; font-weight: 400; font-size: clamp(64px, 9vw, 116px); line-height: 0.82; color: #000080")}>
                    {"Retro-nimo"}
                  </h1>
                  {" "}
                  <p style={css("margin: 0; font-size: 14px; line-height: 1.6")}>
                    {"Hi, I'm Raphael Gabriel Geronimo. I've been building things on computers since computers looked like this. Drag the windows around, open the icons, poke the Start menu."}
                  </p>
                  {" "}
                  <div className="inset" style={css("padding: 3px")}>
                    <div style={css("height: 18px; width: 86%; background: repeating-linear-gradient(90deg, #000080 0 14px, transparent 14px 17px)")}></div>
                  </div>
                  {" "}
                  <div style={css("font-size: 12px")}>
                    {"Loading personality… 86% · Please do not turn off your computer."}
                  </div>
                  {" "}
                  <div style={css("display: flex; flex-wrap: wrap; gap: 8px")}>
                    <button type="button" className="b95" onClick={v.I.projects}>
                      <u>
                        {"O"}
                      </u>
                      {"pen My Projects"}
                    </button>
                    <button type="button" className="b95" onClick={v.I.about}>
                      <u>
                        {"R"}
                      </u>
                      {"ead about.txt"}
                    </button>
                  </div>
                </div>
              </section>
            </>
          ) : null}
          {" "}
          {" "}
          {v.W.projects.show ? (
            <>
              <section id="work" className="win" onPointerDown={v.W.projects.focus} style={css(`left: ${v.W.projects.x}px; top: ${v.W.projects.y}px; z-index: ${v.W.projects.z}; width: 660px`)}>
                <div className="bar" onPointerDown={v.W.projects.drag} style={css(`background: ${v.W.projects.bar}`)}>
                  <span>
                    {"C:\\RGG\\My Projects"}
                  </span>
                  <span>
                    <button type="button" className="wb" aria-label="Minimise" onPointerDown={v.stop} onClick={v.W.projects.min}>
                      {"_"}
                    </button>
                    <button type="button" className="wb" aria-label="Close" onPointerDown={v.stop} onClick={v.W.projects.close}>
                      {"×"}
                    </button>
                  </span>
                </div>
                {" "}
                <div className="menu" aria-hidden="true">
                  <span>
                    {"File"}
                  </span>
                  <span>
                    {"Edit"}
                  </span>
                  <span>
                    {"View"}
                  </span>
                  <span>
                    {"Help"}
                  </span>
                </div>
                {" "}
                <div style={css("padding: 0 6px 6px")}>
                  <div className="inset" style={css("padding: 4px 6px; margin-bottom: 6px; font-size: 12px")}>
                    {"Address: C:\\RGG\\My Projects"}
                  </div>
                  {" "}
                  <div className="inset">
                    <div className="row" style={css("font-weight: 700; border-bottom: 1px solid #C0C0C0; pointer-events: none")}>
                      <span></span>
                      <span>
                        {"Name"}
                      </span>
                      <span>
                        {"Type"}
                      </span>
                      <span>
                        {"What it did"}
                      </span>
                    </div>
                    {" "}
                    <a href="#work" className="row">
                      <svg aria-hidden="true" width="20" height="24" viewBox="0 0 36 44">
                        <path d="M2 2h22l10 10v30H2z" fill="#FFFFFF" stroke="#000000" strokeWidth="3"></path>
                        <rect x="8" y="20" width="20" height="14" fill="#000080"></rect>
                      </svg>
                      <span>
                        {C.projects[0].name}{".exe"}
                      </span>
                      <span>
                        {C.projects[0].type}
                      </span>
                      <span>
                        {C.projects[0].summary}
                      </span>
                    </a>
                    {" "}
                    <a href="#work" className="row">
                      <svg aria-hidden="true" width="20" height="24" viewBox="0 0 36 44">
                        <path d="M2 2h22l10 10v30H2z" fill="#FFFFFF" stroke="#000000" strokeWidth="3"></path>
                        <rect x="8" y="20" width="20" height="14" fill="#008080"></rect>
                      </svg>
                      <span>
                        {C.projects[1].name}{".dll"}
                      </span>
                      <span>
                        {C.projects[1].type}
                      </span>
                      <span>
                        {C.projects[1].summary}
                      </span>
                    </a>
                    {" "}
                    <a href="#work" className="row">
                      <svg aria-hidden="true" width="20" height="24" viewBox="0 0 36 44">
                        <path d="M2 2h22l10 10v30H2z" fill="#FFFFFF" stroke="#000000" strokeWidth="3"></path>
                        <rect x="8" y="20" width="20" height="14" fill="#800080"></rect>
                      </svg>
                      <span>
                        {C.projects[2].name}{".app"}
                      </span>
                      <span>
                        {C.projects[2].type}
                      </span>
                      <span>
                        {C.projects[2].summary}
                      </span>
                    </a>
                  </div>
                </div>
                {" "}
                <div style={css("border-top: 1px solid #808080; padding: 3px 8px; font-size: 12px")}>
                  {"3 object(s) · [Add screenshots by double-clicking — or by sending them to me]"}
                </div>
              </section>
            </>
          ) : null}
          {" "}
          {" "}
          {v.W.about.show ? (
            <>
              <section id="about" className="win" onPointerDown={v.W.about.focus} style={css(`left: ${v.W.about.x}px; top: ${v.W.about.y}px; z-index: ${v.W.about.z}; width: 470px`)}>
                <div className="bar" onPointerDown={v.W.about.drag} style={css(`background: ${v.W.about.bar}`)}>
                  <span>
                    {"about.txt — Notepad"}
                  </span>
                  <span>
                    <button type="button" className="wb" aria-label="Minimise" onPointerDown={v.stop} onClick={v.W.about.min}>
                      {"_"}
                    </button>
                    <button type="button" className="wb" aria-label="Close" onPointerDown={v.stop} onClick={v.W.about.close}>
                      {"×"}
                    </button>
                  </span>
                </div>
                {" "}
                <div className="menu" aria-hidden="true">
                  <span>
                    {"File"}
                  </span>
                  <span>
                    {"Edit"}
                  </span>
                  <span>
                    {"Search"}
                  </span>
                  <span>
                    {"Help"}
                  </span>
                </div>
                {" "}
                <div className="inset" style={css("margin: 0 6px 6px; padding: 12px; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.7; white-space: pre-wrap")}>
                  {"A tech geek since the dial-up days. "}{C.bio.origin}{" FRONT END ...... "}{C.skills.frontend}{" BACK END ....... "}{C.skills.backend}{" BUSINESS ....... "}{C.skills.business}{" Currently: running "}{C.company.name}{"."}
                </div>
              </section>
            </>
          ) : null}
          {" "}
          {" "}
          {v.W.biz.show ? (
            <>
              <section id="venture" className="win" onPointerDown={v.W.biz.focus} style={css(`left: ${v.W.biz.x}px; top: ${v.W.biz.y}px; z-index: ${v.W.biz.z}; width: 420px`)}>
                <div className="bar" onPointerDown={v.W.biz.drag} style={css(`background: ${v.W.biz.bar}`)}>
                  <span>
                    {"business.exe"}
                  </span>
                  <span>
                    <button type="button" className="wb" aria-label="Close" onPointerDown={v.stop} onClick={v.W.biz.close}>
                      {"×"}
                    </button>
                  </span>
                </div>
                {" "}
                <div style={css("padding: 18px; display: flex; gap: 16px; align-items: flex-start")}>
                  <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" style={css("flex: 0 0 auto")}>
                    <circle cx="20" cy="20" r="18" fill="#000080" stroke="#000000" strokeWidth="2"></circle>
                    <text x="20" y="27" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#FFFFFF">
                      {"i"}
                    </text>
                  </svg>
                  {" "}
                  <div style={css("display: flex; flex-direction: column; gap: 8px")}>
                    <div style={css("font-size: 12px")}>
                      {"Founder of:"}
                    </div>
                    {" "}
                    <div style={css("font-family: 'VT323', monospace; font-size: 44px; line-height: 0.9; color: #000080")}>
                      {C.company.name}
                    </div>
                    {" "}
                    <p style={css("margin: 0; font-size: 13px; line-height: 1.5")}>
                      {C.company.summary}
                    </p>
                  </div>
                </div>
                {" "}
                <div style={css("display: flex; gap: 8px; justify-content: flex-end; padding: 0 14px 14px")}>
                  <a href="#venture" className="b95">
                    {"Visit site"}
                  </a>
                  <button type="button" className="b95" onClick={v.W.biz.close} style={css("min-width: 76px")}>
                    {"OK"}
                  </button>
                </div>
              </section>
            </>
          ) : null}
          {" "}
          {" "}
          {v.W.mail.show ? (
            <>
              <section id="contact" className="win" onPointerDown={v.W.mail.focus} style={css(`left: ${v.W.mail.x}px; top: ${v.W.mail.y}px; z-index: ${v.W.mail.z}; width: 540px`)}>
                <div className="bar" onPointerDown={v.W.mail.drag} style={css(`background: ${v.W.mail.bar}`)}>
                  <span>
                    {"New Message — contact.eml"}
                  </span>
                  <span>
                    <button type="button" className="wb" aria-label="Minimise" onPointerDown={v.stop} onClick={v.W.mail.min}>
                      {"_"}
                    </button>
                    <button type="button" className="wb" aria-label="Close" onPointerDown={v.stop} onClick={v.W.mail.close}>
                      {"×"}
                    </button>
                  </span>
                </div>
                {" "}
                <div style={css("padding: 12px; display: flex; flex-direction: column; gap: 8px")}>
                  <div style={css("display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 6px; align-items: center")}>
                    <span>
                      {"To:"}
                    </span>
                    <div className="inset" style={css("padding: 5px 8px")}>
                      <a href={`mailto:${C.email}`}>
                        {C.email}
                      </a>
                    </div>
                  </div>
                  {" "}
                  <div style={css("display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 6px; align-items: center")}>
                    <span>
                      {"Subject:"}
                    </span>
                    <div className="inset" style={css("padding: 5px 8px")}>
                      {"Let's build something"}
                    </div>
                  </div>
                  {" "}
                  <div className="inset" style={css("padding: 10px; min-height: 90px; line-height: 1.7")}>
                    {"Hi Raphael,"}
                    <br />
                    {"I found your desktop. Also see "}
                    <a href={C.links.github} target="_blank" rel="noreferrer">
                      {"GitHub"}
                    </a>
                    {", "}
                    <a href={C.links.linkedin} target="_blank" rel="noreferrer">
                      {"LinkedIn"}
                    </a>
                    {" and "}
                    <a href={C.company.url} target="_blank" rel="noreferrer">
                      {C.company.siteLabel}
                    </a>
                    {"."}
                  </div>
                  {" "}
                  <div style={css("display: flex; justify-content: flex-end")}>
                    <a href="#contact" className="b95">
                      <u>
                        {"S"}
                      </u>
                      {"end"}
                    </a>
                  </div>
                </div>
              </section>
            </>
          ) : null}
          {" "}
          {" "}
          {v.W.bin.show ? (
            <>
              <section className="win" onPointerDown={v.W.bin.focus} style={css(`left: ${v.W.bin.x}px; top: ${v.W.bin.y}px; z-index: ${v.W.bin.z}; width: 380px`)}>
                <div className="bar" onPointerDown={v.W.bin.drag} style={css(`background: ${v.W.bin.bar}`)}>
                  <span>
                    {"Recycle Bin"}
                  </span>
                  <span>
                    <button type="button" className="wb" aria-label="Close" onPointerDown={v.stop} onClick={v.W.bin.close}>
                      {"×"}
                    </button>
                  </span>
                </div>
                {" "}
                <div className="inset" style={css("margin: 6px; padding: 10px; font-size: 13px; line-height: 1.8")}>
                  {"bugs.txt — 0 KB (all fixed)"}
                  <br />
                  {"excuses.doc — 0 KB"}
                  <br />
                  {"[a project you're glad you deleted].zip"}
                </div>
              </section>
            </>
          ) : null}
          {" "}
          {" "}
          {v.menuOpen ? (
            <>
              <div className="win" style={css("left: 2px; bottom: 2px; z-index: 900; width: 250px; display: flex")}>
                <div aria-hidden="true" style={css("width: 30px; background: #000080; color: #C0C0C0; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 10px")}>
                  <span style={css("writing-mode: vertical-rl; transform: rotate(180deg); font-family: Tahoma, sans-serif; font-weight: 700; font-size: 18px; letter-spacing: 0.04em")}>
                    {"RGG"}
                    <span style={css("color: #FFFFFF")}>
                      {" OS"}
                    </span>
                  </span>
                </div>
                {" "}
                <div style={css("flex: 1; display: flex; flex-direction: column; padding: 2px 0")}>
                  <button type="button" className="smi" onClick={v.I.projects}>
                    {"My Projects"}
                  </button>
                  {" "}
                  <button type="button" className="smi" onClick={v.I.about}>
                    {"About me"}
                  </button>
                  {" "}
                  <button type="button" className="smi" onClick={v.I.biz}>
                    {"My business"}
                  </button>
                  {" "}
                  <button type="button" className="smi" onClick={v.I.mail}>
                    {"Contact"}
                  </button>
                  {" "}
                  <a href="/pro" className="smi" style={css("text-decoration: none")}>
                    {"Professional mode…"}
                  </a>
                  {" "}
                  <div style={css("height: 2px; margin: 4px 6px; border-top: 1px solid #808080; border-bottom: 1px solid #FFFFFF")}></div>
                  {" "}
                  <button type="button" className="smi" onClick={v.shutDown}>
                    {"Shut down…"}
                  </button>
                </div>
              </div>
            </>
          ) : null}
          {" "}
          {" "}
          {v.off ? (
            <>
              <div style={css("position: absolute; inset: 0; z-index: 1000; background: #000000; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px; text-align: center; padding: 24px")}>
                <div style={css("font-family: 'VT323', monospace; font-size: clamp(32px, 5vw, 56px); color: #FF9C1A; line-height: 1.1")}>
                  {"It's now safe to turn off"}
                  <br />
                  {"your computer."}
                </div>
                {" "}
                <div style={css("display: flex; flex-wrap: wrap; gap: 10px; justify-content: center")}>
                  <button type="button" className="b95" onClick={v.restart}>
                    {"Restart"}
                  </button>
                  <a href="/pro" className="b95">
                    {"Switch to professional"}
                  </a>
                </div>
              </div>
            </>
          ) : null}
        </div>
        {" "}
        <footer style={css("height: 40px; box-sizing: border-box; background: #C0C0C0; border-top: 2px solid #FFFFFF; padding: 4px; display: flex; gap: 4px; align-items: center; font-family: Tahoma, Verdana, sans-serif; font-size: 13px; position: relative; z-index: 2")}>
          <button type="button" className="b95" onClick={v.toggleMenu} aria-expanded={v.menuOpen} style={css(`font-weight: 700; display: flex; align-items: center; gap: 6px; padding: 4px 10px; border-color: ${v.startBorder}`)}>
            <svg aria-hidden="true" width="18" height="16" viewBox="0 0 18 16">
              <rect x="1" y="1" width="16" height="11" fill="#000080" stroke="#000000"></rect>
              <rect x="3" y="3" width="12" height="7" fill="#00C0C0"></rect>
              <rect x="6" y="12" width="6" height="3" fill="#404040"></rect>
            </svg>
            {"Start"}
          </button>
          {" "}
          <div style={css("width: 2px; height: 26px; border-left: 1px solid #808080; border-right: 1px solid #FFFFFF; margin: 0 2px")}></div>
          {" "}
          <div style={css("flex: 1; min-width: 0; display: flex; gap: 4px; overflow: hidden")}>
            {(v.tasks || []).map((tk, __i0) => (
              <React.Fragment key={__i0}>
                <button type="button" className="b95 task" onClick={tk.click} style={css(`padding: 4px 10px; border-color: ${tk.border}; background: ${tk.bg}`)}>
                  {tk.label}
                </button>
              </React.Fragment>
            ))}
          </div>
          {" "}
          <div className="inset" style={css("padding: 4px 10px; background: #C0C0C0; white-space: nowrap")}>
            {v.clock}
          </div>
        </footer>
      </div>
      </>
    );
  }
}
