'use client';
// Generated from the Rapphael design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#2A1410}\na{color:#FFE14D}a:hover{color:#FFFFFF}\n.brick{background-color:#6E2E22;background-image:linear-gradient(#4A1D16 3px,transparent 3px),linear-gradient(90deg,#4A1D16 3px,transparent 3px),linear-gradient(90deg,#4A1D16 3px,transparent 3px),radial-gradient(rgba(0,0,0,.25) 1px,transparent 1.6px);background-size:100% 44px,88px 88px,88px 88px,5px 5px;background-position:0 0,0 0,44px 44px,0 0}\n.ctl{width:58px;height:50px;background:#2B2B2B;color:#EDEDED;border:0;border-bottom:5px solid #111111;border-radius:6px;cursor:pointer;font-size:18px;font-family:'Archivo',sans-serif;font-weight:800;transition:transform .06s ease}\n.ctl:hover{background:#3A3A3A}\n.ctl:active{transform:translateY(3px);border-bottom-width:2px}\n.ctl.on{background:#FFE14D;color:#111111}\n.trk{display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:10px;align-items:baseline;width:100%;text-align:left;background:transparent;border:0;border-bottom:1px dashed #C9C2B0;padding:10px 4px;font-family:'Archivo',sans-serif;font-size:15px;color:#1A1A1A;cursor:pointer}\n.trk:hover{background:#FFF3A6}\n.lined{background-color:#FBF8EE;background-image:linear-gradient(90deg,transparent 54px,#F28B8B 54px,#F28B8B 56px,transparent 56px),linear-gradient(#FBF8EE 34px,#A8C6E8 34px,#A8C6E8 35px);background-size:100% 100%,100% 36px}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Caveat:wght@500;700&family=Archivo:wght@400;600;800&family=JetBrains+Mono:wght@600&display=swap"];

export default class RapHael extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  tape() {
    return [
      { title: 'Intro (Who Dis?)', len: '1:24', lines: ["Yo — I'm Raphael Gabriel Geronimo", 'Full-stack developer, founder too', 'Front end, back end, business on the hook', `${C.city} stand up — [add your own line]`] },
      { title: `${C.projects[0].name}`, len: '3:12', lines: ['Built [what it is] for [who it was for]', `Result on the board: ${C.projects[0].result}`, `Stack in the booth: ${C.projects[0].stack}`, `Type of track: ${C.projects[0].type}`], link: 'Peep the case study →', href: '#work' },
      { title: `${C.projects[1].name}`, len: '2:58', lines: ['Built [what it is] for [who it was for]', `Result on the board: ${C.projects[1].result}`, `Stack in the booth: ${C.projects[1].stack}`, `Type of track: ${C.projects[1].type}`], link: 'Peep the case study →', href: '#work' },
      { title: `${C.projects[2].name}`, len: '2:41', lines: ['Built [what it is] for [who it was for]', `Result on the board: ${C.projects[2].result}`, `Stack in the booth: ${C.projects[2].stack}`, `Type of track: ${C.projects[2].type}`], link: 'Peep the case study →', href: '#work' },
      { title: 'The Hook (Skills)', len: '2:05', lines: [`Front end: ${C.skills.frontend}`, `Back end: ${C.skills.backend}`, `Business: ${C.skills.business}`, 'Tech geek on every verse — no ghostwriter'] },
      { title: 'On My Own Label', len: '2:30', lines: [`Founder of ${C.company.name}`, `${C.company.summary}`, 'Serving [who your customers are]', 'Independent, and proud of it'], link: 'Visit the label →', href: '#contact' },
      { title: 'Outro (Holla)', len: '1:10', lines: ['Wanna feature? Hit my line', `${C.email}`, `GitHub · LinkedIn · ${C.company.siteLabel}`, 'Mic drop.'], link: 'Book a feature →', href: '#contact' }
    ];
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 50);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.stopBeat();
    if (this.ac && this.ac.close) { try { this.ac.close(); } catch (e) {} }
  }
  tick() {
    const s = this.state || {};
    if (!s.playing) return;
    const tape = this.tape();
    const tr = s.track || 0;
    let el = (s.el || 0) + 50;
    let next = tr;
    if (el >= tape[tr].lines.length * 1900 + 600) { next = (tr + 1) % tape.length; el = 0; }
    this.setState({ el: el, track: next, rot: ((s.rot || 0) + 7) % 360 });
  }
  startBeat() {
    if (this.beatTimer) return;
    try {
      if (!this.ac) this.ac = new (window.AudioContext || window.webkitAudioContext)();
      if (this.ac.state === 'suspended') this.ac.resume();
    } catch (e) { return; }
    const ac = this.ac;
    const master = ac.createGain();
    master.gain.value = 0.22;
    master.connect(ac.destination);
    this.master = master;
    const step = 60 / 88 / 4;
    let i = 0;
    let t = ac.currentTime + 0.05;
    const noiseBuf = ac.createBuffer(1, ac.sampleRate * 0.3, ac.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let k = 0; k < d.length; k++) d[k] = Math.random() * 2 - 1;
    const kick = (when) => { const o = ac.createOscillator(); const g = ac.createGain(); o.frequency.setValueAtTime(130, when); o.frequency.exponentialRampToValueAtTime(42, when + 0.18); g.gain.setValueAtTime(1, when); g.gain.exponentialRampToValueAtTime(0.001, when + 0.32); o.connect(g); g.connect(master); o.start(when); o.stop(when + 0.34); };
    const noise = (when, dur, freq, type, vol) => { const n = ac.createBufferSource(); n.buffer = noiseBuf; const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; const g = ac.createGain(); g.gain.setValueAtTime(vol, when); g.gain.exponentialRampToValueAtTime(0.001, when + dur); n.connect(f); f.connect(g); g.connect(master); n.start(when); n.stop(when + dur + 0.02); };
    const kicks = [0, 7, 10];
    this.beatTimer = setInterval(() => {
      while (t < ac.currentTime + 0.2) {
        const p = i % 16;
        if (kicks.indexOf(p) !== -1) kick(t);
        if (p === 4 || p === 12) noise(t, 0.18, 1800, 'bandpass', 0.9);
        if (p % 2 === 0) noise(t, 0.04, 7000, 'highpass', 0.35);
        t += step; i++;
      }
    }, 50);
  }
  stopBeat() {
    clearInterval(this.beatTimer);
    this.beatTimer = null;
    if (this.master) { try { this.master.disconnect(); } catch (e) {} this.master = null; }
  }
  fmt(ms) {
    const sec = Math.floor(ms / 1000);
    return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  }
  renderVals() {
    const s = this.state || {};
    const tape = this.tape();
    const tr = s.track || 0;
    const cur = tape[tr];
    const el = s.el || 0;
    const playing = !!s.playing;
    const lineIdx = Math.min(cur.lines.length - 1, Math.floor(el / 1900));
    const dur = cur.lines.length * 1900 + 600;
    const go = (i) => { this.setState({ track: i, el: 0, playing: true }); if (s.beatOn && !this.beatTimer) this.startBeat(); };
    return {
      rot: (s.rot || 0).toFixed(0),
      playIcon: playing ? '❚❚' : '▶',
      playLabel: playing ? 'Pause' : 'Play',
      playCls: playing ? 'on' : '',
      beatTxt: s.beatOn ? 'ON' : 'OFF',
      beatCls: s.beatOn ? 'on' : '',
      tNow: this.fmt(el * 3),
      tLen: cur.len,
      prog: Math.min(100, (el / dur) * 100).toFixed(1),
      trackNo: String(tr + 1).padStart(2, '0'),
      trackTitle: cur.title,
      lines: cur.lines.map((t, i) => ({
        text: t,
        bg: playing && i === lineIdx ? '#FFE14D' : 'transparent',
        fg: !playing || i <= lineIdx ? '#1A1A1A' : '#9A9A9A'
      })),
      hasLink: !!cur.link,
      linkText: cur.link || '',
      linkHref: cur.href || '#top',
      tracks: tape.map((t, i) => ({
        no: String(i + 1).padStart(2, '0'),
        title: t.title,
        len: t.len,
        bg: i === tr ? '#FFF3A6' : 'transparent',
        fw: i === tr ? 800 : 400,
        play: () => go(i)
      })),
      toggle: () => {
        const p = !playing;
        this.setState({ playing: p });
        if (p && s.beatOn) this.startBeat();
        if (!p) this.stopBeat();
      },
      prev: () => go((tr - 1 + tape.length) % tape.length),
      next: () => go((tr + 1) % tape.length),
      stopIt: () => { this.stopBeat(); this.setState({ playing: false, el: 0, track: 0 }); },
      beat: () => {
        const on = !s.beatOn;
        this.setState({ beatOn: on });
        if (on && playing) this.startBeat();
        if (!on) this.stopBeat();
      }
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="brick" style={css("min-height: 100vh; color: #FFFFFF; font-family: 'Archivo', system-ui, sans-serif")}>
        <div style={css("background: #FFE14D; color: #111111; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-family: 'JetBrains Mono', monospace; font-weight: 600")}>
          <span>
            {"Theme: Rap-hael"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #111111; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #111111; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <div style={css("max-width: 1200px; margin: 0 auto; padding: clamp(28px, 5vw, 56px) 20px 72px; display: flex; flex-direction: column; gap: 40px")}>
          <section id="top" style={css("display: flex; flex-wrap: wrap; gap: 36px; align-items: center")}>
            <div style={css("flex: 1 1 340px; min-width: 0; display: flex; flex-direction: column; gap: 16px")}>
              <span style={css("align-self: flex-start; font-family: 'JetBrains Mono', monospace; font-weight: 600; font-size: 13px; background: #111111; padding: 6px 12px; transform: rotate(-2deg)")}>
                {"MIXTAPE VOL. 1 · FULL-STACK DEVELOPER · FOUNDER"}
              </span>
              {" "}
              <h1 style={css("margin: 0; font-family: 'Permanent Marker', cursive; font-weight: 400; font-size: clamp(80px, 12vw, 168px); line-height: 0.85; color: #FFE14D; text-shadow: 5px 5px 0 #111111, -2px -2px 0 #FF4FA3; transform: rotate(-3deg)")}>
                {"Rap-hael"}
              </h1>
              {" "}
              <p style={css("margin: 8px 0 0; font-size: 19px; line-height: 1.55; font-weight: 600; background: rgba(17,17,17,.8); padding: 14px 16px; max-width: 460px")}>
                {"Raphael Gabriel Geronimo. Seven tracks, one tape: who I am, what I built, and how to book a feature. Press play."}
              </p>
            </div>
            {" "}
            <div style={css("flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 14px")}>
              <svg viewBox="0 0 520 330" role="img" aria-label="Cassette tape: Rap-hael Mixtape Vol. 1" style={css("width: 100%; max-width: 560px; filter: drop-shadow(0 18px 0 rgba(0,0,0,.35))")}>
                <rect x="6" y="6" width="508" height="318" rx="22" fill="#1E1E1E" stroke="#0A0A0A" strokeWidth="4"></rect>
                {" "}
                <circle cx="26" cy="26" r="6" fill="#3A3A3A"></circle>
                <circle cx="494" cy="26" r="6" fill="#3A3A3A"></circle>
                <circle cx="26" cy="304" r="6" fill="#3A3A3A"></circle>
                <circle cx="494" cy="304" r="6" fill="#3A3A3A"></circle>
                {" "}
                <rect x="40" y="30" width="440" height="200" rx="10" fill="#FFE14D"></rect>
                {" "}
                <rect x="40" y="30" width="440" height="44" rx="10" fill="#FF4FA3"></rect>
                {" "}
                <rect x="40" y="62" width="440" height="12" fill="#FF4FA3"></rect>
                {" "}
                <text x="60" y="61" fontFamily="Permanent Marker, cursive" fontSize="28" fill="#111111">
                  {"RAP-HAEL"}
                </text>
                {" "}
                <text x="462" y="60" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontWeight="600" fontSize="14" fill="#111111">
                  {"VOL.1 · SIDE A"}
                </text>
                {" "}
                <path d="M60 98 H460 M60 210 H460" stroke="#111111" strokeWidth="2" strokeDasharray="4 6"></path>
                {" "}
                <rect x="120" y="108" width="280" height="92" rx="46" fill="#2A2A2A" stroke="#111111" strokeWidth="4"></rect>
                {" "}
                <rect x="196" y="122" width="128" height="64" rx="6" fill="#4A2E22"></rect>
                {" "}
                <g transform={`rotate(${v.rot} 166 154)`}>
                  <circle cx="166" cy="154" r="34" fill="#EDEDED" stroke="#111111" strokeWidth="3"></circle>
                  <circle cx="166" cy="154" r="11" fill="#2A2A2A"></circle>
                  <path d="M166 124 V136 M166 172 V184 M136 154 H148 M184 154 H196" stroke="#111111" strokeWidth="6" strokeLinecap="round"></path>
                </g>
                {" "}
                <g transform={`rotate(${v.rot} 354 154)`}>
                  <circle cx="354" cy="154" r="34" fill="#EDEDED" stroke="#111111" strokeWidth="3"></circle>
                  <circle cx="354" cy="154" r="11" fill="#2A2A2A"></circle>
                  <path d="M354 124 V136 M354 172 V184 M324 154 H336 M372 154 H384" stroke="#111111" strokeWidth="6" strokeLinecap="round"></path>
                </g>
                {" "}
                <path d="M120 300 L150 246 H370 L400 300 Z" fill="#2A2A2A" stroke="#0A0A0A" strokeWidth="3"></path>
                {" "}
                <circle cx="190" cy="282" r="9" fill="#111111"></circle>
                <circle cx="330" cy="282" r="9" fill="#111111"></circle>
              </svg>
              {" "}
              <div style={css("display: flex; gap: 8px; flex-wrap: wrap; justify-content: center")}>
                <button type="button" className="ctl" onClick={v.prev} aria-label="Previous track">
                  {"◀◀"}
                </button>
                {" "}
                <button type="button" className={`ctl ${v.playCls}`} onClick={v.toggle} aria-label={v.playLabel} style={css("width: 84px")}>
                  {v.playIcon}
                </button>
                {" "}
                <button type="button" className="ctl" onClick={v.next} aria-label="Next track">
                  {"▶▶"}
                </button>
                {" "}
                <button type="button" className="ctl" onClick={v.stopIt} aria-label="Stop">
                  {"■"}
                </button>
                {" "}
                <button type="button" className={`ctl ${v.beatCls}`} onClick={v.beat} style={css("width: auto; padding: 0 14px; font-size: 13px; font-family: 'JetBrains Mono', monospace")}>
                  {"BEAT "}{v.beatTxt}
                </button>
              </div>
              {" "}
              <div style={css("width: 100%; max-width: 560px; display: flex; align-items: center; gap: 10px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #FFE14D")}>
                <span>
                  {v.tNow}
                </span>
                {" "}
                <div style={css("flex: 1; height: 8px; background: rgba(0,0,0,.45); border-radius: 4px; overflow: hidden")}>
                  <div style={css(`height: 100%; width: ${v.prog}%; background: #FFE14D`)}></div>
                </div>
                {" "}
                <span>
                  {v.tLen}
                </span>
              </div>
            </div>
          </section>
          {" "}
          <section id="work" aria-label="Lyric sheet and tracklist" style={css("display: flex; flex-wrap: wrap; gap: 28px; align-items: flex-start")}>
            <div className="lined" aria-live="polite" style={css("flex: 999 1 520px; min-width: 0; color: #1A1A1A; padding: 28px 28px 34px 76px; box-shadow: 0 16px 0 rgba(0,0,0,.35); transform: rotate(-0.8deg); min-height: 380px")}>
              <div style={css("font-family: 'JetBrains Mono', monospace; font-weight: 600; font-size: 12px; color: #B33A2E; line-height: 36px")}>
                {"TRACK "}{v.trackNo}{" · LYRICS"}
              </div>
              {" "}
              <h2 style={css("margin: 0; font-family: 'Permanent Marker', cursive; font-weight: 400; font-size: clamp(30px, 4vw, 46px); line-height: 72px")}>
                {v.trackTitle}
              </h2>
              {" "}
              {(v.lines || []).map((ln, __i0) => (
                <React.Fragment key={__i0}>
                  <div style={css(`font-family: 'Caveat', cursive; font-weight: 700; font-size: 27px; line-height: 36px; padding: 0 6px; background: ${ln.bg}; color: ${ln.fg}; transition: background .3s ease`)}>
                    {ln.text}
                  </div>
                </React.Fragment>
              ))}
              {" "}
              {v.hasLink ? (
                <>
                  <a href={v.linkHref} style={css("display: inline-block; margin-top: 12px; font-family: 'Permanent Marker', cursive; font-size: 20px; color: #B33A2E")}>
                    {v.linkText}
                  </a>
                </>
              ) : null}
            </div>
            {" "}
            <div style={css("flex: 1 1 320px; min-width: 0; background: #FFFFFF; color: #1A1A1A; border-top: 14px solid #FF4FA3; box-shadow: 0 16px 0 rgba(0,0,0,.35)")}>
              <div style={css("padding: 16px 18px 6px; display: flex; justify-content: space-between; align-items: baseline")}>
                <span style={css("font-family: 'Permanent Marker', cursive; font-size: 24px")}>
                  {"Tracklist"}
                </span>
                <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px")}>
                  {"SIDE A"}
                </span>
              </div>
              {" "}
              <div style={css("padding: 0 14px 14px")}>
                {(v.tracks || []).map((t, __i0) => (
                  <React.Fragment key={__i0}>
                    <button type="button" className="trk" onClick={t.play} style={css(`background: ${t.bg}; font-weight: ${t.fw}`)}>
                      <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px")}>
                        {t.no}
                      </span>
                      {" "}
                      <span>
                        {t.title}
                      </span>
                      {" "}
                      <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #6A6A6A")}>
                        {t.len}
                      </span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
          {" "}
          <section id="contact" style={css("display: flex; flex-wrap: wrap; gap: 20px 32px; align-items: center; justify-content: space-between; background: rgba(17,17,17,.88); padding: 26px 28px; transform: rotate(-0.5deg)")}>
            <div style={css("display: flex; flex-direction: column; gap: 6px")}>
              <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #FF4FA3")}>
                {"BOOK A FEATURE"}
              </span>
              {" "}
              <a href={`mailto:${C.email}`} style={css("font-family: 'Permanent Marker', cursive; font-size: clamp(26px, 3.6vw, 40px); text-decoration: none")}>
                {C.email}
              </a>
            </div>
            {" "}
            <div style={css("display: flex; flex-wrap: wrap; gap: 10px 22px; font-weight: 800")}>
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
            <span style={css("font-size: 13px; color: #BDBDBD")}>
              {"© Raphael Gabriel Geronimo · Mic drop"}
            </span>
          </section>
        </div>
      </div>
      </>
    );
  }
}
