'use client';
// Generated from the Grabriel design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#1C0A3A}\na{color:#FFD23F}a:hover{color:#FFFFFF}\n.room{background-color:#1C0A3A;background-image:radial-gradient(rgba(255,79,163,.18) 1px,transparent 2px);background-size:26px 26px}\n.bulbs{background-color:#2B1055;background-image:radial-gradient(circle,#FFE680 0 4px,rgba(255,210,63,.35) 5px 7px,transparent 8px);background-size:26px 26px;background-position:13px 13px}\n.cab{background:#FF4FA3;background-image:repeating-linear-gradient(90deg,rgba(255,255,255,.08) 0 10px,transparent 10px 24px)}\n.abtn{border-radius:50%;border:4px solid #2B1055;cursor:pointer;font-family:'Press Start 2P',monospace;color:#2B1055;transition:transform .08s ease, box-shadow .08s ease}\n.abtn:hover{filter:brightness(1.08)}\n.abtn:active{transform:translateY(4px);box-shadow:0 2px 0 #2B1055 !important}\n.abtn:disabled{filter:grayscale(.6);cursor:default}\n.chip{font-family:'Fredoka',sans-serif;font-weight:700;font-size:14px;border:3px solid #2B1055;border-radius:999px;padding:6px 12px;background:#FFFFFF;color:#2B1055}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Fredoka:wght@400;500;700&display=swap"];

export default class GrabRiel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  prizes() {
    return [
      { x: 20, b: 22, c: '#FFD23F', tag: 'P1', kind: 'PROJECT', title: `${C.projects[0].name}`, body: `${C.projects[0].summary}`, extra: `${C.projects[0].type} · stack: ${C.projects[0].stack}`, cta: 'Open case study →', href: '#work' },
      { x: 33, b: 52, c: '#3EE0FF', tag: 'P2', kind: 'PROJECT', title: `${C.projects[1].name}`, body: `${C.projects[1].summary}`, extra: `${C.projects[1].type} · stack: ${C.projects[1].stack}`, cta: 'Open case study →', href: '#work' },
      { x: 46, b: 22, c: '#7CFF6B', tag: 'P3', kind: 'PROJECT', title: `${C.projects[2].name}`, body: `${C.projects[2].summary}`, extra: `${C.projects[2].type} · stack: ${C.projects[2].stack}`, cta: 'Open case study →', href: '#work' },
      { x: 59, b: 40, c: '#B69CFF', tag: 'SK', kind: 'SKILL PACK', title: 'Front · Back · Business', body: `Front end: [your tools]. Back end: ${C.skills.backend}. Business: ${C.skills.business}.`, extra: `A tech geek who grew up in arcades. ${C.bio.origin}`, cta: 'Want all three? Ask →', href: '#contact' },
      { x: 72, b: 22, c: '#FF8A3D', tag: 'HQ', kind: 'COMPANY', title: `${C.company.name}`, body: `${C.company.summary}`, extra: 'Founded by Raphael Gabriel Geronimo.', cta: 'Visit the company →', href: '#contact' },
      { x: 85, b: 34, c: '#FFE680', tag: '★', kind: 'GOLDEN TICKET', title: 'A direct line to Raphael', body: `Email: ${C.email}`, extra: `Also on GitHub, LinkedIn and ${C.company.siteLabel}.`, cta: 'Redeem at the ticket counter →', href: '#contact' }
    ];
  }
  componentWillUnmount() {
    (this.timers || []).forEach((t) => clearTimeout(t));
  }
  later(ms, fn) {
    if (!this.timers) this.timers = [];
    this.timers.push(setTimeout(fn, ms));
  }
  renderVals() {
    const s = this.state || {};
    const list = this.prizes();
    const x = s.x === undefined ? 52 : s.x;
    const phase = s.phase || 'idle';
    const won = s.won || {};
    const busy = phase !== 'idle';
    const hit = s.hit;
    const carrying = (phase === 'grab' || phase === 'up' || phase === 'carry') && hit !== null && hit !== undefined;
    const targetB = s.dropB || 22;
    const rope = (phase === 'down' || phase === 'grab') ? Math.max(70, 400 - 14 - targetB - 66 - 30) : 60;
    const closed = phase === 'grab' || phase === 'up' || phase === 'carry';
    const prize = s.prize !== undefined && s.prize !== null ? list[s.prize] : null;
    const credits = s.credits === undefined ? 5 : s.credits;
    const move = (dx) => () => { if (busy) return; this.setState({ x: Math.max(16, Math.min(90, x + dx)), msg: null }); };
    const caps = list.map((p, i) => ({ x: p.x, b: p.b, c: p.c, tag: p.tag, vis: won[i] || (carrying && hit === i) ? 'hidden' : 'visible' }));
    const wonIdx = Object.keys(won).map(Number).filter((i) => won[i]);
    return {
      caps: caps,
      clawX: x,
      clawTrans: phase === 'carry' ? 'left .9s ease' : 'left .25s ease',
      rope: rope,
      fingerL: closed ? -4 : 24,
      fingerR: closed ? 4 : -24,
      carrying: carrying,
      carryColor: carrying ? list[hit].c : '#FFFFFF',
      msg: s.msg || (busy ? '…' : 'LINE IT UP · PRESS DROP'),
      busy: busy,
      credits: credits,
      noPrize: !prize,
      hasPrize: !!prize,
      prize: prize || { c: '#FFFFFF', kind: '', title: '', body: '', extra: '', cta: '', href: '#top' },
      wonList: wonIdx.map((i) => ({ tag: list[i].tag, title: list[i].kind === 'PROJECT' ? list[i].title : list[i].kind })),
      wonCount: wonIdx.length,
      totalCaps: list.length,
      noneWon: wonIdx.length === 0,
      allWon: wonIdx.length === list.length,
      left: move(-6),
      right: move(6),
      restock: () => this.setState({ won: {}, prize: null, msg: 'RESTOCKED! GO AGAIN' }),
      glassRef: (el) => { this.glass = el; },
      drop: () => {
        if (busy) return;
        let best = null, bestD = 99;
        list.forEach((p, i) => { if (!won[i]) { const d = Math.abs(p.x - x); if (d < bestD) { bestD = d; best = i; } } });
        const h = best !== null && bestD <= 5 ? best : null;
        const dropB = h !== null ? list[h].b : 22;
        this.setState({ phase: 'down', hit: h, dropB: dropB, msg: 'DROPPING…', credits: credits <= 1 ? 5 : credits - 1 });
        this.later(800, () => this.setState({ phase: 'grab' }));
        this.later(1150, () => this.setState({ phase: h !== null ? 'up' : 'idle-up', msg: h !== null ? 'GOT ONE!' : 'SO CLOSE… TRY AGAIN' }));
        if (h !== null) {
          this.later(1950, () => this.setState({ phase: 'carry', x: 6 }));
          this.later(2950, () => {
            const w = Object.assign({}, (this.state && this.state.won) || {});
            w[h] = true;
            this.setState({ phase: 'idle', won: w, prize: h, hit: null, x: 52, msg: 'PRIZE DISPENSED ▼' });
          });
        } else {
          this.later(1900, () => this.setState({ phase: 'idle', hit: null }));
        }
      }
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="room" style={css("min-height: 100vh; color: #FFFFFF; font-family: 'Fredoka', system-ui, sans-serif")}>
        <div style={css("background: #FFD23F; color: #2B1055; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-weight: 700")}>
          <span>
            {"Theme: Grab-riel"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #2B1055; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #2B1055; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <div style={css("max-width: 1000px; margin: 0 auto; padding: clamp(24px, 4vw, 48px) 16px 64px")}>
          {" "}
          <section id="top" className="cab" style={css("border: 6px solid #2B1055; border-radius: 36px 36px 18px 18px; box-shadow: 0 30px 0 #7A1450, 0 40px 80px rgba(0,0,0,.5); overflow: hidden")}>
            <div className="bulbs" style={css("border-bottom: 6px solid #2B1055; padding: 26px 20px; text-align: center")}>
              <div style={css("display: inline-block; background: #2B1055; border: 4px solid #FFD23F; border-radius: 14px; padding: 16px 26px")}>
                <div style={css("font-family: 'Press Start 2P', monospace; font-size: 11px; color: #3EE0FF; letter-spacing: 0.1em; margin-bottom: 10px")}>
                  {"RAPHAEL GABRIEL GERONIMO PRESENTS"}
                </div>
                {" "}
                <h1 style={css("margin: 0; font-family: 'Press Start 2P', monospace; font-weight: 400; font-size: clamp(30px, 6vw, 64px); line-height: 1.15; color: #FFFFFF; text-shadow: 4px 4px 0 #FF4FA3, 8px 8px 0 #7A1450")}>
                  {"GRAB-RIEL"}
                </h1>
                {" "}
                <div style={css("font-family: 'Press Start 2P', monospace; font-size: 10px; color: #FFD23F; margin-top: 10px; line-height: 1.8")}>
                  {"FULL-STACK DEVELOPER · FOUNDER · EVERY PRIZE IS REAL"}
                </div>
              </div>
            </div>
            {" "}
            <div style={css("padding: 22px clamp(14px, 3vw, 28px) 0")}>
              <div ref={v.glassRef} style={css("position: relative; height: 400px; background: rgba(62,224,255,.16); border: 6px solid #FFFFFF; border-radius: 14px; overflow: hidden; box-shadow: inset 0 0 60px rgba(255,255,255,.2)")}>
                <div aria-hidden="true" style={css("position: absolute; left: 0; right: 0; top: 0; height: 14px; background: #C0C0C8; border-bottom: 3px solid #2B1055")}></div>
                {" "}
                <div aria-hidden="true" style={css("position: absolute; left: 0; bottom: 0; width: 11%; height: 90px; background: #2B1055; border-top: 4px solid #FFD23F; border-right: 4px solid #FFD23F; display: flex; align-items: center; justify-content: center")}>
                  <span style={css("font-family: 'Press Start 2P', monospace; font-size: 9px; color: #FFD23F; writing-mode: vertical-rl; transform: rotate(180deg)")}>
                    {"PRIZE ▼"}
                  </span>
                </div>
                {" "}
                <div aria-hidden="true" style={css("position: absolute; left: 11%; right: 0; bottom: 0; height: 22px; background: rgba(43,16,85,.35)")}></div>
                {" "}
                {(v.caps || []).map((k, __i0) => (
                  <React.Fragment key={__i0}>
                    <div style={css(`position: absolute; left: ${k.x}%; bottom: ${k.b}px; width: 66px; height: 66px; margin-left: -33px; border-radius: 50%; border: 4px solid #2B1055; box-sizing: border-box; background: linear-gradient(${k.c} 50%, #FFFFFF 50%); visibility: ${k.vis}; display: flex; align-items: center; justify-content: center`)}>
                      <span style={css("font-family: 'Press Start 2P', monospace; font-size: 9px; color: #2B1055; background: rgba(255,255,255,.85); padding: 2px 3px; border-radius: 3px")}>
                        {k.tag}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
                {" "}
                <div aria-hidden="true" style={css(`position: absolute; top: 14px; left: ${v.clawX}%; width: 80px; margin-left: -40px; display: flex; flex-direction: column; align-items: center; transition: ${v.clawTrans}`)}>
                  <div style={css(`width: 5px; height: ${v.rope}px; background: #EDEDED; transition: height .7s ease`)}></div>
                  {" "}
                  <div style={css("width: 56px; height: 16px; background: #C0C0C8; border: 3px solid #2B1055; border-radius: 5px")}></div>
                  {" "}
                  <div style={css("display: flex; gap: 30px")}>
                    <div style={css(`width: 8px; height: 32px; background: #C0C0C8; border: 2px solid #2B1055; transform-origin: top center; transform: rotate(${v.fingerL}deg); transition: transform .25s ease`)}></div>
                    {" "}
                    <div style={css(`width: 8px; height: 32px; background: #C0C0C8; border: 2px solid #2B1055; transform-origin: top center; transform: rotate(${v.fingerR}deg); transition: transform .25s ease`)}></div>
                  </div>
                  {" "}
                  {v.carrying ? (
                    <>
                      <div style={css(`width: 62px; height: 62px; box-sizing: border-box; margin-top: -20px; border-radius: 50%; border: 4px solid #2B1055; background: linear-gradient(${v.carryColor} 50%, #FFFFFF 50%)`)}></div>
                    </>
                  ) : null}
                </div>
                {" "}
                <div aria-live="polite" style={css("position: absolute; right: 12px; top: 26px; font-family: 'Press Start 2P', monospace; font-size: 11px; color: #2B1055; background: #FFD23F; border: 3px solid #2B1055; padding: 8px 10px; line-height: 1.6; max-width: 60%")}>
                  {v.msg}
                </div>
              </div>
            </div>
            {" "}
            {" "}
            <div style={css("margin: 22px clamp(14px, 3vw, 28px) 0; background: #2B1055; border: 5px solid #FFD23F; border-radius: 18px 18px 0 0; padding: 20px; display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between")}>
              <div style={css("display: flex; gap: 14px; align-items: center")}>
                <button type="button" className="abtn" onClick={v.left} disabled={v.busy} aria-label="Move claw left" style={css("width: 70px; height: 70px; background: #3EE0FF; font-size: 18px; box-shadow: 0 6px 0 #2B1055")}>
                  {"◀"}
                </button>
                {" "}
                <button type="button" className="abtn" onClick={v.right} disabled={v.busy} aria-label="Move claw right" style={css("width: 70px; height: 70px; background: #3EE0FF; font-size: 18px; box-shadow: 0 6px 0 #2B1055")}>
                  {"▶"}
                </button>
              </div>
              {" "}
              <div style={css("display: flex; flex-direction: column; align-items: center; gap: 6px; font-family: 'Press Start 2P', monospace; font-size: 10px; color: #FFD23F; line-height: 1.8; text-align: center")}>
                <span>
                  {"CREDITS "}{v.credits}
                </span>
                {" "}
                <div aria-hidden="true" style={css("width: 54px; height: 70px; background: #1C0A3A; border: 3px solid #C0C0C8; border-radius: 8px; display: flex; align-items: center; justify-content: center")}>
                  <div style={css("width: 6px; height: 34px; background: #FF4FA3; border-radius: 3px")}></div>
                </div>
                {" "}
                <span>
                  {"INSERT COIN"}
                </span>
              </div>
              {" "}
              <button type="button" className="abtn" onClick={v.drop} disabled={v.busy} style={css("width: 110px; height: 110px; background: #FF4FA3; color: #FFFFFF; font-size: 16px; box-shadow: 0 8px 0 #2B1055; text-shadow: 2px 2px 0 #2B1055")}>
                {"DROP"}
              </button>
            </div>
            {" "}
            {" "}
            <div id="work" style={css("margin: 0 clamp(14px, 3vw, 28px); background: #FFFFFF; color: #2B1055; border: 5px solid #FFD23F; border-top: 0; border-radius: 0 0 18px 18px; padding: 22px; display: flex; flex-direction: column; gap: 12px; min-height: 160px")}>
              <div style={css("font-family: 'Press Start 2P', monospace; font-size: 11px; color: #7A1450")}>
                {"PRIZE TRAY"}
              </div>
              {" "}
              {v.noPrize ? (
                <>
                  <p style={css("margin: 0; font-size: 19px; line-height: 1.5")}>
                    {"Steer the claw with ◀ ▶ and hit "}
                    <b>
                      {"DROP"}
                    </b>
                    {". Every capsule holds something real: a project, my skills, my company — or the golden ticket."}
                  </p>
                </>
              ) : null}
              {" "}
              {v.hasPrize ? (
                <>
                  <div style={css("display: flex; flex-wrap: wrap; gap: 18px; align-items: flex-start")}>
                    <div aria-hidden="true" style={css(`flex: 0 0 auto; width: 84px; height: 84px; border-radius: 50%; border: 5px solid #2B1055; box-sizing: border-box; background: linear-gradient(${v.prize.c} 50%, #FFFFFF 50%)`)}></div>
                    {" "}
                    <div style={css("flex: 999 1 300px; min-width: 0; display: flex; flex-direction: column; gap: 8px")}>
                      <span style={css("font-family: 'Press Start 2P', monospace; font-size: 10px; color: #7A1450")}>
                        {"YOU WON · "}{v.prize.kind}
                      </span>
                      {" "}
                      <span style={css("font-size: 30px; font-weight: 700; line-height: 1.1")}>
                        {v.prize.title}
                      </span>
                      {" "}
                      <span style={css("font-size: 17px; line-height: 1.5")}>
                        {v.prize.body}
                      </span>
                      {" "}
                      <span style={css("font-size: 15px; color: #6A4A8C")}>
                        {v.prize.extra}
                      </span>
                      {" "}
                      <a href={v.prize.href} style={css("align-self: flex-start; color: #2B1055; font-weight: 700; text-underline-offset: 4px")}>
                        {v.prize.cta}
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            {" "}
            <div style={css("height: 28px")}></div>
          </section>
          {" "}
          {" "}
          <section id="contact" style={css("margin-top: 72px; display: flex; flex-wrap: wrap; gap: 24px")}>
            <div style={css("flex: 1 1 360px; min-width: 0; background: #2B1055; border: 4px solid #3EE0FF; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 14px")}>
              <div style={css("font-family: 'Press Start 2P', monospace; font-size: 11px; color: #3EE0FF")}>
                {"YOUR PRIZES · "}{v.wonCount}{" / "}{v.totalCaps}
              </div>
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 8px")}>
                {(v.wonList || []).map((w, __i0) => (
                  <React.Fragment key={__i0}>
                    <span className="chip">
                      {w.tag}{" · "}{w.title}
                    </span>
                  </React.Fragment>
                ))}
                {" "}
                {v.noneWon ? (
                  <>
                    <span style={css("font-size: 16px; color: #C9B8F0")}>
                      {"Nothing yet. The claw is waiting."}
                    </span>
                  </>
                ) : null}
              </div>
              {" "}
              {v.allWon ? (
                <>
                  <button type="button" onClick={v.restock} style={css("align-self: flex-start; font-family: 'Press Start 2P', monospace; font-size: 11px; background: #FFD23F; color: #2B1055; border: 3px solid #2B1055; border-radius: 10px; padding: 12px 14px; cursor: pointer; min-height: 44px")}>
                    {"RESTOCK MACHINE"}
                  </button>
                </>
              ) : null}
            </div>
            {" "}
            <div style={css("flex: 1 1 360px; min-width: 0; background: #FFD23F; color: #2B1055; border: 4px solid #2B1055; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 10px; box-shadow: 8px 8px 0 #FF4FA3")}>
              <div style={css("font-family: 'Press Start 2P', monospace; font-size: 11px")}>
                {"TICKET COUNTER"}
              </div>
              {" "}
              <h2 style={css("margin: 0; font-family: 'Press Start 2P', monospace; font-weight: 400; font-size: clamp(18px, 2.6vw, 26px); line-height: 1.4")}>
                {"Skip the claw. Talk to the operator."}
              </h2>
              {" "}
              <a href={`mailto:${C.email}`} style={css("color: #2B1055; font-size: clamp(20px, 2.6vw, 26px); font-weight: 700; text-underline-offset: 5px")}>
                {C.email}
              </a>
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 8px 18px; font-weight: 700")}>
                <a href={C.links.github} style={css("color: #2B1055")} target="_blank" rel="noreferrer">
                  {"GitHub"}
                </a>
                <a href={C.links.linkedin} style={css("color: #2B1055")} target="_blank" rel="noreferrer">
                  {"LinkedIn"}
                </a>
                <a href={C.company.url} style={css("color: #2B1055")} target="_blank" rel="noreferrer">
                  {C.company.siteLabel}
                </a>
              </div>
            </div>
          </section>
          {" "}
          <div style={css("margin-top: 28px; text-align: center; font-family: 'Press Start 2P', monospace; font-size: 10px; color: #C9B8F0; line-height: 1.8")}>
            {"© RAPHAEL GABRIEL GERONIMO · NO RIGGED CLAWS"}
          </div>
        </div>
      </div>
      </>
    );
  }
}
