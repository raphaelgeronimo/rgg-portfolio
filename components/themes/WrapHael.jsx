'use client';
// Generated from the Wraphael design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#E9DFCF}\na{color:#2A2118}a:hover{color:#C8321F}\n.kraft{background-color:#C9A06B;background-image:repeating-linear-gradient(90deg,rgba(110,70,30,.07) 0 1px,transparent 1px 7px),repeating-linear-gradient(0deg,rgba(255,240,210,.05) 0 2px,transparent 2px 5px)}\n.kraft-d{background-color:#A97D49;background-image:repeating-linear-gradient(90deg,rgba(80,50,20,.10) 0 1px,transparent 1px 7px)}\n.tapeline{background:repeating-linear-gradient(90deg,#E6C98C 0 120px,#E1C283 120px 240px);box-shadow:0 1px 0 rgba(255,255,255,.35) inset,0 2px 6px rgba(60,40,10,.25)}\n.stencil{font-family:'Stardos Stencil',serif;font-weight:700;letter-spacing:.06em}\n.hand{font-family:'Caveat',cursive;font-weight:700}\n.mono{font-family:'IBM Plex Mono',monospace}\n\n/* bubble wrap */\n.film{background:rgba(236,244,247,.42);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.5)}\n.grid{display:grid;gap:6px;padding:10px;box-sizing:border-box;touch-action:none;user-select:none;-webkit-user-select:none}\n.bub{display:block;aspect-ratio:1;border-radius:50%;cursor:pointer;background:radial-gradient(circle at 34% 30%,rgba(255,255,255,.98) 0 9%,rgba(255,255,255,.45) 17%,rgba(225,240,247,.28) 48%,rgba(150,180,198,.32) 66%,rgba(255,255,255,.55) 70%,transparent 73%);box-shadow:0 3px 5px rgba(40,50,60,.12);transition:transform .12s cubic-bezier(.3,1.6,.5,1),opacity .2s}\n.bub:hover{transform:scale(1.07)}\n.bub.pp{cursor:default;transform:scale(.9);background:radial-gradient(circle at 50% 50%,rgba(255,255,255,.18) 0 50%,rgba(150,170,185,.35) 62%,transparent 70%);box-shadow:none}\n.bub.pp::after{content:\"\";display:block;width:60%;height:2px;margin:46% auto 0;background:rgba(120,140,155,.45);transform:rotate(-24deg);border-radius:2px}\n\n/* box */\n.flap{position:absolute;top:0;bottom:0;width:50%;transition:transform 1.1s cubic-bezier(.5,0,.25,1);box-shadow:inset 0 0 0 1px rgba(80,50,20,.25)}\n.flap.l{left:0;transform-origin:0 50%}\n.flap.r{right:0;transform-origin:100% 50%}\n.cut{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;font-family:'Archivo Black',sans-serif;font-size:17px;background:#2A2118;color:#F6EEDF;border:0;border-radius:999px;padding:14px 24px;min-height:52px;cursor:pointer;box-shadow:0 5px 0 #000000;transition:transform .08s}\n.cut:active{transform:translateY(3px);box-shadow:0 2px 0 #000000}\n.tag{display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase}\n.btn{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1.2;font-family:'Archivo',sans-serif;font-weight:700;font-size:15px;background:#F6EEDF;color:#2A2118;border:2px solid #2A2118;border-radius:999px;padding:10px 18px;min-height:46px;cursor:pointer}\n.btn:hover{background:#2A2118;color:#F6EEDF}\n.parcel-wrap{position:absolute;inset:0;border-radius:14px;overflow:hidden;transition:transform .9s cubic-bezier(.6,0,.3,1),opacity .5s ease .45s}\n.slip{background:#FBF8F1;color:#2A2118;box-shadow:0 14px 30px rgba(60,40,10,.18);position:relative}\n.slip::before,.slip::after{content:\"\";position:absolute;left:0;right:0;height:10px;background:radial-gradient(circle at 7px 5px,#E9DFCF 4px,transparent 4.5px);background-size:14px 10px}\n.slip::before{top:-5px}.slip::after{bottom:-5px}\n.barcode{height:64px;background:repeating-linear-gradient(90deg,#2A2118 0 2px,transparent 2px 4px,#2A2118 4px 7px,transparent 7px 8px,#2A2118 8px 9px,transparent 9px 13px,#2A2118 13px 16px,transparent 16px 17px)}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Archivo+Black&family=Stardos+Stencil:wght@700&family=Caveat:wght@600;700&family=IBM+Plex+Mono:wght@400;600&family=Archivo:wght@400;500;700&display=swap"];

export default class WrapHael extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.up = () => { this.dragging = false; };
    document.addEventListener('pointerup', this.up);
    document.addEventListener('pointercancel', this.up);
  }
  componentWillUnmount() {
    document.removeEventListener('pointerup', this.up);
    document.removeEventListener('pointercancel', this.up);
    clearInterval(this.unwrapTimer);
  }
  sound(i) {
    const s = this.state || {};
    if (s.mute) return;
    try {
      if (!this.ac) this.ac = new (window.AudioContext || window.webkitAudioContext)();
      const ac = this.ac;
      const len = Math.floor(ac.sampleRate * 0.05);
      const buf = ac.createBuffer(1, len, ac.sampleRate);
      const d = buf.getChannelData(0);
      for (let k = 0; k < len; k++) d[k] = (Math.random() * 2 - 1) * Math.pow(1 - k / len, 6);
      const src = ac.createBufferSource(); src.buffer = buf;
      const f = ac.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1300 + Math.random() * 1600; f.Q.value = 1.4;
      const g = ac.createGain(); g.gain.value = 0.55;
      src.connect(f); f.connect(g); g.connect(ac.destination);
      src.start();
    } catch (e) {}
  }
  pop(key, quiet) {
    if (!this.popped) this.popped = {};
    if (this.popped[key]) return false;
    this.popped[key] = true;
    this.total = (this.total || 0) + 1;
    if (!quiet) this.sound();
    const m = /^p(\d)-/.exec(key);
    if (m) {
      const k = +m[1];
      const n = this.countFor(k);
      if (n >= 18) this.open(k);
    }
    this.setState({ v: (this.state && this.state.v || 0) + 1 });
    return true;
  }
  countFor(k) {
    let n = 0;
    for (let i = 0; i < 30; i++) if (this.popped && this.popped['p' + k + '-' + i]) n++;
    return n;
  }
  open(k) {
    if (!this.unwrapped) this.unwrapped = {};
    this.unwrapped[k] = true;
  }
  bubs(prefix, count) {
    const out = [];
    for (let i = 0; i < count; i++) {
      const key = prefix + i;
      const done = !!(this.popped && this.popped[key]);
      out.push({
        cls: done ? 'pp' : '',
        down: (e) => {
          this.dragging = true;
          try { if (e && e.target && e.target.releasePointerCapture) e.target.releasePointerCapture(e.pointerId); } catch (x) {}
          this.pop(key);
        },
        enter: () => { if (this.dragging) this.pop(key); }
      });
    }
    return out;
  }
  renderVals() {
    const s = this.state || {};
    const closed = !s.open;
    const kinds = [`${C.projects[0].type}`, `${C.projects[1].type}`, `${C.projects[2].type}`];
    const parcels = [1, 2, 3].map((k) => {
      const wrapped = !(this.unwrapped && this.unwrapped[k]);
      const n = this.countFor(k);
      return {
        i: k - 1,
        tag: 'Item 0' + k + ' / 03 · fragile',
        kind: kinds[k - 1],
        count: wrapped ? n + ' / 30 popped' : 'unwrapped',
        bubs: this.bubs('p' + k + '-', 30),
        wrapped: wrapped,
        done: !wrapped,
        wrapT: wrapped ? 'none' : 'translate(70%, -30%) rotate(18deg) scale(.9)',
        wrapOp: wrapped ? 1 : 0,
        wrapPe: wrapped ? 'auto' : 'none',
        unwrap: () => {
          clearInterval(this.unwrapTimer);
          let i = 0;
          this.unwrapTimer = setInterval(() => {
            while (i < 30 && this.popped && this.popped['p' + k + '-' + i]) i++;
            if (i >= 30) { clearInterval(this.unwrapTimer); this.open(k); this.setState({ v: (this.state.v || 0) + 1 }); return; }
            this.pop('p' + k + '-' + i);
          }, 30);
        },
        rewrap: () => {
          for (let i = 0; i < 30; i++) if (this.popped) delete this.popped['p' + k + '-' + i];
          if (this.unwrapped) this.unwrapped[k] = false;
          this.setState({ v: (s.v || 0) + 1 });
        }
      };
    });
    let lastDone = 0;
    for (let i = 0; i < 30; i++) if (this.popped && this.popped['f' + i]) lastDone++;
    const total = this.total || 0;
    return {
      popped: total,
      soundLabel: s.mute ? 'off' : 'on',
      toggleSound: () => this.setState({ mute: !s.mute }),
      closed: closed,
      isOpen: !closed,
      cut: () => { if (s.open) return; this.setState({ cutting: true }); setTimeout(() => this.setState({ open: true }), 450); },
      tapeY: s.cutting ? '-120%' : '0',
      tapeR: s.cutting ? -8 : 0,
      tapeOp: s.cutting ? 0 : 1,
      tapePe: s.cutting ? 'none' : 'auto',
      flapL: s.open ? -165 : 0,
      flapR: s.open ? 165 : 0,
      insideOp: s.open ? 1 : 0,
      insideY: s.open ? 0 : 24,
      parcels: parcels,
      lastBubs: this.bubs('f', 30),
      lastNote: lastDone >= 30 ? 'All ' + total + ' popped. You clearly finish what you start. Email me.' : (total > 0 ? total + ' popped so far. Keep going, nobody is watching.' : 'Go on. Pop one.')
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; background: #E9DFCF; color: #2A2118; font-family: 'Archivo', system-ui, sans-serif")}>
        <div style={css("background: #2A2118; color: #F6EEDF; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center")} className="mono">
          <span>
            {"Theme: Wrap-hael"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #F2C46D; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #F2C46D; padding: 6px 0")}>
            {"Deal again"}
          </a>
          {" "}
          <span aria-live="polite" style={css("color: #CDBFA8")}>
            {"Bubbles popped: "}
            <b style={css("color: #FFFFFF")}>
              {v.popped}
            </b>
          </span>
          {" "}
          <button type="button" onClick={v.toggleSound} style={css("font: inherit; background: transparent; color: #F2C46D; border: 1px solid #6B5A44; border-radius: 999px; padding: 6px 12px; cursor: pointer")}>
            {"Sound: "}{v.soundLabel}
          </button>
        </div>
        {" "}
        {" "}
        <section id="top" style={css("padding: 56px 16px 72px; display: flex; flex-direction: column; align-items: center; gap: 28px")}>
          <div className="tag" style={css("color: #8A6A44")}>
            {"Parcel for you · handle with care"}
          </div>
          {" "}
          <div style={css("position: relative; width: min(860px, 100%); aspect-ratio: 4 / 3; perspective: 1600px")}>
            {" "}
            <div className="kraft-d" style={css("position: absolute; inset: 0; border-radius: 10px; box-shadow: inset 0 0 0 10px #8E6536, inset 0 30px 60px rgba(40,20,0,.45), 0 30px 50px rgba(60,40,10,.3); display: flex; align-items: center; justify-content: center; overflow: hidden")}>
              <div className="film" style={css("position: absolute; inset: 6%; border-radius: 12px")}></div>
              {" "}
              <div style={css(`position: relative; text-align: center; display: flex; flex-direction: column; align-items: center; gap: clamp(8px, 1.6vw, 16px); padding: 24px; opacity: ${v.insideOp}; transform: translateY(${v.insideY}px); transition: opacity .6s ease .7s, transform .8s cubic-bezier(.2,1.2,.3,1) .7s`)}>
                <span className="tag" style={css("color: #4A3420")}>
                  {"Full-stack developer · founder · professional packer"}
                </span>
                {" "}
                <h1 style={css("margin: 0; font-family: 'Archivo Black', sans-serif; font-size: clamp(54px, 11vw, 132px); line-height: .9; letter-spacing: -.03em; color: #FBF8F1; text-shadow: 0 4px 0 #2A2118")}>
                  {"Wrap-hael"}
                </h1>
                {" "}
                <p style={css("margin: 0; max-width: 520px; font-size: clamp(16px, 2vw, 20px); line-height: 1.5; color: #FBF8F1; text-shadow: 0 1px 2px rgba(40,20,0,.6)")}>
                  {"Raphael Gabriel Geronimo. I pack products carefully: tested, protected, padded on all sides, delivered without a scratch."}
                </p>
                {" "}
                <span className="hand" style={css("font-size: clamp(22px, 3vw, 30px); color: #FBF8F1; transform: rotate(-3deg)")}>
                  {"contents below, go ahead and pop ↓"}
                </span>
              </div>
            </div>
            {" "}
            {" "}
            <div className="flap l kraft" style={css(`transform: rotateY(${v.flapL}deg); border-radius: 10px 0 0 10px`)}>
              <div style={css("position: absolute; left: 7%; top: 9%; right: 10%; display: flex; flex-direction: column; gap: 6px")}>
                <span className="stencil" style={css("font-size: clamp(22px, 4.6vw, 52px); color: #C8321F; line-height: 1; transform: rotate(-4deg); transform-origin: left; border: clamp(2px, .4vw, 4px) solid #C8321F; padding: 4px 10px; align-self: flex-start")}>
                  {"FRAGILE"}
                </span>
                {" "}
                <span className="hand" style={css("font-size: clamp(18px, 3vw, 34px); color: #3A2A1A; margin-top: 10px; transform: rotate(-2deg)")}>
                  {"Contains ideas. Don't drop."}
                </span>
              </div>
              {" "}
              <svg viewBox="0 0 60 90" aria-hidden="true" style={css("position: absolute; left: 8%; bottom: 10%; width: clamp(34px, 6vw, 64px)")}>
                <path d="M14 4 H46 Q46 34 30 40 Q14 34 14 4 Z M30 40 V76 M16 86 H44" fill="none" stroke="#3A2A1A" strokeWidth="4" strokeLinejoin="round"></path>
                <path d="M22 18 L28 26 L24 32" fill="none" stroke="#3A2A1A" strokeWidth="3"></path>
              </svg>
              {" "}
              <div className="stencil" style={css("position: absolute; left: 24%; bottom: 11%; font-size: clamp(12px, 1.8vw, 20px); color: #3A2A1A; line-height: 1.1")}>
                {"↑ ↑"}
                <br />
                {"THIS SIDE UP"}
              </div>
            </div>
            {" "}
            {" "}
            <div className="flap r kraft" style={css(`transform: rotateY(${v.flapR}deg); border-radius: 0 10px 10px 0`)}>
              <div className="slip" style={css("position: absolute; right: 8%; top: 10%; width: 78%; padding: clamp(10px, 2vw, 22px); box-sizing: border-box; transform: rotate(2deg); display: flex; flex-direction: column; gap: clamp(4px, .8vw, 8px)")}>
                <span className="mono" style={css("font-size: clamp(9px, 1.2vw, 12px); letter-spacing: .14em; color: #8A6A44")}>
                  {"SHIP TO"}
                </span>
                {" "}
                <span style={css("font-family: 'Archivo Black', sans-serif; font-size: clamp(15px, 2.6vw, 28px); line-height: 1")}>
                  {"You, the visitor"}
                </span>
                {" "}
                <span className="mono" style={css("font-size: clamp(9px, 1.2vw, 12px); letter-spacing: .14em; color: #8A6A44; margin-top: 6px")}>
                  {"FROM"}
                </span>
                {" "}
                <span style={css("font-weight: 700; font-size: clamp(12px, 1.8vw, 18px); line-height: 1.2")}>
                  {"Raphael Gabriel Geronimo"}
                </span>
                {" "}
                <div className="barcode" style={css("height: clamp(26px, 4.5vw, 52px); margin-top: 6px")}></div>
                {" "}
                <span className="mono" style={css("font-size: clamp(9px, 1.1vw, 12px)")}>
                  {"RGG-0001 · 3 ITEMS · 1 COMPANY"}
                </span>
              </div>
              {" "}
              <span className="hand" style={css("position: absolute; right: 10%; bottom: 9%; font-size: clamp(18px, 3vw, 32px); color: #3A2A1A; transform: rotate(-4deg)")}>
                {"packed by hand, R."}
              </span>
            </div>
            {" "}
            {" "}
            <button type="button" onClick={v.cut} aria-label="Cut the tape and open the box" className="tapeline" style={css(`position: absolute; left: 50%; top: 0; bottom: 0; overflow: hidden; border-radius: 2px; width: clamp(64px, 11vw, 120px); margin-left: calc(clamp(64px, 11vw, 120px) / -2); border: 0; padding: 0; cursor: pointer; background: linear-gradient(90deg, rgba(255,255,255,.25), transparent 30%, transparent 70%, rgba(0,0,0,.08)), #E6C98C; transform: translateY(${v.tapeY}) rotate(${v.tapeR}deg); opacity: ${v.tapeOp}; transition: transform .7s cubic-bezier(.6,0,.8,.4), opacity .4s ease .4s; display: flex; align-items: center; justify-content: center; pointer-events: ${v.tapePe}`)}>
              <span className="stencil" style={css("writing-mode: vertical-rl; font-size: clamp(14px, 2vw, 22px); color: #C8321F; letter-spacing: .3em; white-space: nowrap")}>
                {"FRAGILE · HANDLE WITH CARE · FRAGILE · HANDLE WITH CARE"}
              </span>
            </button>
          </div>
          {" "}
          {v.closed ? (
            <>
              <button type="button" className="cut" onClick={v.cut}>
                {"Cut the tape"}
              </button>
            </>
          ) : null}
          {" "}
          {v.isOpen ? (
            <>
              <a href="#contents" className="cut" style={css("text-decoration: none")}>
                {"Unwrap the contents ↓"}
              </a>
            </>
          ) : null}
        </section>
        {" "}
        {" "}
        <section id="contents" className="kraft" style={css("padding: 72px 24px 88px")}>
          <div style={css("max-width: 1180px; margin: 0 auto; display: flex; flex-direction: column; gap: 36px")}>
            <div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 16px")}>
              <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                <span className="tag" style={css("color: #4A3420")}>
                  {"Contents · 3 items"}
                </span>
                {" "}
                <h2 style={css("margin: 0; font-family: 'Archivo Black', sans-serif; font-size: clamp(40px, 6vw, 72px); line-height: .95; color: #2A2118")}>
                  {"Every project,"}
                  <br />
                  {"double-wrapped."}
                </h2>
              </div>
              {" "}
              <p className="hand" style={css("margin: 0; font-size: 28px; max-width: 360px; color: #2A2118; transform: rotate(-2deg)")}>
                {"Pop the bubbles to unwrap. Drag across them, it's allowed."}
              </p>
            </div>
            {" "}
            <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px")}>
              {(v.parcels || []).map((p, __i0) => (
                <React.Fragment key={__i0}>
                  <div style={css("display: flex; flex-direction: column; gap: 12px")}>
                    <div style={css("display: flex; justify-content: space-between; align-items: center; gap: 10px")}>
                      <span className="tag" style={css("color: #2A2118")}>
                        {p.tag}
                      </span>
                      {" "}
                      <span className="mono" style={css("font-size: 12px; color: #4A3420")}>
                        {p.count}
                      </span>
                    </div>
                    {" "}
                    <div style={css("position: relative; min-height: 380px; border-radius: 14px")}>
                      {" "}
                      <article style={css("position: absolute; inset: 0; background: #FBF8F1; border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 16px 30px rgba(60,40,10,.25)")}>
                        <div style={css("height: 150px; border-radius: 10px; background: #2A2118; color: #CDBFA8; display: flex; align-items: center; justify-content: center; font-size: 14px")}>
                          {shot(C.projects[p.i])}
                        </div>
                        {" "}
                        <span className="tag" style={css("color: #C8321F")}>
                          {p.kind}
                        </span>
                        {" "}
                        <h3 style={css("margin: 0; font-family: 'Archivo Black', sans-serif; font-size: 28px; line-height: 1")}>
                          {C.projects[p.i].name}
                        </h3>
                        {" "}
                        <p style={css("margin: 0; font-size: 16px; line-height: 1.5")}>
                          {C.projects[p.i].summary}
                        </p>
                        {" "}
                        <a href="#contents" style={css("font-weight: 700; margin-top: auto")}>
                          {"Open the box →"}
                        </a>
                      </article>
                      {" "}
                      {" "}
                      <div className="parcel-wrap film" aria-hidden="true" style={css(`transform: ${p.wrapT}; opacity: ${p.wrapOp}; pointer-events: ${p.wrapPe}`)}>
                        <div className="grid" style={css("grid-template-columns: repeat(6, 1fr); height: 100%; align-content: center")}>
                          {(p.bubs || []).map((b, __i1) => (
                            <React.Fragment key={__i1}>
                              <span className={`bub ${b.cls}`} onPointerDown={b.down} onPointerEnter={b.enter}></span>
                            </React.Fragment>
                          ))}
                        </div>
                        {" "}
                        <div className="stencil" style={css("position: absolute; left: 0; right: 0; top: 50%; margin-top: -20px; text-align: center; font-size: 30px; color: rgba(200,50,31,.75); pointer-events: none; transform: rotate(-8deg)")}>
                          {"FRAGILE"}
                        </div>
                      </div>
                    </div>
                    {" "}
                    {p.wrapped ? (
                      <>
                        <button type="button" className="btn" onClick={p.unwrap} style={css("align-self: flex-start")}>
                          {"Unwrap it for me"}
                        </button>
                      </>
                    ) : null}
                    {" "}
                    {p.done ? (
                      <>
                        <button type="button" className="btn" onClick={p.rewrap} style={css("align-self: flex-start")}>
                          {"Wrap it back up"}
                        </button>
                      </>
                    ) : null}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section id="about" style={css("padding: 88px 24px; background: #E9DFCF")}>
          <div style={css("max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 48px; align-items: center")}>
            <div style={css("display: flex; flex-direction: column; gap: 16px")}>
              <span className="tag" style={css("color: #8A6A44")}>
                {"Packing slip"}
              </span>
              {" "}
              <h2 style={css("margin: 0; font-family: 'Archivo Black', sans-serif; font-size: clamp(40px, 6vw, 68px); line-height: .95")}>
                {"What's padded in."}
              </h2>
              {" "}
              <p style={css("margin: 0; font-size: 18px; line-height: 1.6; max-width: 440px")}>
                {"A technology geek who packs every layer properly: the front end people touch, the back end that keeps it safe, and the business that gets it to the door. "}{C.bio.origin}
              </p>
            </div>
            {" "}
            <div className="slip" style={css("padding: 32px 28px; transform: rotate(-1.5deg)")}>
              <div style={css("display: flex; justify-content: space-between; align-items: baseline; border-bottom: 2px solid #2A2118; padding-bottom: 10px")}>
                <span style={css("font-family: 'Archivo Black', sans-serif; font-size: 22px")}>
                  {"PACKING SLIP"}
                </span>
                {" "}
                <span className="mono" style={css("font-size: 12px")}>
                  {"No. RGG-0001"}
                </span>
              </div>
              {" "}
              <div className="mono" style={css("display: grid; grid-template-columns: 40px 1fr; gap: 14px 12px; font-size: 14px; padding: 18px 0; line-height: 1.45")}>
                <span style={css("font-weight: 600")}>
                  {"QTY"}
                </span>
                <span style={css("font-weight: 600")}>
                  {"ITEM"}
                </span>
                {" "}
                <span>
                  {"01"}
                </span>
                <span>
                  <b>
                    {"Front end"}
                  </b>
                  <br />
                  {C.skills.frontend}
                </span>
                {" "}
                <span>
                  {"01"}
                </span>
                <span>
                  <b>
                    {"Back end"}
                  </b>
                  <br />
                  {C.skills.backend}
                </span>
                {" "}
                <span>
                  {"01"}
                </span>
                <span>
                  <b>
                    {"Business"}
                  </b>
                  <br />
                  {C.skills.business}
                </span>
                {" "}
                <span>
                  {"∞"}
                </span>
                <span>
                  <b>
                    {"Care"}
                  </b>
                  <br />
                  {"Tested before it ships. Every time."}
                </span>
              </div>
              {" "}
              <div style={css("display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px dashed #8A6A44; padding-top: 14px")}>
                <div style={css("display: flex; flex-direction: column")}>
                  <span className="mono" style={css("font-size: 11px; color: #8A6A44")}>
                    {"PACKED BY"}
                  </span>
                  <span className="hand" style={css("font-size: 34px; line-height: 1")}>
                    {"R. Geronimo"}
                  </span>
                </div>
                {" "}
                <div className="stencil" style={css("border: 3px solid #C8321F; color: #C8321F; border-radius: 50%; width: 96px; height: 96px; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 15px; line-height: 1.1; transform: rotate(-14deg); opacity: .9")}>
                  {"CHECKED"}
                  <br />
                  {"&"}
                  <br />
                  {"SEALED"}
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section id="venture" className="kraft" style={css("padding: 88px 24px; border-top: 10px solid #8E6536; border-bottom: 10px solid #8E6536")}>
          <div style={css("max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 22px; align-items: flex-start")}>
            <div className="stencil" style={css("font-size: 20px; color: #2A2118")}>
              {"SHIPPED BY"}
            </div>
            {" "}
            <div className="stencil" style={css("font-size: clamp(54px, 10vw, 128px); line-height: .9; color: #2A2118")}>
              {up(C.company.name)}
            </div>
            {" "}
            <div style={css("display: flex; flex-wrap: wrap; gap: 24px 40px; align-items: center")}>
              <p style={css("margin: 0; font-size: 19px; line-height: 1.55; max-width: 560px; color: #2A2118")}>
                {C.company.summary}{" I founded it, I run it, and I still check the packing myself."}
              </p>
              {" "}
              <a href="#venture" className="cut" style={css("text-decoration: none")}>
                {"Visit the warehouse →"}
              </a>
            </div>
            {" "}
            <div className="stencil" style={css("display: flex; flex-wrap: wrap; gap: 14px 34px; font-size: 18px; color: #2A2118; margin-top: 18px; opacity: .8")}>
              <span>
                {"↑↑ THIS WAY UP"}
              </span>
              <span>
                {"KEEP DRY"}
              </span>
              <span>
                {"DO NOT STACK OVER 3 PROJECTS"}
              </span>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section id="contact" style={css("padding: 88px 24px 96px; background: #E9DFCF")}>
          <div style={css("max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 48px; align-items: center")}>
            <div className="slip" style={css("padding: 30px 28px; display: flex; flex-direction: column; gap: 12px; transform: rotate(1deg); border: 3px solid #2A2118")}>
              <div style={css("display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #2A2118; padding-bottom: 10px")}>
                <span style={css("font-family: 'Archivo Black', sans-serif; font-size: 22px")}>
                  {"RETURN TO SENDER"}
                </span>
                {" "}
                <span className="stencil" style={css("background: #C8321F; color: #FFFFFF; padding: 4px 10px; font-size: 16px")}>
                  {"PRIORITY"}
                </span>
              </div>
              {" "}
              <span className="mono" style={css("font-size: 12px; letter-spacing: .14em; color: #8A6A44")}>
                {"SEND YOUR PROJECT TO"}
              </span>
              {" "}
              <a href={`mailto:${C.email}`} style={css("font-family: 'Archivo Black', sans-serif; font-size: clamp(22px, 3vw, 30px); text-underline-offset: 6px")}>
                {C.email}
              </a>
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 8px 20px; font-weight: 700; font-size: 16px")}>
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
              <div className="barcode" style={css("margin-top: 8px")}></div>
              {" "}
              <span className="mono" style={css("font-size: 12px")}>
                {"© Raphael Gabriel Geronimo · delivered with care"}
              </span>
            </div>
            {" "}
            <div style={css("display: flex; flex-direction: column; gap: 14px")}>
              <span className="tag" style={css("color: #8A6A44")}>
                {"One last sheet, for the road"}
              </span>
              {" "}
              <h2 style={css("margin: 0; font-family: 'Archivo Black', sans-serif; font-size: clamp(36px, 5vw, 56px); line-height: .95")}>
                {"Let's pack something together."}
              </h2>
              {" "}
              <div className="film" aria-hidden="true" style={css("border-radius: 14px; background-color: rgba(201,160,107,.35)")}>
                <div className="grid" style={css("grid-template-columns: repeat(10, 1fr)")}>
                  {(v.lastBubs || []).map((b, __i0) => (
                    <React.Fragment key={__i0}>
                      <span className={`bub ${b.cls}`} onPointerDown={b.down} onPointerEnter={b.enter}></span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {" "}
              <span className="hand" style={css("font-size: 26px")}>
                {v.lastNote}
              </span>
            </div>
          </div>
        </section>
      </div>
      </>
    );
  }
}
