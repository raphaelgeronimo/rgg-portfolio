'use client';
// Generated from the Roughphael design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#6E3820}\na{color:inherit}a:hover{opacity:.8}\n.sheet{position:relative;overflow:hidden;background:linear-gradient(180deg,#6A361F 0%,#82472A 16%,#9E6340 34%,#BC8C5F 52%,#D3B188 70%,#E4CCA6 86%,#EEDEC1 100%)}\n.grainlayer{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:0}\n.coarse{-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 18%,transparent 52%);mask-image:linear-gradient(180deg,#000 0%,#000 18%,transparent 52%)}\n.fine{-webkit-mask-image:linear-gradient(180deg,transparent 14%,#000 40%,#000 66%,transparent 92%);mask-image:linear-gradient(180deg,transparent 14%,#000 40%,#000 66%,transparent 92%)}\n.sheen{position:absolute;left:0;right:0;bottom:0;height:22%;pointer-events:none;z-index:0;background:linear-gradient(100deg,transparent 20%,rgba(255,255,255,.18) 42%,transparent 62%)}\n.inner{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:0 24px}\n.grit{display:inline-flex;align-items:center;gap:10px;font-family:'JetBrains Mono',monospace;font-weight:600;font-size:12px;letter-spacing:.16em}\n.grit::before{content:\"\";width:28px;height:2px;background:currentColor}\n.plank{background-color:#5E3A1C;background-image:repeating-linear-gradient(90deg,rgba(30,16,6,.28) 0 2px,transparent 2px 9px,rgba(255,220,170,.07) 9px 11px,transparent 11px 23px);border-radius:6px;box-shadow:0 10px 24px rgba(30,16,6,.35);transition:transform .2s ease}\n.plank:hover{transform:translateY(-6px) rotate(-.6deg)}\n.block{background:rgba(42,27,16,.9);color:#F2DFB8;border-radius:12px;box-shadow:0 8px 20px rgba(30,16,6,.3)}\n.btnc{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:13px;background:#F6E7C8;color:#1E1710;border:0;padding:10px 16px;cursor:pointer;min-height:42px}\n.btnc:hover{background:#FFFFFF}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Archivo:wght@400;600;800;900&family=Fraunces:opsz,wght@9..144,400;9..144,600&family=JetBrains+Mono:wght@600&display=swap"];

export default class RoughPhael extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.paint();
    this.t1 = setTimeout(() => this.ensure(), 400);
    this.t2 = setTimeout(() => this.ensure(), 1500);
    if (typeof ResizeObserver !== 'undefined' && this.cv) {
      this.ro = new ResizeObserver(() => this.ensure());
      this.ro.observe(this.cv);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.t1); clearTimeout(this.t2);
    if (this.ro) this.ro.disconnect();
  }
  ensure() {
    const cv = this.cv;
    if (!cv) return;
    const r = cv.getBoundingClientRect();
    const want = Math.round(r.width * (this.dpr || 1));
    if (r.width > 4 && Math.abs(cv.width - want) > 4 && !this.touched) this.paint();
  }
  paint() {
    const cv = this.cv;
    if (!cv || !cv.getContext) return;
    const r = cv.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.round(r.width * dpr);
    cv.height = Math.round(r.height * dpr);
    const ctx = cv.getContext('2d');
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#7A4426';
    ctx.fillRect(0, 0, cv.width, cv.height);
    const n = Math.round((cv.width * cv.height) / 60);
    for (let i = 0; i < n; i++) {
      const x = Math.random() * cv.width, y = Math.random() * cv.height;
      const sz = (Math.random() * 3 + 1) * dpr;
      const t = Math.random();
      ctx.fillStyle = t < 0.5 ? 'rgba(25,14,6,.6)' : t < 0.82 ? 'rgba(150,90,50,.7)' : 'rgba(255,236,200,.45)';
      ctx.beginPath();
      ctx.arc(x, y, sz / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(246,231,200,.9)';
    ctx.font = '600 ' + Math.round(15 * dpr) + 'px "JetBrains Mono", monospace';
    ctx.fillText('SAND ME →', 22 * dpr, cv.height - 24 * dpr);
    this.dpr = dpr;
    this.moves = 0;
    this.touched = false;
    this.setState({ sanded: 0 });
  }
  sandAt(cv, clientX, clientY) {
    const r = cv.getBoundingClientRect();
    if (Math.abs(cv.width - Math.round(r.width * (this.dpr || 1))) > 4) this.paint();
    const dpr = this.dpr || 1;
    const x = (clientX - r.left) * dpr, y = (clientY - r.top) * dpr;
    const ctx = cv.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    const rad = 40 * dpr;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    g.addColorStop(0, 'rgba(0,0,0,.85)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
    this.touched = true;
    this.moves = (this.moves || 0) + 1;
    if (this.moves % 10 === 0) this.measure(cv);
  }
  measure(cv) {
    try {
      const ctx = cv.getContext('2d');
      const d = ctx.getImageData(0, 0, cv.width, cv.height).data;
      const step = 24;
      let clear = 0, total = 0;
      for (let y = 0; y < cv.height; y += step) {
        for (let x = 0; x < cv.width; x += step) {
          total++;
          if (d[(y * cv.width + x) * 4 + 3] < 60) clear++;
        }
      }
      this.setState({ sanded: Math.round((clear / Math.max(1, total)) * 100) });
    } catch (err) {}
  }
  renderVals() {
    const s = (this.state && this.state.sanded) || 0;
    return {
      canvasRef: (el) => { if (el) this.cv = el; },
      sand: (e) => {
        const cv = (e && e.currentTarget) || this.cv;
        if (!cv) return;
        if (!this.cv) this.cv = cv;
        if (!this.dpr) this.paint();
        this.sandAt(cv, e.clientX, e.clientY);
      },
      sandMsg: s >= 70 ? 'SMOOTH. THAT’S HOW I SHIP.' : 'SANDED ' + s + '%',
      resand: () => this.paint()
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; color: #1E1710; font-family: 'Archivo', system-ui, sans-serif")}>
        <div style={css("background: #1E1710; color: #F2DFB8; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-family: 'JetBrains Mono', monospace")}>
          <span>
            {"Theme: Rough-phael"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #F2C46D; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #F2C46D; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <div className="sheet">
          <svg aria-hidden="true" className="grainlayer coarse">
            <filter id="cm" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="3" seed="7"></feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.07  0 0 0 0 0.03  0 0 0 0.9 0"></feColorMatrix>
            </filter>
            {" "}
            <filter id="ct" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.26" numOctaves="1" seed="21"></feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 0.42  0 0 0 0 0.22  0 0 0 0 0.1  7 0 0 0 -3.2"></feColorMatrix>
            </filter>
            {" "}
            <filter id="cd" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.26" numOctaves="2" seed="4"></feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 0.09  0 0 0 0 0.05  0 0 0 0 0.02  8 0 0 0 -4.0"></feColorMatrix>
            </filter>
            {" "}
            <filter id="cl" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.26" numOctaves="2" seed="11"></feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 0.92  0 0 0 0 0.78  3 0 0 0 -2.05"></feColorMatrix>
            </filter>
            {" "}
            <rect width="100%" height="100%" filter="url(#cm)"></rect>
            <rect width="100%" height="100%" filter="url(#ct)"></rect>
            <rect width="100%" height="100%" filter="url(#cd)"></rect>
            <rect width="100%" height="100%" filter="url(#cl)"></rect>
          </svg>
          {" "}
          <svg aria-hidden="true" className="grainlayer fine">
            <filter id="ft" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="1" seed="31"></feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 0.42  0 0 0 0 0.24  0 0 0 0 0.12  7 0 0 0 -3.4"></feColorMatrix>
            </filter>
            {" "}
            <filter id="fd" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="5"></feTurbulence>
              <feColorMatrix type="matrix" values="0 0 0 0 0.09  0 0 0 0 0.05  0 0 0 0 0.02  8 0 0 0 -4.4"></feColorMatrix>
            </filter>
            {" "}
            <rect width="100%" height="100%" filter="url(#ft)"></rect>
            <rect width="100%" height="100%" filter="url(#fd)"></rect>
          </svg>
          {" "}
          <div className="sheen" aria-hidden="true"></div>
          {" "}
          {" "}
          <section id="top" className="inner" style={css("padding-top: clamp(40px, 6vw, 72px); padding-bottom: clamp(72px, 9vw, 120px); display: flex; flex-direction: column; gap: 24px; color: #F6E7C8")}>
            <div style={css("display: flex; flex-wrap: wrap; gap: 10px 22px; align-items: center")}>
              <span className="grit">
                {"P40 · EXTRA COARSE"}
              </span>
              <span style={css("font-family: 'JetBrains Mono', monospace; font-weight: 600; font-size: 13px")}>
                {"Full-stack developer & founder"}
              </span>
            </div>
            {" "}
            <div style={css("position: relative; border-radius: 12px; overflow: hidden; background: #E9D2A6; box-shadow: 0 20px 40px rgba(30,16,6,.45); touch-action: none; user-select: none")}>
              <div style={css("padding: clamp(28px, 5vw, 56px) clamp(20px, 4vw, 48px); display: flex; flex-direction: column; gap: 12px")}>
                <h1 style={css("margin: 0; font-family: 'Fraunces', Georgia, serif; font-weight: 600; font-size: clamp(64px, 12vw, 168px); line-height: 0.9; letter-spacing: -0.03em; color: #2A1B10")}>
                  {"Rough-phael"}
                </h1>
                {" "}
                <p style={css("margin: 0; font-family: 'Fraunces', Georgia, serif; font-size: clamp(18px, 2vw, 24px); line-height: 1.5; color: #5A3A1A; max-width: 640px")}>
                  {"Raphael Gabriel Geronimo. Every product starts rough. I sand it down until it ships smooth."}
                </p>
              </div>
              {" "}
              <canvas ref={v.canvasRef} onPointerMove={v.sand} onPointerDown={v.sand} aria-hidden="true" style={css("position: absolute; inset: 0; width: 100%; height: 100%; cursor: crosshair; touch-action: none")}></canvas>
              {" "}
              <div aria-hidden="true" style={css("position: absolute; right: 14px; top: 14px; pointer-events: none; font-family: 'JetBrains Mono', monospace; font-weight: 600; font-size: 12px; background: #1E1710; color: #F2DFB8; padding: 6px 10px")}>
                {v.sandMsg}
              </div>
            </div>
            {" "}
            <div style={css("display: flex; flex-wrap: wrap; gap: 14px; align-items: center")}>
              <span style={css("font-family: 'Rubik Dirt', sans-serif; font-size: 26px")}>
                {"↑ Rub to sand it smooth"}
              </span>
              {" "}
              <button type="button" className="btnc" onClick={v.resand}>
                {"Rough it up again"}
              </button>
            </div>
          </section>
          {" "}
          {" "}
          <section id="work" className="inner" style={css("padding-bottom: clamp(80px, 10vw, 130px); display: flex; flex-direction: column; gap: 26px; color: #F6E7C8")}>
            <span className="grit">
              {"P80 · COARSE · THE WORK"}
            </span>
            {" "}
            <h2 style={css("margin: 0; font-family: 'Rubik Dirt', sans-serif; font-weight: 400; font-size: clamp(48px, 7vw, 92px); line-height: 0.9; text-shadow: 0 3px 0 rgba(30,23,16,.45)")}>
              {"Rough cuts that shipped"}
            </h2>
            {" "}
            <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px")}>
              <a href="#work" className="plank" style={css("text-decoration: none; color: #F7E8CC; padding: 20px; display: flex; flex-direction: column; gap: 12px")}>
                <div style={css("height: 150px; background: rgba(30,23,16,.45); border: 2px dashed rgba(247,232,204,.45); display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 12px")}>
                  {shot(C.projects[0])}
                </div>
                {" "}
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px")}>
                  {"PLANK 01 · "}{C.projects[0].type}
                </div>
                {" "}
                <div style={css("font-weight: 900; font-size: 28px; line-height: 1")}>
                  {C.projects[0].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 16px; line-height: 1.5")}>
                  {C.projects[0].summary}
                </p>
              </a>
              {" "}
              <a href="#work" className="plank" style={css("text-decoration: none; color: #F7E8CC; padding: 20px; display: flex; flex-direction: column; gap: 12px; background-color: #533218")}>
                <div style={css("height: 150px; background: rgba(30,23,16,.45); border: 2px dashed rgba(247,232,204,.45); display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 12px")}>
                  {shot(C.projects[1])}
                </div>
                {" "}
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px")}>
                  {"PLANK 02 · "}{C.projects[1].type}
                </div>
                {" "}
                <div style={css("font-weight: 900; font-size: 28px; line-height: 1")}>
                  {C.projects[1].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 16px; line-height: 1.5")}>
                  {C.projects[1].summary}
                </p>
              </a>
              {" "}
              <a href="#work" className="plank" style={css("text-decoration: none; color: #F7E8CC; padding: 20px; display: flex; flex-direction: column; gap: 12px; background-color: #6A4422")}>
                <div style={css("height: 150px; background: rgba(30,23,16,.45); border: 2px dashed rgba(247,232,204,.45); display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 12px")}>
                  {shot(C.projects[2])}
                </div>
                {" "}
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px")}>
                  {"PLANK 03 · "}{C.projects[2].type}
                </div>
                {" "}
                <div style={css("font-weight: 900; font-size: 28px; line-height: 1")}>
                  {C.projects[2].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 16px; line-height: 1.5")}>
                  {C.projects[2].summary}
                </p>
              </a>
            </div>
          </section>
          {" "}
          {" "}
          <section id="about" className="inner" style={css("padding-bottom: clamp(80px, 10vw, 130px); display: flex; flex-wrap: wrap; gap: 32px; color: #FFF4DE")}>
            <div style={css("flex: 1 1 320px; min-width: 0; display: flex; flex-direction: column; gap: 14px")}>
              <span className="grit">
                {"P120 · MEDIUM · THE TOOLS"}
              </span>
              {" "}
              <h2 style={css("margin: 0; font-weight: 900; font-size: clamp(44px, 6vw, 76px); line-height: 0.92; letter-spacing: -0.02em; text-shadow: 0 2px 0 rgba(30,23,16,.35)")}>
                {"The sanding blocks"}
              </h2>
              {" "}
              <p style={css("margin: 0; font-size: 18px; line-height: 1.6; font-weight: 600; text-shadow: 0 1px 0 rgba(30,23,16,.35)")}>
                {"A tech geek who likes friction: hard bugs, messy problems, businesses that need building from scratch. "}{C.bio.origin}
              </p>
            </div>
            {" "}
            <div style={css("flex: 999 1 560px; min-width: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px")}>
              <div className="block" style={css("padding: 20px; display: flex; flex-direction: column; gap: 8px")}>
                <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #F2C46D")}>
                  {"BLOCK 01"}
                </span>
                <span style={css("font-weight: 800; font-size: 24px")}>
                  {"Front end"}
                </span>
                <span style={css("font-size: 15px; line-height: 1.5")}>
                  {C.skills.frontend}
                </span>
              </div>
              {" "}
              <div className="block" style={css("padding: 20px; display: flex; flex-direction: column; gap: 8px")}>
                <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #F2C46D")}>
                  {"BLOCK 02"}
                </span>
                <span style={css("font-weight: 800; font-size: 24px")}>
                  {"Back end"}
                </span>
                <span style={css("font-size: 15px; line-height: 1.5")}>
                  {C.skills.backend}
                </span>
              </div>
              {" "}
              <div className="block" style={css("padding: 20px; display: flex; flex-direction: column; gap: 8px")}>
                <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #F2C46D")}>
                  {"BLOCK 03"}
                </span>
                <span style={css("font-weight: 800; font-size: 24px")}>
                  {"Business"}
                </span>
                <span style={css("font-size: 15px; line-height: 1.5")}>
                  {C.skills.business}
                </span>
              </div>
            </div>
          </section>
          {" "}
          {" "}
          <section aria-label="How I work" className="inner" style={css("padding-bottom: clamp(80px, 10vw, 130px); display: flex; flex-direction: column; gap: 26px; color: #2A1B10")}>
            <span className="grit">
              {"P240 · FINE · THE PROCESS"}
            </span>
            {" "}
            <h2 style={css("margin: 0; font-weight: 800; font-size: clamp(40px, 5.4vw, 68px); line-height: 0.95; letter-spacing: -0.02em")}>
              {"How a rough idea gets smooth"}
            </h2>
            {" "}
            <ol style={css("margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0; border-top: 2px solid #2A1B10")}>
              <li style={css("padding: 20px 18px 0 0; display: flex; flex-direction: column; gap: 8px")}>
                <span style={css("font-family: 'Rubik Dirt', sans-serif; font-size: 44px; line-height: 1")}>
                  {"01"}
                </span>
                <span style={css("font-weight: 800; font-size: 20px")}>
                  {"Rough it out"}
                </span>
                <span style={css("font-size: 15px; line-height: 1.55")}>
                  {"[How you start: sketches, conversations, scrappy prototypes.]"}
                </span>
              </li>
              {" "}
              <li style={css("padding: 20px 18px 0 0; display: flex; flex-direction: column; gap: 8px")}>
                <span style={css("font-weight: 900; font-size: 44px; line-height: 1")}>
                  {"02"}
                </span>
                <span style={css("font-weight: 800; font-size: 20px")}>
                  {"Shape it"}
                </span>
                <span style={css("font-size: 15px; line-height: 1.55")}>
                  {"[How you build the real thing: architecture, front to back.]"}
                </span>
              </li>
              {" "}
              <li style={css("padding: 20px 18px 0 0; display: flex; flex-direction: column; gap: 8px")}>
                <span style={css("font-weight: 600; font-size: 44px; line-height: 1")}>
                  {"03"}
                </span>
                <span style={css("font-weight: 800; font-size: 20px")}>
                  {"Sand it down"}
                </span>
                <span style={css("font-size: 15px; line-height: 1.55")}>
                  {"[How you refine: testing, feedback, the details nobody sees.]"}
                </span>
              </li>
              {" "}
              <li style={css("padding: 20px 18px 0 0; display: flex; flex-direction: column; gap: 8px")}>
                <span style={css("font-family: 'Fraunces', serif; font-weight: 400; font-size: 44px; line-height: 1")}>
                  {"04"}
                </span>
                <span style={css("font-weight: 800; font-size: 20px")}>
                  {"Polish & ship"}
                </span>
                <span style={css("font-size: 15px; line-height: 1.55")}>
                  {"[How you launch and keep it running.]"}
                </span>
              </li>
            </ol>
          </section>
          {" "}
          {" "}
          <section id="venture" className="inner" style={css("padding-bottom: clamp(80px, 10vw, 130px); display: flex; flex-wrap: wrap; gap: 24px 40px; align-items: flex-end; justify-content: space-between; color: #2A1B10")}>
            <div style={css("flex: 999 1 460px; min-width: 0; display: flex; flex-direction: column; gap: 12px")}>
              <span className="grit">
                {"P400 · EXTRA FINE · THE COMPANY"}
              </span>
              {" "}
              <div style={css("font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(48px, 7vw, 92px); line-height: 0.95; letter-spacing: -0.02em")}>
                {C.company.name}
              </div>
              {" "}
              <p style={css("margin: 0; font-family: 'Fraunces', serif; font-size: 20px; line-height: 1.55; max-width: 580px")}>
                {C.company.summary}{" Founded and run by Raphael."}
              </p>
            </div>
            {" "}
            <a href="#venture" style={css("text-decoration: none; background: #2A1B10; color: #F2DFB8; padding: 15px 24px; font-weight: 800")}>
              {"Visit the company →"}
            </a>
          </section>
          {" "}
          {" "}
          <footer id="contact" className="inner" style={css("padding-bottom: 48px; display: flex; flex-direction: column; gap: 22px; color: #2A1B10")}>
            <span className="grit">
              {"POLISHED · FINISH COAT"}
            </span>
            {" "}
            <h2 style={css("margin: 0; font-family: 'Fraunces', serif; font-weight: 400; font-size: clamp(52px, 8vw, 116px); line-height: 0.95; letter-spacing: -0.03em")}>
              {"Got a rough idea?"}
              <br />
              <span style={css("color: #8A4A1E")}>
                {"Let's smooth it out."}
              </span>
            </h2>
            {" "}
            <a href={`mailto:${C.email}`} style={css("font-family: 'Fraunces', serif; font-size: clamp(22px, 3vw, 32px); text-underline-offset: 6px")}>
              {C.email}
            </a>
            {" "}
            <div style={css("display: flex; flex-wrap: wrap; gap: 16px 28px; justify-content: space-between; border-top: 1px solid rgba(42,27,16,.3); padding-top: 20px; font-size: 15px")}>
              <div style={css("display: flex; flex-wrap: wrap; gap: 24px")}>
                <a href={C.links.github} style={css("padding: 6px 0")} target="_blank" rel="noreferrer">
                  {"GitHub"}
                </a>
                <a href={C.links.linkedin} style={css("padding: 6px 0")} target="_blank" rel="noreferrer">
                  {"LinkedIn"}
                </a>
                <a href={C.company.url} style={css("padding: 6px 0")} target="_blank" rel="noreferrer">
                  {C.company.siteLabel}
                </a>
              </div>
              {" "}
              <span style={css("padding: 6px 0; color: #6A4A2A")}>
                {"© Raphael Gabriel Geronimo · Sanded by hand"}
              </span>
            </div>
          </footer>
        </div>
      </div>
      </>
    );
  }
}
