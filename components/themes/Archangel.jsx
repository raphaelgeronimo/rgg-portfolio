'use client';
// Generated from the Godbriel design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#09090B}\na{color:#D9BE85}a:hover{color:#F3E2B8}\n.velvet{background-color:#09090B;background-image:radial-gradient(ellipse at 50% 0%,rgba(201,168,106,.08),transparent 60%),radial-gradient(rgba(255,255,255,.018) 1px,transparent 1.4px);background-size:100% 100%,4px 4px}\n.foil{background:linear-gradient(100deg,#A9864A 0%,#E9D3A0 28%,#B89458 48%,#F3E2B8 66%,#A9864A 100%);-webkit-background-clip:text;background-clip:text;color:transparent}\n.rule{height:1px;background:linear-gradient(90deg,transparent,#8E7444 15%,#C9A86A 50%,#8E7444 85%,transparent)}\n.num{font-family:'Cinzel',serif;font-weight:400;font-size:13px;letter-spacing:.42em;color:#B8995E}\n.work{display:grid;grid-template-columns:72px minmax(0,1fr) 180px;gap:28px;align-items:center;padding:30px 0;text-decoration:none;color:#EDE6D6;border-bottom:1px solid rgba(201,168,106,.22);transition:padding .3s ease}\n.work:hover{padding-left:12px}\n.work:hover .wt{color:#F3E2B8}\n.ghost{font-family:'Cinzel',serif;font-size:14px;letter-spacing:.22em;color:#E9D3A0;text-decoration:none;border:1px solid rgba(201,168,106,.6);padding:14px 26px;transition:background .25s ease,color .25s ease}\n.ghost:hover{background:#C9A86A;color:#09090B}\n@media (max-width:760px){.work{grid-template-columns:48px minmax(0,1fr)}.work .thumb{display:none}}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"];

export default class Archangel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { this.light(); }
  componentWillUnmount() { clearInterval(this.timer); }
  light() {
    clearInterval(this.timer);
    this.setState({ lit: 0 });
    this.timer = setInterval(() => {
      const n = ((this.state && this.state.lit) || 0) + 1;
      this.setState({ lit: n });
      if (n >= 62) clearInterval(this.timer);
    }, 55);
  }
  renderVals() {
    const s = this.state || {};
    const N = 62;
    const lit = s.lit === undefined ? N : s.lit;
    const rank = [5, 3, 4, 6, 2, 7, 1, 0, 17, 52, 12, 22, 37, 26, 35, 44, 10, 40, 15, 25, 58, 32, 60, 11, 42, 53, 55, 24, 28, 39, 54, 9, 13, 19, 47, 8, 50, 23, 43, 46, 34, 49, 56, 27, 59, 29, 45, 36, 18, 21, 51, 30, 57, 38, 16, 31, 20, 14, 33, 41, 48, 61];
    const op = {};
    for (let i = 0; i < N; i++) op['p' + i] = rank[i] < lit ? 0.95 : 0.14;
    const done = lit >= N;
    const ratio = lit / N;
    return {
      op: op,
      sheen: (ratio * 0.9).toFixed(2),
      starOp: done ? 1 : 0.2,
      glow: Math.round(ratio * 46),
      beam: (ratio * 0.16).toFixed(3),
      nameOp: done ? 1 : 0,
      nameY: done ? 0 : 14,
      relight: () => this.light()
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="velvet" style={css("min-height: 100vh; color: #EDE6D6; font-family: 'Cormorant Garamond', Georgia, serif")}>
        <div style={css("background: #000000; border-bottom: 1px solid rgba(201,168,106,.25); color: #B8995E; font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: 0.2em; padding: 12px 24px; display: flex; flex-wrap: wrap; gap: 8px 28px; justify-content: center; align-items: center")}>
          <span>
            {"✦"}
          </span>
          {" "}
          <a href="/pro" style={css("padding: 4px 0; text-decoration: none")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("padding: 4px 0; text-decoration: none")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        <section id="top" style={css("padding: clamp(48px, 8vw, 96px) 24px clamp(64px, 9vw, 120px); display: flex; flex-direction: column; align-items: center; text-align: center; gap: 34px")}>
          <button type="button" onClick={v.relight} aria-label="Light the window again" style={css("background: transparent; border: 0; padding: 0; cursor: pointer; position: relative")}>
            <svg viewBox="0 0 240 400" style={css(`width: min(320px, 72vw); display: block; filter: drop-shadow(0 0 ${v.glow}px rgba(233,211,160,.4))`)} aria-hidden="true">
              <defs>
                <clipPath id="arch">
                  <path d="M12 392 V150 Q12 50 120 8 Q228 50 228 150 V392 Z"></path>
                </clipPath>
                <radialGradient id="glass" cx="40%" cy="28%" r="85%">
                  <stop offset="0" stopColor="#FFF6DC" stopOpacity=".45"></stop>
                  <stop offset=".5" stopColor="#FFF6DC" stopOpacity=".08"></stop>
                  <stop offset="1" stopColor="#000000" stopOpacity=".25"></stop>
                </radialGradient>
              </defs>
              <path d="M4 398 V148 Q4 42 120 0 Q236 42 236 148 V398 Z" fill="#14110C" stroke="#8E7444" strokeWidth="2"></path>
              <g clipPath="url(#arch)">
                <rect x="0" y="0" width="240" height="400" fill="#0E0C09"></rect>
                <polygon points="120.0,98.0 98.6,46.3 120.0,40.9 141.4,46.3" fill="#2C4A8A" opacity={v.op.p0} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="120.0,98.0 141.4,46.3 160.4,57.6 171.7,76.6" fill="#8E1F2E" opacity={v.op.p1} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="120.0,98.0 171.7,76.6 177.1,98.0 171.7,119.4" fill="#1F5E4A" opacity={v.op.p2} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="120.0,98.0 171.7,119.4 160.4,138.4 141.4,149.7" fill="#5A3478" opacity={v.op.p3} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="120.0,98.0 141.4,149.7 120.0,155.1 98.6,149.7" fill="#B98A2E" opacity={v.op.p4} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="120.0,98.0 98.6,149.7 79.6,138.4 68.3,119.4" fill="#23407A" opacity={v.op.p5} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="120.0,98.0 68.3,119.4 62.9,98.0 68.3,76.6" fill="#A12A3A" opacity={v.op.p6} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="120.0,98.0 68.3,76.6 79.6,57.6 98.6,46.3" fill="#2E6E58" opacity={v.op.p7} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="32.0,170.0 52.0,196.0 32.0,222.0 12.0,196.0" fill="#23407A" opacity={v.op.p8} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="72.0,170.0 92.0,196.0 72.0,222.0 52.0,196.0" fill="#1F5E4A" opacity={v.op.p9} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="112.0,170.0 132.0,196.0 112.0,222.0 92.0,196.0" fill="#A12A3A" opacity={v.op.p10} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="152.0,170.0 172.0,196.0 152.0,222.0 132.0,196.0" fill="#2C4A8A" opacity={v.op.p11} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="192.0,170.0 212.0,196.0 192.0,222.0 172.0,196.0" fill="#8E1F2E" opacity={v.op.p12} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="232.0,170.0 252.0,196.0 232.0,222.0 212.0,196.0" fill="#C79A3E" opacity={v.op.p13} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="12.0,196.0 32.0,222.0 12.0,248.0 -8.0,222.0" fill="#8E1F2E" opacity={v.op.p14} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="52.0,196.0 72.0,222.0 52.0,248.0 32.0,222.0" fill="#23407A" opacity={v.op.p15} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="92.0,196.0 112.0,222.0 92.0,248.0 72.0,222.0" fill="#6A3E8A" opacity={v.op.p16} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="132.0,196.0 152.0,222.0 132.0,248.0 112.0,222.0" fill="#2C4A8A" opacity={v.op.p17} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="172.0,196.0 192.0,222.0 172.0,248.0 152.0,222.0" fill="#C79A3E" opacity={v.op.p18} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="212.0,196.0 232.0,222.0 212.0,248.0 192.0,222.0" fill="#5A3478" opacity={v.op.p19} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="32.0,222.0 52.0,248.0 32.0,274.0 12.0,248.0" fill="#2C4A8A" opacity={v.op.p20} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="72.0,222.0 92.0,248.0 72.0,274.0 52.0,248.0" fill="#8E1F2E" opacity={v.op.p21} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="112.0,222.0 132.0,248.0 112.0,274.0 92.0,248.0" fill="#A12A3A" opacity={v.op.p22} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="152.0,222.0 172.0,248.0 152.0,274.0 132.0,248.0" fill="#A12A3A" opacity={v.op.p23} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="192.0,222.0 212.0,248.0 192.0,274.0 172.0,248.0" fill="#8E1F2E" opacity={v.op.p24} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="232.0,222.0 252.0,248.0 232.0,274.0 212.0,248.0" fill="#5A3478" opacity={v.op.p25} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="12.0,248.0 32.0,274.0 12.0,300.0 -8.0,274.0" fill="#8E1F2E" opacity={v.op.p26} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="52.0,248.0 72.0,274.0 52.0,300.0 32.0,274.0" fill="#C79A3E" opacity={v.op.p27} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="92.0,248.0 112.0,274.0 92.0,300.0 72.0,274.0" fill="#A12A3A" opacity={v.op.p28} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="132.0,248.0 152.0,274.0 132.0,300.0 112.0,274.0" fill="#2C4A8A" opacity={v.op.p29} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="172.0,248.0 192.0,274.0 172.0,300.0 152.0,274.0" fill="#6A3E8A" opacity={v.op.p30} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="212.0,248.0 232.0,274.0 212.0,300.0 192.0,274.0" fill="#8E1F2E" opacity={v.op.p31} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="32.0,274.0 52.0,300.0 32.0,326.0 12.0,300.0" fill="#5A3478" opacity={v.op.p32} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="72.0,274.0 92.0,300.0 72.0,326.0 52.0,300.0" fill="#6A3E8A" opacity={v.op.p33} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="112.0,274.0 132.0,300.0 112.0,326.0 92.0,300.0" fill="#2C4A8A" opacity={v.op.p34} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="152.0,274.0 172.0,300.0 152.0,326.0 132.0,300.0" fill="#6A3E8A" opacity={v.op.p35} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="192.0,274.0 212.0,300.0 192.0,326.0 172.0,300.0" fill="#6A3E8A" opacity={v.op.p36} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="232.0,274.0 252.0,300.0 232.0,326.0 212.0,300.0" fill="#A12A3A" opacity={v.op.p37} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="12.0,300.0 32.0,326.0 12.0,352.0 -8.0,326.0" fill="#2C4A8A" opacity={v.op.p38} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="52.0,300.0 72.0,326.0 52.0,352.0 32.0,326.0" fill="#5A3478" opacity={v.op.p39} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="92.0,300.0 112.0,326.0 92.0,352.0 72.0,326.0" fill="#2C4A8A" opacity={v.op.p40} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="132.0,300.0 152.0,326.0 132.0,352.0 112.0,326.0" fill="#C79A3E" opacity={v.op.p41} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="172.0,300.0 192.0,326.0 172.0,352.0 152.0,326.0" fill="#1F5E4A" opacity={v.op.p42} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="212.0,300.0 232.0,326.0 212.0,352.0 192.0,326.0" fill="#B98A2E" opacity={v.op.p43} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="32.0,326.0 52.0,352.0 32.0,378.0 12.0,352.0" fill="#A12A3A" opacity={v.op.p44} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="72.0,326.0 92.0,352.0 72.0,378.0 52.0,352.0" fill="#1F5E4A" opacity={v.op.p45} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="112.0,326.0 132.0,352.0 112.0,378.0 92.0,352.0" fill="#C79A3E" opacity={v.op.p46} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="152.0,326.0 172.0,352.0 152.0,378.0 132.0,352.0" fill="#8E1F2E" opacity={v.op.p47} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="192.0,326.0 212.0,352.0 192.0,378.0 172.0,352.0" fill="#6A3E8A" opacity={v.op.p48} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="232.0,326.0 252.0,352.0 232.0,378.0 212.0,352.0" fill="#B98A2E" opacity={v.op.p49} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="12.0,352.0 32.0,378.0 12.0,404.0 -8.0,378.0" fill="#C79A3E" opacity={v.op.p50} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="52.0,352.0 72.0,378.0 52.0,404.0 32.0,378.0" fill="#1F5E4A" opacity={v.op.p51} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="92.0,352.0 112.0,378.0 92.0,404.0 72.0,378.0" fill="#8E1F2E" opacity={v.op.p52} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="132.0,352.0 152.0,378.0 132.0,404.0 112.0,378.0" fill="#6A3E8A" opacity={v.op.p53} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="172.0,352.0 192.0,378.0 172.0,404.0 152.0,378.0" fill="#6A3E8A" opacity={v.op.p54} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="212.0,352.0 232.0,378.0 212.0,404.0 192.0,378.0" fill="#5A3478" opacity={v.op.p55} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="32.0,378.0 52.0,404.0 32.0,430.0 12.0,404.0" fill="#23407A" opacity={v.op.p56} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="72.0,378.0 92.0,404.0 72.0,430.0 52.0,404.0" fill="#8E1F2E" opacity={v.op.p57} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="112.0,378.0 132.0,404.0 112.0,430.0 92.0,404.0" fill="#C79A3E" opacity={v.op.p58} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="152.0,378.0 172.0,404.0 152.0,430.0 132.0,404.0" fill="#8E1F2E" opacity={v.op.p59} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="192.0,378.0 212.0,404.0 192.0,430.0 172.0,404.0" fill="#6A3E8A" opacity={v.op.p60} style={css("transition: opacity .8s ease")}></polygon>
                <polygon points="232.0,378.0 252.0,404.0 232.0,430.0 212.0,404.0" fill="#2C4A8A" opacity={v.op.p61} style={css("transition: opacity .8s ease")}></polygon>
                <rect x="0" y="0" width="240" height="400" fill="url(#glass)" opacity={v.sheen} style={css("transition: opacity 1s ease")}></rect>
                <polygon points="120.0,98.0 98.6,46.3 120.0,40.9 141.4,46.3" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="120.0,98.0 141.4,46.3 160.4,57.6 171.7,76.6" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="120.0,98.0 171.7,76.6 177.1,98.0 171.7,119.4" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="120.0,98.0 171.7,119.4 160.4,138.4 141.4,149.7" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="120.0,98.0 141.4,149.7 120.0,155.1 98.6,149.7" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="120.0,98.0 98.6,149.7 79.6,138.4 68.3,119.4" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="120.0,98.0 68.3,119.4 62.9,98.0 68.3,76.6" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="120.0,98.0 68.3,76.6 79.6,57.6 98.6,46.3" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="32.0,170.0 52.0,196.0 32.0,222.0 12.0,196.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="72.0,170.0 92.0,196.0 72.0,222.0 52.0,196.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="112.0,170.0 132.0,196.0 112.0,222.0 92.0,196.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="152.0,170.0 172.0,196.0 152.0,222.0 132.0,196.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="192.0,170.0 212.0,196.0 192.0,222.0 172.0,196.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="232.0,170.0 252.0,196.0 232.0,222.0 212.0,196.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="12.0,196.0 32.0,222.0 12.0,248.0 -8.0,222.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="52.0,196.0 72.0,222.0 52.0,248.0 32.0,222.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="92.0,196.0 112.0,222.0 92.0,248.0 72.0,222.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="132.0,196.0 152.0,222.0 132.0,248.0 112.0,222.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="172.0,196.0 192.0,222.0 172.0,248.0 152.0,222.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="212.0,196.0 232.0,222.0 212.0,248.0 192.0,222.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="32.0,222.0 52.0,248.0 32.0,274.0 12.0,248.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="72.0,222.0 92.0,248.0 72.0,274.0 52.0,248.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="112.0,222.0 132.0,248.0 112.0,274.0 92.0,248.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="152.0,222.0 172.0,248.0 152.0,274.0 132.0,248.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="192.0,222.0 212.0,248.0 192.0,274.0 172.0,248.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="232.0,222.0 252.0,248.0 232.0,274.0 212.0,248.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="12.0,248.0 32.0,274.0 12.0,300.0 -8.0,274.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="52.0,248.0 72.0,274.0 52.0,300.0 32.0,274.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="92.0,248.0 112.0,274.0 92.0,300.0 72.0,274.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="132.0,248.0 152.0,274.0 132.0,300.0 112.0,274.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="172.0,248.0 192.0,274.0 172.0,300.0 152.0,274.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="212.0,248.0 232.0,274.0 212.0,300.0 192.0,274.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="32.0,274.0 52.0,300.0 32.0,326.0 12.0,300.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="72.0,274.0 92.0,300.0 72.0,326.0 52.0,300.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="112.0,274.0 132.0,300.0 112.0,326.0 92.0,300.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="152.0,274.0 172.0,300.0 152.0,326.0 132.0,300.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="192.0,274.0 212.0,300.0 192.0,326.0 172.0,300.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="232.0,274.0 252.0,300.0 232.0,326.0 212.0,300.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="12.0,300.0 32.0,326.0 12.0,352.0 -8.0,326.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="52.0,300.0 72.0,326.0 52.0,352.0 32.0,326.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="92.0,300.0 112.0,326.0 92.0,352.0 72.0,326.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="132.0,300.0 152.0,326.0 132.0,352.0 112.0,326.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="172.0,300.0 192.0,326.0 172.0,352.0 152.0,326.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="212.0,300.0 232.0,326.0 212.0,352.0 192.0,326.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="32.0,326.0 52.0,352.0 32.0,378.0 12.0,352.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="72.0,326.0 92.0,352.0 72.0,378.0 52.0,352.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="112.0,326.0 132.0,352.0 112.0,378.0 92.0,352.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="152.0,326.0 172.0,352.0 152.0,378.0 132.0,352.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="192.0,326.0 212.0,352.0 192.0,378.0 172.0,352.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="232.0,326.0 252.0,352.0 232.0,378.0 212.0,352.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="12.0,352.0 32.0,378.0 12.0,404.0 -8.0,378.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="52.0,352.0 72.0,378.0 52.0,404.0 32.0,378.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="92.0,352.0 112.0,378.0 92.0,404.0 72.0,378.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="132.0,352.0 152.0,378.0 132.0,404.0 112.0,378.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="172.0,352.0 192.0,378.0 172.0,404.0 152.0,378.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="212.0,352.0 232.0,378.0 212.0,404.0 192.0,378.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="32.0,378.0 52.0,404.0 32.0,430.0 12.0,404.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="72.0,378.0 92.0,404.0 72.0,430.0 52.0,404.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="112.0,378.0 132.0,404.0 112.0,430.0 92.0,404.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="152.0,378.0 172.0,404.0 152.0,430.0 132.0,404.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="192.0,378.0 212.0,404.0 192.0,430.0 172.0,404.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <polygon points="232.0,378.0 252.0,404.0 232.0,430.0 212.0,404.0" fill="none" stroke="#1E180F" strokeWidth="3" strokeLinejoin="round"></polygon>
                <circle cx="120" cy="98" r="58" fill="none" stroke="#1E180F" strokeWidth="6"></circle>
                <circle cx="120" cy="98" r="15" fill="#E9D3A0" opacity={v.starOp} style={css("transition: opacity 1s ease")}></circle>
                <circle cx="120" cy="98" r="15" fill="none" stroke="#1E180F" strokeWidth="4"></circle>
                <path d="M12 166 H228" stroke="#1E180F" strokeWidth="6"></path>
              </g>
              <path d="M12 392 V150 Q12 50 120 8 Q228 50 228 150 V392 Z" fill="none" stroke="#C9A86A" strokeWidth="1.6"></path>
              <path d="M18 386 V152 Q18 58 120 15 Q222 58 222 152 V386" fill="none" stroke="#5E4C2C" strokeWidth="1"></path>
            </svg>
            {" "}
            <div aria-hidden="true" style={css(`position: absolute; left: 50%; top: 100%; width: 520px; height: 180px; margin-left: -260px; background: linear-gradient(180deg, rgba(233,211,160,${v.beam}), transparent); clip-path: polygon(30% 0, 70% 0, 100% 100%, 0 100%); pointer-events: none; transition: opacity 1s ease`)}></div>
          </button>
          {" "}
          <div style={css(`display: flex; flex-direction: column; align-items: center; gap: 14px; opacity: ${v.nameOp}; transform: translateY(${v.nameY}px); transition: opacity 1.4s ease, transform 1.4s ease`)}>
            <h1 className="foil" style={css("margin: 0; font-family: 'Cinzel', serif; font-weight: 500; font-size: clamp(40px, 6.4vw, 86px); letter-spacing: 0.18em; line-height: 1.05")}>
              {"RAPHAEL GABRIEL"}
            </h1>
            {" "}
            <div className="num">
              {"GERONIMO · FULL-STACK DEVELOPER & FOUNDER"}
            </div>
            {" "}
            <p style={css("margin: 6px 0 0; font-style: italic; font-size: clamp(20px, 2.2vw, 26px); color: #B8AE9C; max-width: 560px; line-height: 1.5")}>
              {"Named after two archangels. No pun required."}
            </p>
          </div>
        </section>
        {" "}
        <div style={css("max-width: 1040px; margin: 0 auto; padding: 0 24px")}>
          <div aria-hidden="true" style={css("height: 12px; border-top: 1px solid #C9A86A; border-bottom: 1px solid #C9A86A; background: repeating-linear-gradient(90deg, #2C4A8A 0 46px, #1E180F 46px 49px, #8E1F2E 49px 95px, #1E180F 95px 98px, #B98A2E 98px 144px, #1E180F 144px 147px, #1F5E4A 147px 193px, #1E180F 193px 196px, #5A3478 196px 242px, #1E180F 242px 245px); opacity: .85")}></div>
          {" "}
          <section id="work" style={css("padding: clamp(56px, 8vw, 100px) 0")}>
            <div style={css("display: flex; flex-wrap: wrap; gap: 10px 28px; align-items: baseline; justify-content: space-between; margin-bottom: 18px")}>
              <h2 className="foil" style={css("margin: 0; font-family: 'Cinzel', serif; font-weight: 400; font-size: clamp(30px, 4vw, 46px); letter-spacing: 0.12em")}>
                {"The Works"}
              </h2>
              {" "}
              <span className="num">
                {"I"}
              </span>
            </div>
            {" "}
            <a href="#work" className="work">
              <span style={css("font-family: 'Cinzel', serif; font-size: 22px; color: #B8995E")}>
                {"I"}
              </span>
              {" "}
              <span style={css("display: flex; flex-direction: column; gap: 6px; min-width: 0")}>
                <span className="wt" style={css("font-size: clamp(28px, 3.4vw, 40px); font-style: italic; line-height: 1.1; transition: color .3s ease")}>
                  {C.projects[0].name}
                </span>
                <span style={css("font-size: 18px; color: #B8AE9C")}>
                  {C.projects[0].summary}{" · "}{C.projects[0].type}
                </span>
              </span>
              {" "}
              <span className="thumb" style={css("display: flex; align-items: center; justify-content: flex-end; gap: 14px; font-size: 13px; color: #8E8576")}>
                {"[screenshot]"}
                <svg viewBox="0 0 78 116" aria-hidden="true" style={css("width: 66px; height: 98px")}>
                  <defs>
                    <clipPath id="mc40">
                      <path d="M2 114 V40 Q2 10 39 2 Q76 10 76 40 V114 Z"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#mc40)">
                    <rect width="78" height="116" fill="#0E0C09"></rect>
                    <rect x="0" y="20" width="26" height="24" fill="#2E6E58"></rect>
                    <rect x="26" y="20" width="26" height="24" fill="#6A3E8A"></rect>
                    <rect x="52" y="20" width="26" height="24" fill="#C79A3E"></rect>
                    <rect x="0" y="44" width="26" height="24" fill="#2C4A8A"></rect>
                    <rect x="26" y="44" width="26" height="24" fill="#5A3478"></rect>
                    <rect x="52" y="44" width="26" height="24" fill="#B98A2E"></rect>
                    <rect x="0" y="68" width="26" height="24" fill="#5A3478"></rect>
                    <rect x="26" y="68" width="26" height="24" fill="#1F5E4A"></rect>
                    <rect x="52" y="68" width="26" height="24" fill="#23407A"></rect>
                    <rect x="0" y="92" width="26" height="24" fill="#B98A2E"></rect>
                    <rect x="26" y="92" width="26" height="24" fill="#2E6E58"></rect>
                    <rect x="52" y="92" width="26" height="24" fill="#2C4A8A"></rect>
                    <circle cx="39" cy="26" r="14" fill="#C79A3E"></circle>
                    <path d="M26 0 V116 M52 0 V116 M0 44 H78 M0 68 H78 M0 92 H78" stroke="#1E180F" strokeWidth="3"></path>
                    <circle cx="39" cy="26" r="14" fill="none" stroke="#1E180F" strokeWidth="3"></circle>
                  </g>
                  <path d="M2 114 V40 Q2 10 39 2 Q76 10 76 40 V114 Z" fill="none" stroke="#C9A86A" strokeWidth="1.4"></path>
                </svg>
              </span>
            </a>
            {" "}
            <a href="#work" className="work">
              <span style={css("font-family: 'Cinzel', serif; font-size: 22px; color: #B8995E")}>
                {"II"}
              </span>
              {" "}
              <span style={css("display: flex; flex-direction: column; gap: 6px; min-width: 0")}>
                <span className="wt" style={css("font-size: clamp(28px, 3.4vw, 40px); font-style: italic; line-height: 1.1; transition: color .3s ease")}>
                  {C.projects[1].name}
                </span>
                <span style={css("font-size: 18px; color: #B8AE9C")}>
                  {C.projects[1].summary}{" · "}{C.projects[1].type}
                </span>
              </span>
              {" "}
              <span className="thumb" style={css("display: flex; align-items: center; justify-content: flex-end; gap: 14px; font-size: 13px; color: #8E8576")}>
                {"[screenshot]"}
                <svg viewBox="0 0 78 116" aria-hidden="true" style={css("width: 66px; height: 98px")}>
                  <defs>
                    <clipPath id="mc41">
                      <path d="M2 114 V40 Q2 10 39 2 Q76 10 76 40 V114 Z"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#mc41)">
                    <rect width="78" height="116" fill="#0E0C09"></rect>
                    <rect x="0" y="20" width="26" height="24" fill="#A12A3A"></rect>
                    <rect x="26" y="20" width="26" height="24" fill="#23407A"></rect>
                    <rect x="52" y="20" width="26" height="24" fill="#5A3478"></rect>
                    <rect x="0" y="44" width="26" height="24" fill="#1F5E4A"></rect>
                    <rect x="26" y="44" width="26" height="24" fill="#A12A3A"></rect>
                    <rect x="52" y="44" width="26" height="24" fill="#6A3E8A"></rect>
                    <rect x="0" y="68" width="26" height="24" fill="#B98A2E"></rect>
                    <rect x="26" y="68" width="26" height="24" fill="#C79A3E"></rect>
                    <rect x="52" y="68" width="26" height="24" fill="#B98A2E"></rect>
                    <rect x="0" y="92" width="26" height="24" fill="#A12A3A"></rect>
                    <rect x="26" y="92" width="26" height="24" fill="#6A3E8A"></rect>
                    <rect x="52" y="92" width="26" height="24" fill="#2C4A8A"></rect>
                    <circle cx="39" cy="26" r="14" fill="#5A3478"></circle>
                    <path d="M26 0 V116 M52 0 V116 M0 44 H78 M0 68 H78 M0 92 H78" stroke="#1E180F" strokeWidth="3"></path>
                    <circle cx="39" cy="26" r="14" fill="none" stroke="#1E180F" strokeWidth="3"></circle>
                  </g>
                  <path d="M2 114 V40 Q2 10 39 2 Q76 10 76 40 V114 Z" fill="none" stroke="#C9A86A" strokeWidth="1.4"></path>
                </svg>
              </span>
            </a>
            {" "}
            <a href="#work" className="work" style={css("border-bottom: 0")}>
              <span style={css("font-family: 'Cinzel', serif; font-size: 22px; color: #B8995E")}>
                {"III"}
              </span>
              {" "}
              <span style={css("display: flex; flex-direction: column; gap: 6px; min-width: 0")}>
                <span className="wt" style={css("font-size: clamp(28px, 3.4vw, 40px); font-style: italic; line-height: 1.1; transition: color .3s ease")}>
                  {C.projects[2].name}
                </span>
                <span style={css("font-size: 18px; color: #B8AE9C")}>
                  {C.projects[2].summary}{" · "}{C.projects[2].type}
                </span>
              </span>
              {" "}
              <span className="thumb" style={css("display: flex; align-items: center; justify-content: flex-end; gap: 14px; font-size: 13px; color: #8E8576")}>
                {"[screenshot]"}
                <svg viewBox="0 0 78 116" aria-hidden="true" style={css("width: 66px; height: 98px")}>
                  <defs>
                    <clipPath id="mc42">
                      <path d="M2 114 V40 Q2 10 39 2 Q76 10 76 40 V114 Z"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#mc42)">
                    <rect width="78" height="116" fill="#0E0C09"></rect>
                    <rect x="0" y="20" width="26" height="24" fill="#8E1F2E"></rect>
                    <rect x="26" y="20" width="26" height="24" fill="#2C4A8A"></rect>
                    <rect x="52" y="20" width="26" height="24" fill="#B98A2E"></rect>
                    <rect x="0" y="44" width="26" height="24" fill="#5A3478"></rect>
                    <rect x="26" y="44" width="26" height="24" fill="#5A3478"></rect>
                    <rect x="52" y="44" width="26" height="24" fill="#1F5E4A"></rect>
                    <rect x="0" y="68" width="26" height="24" fill="#8E1F2E"></rect>
                    <rect x="26" y="68" width="26" height="24" fill="#C79A3E"></rect>
                    <rect x="52" y="68" width="26" height="24" fill="#8E1F2E"></rect>
                    <rect x="0" y="92" width="26" height="24" fill="#6A3E8A"></rect>
                    <rect x="26" y="92" width="26" height="24" fill="#A12A3A"></rect>
                    <rect x="52" y="92" width="26" height="24" fill="#2C4A8A"></rect>
                    <circle cx="39" cy="26" r="14" fill="#2C4A8A"></circle>
                    <path d="M26 0 V116 M52 0 V116 M0 44 H78 M0 68 H78 M0 92 H78" stroke="#1E180F" strokeWidth="3"></path>
                    <circle cx="39" cy="26" r="14" fill="none" stroke="#1E180F" strokeWidth="3"></circle>
                  </g>
                  <path d="M2 114 V40 Q2 10 39 2 Q76 10 76 40 V114 Z" fill="none" stroke="#C9A86A" strokeWidth="1.4"></path>
                </svg>
              </span>
            </a>
          </section>
          {" "}
          <div aria-hidden="true" style={css("height: 12px; border-top: 1px solid #C9A86A; border-bottom: 1px solid #C9A86A; background: repeating-linear-gradient(90deg, #2C4A8A 0 46px, #1E180F 46px 49px, #8E1F2E 49px 95px, #1E180F 95px 98px, #B98A2E 98px 144px, #1E180F 144px 147px, #1F5E4A 147px 193px, #1E180F 193px 196px, #5A3478 196px 242px, #1E180F 242px 245px); opacity: .85")}></div>
          {" "}
          <section id="about" style={css("padding: clamp(56px, 8vw, 100px) 0; display: flex; flex-direction: column; gap: 40px")}>
            <div style={css("display: flex; flex-wrap: wrap; gap: 10px 28px; align-items: baseline; justify-content: space-between")}>
              <h2 className="foil" style={css("margin: 0; font-family: 'Cinzel', serif; font-weight: 400; font-size: clamp(30px, 4vw, 46px); letter-spacing: 0.12em")}>
                {"Two Archangels"}
              </h2>
              {" "}
              <span className="num">
                {"II"}
              </span>
            </div>
            {" "}
            <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0")}>
              <div style={css("padding: 8px 40px 8px 0; display: flex; flex-direction: column; gap: 14px")}>
                <span className="num">
                  {"RAPHAEL · THE HEALER"}
                </span>
                {" "}
                <span style={css("font-size: clamp(30px, 3.4vw, 42px); font-style: italic; line-height: 1.15")}>
                  {"I fix what's broken."}
                </span>
                {" "}
                <p style={css("margin: 0; font-size: 19px; line-height: 1.65; color: #C9C0AE")}>
                  {"The developer. Front end: "}{C.skills.frontend}{". Back end: "}{C.skills.backend}{". Bugs, outages and tangled code tend to leave quietly."}
                </p>
              </div>
              {" "}
              <div style={css("padding: 8px 0 8px 40px; border-left: 1px solid rgba(201,168,106,.3); display: flex; flex-direction: column; gap: 14px")}>
                <span className="num">
                  {"GABRIEL · THE MESSENGER"}
                </span>
                {" "}
                <span style={css("font-size: clamp(30px, 3.4vw, 42px); font-style: italic; line-height: 1.15")}>
                  {"I carry it to the world."}
                </span>
                {" "}
                <p style={css("margin: 0; font-size: 19px; line-height: 1.65; color: #C9C0AE")}>
                  {"The founder. "}{C.skills.business}{" A product only matters once the right people hear about it."}
                </p>
              </div>
            </div>
            {" "}
            <p style={css("margin: 0; text-align: center; font-style: italic; font-size: 20px; color: #9C9384")}>
              {"…and Geronimo — the leap of faith in between. A tech geek, devoted. "}{C.bio.origin}
            </p>
          </section>
          {" "}
          <div aria-hidden="true" style={css("height: 12px; border-top: 1px solid #C9A86A; border-bottom: 1px solid #C9A86A; background: repeating-linear-gradient(90deg, #2C4A8A 0 46px, #1E180F 46px 49px, #8E1F2E 49px 95px, #1E180F 95px 98px, #B98A2E 98px 144px, #1E180F 144px 147px, #1F5E4A 147px 193px, #1E180F 193px 196px, #5A3478 196px 242px, #1E180F 242px 245px); opacity: .85")}></div>
          {" "}
          <section id="venture" style={css("padding: clamp(56px, 8vw, 100px) 0; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 18px")}>
            <span className="num">
              {"III · THE CHAPEL"}
            </span>
            {" "}
            <div className="foil" style={css("font-family: 'Cinzel', serif; font-weight: 500; font-size: clamp(38px, 5.6vw, 72px); letter-spacing: 0.1em; line-height: 1.1")}>
              {C.company.name}
            </div>
            {" "}
            <p style={css("margin: 0; font-size: 21px; line-height: 1.6; color: #C9C0AE; max-width: 620px")}>
              {C.company.summary}{" Founded and kept by Raphael."}
            </p>
            {" "}
            <a href="#venture" className="ghost" style={css("margin-top: 10px")}>
              {"ENTER"}
            </a>
          </section>
          {" "}
          <div aria-hidden="true" style={css("height: 12px; border-top: 1px solid #C9A86A; border-bottom: 1px solid #C9A86A; background: repeating-linear-gradient(90deg, #2C4A8A 0 46px, #1E180F 46px 49px, #8E1F2E 49px 95px, #1E180F 95px 98px, #B98A2E 98px 144px, #1E180F 144px 147px, #1F5E4A 147px 193px, #1E180F 193px 196px, #5A3478 196px 242px, #1E180F 242px 245px); opacity: .85")}></div>
        </div>
        {" "}
        <footer id="contact" style={css("padding: clamp(64px, 9vw, 120px) 24px 56px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 22px")}>
          <span className="num">
            {"IV · SEND WORD"}
          </span>
          {" "}
          <h2 style={css("margin: 0; font-weight: 400; font-style: italic; font-size: clamp(44px, 6.6vw, 88px); line-height: 1.05")}>
            {"Your message,"}
            <br />
            <span className="foil" style={css("font-style: normal; font-family: 'Cinzel', serif; letter-spacing: 0.08em")}>
              {"received."}
            </span>
          </h2>
          {" "}
          <a href={`mailto:${C.email}`} style={css("font-size: clamp(22px, 2.8vw, 30px); text-underline-offset: 7px; text-decoration-thickness: 1px")}>
            {C.email}
          </a>
          {" "}
          <div style={css("display: flex; flex-wrap: wrap; gap: 14px 34px; justify-content: center; font-family: 'Cinzel', serif; font-size: 13px; letter-spacing: 0.24em")}>
            <a href="#contact" style={css("text-decoration: none")}>
              {"GITHUB"}
            </a>
            <a href="#contact" style={css("text-decoration: none")}>
              {"LINKEDIN"}
            </a>
            <a href={C.company.url} style={css("text-decoration: none")} target="_blank" rel="noreferrer">
              {up(C.company.siteLabel)}
            </a>
          </div>
          {" "}
          <div style={css("margin-top: 28px; font-size: 15px; color: #7E7668")}>
            {"© Raphael Gabriel Geronimo"}
          </div>
        </footer>
      </div>
      </>
    );
  }
}
