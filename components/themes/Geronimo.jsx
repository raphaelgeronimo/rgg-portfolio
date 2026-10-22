'use client';
// Generated from the Geronimo design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#0C2E47}\na{color:#0C2E47}a:hover{color:#E8512B}\n.cloud{position:absolute;background:#FFFFFF;border-radius:999px;pointer-events:none}\n.cloud::before,.cloud::after{content:\"\";position:absolute;background:#FFFFFF;border-radius:50%}\n.cloud::before{width:55%;height:170%;left:14%;bottom:18%}\n.cloud::after{width:38%;height:130%;right:12%;bottom:24%}\n.scroller{scrollbar-width:none}\n.scroller::-webkit-scrollbar{display:none}\n.alt{font-family:'JetBrains Mono',monospace;font-weight:800;font-size:13px;letter-spacing:.14em;display:inline-flex;align-items:center;gap:10px;color:#FFFFFF}\n.alt::before{content:\"\";width:34px;height:2px;background:currentColor}\n.card{background:#FFFFFF;color:#0C2E47;border-radius:24px;box-shadow:0 18px 0 rgba(12,46,71,.18);transition:transform .2s ease}\n.card:hover{transform:translateY(-6px) rotate(-1deg)}\n.jump{transition:transform .15s ease}\n.jump:hover{transform:scale(1.05)}\n@media (max-width:820px){.hud-side{display:none !important}.lane{margin-left:6% !important;margin-right:6% !important}}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Bungee&family=Nunito:wght@400;600;800&family=JetBrains+Mono:wght@600;800&display=swap"];

export default class Geronimo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cloudSeeds() {
    return [
      { x: 4, y: 120, w: 240, h: 64, r: 1.0, o: .9 }, { x: 62, y: 260, w: 320, h: 84, r: 1.3, o: .85 },
      { x: 28, y: 520, w: 180, h: 48, r: 0.8, o: .7 }, { x: 78, y: 640, w: 220, h: 58, r: 1.1, o: .9 },
      { x: 10, y: 860, w: 360, h: 94, r: 1.5, o: .95 }, { x: 46, y: 1020, w: 160, h: 44, r: 0.7, o: .6 },
      { x: 70, y: 1180, w: 280, h: 74, r: 1.2, o: .85 }, { x: 18, y: 1320, w: 210, h: 56, r: 0.9, o: .75 },
      { x: 54, y: 1480, w: 250, h: 66, r: 1.4, o: .9 }
    ];
  }
  componentDidMount() {
    this.t = 0;
    this.last = 0;
    this.vel = 0;
    this.timer = setInterval(() => this.tick(), 40);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  measureStops() {
    const sc = this.sc;
    if (!sc) return [];
    const base = sc.getBoundingClientRect().top - sc.scrollTop;
    const out = [];
    sc.querySelectorAll('[data-stop]').forEach((el) => {
      const y = el.getBoundingClientRect().top - base - sc.clientHeight * 0.28;
      out.push(Math.max(0, Math.round(y)));
    });
    return out.sort((a, b) => a - b);
  }
  tick() {
    const sc = this.sc;
    let top = sc ? sc.scrollTop : 0;
    const max = sc ? Math.max(1, sc.scrollHeight - sc.clientHeight) : 1;
    const s = this.state || {};
    if (s.auto && sc) {
      if (this.hold > 0) {
        this.hold -= 40;
      } else {
        const stops = this.stops || [];
        let target = max;
        for (let i = 0; i < stops.length; i++) { if (stops[i] > top + 3) { target = stops[i]; break; } }
        const dist = target - top;
        const cap = top / max > 0.7 ? 6 : 13;
        const step = Math.max(2, Math.min(cap, dist * 0.07));
        sc.scrollTop = top + Math.min(step, dist);
        top = sc.scrollTop;
        if (target < max && target - top < 3) this.hold = 2400;
        if (top >= max - 2) this.setState({ auto: false });
      }
    }
    const d = Math.abs(top - this.last);
    this.last = top;
    this.vel = this.vel * 0.85 + d * 0.15;
    const p = Math.min(1, Math.max(0, top / max));
    const chute = p > 0.7;
    const landed = p > 0.985;
    const holding = s.auto && this.hold > 0;
    const speed = landed ? 0 : chute ? 0.35 : holding ? 0.8 : 1 + Math.min(5, this.vel / 6);
    this.t += 40 * speed;
    this.setState({ p: p, t: this.t, v: this.vel });
  }
  mix(a, b, t) {
    const pa = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)];
    const pb = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)];
    return 'rgb(' + pa.map((v, i) => Math.round(v + (pb[i] - v) * t)).join(',') + ')';
  }
  renderVals() {
    const s = this.state || {};
    const p = s.p || 0;
    const t = s.t || 0;
    const v = s.v || 0;
    const H = (this.sc && this.sc.clientHeight) || 900;
    const span = H + 240;
    const chute = p > 0.7;
    const landed = p > 0.985;
    const alt = Math.max(0, Math.round((13000 * (1 - p)) / 100) * 100);
    const sky = p < 0.5 ? this.mix('#1E5F99', '#4AA8E0', p / 0.5) : this.mix('#4AA8E0', '#A8DCF7', (p - 0.5) / 0.5);
    const clouds = this.cloudSeeds().map((c) => {
      const y = ((((c.y - t * 0.35 * c.r) % span) + span) % span) - 140;
      return { x: c.x, y: y.toFixed(0), w: c.w, h: c.h, o: c.o };
    });
    const streaks = [];
    for (let i = 0; i < 10; i++) {
      const rate = 1.6 + (i % 4) * 0.5;
      const y = ((((i * 173 - t * rate) % span) + span) % span) - 140;
      streaks.push({ x: (i * 37 + 9) % 96, y: y.toFixed(0), len: 60 + (i % 3) * 50, o: chute ? 0 : Math.min(0.9, 0.25 + v / 30) });
    }
    const wob = Math.sin(t / 140);
    return {
      sky: sky,
      clouds: clouds,
      streaks: streaks,
      altText: alt.toLocaleString('en-US'),
      pct: (p * 100).toFixed(1),
      speed: landed ? 'LANDED ✓' : chute ? 'CANOPY · 12 MPH' : (p < 0.02 && v < 1 ? 'READY TO JUMP' : 'FREEFALL · 120 MPH'),
      speedBg: landed ? '#2F6B25' : chute ? '#2F6B25' : '#E8512B',
      fallOp: chute ? 0 : 1,
      chuteOp: chute ? 1 : 0,
      chuteScale: chute ? 1 : 0.4,
      tilt: (wob * (4 + Math.min(8, v / 3))).toFixed(1),
      shakeX: (Math.sin(t / 37) * Math.min(5, v / 6)).toFixed(1),
      shakeY: (Math.cos(t / 29) * Math.min(4, v / 8)).toFixed(1),
      sway: (Math.sin(t / 400) * 5).toFixed(1),
      swayY: (Math.sin(t / 300) * 6).toFixed(1),
      lightBg: s.auto || p > 0.01 ? '#2F9E5B' : '#E8512B',
      lightText: s.auto || p > 0.01 ? '● GREEN LIGHT · GO GO GO' : '● STAND IN THE DOOR',
      showCtl: !!s.auto || ((s.p || 0) > 0.01 && (s.p || 0) < 0.985),
      jumpLabel: s.auto ? 'Pause' : ((s.p || 0) > 0.01 ? 'Keep falling' : 'Jump!'),
      scRef: (el) => { this.sc = el; },
      onScroll: () => {},
      jump: () => { if (s.auto) { this.setState({ auto: false }); return; } this.stops = this.measureStops(); this.hold = 0; this.setState({ auto: true }); },
      again: () => { if (this.sc) this.sc.scrollTop = 0; this.setState({ auto: false }); }
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; background: #0C2E47; color: #0C2E47; font-family: 'Nunito', system-ui, sans-serif")}>
        <div style={css("background: #0C2E47; color: #FFFFFF; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-weight: 600")}>
          <span>
            {"Theme: GERONIMO!"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #FFD166; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #FFD166; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <section aria-label="Freefall" style={css(`position: relative; height: calc(100vh - 44px); min-height: 640px; max-height: 1000px; overflow: hidden; background: ${v.sky}`)}>
          {" "}
          <div aria-hidden="true" style={css("position: absolute; left: 0; right: 0; top: 50%; transform: translateY(-50%); text-align: center; font-family: 'Bungee', sans-serif; font-size: clamp(120px, 22vw, 340px); line-height: 1; color: rgba(255,255,255,.07); pointer-events: none; z-index: 0")}>
            {v.altText}
          </div>
          {" "}
          {" "}
          <div aria-hidden="true" style={css("position: absolute; inset: 0; z-index: 1; pointer-events: none")}>
            {(v.clouds || []).map((cl, __i0) => (
              <React.Fragment key={__i0}>
                <div className="cloud" style={css(`left: ${cl.x}%; top: ${cl.y}px; width: ${cl.w}px; height: ${cl.h}px; opacity: ${cl.o}`)}></div>
              </React.Fragment>
            ))}
            {" "}
            {(v.streaks || []).map((st, __i0) => (
              <React.Fragment key={__i0}>
                <div style={css(`position: absolute; left: ${st.x}%; top: ${st.y}px; width: 2px; height: ${st.len}px; background: rgba(255,255,255,.55); opacity: ${st.o}; border-radius: 2px`)}></div>
              </React.Fragment>
            ))}
          </div>
          {" "}
          {" "}
          <div className="scroller" ref={v.scRef} onScroll={v.onScroll} style={css("position: absolute; inset: 0; z-index: 3; overflow-y: auto; overflow-x: hidden")}>
            <div id="top" style={css("position: relative; height: 100%; min-height: 620px; display: flex; flex-direction: column; justify-content: center")}>
              <div aria-hidden="true" style={css("position: absolute; left: 0; right: 0; top: 0; height: 90px; background: #D4DCE3; border-bottom: 10px solid #9AA9B6")}></div>
              {" "}
              <div aria-hidden="true" style={css("position: absolute; left: 0; top: 0; bottom: 0; width: 6%; background: #D4DCE3; border-right: 10px solid #9AA9B6")}></div>
              {" "}
              <div aria-hidden="true" style={css("position: absolute; right: 0; top: 0; bottom: 0; width: 6%; background: #D4DCE3; border-left: 10px solid #9AA9B6")}></div>
              {" "}
              <div aria-hidden="true" style={css("position: absolute; left: 6%; right: 6%; top: 90px; display: flex; justify-content: center")}>
                <div style={css(`background: ${v.lightBg}; color: #FFFFFF; font-family: 'JetBrains Mono', monospace; font-weight: 800; font-size: 13px; letter-spacing: 0.2em; padding: 8px 16px; border-radius: 0 0 8px 8px`)}>
                  {v.lightText}
                </div>
              </div>
              {" "}
              <div style={css("position: relative; padding: 90px 10% 0; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 18px")}>
                <span className="alt">
                  {"13,000 FT · DOOR OPEN"}
                </span>
                {" "}
                <h1 style={css("margin: 0; font-family: 'Bungee', sans-serif; font-weight: 400; font-size: clamp(46px, 8.6vw, 128px); line-height: 1; color: #FFFFFF; text-shadow: 6px 6px 0 #0C2E47; white-space: nowrap")}>
                  {"GERONIMO!"}
                </h1>
                {" "}
                <p style={css("margin: 0; font-size: clamp(17px, 1.8vw, 21px); line-height: 1.5; font-weight: 600; color: #FFFFFF; max-width: 600px; text-shadow: 0 2px 0 rgba(12,46,71,.35)")}>
                  {"Raphael Gabriel Geronimo — full-stack developer and founder. I jump into hard problems head first. Come along."}
                </p>
                {" "}
                <div style={css("display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; align-items: center")}>
                  <button type="button" className="jump" onClick={v.jump} style={css("font-family: 'Bungee', sans-serif; font-size: 22px; background: #E8512B; color: #FFFFFF; border: 4px solid #0C2E47; border-radius: 999px; padding: 14px 34px; cursor: pointer; box-shadow: 0 6px 0 #0C2E47; min-height: 60px")}>
                    {v.jumpLabel}
                  </button>
                  {" "}
                  <span style={css("font-weight: 800; color: #FFFFFF")}>
                    {"or scroll down ↓"}
                  </span>
                </div>
              </div>
            </div>
            {" "}
            <div style={css("height: 380px")}></div>
            {" "}
            <section id="work" className="lane" style={css("margin: 0 40% 0 14%; display: flex; flex-direction: column; gap: 420px")}>
              <a href="#work" data-stop="1" className="card" style={css("text-decoration: none; padding: 24px; display: flex; flex-direction: column; gap: 10px")}>
                <span className="alt" style={css("color: #E8512B")}>
                  {"10,000 FT · JUMP 01"}
                </span>
                {" "}
                <div style={css("height: 140px; border-radius: 16px; background: #E3F4FD; display: flex; align-items: center; justify-content: center; font-size: 14px")}>
                  {shot(C.projects[0])}
                </div>
                {" "}
                <div style={css("font-family: 'Bungee', sans-serif; font-size: 28px; line-height: 1.05")}>
                  {C.projects[0].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 17px; line-height: 1.5")}>
                  {C.projects[0].summary}{" · "}{C.projects[0].type}
                </p>
              </a>
              {" "}
              <a href="#work" data-stop="1" className="card" style={css("text-decoration: none; padding: 24px; display: flex; flex-direction: column; gap: 10px; margin-left: 12%")}>
                <span className="alt" style={css("color: #E8512B")}>
                  {"8,500 FT · JUMP 02"}
                </span>
                {" "}
                <div style={css("height: 140px; border-radius: 16px; background: #FFE9DF; display: flex; align-items: center; justify-content: center; font-size: 14px")}>
                  {shot(C.projects[1])}
                </div>
                {" "}
                <div style={css("font-family: 'Bungee', sans-serif; font-size: 28px; line-height: 1.05")}>
                  {C.projects[1].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 17px; line-height: 1.5")}>
                  {C.projects[1].summary}{" · "}{C.projects[1].type}
                </p>
              </a>
              {" "}
              <a href="#work" data-stop="1" className="card" style={css("text-decoration: none; padding: 24px; display: flex; flex-direction: column; gap: 10px")}>
                <span className="alt" style={css("color: #E8512B")}>
                  {"7,000 FT · JUMP 03"}
                </span>
                {" "}
                <div style={css("height: 140px; border-radius: 16px; background: #FFF4D6; display: flex; align-items: center; justify-content: center; font-size: 14px")}>
                  {shot(C.projects[2])}
                </div>
                {" "}
                <div style={css("font-family: 'Bungee', sans-serif; font-size: 28px; line-height: 1.05")}>
                  {C.projects[2].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 17px; line-height: 1.5")}>
                  {C.projects[2].summary}{" · "}{C.projects[2].type}
                </p>
              </a>
            </section>
            {" "}
            <div style={css("height: 420px")}></div>
            {" "}
            <section data-stop="1" id="about" className="lane" style={css("margin: 0 40% 0 14%; display: flex; flex-direction: column; gap: 16px")}>
              <span className="alt">
                {"5,500 FT · GEAR CHECK"}
              </span>
              {" "}
              <h2 style={css("margin: 0; font-family: 'Bungee', sans-serif; font-weight: 400; font-size: clamp(36px, 4.6vw, 60px); line-height: 1; color: #FFFFFF; text-shadow: 4px 4px 0 #0C2E47")}>
                {"What's in my pack"}
              </h2>
              {" "}
              <p style={css("margin: 0; font-size: 18px; line-height: 1.6; font-weight: 700; color: #FFFFFF")}>
                {"A tech geek who checks every strap before the jump. "}{C.bio.origin}
              </p>
              {" "}
              <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 14px")}>
                <div className="card" style={css("padding: 18px; display: flex; flex-direction: column; gap: 6px")}>
                  <div style={css("font-size: 20px; font-weight: 800")}>
                    {"Goggles · Front end"}
                  </div>
                  <p style={css("margin: 0; font-size: 15px; line-height: 1.5")}>
                    {C.skills.frontend}
                  </p>
                </div>
                {" "}
                <div className="card" style={css("padding: 18px; display: flex; flex-direction: column; gap: 6px")}>
                  <div style={css("font-size: 20px; font-weight: 800")}>
                    {"Harness · Back end"}
                  </div>
                  <p style={css("margin: 0; font-size: 15px; line-height: 1.5")}>
                    {C.skills.backend}
                  </p>
                </div>
                {" "}
                <div className="card" style={css("padding: 18px; display: flex; flex-direction: column; gap: 6px")}>
                  <div style={css("font-size: 20px; font-weight: 800")}>
                    {"Altimeter · Business"}
                  </div>
                  <p style={css("margin: 0; font-size: 15px; line-height: 1.5")}>
                    {C.skills.business}
                  </p>
                </div>
              </div>
            </section>
            {" "}
            <div style={css("height: 460px")}></div>
            {" "}
            <section data-stop="1" aria-label="Deploy" className="lane" style={css("margin: 0 40% 0 14%; display: flex; flex-direction: column; gap: 8px")}>
              <span className="alt" style={css("color: #FFD166")}>
                {"3,500 FT · DEPLOY ALTITUDE"}
              </span>
              {" "}
              <div style={css("font-family: 'Bungee', sans-serif; font-size: clamp(64px, 9vw, 130px); line-height: 0.9; color: #FFD166; text-shadow: 6px 6px 0 #0C2E47")}>
                {"PULL!"}
              </div>
            </section>
            {" "}
            <div style={css("height: 380px")}></div>
            {" "}
            <section data-stop="1" id="venture" className="lane" style={css("margin: 0 40% 0 14%; display: flex; flex-wrap: wrap; gap: 24px; align-items: center")}>
              <div aria-hidden="true" style={css("flex: 0 0 auto; width: 130px; height: 130px; border-radius: 50%; background: repeating-radial-gradient(circle, #FFFFFF 0 12px, #E8512B 12px 24px); border: 4px solid #0C2E47")}></div>
              {" "}
              <div style={css("flex: 999 1 280px; min-width: 0; display: flex; flex-direction: column; gap: 8px")}>
                <span className="alt" style={css("color: #0C2E47")}>
                  {"1,500 FT · DROP ZONE · FOUNDER OF"}
                </span>
                {" "}
                <div style={css("font-family: 'Bungee', sans-serif; font-size: clamp(36px, 4.6vw, 60px); line-height: 1; color: #FFFFFF; text-shadow: 4px 4px 0 #0C2E47")}>
                  {C.company.name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 18px; line-height: 1.5; font-weight: 700; color: #0C2E47")}>
                  {C.company.summary}
                </p>
                {" "}
                <a href="#venture" style={css("align-self: flex-start; text-decoration: none; background: #FFD166; padding: 12px 22px; border-radius: 999px; font-weight: 800")}>
                  {"Steer to the drop zone →"}
                </a>
              </div>
            </section>
            {" "}
            <div style={css("height: 360px")}></div>
            {" "}
            <footer id="contact" style={css("position: relative")}>
              <div style={css("max-width: 860px; margin: 0 auto; padding: 0 24px 50px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px")}>
                <span className="alt" style={css("color: #0C2E47")}>
                  {"0 FT · TOUCHDOWN"}
                </span>
                {" "}
                <h2 style={css("margin: 0; font-family: 'Bungee', sans-serif; font-weight: 400; font-size: clamp(44px, 7vw, 96px); line-height: 0.95; color: #FFFFFF; text-shadow: 5px 5px 0 #0C2E47")}>
                  {"Soft landing."}
                  <br />
                  {"Let's talk."}
                </h2>
                {" "}
                <a href={`mailto:${C.email}`} style={css("background: #FFFFFF; padding: 10px 20px; border-radius: 999px; font-size: clamp(20px, 3vw, 28px); font-weight: 800; text-decoration: none")}>
                  {C.email}
                </a>
                {" "}
                <div style={css("display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; font-weight: 800")}>
                  <a href={C.links.github} style={css("background: #FFFFFF; padding: 10px 16px; border-radius: 999px; text-decoration: none")} target="_blank" rel="noreferrer">
                    {"GitHub"}
                  </a>
                  {" "}
                  <a href={C.links.linkedin} style={css("background: #FFFFFF; padding: 10px 16px; border-radius: 999px; text-decoration: none")} target="_blank" rel="noreferrer">
                    {"LinkedIn"}
                  </a>
                  {" "}
                  <a href={C.company.url} style={css("background: #FFFFFF; padding: 10px 16px; border-radius: 999px; text-decoration: none")} target="_blank" rel="noreferrer">
                    {C.company.siteLabel}
                  </a>
                </div>
                {" "}
                <button type="button" onClick={v.again} style={css("font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 15px; background: transparent; color: #0C2E47; border: 2px solid #0C2E47; border-radius: 999px; padding: 10px 18px; cursor: pointer; min-height: 44px")}>
                  {"Back up to the plane ↑"}
                </button>
              </div>
              {" "}
              <div aria-hidden="true" style={css("height: 70px; background: #4E9A3E; border-radius: 50% 50% 0 0 / 46px 46px 0 0")}></div>
              {" "}
              <div style={css("background: #2F6B25; color: #FFFFFF; padding: 20px 24px; text-align: center; font-weight: 700")}>
                {"© Raphael Gabriel Geronimo · Landed safely"}
              </div>
            </footer>
          </div>
          {" "}
          {v.showCtl ? (
            <>
              <button type="button" className="jump" onClick={v.jump} style={css("position: absolute; right: 22px; bottom: 22px; z-index: 5; font-family: 'Bungee', sans-serif; font-size: 16px; background: #FFFFFF; color: #0C2E47; border: 3px solid #0C2E47; border-radius: 999px; padding: 10px 20px; cursor: pointer; box-shadow: 0 5px 0 #0C2E47; min-height: 48px")}>
                {v.jumpLabel}
              </button>
            </>
          ) : null}
          {" "}
          {" "}
          <div className="hud-side" aria-hidden="true" style={css("position: absolute; left: 22px; top: 50%; transform: translateY(-50%); z-index: 4; display: flex; flex-direction: column; align-items: center; gap: 10px; pointer-events: none")}>
            <div style={css("width: 124px; height: 124px; border-radius: 50%; background: #0C2E47; border: 5px solid #FFFFFF; box-shadow: 0 8px 0 rgba(12,46,71,.25); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF")}>
              <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; color: #9FD3F2")}>
                {"ALTITUDE"}
              </span>
              {" "}
              <span style={css("font-family: 'Bungee', sans-serif; font-size: 22px; line-height: 1.15")}>
                {v.altText}
              </span>
              {" "}
              <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #9FD3F2")}>
                {"FT"}
              </span>
            </div>
            {" "}
            <div style={css("width: 12px; height: 200px; border-radius: 6px; background: rgba(255,255,255,.35); position: relative; overflow: hidden")}>
              <div style={css(`position: absolute; left: 0; right: 0; top: 0; height: ${v.pct}%; background: #FFFFFF`)}></div>
              {" "}
              <div style={css("position: absolute; left: 0; right: 0; top: 70%; height: 3px; background: #E8512B")}></div>
            </div>
            {" "}
            <span style={css(`font-family: 'JetBrains Mono', monospace; font-weight: 800; font-size: 11px; color: #FFFFFF; background: ${v.speedBg}; padding: 4px 8px; border-radius: 6px; white-space: nowrap`)}>
              {v.speed}
            </span>
          </div>
          {" "}
          <div className="hud-side" aria-hidden="true" style={css("position: absolute; right: 8%; top: 50%; margin-top: -170px; z-index: 4; width: 240px; height: 330px; pointer-events: none")}>
            <div style={css(`position: absolute; inset: 0; opacity: ${v.fallOp}; transform: translate(${v.shakeX}px, ${v.shakeY}px) rotate(${v.tilt}deg)`)}>
              <svg viewBox="0 0 240 240" style={css("position: absolute; left: 0; top: 50px; width: 240px")}>
                <g strokeLinecap="round" strokeLinejoin="round">
                  <path d="M96 112 Q62 92 40 60" fill="none" stroke="#0C2E47" strokeWidth="26"></path>
                  <path d="M144 112 Q178 92 200 60" fill="none" stroke="#0C2E47" strokeWidth="26"></path>
                  {" "}
                  <path d="M96 112 Q62 92 40 60" fill="none" stroke="#E8512B" strokeWidth="18"></path>
                  <path d="M144 112 Q178 92 200 60" fill="none" stroke="#E8512B" strokeWidth="18"></path>
                  {" "}
                  <path d="M106 160 Q80 190 70 220" fill="none" stroke="#0C2E47" strokeWidth="28"></path>
                  <path d="M134 160 Q160 190 170 220" fill="none" stroke="#0C2E47" strokeWidth="28"></path>
                  {" "}
                  <path d="M106 160 Q80 190 70 220" fill="none" stroke="#E8512B" strokeWidth="20"></path>
                  <path d="M134 160 Q160 190 170 220" fill="none" stroke="#E8512B" strokeWidth="20"></path>
                  {" "}
                  <rect x="92" y="96" width="56" height="78" rx="22" fill="#E8512B" stroke="#0C2E47" strokeWidth="5"></rect>
                  {" "}
                  <rect x="100" y="104" width="40" height="44" rx="10" fill="#FFD166" stroke="#0C2E47" strokeWidth="4"></rect>
                  {" "}
                  <circle cx="120" cy="78" r="22" fill="#FFFFFF" stroke="#0C2E47" strokeWidth="5"></circle>
                  {" "}
                  <path d="M104 78 Q120 70 136 78 L134 88 Q120 84 106 88 Z" fill="#0C2E47"></path>
                  {" "}
                  <circle cx="40" cy="58" r="8" fill="#F2C9A0" stroke="#0C2E47" strokeWidth="4"></circle>
                  <circle cx="200" cy="58" r="8" fill="#F2C9A0" stroke="#0C2E47" strokeWidth="4"></circle>
                </g>
              </svg>
            </div>
            {" "}
            <div style={css(`position: absolute; inset: 0; opacity: ${v.chuteOp}; transform: translateY(${v.swayY}px) rotate(${v.sway}deg) scale(${v.chuteScale}); transform-origin: 50% 20%; transition: opacity .35s ease`)}>
              <svg viewBox="0 0 240 320" style={css("width: 240px")}>
                <path d="M14 70 Q120 -6 226 70 L214 92 Q120 40 26 92 Z" fill="#E8512B" stroke="#0C2E47" strokeWidth="5" strokeLinejoin="round"></path>
                {" "}
                <path d="M66 44 L60 82 M120 32 L120 66 M174 44 L180 82" stroke="#0C2E47" strokeWidth="4"></path>
                {" "}
                <path d="M26 92 Q60 70 92 76 L120 66 L148 76 Q180 70 214 92" fill="#FFD166" stroke="#0C2E47" strokeWidth="4" strokeLinejoin="round"></path>
                {" "}
                <path d="M26 92 L112 230 M70 80 L114 230 M170 80 L126 230 M214 92 L128 230" stroke="#0C2E47" strokeWidth="2"></path>
                {" "}
                <circle cx="120" cy="244" r="15" fill="#FFFFFF" stroke="#0C2E47" strokeWidth="4"></circle>
                {" "}
                <rect x="104" y="258" width="32" height="40" rx="10" fill="#E8512B" stroke="#0C2E47" strokeWidth="4"></rect>
                {" "}
                <path d="M110 298 L104 316 M130 298 L136 316" stroke="#0C2E47" strokeWidth="8" strokeLinecap="round"></path>
                {" "}
                <path d="M106 266 L100 236 M134 266 L140 236" stroke="#0C2E47" strokeWidth="6" strokeLinecap="round"></path>
              </svg>
            </div>
          </div>
        </section>
      </div>
      </>
    );
  }
}
