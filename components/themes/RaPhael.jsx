'use client';
// Generated from the Raphaelra design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#141A3A}\na{color:#1F3A7A}a:hover{color:#B5532E}\n.scroller{scrollbar-width:none}\n.scroller::-webkit-scrollbar{display:none}\n.papyrus{background-color:#F2E3BE;background-image:repeating-linear-gradient(0deg,rgba(150,110,50,.08) 0 2px,transparent 2px 7px),repeating-linear-gradient(90deg,rgba(150,110,50,.06) 0 1px,transparent 1px 9px);color:#2A1C0E;border:3px solid #C99A3A;box-shadow:0 0 0 6px rgba(242,227,190,.35),0 18px 30px rgba(20,16,10,.35)}\n.hour{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:12px;letter-spacing:.16em;color:#8A5A1E}\n.band{height:12px;background:repeating-linear-gradient(90deg,#1F3A7A 0 14px,#C99A3A 14px 18px,#B5532E 18px 32px,#C99A3A 32px 36px)}\n.ctl{font-family:'Marcellus SC',serif;font-size:17px;background:#1F3A7A;color:#F2E3BE;border:3px solid #C99A3A;border-radius:999px;padding:12px 24px;cursor:pointer;min-height:50px;transition:transform .15s ease}\n.ctl:hover{transform:scale(1.04)}\n@media (max-width:820px){.lane{margin-left:6% !important;margin-right:6% !important}.dial{display:none !important}}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Marcellus+SC&family=Lora:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@600&display=swap"];

export default class RaPhael extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.last = 0;
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
      out.push(Math.max(0, Math.round(el.getBoundingClientRect().top - base - sc.clientHeight * 0.18)));
    });
    return out.sort((a, b) => a - b);
  }
  tick() {
    const sc = this.sc;
    let top = sc ? sc.scrollTop : 0;
    const max = sc ? Math.max(1, sc.scrollHeight - sc.clientHeight) : 1;
    const s = this.state || {};
    if (s.auto && sc) {
      if (this.hold > 0) { this.hold -= 40; }
      else {
        const stops = this.stops || [];
        let target = max;
        for (let i = 0; i < stops.length; i++) { if (stops[i] > top + 3) { target = Math.min(stops[i], max); break; } }
        const dist = target - top;
        const step = Math.max(2, Math.min(9, dist * 0.06));
        sc.scrollTop = top + Math.min(step, dist);
        top = sc.scrollTop;
        if (target < max && target - top < 3) this.hold = 2600;
        if (top >= max - 2) this.setState({ auto: false });
      }
    }
    const p = Math.min(1, Math.max(0, top / max));
    if (Math.abs(p - (s.p || 0)) > 0.0005 || s.auto !== this.lastAuto) {
      this.lastAuto = s.auto;
      this.setState({ p: p });
    }
  }
  lerp(stops, t) {
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i], b = stops[i + 1];
      if (t >= a[0] && t <= b[0]) {
        const k = (t - a[0]) / (b[0] - a[0] || 1);
        const ca = [1, 3, 5].map((j) => parseInt(a[1].slice(j, j + 2), 16));
        const cb = [1, 3, 5].map((j) => parseInt(b[1].slice(j, j + 2), 16));
        return 'rgb(' + ca.map((v, j) => Math.round(v + (cb[j] - v) * k)).join(',') + ')';
      }
    }
    return stops[stops.length - 1][1];
  }
  renderVals() {
    const s = this.state || {};
    const p = s.p || 0;
    const sp = Math.min(1, p / 0.84);
    const sky = this.lerp([[0, '#F4A77A'], [0.12, '#F6C9A0'], [0.28, '#8EC9F0'], [0.45, '#5DB3EE'], [0.62, '#7CC0EE'], [0.74, '#F2A15A'], [0.84, '#C2584A'], [0.92, '#4B2E5E'], [1, '#141A3A']], p);
    const sand = this.lerp([[0, '#C9925E'], [0.45, '#E7C68A'], [0.8, '#C98A50'], [1, '#2E2440']], p);
    const pyr = this.lerp([[0, '#A86F2E'], [0.45, '#D2A15A'], [0.8, '#8A5A2A'], [1, '#1E1830']], p);
    const sunY = 66 - 52 * Math.sin(Math.PI * sp);
    const h = 6 + p * 15;
    const hh = Math.floor(h), mm = Math.floor((h - hh) * 60 / 15) * 15;
    const period = p < 0.12 ? 'DAWN' : p < 0.45 ? 'MORNING' : p < 0.55 ? 'NOON' : p < 0.74 ? 'AFTERNOON' : p < 0.88 ? 'DUSK' : 'NIGHT';
    const shadeLeft = sp < 0.5;
    return {
      sky: sky, sand: sand, pyr: pyr,
      sunX: (8 + 84 * sp).toFixed(2),
      sunY: sunY.toFixed(2),
      sunOp: p > 0.9 ? Math.max(0, 1 - (p - 0.9) / 0.06).toFixed(2) : 1,
      sunColor: p < 0.15 || p > 0.7 ? '#F08A3E' : '#F7C64A',
      rayRot: (p * 220).toFixed(1),
      starOp: Math.max(0, (p - 0.82) / 0.12).toFixed(2),
      moonY: (40 - Math.max(0, (p - 0.82) / 0.18) * 26).toFixed(1),
      pyrShade: shadeLeft ? 'polygon(50% 0, 100% 100%, 50% 100%)' : 'polygon(50% 0, 50% 100%, 0 100%)',
      shadowSkew: ((sp - 0.5) * -110).toFixed(1),
      clock: hh + ':' + String(mm).padStart(2, '0'),
      period: period,
      dialRot: (90 + p * 180).toFixed(1),
      showCtl: !!s.auto || (p > 0.02 && p < 0.97),
      playLabel: s.auto ? 'Pause the day' : (p > 0.02 ? 'Keep the day going' : 'Let the day pass'),
      scRef: (el) => { this.sc = el; },
      play: () => {
        if (s.auto) { this.setState({ auto: false }); return; }
        this.stops = this.measureStops();
        this.hold = 0;
        this.setState({ auto: true });
      },
      again: () => { if (this.sc) this.sc.scrollTop = 0; this.setState({ auto: false, p: 0 }); }
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; background: #141A3A; font-family: 'Lora', Georgia, serif")}>
        <div style={css("background: #0F1F47; color: #F3E6C4; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-family: 'JetBrains Mono', monospace")}>
          <span>
            {"Theme: Ra-phael"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #E8B33A; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #E8B33A; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <section aria-label="One day with Ra-phael" style={css(`position: relative; height: calc(100vh - 44px); min-height: 640px; max-height: 1000px; overflow: hidden; background: ${v.sky}`)}>
          {" "}
          <div aria-hidden="true" style={css(`position: absolute; inset: 0; z-index: 0; opacity: ${v.starOp}; background-image: radial-gradient(#FFFFFF 1px, transparent 1.6px), radial-gradient(rgba(255,255,255,.7) 1px, transparent 1.5px); background-size: 140px 120px, 90px 70px; background-position: 20px 30px, 60px 10px; pointer-events: none`)}></div>
          {" "}
          <div aria-hidden="true" style={css(`position: absolute; left: 78%; top: ${v.moonY}%; width: 70px; height: 70px; border-radius: 50%; background: #F3EBD2; box-shadow: 0 0 40px rgba(243,235,210,.6); opacity: ${v.starOp}; z-index: 0; pointer-events: none`)}></div>
          {" "}
          {" "}
          <div aria-hidden="true" style={css(`position: absolute; left: ${v.sunX}%; top: ${v.sunY}%; width: 130px; height: 130px; margin: -65px 0 0 -65px; z-index: 1; pointer-events: none; opacity: ${v.sunOp}`)}>
            <div style={css(`position: absolute; inset: -110px; border-radius: 50%; background: repeating-conic-gradient(rgba(255,214,120,.35) 0deg 5deg, transparent 5deg 15deg); transform: rotate(${v.rayRot}deg)`)}></div>
            {" "}
            <div style={css(`position: absolute; inset: 0; border-radius: 50%; background: ${v.sunColor}; box-shadow: 0 0 0 14px rgba(255,236,170,.35), 0 0 120px ${v.sunColor}`)}></div>
          </div>
          {" "}
          {" "}
          <div aria-hidden="true" style={css("position: absolute; left: 0; right: 0; bottom: 0; height: 26%; z-index: 2; pointer-events: none")}>
            <div style={css(`position: absolute; left: 0; right: 0; bottom: 0; height: 46%; background: ${v.sand}`)}></div>
            {" "}
            <div style={css(`position: absolute; left: 10%; bottom: 46%; width: 30%; max-width: 380px; aspect-ratio: 1.7; background: ${v.pyr}; clip-path: polygon(50% 0, 100% 100%, 0 100%)`)}></div>
            {" "}
            <div style={css(`position: absolute; left: 10%; bottom: 46%; width: 30%; max-width: 380px; aspect-ratio: 1.7; background: rgba(0,0,0,.22); clip-path: ${v.pyrShade}`)}></div>
            {" "}
            <div style={css(`position: absolute; left: 10%; bottom: calc(46% - 50px); width: 30%; max-width: 380px; height: 50px; background: rgba(40,24,10,.28); transform: skewX(${v.shadowSkew}deg); transform-origin: top`)}></div>
            {" "}
            <div style={css(`position: absolute; right: 12%; bottom: 46%; width: 20%; max-width: 250px; aspect-ratio: 1.7; background: ${v.pyr}; clip-path: polygon(50% 0, 100% 100%, 0 100%)`)}></div>
            {" "}
            <div style={css(`position: absolute; right: 12%; bottom: 46%; width: 20%; max-width: 250px; aspect-ratio: 1.7; background: rgba(0,0,0,.22); clip-path: ${v.pyrShade}`)}></div>
            {" "}
            <div style={css(`position: absolute; right: 12%; bottom: calc(46% - 34px); width: 20%; max-width: 250px; height: 34px; background: rgba(40,24,10,.28); transform: skewX(${v.shadowSkew}deg); transform-origin: top`)}></div>
          </div>
          {" "}
          {" "}
          <div className="scroller" ref={v.scRef} style={css("position: absolute; inset: 0; z-index: 3; overflow-y: auto; overflow-x: hidden")}>
            <div style={css("height: 6vh")}></div>
            {" "}
            <section id="top" className="lane papyrus" style={css("margin: 0 44% 0 8%; padding: clamp(24px, 3vw, 36px); display: flex; flex-direction: column; gap: 14px")}>
              <span className="hour">
                {"6:00 · DAWN · GOD OF THE SUN"}
              </span>
              {" "}
              <h1 style={css("margin: 0; font-family: 'Marcellus SC', serif; font-weight: 400; font-size: clamp(56px, 7vw, 104px); line-height: 0.92; color: #1F3A7A")}>
                {"Ra-phael"}
              </h1>
              {" "}
              <p style={css("margin: 0; font-size: 18px; line-height: 1.6; font-style: italic")}>
                {"Raphael Gabriel Geronimo — full-stack developer and founder. Like the sun, I show up every single day. Spend one with me."}
              </p>
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 12px; align-items: center")}>
                <button type="button" className="ctl" onClick={v.play}>
                  {v.playLabel}
                </button>
                <span style={css("font-size: 15px")}>
                  {"or scroll ↓"}
                </span>
              </div>
            </section>
            {" "}
            <div style={css("height: 46vh")}></div>
            {" "}
            <a href="#work" data-stop="1" id="work" className="lane papyrus" style={css("display: flex; text-decoration: none; margin: 0 8% 0 44%; padding: 24px; flex-direction: column; gap: 10px; border-radius: 120px 120px 14px 14px")}>
              <span className="hour" style={css("text-align: center")}>
                {"9:00 · MORNING · MONUMENT I"}
              </span>
              {" "}
              <div style={css("height: 140px; border-radius: 80px 80px 8px 8px; background: #1F3A7A; color: #E8D6A8; display: flex; align-items: center; justify-content: center; font-size: 14px")}>
                {shot(C.projects[0])}
              </div>
              {" "}
              <div style={css("font-family: 'Marcellus SC', serif; font-size: 32px; line-height: 1.05; text-align: center; color: #1F3A7A")}>
                {C.projects[0].name}
              </div>
              {" "}
              <p style={css("margin: 0; font-size: 16px; line-height: 1.55; text-align: center")}>
                {C.projects[0].summary}{" · "}{C.projects[0].type}
              </p>
            </a>
            {" "}
            <div style={css("height: 40vh")}></div>
            {" "}
            <a href="#work" data-stop="1" className="lane papyrus" style={css("display: flex; text-decoration: none; margin: 0 44% 0 8%; padding: 24px; flex-direction: column; gap: 10px; border-radius: 120px 120px 14px 14px")}>
              <span className="hour" style={css("text-align: center")}>
                {"12:00 · HIGH NOON · MONUMENT II"}
              </span>
              {" "}
              <div style={css("height: 140px; border-radius: 80px 80px 8px 8px; background: #1F3A7A; color: #E8D6A8; display: flex; align-items: center; justify-content: center; font-size: 14px")}>
                {shot(C.projects[1])}
              </div>
              {" "}
              <div style={css("font-family: 'Marcellus SC', serif; font-size: 32px; line-height: 1.05; text-align: center; color: #1F3A7A")}>
                {C.projects[1].name}
              </div>
              {" "}
              <p style={css("margin: 0; font-size: 16px; line-height: 1.55; text-align: center")}>
                {C.projects[1].summary}{" · "}{C.projects[1].type}
              </p>
            </a>
            {" "}
            <div style={css("height: 40vh")}></div>
            {" "}
            <a href="#work" data-stop="1" className="lane papyrus" style={css("display: flex; text-decoration: none; margin: 0 8% 0 44%; padding: 24px; flex-direction: column; gap: 10px; border-radius: 120px 120px 14px 14px")}>
              <span className="hour" style={css("text-align: center")}>
                {"15:00 · AFTERNOON · MONUMENT III"}
              </span>
              {" "}
              <div style={css("height: 140px; border-radius: 80px 80px 8px 8px; background: #1F3A7A; color: #E8D6A8; display: flex; align-items: center; justify-content: center; font-size: 14px")}>
                {shot(C.projects[2])}
              </div>
              {" "}
              <div style={css("font-family: 'Marcellus SC', serif; font-size: 32px; line-height: 1.05; text-align: center; color: #1F3A7A")}>
                {C.projects[2].name}
              </div>
              {" "}
              <p style={css("margin: 0; font-size: 16px; line-height: 1.55; text-align: center")}>
                {C.projects[2].summary}{" · "}{C.projects[2].type}
              </p>
            </a>
            {" "}
            <div style={css("height: 40vh")}></div>
            {" "}
            <section id="about" data-stop="1" className="lane papyrus" style={css("margin: 0 30% 0 8%; padding: 26px; display: flex; flex-direction: column; gap: 14px")}>
              <span className="hour">
                {"17:00 · GOLDEN HOUR · THREE GIFTS OF THE SUN"}
              </span>
              {" "}
              <p style={css("margin: 0; font-size: 17px; line-height: 1.6; font-style: italic")}>
                {"A tech geek who rises early and never sets on a problem. "}{C.bio.origin}
              </p>
              {" "}
              <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px")}>
                <div style={css("border-top: 6px solid #E8B33A; background: rgba(255,250,235,.7); padding: 14px; display: flex; flex-direction: column; gap: 6px")}>
                  <span style={css("font-family: 'Marcellus SC', serif; font-size: 22px; color: #1F3A7A")}>
                    {"Light · Front end"}
                  </span>
                  <span style={css("font-size: 14px; line-height: 1.5")}>
                    {C.skills.frontend}
                  </span>
                </div>
                {" "}
                <div style={css("border-top: 6px solid #B5532E; background: rgba(255,250,235,.7); padding: 14px; display: flex; flex-direction: column; gap: 6px")}>
                  <span style={css("font-family: 'Marcellus SC', serif; font-size: 22px; color: #1F3A7A")}>
                    {"Fire · Back end"}
                  </span>
                  <span style={css("font-size: 14px; line-height: 1.5")}>
                    {C.skills.backend}
                  </span>
                </div>
                {" "}
                <div style={css("border-top: 6px solid #1F3A7A; background: rgba(255,250,235,.7); padding: 14px; display: flex; flex-direction: column; gap: 6px")}>
                  <span style={css("font-family: 'Marcellus SC', serif; font-size: 22px; color: #1F3A7A")}>
                    {"Harvest · Business"}
                  </span>
                  <span style={css("font-size: 14px; line-height: 1.5")}>
                    {C.skills.business}
                  </span>
                </div>
              </div>
            </section>
            {" "}
            <div style={css("height: 40vh")}></div>
            {" "}
            <section id="venture" data-stop="1" className="lane papyrus" style={css("margin: 0 8% 0 40%; padding: 26px; display: flex; flex-direction: column; gap: 10px")}>
              <span className="hour">
                {"19:00 · DUSK · MY TEMPLE"}
              </span>
              {" "}
              <div style={css("font-size: 14px")}>
                {"Founder of"}
              </div>
              {" "}
              <div style={css("font-family: 'Marcellus SC', serif; font-size: clamp(36px, 4.6vw, 60px); line-height: 1; color: #1F3A7A")}>
                {C.company.name}
              </div>
              {" "}
              <p style={css("margin: 0; font-size: 17px; line-height: 1.55")}>
                {C.company.summary}
              </p>
              {" "}
              <a href="#venture" style={css("align-self: flex-start; text-decoration: none; background: #1F3A7A; color: #F2E3BE; padding: 12px 20px; font-family: 'Marcellus SC', serif; font-size: 17px")}>
                {"Enter the temple →"}
              </a>
            </section>
            {" "}
            <div style={css("height: 46vh")}></div>
            {" "}
            <footer id="contact" data-stop="1" className="lane" style={css("margin: 0 12% 0 12%; padding-bottom: 30vh; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; color: #F3EBD2")}>
              <span className="hour" style={css("color: #E8B33A")}>
                {"21:00 · NIGHT · THE SUN WILL RISE AGAIN"}
              </span>
              {" "}
              <h2 style={css("margin: 0; font-family: 'Marcellus SC', serif; font-weight: 400; font-size: clamp(44px, 7vw, 92px); line-height: 1")}>
                {"The sun rises daily."}
                <br />
                <span style={css("color: #E8B33A")}>
                  {"So can your project."}
                </span>
              </h2>
              {" "}
              <a href={`mailto:${C.email}`} style={css("color: #F3EBD2; font-size: clamp(20px, 3vw, 28px); text-underline-offset: 6px")}>
                {C.email}
              </a>
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; font-family: 'Marcellus SC', serif; font-size: 18px")}>
                <a href={C.links.github} style={css("color: #F3EBD2")} target="_blank" rel="noreferrer">
                  {"GitHub"}
                </a>
                <a href={C.links.linkedin} style={css("color: #F3EBD2")} target="_blank" rel="noreferrer">
                  {"LinkedIn"}
                </a>
                <a href={C.company.url} style={css("color: #F3EBD2")} target="_blank" rel="noreferrer">
                  {C.company.siteLabel}
                </a>
              </div>
              {" "}
              <button type="button" className="ctl" onClick={v.again} style={css("margin-top: 8px")}>
                {"Start a new day ↑"}
              </button>
              {" "}
              <div style={css("font-size: 14px; color: #CBB98A")}>
                {"© Raphael Gabriel Geronimo · Always shining"}
              </div>
            </footer>
          </div>
          {" "}
          {" "}
          <div className="dial" aria-hidden="true" style={css("position: absolute; right: 22px; top: 22px; z-index: 4; display: flex; flex-direction: column; align-items: center; gap: 6px; pointer-events: none")}>
            <div style={css("width: 108px; height: 108px; border-radius: 50%; background: #F2E3BE; border: 4px solid #C99A3A; position: relative; box-shadow: 0 8px 18px rgba(0,0,0,.25)")}>
              <div style={css(`position: absolute; left: 50%; top: 50%; width: 3px; height: 44px; margin-left: -1.5px; background: #1F3A7A; transform-origin: 50% 0; transform: rotate(${v.dialRot}deg)`)}></div>
              {" "}
              <div style={css("position: absolute; left: 50%; top: 50%; width: 12px; height: 12px; margin: -6px 0 0 -6px; border-radius: 50%; background: #B5532E")}></div>
            </div>
            {" "}
            <span style={css("font-family: 'JetBrains Mono', monospace; font-weight: 600; font-size: 13px; background: #1F3A7A; color: #F2E3BE; padding: 4px 10px; border-radius: 6px")}>
              {v.clock}{" · "}{v.period}
            </span>
          </div>
          {" "}
          {v.showCtl ? (
            <>
              <button type="button" className="ctl" onClick={v.play} style={css("position: absolute; right: 22px; bottom: 22px; z-index: 5; font-size: 15px; padding: 8px 18px; min-height: 44px")}>
                {v.playLabel}
              </button>
            </>
          ) : null}
        </section>
      </div>
      </>
    );
  }
}
