'use client';
// Generated from the Heronimo design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#2A2A2A}\na{color:#111111}a:hover{color:#1D5FD1}\n.desk{background-color:#2A2A2A;background-image:repeating-linear-gradient(90deg,rgba(255,255,255,.03) 0 2px,transparent 2px 9px)}\n.page{background-color:#F3EBD7;background-image:radial-gradient(rgba(60,40,10,.06) 1px,transparent 1.5px);background-size:5px 5px;box-shadow:0 24px 50px rgba(0,0,0,.55)}\n.grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:14px}\n.pn{position:relative;border:4px solid #111111;overflow:hidden;min-height:220px;transition:transform .2s ease}\n.pn:hover{transform:rotate(-.6deg) scale(1.01);z-index:2}\n.dy{background-color:#FFD400;background-image:radial-gradient(#E8A900 1.7px,transparent 2px);background-size:10px 10px}\n.dr{background-color:#E4252B;background-image:radial-gradient(#B5161B 1.8px,transparent 2.1px);background-size:11px 11px}\n.db{background-color:#1D5FD1;background-image:radial-gradient(#1449A8 1.8px,transparent 2.1px);background-size:11px 11px}\n.dk{background-color:#2B3A55;background-image:radial-gradient(#1C2840 1.8px,transparent 2.1px);background-size:11px 11px}\n.cap{position:absolute;background:#FFE45C;border:3px solid #111111;font-family:'Comic Neue',sans-serif;font-weight:700;text-transform:uppercase;font-size:15px;line-height:1.3;padding:8px 10px;z-index:2}\n.bub{position:absolute;background:#FFFFFF;border:3px solid #111111;border-radius:50%/42%;font-family:'Comic Neue',sans-serif;font-weight:700;text-transform:uppercase;font-size:16px;line-height:1.3;padding:16px 20px;text-align:center;z-index:2}\n.bub::before{content:\"\";position:absolute;left:28%;bottom:-24px;border:12px solid transparent;border-top:22px solid #111111;border-bottom:0}\n.bub::after{content:\"\";position:absolute;left:calc(28% + 4px);bottom:-17px;border:8px solid transparent;border-top:17px solid #FFFFFF;border-bottom:0}\n.sfx{font-family:'Bangers',sans-serif;letter-spacing:.03em;color:#FFE45C;-webkit-text-stroke:3px #111111;paint-order:stroke fill;text-shadow:5px 5px 0 #111111;transition:transform .2s ease}\n.pn:hover .sfx{transform:scale(1.12) rotate(-4deg)}\n.pnum{font-family:'Comic Neue',sans-serif;font-weight:700;font-size:13px;text-align:center;margin-top:14px}\n@media (max-width:720px){.grid > *{grid-column:1 / -1 !important}}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap"];

export default class HeroNimo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderVals() {
    return {};
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="desk" style={css("min-height: 100vh; color: #111111; font-family: 'Comic Neue', 'Comic Sans MS', sans-serif")}>
        <div style={css("background: #111111; color: #FFFFFF; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-weight: 700")}>
          <span>
            {"Theme: Hero-nimo"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #FFE45C; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #FFE45C; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <div style={css("max-width: 1000px; margin: 0 auto; padding: clamp(24px, 5vw, 64px) 16px; display: flex; flex-direction: column; gap: clamp(28px, 5vw, 56px)")}>
          {" "}
          <section id="top" className="page" style={css("padding: 18px; transform: rotate(-0.8deg)")}>
            <div className="dy" style={css("position: relative; border: 5px solid #111111; min-height: 640px; overflow: hidden; display: flex; flex-direction: column")}>
              <div style={css("display: flex; justify-content: space-between; align-items: stretch; border-bottom: 5px solid #111111; background: #E4252B")}>
                <div style={css("background: #FFFFFF; border-right: 5px solid #111111; padding: 8px 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Bangers', sans-serif; line-height: 1")}>
                  <span style={css("font-size: 30px")}>
                    {"RGG"}
                  </span>
                  <span style={css("font-size: 14px")}>
                    {"COMICS"}
                  </span>
                </div>
                {" "}
                <h1 style={css("margin: 0; flex: 1; padding: 10px 16px; font-family: 'Bangers', sans-serif; font-weight: 400; color: #FFE45C; -webkit-text-stroke: 3px #111111; paint-order: stroke fill; text-shadow: 6px 6px 0 #111111; font-size: clamp(56px, 10vw, 120px); line-height: 0.9; letter-spacing: 0.02em; text-align: center")}>
                  {"Hero-nimo!"}
                </h1>
                {" "}
                <div style={css("background: #FFFFFF; border-left: 5px solid #111111; padding: 8px 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Bangers', sans-serif; line-height: 1")}>
                  <span style={css("font-size: 14px")}>
                    {"ISSUE"}
                  </span>
                  <span style={css("font-size: 34px")}>
                    {"#1"}
                  </span>
                  <span style={css("font-size: 14px")}>
                    {"25¢"}
                  </span>
                </div>
              </div>
              {" "}
              <div style={css("position: relative; flex: 1; min-height: 480px")}>
                <div aria-hidden="true" style={css("position: absolute; inset: 0; background: repeating-conic-gradient(from 0deg at 62% 48%, rgba(255,255,255,.5) 0deg 6deg, transparent 6deg 18deg)")}></div>
                {" "}
                <svg aria-hidden="true" viewBox="0 0 300 500" style={css("position: absolute; right: 8%; bottom: 46px; height: 88%; max-width: 70%")}>
                  <g strokeLinejoin="round" strokeLinecap="round">
                    <ellipse cx="150" cy="482" rx="96" ry="10" fill="rgba(17,17,17,.25)" stroke="none"></ellipse>
                    {" "}
                    <path d="M100 140 Q58 300 50 472 Q150 452 254 478 Q240 300 200 140 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M62 380 Q74 300 96 230 M238 380 Q228 300 206 230" fill="none" stroke="#A8141A" strokeWidth="5"></path>
                    {" "}
                    <path d="M126 286 L113 386 L107 452" fill="none" stroke="#111111" strokeWidth="42"></path>
                    {" "}
                    <path d="M174 286 L189 386 L196 452" fill="none" stroke="#111111" strokeWidth="42"></path>
                    {" "}
                    <path d="M126 286 L113 386 L107 452" fill="none" stroke="#1D5FD1" strokeWidth="32"></path>
                    {" "}
                    <path d="M174 286 L189 386 L196 452" fill="none" stroke="#1D5FD1" strokeWidth="32"></path>
                    {" "}
                    <path d="M110 418 L107 456" fill="none" stroke="#E4252B" strokeWidth="32" strokeLinecap="butt"></path>
                    {" "}
                    <path d="M193 418 L196 456" fill="none" stroke="#E4252B" strokeWidth="32" strokeLinecap="butt"></path>
                    {" "}
                    <path d="M92 414 H128 M177 414 H213" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M84 470 Q86 452 104 452 Q122 452 126 470 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M178 470 Q182 452 198 452 Q216 452 220 470 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M120 272 H180 L188 314 Q150 330 112 314 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M96 138 H204 L188 204 L178 280 H122 L112 204 Z" fill="#1D5FD1" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M116 182 Q150 198 184 182" fill="none" stroke="#14489F" strokeWidth="4"></path>
                    {" "}
                    <path d="M150 224 V262" stroke="#14489F" strokeWidth="3"></path>
                    {" "}
                    <rect x="120" y="266" width="60" height="16" rx="3" fill="#FFD400" stroke="#111111" strokeWidth="5"></rect>
                    {" "}
                    <rect x="142" y="266" width="16" height="16" fill="#E8A900" stroke="#111111" strokeWidth="4"></rect>
                    {" "}
                    <path d="M150 146 L178 180 L150 214 L122 180 Z" fill="#FFD400" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <text x="150" y="193" textAnchor="middle" fontFamily="Bangers, sans-serif" fontSize="34" fill="#111111" stroke="none">
                      {"R"}
                    </text>
                    {" "}
                    <path d="M102 148 Q66 182 66 216 Q68 252 116 268" fill="none" stroke="#111111" strokeWidth="32"></path>
                    {" "}
                    <path d="M198 148 Q234 182 234 216 Q232 252 184 268" fill="none" stroke="#111111" strokeWidth="32"></path>
                    {" "}
                    <path d="M102 148 Q66 182 66 216 Q68 252 116 268" fill="none" stroke="#1D5FD1" strokeWidth="23"></path>
                    {" "}
                    <path d="M198 148 Q234 182 234 216 Q232 252 184 268" fill="none" stroke="#1D5FD1" strokeWidth="23"></path>
                    {" "}
                    <path d="M88 248 Q100 262 116 268" fill="none" stroke="#111111" strokeWidth="30"></path>
                    {" "}
                    <path d="M212 248 Q200 262 184 268" fill="none" stroke="#111111" strokeWidth="30"></path>
                    {" "}
                    <path d="M88 248 Q100 262 116 268" fill="none" stroke="#E4252B" strokeWidth="22"></path>
                    {" "}
                    <path d="M212 248 Q200 262 184 268" fill="none" stroke="#E4252B" strokeWidth="22"></path>
                    {" "}
                    <rect x="139" y="104" width="22" height="38" fill="#F2C9A0" stroke="#111111" strokeWidth="5"></rect>
                    {" "}
                    <path d="M126 138 Q150 150 174 138" fill="none" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <ellipse cx="150" cy="80" rx="31" ry="36" fill="#F2C9A0" stroke="#111111" strokeWidth="5"></ellipse>
                    {" "}
                    <ellipse cx="119" cy="84" rx="6" ry="9" fill="#F2C9A0" stroke="#111111" strokeWidth="4"></ellipse>
                    {" "}
                    <ellipse cx="181" cy="84" rx="6" ry="9" fill="#F2C9A0" stroke="#111111" strokeWidth="4"></ellipse>
                    {" "}
                    <path d="M118 72 Q116 38 150 38 Q186 38 183 72 Q174 54 152 56 Q132 56 118 72 Z" fill="#111111" stroke="#111111" strokeWidth="3"></path>
                    {" "}
                    <path d="M150 40 Q136 22 124 34" fill="none" stroke="#111111" strokeWidth="6"></path>
                    {" "}
                    <path d="M120 74 Q150 64 180 74 L178 92 Q150 84 122 92 Z" fill="#111111"></path>
                    {" "}
                    <path d="M130 81 Q137 77 144 81 Q137 85 130 81 Z M156 81 Q163 77 170 81 Q163 85 156 81 Z" fill="#FFFFFF" stroke="none"></path>
                    {" "}
                    <path d="M139 104 Q150 112 161 104" fill="none" stroke="#111111" strokeWidth="4"></path>
                    {" "}
                    <path d="M150 90 L147 98 H152" fill="none" stroke="#B88A62" strokeWidth="3"></path>
                  </g>
                </svg>
                {" "}
                <div className="cap" style={css("left: 18px; top: 18px; max-width: 280px; font-size: 17px")}>
                  {"Raphael Gabriel Geronimo — full-stack developer by day, founder by night!"}
                </div>
                {" "}
                <div className="bub" style={css("left: 22px; bottom: 74px; max-width: 300px; font-size: 18px")}>
                  {"Front end? Back end? Business? I've got it all handled!"}
                </div>
                {" "}
                <div style={css("position: absolute; left: 0; right: 0; bottom: 0; background: #111111; color: #FFFFFF; font-family: 'Bangers', sans-serif; font-size: clamp(18px, 2.6vw, 28px); letter-spacing: 0.04em; padding: 10px 18px; text-align: center")}>
                  {"In this issue: The full-stack origin! Plus: three epic battles!"}
                </div>
              </div>
            </div>
          </section>
          {" "}
          {" "}
          <section aria-label="Origin story" className="page" style={css("padding: 22px; transform: rotate(0.5deg)")}>
            <div className="grid">
              <div className="pn dk" style={css("grid-column: span 6; min-height: 240px")}>
                <svg aria-hidden="true" viewBox="0 0 1000 240" preserveAspectRatio="none" style={css("position: absolute; left: 0; bottom: 0; width: 100%; height: 75%")}>
                  <path d="M0 240 V150 H60 V90 H110 V130 H160 V60 H210 V120 H260 V100 H330 V40 H380 V140 H440 V80 H520 V120 H560 V30 H620 V110 H690 V70 H760 V130 H820 V90 H880 V50 H940 V140 H1000 V240 Z" fill="#111111"></path>
                  <g fill="#FFE45C">
                    <rect x="175" y="80" width="8" height="10"></rect>
                    <rect x="345" y="60" width="8" height="10"></rect>
                    <rect x="575" y="50" width="8" height="10"></rect>
                    <rect x="895" y="70" width="8" height="10"></rect>
                    <rect x="460" y="100" width="8" height="10"></rect>
                  </g>
                </svg>
                {" "}
                <div aria-hidden="true" style={css("position: absolute; right: 12%; top: 18%; width: 70px; height: 70px; border-radius: 50%; background: #F3EBD7; box-shadow: 0 0 0 10px rgba(243,235,215,.2)")}></div>
                {" "}
                <div className="cap" style={css("left: 14px; top: 14px")}>
                  {"Meanwhile, in "}{C.city}{"…"}
                </div>
              </div>
              {" "}
              <div className="pn" style={css("grid-column: span 3; background: #2B3A55")}>
                <div aria-hidden="true" style={css("position: absolute; inset: 0; background: radial-gradient(circle at 50% 62%, rgba(255,228,92,.7), transparent 55%)")}></div>
                {" "}
                <svg aria-hidden="true" viewBox="0 0 200 140" style={css("position: absolute; left: 50%; bottom: 14px; width: 220px; margin-left: -110px")}>
                  <path d="M30 20 H170 V100 H30 Z" fill="#111111" stroke="#111111" strokeWidth="6"></path>
                  <rect x="40" y="30" width="120" height="62" fill="#9FE7FF"></rect>
                  <path d="M10 104 H190 L176 122 H24 Z" fill="#C0C0C8" stroke="#111111" strokeWidth="5"></path>
                  <path d="M60 50 L80 62 L60 74 M100 76 H130" stroke="#111111" strokeWidth="5" fill="none"></path>
                </svg>
                {" "}
                <div className="cap" style={css("left: 12px; top: 12px; right: 12px")}>
                  {"A curious tech geek finds a strange, glowing laptop…"}
                </div>
              </div>
              {" "}
              <div className="pn" style={css("grid-column: span 3; background: #FFFFFF")}>
                <div aria-hidden="true" style={css("position: absolute; inset: 0; background: repeating-linear-gradient(110deg, transparent 0 18px, rgba(17,17,17,.08) 18px 21px)")}></div>
                {" "}
                <div className="bub" style={css("left: 8%; right: 8%; top: 22%")}>
                  {"Wait… I can build the front end AND the back end?!"}
                </div>
              </div>
              {" "}
              <div className="pn dr" style={css("grid-column: span 2; display: flex; align-items: center; justify-content: center")}>
                <div className="sfx" style={css("font-size: clamp(48px, 7vw, 76px); line-height: 0.9; text-align: center; transform: rotate(-8deg)")}>
                  {"KRAKA-"}
                  <br />
                  {"DEPLOY!"}
                </div>
              </div>
              {" "}
              <div className="pn db" style={css("grid-column: span 2; color: #FFFFFF")}>
                <div className="cap" style={css("left: 12px; top: 12px; right: 12px")}>
                  {"Off the keyboard, he runs a whole other operation:"}
                </div>
                {" "}
                <div style={css("position: absolute; left: 12px; right: 12px; bottom: 16px; font-family: 'Bangers', sans-serif; font-size: 36px; line-height: 1; text-shadow: 3px 3px 0 #111111")}>
                  {C.company.name}
                </div>
              </div>
              {" "}
              <div className="pn dy" style={css("grid-column: span 2")}>
                <svg aria-hidden="true" viewBox="0 0 300 500" style={css("position: absolute; left: 50%; bottom: -6px; height: 78%; transform: translateX(-50%)")}>
                  <g strokeLinejoin="round" strokeLinecap="round">
                    <ellipse cx="150" cy="482" rx="96" ry="10" fill="rgba(17,17,17,.25)" stroke="none"></ellipse>
                    {" "}
                    <path d="M100 140 Q58 300 50 472 Q150 452 254 478 Q240 300 200 140 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M62 380 Q74 300 96 230 M238 380 Q228 300 206 230" fill="none" stroke="#A8141A" strokeWidth="5"></path>
                    {" "}
                    <path d="M126 286 L113 386 L107 452" fill="none" stroke="#111111" strokeWidth="42"></path>
                    {" "}
                    <path d="M174 286 L189 386 L196 452" fill="none" stroke="#111111" strokeWidth="42"></path>
                    {" "}
                    <path d="M126 286 L113 386 L107 452" fill="none" stroke="#1D5FD1" strokeWidth="32"></path>
                    {" "}
                    <path d="M174 286 L189 386 L196 452" fill="none" stroke="#1D5FD1" strokeWidth="32"></path>
                    {" "}
                    <path d="M110 418 L107 456" fill="none" stroke="#E4252B" strokeWidth="32" strokeLinecap="butt"></path>
                    {" "}
                    <path d="M193 418 L196 456" fill="none" stroke="#E4252B" strokeWidth="32" strokeLinecap="butt"></path>
                    {" "}
                    <path d="M92 414 H128 M177 414 H213" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M84 470 Q86 452 104 452 Q122 452 126 470 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M178 470 Q182 452 198 452 Q216 452 220 470 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M120 272 H180 L188 314 Q150 330 112 314 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M96 138 H204 L188 204 L178 280 H122 L112 204 Z" fill="#1D5FD1" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M116 182 Q150 198 184 182" fill="none" stroke="#14489F" strokeWidth="4"></path>
                    {" "}
                    <path d="M150 224 V262" stroke="#14489F" strokeWidth="3"></path>
                    {" "}
                    <rect x="120" y="266" width="60" height="16" rx="3" fill="#FFD400" stroke="#111111" strokeWidth="5"></rect>
                    {" "}
                    <rect x="142" y="266" width="16" height="16" fill="#E8A900" stroke="#111111" strokeWidth="4"></rect>
                    {" "}
                    <path d="M150 146 L178 180 L150 214 L122 180 Z" fill="#FFD400" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <text x="150" y="193" textAnchor="middle" fontFamily="Bangers, sans-serif" fontSize="34" fill="#111111" stroke="none">
                      {"R"}
                    </text>
                    {" "}
                    <path d="M102 148 Q66 182 66 216 Q68 252 116 268" fill="none" stroke="#111111" strokeWidth="32"></path>
                    {" "}
                    <path d="M198 148 Q234 182 234 216 Q232 252 184 268" fill="none" stroke="#111111" strokeWidth="32"></path>
                    {" "}
                    <path d="M102 148 Q66 182 66 216 Q68 252 116 268" fill="none" stroke="#1D5FD1" strokeWidth="23"></path>
                    {" "}
                    <path d="M198 148 Q234 182 234 216 Q232 252 184 268" fill="none" stroke="#1D5FD1" strokeWidth="23"></path>
                    {" "}
                    <path d="M88 248 Q100 262 116 268" fill="none" stroke="#111111" strokeWidth="30"></path>
                    {" "}
                    <path d="M212 248 Q200 262 184 268" fill="none" stroke="#111111" strokeWidth="30"></path>
                    {" "}
                    <path d="M88 248 Q100 262 116 268" fill="none" stroke="#E4252B" strokeWidth="22"></path>
                    {" "}
                    <path d="M212 248 Q200 262 184 268" fill="none" stroke="#E4252B" strokeWidth="22"></path>
                    {" "}
                    <rect x="139" y="104" width="22" height="38" fill="#F2C9A0" stroke="#111111" strokeWidth="5"></rect>
                    {" "}
                    <path d="M126 138 Q150 150 174 138" fill="none" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <ellipse cx="150" cy="80" rx="31" ry="36" fill="#F2C9A0" stroke="#111111" strokeWidth="5"></ellipse>
                    {" "}
                    <ellipse cx="119" cy="84" rx="6" ry="9" fill="#F2C9A0" stroke="#111111" strokeWidth="4"></ellipse>
                    {" "}
                    <ellipse cx="181" cy="84" rx="6" ry="9" fill="#F2C9A0" stroke="#111111" strokeWidth="4"></ellipse>
                    {" "}
                    <path d="M118 72 Q116 38 150 38 Q186 38 183 72 Q174 54 152 56 Q132 56 118 72 Z" fill="#111111" stroke="#111111" strokeWidth="3"></path>
                    {" "}
                    <path d="M150 40 Q136 22 124 34" fill="none" stroke="#111111" strokeWidth="6"></path>
                    {" "}
                    <path d="M120 74 Q150 64 180 74 L178 92 Q150 84 122 92 Z" fill="#111111"></path>
                    {" "}
                    <path d="M130 81 Q137 77 144 81 Q137 85 130 81 Z M156 81 Q163 77 170 81 Q163 85 156 81 Z" fill="#FFFFFF" stroke="none"></path>
                    {" "}
                    <path d="M139 104 Q150 112 161 104" fill="none" stroke="#111111" strokeWidth="4"></path>
                    {" "}
                    <path d="M150 90 L147 98 H152" fill="none" stroke="#B88A62" strokeWidth="3"></path>
                  </g>
                </svg>
                {" "}
                <div className="cap" style={css("left: 12px; top: 12px; right: 12px")}>
                  {"And so, Hero-nimo was born."}
                </div>
              </div>
            </div>
            {" "}
            <div className="pnum">
              {"— 1 —"}
            </div>
          </section>
          {" "}
          {" "}
          <section id="work" aria-label="Selected work" className="page" style={css("padding: 22px; transform: rotate(-0.4deg)")}>
            <div className="grid">
              <div className="pn" style={css("grid-column: span 6; min-height: 0; background: #111111; color: #FFE45C; padding: 14px 18px")}>
                <h2 style={css("margin: 0; font-family: 'Bangers', sans-serif; font-weight: 400; font-size: clamp(36px, 6vw, 64px); letter-spacing: 0.03em; line-height: 1")}>
                  {"Hero-nimo's greatest battles"}
                </h2>
              </div>
              {" "}
              <a href="#work" className="pn dr" style={css("grid-column: span 3; min-height: 300px; text-decoration: none; color: #111111; display: block")}>
                <div className="cap" style={css("left: 12px; top: 12px")}>
                  {"Battle #1 · "}{C.projects[0].type}
                </div>
                {" "}
                <div className="sfx" style={css("position: absolute; right: 14px; top: 56px; font-size: 54px; transform: rotate(8deg)")}>
                  {"WHAM!"}
                </div>
                {" "}
                <div style={css("position: absolute; left: 12px; right: 12px; bottom: 12px; background: #FFFFFF; border: 3px solid #111111; padding: 12px 14px; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-family: 'Bangers', sans-serif; font-size: 32px; line-height: 1")}>
                    {C.projects[0].name}
                  </span>
                  {" "}
                  <span style={css("font-weight: 700; font-size: 15px")}>
                    {"Villain: "}{C.projects[0].problem}
                  </span>
                  {" "}
                  <span style={css("font-size: 15px")}>
                    {"Outcome: "}{C.projects[0].result}
                  </span>
                </div>
              </a>
              {" "}
              <a href="#work" className="pn db" style={css("grid-column: span 3; min-height: 300px; text-decoration: none; color: #111111; display: block")}>
                <div className="cap" style={css("left: 12px; top: 12px")}>
                  {"Battle #2 · "}{C.projects[1].type}
                </div>
                {" "}
                <div className="sfx" style={css("position: absolute; right: 14px; top: 56px; font-size: 54px; transform: rotate(-6deg)")}>
                  {"ZZZAP!"}
                </div>
                {" "}
                <div style={css("position: absolute; left: 12px; right: 12px; bottom: 12px; background: #FFFFFF; border: 3px solid #111111; padding: 12px 14px; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-family: 'Bangers', sans-serif; font-size: 32px; line-height: 1")}>
                    {C.projects[1].name}
                  </span>
                  {" "}
                  <span style={css("font-weight: 700; font-size: 15px")}>
                    {"Villain: "}{C.projects[1].problem}
                  </span>
                  {" "}
                  <span style={css("font-size: 15px")}>
                    {"Outcome: "}{C.projects[1].result}
                  </span>
                </div>
              </a>
              {" "}
              <a href="#work" className="pn dy" style={css("grid-column: span 4; min-height: 260px; text-decoration: none; color: #111111; display: block")}>
                <div className="cap" style={css("left: 12px; top: 12px")}>
                  {"Battle #3 · "}{C.projects[2].type}
                </div>
                {" "}
                <div style={css("position: absolute; left: 12px; bottom: 12px; right: 40%; background: #FFFFFF; border: 3px solid #111111; padding: 12px 14px; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-family: 'Bangers', sans-serif; font-size: 32px; line-height: 1")}>
                    {C.projects[2].name}
                  </span>
                  {" "}
                  <span style={css("font-weight: 700; font-size: 15px")}>
                    {"Villain: "}{C.projects[2].problem}
                  </span>
                  {" "}
                  <span style={css("font-size: 15px")}>
                    {"Outcome: "}{C.projects[2].result}
                  </span>
                </div>
                {" "}
                <div className="sfx" style={css("position: absolute; right: 18px; bottom: 30px; font-size: 64px; transform: rotate(-10deg)")}>
                  {"KA-POW!"}
                </div>
              </a>
              {" "}
              <div className="pn" style={css("grid-column: span 2; min-height: 260px; background: #FFFFFF")}>
                <div className="bub" style={css("left: 8%; right: 8%; top: 14%; font-size: 15px")}>
                  {"Screenshots of each battle go here! [Project screenshots]"}
                </div>
              </div>
            </div>
            {" "}
            <div className="pnum">
              {"— 2 —"}
            </div>
          </section>
          {" "}
          {" "}
          <section id="about" aria-label="Character profile" className="page" style={css("padding: 22px; transform: rotate(0.6deg)")}>
            <div className="grid">
              <div className="pn dy" style={css("grid-column: span 2; min-height: 360px")}>
                <svg aria-hidden="true" viewBox="0 0 300 500" style={css("position: absolute; left: 50%; bottom: -6px; height: 82%; transform: translateX(-50%)")}>
                  <g strokeLinejoin="round" strokeLinecap="round">
                    <ellipse cx="150" cy="482" rx="96" ry="10" fill="rgba(17,17,17,.25)" stroke="none"></ellipse>
                    {" "}
                    <path d="M100 140 Q58 300 50 472 Q150 452 254 478 Q240 300 200 140 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M62 380 Q74 300 96 230 M238 380 Q228 300 206 230" fill="none" stroke="#A8141A" strokeWidth="5"></path>
                    {" "}
                    <path d="M126 286 L113 386 L107 452" fill="none" stroke="#111111" strokeWidth="42"></path>
                    {" "}
                    <path d="M174 286 L189 386 L196 452" fill="none" stroke="#111111" strokeWidth="42"></path>
                    {" "}
                    <path d="M126 286 L113 386 L107 452" fill="none" stroke="#1D5FD1" strokeWidth="32"></path>
                    {" "}
                    <path d="M174 286 L189 386 L196 452" fill="none" stroke="#1D5FD1" strokeWidth="32"></path>
                    {" "}
                    <path d="M110 418 L107 456" fill="none" stroke="#E4252B" strokeWidth="32" strokeLinecap="butt"></path>
                    {" "}
                    <path d="M193 418 L196 456" fill="none" stroke="#E4252B" strokeWidth="32" strokeLinecap="butt"></path>
                    {" "}
                    <path d="M92 414 H128 M177 414 H213" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M84 470 Q86 452 104 452 Q122 452 126 470 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M178 470 Q182 452 198 452 Q216 452 220 470 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M120 272 H180 L188 314 Q150 330 112 314 Z" fill="#E4252B" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M96 138 H204 L188 204 L178 280 H122 L112 204 Z" fill="#1D5FD1" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <path d="M116 182 Q150 198 184 182" fill="none" stroke="#14489F" strokeWidth="4"></path>
                    {" "}
                    <path d="M150 224 V262" stroke="#14489F" strokeWidth="3"></path>
                    {" "}
                    <rect x="120" y="266" width="60" height="16" rx="3" fill="#FFD400" stroke="#111111" strokeWidth="5"></rect>
                    {" "}
                    <rect x="142" y="266" width="16" height="16" fill="#E8A900" stroke="#111111" strokeWidth="4"></rect>
                    {" "}
                    <path d="M150 146 L178 180 L150 214 L122 180 Z" fill="#FFD400" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <text x="150" y="193" textAnchor="middle" fontFamily="Bangers, sans-serif" fontSize="34" fill="#111111" stroke="none">
                      {"R"}
                    </text>
                    {" "}
                    <path d="M102 148 Q66 182 66 216 Q68 252 116 268" fill="none" stroke="#111111" strokeWidth="32"></path>
                    {" "}
                    <path d="M198 148 Q234 182 234 216 Q232 252 184 268" fill="none" stroke="#111111" strokeWidth="32"></path>
                    {" "}
                    <path d="M102 148 Q66 182 66 216 Q68 252 116 268" fill="none" stroke="#1D5FD1" strokeWidth="23"></path>
                    {" "}
                    <path d="M198 148 Q234 182 234 216 Q232 252 184 268" fill="none" stroke="#1D5FD1" strokeWidth="23"></path>
                    {" "}
                    <path d="M88 248 Q100 262 116 268" fill="none" stroke="#111111" strokeWidth="30"></path>
                    {" "}
                    <path d="M212 248 Q200 262 184 268" fill="none" stroke="#111111" strokeWidth="30"></path>
                    {" "}
                    <path d="M88 248 Q100 262 116 268" fill="none" stroke="#E4252B" strokeWidth="22"></path>
                    {" "}
                    <path d="M212 248 Q200 262 184 268" fill="none" stroke="#E4252B" strokeWidth="22"></path>
                    {" "}
                    <rect x="139" y="104" width="22" height="38" fill="#F2C9A0" stroke="#111111" strokeWidth="5"></rect>
                    {" "}
                    <path d="M126 138 Q150 150 174 138" fill="none" stroke="#111111" strokeWidth="5"></path>
                    {" "}
                    <ellipse cx="150" cy="80" rx="31" ry="36" fill="#F2C9A0" stroke="#111111" strokeWidth="5"></ellipse>
                    {" "}
                    <ellipse cx="119" cy="84" rx="6" ry="9" fill="#F2C9A0" stroke="#111111" strokeWidth="4"></ellipse>
                    {" "}
                    <ellipse cx="181" cy="84" rx="6" ry="9" fill="#F2C9A0" stroke="#111111" strokeWidth="4"></ellipse>
                    {" "}
                    <path d="M118 72 Q116 38 150 38 Q186 38 183 72 Q174 54 152 56 Q132 56 118 72 Z" fill="#111111" stroke="#111111" strokeWidth="3"></path>
                    {" "}
                    <path d="M150 40 Q136 22 124 34" fill="none" stroke="#111111" strokeWidth="6"></path>
                    {" "}
                    <path d="M120 74 Q150 64 180 74 L178 92 Q150 84 122 92 Z" fill="#111111"></path>
                    {" "}
                    <path d="M130 81 Q137 77 144 81 Q137 85 130 81 Z M156 81 Q163 77 170 81 Q163 85 156 81 Z" fill="#FFFFFF" stroke="none"></path>
                    {" "}
                    <path d="M139 104 Q150 112 161 104" fill="none" stroke="#111111" strokeWidth="4"></path>
                    {" "}
                    <path d="M150 90 L147 98 H152" fill="none" stroke="#B88A62" strokeWidth="3"></path>
                  </g>
                </svg>
                {" "}
                <div className="cap" style={css("left: 12px; top: 12px")}>
                  {"Character file"}
                </div>
              </div>
              {" "}
              <div className="pn" style={css("grid-column: span 4; background: #FFFFFF; padding: 20px; display: flex; flex-direction: column; gap: 14px")}>
                <h2 style={css("margin: 0; font-family: 'Bangers', sans-serif; font-weight: 400; font-size: clamp(36px, 5vw, 54px); line-height: 1; letter-spacing: 0.03em")}>
                  {"Hero-nimo · Powers & abilities"}
                </h2>
                {" "}
                <div style={css("display: flex; flex-direction: column; gap: 10px; font-size: 16px; line-height: 1.5")}>
                  <div style={css("border-left: 6px solid #E4252B; padding-left: 12px")}>
                    <b style={css("text-transform: uppercase")}>
                      {"Pixel vision (front end):"}
                    </b>
                    {" "}{C.skills.frontend}
                  </div>
                  {" "}
                  <div style={css("border-left: 6px solid #1D5FD1; padding-left: 12px")}>
                    <b style={css("text-transform: uppercase")}>
                      {"Server strength (back end):"}
                    </b>
                    {" "}{C.skills.backend}
                  </div>
                  {" "}
                  <div style={css("border-left: 6px solid #E8A900; padding-left: 12px")}>
                    <b style={css("text-transform: uppercase")}>
                      {"Business sense:"}
                    </b>
                    {" "}{C.skills.business}
                  </div>
                  {" "}
                  <div style={css("border-top: 2px dashed #111111; padding-top: 10px")}>
                    <b style={css("text-transform: uppercase")}>
                      {"Secret identity:"}
                    </b>
                    {" a professional tech geek. "}
                    <b style={css("text-transform: uppercase")}>
                      {"Weakness:"}
                    </b>
                    {" [your fun weakness]."}
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="pnum">
              {"— 3 —"}
            </div>
          </section>
          {" "}
          {" "}
          <section id="contact" className="page" style={css("padding: 22px; transform: rotate(-0.5deg)")}>
            <div className="grid">
              <div className="pn dk" style={css("grid-column: span 6; min-height: 380px; color: #FFFFFF")}>
                <div aria-hidden="true" style={css("position: absolute; left: 50%; top: -40px; width: 600px; height: 520px; margin-left: -300px; background: rgba(255,228,92,.22); clip-path: polygon(47% 100%, 53% 100%, 100% 0, 0 0)")}></div>
                {" "}
                <div aria-hidden="true" style={css("position: absolute; left: 50%; top: 40px; width: 150px; height: 150px; margin-left: -75px; border-radius: 50%; background: #FFE45C; border: 5px solid #111111; display: flex; align-items: center; justify-content: center; font-family: 'Bangers', sans-serif; font-size: 70px; color: #111111")}>
                  {"R"}
                </div>
                {" "}
                <div className="cap" style={css("left: 14px; top: 14px")}>
                  {"Next issue…"}
                </div>
                {" "}
                <div style={css("position: absolute; left: 16px; right: 16px; bottom: 18px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center")}>
                  <h2 className="sfx" style={css("margin: 0; font-weight: 400; font-size: clamp(48px, 8vw, 90px); line-height: 0.95")}>
                    {"Need a hero?"}
                  </h2>
                  {" "}
                  <a href={`mailto:${C.email}`} style={css("background: #FFFFFF; border: 3px solid #111111; padding: 8px 16px; font-weight: 700; font-size: clamp(18px, 2.6vw, 24px); text-decoration: none")}>
                    {C.email}
                  </a>
                  {" "}
                  <div style={css("display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; font-family: 'Bangers', sans-serif; font-size: 20px; letter-spacing: 0.04em")}>
                    <a href={C.links.github} style={css("background: #FFE45C; border: 3px solid #111111; padding: 4px 12px; text-decoration: none")} target="_blank" rel="noreferrer">
                      {"GitHub"}
                    </a>
                    {" "}
                    <a href={C.links.linkedin} style={css("background: #FFE45C; border: 3px solid #111111; padding: 4px 12px; text-decoration: none")} target="_blank" rel="noreferrer">
                      {"LinkedIn"}
                    </a>
                    {" "}
                    <a href={C.company.url} style={css("background: #FFE45C; border: 3px solid #111111; padding: 4px 12px; text-decoration: none")} target="_blank" rel="noreferrer">
                      {C.company.siteLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="pnum">
              {"To be continued… · © Raphael Gabriel Geronimo · RGG Comics"}
            </div>
          </section>
        </div>
      </div>
      </>
    );
  }
}
