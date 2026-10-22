'use client';
// Generated from the Gaburrito design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#FFF6E6}\na{color:#2B1A12}a:hover{color:#D9481F}\n.sign{font-family:'Lilita One',sans-serif;letter-spacing:.01em}\n.chalk{font-family:'Caveat Brush',cursive}\n.tix{font-family:'Courier Prime',monospace}\n.awning{height:70px;background:repeating-linear-gradient(90deg,#D9481F 0 70px,#FFF6E6 70px 140px)}\n.scallop{height:34px;background:radial-gradient(circle at 35px 0,#D9481F 34px,transparent 35px) 0 0/140px 34px,radial-gradient(circle at 105px 0,#FFF6E6 34px,transparent 35px) 0 0/140px 34px;filter:drop-shadow(0 6px 4px rgba(60,20,0,.18))}\n.tile-bg{background-color:#2E7D6B;background-image:linear-gradient(45deg,rgba(255,255,255,.07) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.07) 75%),linear-gradient(45deg,rgba(255,255,255,.07) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.07) 75%);background-size:48px 48px;background-position:0 0,24px 24px}\n.counter{background:#E9D3AE;background-image:repeating-linear-gradient(90deg,rgba(120,80,40,.07) 0 2px,transparent 2px 22px);border-top:14px solid #B98B5A}\n.bin{display:flex;flex-direction:column;gap:6px;align-items:stretch;text-align:left;background:#C8CCD0;border:3px solid #8E949A;border-radius:10px;padding:8px;cursor:pointer;min-height:44px;font:inherit;color:#2B1A12;transition:transform .12s ease}\n.bin:hover{transform:translateY(-3px)}\n.bin[aria-pressed=\"true\"]{border-color:#2B1A12;box-shadow:0 0 0 3px #F2B33D}\n.bin .fill{height:54px;border-radius:6px;box-shadow:inset 0 4px 8px rgba(0,0,0,.25)}\n.bin .nm{font-weight:700;font-size:14px;line-height:1.2}\n.bin .sub{font-size:12px;color:#4B3A30}\n.f1{background-color:#F4EBD8;background-image:radial-gradient(#FFFFFF 2px,transparent 2.5px),radial-gradient(#E0D2B4 2px,transparent 2.5px);background-size:9px 7px,11px 8px;background-position:0 0,4px 3px}\n.f2{background-color:#5A2E22;background-image:radial-gradient(#7A4232 4px,transparent 4.5px),radial-gradient(#3E1E16 3px,transparent 3.5px);background-size:14px 12px,12px 14px;background-position:0 0,6px 5px}\n.f3{background-color:#3F8A3A;background-image:radial-gradient(#D9481F 4px,transparent 4.5px),radial-gradient(#F2B33D 3.5px,transparent 4px),radial-gradient(#7BC24F 3px,transparent 3.5px);background-size:22px 18px,18px 22px,12px 12px;background-position:0 0,9px 7px,3px 10px}\n.s1{background:#7BC24F}\n.s2{background:#D9481F}\n.s3{background:#5B1410}\n.tortilla{position:absolute;left:50%;top:50%;border-radius:50%;background:radial-gradient(circle at 30% 30%,rgba(160,90,30,.35) 0 5px,transparent 6px),radial-gradient(circle at 68% 62%,rgba(160,90,30,.3) 0 7px,transparent 8px),radial-gradient(circle at 44% 76%,rgba(160,90,30,.3) 0 4px,transparent 5px),radial-gradient(circle at 72% 28%,rgba(160,90,30,.25) 0 6px,transparent 7px),radial-gradient(circle,#F6DCA6 0 60%,#EBC27E 100%);box-shadow:0 18px 30px rgba(60,30,0,.3);transition:width .7s cubic-bezier(.6,0,.3,1),height .7s cubic-bezier(.6,0,.3,1),margin .7s cubic-bezier(.6,0,.3,1),border-radius .7s ease,transform .8s cubic-bezier(.3,1.3,.5,1)}\n.band{position:absolute;left:14%;right:14%;height:15%;border-radius:999px;transition:opacity .35s ease,transform .45s cubic-bezier(.3,1.5,.5,1)}\n.drizzle{position:absolute;left:12%;right:12%;height:10%;transition:opacity .35s ease,transform .45s cubic-bezier(.3,1.5,.5,1)}\n.foil{position:absolute;inset:0;border-radius:inherit;background:linear-gradient(100deg,#9BA3AA 0%,#E8ECEF 18%,#B5BCC2 30%,#F4F6F8 46%,#A9B0B6 62%,#E1E5E8 78%,#9BA3AA 100%);transition:clip-path .8s cubic-bezier(.6,0,.3,1) .1s}\n.foil::after{content:\"\";position:absolute;inset:0;border-radius:inherit;background:repeating-linear-gradient(80deg,transparent 0 18px,rgba(255,255,255,.25) 18px 20px,transparent 20px 34px)}\n.go{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;line-height:1;text-align:center;font-family:'Lilita One',sans-serif;font-size:20px;background:#D9481F;color:#FFF6E6;border:3px solid #2B1A12;border-radius:14px;padding:12px 26px;min-height:54px;cursor:pointer;box-shadow:0 5px 0 #2B1A12}\n.go:active{transform:translateY(3px);box-shadow:0 2px 0 #2B1A12}\n.go[disabled]{opacity:.45;cursor:not-allowed}\n.lite{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1.2;text-align:center;font-family:'Work Sans',sans-serif;font-weight:700;font-size:15px;background:transparent;color:#2B1A12;border:2.5px solid #2B1A12;border-radius:12px;padding:10px 16px;min-height:48px;cursor:pointer}\n.ticket{background:#FFFDF6;color:#2B1A12;box-shadow:0 10px 24px rgba(60,30,0,.2);position:relative}\n.ticket::after{content:\"\";position:absolute;left:0;right:0;bottom:-9px;height:10px;background:linear-gradient(-45deg,transparent 6px,#FFFDF6 6px) 0 0/12px 10px,linear-gradient(45deg,transparent 6px,#FFFDF6 6px) 0 0/12px 10px}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Lilita+One&family=Caveat+Brush&family=Courier+Prime:wght@400;700&family=Work+Sans:wght@400;500;700&display=swap"];

export default class GabUrrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  items() {
    return [
      { id: 'f1', cls: 'f1', name: `${C.projects[0].name}`, sub: `rice-white · ${C.projects[0].type}`, title: `${C.projects[0].name}`, body: `${C.projects[0].summary}`, proj: true },
      { id: 'f2', cls: 'f2', name: `${C.projects[1].name}`, sub: `slow beans · ${C.projects[1].type}`, title: `${C.projects[1].name}`, body: `${C.projects[1].summary}`, proj: true },
      { id: 'f3', cls: 'f3', name: `${C.projects[2].name}`, sub: `fire peppers · ${C.projects[2].type}`, title: `${C.projects[2].name}`, body: `${C.projects[2].summary}`, proj: true },
      { id: 's1', cls: 's1', name: 'Front end', sub: 'mild', title: 'Salsa verde · Front end', body: `${C.skills.frontend}`, proj: false },
      { id: 's2', cls: 's2', name: 'Back end', sub: 'medium', title: 'Salsa roja · Back end', body: `${C.skills.backend}`, proj: false },
      { id: 's3', cls: 's3', name: 'Business', sub: 'hot', title: 'Salsa negra · Business', body: `${C.skills.business}`, proj: false }
    ];
  }
  renderVals() {
    const s = this.state || {};
    const on = s.on || {};
    const stage = s.stage || 'build';
    const rolled = stage === 'rolled';
    const its = this.items();
    const set = (id) => { if (stage !== 'build') return; const o = Object.assign({}, on); o[id] = !o[id]; this.setState({ on: o }); };
    const bin = (it) => ({ cls: it.cls, name: it.name, sub: it.sub, on: on[it.id] ? 'true' : 'false', locked: stage !== 'build', toggle: () => set(it.id) });
    const added = its.filter((it) => on[it.id]);
    const op = {}, sc = {};
    its.forEach((it) => { op[it.id] = on[it.id] && !rolled ? 1 : 0; sc[it.id] = on[it.id] ? 1 : 0.4; });
    const nFill = ['f1', 'f2', 'f3'].filter((k) => on[k]).length;
    let step = 1, stepTitle = 'Pick your fillings', stepHint = 'Every filling is a project. Pile on as many as you like.';
    if (nFill > 0 && !(on.s1 || on.s2 || on.s3) && !rolled) { step = 2; stepTitle = 'Add some salsa'; stepHint = 'Salsas are the skills. Mild, medium, hot.'; }
    else if (nFill > 0 && !rolled) { step = 3; stepTitle = 'Roll it up'; stepHint = 'Looks good. Tuck it in and wrap it.'; }
    else if (rolled) { step = 3; stepTitle = 'One Raphael, to go'; stepHint = 'Front end, back end and business. Nothing falls out.'; }
    return {
      fillBins: its.slice(0, 3).map(bin),
      salsaBins: its.slice(3).map(bin),
      addAll: () => { if (stage !== 'build') return; this.setState({ on: { f1: true, f2: true, f3: true, s1: true, s2: true, s3: true } }); },
      clear: () => this.setState({ on: {}, stage: 'build' }),
      op: op, sc: sc,
      tw: rolled ? 90 : 84, th: rolled ? 38 : 84,
      tmx: rolled ? 45 : 42, tmy: rolled ? 19 : 42,
      tr: rolled ? '46% / 50%' : '50%',
      trot: rolled ? -18 : 0,
      foilL: rolled ? 38 : 100,
      stk: rolled ? 1 : 0,
      canRoll: !rolled, rolled: rolled,
      noFillA: nFill === 0 ? 'true' : 'false',
      rollOp: nFill === 0 ? 0.45 : 1,
      roll: () => { if (nFill === 0) return; this.setState({ stage: 'rolled' }); },
      step: step, stepTitle: stepTitle, stepHint: stepHint,
      lines: added.map((it) => ({ cls: it.cls, title: it.title, body: it.body, isProj: it.proj })),
      empty: added.length === 0,
      count: String(added.length),
      ticketState: rolled ? 'WRAPPED' : (added.length ? 'IN PROGRESS' : 'NEW')
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; background: #FFF6E6; color: #2B1A12; font-family: 'Work Sans', system-ui, sans-serif")}>
        <div style={css("background: #2B1A12; color: #FFF6E6; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-weight: 700")}>
          <span>
            {"Theme: Gab-urrito"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #F2B33D; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #F2B33D; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        {" "}
        <header id="top" style={css("position: relative")}>
          <div className="awning"></div>
          {" "}
          <div className="scallop"></div>
          {" "}
          <div style={css("max-width: 1180px; margin: 0 auto; padding: 48px 24px 72px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center")}>
            <div style={css("display: flex; flex-direction: column; gap: 18px")}>
              <span className="tix" style={css("font-size: 14px; font-weight: 700; letter-spacing: .14em; color: #D9481F")}>
                {"OPEN · FULL STACK · MADE TO ORDER"}
              </span>
              {" "}
              <h1 className="sign" style={css("margin: 0; font-size: clamp(64px, 10vw, 136px); line-height: .86; color: #D9481F; text-shadow: 5px 5px 0 #2B1A12; transform: rotate(-2deg); transform-origin: left")}>
                {"Gab-"}
                <br />
                {"urrito"}
              </h1>
              {" "}
              <p style={css("margin: 0; font-size: 20px; line-height: 1.55; max-width: 480px")}>
                {"Raphael Gabriel Geronimo. Front end, back end and business, rolled tight into one very satisfying package. Build your own below."}
              </p>
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 12px; align-items: center")}>
                <a href="#build" className="go" style={css("text-decoration: none")}>
                  {"Start my order ↓"}
                </a>
                {" "}
                <span className="chalk" style={css("font-size: 26px; transform: rotate(-3deg)")}>
                  {"no substitutions needed"}
                </span>
              </div>
            </div>
            {" "}
            {" "}
            <div style={css("background: #23302B; color: #F4F1E8; border: 14px solid #8A5A34; border-radius: 10px; padding: 28px 30px; box-shadow: 0 20px 40px rgba(60,30,0,.25); transform: rotate(1.5deg); display: flex; flex-direction: column; gap: 14px")}>
              <span className="chalk" style={css("font-size: 26px; color: #F2B33D")}>
                {"Today's special"}
              </span>
              {" "}
              <span className="chalk" style={css("font-size: clamp(40px, 5vw, 58px); line-height: .95")}>
                {"The Raphael"}
              </span>
              {" "}
              <div className="chalk" style={css("font-size: 23px; line-height: 1.35; display: flex; flex-direction: column; gap: 4px")}>
                <span>
                  {"· fresh front end, warm & handmade"}
                </span>
                {" "}
                <span>
                  {"· slow-cooked back end"}
                </span>
                {" "}
                <span>
                  {"· a spicy splash of business"}
                </span>
                {" "}
                <span>
                  {"· rolled tight, wrapped in foil"}
                </span>
              </div>
              {" "}
              <span className="chalk" style={css("font-size: 22px; color: #7BC24F; align-self: flex-end; transform: rotate(-4deg)")}>
                {"ask the chef →"}
              </span>
            </div>
          </div>
        </header>
        {" "}
        {" "}
        <section id="build" className="tile-bg" style={css("padding: 64px 0 0")}>
          <div style={css("max-width: 1240px; margin: 0 auto; padding: 0 24px 32px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 16px; color: #FFF6E6")}>
            <div style={css("display: flex; flex-direction: column; gap: 8px")}>
              <span className="tix" style={css("font-size: 14px; letter-spacing: .14em; font-weight: 700; color: #F2B33D")}>
                {"STEP "}{v.step}{" OF 3"}
              </span>
              {" "}
              <h2 className="sign" style={css("margin: 0; font-size: clamp(40px, 6vw, 70px); line-height: .95")}>
                {v.stepTitle}
              </h2>
            </div>
            {" "}
            <p className="chalk" style={css("margin: 0; font-size: 26px; max-width: 380px")}>
              {v.stepHint}
            </p>
          </div>
          {" "}
          <div className="counter" style={css("padding: 32px 24px 56px")}>
            <div style={css("max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; align-items: start")}>
              {" "}
              <div style={css("display: flex; flex-direction: column; gap: 14px")}>
                <span className="tix" style={css("font-weight: 700; font-size: 13px; letter-spacing: .14em")}>
                  {"FILLINGS · PROJECTS"}
                </span>
                {" "}
                <div style={css("display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px")}>
                  {(v.fillBins || []).map((b, __i0) => (
                    <React.Fragment key={__i0}>
                      <button type="button" className="bin" aria-pressed={b.on} onClick={b.toggle}>
                        <span className={`fill ${b.cls}`}></span>
                        <span className="nm">
                          {b.name}
                        </span>
                        <span className="sub">
                          {b.sub}
                        </span>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
                {" "}
                <span className="tix" style={css("font-weight: 700; font-size: 13px; letter-spacing: .14em; margin-top: 8px")}>
                  {"SALSA · SKILLS"}
                </span>
                {" "}
                <div style={css("display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px")}>
                  {(v.salsaBins || []).map((b, __i0) => (
                    <React.Fragment key={__i0}>
                      <button type="button" className="bin" aria-pressed={b.on} onClick={b.toggle}>
                        <span className={`fill ${b.cls}`}></span>
                        <span className="nm">
                          {b.name}
                        </span>
                        <span className="sub">
                          {b.sub}
                        </span>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
                {" "}
                <div style={css("display: flex; flex-wrap: wrap; gap: 10px; margin-top: 6px")}>
                  <button type="button" className="lite" onClick={v.addAll}>
                    {"The works (add everything)"}
                  </button>
                  {" "}
                  <button type="button" className="lite" onClick={v.clear}>
                    {"Start over"}
                  </button>
                </div>
              </div>
              {" "}
              {" "}
              <div style={css("display: flex; flex-direction: column; align-items: center; gap: 18px")}>
                <div aria-hidden="true" style={css("position: relative; width: min(420px, 100%); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle, #FFFFFF 0 62%, #E2E2E2 63% 66%, transparent 67%)")}>
                  <div className="tortilla" style={css(`width: ${v.tw}%; height: ${v.th}%; margin-left: -${v.tmx}%; margin-top: -${v.tmy}%; border-radius: ${v.tr}; transform: rotate(${v.trot}deg)`)}>
                    <div className="band f1" style={css(`top: 26%; opacity: ${v.op.f1}; transform: scale(${v.sc.f1}) rotate(-6deg)`)}></div>
                    {" "}
                    <div className="band f2" style={css(`top: 42%; opacity: ${v.op.f2}; transform: scale(${v.sc.f2}) rotate(4deg)`)}></div>
                    {" "}
                    <div className="band f3" style={css(`top: 58%; opacity: ${v.op.f3}; transform: scale(${v.sc.f3}) rotate(-3deg)`)}></div>
                    {" "}
                    <svg className="drizzle" viewBox="0 0 200 20" preserveAspectRatio="none" style={css(`top: 34%; opacity: ${v.op.s1}; transform: scale(${v.sc.s1})`)}>
                      <path d="M0 10 Q12 0 25 10 T50 10 T75 10 T100 10 T125 10 T150 10 T175 10 T200 10" fill="none" stroke="#7BC24F" strokeWidth="6" strokeLinecap="round"></path>
                    </svg>
                    {" "}
                    <svg className="drizzle" viewBox="0 0 200 20" preserveAspectRatio="none" style={css(`top: 50%; opacity: ${v.op.s2}; transform: scale(${v.sc.s2})`)}>
                      <path d="M0 10 Q12 0 25 10 T50 10 T75 10 T100 10 T125 10 T150 10 T175 10 T200 10" fill="none" stroke="#D9481F" strokeWidth="6" strokeLinecap="round"></path>
                    </svg>
                    {" "}
                    <svg className="drizzle" viewBox="0 0 200 20" preserveAspectRatio="none" style={css(`top: 66%; opacity: ${v.op.s3}; transform: scale(${v.sc.s3})`)}>
                      <path d="M0 10 Q12 0 25 10 T50 10 T75 10 T100 10 T125 10 T150 10 T175 10 T200 10" fill="none" stroke="#5B1410" strokeWidth="6" strokeLinecap="round"></path>
                    </svg>
                    {" "}
                    <div className="foil" style={css(`clip-path: inset(0 0 0 ${v.foilL}%)`)}></div>
                  </div>
                  {" "}
                  <div style={css(`position: absolute; left: 50%; top: 50%; width: 132px; height: 132px; margin: -66px 0 0 -66px; border-radius: 50%; background: #F2B33D; border: 4px solid #2B1A12; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; transform: scale(${v.stk}) rotate(-12deg); transition: transform .5s cubic-bezier(.3,1.6,.5,1) .7s`)}>
                    <span className="sign" style={css("font-size: 22px; line-height: .9; color: #2B1A12")}>
                      {"THE"}
                      <br />
                      {"RAPHAEL"}
                    </span>
                    {" "}
                    <span className="tix" style={css("font-size: 10px; font-weight: 700; margin-top: 4px")}>
                      {"FRONT·BACK·BIZ"}
                    </span>
                  </div>
                </div>
                {" "}
                <div style={css("display: flex; flex-wrap: wrap; gap: 12px; justify-content: center")}>
                  {v.canRoll ? (
                    <>
                      <button type="button" className="go" onClick={v.roll} aria-disabled={v.noFillA} style={css(`opacity: ${v.rollOp}`)}>
                        {"Roll it up"}
                      </button>
                    </>
                  ) : null}
                  {" "}
                  {v.rolled ? (
                    <>
                      <button type="button" className="go" onClick={v.clear}>
                        {"Make another"}
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
              {" "}
              {" "}
              <div className="ticket tix" style={css("padding: 24px 22px 30px; display: flex; flex-direction: column; gap: 14px; transform: rotate(1deg)")}>
                <div style={css("display: flex; justify-content: space-between; border-bottom: 2px dashed #2B1A12; padding-bottom: 10px; font-weight: 700")}>
                  <span>
                    {"ORDER #RGG"}
                  </span>
                  <span>
                    {v.ticketState}
                  </span>
                </div>
                {" "}
                {v.empty ? (
                  <>
                    <p style={css("margin: 0; font-size: 15px; line-height: 1.5; color: #6B5A4E")}>
                      {"Nothing on it yet. Tap a filling, each one is a project. Salsas are the skills."}
                    </p>
                  </>
                ) : null}
                {" "}
                {(v.lines || []).map((l, __i0) => (
                  <React.Fragment key={__i0}>
                    <div style={css("display: flex; flex-direction: column; gap: 6px; border-bottom: 1px dotted #B9A28A; padding-bottom: 12px")}>
                      <div style={css("display: flex; gap: 10px; align-items: center")}>
                        <span className={l.cls} style={css("width: 18px; height: 18px; border-radius: 4px; flex: none")}></span>
                        <b style={css("font-size: 16px")}>
                          {l.title}
                        </b>
                      </div>
                      {" "}
                      <span style={css("font-size: 14px; line-height: 1.5")}>
                        {l.body}
                      </span>
                      {" "}
                      {l.isProj ? (
                        <>
                          <a href="#build" style={css("font-size: 14px; font-weight: 700")}>
                            {"See the project →"}
                          </a>
                        </>
                      ) : null}
                    </div>
                  </React.Fragment>
                ))}
                {" "}
                <div style={css("display: flex; justify-content: space-between; font-weight: 700")}>
                  <span>
                    {"ITEMS"}
                  </span>
                  <span>
                    {v.count}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section id="venture" style={css("background: #D9481F; color: #FFF6E6; padding: 88px 24px")}>
          <div style={css("max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: center")}>
            <div style={css("display: flex; flex-direction: column; gap: 16px")}>
              <span className="tix" style={css("font-size: 14px; font-weight: 700; letter-spacing: .14em; color: #2B1A12")}>
                {"THE KITCHEN I RUN"}
              </span>
              {" "}
              <h2 className="sign" style={css("margin: 0; font-size: clamp(48px, 8vw, 96px); line-height: .9; text-shadow: 5px 5px 0 #2B1A12")}>
                {C.company.name}
              </h2>
              {" "}
              <p style={css("margin: 0; font-size: 19px; line-height: 1.55; max-width: 520px")}>
                {C.company.summary}{" I own the place, and I still taste everything before it goes out."}
              </p>
              {" "}
              <a href="#venture" className="go" style={css("text-decoration: none; align-self: flex-start; background: #FFF6E6; color: #2B1A12")}>
                {"Visit the kitchen →"}
              </a>
            </div>
            {" "}
            <div style={css("background: #FFF6E6; color: #2B1A12; border-radius: 18px; padding: 26px; border: 4px solid #2B1A12; box-shadow: 10px 10px 0 #2B1A12; display: flex; flex-direction: column; gap: 12px")}>
              <span className="chalk" style={css("font-size: 30px")}>
                {"House rules"}
              </span>
              {" "}
              <div style={css("display: flex; flex-direction: column; gap: 10px; font-size: 17px; line-height: 1.45")}>
                <span>
                  <b>
                    {"Fresh daily."}
                  </b>
                  {" No reheated code from last year."}
                </span>
                {" "}
                <span>
                  <b>
                    {"Rolled tight."}
                  </b>
                  {" Nothing falls out the bottom in production."}
                </span>
                {" "}
                <span>
                  <b>
                    {"Honest portions."}
                  </b>
                  {" I say what it does, then it does it."}
                </span>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section id="contact" style={css("padding: 88px 24px 100px; display: flex; flex-direction: column; align-items: center; gap: 28px")}>
          <h2 className="sign" style={css("margin: 0; font-size: clamp(44px, 7vw, 84px); line-height: .9; color: #D9481F; text-align: center; text-shadow: 4px 4px 0 #2B1A12")}>
            {"Order up."}
          </h2>
          {" "}
          <div className="ticket tix" style={css("width: min(440px, 100%); padding: 30px 28px 36px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; text-align: center")}>
            <span style={css("font-weight: 700; font-size: 18px")}>
              {"GAB-URRITO · THANK YOU"}
            </span>
            {" "}
            <span style={css("font-size: 13px")}>
              {"--------------------------------"}
            </span>
            {" "}
            <span style={css("font-size: 13px; letter-spacing: .12em")}>
              {"PLACE YOUR NEXT ORDER WITH"}
            </span>
            {" "}
            <a href={`mailto:${C.email}`} style={css("font-weight: 700; font-size: clamp(20px, 3vw, 26px); text-underline-offset: 5px")}>
              {C.email}
            </a>
            {" "}
            <div style={css("display: flex; justify-content: center; flex-wrap: wrap; gap: 8px 20px; font-weight: 700")}>
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
            <span style={css("font-size: 13px")}>
              {"--------------------------------"}
            </span>
            {" "}
            <span style={css("font-size: 13px; line-height: 1.6")}>
              {"TIP: SAY HI. IT'S FREE."}
              <br />
              {"© RAPHAEL GABRIEL GERONIMO"}
            </span>
          </div>
        </section>
      </div>
      </>
    );
  }
}
