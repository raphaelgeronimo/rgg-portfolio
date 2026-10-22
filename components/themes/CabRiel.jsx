'use client';
// Generated from the Cabriel design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#14161B}\na{color:#FFFFFF}a:hover{color:#FFC72C}\n.anton{font-family:'Anton',sans-serif;letter-spacing:.02em}\n.lcd{font-family:'Orbitron',monospace}\n.checker{height:22px;background:conic-gradient(#111111 25%,#FFC72C 0 50%,#111111 0 75%,#FFC72C 0) 0 0/22px 22px}\n.dest{display:flex;align-items:center;gap:12px;width:100%;text-align:left;font:inherit;color:#ECEDEF;background:#1E2128;border:1.5px solid #343843;border-radius:12px;padding:10px 14px;min-height:52px;cursor:pointer}\n.dest:hover{border-color:#FFC72C}\n.dest.on{background:#FFC72C;color:#111111;border-color:#FFC72C}\n.dest .no{flex:none;width:28px;height:28px;border-radius:50%;border:2px solid currentColor;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px}\n.hail{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;line-height:1;font-family:'Manrope',sans-serif;font-weight:800;font-size:16px;background:#FFC72C;color:#111111;border:0;border-radius:12px;padding:14px 22px;min-height:52px;cursor:pointer;box-shadow:0 4px 0 #A57F10}\n.hail:active{transform:translateY(2px);box-shadow:0 2px 0 #A57F10}\n.ghost{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;font-family:'Manrope',sans-serif;font-weight:800;font-size:15px;background:transparent;color:#ECEDEF;border:1.5px solid #4A4F5C;border-radius:12px;padding:12px 18px;min-height:52px;cursor:pointer}\n.ghost:hover{border-color:#FFC72C;color:#FFC72C}\n.stopdot{cursor:pointer}\n.pop{position:absolute;z-index:4;width:320px;box-sizing:border-box;background:#FFFFFF;color:#111111;border-radius:16px;padding:18px 18px 16px;box-shadow:0 18px 40px rgba(0,0,0,.45);display:flex;flex-direction:column;gap:10px;transition:opacity .25s ease,transform .35s cubic-bezier(.3,1.5,.5,1)}\n.pop .tail{position:absolute;width:18px;height:18px;margin-left:-9px;background:#FFFFFF;transform:rotate(45deg);border-radius:3px}\n.pop.up .tail{bottom:-8px}\n.pop.down .tail{top:-8px}\n.popx{position:absolute;right:8px;top:8px;width:36px;height:36px;border-radius:50%;border:0;background:#ECEDEF;color:#111111;font-size:20px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center}\n.popx:hover{background:#FFC72C}\n@media (max-width: 760px){.pop{position:relative;left:auto !important;top:auto !important;width:auto;margin:0 12px 12px;transform:none !important}.pop .tail{display:none}}\n\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Anton&family=Orbitron:wght@500;700&family=Manrope:wght@400;600;800&display=swap"];

export default class CabRiel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  geo() {
    if (this._g) return this._g;
    const pts = [[100, 560], [100, 340], [300, 340], [300, 140], [520, 140], [520, 440], [700, 440], [700, 240], [880, 240], [880, 560], [420, 560]];
    const cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]));
    const stopPt = [0, 2, 4, 6, 8, 9, 10];
    this._g = { pts: pts, cum: cum, stops: stopPt.map((i) => cum[i]), total: cum[cum.length - 1], d: 'M' + pts.map((p) => p.join(' ')).join(' L') };
    return this._g;
  }
  at(dist) {
    const g = this.geo();
    for (let i = 1; i < g.pts.length; i++) {
      if (dist <= g.cum[i] || i === g.pts.length - 1) {
        const a = g.pts[i - 1], b = g.pts[i];
        const seg = g.cum[i] - g.cum[i - 1] || 1;
        const t = Math.max(0, Math.min(1, (dist - g.cum[i - 1]) / seg));
        return { x: a[0] + (b[0] - a[0]) * t, y: a[1] + (b[1] - a[1]) * t, ang: Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI };
      }
    }
    return { x: g.pts[0][0], y: g.pts[0][1], ang: 0 };
  }
  componentDidMount() { this.timer = setInterval(() => this.tick(), 40); }
  componentWillUnmount() { clearInterval(this.timer); }
  tick() {
    const s = this.state || {};
    const g = this.geo();
    const d = s.d || 0;
    const target = s.target === undefined ? 0 : s.target;
    const goal = g.stops[target];
    if (Math.abs(goal - d) < 0.5) {
      if (s.scenic) {
        this.wait = (this.wait || 0) + 40;
        if (this.wait > 3200) {
          this.wait = 0;
          if (target >= 6) this.setState({ scenic: false });
          else this.setState({ target: target + 1, closed: -1 });
        }
      }
      return;
    }
    const step = 10;
    const nd = goal > d ? Math.min(goal, d + step) : Math.max(goal, d - step);
    const visited = Object.assign({}, s.visited || {});
    const arrived = Math.abs(goal - nd) < 0.5;
    if (arrived) visited[target] = true;
    this.setState({ d: nd, odo: (s.odo || 0) + Math.abs(nd - d), ms: (s.ms || 0) + 40, visited: visited });
  }
  renderVals() {
    const s = this.state || {};
    const g = this.geo();
    const d = s.d || 0;
    const target = s.target === undefined ? 0 : s.target;
    const moving = Math.abs(g.stops[target] - d) >= 0.5;
    const pos = this.at(moving && g.stops[target] < d ? d : d);
    let ang = pos.ang;
    if (moving && g.stops[target] < d) ang += 180;
    if (!moving && d === 0) ang = -90;
    const go = (k) => () => { this.wait = 0; this.setState({ target: k, scenic: false, closed: -1 }); };
    const names = [
      ['A', 'Pickup', 'where you are'],
      ['1', `${C.projects[0].name}`, `${C.projects[0].type}`],
      ['2', `${C.projects[1].name}`, `${C.projects[1].type}`],
      ['3', `${C.projects[2].name}`, `${C.projects[2].type}`],
      ['4', 'The garage', 'skills, under the hood'],
      ['5', 'HQ', `${C.company.name}`],
      ['B', 'Drop-off', 'get in touch']
    ];
    const lines = ['Where to, boss?', 'Shortcut through the back end. Trust me.', 'This one has a great API, just saying.', 'Smooth on mobile. Feel that?', 'Mind if we stop for a tune-up?', 'This is my place. Well, my company.', 'Here we are. Tip is optional, email is not.'];
    const dot = {}, dotT = {};
    for (let k = 0; k < 7; k++) {
      const cur = !moving && target === k;
      dot['d' + k] = cur ? '#FFC72C' : ((s.visited || {})[k] ? '#B8901F' : '#ECEDEF');
      dotT['d' + k] = cur ? '#111111' : '#FFC72C';
    }
    const vis = Object.keys(s.visited || {}).filter((k) => k !== '0').length;
    const sec = Math.floor((s.ms || 0) / 1000);
    const SP = [[100, 560], [300, 340], [520, 140], [700, 440], [880, 240], [880, 560], [420, 560]];
    const shift = SP[target][0] < 250 ? -14 : (SP[target][0] > 760 ? -86 : -50);
    const showPop = !moving && s.closed !== target;
    const at = { pickup: !moving && target === 0, proj: !moving && target >= 1 && target <= 3, garage: !moving && target === 4, hq: !moving && target === 5, drop: !moving && target === 6 };
    return {
      routeD: g.d, routeLen: g.total, routeOff: Math.round(g.total - d),
      cabX: Math.round(pos.x), cabY: Math.round(pos.y), cabA: Math.round(ang),
      roofDot: moving ? '#FF5A3C' : '#FFF6C8',
      dot: dot, dotT: dotT,
      go0: go(0), go1: go(1), go2: go(2), go3: go(3), go4: go(4), go5: go(5), go6: go(6),
      driverLine: moving ? 'On the way to ' + names[target][1] + '…' : lines[target],
      status: moving ? 'HIRED' : 'FOR HIRE',
      statusBg: moving ? '#FF5A3C' : '#7BD389',
      roofText: moving ? 'HIRED' : 'TAXI',
      roofBg: moving ? '#FFE38A' : '#FFFFFF',
      roofGlow: moving ? '0 0 40px rgba(255,255,255,.9)' : 'none',
      km: ((s.odo || 0) / 250).toFixed(1),
      clock: String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0'),
      visited: String(vis),
      dests: names.map((n, k) => ({ no: n[0], name: n[1], sub: n[2], cls: target === k ? 'on' : '', pressed: target === k ? 'true' : 'false', go: go(k) })),
      scenic: () => { this.wait = 0; if (s.scenic) { this.setState({ scenic: false }); return; } this.setState({ scenic: true, closed: -1, target: target >= 6 ? 0 : Math.max(1, target) }); },
      scenicLabel: s.scenic ? 'Stop here' : 'Take the scenic route',
      home: go(0),
      at: at,
      pIdx: Math.max(0, Math.min(2, target - 1)),
      projTag: 'STOP ' + target + ' · ' + (names[target] ? names[target][2].toUpperCase() : ''),
      popX: Math.round(SP[target][0] / 10 * 10) / 10,
      popY: Math.round(SP[target][1] / 680 * 1000) / 10 - (SP[target][1] < 300 ? 0 : 7),
      popSide: SP[target][1] < 300 ? 'down' : 'up',
      popT: (SP[target][1] < 300 ? 'translate(' + shift + '%, 22px)' : 'translate(' + shift + '%, calc(-100% - 22px))') + (showPop ? ' scale(1)' : ' scale(.9)'),
      tailX: -shift,
      popOp: showPop ? 1 : 0,
      popPe: showPop ? 'auto' : 'none',
      popLabel: names[target][1],
      closePop: () => this.setState({ closed: target })
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={css("min-height: 100vh; background: #14161B; color: #ECEDEF; font-family: 'Manrope', system-ui, sans-serif")}>
        <div style={css("background: #0B0C0F; color: #C9CBD1; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center; font-weight: 600")}>
          <span>
            {"Theme: Cab-riel"}
          </span>
          {" "}
          <a href="/pro" style={css("color: #FFC72C; padding: 6px 0")}>
            {"Switch to professional"}
          </a>
          {" "}
          <a href="/" style={css("color: #FFC72C; padding: 6px 0")}>
            {"Deal again"}
          </a>
        </div>
        {" "}
        {" "}
        <header id="top" style={css("background: #FFC72C; color: #111111")}>
          <div style={css("max-width: 1240px; margin: 0 auto; padding: 48px 24px 40px; display: flex; flex-wrap: wrap; gap: 28px 48px; align-items: center; justify-content: space-between")}>
            <div style={css("display: flex; flex-direction: column; gap: 14px; max-width: 640px")}>
              <span style={css("font-weight: 800; font-size: 14px; letter-spacing: .16em")}>
                {"FULL-STACK DEVELOPER · FOUNDER · LICENSED DRIVER"}
              </span>
              {" "}
              <h1 className="anton" style={css("margin: 0; font-weight: 400; font-size: clamp(76px, 12vw, 160px); line-height: .88")}>
                {"CAB-RIEL"}
              </h1>
              {" "}
              <p style={css("margin: 0; font-size: 20px; line-height: 1.5; font-weight: 600")}>
                {"Raphael Gabriel Geronimo. Tell me where your product needs to go. I know every shortcut from the database to the front door."}
              </p>
            </div>
            {" "}
            {" "}
            <div aria-hidden="true" style={css("display: flex; flex-direction: column; align-items: center")}>
              <div style={css(`background: ${v.roofBg}; color: #111111; border: 4px solid #111111; border-radius: 18px 18px 6px 6px; padding: 14px 30px; box-shadow: ${v.roofGlow}; transition: background .3s, box-shadow .3s`)}>
                <span className="anton" style={css("font-size: 44px; letter-spacing: .08em")}>
                  {v.roofText}
                </span>
              </div>
              {" "}
              <div style={css("width: 260px; height: 16px; background: #111111; border-radius: 0 0 8px 8px")}></div>
            </div>
          </div>
          {" "}
          <div className="checker"></div>
        </header>
        {" "}
        {" "}
        <section id="ride" style={css("max-width: 1320px; margin: 0 auto; padding: 40px 20px 56px; display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start")}>
          {" "}
          <div style={css("flex: 2 1 560px; min-width: 0; background: #1B1E24; border-radius: 20px; border: 1.5px solid #2C303A; position: relative")}>
            <svg viewBox="0 0 1000 680" role="img" aria-label="City map with the route between stops" style={css("display: block; width: 100%; height: auto; border-radius: 19px")}>
              <rect width="1000" height="680" fill="#1B1E24"></rect>
              {" "}
              {" "}
              <rect x="320" y="360" width="180" height="60" rx="8" fill="#1F3A2C"></rect>
              {" "}
              <circle cx="360" cy="390" r="12" fill="#2C5A40"></circle>
              <circle cx="410" cy="384" r="9" fill="#2C5A40"></circle>
              <circle cx="460" cy="396" r="13" fill="#2C5A40"></circle>
              {" "}
              <path d="M0 40 C200 70 330 10 520 50 S860 30 1000 70 V0 H0 Z" fill="#17283A"></path>
              {" "}
              {" "}
              <g fill="#232731">
                <rect x="130" y="170" width="150" height="50" rx="4"></rect>
                <rect x="130" y="240" width="70" height="80" rx="4"></rect>
                <rect x="210" y="240" width="70" height="80" rx="4"></rect>
                {" "}
                <rect x="330" y="170" width="170" height="150" rx="4"></rect>
                <rect x="550" y="170" width="130" height="50" rx="4"></rect>
                <rect x="550" y="270" width="130" height="150" rx="4"></rect>
                {" "}
                <rect x="730" y="100" width="130" height="120" rx="4"></rect>
                <rect x="730" y="270" width="130" height="150" rx="4"></rect>
                <rect x="130" y="370" width="150" height="160" rx="4"></rect>
                {" "}
                <rect x="550" y="470" width="130" height="70" rx="4"></rect>
                <rect x="330" y="470" width="170" height="70" rx="4"></rect>
                <rect x="730" y="470" width="130" height="70" rx="4"></rect>
                {" "}
                <rect x="910" y="100" width="90" height="420" rx="4"></rect>
                <rect x="0" y="100" width="80" height="420" rx="4"></rect>
                <rect x="130" y="100" width="150" height="20" rx="4"></rect>
                {" "}
                <rect x="0" y="590" width="1000" height="90"></rect>
              </g>
              {" "}
              {" "}
              <g stroke="#2E333E" strokeWidth="30" strokeLinecap="square">
                <path d="M100 90 V680 M300 90 V680 M520 90 V680 M700 90 V680 M880 90 V680"></path>
                {" "}
                <path d="M0 140 H1000 M0 240 H1000 M0 340 H1000 M0 440 H1000 M0 560 H1000"></path>
              </g>
              {" "}
              <g stroke="#454B58" strokeWidth="2" strokeDasharray="10 12">
                <path d="M100 90 V680 M300 90 V680 M520 90 V680 M700 90 V680 M880 90 V680"></path>
                {" "}
                <path d="M0 140 H1000 M0 240 H1000 M0 340 H1000 M0 440 H1000 M0 560 H1000"></path>
              </g>
              {" "}
              {" "}
              <path d={v.routeD} fill="none" stroke="#FFC72C" strokeOpacity=".25" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"></path>
              {" "}
              <path d={v.routeD} fill="none" stroke="#FFC72C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={v.routeLen} strokeDashoffset={v.routeOff}></path>
              {" "}
              {" "}
              <g className="stopdot" onClick={v.go0}>
                <ellipse cx="100" cy="560" rx="10" ry="4" fill="#000000" opacity=".45"></ellipse>
                <path d="M100 560 C94 548 78 536 78 520 A22 22 0 1 1 122 520 C122 536 106 548 100 560 Z" fill={v.dot.d0} stroke="#111111" strokeWidth="3"></path>
                <circle cx="100" cy="520" r="12" fill="#111111"></circle>
                <text x="100" y="526" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="15" fill="#FFC72C">
                  {"A"}
                </text>
              </g>
              {" "}
              <g className="stopdot" onClick={v.go1}>
                <ellipse cx="300" cy="340" rx="10" ry="4" fill="#000000" opacity=".45"></ellipse>
                <path d="M300 340 C294 328 278 316 278 300 A22 22 0 1 1 322 300 C322 316 306 328 300 340 Z" fill={v.dot.d1} stroke="#111111" strokeWidth="3"></path>
                <circle cx="300" cy="300" r="12" fill="#111111"></circle>
                <text x="300" y="306" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="15" fill="#FFC72C">
                  {"1"}
                </text>
              </g>
              {" "}
              <g className="stopdot" onClick={v.go2}>
                <ellipse cx="520" cy="140" rx="10" ry="4" fill="#000000" opacity=".45"></ellipse>
                <path d="M520 140 C514 128 498 116 498 100 A22 22 0 1 1 542 100 C542 116 526 128 520 140 Z" fill={v.dot.d2} stroke="#111111" strokeWidth="3"></path>
                <circle cx="520" cy="100" r="12" fill="#111111"></circle>
                <text x="520" y="106" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="15" fill="#FFC72C">
                  {"2"}
                </text>
              </g>
              {" "}
              <g className="stopdot" onClick={v.go3}>
                <ellipse cx="700" cy="440" rx="10" ry="4" fill="#000000" opacity=".45"></ellipse>
                <path d="M700 440 C694 428 678 416 678 400 A22 22 0 1 1 722 400 C722 416 706 428 700 440 Z" fill={v.dot.d3} stroke="#111111" strokeWidth="3"></path>
                <circle cx="700" cy="400" r="12" fill="#111111"></circle>
                <text x="700" y="406" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="15" fill="#FFC72C">
                  {"3"}
                </text>
              </g>
              {" "}
              <g className="stopdot" onClick={v.go4}>
                <ellipse cx="880" cy="240" rx="10" ry="4" fill="#000000" opacity=".45"></ellipse>
                <path d="M880 240 C874 228 858 216 858 200 A22 22 0 1 1 902 200 C902 216 886 228 880 240 Z" fill={v.dot.d4} stroke="#111111" strokeWidth="3"></path>
                <circle cx="880" cy="200" r="12" fill="#111111"></circle>
                <text x="880" y="206" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="15" fill="#FFC72C">
                  {"4"}
                </text>
              </g>
              {" "}
              <g className="stopdot" onClick={v.go5}>
                <ellipse cx="880" cy="560" rx="10" ry="4" fill="#000000" opacity=".45"></ellipse>
                <path d="M880 560 C874 548 858 536 858 520 A22 22 0 1 1 902 520 C902 536 886 548 880 560 Z" fill={v.dot.d5} stroke="#111111" strokeWidth="3"></path>
                <circle cx="880" cy="520" r="12" fill="#111111"></circle>
                <text x="880" y="526" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="15" fill="#FFC72C">
                  {"5"}
                </text>
              </g>
              {" "}
              <g className="stopdot" onClick={v.go6}>
                <ellipse cx="420" cy="560" rx="10" ry="4" fill="#000000" opacity=".45"></ellipse>
                <path d="M420 560 C414 548 398 536 398 520 A22 22 0 1 1 442 520 C442 536 426 548 420 560 Z" fill={v.dot.d6} stroke="#111111" strokeWidth="3"></path>
                <circle cx="420" cy="520" r="12" fill="#111111"></circle>
                <text x="420" y="526" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="15" fill="#FFC72C">
                  {"B"}
                </text>
              </g>
              {" "}
              <g fontFamily="Manrope" fontWeight="800" fontSize="13" fill="#C9CBD1" letterSpacing="1.5">
                <text x="128" y="600">
                  {"PICKUP · YOU"}
                </text>
                {" "}
                <text x="318" y="322">
                  {up(C.projects[0].name)}
                </text>
                {" "}
                <text x="538" y="122">
                  {up(C.projects[1].name)}
                </text>
                {" "}
                <text x="718" y="466">
                  {up(C.projects[2].name)}
                </text>
                {" "}
                <text x="760" y="222">
                  {"THE GARAGE"}
                </text>
                {" "}
                <text x="800" y="600">
                  {"HQ"}
                </text>
                {" "}
                <text x="380" y="600">
                  {"DROP-OFF"}
                </text>
                {" "}
                <text x="40" y="34" fill="#5F7A99">
                  {"THE DATA RIVER"}
                </text>
              </g>
              {" "}
              {" "}
              <g transform={`translate(${v.cabX} ${v.cabY}) rotate(${v.cabA})`}>
                <ellipse cx="0" cy="0" rx="32" ry="20" fill="#000000" opacity=".35"></ellipse>
                {" "}
                <rect x="-26" y="-14" width="52" height="28" rx="9" fill="#FFC72C" stroke="#111111" strokeWidth="2.5"></rect>
                {" "}
                <rect x="-8" y="-11" width="18" height="22" rx="4" fill="#2A2A2A"></rect>
                {" "}
                <rect x="-3" y="-5" width="8" height="10" rx="2" fill={v.roofDot}></rect>
                {" "}
                <rect x="22" y="-11" width="5" height="6" rx="2" fill="#FFF6C8"></rect>
                <rect x="22" y="5" width="5" height="6" rx="2" fill="#FFF6C8"></rect>
                {" "}
                <rect x="-26" y="-2" width="52" height="4" fill="#111111" opacity=".6"></rect>
              </g>
            </svg>
            {" "}
            {" "}
            <div className={`pop ${v.popSide}`} role="dialog" aria-label={v.popLabel} style={css(`left: ${v.popX}%; top: ${v.popY}%; opacity: ${v.popOp}; pointer-events: ${v.popPe}; transform: ${v.popT}`)}>
              <button type="button" className="popx" onClick={v.closePop} aria-label="Close">
                {"×"}
              </button>
              {" "}
              {v.at.pickup ? (
                <>
                  <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                    <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                      <span style={css("font-weight: 800; font-size: 13px; letter-spacing: .16em; color: #8A6A00")}>
                        {"STOP A · PICKUP"}
                      </span>
                      <h2 className="anton" style={css("margin: 0; font-weight: 400; font-size: 34px; line-height: .95")}>
                        {"Hop in."}
                      </h2>
                    </div>
                    {" "}
                    <p style={css("margin: 0; font-size: 15px; line-height: 1.5")}>
                      {"Tap a pin, or pick a stop from the list. Or take the scenic route and I'll drive you past everything I've built."}
                    </p>
                  </div>
                </>
              ) : null}
              {" "}
              {v.at.proj ? (
                <>
                  <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                    <div style={css("height: 84px; border-radius: 10px; background: #1B1E24; color: #8D919B; display: flex; align-items: center; justify-content: center; font-size: 14px")}>
                      {shot(C.projects[v.pIdx])}
                    </div>
                    {" "}
                    <div style={css("display: flex; flex-direction: column; gap: 12px")}>
                      <span style={css("font-weight: 800; font-size: 13px; letter-spacing: .16em; color: #8A6A00")}>
                        {v.projTag}
                      </span>
                      {" "}
                      <h2 className="anton" style={css("margin: 0; font-weight: 400; font-size: 34px; line-height: .95")}>
                        {C.projects[v.pIdx].name}
                      </h2>
                      {" "}
                      <p style={css("margin: 0; font-size: 15px; line-height: 1.5")}>
                        {C.projects[v.pIdx].summary}
                      </p>
                      {" "}
                      <a href="#ride" style={css("color: #111111; font-weight: 800")}>
                        {"See the project →"}
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
              {" "}
              {v.at.garage ? (
                <>
                  <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                    <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                      <span style={css("font-weight: 800; font-size: 13px; letter-spacing: .16em; color: #8A6A00")}>
                        {"STOP 4 · THE GARAGE"}
                      </span>
                      <h2 className="anton" style={css("margin: 0; font-weight: 400; font-size: 34px; line-height: .95")}>
                        {"What's under the hood."}
                      </h2>
                      <p style={css("margin: 0; font-size: 16px; line-height: 1.6; color: #4A4F5C")}>
                        {"A tech geek who services his own engine. "}{C.bio.origin}
                      </p>
                    </div>
                    {" "}
                    <div style={css("display: flex; flex-direction: column; gap: 12px; font-size: 14px; line-height: 1.45")}>
                      <div style={css("border-bottom: 1.5px solid #C9CBD1; padding-bottom: 10px")}>
                        <b>
                          {"The body · Front end"}
                        </b>
                        <br />
                        {C.skills.frontend}
                      </div>
                      {" "}
                      <div style={css("border-bottom: 1.5px solid #C9CBD1; padding-bottom: 10px")}>
                        <b>
                          {"The engine · Back end"}
                        </b>
                        <br />
                        {C.skills.backend}
                      </div>
                      {" "}
                      <div>
                        <b>
                          {"The dispatch · Business"}
                        </b>
                        <br />
                        {C.skills.business}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {" "}
              {v.at.hq ? (
                <>
                  <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                    <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                      <span style={css("font-weight: 800; font-size: 13px; letter-spacing: .16em; color: #8A6A00")}>
                        {"STOP 5 · HQ · FOUNDER OF"}
                      </span>
                      <h2 className="anton" style={css("margin: 0; font-weight: 400; font-size: 38px; line-height: .9")}>
                        {C.company.name}
                      </h2>
                    </div>
                    {" "}
                    <div style={css("display: flex; flex-direction: column; gap: 14px")}>
                      <p style={css("margin: 0; font-size: 15px; line-height: 1.5")}>
                        {C.company.summary}{" I own the fleet, and I still take the wheel myself."}
                      </p>
                      <a href="#ride" className="hail" style={css("text-decoration: none; align-self: flex-start")}>
                        {"Visit HQ →"}
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
              {" "}
              {v.at.drop ? (
                <>
                  <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                    <div style={css("display: flex; flex-direction: column; gap: 10px")}>
                      <span style={css("font-weight: 800; font-size: 13px; letter-spacing: .16em; color: #8A6A00")}>
                        {"STOP B · DROP-OFF"}
                      </span>
                      <h2 className="anton" style={css("margin: 0; font-weight: 400; font-size: 32px; line-height: .92")}>
                        {"Where are we going next?"}
                      </h2>
                    </div>
                    {" "}
                    <div style={css("display: flex; flex-direction: column; gap: 12px")}>
                      <span style={css("font-weight: 800; font-size: 13px; letter-spacing: .16em; color: #4A4F5C")}>
                        {"BOOK A RIDE"}
                      </span>
                      {" "}
                      <a href={`mailto:${C.email}`} style={css("color: #111111; font-weight: 800; font-size: 20px; text-underline-offset: 6px")}>
                        {C.email}
                      </a>
                      {" "}
                      <div style={css("display: flex; flex-wrap: wrap; gap: 8px 20px; font-weight: 800")}>
                        <a href={C.links.github} style={css("color: #111111")} target="_blank" rel="noreferrer">
                          {"GitHub"}
                        </a>
                        <a href={C.links.linkedin} style={css("color: #111111")} target="_blank" rel="noreferrer">
                          {"LinkedIn"}
                        </a>
                        <a href={C.company.url} style={css("color: #111111")} target="_blank" rel="noreferrer">
                          {C.company.siteLabel}
                        </a>
                      </div>
                      {" "}
                      <span style={css("font-size: 13px; color: #4A4F5C")}>
                        {"No surge pricing on saying hi. © Raphael Gabriel Geronimo"}
                      </span>
                    </div>
                  </div>
                </>
              ) : null}
              {" "}
              <span className="tail" aria-hidden="true" style={css(`left: ${v.tailX}%`)}></span>
            </div>
            {" "}
            <div style={css("position: absolute; left: 16px; top: 14px; display: flex; gap: 8px; flex-wrap: wrap")}>
              <span style={css("background: rgba(11,12,15,.8); border-radius: 999px; padding: 8px 14px; font-size: 13px; font-weight: 800; color: #FFC72C")}>
                {v.driverLine}
              </span>
            </div>
          </div>
          {" "}
          {" "}
          <div style={css("flex: 1 1 300px; display: flex; flex-direction: column; gap: 16px; min-width: 0")}>
            <div style={css("background: #0B0C0F; border-radius: 20px; padding: 18px; border: 1.5px solid #2C303A; display: flex; flex-direction: column; gap: 12px")}>
              <div style={css("display: flex; justify-content: space-between; align-items: center")}>
                <span style={css("font-weight: 800; font-size: 13px; letter-spacing: .16em; color: #8D919B")}>
                  {"THE METER"}
                </span>
                {" "}
                <span className="lcd" style={css(`font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 6px; background: ${v.statusBg}; color: #111111`)}>
                  {v.status}
                </span>
              </div>
              {" "}
              <div style={css("display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px")}>
                <div style={css("background: #120B05; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-size: 10px; font-weight: 800; letter-spacing: .14em; color: #8D7A55")}>
                    {"DISTANCE"}
                  </span>
                  <span className="lcd" style={css("font-size: 22px; color: #FF9A2E; text-shadow: 0 0 10px rgba(255,154,46,.6)")}>
                    {v.km}
                  </span>
                </div>
                {" "}
                <div style={css("background: #120B05; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-size: 10px; font-weight: 800; letter-spacing: .14em; color: #8D7A55")}>
                    {"TIME"}
                  </span>
                  <span className="lcd" style={css("font-size: 22px; color: #FF9A2E; text-shadow: 0 0 10px rgba(255,154,46,.6)")}>
                    {v.clock}
                  </span>
                </div>
                {" "}
                <div style={css("background: #120B05; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 4px")}>
                  <span style={css("font-size: 10px; font-weight: 800; letter-spacing: .14em; color: #8D7A55")}>
                    {"STOPS"}
                  </span>
                  <span className="lcd" style={css("font-size: 22px; color: #FF9A2E; text-shadow: 0 0 10px rgba(255,154,46,.6)")}>
                    {v.visited}{"/6"}
                  </span>
                </div>
              </div>
            </div>
            {" "}
            <div style={css("background: #0B0C0F; border-radius: 20px; padding: 18px; border: 1.5px solid #2C303A; display: flex; flex-direction: column; gap: 10px")}>
              <span style={css("font-weight: 800; font-size: 13px; letter-spacing: .16em; color: #8D919B")}>
                {"WHERE TO?"}
              </span>
              {" "}
              {(v.dests || []).map((d, __i0) => (
                <React.Fragment key={__i0}>
                  <button type="button" className={`dest ${d.cls}`} onClick={d.go} aria-pressed={d.pressed}>
                    <span className="no">
                      {d.no}
                    </span>
                    <span style={css("display: flex; flex-direction: column; gap: 2px")}>
                      <b style={css("font-size: 15px")}>
                        {d.name}
                      </b>
                      <span style={css("font-size: 12px; opacity: .75")}>
                        {d.sub}
                      </span>
                    </span>
                  </button>
                </React.Fragment>
              ))}
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 10px; margin-top: 4px")}>
                <button type="button" className="hail" onClick={v.scenic}>
                  {v.scenicLabel}
                </button>
                {" "}
                <button type="button" className="ghost" onClick={v.home}>
                  {"Back to pickup"}
                </button>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <footer id="contact" style={css("padding: 0 20px 48px; text-align: center; font-size: 14px; color: #8D919B")}>
          {"Cab-riel · Raphael Gabriel Geronimo · "}
          <a href={`mailto:${C.email}`} style={css("color: #FFC72C")}>
            {C.email}
          </a>
        </footer>
      </div>
      </>
    );
  }
}
