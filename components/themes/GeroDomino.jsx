'use client';
// Generated from the Gerodomino design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#F5F1E8}\na{color:#111111}a:hover{color:#E4252B}\n.dom{position:absolute;bottom:0;width:24px;height:56px;border-radius:5px;transform-origin:100% 100%;transition:transform .26s cubic-bezier(.55,0,.9,.55);box-shadow:inset 0 0 0 2px rgba(255,255,255,.08)}\n.dom::before{content:\"\";position:absolute;left:4px;right:4px;top:27px;height:2px;background:rgba(245,241,232,.55)}\n.dom::after{content:\"\";position:absolute;left:50%;top:10px;width:6px;height:6px;margin-left:-3px;border-radius:50%;background:rgba(245,241,232,.8);box-shadow:0 26px 0 rgba(245,241,232,.8)}\n.dom.lg::after{display:none}\n.dom.lg::before{top:calc(50% - 2px);height:4px}\n.g{position:absolute;bottom:123px;transform-origin:50% 100%;z-index:2}\n.gin{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .8s cubic-bezier(.3,1.35,.5,1) .28s}\n.face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:24px;border:4px solid #111111;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;background:#111111;color:#F5F1E8;box-shadow:inset 0 0 0 7px #111111,inset 0 0 0 9px rgba(245,241,232,.35)}\n.face.front{transform:rotateY(180deg)}\n.face.gco{box-shadow:inset 0 0 0 7px #111111,inset 0 0 0 9px #E4252B}\n.face.gct{background:#E4252B;color:#FFFFFF;box-shadow:inset 0 0 0 7px #E4252B,inset 0 0 0 9px rgba(255,255,255,.5)}\n.face .half{flex:1;padding:20px 22px;display:flex;flex-direction:column;justify-content:center;gap:8px;min-height:0}\n.face .mid{flex:none;position:relative;height:3px;background:#F5F1E8;margin:0 18px}\n.face .mid::after{content:\"\";position:absolute;left:50%;top:50%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:#E4252B;border:2px solid #F5F1E8}\n.face.gct .mid::after{background:#111111}\n.pips{flex:none;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);width:120px;height:120px;gap:10px}\n.pips i{display:block;border-radius:50%;background:#F5F1E8}\n.pips i.r{background:#E4252B}\n.a1{grid-area:1/1}.a2{grid-area:1/2}.a3{grid-area:1/3}.b1{grid-area:2/1}.b2{grid-area:2/2}.b3{grid-area:2/3}.c1{grid-area:3/1}.c2{grid-area:3/2}.c3{grid-area:3/3}\n.race{font-family:'Rubik',sans-serif;font-weight:700;font-size:14px;background:transparent;color:#F5F1E8;border:2px solid rgba(245,241,232,.6);border-radius:10px;padding:10px 14px;cursor:pointer;min-height:44px}\n.race:hover{border-color:#E4252B;color:#FF8A8E}\n.lnk{color:#FF8A8E;font-weight:700}\n.face.gct .lnk,.face.gct .lbl{color:#FFFFFF}\n.ttl{font-family:'Rubik',sans-serif;font-weight:800;font-size:24px;line-height:1.05;margin:0}\n.lbl{font-family:'Rubik',sans-serif;font-weight:700;font-size:12px;letter-spacing:.16em;color:#FF8A8E}\n.shot{height:72px;border-radius:10px;background:#2A2A2A;color:#BDBDBD;display:flex;align-items:center;justify-content:center;font-size:14px}\n.body{margin:0;font-size:15px;line-height:1.45}\n.push{font-family:'Rubik',sans-serif;font-weight:800;font-size:17px;background:#E4252B;color:#FFFFFF;border:3px solid #111111;border-radius:12px;padding:12px 22px;cursor:pointer;box-shadow:0 5px 0 #111111;min-height:52px;min-width:200px;transition:transform .08s ease}\n.push:active{transform:translateY(3px);box-shadow:0 2px 0 #111111}\n.ghost{font-family:'Rubik',sans-serif;font-weight:700;font-size:15px;background:#F5F1E8;color:#111111;border:2.5px solid #111111;border-radius:12px;padding:10px 16px;cursor:pointer;min-height:52px}\n.chip{font-family:'Rubik',sans-serif;font-weight:800;font-size:13px;width:30px;height:40px;border-radius:7px;border:2.5px solid #111111;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Rubik:wght@500;700;800;900&family=DM+Sans:wght@400;500;700&display=swap"];

export default class GeroDomino extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cfg() {
    if (this._cfg) return this._cfg;
    const before = [18, 10, 10, 10, 10, 10];
    const ramp = [76, 102, 136, 180, 236];
    const pieces = [], gi = [];
    before.forEach((cnt, k) => {
      for (let i = 0; i < cnt; i++) pieces.push({ kind: 's', h: 56 });
      ramp.forEach((h) => pieces.push({ kind: 'r', h: h }));
      gi.push(pieces.length);
      pieces.push({ kind: 'g', k: k });
    });
    const names = ['Project 1', 'Project 2', 'Project 3', 'The set', 'Company', 'Contact'];
    this._cfg = { pieces: pieces, gi: gi, names: names, N: pieces.length, Gw: 300 };
    return this._cfg;
  }
  layout(H) {
    const c = this.cfg();
    const Gh = Math.max(360, Math.min(440, H - 123 - 96));
    let x = 760;
    const xs = [], ws = [];
    c.pieces.forEach((p) => {
      const w = p.kind === 'g' ? c.Gw : (p.kind === 'r' ? Math.round(p.h * 0.43) : 24);
      xs.push(x); ws.push(w);
      x += w + (p.kind === 'g' ? 90 : (p.kind === 'r' ? Math.round(p.h * 0.36) : 20));
    });
    return { Gh: Gh, xs: xs, ws: ws, worldW: x + 500 };
  }
  componentDidMount() { this.timer = setInterval(() => this.tick(), 40); }
  componentWillUnmount() { clearInterval(this.timer); clearTimeout(this.wobT); }
  hitGiant(k, n) {
    const c = this.cfg();
    this.setState({ n: n, mode: k === 5 ? 'done' : 'wait', view: k, target: -1, wob: k });
    clearTimeout(this.wobT);
    this.wobT = setTimeout(() => this.setState({ wob: -1 }), 220);
  }
  tick() {
    const s = this.state || {};
    const mode = s.mode || 'idle';
    if (mode !== 'run' && mode !== 'ff') return;
    const c = this.cfg();
    let n = s.n || 0;
    const steps = mode === 'ff' ? 3 : 1;
    if (mode === 'run') {
      const p = c.pieces[n];
      const need = p ? Math.round(70 * Math.sqrt(p.h ? p.h / 56 : 1)) : 70;
      this.acc = (this.acc || 0) + 40;
      if (this.acc < need) return;
      this.acc = 0;
    }
    for (let i = 0; i < steps; i++) {
      const p = c.pieces[n];
      if (!p) break;
      if (p.kind === 'g' && (mode === 'run' || p.k === s.target || p.k === 5)) { this.hitGiant(p.k, n); return; }
      n += 1;
    }
    this.setState({ n: n });
  }
  goStop(k) {
    const s = this.state || {};
    const c = this.cfg();
    const n = s.n || 0;
    if (n >= c.gi[k]) {
      const mode = s.mode === 'run' || s.mode === 'ff' ? 'paused' : (s.mode || 'idle');
      this.setState({ view: k, mode: mode });
    } else {
      this.setState({ mode: 'ff', target: k, view: -1 });
    }
  }
  renderVals() {
    const s = this.state || {};
    const c = this.cfg();
    const n = s.n || 0;
    const mode = s.mode || 'idle';
    const view = s.view === undefined ? -1 : s.view;
    const W = (this.stage && this.stage.clientWidth) || 1280;
    const H = (this.stage && this.stage.clientHeight) || 877;
    const L = this.layout(H);
    const maxCam = Math.max(0, L.worldW - W);
    const clamp = (v) => Math.min(maxCam, Math.max(0, v));
    let cam;
    if (view >= 0) { const gx = L.xs[c.gi[view]]; cam = clamp(gx + c.Gw / 2 - W * (W > 760 ? 0.58 : 0.5)); }
    else cam = n === 0 ? 0 : clamp(L.xs[Math.min(n, c.N - 1)] - W * 0.55);

    const fallen = (i) => {
      const p = c.pieces[i];
      if (p.kind === 'g') return n > i && view !== p.k;
      return n > i;
    };
    const doms = [];
    c.pieces.forEach((p, i) => {
      if (p.kind === 'g') return;
      let r = 0;
      if (n > i) {
        if (p.kind === 's') r = 72;
        else r = fallen(i + 1) ? 58 : 21;
      }
      doms.push({ x: L.xs[i], w: L.ws[i], h: p.h, c: p.kind === 'r' ? '#E4252B' : '#111111', cls: p.kind === 'r' ? 'lg' : '', r: r });
    });
    const gx = {}, gt = {}, gtr = {}, gf = {}, ga = {}, gb = {}, gr = {};
    c.gi.forEach((idx, k) => {
      const key = 'g' + (k + 1);
      const isDown = fallen(idx);
      const up = n >= idx;
      const wob = s.wob === k;
      gx[key] = L.xs[idx];
      gt[key] = 'perspective(1400px) rotateX(' + (isDown ? 84 : 0) + 'deg) rotate(' + (wob ? 3.5 : 0) + 'deg)';
      gtr[key] = isDown ? '.75s cubic-bezier(.55,0,.8,.3)' : (wob ? '.12s ease-out' : '.5s cubic-bezier(.3,1.4,.5,1)');
      gf[key] = up ? 180 : 0;
      ga[key] = up && !isDown ? 'false' : 'true';
      gb[key] = up ? 'true' : 'false';
      gr[key] = () => this.goStop(k);
    });

    const reached = (k) => n >= c.gi[k];
    const chips = c.names.map((name, k) => ({
      num: String(k + 1), go: () => this.goStop(k),
      label: (reached(k) ? 'Show tile ' : 'Race the chain to tile ') + (k + 1) + ': ' + name,
      bg: view === k ? '#111111' : (reached(k) ? '#E4252B' : '#F5F1E8'),
      fg: view === k || reached(k) ? '#FFFFFF' : '#111111'
    }));
    const curK = c.gi.indexOf(n);
    const reset = () => { this.acc = 0; this.setState({ n: 0, mode: 'idle', view: -1, target: -1, wob: -1 }); };
    let primaryLabel = 'Push the first one', status = 'Six tiles, face-down.';
    let primary = () => { this.acc = 0; this.setState({ mode: 'run', view: -1, target: -1 }); };
    if (mode === 'run' || mode === 'ff') {
      primaryLabel = 'Pause';
      status = mode === 'ff' ? 'Racing to tile ' + (s.target + 1) + '…' : 'Falling…';
      primary = () => this.setState({ mode: 'paused' });
    } else if (mode === 'wait' && curK >= 0 && view !== curK) {
      primaryLabel = 'Back to tile ' + (curK + 1);
      status = view >= 0 ? 'Tile ' + (view + 1) + ' · ' + c.names[view] : 'Waiting';
      primary = () => this.setState({ view: curK });
    } else if (mode === 'wait') {
      primaryLabel = 'Knock it over';
      status = 'Tile ' + (view + 1) + ' of 6 · ' + c.names[view];
      primary = () => { this.acc = 0; this.setState({ mode: 'run', view: -1, n: n + 1 }); };
    } else if (mode === 'done') {
      primaryLabel = 'Set them up again';
      status = 'All ' + c.N + ' down · ' + (view >= 0 ? c.names[view] : 'nice');
      primary = reset;
    } else if (n > 0) {
      primaryLabel = 'Keep it going';
      status = view >= 0 ? 'Tile ' + (view + 1) + ' · ' + c.names[view] : 'Paused';
    }
    return {
      worldW: L.worldW,
      cam: Math.round(cam),
      camT: mode === 'ff' ? '.12s linear' : (mode === 'run' ? '.35s linear' : '.9s cubic-bezier(.3,.8,.3,1)'),
      bgX: Math.round(-cam * 0.5),
      doms: doms, chips: chips,
      gw: c.Gw, gh: L.Gh, gx: gx, gt: gt, gtr: gtr, gf: gf, ga: ga, gb: gb, gr: gr,
      fallen: Math.min(n, c.N), total: c.N,
      primaryLabel: primaryLabel, primary: primary, status: status,
      canReset: n > 0 && mode !== 'done',
      reset: reset,
      stageRef: (el) => { this.stage = el; }
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; background: #F5F1E8; color: #111111; font-family: 'DM Sans', system-ui, sans-serif")}>
        <div style={css("background: #111111; color: #F5F1E8; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-weight: 700")}>
          <span>
            {"Theme: Gero-domino"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #FF8A8E; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #FF8A8E; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <section ref={v.stageRef} aria-label="Chain reaction" style={css(`position: relative; height: calc(100vh - 44px); min-height: 640px; max-height: 1000px; overflow: hidden; background-color: #F5F1E8; background-image: linear-gradient(90deg, rgba(17,17,17,.05) 1px, transparent 1px); background-size: 120px 100%; background-position: ${v.bgX}px 0`)}>
          {" "}
          <div style={css("position: absolute; left: 0; right: 0; top: 0; z-index: 6; padding: 14px 24px; display: flex; flex-wrap: wrap; gap: 10px 24px; align-items: center; justify-content: space-between")}>
            <span style={css("font-family: 'Rubik', sans-serif; font-weight: 900; font-size: 22px")}>
              {"GERO"}
              <span style={css("color: #E4252B")}>
                {"·"}
              </span>
              {"DOMINO"}
            </span>
            {" "}
            <div style={css("display: flex; align-items: center; gap: 8px")}>
              {(v.chips || []).map((d, __i0) => (
                <React.Fragment key={__i0}>
                  <button type="button" className="chip" onClick={d.go} aria-label={d.label} title={d.label} style={css(`background: ${d.bg}; color: ${d.fg}`)}>
                    {d.num}
                  </button>
                </React.Fragment>
              ))}
              {" "}
              <span style={css("font-family: 'Rubik', sans-serif; font-weight: 700; font-size: 13px; margin-left: 6px; min-width: 92px")}>
                {v.fallen}{" / "}{v.total}{" DOWN"}
              </span>
            </div>
          </div>
          {" "}
          {" "}
          <div style={css(`position: absolute; left: 0; top: 0; bottom: 0; width: ${v.worldW}px; transform: translateX(-${v.cam}px); transition: transform ${v.camT}`)}>
            <div aria-hidden="true" style={css("position: absolute; left: 0; right: 0; bottom: 120px; height: 3px; background: #111111")}></div>
            {" "}
            <div aria-hidden="true" style={css("position: absolute; left: 0; right: 0; bottom: 0; height: 120px; background: repeating-linear-gradient(90deg, #E9E2D2 0 80px, #E1D8C5 80px 160px)")}></div>
            {" "}
            {" "}
            <div style={css("position: absolute; left: 6vw; bottom: 190px; width: min(560px, 82vw); display: flex; flex-direction: column; gap: 16px")}>
              <span className="lbl" style={css("color: #E4252B")}>
                {"FULL-STACK DEVELOPER · FOUNDER · CHAIN-REACTION SPECIALIST"}
              </span>
              {" "}
              <h1 style={css("margin: 0; font-family: 'Rubik', sans-serif; font-weight: 900; font-size: clamp(60px, 9vw, 130px); line-height: 0.86; letter-spacing: -0.04em")}>
                {"Gero-"}
                <br />
                {"domino"}
                <span style={css("color: #E4252B")}>
                  {"."}
                </span>
              </h1>
              {" "}
              <p style={css("margin: 0; font-size: 20px; line-height: 1.55; max-width: 480px")}>
                {"Raphael Gabriel Geronimo. One good idea knocks over the next. Six giant tiles are waiting face-down down the line. Push the first one."}
              </p>
            </div>
            {" "}
            {" "}
            <div className="g" style={css(`left: ${v.gx.g1}px; width: ${v.gw}px; height: ${v.gh}px; transform: ${v.gt.g1}; transition: transform ${v.gtr.g1}`)}>
              <div className="gin" style={css(`transform: rotateY(${v.gf.g1}deg)`)}>
                <div className="face back" aria-hidden={v.gb.g1}>
                  <div className="half" style={css("align-items: center")}>
                    <div className="pips big" aria-hidden="true">
                      <i className="b2 r"></i>
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half" style={css("align-items: center; text-align: center")}>
                    <span className="lbl" style={css("color: #F5F1E8")}>
                      {"TILE 1 · FACE DOWN"}
                    </span>
                    {" "}
                    <button type="button" className="race" onClick={v.gr.g1}>
                      {"Race the chain here"}
                    </button>
                  </div>
                </div>
                {" "}
                <article className="face front" aria-hidden={v.ga.g1}>
                  <div className="half">
                    <span className="lbl">
                      {"TILE 1 · "}{up(C.projects[0].type)}
                    </span>
                    <h2 className="ttl">
                      {C.projects[0].name}
                    </h2>
                    <div className="shot">
                      {shot(C.projects[0])}
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half">
                    <p className="body">
                      {C.projects[0].summary}
                    </p>
                    <a href="#work" className="lnk">
                      {"See the build →"}
                    </a>
                  </div>
                </article>
              </div>
            </div>
            {" "}
            <div className="g" style={css(`left: ${v.gx.g2}px; width: ${v.gw}px; height: ${v.gh}px; transform: ${v.gt.g2}; transition: transform ${v.gtr.g2}`)}>
              <div className="gin" style={css(`transform: rotateY(${v.gf.g2}deg)`)}>
                <div className="face back" aria-hidden={v.gb.g2}>
                  <div className="half" style={css("align-items: center")}>
                    <div className="pips big" aria-hidden="true">
                      <i className="a1"></i>
                      <i className="c3"></i>
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half" style={css("align-items: center; text-align: center")}>
                    <span className="lbl" style={css("color: #F5F1E8")}>
                      {"TILE 2 · FACE DOWN"}
                    </span>
                    {" "}
                    <button type="button" className="race" onClick={v.gr.g2}>
                      {"Race the chain here"}
                    </button>
                  </div>
                </div>
                {" "}
                <article className="face front" aria-hidden={v.ga.g2}>
                  <div className="half">
                    <span className="lbl">
                      {"TILE 2 · "}{up(C.projects[1].type)}
                    </span>
                    <h2 className="ttl">
                      {C.projects[1].name}
                    </h2>
                    <div className="shot">
                      {shot(C.projects[1])}
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half">
                    <p className="body">
                      {C.projects[1].summary}{" It knocked over the next one."}
                    </p>
                    <a href="#work" className="lnk">
                      {"See the build →"}
                    </a>
                  </div>
                </article>
              </div>
            </div>
            {" "}
            <div className="g" style={css(`left: ${v.gx.g3}px; width: ${v.gw}px; height: ${v.gh}px; transform: ${v.gt.g3}; transition: transform ${v.gtr.g3}`)}>
              <div className="gin" style={css(`transform: rotateY(${v.gf.g3}deg)`)}>
                <div className="face back" aria-hidden={v.gb.g3}>
                  <div className="half" style={css("align-items: center")}>
                    <div className="pips big" aria-hidden="true">
                      <i className="a1"></i>
                      <i className="b2"></i>
                      <i className="c3"></i>
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half" style={css("align-items: center; text-align: center")}>
                    <span className="lbl" style={css("color: #F5F1E8")}>
                      {"TILE 3 · FACE DOWN"}
                    </span>
                    {" "}
                    <button type="button" className="race" onClick={v.gr.g3}>
                      {"Race the chain here"}
                    </button>
                  </div>
                </div>
                {" "}
                <article className="face front" aria-hidden={v.ga.g3}>
                  <div className="half">
                    <span className="lbl">
                      {"TILE 3 · "}{up(C.projects[2].type)}
                    </span>
                    <h2 className="ttl">
                      {C.projects[2].name}
                    </h2>
                    <div className="shot">
                      {shot(C.projects[2])}
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half">
                    <p className="body">
                      {C.projects[2].summary}
                    </p>
                    <a href="#work" className="lnk">
                      {"See the build →"}
                    </a>
                  </div>
                </article>
              </div>
            </div>
            {" "}
            <div className="g" style={css(`left: ${v.gx.g4}px; width: ${v.gw}px; height: ${v.gh}px; transform: ${v.gt.g4}; transition: transform ${v.gtr.g4}`)}>
              <div className="gin" style={css(`transform: rotateY(${v.gf.g4}deg)`)}>
                <div className="face back" aria-hidden={v.gb.g4}>
                  <div className="half" style={css("align-items: center")}>
                    <div className="pips big" aria-hidden="true">
                      <i className="a1"></i>
                      <i className="a3"></i>
                      <i className="c1"></i>
                      <i className="c3"></i>
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half" style={css("align-items: center; text-align: center")}>
                    <span className="lbl" style={css("color: #F5F1E8")}>
                      {"TILE 4 · FACE DOWN"}
                    </span>
                    {" "}
                    <button type="button" className="race" onClick={v.gr.g4}>
                      {"Race the chain here"}
                    </button>
                  </div>
                </div>
                {" "}
                <article className="face front" aria-hidden={v.ga.g4}>
                  <div className="half">
                    <span className="lbl">
                      {"TILE 4 · THE SET"}
                    </span>
                    <h2 className="ttl">
                      {"What keeps the chain going"}
                    </h2>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half">
                    <div className="body">
                      <b>
                        {"Front end"}
                      </b>
                      {" — "}{C.skills.frontend}
                    </div>
                    <div className="body">
                      <b>
                        {"Back end"}
                      </b>
                      {" — "}{C.skills.backend}
                    </div>
                    <div className="body">
                      <b>
                        {"Business"}
                      </b>
                      {" — "}{C.skills.business}
                    </div>
                    <p className="body" style={css("opacity:.7;font-size:14px")}>
                      {"Lines everything up carefully, then enjoys the fall."}
                    </p>
                  </div>
                </article>
              </div>
            </div>
            {" "}
            <div className="g" style={css(`left: ${v.gx.g5}px; width: ${v.gw}px; height: ${v.gh}px; transform: ${v.gt.g5}; transition: transform ${v.gtr.g5}`)}>
              <div className="gin" style={css(`transform: rotateY(${v.gf.g5}deg)`)}>
                <div className="face back gco" aria-hidden={v.gb.g5}>
                  <div className="half" style={css("align-items: center")}>
                    <div className="pips big" aria-hidden="true">
                      <i className="a1"></i>
                      <i className="a3"></i>
                      <i className="b2"></i>
                      <i className="c1"></i>
                      <i className="c3"></i>
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half" style={css("align-items: center; text-align: center")}>
                    <span className="lbl" style={css("color: #F5F1E8")}>
                      {"TILE 5 · FACE DOWN"}
                    </span>
                    {" "}
                    <button type="button" className="race" onClick={v.gr.g5}>
                      {"Race the chain here"}
                    </button>
                  </div>
                </div>
                {" "}
                <article className="face front gco" aria-hidden={v.ga.g5}>
                  <div className="half">
                    <span className="lbl">
                      {"TILE 5 · FOUNDER OF"}
                    </span>
                    <h2 className="ttl">
                      {C.company.name}
                    </h2>
                    <p className="body">
                      {C.company.summary}
                    </p>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half">
                    <a href="#venture" className="lnk">
                      {"Pull up a chair →"}
                    </a>
                  </div>
                </article>
              </div>
            </div>
            {" "}
            <div className="g" style={css(`left: ${v.gx.g6}px; width: ${v.gw}px; height: ${v.gh}px; transform: ${v.gt.g6}; transition: transform ${v.gtr.g6}`)}>
              <div className="gin" style={css(`transform: rotateY(${v.gf.g6}deg)`)}>
                <div className="face back gct" aria-hidden={v.gb.g6}>
                  <div className="half" style={css("align-items: center")}>
                    <div className="pips big" aria-hidden="true">
                      <i className="a1"></i>
                      <i className="a3"></i>
                      <i className="b1"></i>
                      <i className="b3"></i>
                      <i className="c1"></i>
                      <i className="c3"></i>
                    </div>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half" style={css("align-items: center; text-align: center")}>
                    <span className="lbl" style={css("color: #F5F1E8")}>
                      {"TILE 6 · FACE DOWN"}
                    </span>
                    {" "}
                    <button type="button" className="race" onClick={v.gr.g6}>
                      {"Race the chain here"}
                    </button>
                  </div>
                </div>
                {" "}
                <article className="face front gct" aria-hidden={v.ga.g6}>
                  <div className="half">
                    <span className="lbl">
                      {"TILE 6 · YOUR MOVE"}
                    </span>
                    <h2 className="ttl">
                      {"Start the next chain reaction."}
                    </h2>
                  </div>
                  {" "}
                  <div className="mid" aria-hidden="true"></div>
                  {" "}
                  <div className="half">
                    <a href={`mailto:${C.email}`} className="lnk" style={css("font-size:20px")}>
                      {C.email}
                    </a>
                    <div style={css("display:flex;flex-wrap:wrap;gap:8px 16px")}>
                      <a href={C.links.github} className="lnk" target="_blank" rel="noreferrer">
                        {"GitHub"}
                      </a>
                      <a href={C.links.linkedin} className="lnk" target="_blank" rel="noreferrer">
                        {"LinkedIn"}
                      </a>
                      <a href={C.company.url} className="lnk" target="_blank" rel="noreferrer">
                        {C.company.siteLabel}
                      </a>
                    </div>
                    <span style={css("font-size:13px;opacity:.8")}>
                      {"© Raphael Gabriel Geronimo"}
                    </span>
                  </div>
                </article>
              </div>
            </div>
            {" "}
            {" "}
            <div aria-hidden="true" style={css(`position: absolute; left: 0; bottom: 123px; height: 110px; width: ${v.worldW}px; z-index: 3; pointer-events: none`)}>
              {(v.doms || []).map((d, __i0) => (
                <React.Fragment key={__i0}>
                  <div className={`dom ${d.cls}`} style={css(`left: ${d.x}px; height: ${d.h}px; width: ${d.w}px; background: ${d.c}; transform: rotate(${d.r}deg)`)}></div>
                </React.Fragment>
              ))}
            </div>
          </div>
          {" "}
          {" "}
          <div style={css("position: absolute; left: 0; right: 0; bottom: 30px; z-index: 6; display: flex; flex-wrap: wrap; gap: 10px 14px; align-items: center; justify-content: center; padding: 0 16px")}>
            <button type="button" className="push" onClick={v.primary}>
              {v.primaryLabel}
            </button>
            {" "}
            {v.canReset ? (
              <>
                <button type="button" className="ghost" onClick={v.reset}>
                  {"Set them up again"}
                </button>
              </>
            ) : null}
            {" "}
            <span aria-live="polite" style={css("font-family: 'Rubik', sans-serif; font-weight: 700; font-size: 14px; background: #F5F1E8; border: 2.5px solid #111111; border-radius: 10px; padding: 8px 12px")}>
              {v.status}
            </span>
          </div>
        </section>
      </div>
      </>
    );
  }
}
