'use client';
// Generated from the Rockphael design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#161312}\na{color:#141210}a:hover{color:#D7261E}\n.wall{background-color:#161312;background-image:radial-gradient(rgba(255,255,255,.035) 1px,transparent 1.5px),radial-gradient(rgba(0,0,0,.4) 1px,transparent 1.5px);background-size:5px 5px,7px 7px;background-position:0 0,2px 3px}\n.paper{background-color:#EFE6D2;background-image:radial-gradient(rgba(20,18,16,.07) 1px,transparent 1.4px),radial-gradient(rgba(120,90,50,.06) 2px,transparent 3px);background-size:4px 4px,23px 23px}\n.halftone{background-image:radial-gradient(#D7261E 38%,transparent 41%);background-size:12px 12px}\n.tape{position:absolute;width:130px;height:34px;background:rgba(232,222,190,.72);box-shadow:0 1px 2px rgba(0,0,0,.2)}\n.act{transition:color .15s ease, transform .15s ease;display:block;text-decoration:none}\n.act:hover{color:#D7261E;transform:skewX(-6deg)}\n.date{transition:background .15s ease}\n.date:hover{background:rgba(215,38,30,.08)}\n.tab{transition:transform .5s cubic-bezier(.5,0,.7,1), opacity .5s ease}\n.tab:hover{background:#E4D9C0 !important}\n.stamp{font-family:'Oswald',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.08em}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Metal+Mania&family=Oswald:wght@400;500;700&family=Special+Elite&display=swap"];

export default class RockPhael extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderVals() {
    const s = this.state || {};
    const torn = s.torn || {};
    const tabs = [];
    for (let i = 0; i < 8; i++) {
      const gone = !!torn[i];
      tabs.push({
        tf: gone ? 'translateY(70px) rotate(' + (i % 2 ? 14 : -14) + 'deg)' : 'none',
        op: gone ? 0 : 1,
        tear: () => {
          const next = Object.assign({}, (this.state && this.state.torn) || {});
          next[i] = true;
          this.setState({ torn: next });
        }
      });
    }
    return { tabs: tabs, left: 8 - Object.keys(torn).length };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="wall" style={css("min-height: 100vh; color: #141210; font-family: 'Oswald', 'Arial Narrow', sans-serif")}>
        <div style={css("background: #D7261E; color: #FFFFFF; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-weight: 500; letter-spacing: 0.04em")}>
          <span>
            {"Theme: Rock-phael"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #FFFFFF; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #FFFFFF; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <div style={css("padding: clamp(32px, 6vw, 80px) 16px clamp(48px, 8vw, 110px)")}>
          <article className="paper" style={css("position: relative; max-width: 960px; margin: 0 auto; transform: rotate(-0.6deg); box-shadow: 0 30px 60px rgba(0,0,0,.6), 0 2px 0 rgba(0,0,0,.2); padding: clamp(24px, 5vw, 64px) clamp(18px, 5vw, 64px) 0")}>
            <div aria-hidden="true" className="tape" style={css("left: -30px; top: 18px; transform: rotate(-38deg)")}></div>
            {" "}
            <div aria-hidden="true" className="tape" style={css("right: -30px; top: 18px; transform: rotate(38deg)")}></div>
            {" "}
            <div aria-hidden="true" className="tape" style={css("left: -30px; bottom: 160px; transform: rotate(32deg)")}></div>
            {" "}
            <div aria-hidden="true" className="tape" style={css("right: -30px; bottom: 160px; transform: rotate(-32deg)")}></div>
            {" "}
            <header id="top" style={css("display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px")}>
              <div className="stamp" style={css("display: flex; flex-wrap: wrap; gap: 6px 18px; justify-content: center; font-size: 15px; border-top: 3px solid #141210; border-bottom: 3px solid #141210; padding: 8px 0; width: 100%")}>
                <span>
                  {"RGG Presents"}
                </span>
                <span aria-hidden="true">
                  {"★"}
                </span>
                <span>
                  {"One night only"}
                </span>
                <span aria-hidden="true">
                  {"★"}
                </span>
                <span>
                  {"All ages"}
                </span>
              </div>
              {" "}
              <div style={css("position: relative; width: 100%; padding: 28px 0 8px")}>
                <div aria-hidden="true" className="halftone" style={css("position: absolute; left: 50%; top: 50%; width: min(520px, 90%); aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%; opacity: .32")}></div>
                {" "}
                <h1 style={css("position: relative; margin: 0; font-family: 'Metal Mania', serif; font-weight: 400; font-size: clamp(76px, 15vw, 172px); line-height: 0.82; color: #D7261E; text-shadow: 5px 5px 0 #141210")}>
                  {"Rock-"}
                  <br />
                  {"phael"}
                </h1>
                {" "}
                <div aria-hidden="true" style={css("position: absolute; right: 2%; top: 14%; width: 132px; height: 132px; background: #141210; clip-path: polygon(50% 0%,61% 18%,82% 8%,80% 30%,100% 38%,86% 54%,98% 74%,76% 78%,70% 100%,50% 88%,30% 100%,24% 78%,2% 74%,14% 54%,0% 38%,20% 30%,18% 8%,39% 18%); display: flex; align-items: center; justify-content: center; transform: rotate(14deg)")}>
                  <span className="stamp" style={css("color: #EFE6D2; font-size: 17px; line-height: 1; text-align: center")}>
                    {"New"}
                    <br />
                    {"dates"}
                    <br />
                    {"added"}
                  </span>
                </div>
              </div>
              {" "}
              <div className="stamp" style={css("font-size: clamp(26px, 4.4vw, 46px); line-height: 1")}>
                {"Raphael Gabriel Geronimo"}
              </div>
              {" "}
              <div className="stamp" style={css("background: #141210; color: #EFE6D2; font-size: clamp(16px, 2.4vw, 24px); padding: 8px 22px; margin-top: 6px; transform: skewX(-8deg)")}>
                <span style={css("display: inline-block; transform: skewX(8deg)")}>
                  {"The Full Stack World Tour"}
                </span>
              </div>
              {" "}
              <p style={css("margin: 14px 0 0; font-family: 'Special Elite', 'Courier New', monospace; font-size: 18px; line-height: 1.6; max-width: 560px")}>
                {"Full-stack developer and founder, playing the front end, the back end and the business — loud, live and on schedule."}
              </p>
            </header>
            {" "}
            <section id="work" aria-label="Selected work" style={css("margin-top: 44px; border-top: 3px solid #141210; padding-top: 22px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px")}>
              <div className="stamp" style={css("font-size: 15px; letter-spacing: 0.3em")}>
                {"With very special guests"}
              </div>
              {" "}
              <a href="#work" className="act" style={css("font-family: 'Oswald', sans-serif; font-weight: 700; font-size: clamp(44px, 8vw, 92px); line-height: 0.95; text-transform: uppercase; letter-spacing: -0.01em")}>
                {C.projects[0].name}
              </a>
              {" "}
              <div style={css("font-family: 'Special Elite', monospace; font-size: 15px")}>
                {C.projects[0].type}{" — "}{C.projects[0].summary}
              </div>
              {" "}
              <div aria-hidden="true" style={css("color: #D7261E; font-size: 22px; margin: 10px 0")}>
                {"★ ★ ★"}
              </div>
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 8px 48px; justify-content: center; align-items: baseline")}>
                <div style={css("display: flex; flex-direction: column; gap: 2px; align-items: center")}>
                  <a href="#work" className="act" style={css("font-weight: 700; font-size: clamp(30px, 5vw, 54px); line-height: 1; text-transform: uppercase")}>
                    {C.projects[1].name}
                  </a>
                  {" "}
                  <span style={css("font-family: 'Special Elite', monospace; font-size: 14px")}>
                    {C.projects[1].type}{" — "}{C.projects[1].result}
                  </span>
                </div>
                {" "}
                <div style={css("display: flex; flex-direction: column; gap: 2px; align-items: center")}>
                  <a href="#work" className="act" style={css("font-weight: 700; font-size: clamp(30px, 5vw, 54px); line-height: 1; text-transform: uppercase")}>
                    {C.projects[2].name}
                  </a>
                  {" "}
                  <span style={css("font-family: 'Special Elite', monospace; font-size: 14px")}>
                    {C.projects[2].type}{" — "}{C.projects[2].result}
                  </span>
                </div>
              </div>
              {" "}
              <div className="stamp" style={css("margin-top: 14px; font-size: clamp(16px, 2.2vw, 22px); font-weight: 500; color: #4A4440")}>
                {"plus [more projects] · [more projects] · [more projects]"}
              </div>
            </section>
            {" "}
            <section id="about" aria-label="The band" style={css("margin-top: 40px; border-top: 3px solid #141210; padding-top: 22px; display: flex; flex-direction: column; gap: 18px")}>
              <div className="stamp" style={css("font-size: 15px; letter-spacing: 0.3em; text-align: center")}>
                {"The band · all played by one tech geek"}
              </div>
              {" "}
              <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0")}>
                <div style={css("padding: 10px 18px; border-left: 2px solid #141210; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-family: 'Special Elite', monospace; font-size: 14px; color: #D7261E")}>
                    {"lead guitar"}
                  </span>
                  {" "}
                  <span className="stamp" style={css("font-size: 30px; line-height: 1")}>
                    {"Front End"}
                  </span>
                  {" "}
                  <span style={css("font-family: 'Special Elite', monospace; font-size: 15px; line-height: 1.5")}>
                    {C.skills.frontend}
                  </span>
                </div>
                {" "}
                <div style={css("padding: 10px 18px; border-left: 2px solid #141210; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-family: 'Special Elite', monospace; font-size: 14px; color: #D7261E")}>
                    {"bass & drums"}
                  </span>
                  {" "}
                  <span className="stamp" style={css("font-size: 30px; line-height: 1")}>
                    {"Back End"}
                  </span>
                  {" "}
                  <span style={css("font-family: 'Special Elite', monospace; font-size: 15px; line-height: 1.5")}>
                    {C.skills.backend}
                  </span>
                </div>
                {" "}
                <div style={css("padding: 10px 18px; border-left: 2px solid #141210; border-right: 2px solid #141210; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-family: 'Special Elite', monospace; font-size: 14px; color: #D7261E")}>
                    {"tour manager"}
                  </span>
                  {" "}
                  <span className="stamp" style={css("font-size: 30px; line-height: 1")}>
                    {"The Business"}
                  </span>
                  {" "}
                  <span style={css("font-family: 'Special Elite', monospace; font-size: 15px; line-height: 1.5")}>
                    {C.skills.business}
                  </span>
                </div>
              </div>
            </section>
            {" "}
            <section aria-label="Tour dates — career so far" style={css("margin-top: 40px; border-top: 3px solid #141210; padding-top: 22px; display: flex; flex-direction: column; gap: 10px")}>
              <div className="stamp" style={css("font-size: 15px; letter-spacing: 0.3em; text-align: center")}>
                {"Tour dates · the career so far"}
              </div>
              {" "}
              <div style={css("display: flex; flex-direction: column")}>
                <div className="date" style={css("display: grid; grid-template-columns: 90px minmax(0, 1fr) auto; gap: 16px; align-items: baseline; padding: 12px 6px; border-bottom: 1.5px dashed #141210")}>
                  <span className="stamp" style={css("font-size: 22px; color: #D7261E")}>
                    {"[Year]"}
                  </span>
                  {" "}
                  <span>
                    <span className="stamp" style={css("font-size: 22px")}>
                      {C.company.name}
                    </span>
                    {" "}
                    <span style={css("font-family: 'Special Elite', monospace; font-size: 14px")}>
                      {"— founder · [City]"}
                    </span>
                  </span>
                  {" "}
                  <span className="stamp" style={css("font-size: 13px; background: #D7261E; color: #FFFFFF; padding: 3px 10px")}>
                    {"Tonight"}
                  </span>
                </div>
                {" "}
                <div className="date" style={css("display: grid; grid-template-columns: 90px minmax(0, 1fr) auto; gap: 16px; align-items: baseline; padding: 12px 6px; border-bottom: 1.5px dashed #141210")}>
                  <span className="stamp" style={css("font-size: 22px; color: #D7261E")}>
                    {"[Year]"}
                  </span>
                  {" "}
                  <span>
                    <span className="stamp" style={css("font-size: 22px")}>
                      {"[Previous role]"}
                    </span>
                    {" "}
                    <span style={css("font-family: 'Special Elite', monospace; font-size: 14px")}>
                      {"— [company] · [City]"}
                    </span>
                  </span>
                  {" "}
                  <span className="stamp" style={css("font-size: 13px; border: 2px solid #141210; padding: 1px 8px")}>
                    {"Sold out"}
                  </span>
                </div>
                {" "}
                <div className="date" style={css("display: grid; grid-template-columns: 90px minmax(0, 1fr) auto; gap: 16px; align-items: baseline; padding: 12px 6px; border-bottom: 1.5px dashed #141210")}>
                  <span className="stamp" style={css("font-size: 22px; color: #D7261E")}>
                    {"[Year]"}
                  </span>
                  {" "}
                  <span>
                    <span className="stamp" style={css("font-size: 22px")}>
                      {"[Earlier role]"}
                    </span>
                    {" "}
                    <span style={css("font-family: 'Special Elite', monospace; font-size: 14px")}>
                      {"— [company] · [City]"}
                    </span>
                  </span>
                  {" "}
                  <span className="stamp" style={css("font-size: 13px; border: 2px solid #141210; padding: 1px 8px")}>
                    {"Sold out"}
                  </span>
                </div>
                {" "}
                <div className="date" style={css("display: grid; grid-template-columns: 90px minmax(0, 1fr) auto; gap: 16px; align-items: baseline; padding: 12px 6px")}>
                  <span className="stamp" style={css("font-size: 22px; color: #D7261E")}>
                    {"[Year]"}
                  </span>
                  {" "}
                  <span>
                    <span className="stamp" style={css("font-size: 22px")}>
                      {"First gig"}
                    </span>
                    {" "}
                    <span style={css("font-family: 'Special Elite', monospace; font-size: 14px")}>
                      {"— [where it all started]"}
                    </span>
                  </span>
                  {" "}
                  <span className="stamp" style={css("font-size: 13px; border: 2px solid #141210; padding: 1px 8px")}>
                    {"Legendary"}
                  </span>
                </div>
              </div>
            </section>
            {" "}
            <section id="venture" style={css("margin-top: 36px; background: #141210; color: #EFE6D2; margin-left: clamp(-64px, -5vw, -18px); margin-right: clamp(-64px, -5vw, -18px); padding: 26px clamp(18px, 5vw, 64px); display: flex; flex-wrap: wrap; gap: 14px 28px; align-items: center; justify-content: space-between")}>
              <div style={css("display: flex; flex-direction: column; gap: 4px")}>
                <span style={css("font-family: 'Special Elite', monospace; font-size: 14px; color: #FF6A60")}>
                  {"recorded & released on my own label"}
                </span>
                {" "}
                <span style={css("font-family: 'Metal Mania', serif; font-size: clamp(36px, 6vw, 60px); line-height: 1; color: #EFE6D2")}>
                  {C.company.name}
                </span>
                {" "}
                <span style={css("font-family: 'Special Elite', monospace; font-size: 15px")}>
                  {C.company.summary}
                </span>
              </div>
              {" "}
              <a href="#venture" className="stamp" style={css("color: #141210; background: #EFE6D2; text-decoration: none; padding: 12px 22px; font-size: 18px")}>
                {"Visit the label →"}
              </a>
            </section>
            {" "}
            <footer id="contact" style={css("margin-top: 0; padding: 28px 0 0; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px")}>
              <div className="stamp" style={css("font-size: clamp(28px, 5vw, 48px); line-height: 1")}>
                {"Book the band"}
              </div>
              {" "}
              <a href={`mailto:${C.email}`} style={css("font-family: 'Special Elite', monospace; font-size: clamp(18px, 2.6vw, 24px); text-underline-offset: 5px")}>
                {C.email}
              </a>
              {" "}
              <div style={css("font-family: 'Special Elite', monospace; font-size: 14px; display: flex; flex-wrap: wrap; gap: 6px 18px; justify-content: center")}>
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
              <div style={css("font-family: 'Special Elite', monospace; font-size: 13px; color: #4A4440; margin-top: 4px")}>
                {"Take a tab ↓ ("}{v.left}{" left)"}
              </div>
              {" "}
              <div style={css("width: calc(100% + 2 * clamp(18px, 5vw, 64px)); margin: 6px clamp(-64px, -5vw, -18px) 0; display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); border-top: 2px dashed #141210")}>
                {(v.tabs || []).map((t, __i0) => (
                  <React.Fragment key={__i0}>
                    <button type="button" className="tab" aria-label="Tear off a contact tab" onClick={t.tear} style={css(`height: 140px; border: 0; border-right: 1.5px dashed #141210; background: transparent; cursor: pointer; padding: 0; display: flex; align-items: center; justify-content: center; transform: ${t.tf}; opacity: ${t.op}`)}>
                      <span style={css("writing-mode: vertical-rl; transform: rotate(180deg); font-family: 'Special Elite', monospace; font-size: 13px; color: #141210")}>
                        {C.email}
                      </span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </footer>
          </article>
          {" "}
          <div style={css("max-width: 960px; margin: 22px auto 0; text-align: center; font-family: 'Special Elite', monospace; font-size: 13px; color: #A69C90")}>
            {"© Raphael Gabriel Geronimo · No refunds on good vibes"}
          </div>
        </div>
      </div>
      </>
    );
  }
}
