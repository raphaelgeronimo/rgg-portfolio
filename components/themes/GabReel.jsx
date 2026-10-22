'use client';
// Generated from the Gabreel design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#050505}\na{color:#F2F0EA}a:hover{color:#FFFFFF}\n.deco{font-family:'Limelight',serif}\n.serif{font-family:'Playfair Display',serif}\n.type{font-family:'Cutive Mono',monospace}\n.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transition:clip-path .9s cubic-bezier(.6,0,.3,1),opacity .5s ease}\n.inter{position:relative;border:3px double #D9D6CC;padding:clamp(28px,5vw,56px) clamp(24px,6vw,80px);max-width:760px;text-align:center;outline:1px solid rgba(217,214,204,.4);outline-offset:10px}\n.inter::before,.inter::after{content:\"✦\";position:absolute;left:50%;margin-left:-.5em;font-size:18px;color:#D9D6CC;background:#0B0B0B;padding:0 10px}\n.inter::before{top:-14px}.inter::after{bottom:-14px}\n.blinds{position:absolute;inset:0;background:repeating-linear-gradient(-28deg,rgba(0,0,0,.62) 0 22px,transparent 22px 46px);pointer-events:none}\n.strip{background:#111111;background-image:radial-gradient(circle at 10px 8px,#050505 4px,transparent 4.5px),radial-gradient(circle at 10px 8px,#050505 4px,transparent 4.5px);background-size:22px 16px,22px 16px;background-repeat:repeat-x,repeat-x;background-position:0 0,0 100%}\n.frame{flex:none;width:96px;height:58px;border:2px solid #3A3A3A;background:#1C1C1C;color:#BDBAB0;font-family:'Cutive Mono',monospace;font-size:11px;line-height:1.2;cursor:pointer;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;box-sizing:border-box;border-radius:3px}\n.frame:hover{border-color:#D9D6CC}\n.frame.on{background:#D9D6CC;color:#0B0B0B;border-color:#FFFFFF}\n.ctl{display:inline-flex;align-items:center;justify-content:center;min-width:48px;min-height:48px;padding:0 14px;border-radius:999px;border:1.5px solid #6E6B64;background:transparent;color:#F2F0EA;font-family:'Inter',sans-serif;font-weight:600;font-size:14px;cursor:pointer;box-sizing:border-box}\n.ctl:hover{border-color:#F2F0EA}\n.cast{display:grid;grid-template-columns:1fr auto 1fr;gap:10px 18px;align-items:baseline}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Limelight&family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Cutive+Mono&family=Inter:wght@400;600&display=swap"];

export default class GabReel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scenes() {
    return [
      { label: 'Leader', dur: 3000 },
      { label: 'RGG Pictures', dur: 2600 },
      { label: 'Title', dur: 4200 },
      { label: 'The night', dur: 5200 },
      { label: 'Case 01', dur: 7500 },
      { label: 'Case 02', dur: 7500 },
      { label: 'Case 03', dur: 7500 },
      { label: 'The cast', dur: 7000 },
      { label: 'The studio', dur: 5500 },
      { label: 'Credits', dur: 0 }
    ];
  }
  componentDidMount() {
    this.t = 0;
    this.timer = setInterval(() => this.tick(), 40);
  }
  componentWillUnmount() { clearInterval(this.timer); }
  tick() {
    const s = this.state || {};
    const playing = s.playing !== false;
    const sc = s.scene || 0;
    const list = this.scenes();
    this.f = (this.f || 0) + 1;
    if (playing) {
      this.t += 40;
      const dur = list[sc].dur;
      if (dur && this.t >= dur) { this.t = 0; this.setState({ scene: sc + 1 }); return; }
    }
    // grain + flicker every tick, a scratch now and then
    const g = { gx: Math.round(Math.random() * 40 - 20), gy: Math.round(Math.random() * 40 - 20), flick: (0.82 + Math.random() * 0.18).toFixed(2) };
    if (Math.random() < 0.06) { g.scratchX = Math.round(Math.random() * 100); g.scratchOp = 1; } else g.scratchOp = 0;
    this.setState(g);
  }
  go(i) {
    const n = this.scenes().length;
    const k = Math.max(0, Math.min(n - 1, i));
    this.t = 0;
    this.setState({ scene: k });
  }
  renderVals() {
    const s = this.state || {};
    const sc = s.scene || 0;
    const list = this.scenes();
    const playing = s.playing !== false;
    const vis = (i) => i === sc
      ? 'clip-path: circle(120% at 50% 50%); opacity: 1; pointer-events: auto'
      : 'clip-path: circle(0% at 50% 50%); opacity: 0; pointer-events: none';
    const sv = {}, hid = {};
    [0, 1, 2, 3, 7, 8, 9].forEach((i) => { sv['s' + i] = vis(i); hid['s' + i] = i === sc ? 'false' : 'true'; });
    const subs = ['“[One line on the problem, told like a detective.]”', '“[The twist: what made it hard.]”', '“[How it ended. Spoiler: it shipped.]”'];
    const kinds = [`${C.projects[0].type}`, `${C.projects[1].type}`, `${C.projects[2].type}`];
    const cases = [0, 1, 2].map((k) => {
      const i = 4 + k;
      const full = subs[k];
      const shown = i === sc ? full.slice(0, Math.min(full.length, Math.floor(Math.max(0, this.t - 900) / 32))) : '';
      return { i: k, sv: vis(i), hid: i === sc ? 'false' : 'true', no: 'CASE No. 0' + (k + 1), kind: kinds[k], sub: shown || ' ' };
    });
    const leaderT = sc === 0 ? this.t : 0;
    const leaderN = Math.max(1, 3 - Math.floor(leaderT / 1000));
    const rolling = sc === 9;
    return {
      sv: sv, hid: hid, cases: cases,
      sweep: Math.round(((leaderT % 1000) / 1000) * 360),
      leader: String(leaderN),
      rollY: rolling ? '0px' : 'calc(100% + 90vh)',
      rollT: rolling ? '9s cubic-bezier(.2,.4,.3,1) .6s' : '0s',
      gx: s.gx || 0, gy: s.gy || 0,
      flick: s.flick || 0.9,
      scratchX: s.scratchX || 30, scratchOp: s.scratchOp || 0,
      toggle: () => this.setState({ playing: !playing }),
      playIcon: playing ? 'Pause' : 'Play',
      playLabel: playing ? 'Pause the film' : 'Play the film',
      prev: () => this.go(sc - 1),
      next: () => this.go(sc + 1),
      sceneNo: String(sc + 1),
      frames: list.map((x, i) => ({ label: x.label, cls: i === sc ? 'on' : '', aria: 'Go to scene ' + (i + 1) + ': ' + x.label, go: () => this.go(i) }))
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; background: #050505; color: #F2F0EA; font-family: 'Inter', system-ui, sans-serif")}>
        <div style={css("background: #000000; color: #D9D6CC; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; border-bottom: 1px solid #222222")}>
          <span className="type">
            {"Theme: Gab-reel"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #F2F0EA; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #F2F0EA; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <section aria-label="Gab-reel, a short film" style={css("position: relative; height: calc(100vh - 44px); min-height: 640px; max-height: 1000px; overflow: hidden; display: flex; flex-direction: column; background: #000000")}>
          {" "}
          <div style={css("position: relative; flex: 1; margin: 0; background: radial-gradient(ellipse at 50% 45%, #1E1E1E 0%, #0B0B0B 70%, #030303 100%); overflow: hidden")}>
            {" "}
            <div className="scene" aria-hidden={v.hid.s0} style={css(v.sv.s0)}>
              <div style={css(`position: relative; width: min(52vh, 70vw); aspect-ratio: 1; border-radius: 50%; background: conic-gradient(rgba(242,240,234,.28) ${v.sweep}deg, transparent ${v.sweep}deg); border: 3px solid #D9D6CC; display: flex; align-items: center; justify-content: center`)}>
                <div style={css("position: absolute; inset: 9%; border-radius: 50%; border: 2px solid #D9D6CC")}></div>
                {" "}
                <div style={css("position: absolute; left: -12%; right: -12%; top: 50%; height: 2px; background: #D9D6CC")}></div>
                {" "}
                <div style={css("position: absolute; top: -12%; bottom: -12%; left: 50%; width: 2px; background: #D9D6CC")}></div>
                {" "}
                <span className="deco" style={css("position: relative; font-size: min(28vh, 38vw); line-height: 1; color: #F2F0EA")}>
                  {v.leader}
                </span>
              </div>
            </div>
            {" "}
            {" "}
            <div className="scene" aria-hidden={v.hid.s1} style={css(v.sv.s1)}>
              <div style={css("text-align: center; display: flex; flex-direction: column; gap: 14px; align-items: center")}>
                <div style={css("width: 120px; height: 120px; border-radius: 50%; border: 3px solid #D9D6CC; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 60px rgba(242,240,234,.15)")}>
                  <span className="deco" style={css("font-size: 40px")}>
                    {"RGG"}
                  </span>
                </div>
                {" "}
                <span className="deco" style={css("font-size: clamp(22px, 3vw, 32px); letter-spacing: .3em")}>
                  {"PICTURES"}
                </span>
                {" "}
                <span className="serif" style={css("font-style: italic; font-size: 20px; color: #BDBAB0")}>
                  {"presents"}
                </span>
              </div>
            </div>
            {" "}
            {" "}
            <div className="scene" aria-hidden={v.hid.s2} style={css(v.sv.s2)}>
              <div style={css("position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 30%, rgba(242,240,234,.12), transparent 60%)")}></div>
              {" "}
              <div className="blinds" style={css("opacity: .55")}></div>
              {" "}
              <div style={css("position: relative; text-align: center; display: flex; flex-direction: column; gap: 18px; align-items: center; padding: 24px")}>
                <span className="type" style={css("font-size: 14px; letter-spacing: .3em; color: #BDBAB0")}>
                  {"A FULL-STACK NOIR"}
                </span>
                {" "}
                <h1 className="deco" style={css("margin: 0; font-weight: 400; font-size: clamp(70px, 14vw, 190px); line-height: .9; color: #F2F0EA; text-shadow: 0 0 40px rgba(242,240,234,.25)")}>
                  {"Gab-reel"}
                </h1>
                {" "}
                <span className="serif" style={css("font-style: italic; font-size: clamp(18px, 2.4vw, 26px); color: #D9D6CC")}>
                  {"starring Raphael Gabriel Geronimo"}
                </span>
              </div>
            </div>
            {" "}
            {" "}
            <div className="scene" aria-hidden={v.hid.s3} style={css(v.sv.s3)}>
              <div className="inter" style={css("background: #0B0B0B")}>
                <p className="serif" style={css("margin: 0; font-style: italic; font-size: clamp(24px, 3.6vw, 44px); line-height: 1.3")}>
                  {"“The night was cold."}
                  <br />
                  {"The deadline was colder.”"}
                </p>
                {" "}
                <p className="type" style={css("margin: 22px 0 0; font-size: clamp(14px, 1.6vw, 18px); line-height: 1.6; color: #BDBAB0")}>
                  {"One full-stack developer and founder. Seventy-two hours to ship."}
                  <br />
                  {"He did it in one take."}
                </p>
              </div>
            </div>
            {" "}
            {" "}
            {(v.cases || []).map((c, __i0) => (
              <React.Fragment key={__i0}>
                <div className="scene" aria-hidden={c.hid} style={css(c.sv)}>
                  <div style={css("width: min(1120px, 92%); display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: clamp(20px, 4vw, 48px); align-items: center")}>
                    <div style={css("position: relative; aspect-ratio: 16 / 10; background: #2A2A2A; border: 1px solid #444444; overflow: hidden; display: flex; align-items: center; justify-content: center; box-shadow: 0 30px 60px rgba(0,0,0,.6)")}>
                      <span className="type" style={css("color: #8E8B84; font-size: 15px")}>
                        {shot(C.projects[c.i])}
                      </span>
                      {" "}
                      <div className="blinds"></div>
                      {" "}
                      <div style={css("position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 20%, rgba(242,240,234,.18), transparent 55%)")}></div>
                    </div>
                    {" "}
                    <div style={css("display: flex; flex-direction: column; gap: 14px")}>
                      <span className="type" style={css("font-size: 14px; letter-spacing: .24em; color: #BDBAB0")}>
                        {c.no}
                      </span>
                      {" "}
                      <h2 className="deco" style={css("margin: 0; font-weight: 400; font-size: clamp(36px, 5vw, 64px); line-height: .95")}>
                        {C.projects[c.i].name}
                      </h2>
                      {" "}
                      <div className="type" style={css("display: grid; grid-template-columns: 96px 1fr; gap: 8px 12px; font-size: 15px; line-height: 1.5; border-top: 1px solid #444444; padding-top: 14px")}>
                        <span style={css("color: #8E8B84")}>
                          {"THE CLIENT"}
                        </span>
                        <span>
                          {c.kind}
                        </span>
                        {" "}
                        <span style={css("color: #8E8B84")}>
                          {"THE JOB"}
                        </span>
                        <span>
                          {C.projects[c.i].summary}
                        </span>
                        {" "}
                        <span style={css("color: #8E8B84")}>
                          {"VERDICT"}
                        </span>
                        <span>
                          {C.projects[c.i].result}
                        </span>
                      </div>
                      {" "}
                      <a href="#case" className="type" style={css("font-size: 15px; align-self: flex-start")}>
                        {"Open the case file →"}
                      </a>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div style={css("position: absolute; left: 0; right: 0; bottom: 6%; text-align: center; padding: 0 24px")}>
                    <span className="serif" style={css("font-style: italic; font-size: clamp(16px, 2vw, 22px); background: rgba(0,0,0,.6); padding: 4px 10px; color: #F2F0EA")}>
                      {c.sub}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {" "}
            {" "}
            <div className="scene" aria-hidden={v.hid.s7} style={css(v.sv.s7)}>
              <div className="inter" style={css("background: #0B0B0B; max-width: 820px; width: 86%")}>
                <span className="deco" style={css("font-size: clamp(30px, 4vw, 46px)")}>
                  {"The Cast"}
                </span>
                {" "}
                <div className="cast serif" style={css("margin-top: 26px; font-size: clamp(16px, 2vw, 22px); text-align: left")}>
                  <span style={css("text-align: right; font-weight: 700")}>
                    {"Front End"}
                  </span>
                  <span className="type" style={css("color: #8E8B84")}>
                    {". . . . ."}
                  </span>
                  <span style={css("font-style: italic")}>
                    {C.skills.frontend}
                  </span>
                  {" "}
                  <span style={css("text-align: right; font-weight: 700")}>
                    {"Back End"}
                  </span>
                  <span className="type" style={css("color: #8E8B84")}>
                    {". . . . ."}
                  </span>
                  <span style={css("font-style: italic")}>
                    {C.skills.backend}
                  </span>
                  {" "}
                  <span style={css("text-align: right; font-weight: 700")}>
                    {"The Business"}
                  </span>
                  <span className="type" style={css("color: #8E8B84")}>
                    {". . . . ."}
                  </span>
                  <span style={css("font-style: italic")}>
                    {C.skills.business}
                  </span>
                  {" "}
                  <span style={css("text-align: right; font-weight: 700")}>
                    {"The Coffee"}
                  </span>
                  <span className="type" style={css("color: #8E8B84")}>
                    {". . . . ."}
                  </span>
                  <span style={css("font-style: italic")}>
                    {"as himself"}
                  </span>
                </div>
              </div>
            </div>
            {" "}
            {" "}
            <div className="scene" aria-hidden={v.hid.s8} style={css(v.sv.s8)}>
              <div style={css("position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 120%, rgba(242,240,234,.16), transparent 60%)")}></div>
              {" "}
              <div style={css("position: relative; text-align: center; display: flex; flex-direction: column; gap: 16px; align-items: center; padding: 24px; max-width: 760px")}>
                <span className="serif" style={css("font-style: italic; font-size: 22px; color: #BDBAB0")}>
                  {"a"}
                </span>
                {" "}
                <span className="deco" style={css("font-size: clamp(48px, 9vw, 110px); line-height: .95")}>
                  {C.company.name}
                </span>
                {" "}
                <span className="serif" style={css("font-style: italic; font-size: 22px; color: #BDBAB0")}>
                  {"production"}
                </span>
                {" "}
                <p className="type" style={css("margin: 10px 0 0; font-size: 16px; line-height: 1.6; color: #D9D6CC")}>
                  {C.company.summary}{" Founded, run and still directed by Raphael."}
                </p>
                {" "}
                <a href="#venture" className="type" style={css("font-size: 15px")}>
                  {"Visit the studio →"}
                </a>
              </div>
            </div>
            {" "}
            {" "}
            <div className="scene" aria-hidden={v.hid.s9} style={css(v.sv.s9)}>
              <div style={css(`position: absolute; left: 50%; bottom: 5%; width: min(640px, 90%); text-align: center; transform: translate(-50%, ${v.rollY}); transition: transform ${v.rollT}; display: flex; flex-direction: column; gap: 28px`)}>
                <span className="deco" style={css("font-size: clamp(34px, 5vw, 56px)")}>
                  {"Gab-reel"}
                </span>
                {" "}
                <div className="serif" style={css("display: flex; flex-direction: column; gap: 22px; font-size: 18px; line-height: 1.4")}>
                  <div>
                    <div className="type" style={css("font-size: 12px; letter-spacing: .24em; color: #8E8B84")}>
                      {"DIRECTED BY"}
                    </div>
                    {"Raphael Gabriel Geronimo"}
                  </div>
                  {" "}
                  <div>
                    <div className="type" style={css("font-size: 12px; letter-spacing: .24em; color: #8E8B84")}>
                      {"WRITTEN, DESIGNED & BUILT BY"}
                    </div>
                    {"Raphael Gabriel Geronimo"}
                  </div>
                  {" "}
                  <div>
                    <div className="type" style={css("font-size: 12px; letter-spacing: .24em; color: #8E8B84")}>
                      {"FRONT END · BACK END · DEPLOYMENT"}
                    </div>
                    {"Also Raphael"}
                  </div>
                  {" "}
                  <div>
                    <div className="type" style={css("font-size: 12px; letter-spacing: .24em; color: #8E8B84")}>
                      {"STUNTS"}
                    </div>
                    {"GERONIMO!"}
                  </div>
                  {" "}
                  <div>
                    <div className="type" style={css("font-size: 12px; letter-spacing: .24em; color: #8E8B84")}>
                      {"CATERING"}
                    </div>
                    {"Gab-urrito"}
                  </div>
                  {" "}
                  <div>
                    <div className="type" style={css("font-size: 12px; letter-spacing: .24em; color: #8E8B84")}>
                      {"NO BUGS WERE HARMED"}
                    </div>
                    {"in the making of this portfolio"}
                  </div>
                </div>
                {" "}
                <div style={css("border: 3px double #D9D6CC; padding: 28px 24px; display: flex; flex-direction: column; gap: 12px; align-items: center; background: #0B0B0B")}>
                  <span className="type" style={css("font-size: 13px; letter-spacing: .24em; color: #BDBAB0")}>
                    {"FOR THE SEQUEL, CONTACT"}
                  </span>
                  {" "}
                  <a href={`mailto:${C.email}`} className="serif" style={css("font-size: clamp(22px, 3vw, 30px); font-weight: 700; text-underline-offset: 6px")}>
                    {C.email}
                  </a>
                  {" "}
                  <div className="type" style={css("display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 22px; font-size: 15px")}>
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
                  <span className="deco" style={css("font-size: 28px; margin-top: 8px")}>
                    {"The End"}
                  </span>
                  {" "}
                  <span className="type" style={css("font-size: 12px; color: #8E8B84")}>
                    {"© Raphael Gabriel Geronimo"}
                  </span>
                </div>
              </div>
            </div>
            {" "}
            {" "}
            <div aria-hidden="true" style={css(`position: absolute; inset: -40px; pointer-events: none; opacity: .16; mix-blend-mode: screen; transform: translate(${v.gx}px, ${v.gy}px); background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.6 -.5'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`)}></div>
            {" "}
            <div aria-hidden="true" style={css(`position: absolute; top: 0; bottom: 0; left: ${v.scratchX}%; width: 1px; background: rgba(242,240,234,.35); opacity: ${v.scratchOp}; pointer-events: none`)}></div>
            {" "}
            <div aria-hidden="true" style={css(`position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,.75) 100%); opacity: ${v.flick}`)}></div>
          </div>
          {" "}
          {" "}
          <div className="strip" style={css("flex: none; padding: 22px 16px; display: flex; align-items: center; gap: 14px")}>
            <button type="button" className="ctl" onClick={v.toggle} aria-label={v.playLabel}>
              {v.playIcon}
            </button>
            {" "}
            <button type="button" className="ctl" onClick={v.prev} aria-label="Previous scene">
              {"‹"}
            </button>
            {" "}
            <div style={css("flex: 1; overflow-x: auto; display: flex; gap: 8px; padding: 2px 0")}>
              {(v.frames || []).map((f, __i0) => (
                <React.Fragment key={__i0}>
                  <button type="button" className={`frame ${f.cls}`} onClick={f.go} aria-label={f.aria}>
                    {f.label}
                  </button>
                </React.Fragment>
              ))}
            </div>
            {" "}
            <button type="button" className="ctl" onClick={v.next} aria-label="Next scene">
              {"›"}
            </button>
            {" "}
            <span className="type" style={css("flex: none; font-size: 13px; color: #BDBAB0; min-width: 92px; text-align: right")}>
              {"SCENE "}{v.sceneNo}{"/10"}
            </span>
          </div>
        </section>
      </div>
      </>
    );
  }
}
