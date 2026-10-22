'use client';
// Generated from the Main design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#0E0E10}\na{color:#EDEDED}a:hover{color:#FFFFFF}\n\n/* table */\n.felt{background-color:#07070A;background-image:radial-gradient(ellipse 60% 50% at 50% 46%,rgba(201,162,74,.10),transparent 70%),radial-gradient(ellipse at 50% 120%,rgba(70,40,110,.25),transparent 60%)}\n\n/* card + flip */\n.card{width:300px;height:430px;display:block;text-decoration:none;position:relative;perspective:1600px;flex:0 0 auto}\n.flip{position:absolute;inset:0;transform-style:preserve-3d;transition:transform .75s cubic-bezier(.3,.7,.2,1)}\n.face{position:absolute;inset:0;border-radius:16px;backface-visibility:hidden;-webkit-backface-visibility:hidden;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.5)}\n.front{transform:rotateY(180deg);background:#F6F1E7;color:#1B1B1B}\n.front::after{content:\"\";position:absolute;inset:9px;border:1px solid rgba(27,27,27,.14);border-radius:10px;pointer-events:none}\n\n/* back */\n.back{background:radial-gradient(ellipse at 50% 45%,#1E1830 0%,#100D19 55%,#08070C 100%)}\n.bk-f1{position:absolute;inset:11px;border:1.5px solid #C9A24A;border-radius:10px;box-shadow:inset 0 0 0 4px rgba(8,7,12,.9),inset 0 0 0 5px rgba(201,162,74,.45)}\n.bk-f2{position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(243,226,184,.16) 46%,rgba(255,255,255,.06) 50%,transparent 64%);background-size:280% 100%;transition:background-position .25s ease-out;pointer-events:none}\n.bk-t{position:absolute;left:0;right:0;font-family:'Cinzel',serif;font-weight:600;font-size:10px;letter-spacing:.42em;color:rgba(201,162,74,.85);text-align:center}\n.bk-d{position:absolute;width:7px;height:7px;background:#C9A24A;transform:rotate(45deg)}\n.bk-m{position:absolute;inset:0;width:100%;height:100%}\n\n/* face parts */\n.idx{position:absolute;display:flex;flex-direction:column;align-items:center;gap:3px;font-family:'Cinzel',serif;font-weight:900;font-size:26px;line-height:1;z-index:2}\n.idx svg{width:20px;height:20px}\n.i-tl{left:17px;top:17px}\n.i-br{right:17px;bottom:17px;transform:rotate(180deg)}\n.art{position:absolute;left:46px;right:46px;top:46px;height:226px;border-radius:10px;display:flex;align-items:center;justify-content:center;overflow:hidden}\n.art svg{width:156px;height:156px}\n.cap{position:absolute;left:22px;right:22px;bottom:34px;text-align:center;display:flex;flex-direction:column;gap:6px;align-items:center}\n.cap .nm{font-size:40px;line-height:.95}\n.cap .tg{font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:500;color:#4A4A4A}\n\n.jackpot::after{display:none}\n.jp-shine{position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(243,226,184,.22) 48%,transparent 60%);background-size:260% 100%;background-position:120% 0;transition:background-position 1.4s ease .9s}\n.card.rev .jp-shine{background-position:-60% 0}\n.card:hover .jp-shine{background-position:-60% 0;transition-delay:0s}\n\n/* hand motion */\n.hand > a{transition:transform .55s cubic-bezier(.2,.8,.2,1),opacity .4s ease}\n.hand > a:nth-child(1){transform:rotate(-4deg)}\n.hand > a:nth-child(3){transform:rotate(4deg)}\n.hand > a:nth-child(2){transition-delay:.1s}\n.hand > a:nth-child(3){transition-delay:.2s}\n.hand.p-idle > a:hover{transform:translateY(-12px) rotate(0deg) !important;transition-delay:0s}\n.card.rev .flip{transform:rotateY(180deg)}\n.tilt{position:absolute;inset:0;transform-style:preserve-3d;transition:transform .2s ease-out}\n.card:focus-visible{outline:none}.card:focus-visible .tilt{box-shadow:0 0 0 3px #C9A24A;border-radius:16px}\n.hand.p-idle > a:not(.rev):hover .back{box-shadow:0 0 0 1px rgba(201,162,74,.6),0 0 50px rgba(201,162,74,.35),0 18px 40px rgba(0,0,0,.5)}\n.tally i{display:block;width:10px;height:15px;border-radius:2px;border:1px solid rgba(201,162,74,.55)}\n.tally i.on{background:#C9A24A;border-color:#C9A24A}\n.dbtn{display:inline-flex;align-items:center;justify-content:center;gap:10px;box-sizing:border-box;line-height:1;font-family:'Space Grotesk',sans-serif;font-size:16px;font-weight:500;min-height:50px;padding:0 26px;border-radius:999px;cursor:pointer;text-decoration:none}\n.dbtn.gold{background:#C9A24A;color:#100D19;border:1.5px solid #C9A24A}\n.dbtn.gold:hover{background:#E3C26E;color:#100D19}\n.dbtn.line{background:transparent;color:#D8D2C4;border:1.5px solid rgba(201,162,74,.5)}\n.dbtn.line:hover{border-color:#C9A24A;color:#FFFFFF}\n\n\n\n.hand.p-gather .flip{transition-delay:0s !important;transition-duration:.4s}\n.hand.p-gather > a{transition-delay:.3s !important}\n.hand.p-gather > a:nth-child(1){transform:translateX(336px) rotate(-8deg) scale(.9) !important}\n.hand.p-gather > a:nth-child(2){transform:translateY(-10px) scale(.92) !important}\n.hand.p-gather > a:nth-child(3){transform:translateX(-336px) rotate(8deg) scale(.9) !important}\n.hand.p-pre > a{transform:translateY(-120vh) rotate(-20deg) !important;opacity:1;transition:none !important}\n.hand.p-pre .flip{transition:none !important}\n.hand.p-picked > a{transition-delay:0s !important;opacity:0;transform:translateY(60px) scale(.9) !important}\n.hand.p-picked > a.chosen{opacity:1;transform:translateY(-24px) scale(1.07) rotate(0deg) !important}\n.reshuffle:hover{background:#C9A24A !important;color:#15161C !important;border-color:#C9A24A !important}\n\n/* overlay theme skins (12) */\n.t-rough{background-color:#8A4E2C;color:#F6EBD8;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .1  0 0 0 0 .07  0 0 0 0 .04  0 0 0 1.4 -.45'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\"),linear-gradient(180deg,#6A361F 0%,#A8714A 55%,#EEDEC1 100%)}\n.t-rough .nm{font-family:'Rubik Dirt',sans-serif;color:#F6EBD8;text-shadow:0 4px 0 #3A1C0E}\n.t-sun{background:#F2C46D;color:#0F1F47}\n.t-sun .nm{font-family:'Marcellus SC',serif}\n.t-rock{background-color:#161312;color:#F3EDE2;background-image:linear-gradient(rgba(0,0,0,.35) 2px,transparent 2px),linear-gradient(90deg,rgba(0,0,0,.35) 2px,transparent 2px);background-size:120px 44px,120px 88px}\n.t-rock .nm{font-family:'Metal Mania',serif;color:#FF3B3B}\n.t-rap{background-color:#7E3427;color:#FFFFFF;background-image:linear-gradient(#5E2219 2px,transparent 2px),linear-gradient(90deg,#5E2219 2px,transparent 2px);background-size:60px 26px,60px 52px}\n.t-rap .nm{font-family:'Permanent Marker',cursive;color:#FFE14D;text-shadow:4px 4px 0 #111111}\n.t-fail{background:#0C0D10;color:#E6E6E6}\n.t-fail .nm{font-family:'VT323',monospace;color:#FF4D4D;text-shadow:4px 0 rgba(255,46,99,.6),-4px 0 rgba(46,242,255,.5)}\n.t-over{background-color:#0F141B;color:#DDEBF5;background-image:linear-gradient(60deg,rgba(95,212,255,.12) 1px,transparent 1px),linear-gradient(-60deg,rgba(95,212,255,.12) 1px,transparent 1px);background-size:28px 48px}\n.t-over .nm{font-family:'Teko',sans-serif;font-weight:600;color:#FF9C1A;text-transform:uppercase}\n.t-god{background:#121212;color:#F6EBD0}\n.t-god .nm{font-family:'Cinzel',serif;font-weight:900;color:#E9C46A;text-shadow:0 0 30px rgba(233,196,106,.7)}\n.t-grab{background:#FF4FA3;color:#FFFFFF}\n.t-grab .nm{font-family:'Press Start 2P',monospace;line-height:1.2 !important;text-shadow:4px 4px 0 #7A1450}\n.t-hero{background-color:#FFD400;color:#111111;background-image:radial-gradient(#E8A900 1.6px,transparent 1.8px);background-size:10px 10px}\n.t-hero .nm{font-family:'Bangers',sans-serif;color:#E4252B;text-shadow:4px 4px 0 #111111}\n.t-retro{background:#008080;color:#FFFFFF}\n.t-retro .nm{font-family:'VT323',monospace;color:#FFFFFF}\n.t-sky{background:#7EC8F2;color:#0C2E47}\n.t-sky .nm{font-family:'Bungee',sans-serif;color:#FFFFFF;text-shadow:4px 4px 0 #0C2E47}\n.t-domino{background:#F5F1E8;color:#111111}\n.t-domino .nm{font-family:'Rubik',sans-serif;font-weight:800}\n.t-wrap{background-color:#C9A06B;color:#2A2118;background-image:repeating-linear-gradient(90deg,rgba(110,70,30,.08) 0 1px,transparent 1px 7px)}\n.t-wrap .nm{font-family:'Archivo Black',sans-serif;color:#FBF8F1;text-shadow:0 5px 0 #2A2118}\n.t-burr{background:#FFF6E6;color:#2B1A12}\n.t-burr .nm{font-family:'Lilita One',sans-serif;color:#D9481F;text-shadow:5px 5px 0 #2B1A12}\n.jk{position:absolute;display:flex;flex-direction:column;align-items:center;font-family:'Lilita One',sans-serif;font-size:15px;line-height:1.02;z-index:2;color:#D9481F}\n.t-reel{background:#0B0B0B;color:#F2F0EA}\n.t-reel .nm{font-family:'Limelight',serif;color:#F2F0EA;text-shadow:0 0 40px rgba(242,240,234,.35)}\n.t-draft{background-color:#1D3F73;color:#FFFFFF;background-image:linear-gradient(rgba(255,255,255,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.13) 1px,transparent 1px);background-size:80px 80px}\n.t-draft .nm{font-family:'Josefin Sans',sans-serif;font-weight:300;letter-spacing:.06em;text-transform:uppercase;color:#FFFFFF}\n.t-cab{background:#FFC72C;color:#111111}\n.t-cab .nm{font-family:'Anton',sans-serif;color:#111111}\n.t-lab{background:radial-gradient(ellipse at 50% 110%,rgba(124,255,178,.28),transparent 60%),#0B1416;color:#E6F2EE}\n.t-lab .nm{font-family:'Syne',sans-serif;font-weight:800;color:#7CFFB2;text-shadow:0 0 40px rgba(124,255,178,.5)}\n.t-valo{background-color:#0E161F;color:#EDE6DA;background-image:linear-gradient(rgba(237,230,218,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(237,230,218,.05) 1px,transparent 1px);background-size:64px 64px}\n.t-valo .nm{font-family:'Barlow Condensed',sans-serif;font-weight:800;text-transform:uppercase;color:#EDE6DA}\n.wb{border-radius:50%;background:radial-gradient(circle at 34% 30%,rgba(255,255,255,.98) 0 9%,rgba(255,255,255,.45) 17%,rgba(225,240,247,.3) 48%,rgba(150,180,198,.35) 66%,rgba(255,255,255,.6) 70%,transparent 73%)}\n\n/* themed transition overlay */\n.ov{position:fixed;inset:0;z-index:60;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;text-align:center;padding:24px;box-sizing:border-box;visibility:hidden;pointer-events:none;clip-path:inset(0 0 0 0);transition:clip-path .8s cubic-bezier(.7,0,.2,1),opacity .6s ease,transform .7s cubic-bezier(.2,.9,.3,1.2);overflow:hidden}\n.ov.on{visibility:visible;pointer-events:auto}\n.ov .tag,.ov .ovn,.ov .ovl{position:relative;z-index:2}\n.ov .tag{font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:.16em}\n.ov .ovn{font-size:clamp(60px,11vw,170px);line-height:.9;transform:scale(.7);opacity:0;transition:transform .6s .55s cubic-bezier(.2,.9,.3,1.3),opacity .4s .55s ease}\n.ov.on .ovn{transform:none;opacity:1}\n.ov .ovl{font-family:'Space Grotesk',sans-serif;font-size:16px;opacity:0;transition:opacity .4s .9s ease}\n.ov.on .ovl{opacity:.85}\n.dz{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden}\n.ab{position:absolute}\n.fx{transition-property:transform,opacity,width;transition-duration:.8s;transition-timing-function:cubic-bezier(.2,.9,.3,1.15)}\n.fx-drop{transform:translateY(-120vh)} .on .fx-drop{transform:none}\n.fx-rise{transform:translateY(120vh)} .on .fx-rise{transform:none}\n.fx-left{transform:translateX(-140vw)} .on .fx-left{transform:none}\n.fx-right{transform:translateX(140vw)} .on .fx-right{transform:none}\n.fx-pop{transform:scale(0)} .on .fx-pop{transform:scale(1)}\n.fx-spin{transform:scale(0) rotate(-220deg)} .on .fx-spin{transform:none}\n.fx-gy{transform:scaleY(0);transform-origin:50% 100%} .on .fx-gy{transform:scaleY(1)}\n.fx-gyt{transform:scaleY(0);transform-origin:50% 0} .on .fx-gyt{transform:scaleY(1)}\n.fx-gx{transform:scaleX(0);transform-origin:0 50%} .on .fx-gx{transform:scaleX(1)}\n.fx-fade{opacity:0} .on .fx-fade{opacity:1}\n.fx-up{transform:translateY(120vh);transition-duration:.9s;transition-timing-function:linear} .on .fx-up{transform:translateY(-140vh)}\n.fx-ring{transform:scale(.2);opacity:1;transition-duration:1.3s;transition-timing-function:ease-out} .on .fx-ring{transform:scale(4);opacity:0}\n.fx-fall{transform:translateY(-110vh) rotate(-25deg);transition-duration:1.8s;transition-timing-function:cubic-bezier(.45,0,.75,1)} .on .fx-fall{transform:translateY(130vh) rotate(25deg)}\n.fx-tip{transform:rotate(0deg);transform-origin:100% 100%;transition-duration:.32s;transition-timing-function:cubic-bezier(.6,0,.9,.6)} .on .fx-tip{transform:rotate(74deg)}\n.ov-rough{clip-path:inset(0 100% 0 0)} .ov-rough.on{clip-path:inset(0 0 0 0)}\n.ov-grab,.ov-sky{clip-path:inset(0 0 100% 0)} .ov-grab.on,.ov-sky.on{clip-path:inset(0 0 0 0)}\n.ov-rock,.ov-domino{opacity:0;transform:scale(1.15)} .ov-rock.on,.ov-domino.on{opacity:1;transform:scale(1)}\n.ov-rap{clip-path:polygon(0 0,0 0,-30% 100%,-30% 100%)} .ov-rap.on{clip-path:polygon(0 0,130% 0,100% 100%,-30% 100%)}\n.ov-fail{clip-path:inset(48% 0 48% 0);transition-timing-function:steps(6)} .ov-fail.on{clip-path:inset(0 0 0 0)}\n.ov-retro{clip-path:inset(50% 50% 50% 50%);transition-timing-function:steps(8)} .ov-retro.on{clip-path:inset(0 0 0 0)}\n.ov-over{clip-path:polygon(50% 46%,53.5% 48%,53.5% 52%,50% 54%,46.5% 52%,46.5% 48%)} .ov-over.on{clip-path:polygon(50% -70%,160% -5%,160% 105%,50% 170%,-60% 105%,-60% -5%)}\n.ov-god{clip-path:circle(0% at 50% 0%)} .ov-god.on{clip-path:circle(170% at 50% 0%)}\n.ov-sun{clip-path:circle(0% at 50% 100%);transition-duration:1s} .ov-sun.on{clip-path:circle(170% at 50% 100%)}\n.ov-hero{transform:scale(0) rotate(-25deg)} .ov-hero.on{transform:scale(1) rotate(0deg)}\n.ov-wrap{clip-path:inset(0 50% 0 50%)} .ov-wrap.on{clip-path:inset(0 0 0 0)}\n.ov-burr{clip-path:circle(0% at 50% 50%)} .ov-burr.on{clip-path:circle(75% at 50% 50%)}\n.ov-reel{clip-path:circle(0% at 50% 50%);transition-duration:1.1s} .ov-reel.on{clip-path:circle(80% at 50% 50%)}\n.ov-cab{clip-path:inset(0 100% 0 0);transition-timing-function:cubic-bezier(.8,0,.2,1)} .ov-cab.on{clip-path:inset(0 0 0 0)}\n.ov-lab{clip-path:inset(100% 0 0 0);transition-duration:1s;transition-timing-function:cubic-bezier(.5,0,.2,1)} .ov-lab.on{clip-path:inset(0 0 0 0)}\n.ov-valo{clip-path:polygon(0 0,0 0,0 100%,0 100%);transition-duration:.7s;transition-timing-function:cubic-bezier(.8,0,.2,1)} .ov-valo.on{clip-path:polygon(0 0,120% 0,100% 100%,-20% 100%)}\n.ov-draft{clip-path:inset(0 0 100% 0);transition-duration:1s;transition-timing-function:cubic-bezier(.7,0,.3,1)} .ov-draft.on{clip-path:inset(0 0 0 0)}\n\n/* small screens: the hand becomes an overlapping fan, scaled to fit */\n@media (max-width: 760px){\n  .hand{flex-wrap:nowrap !important;gap:0 !important;zoom:.78;min-height:500px !important;margin-top:28px !important}\n  .hand > a{margin:0 -45px}\n  .hand > a:nth-child(1){transform:translateY(18px) rotate(-9deg)}\n  .hand > a:nth-child(2){transform:translateY(0) rotate(0deg);z-index:1}\n  .hand > a:nth-child(3){transform:translateY(18px) rotate(9deg)}\n  .hand.p-idle > a.focus{z-index:4;transform:translateY(-26px) rotate(0deg) scale(1.12) !important;transition-delay:0s}\n  .hand.p-idle > a:hover{transform:translateY(-8px) rotate(0deg) !important}\n  .hand.p-idle > a.focus:hover{transform:translateY(-26px) rotate(0deg) scale(1.12) !important}\n  .hand.p-gather > a:nth-child(1){transform:translateX(210px) rotate(-4deg) scale(.94) !important}\n  .hand.p-gather > a:nth-child(2){transform:translateY(-6px) scale(.96) !important}\n  .hand.p-gather > a:nth-child(3){transform:translateX(-210px) rotate(4deg) scale(.94) !important}\n  .hand.p-pre > a{transform:translateY(-120vh) rotate(-12deg) !important}\n  .hand.p-picked > a.chosen{z-index:4;transform:translateY(-20px) scale(1.15) rotate(0deg) !important}\n}\n@media (max-width: 560px){ .hand{zoom:.6} }\n@media (max-width: 430px){ .hand{zoom:.48} .hand > a{margin:0 -50px} }\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;600&family=Rubik+Dirt&family=Metal+Mania&family=Cinzel:wght@600;900&family=Bangers&family=Teko:wght@500;600&family=Permanent+Marker&family=VT323&family=Press+Start+2P&family=Bungee&family=Marcellus+SC&family=Rubik:wght@800&family=Archivo+Black&family=Stardos+Stencil:wght@700&family=Lilita+One&family=Limelight&family=Josefin+Sans:wght@300;700&family=Anton&family=Syne:wght@800&family=Barlow+Condensed:wght@800&display=swap"];

export default class Deal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deck() {
    return [
      { id: 'rough', href: '/rough-phael', label: 'Rough-phael', n1: 'Rough-', n2: 'phael', tag: 'GRIT 80', line: "Rough-phael. A little coarse, but he smooths out nicely." },
      { id: 'rock', href: '/rock-phael', label: 'Rock-phael', n1: 'Rock-', n2: 'phael', tag: 'WORLD TOUR · ONE NIGHT', line: "Rock-phael just walked on stage. Earplugs optional." },
      { id: 'rap', href: '/rap-hael', label: 'Rap-hael', n1: 'Rap-', n2: 'hael', tag: 'MIXTAPE VOL. 1', line: "Rap-hael grabbed the mic. He's been waiting all day for this." },
      { id: 'fail', href: '/ra-fail', label: 'Ra-fail', n1: 'Ra-', n2: 'fail', tag: 'ERR 0x0RAPH', line: "Ra-fail. Things went wrong, beautifully. Proceed anyway?" },
      { id: 'sun', href: '/ra-phael', label: 'Ra-phael', n1: 'Ra-', n2: 'phael', tag: 'GOD OF THE SUN', line: "Ra-phael is rising. Mind your eyes." },
      { id: 'god', href: '/archangel', label: 'the light', n1: '✦', n2: '', tag: '' },
      { id: 'valo', href: '/valo-raph', label: 'VALO-RAPH', n1: 'VALO-', n2: 'RAPH', tag: 'ROUND 1 · BUY PHASE', line: "VALO-RAPH. Buy phase is up. Don't forget your shields." },
      { id: 'grab', href: '/grab-riel', label: 'Grab-riel', n1: 'Grab-', n2: 'riel', tag: 'INSERT COIN', line: "Grab-riel. Insert coin, try your luck." },
      { id: 'hero', href: '/hero-nimo', label: 'Hero-nimo', n1: 'Hero-', n2: 'nimo', tag: 'ISSUE #1', line: "Hero-nimo has entered the panel. Cue dramatic music." },
      { id: 'retro', href: '/retro-nimo', label: 'Retro-nimo', n1: 'Retro-', n2: 'nimo', tag: 'C:\\RGG>', line: "Retro-nimo. Please wait while Windows boots." },
      { id: 'sky', href: '/geronimo', label: 'GERONIMO!', n1: 'GERONIMO!', n2: '', tag: 'ALTITUDE 13,000 FT', line: "GERONIMO! Hope you packed a parachute." },
      { id: 'domino', href: '/gero-domino', label: 'Gero-domino', n1: 'Gero-', n2: 'domino', tag: 'PUSH TO START', line: "Gero-domino. One push and it's all going down." },
      { id: 'wrap', href: '/wrap-hael', label: 'Wrap-hael', n1: 'Wrap-', n2: 'hael', tag: 'FRAGILE · THIS SIDE UP', line: "Wrap-hael. Fragile. Handle with care." },
      { id: 'burr', href: '/gab-urrito', label: 'Gab-urrito', n1: 'Gab-', n2: 'urrito', tag: 'ORDER UP', line: "Gab-urrito. Hungry? You picked well." },
      { id: 'reel', href: '/gab-reel', label: 'Gab-reel', n1: 'Gab-', n2: 'reel', tag: 'RGG PICTURES PRESENTS', line: "Gab-reel. The lights go down. The film is about to roll." },
      { id: 'draft', href: '/draft-ael', label: 'Draft-ael', n1: 'Draft-', n2: 'ael', tag: 'DWG 00 · SCALE 1:1', line: "Draft-ael has the plans ready. Want to see it built?" },
      { id: 'cab', href: '/cab-riel', label: 'Cab-riel', n1: 'CAB-', n2: 'RIEL', tag: 'WHERE TO?', line: "Cab-riel's meter is running. Where to?" },
      { id: 'lab', href: '/lab-riel', label: 'Lab-riel', n1: 'Lab-', n2: 'riel', tag: 'EXPERIMENT No. RGG-01', line: "Lab-riel. Goggles on. It's probably safe." }
    ];
  }
  shuffle(d) {
    for (let i = d.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = d[i]; d[i] = d[j]; d[j] = t;
    }
    return d;
  }
  deal() {
    // Deal only cards this visitor hasn't seen yet. Once every card has been seen, the tally resets.
    let seen = this.seen;
    if (!seen) {
      seen = [];
      try { seen = JSON.parse(localStorage.getItem('rgg-seen') || '[]') || []; } catch (e) { seen = []; }
    }
    const all = this.deck();
    const valid = all.map((c) => c.id);
    seen = seen.filter((id) => valid.indexOf(id) !== -1);
    const prev = (this.hand || []).map((c) => c.id);
    let fresh = this.shuffle(all.filter((c) => seen.indexOf(c.id) === -1));
    let hand = fresh.slice(0, 3);
    if (hand.length < 3) {
      // Not enough unseen cards left: finish the round, then start a new tally.
      const ids = hand.map((c) => c.id);
      const fill = this.shuffle(all.filter((c) => ids.indexOf(c.id) === -1 && prev.indexOf(c.id) === -1));
      hand = this.shuffle(hand.concat(fill.slice(0, 3 - hand.length)));
      seen = hand.map((c) => c.id);
      this.metAll = true;
    } else {
      seen = seen.concat(hand.map((c) => c.id));
      if (seen.length >= all.length) { seen = []; this.metAll = true; }
    }
    this.seen = seen;
    try { localStorage.setItem('rgg-seen', JSON.stringify(seen)); } catch (e) {}
    return hand;
  }
  enterCard(c) {
    if (this.busy) return;
    this.busy = true;
    const rev = Object.assign({}, (this.state && this.state.rev) || {}); rev[c.id] = true;
    this.setState({ pick: c, on: false, phase: 'picked', rev: rev, tilt: null });
    this.after(380, () => this.setState({ on: true }));
    this.after(2500, () => { if (this.goEl) this.goEl.click(); });
    this.after(3300, () => { this.hand = this.deal(); this.dealIn(); });
  }
  componentDidMount() {
    this.timers = [];
    this.dealIn();
  }
  componentWillUnmount() {
    (this.timers || []).forEach((t) => clearTimeout(t));
  }
  after(ms, fn) {
    if (!this.timers) this.timers = [];
    this.timers.push(setTimeout(fn, ms));
  }
  dealIn() {
    this.setState({ phase: 'pre', pick: null, on: false, rev: {}, last: null, tilt: null });
    this.after(60, () => this.setState({ phase: 'down' }));
    this.after(800, () => { this.busy = false; this.setState({ phase: 'idle' }); });
  }
  renderVals() {
    if (!this.hand) this.hand = this.deal();
    const s = this.state || {};
    const phase = s.phase || 'idle';
    const pick = s.pick || null;
    const ids = ['rough','rock','rap','fail','sun','god','over','valo','grab','hero','retro','sky','domino','wrap','burr','reel','draft','cab','lab'];
    const dz = {};
    ids.forEach((id) => { dz[id] = !!(pick && pick.id === id); });
    const cap = (id) => 'is' + id.charAt(0).toUpperCase() + id.slice(1);
    const rev = s.rev || {};
    const tl = s.tilt;
    const lastCard = this.hand.filter((c) => c.id === s.last)[0] || null;
    const nRev = this.hand.filter((c) => rev[c.id]).length;
    const all = this.deck().length;
    const seenN = (this.seen || []).length;
    const nameOf = (c) => c.id === 'god' ? 'the light' : c.label;
    let hint = 'Go on. They don\u2019t bite. Mostly.';
    if (phase === 'picked' && pick) hint = 'Stepping through\u2026';
    else if (lastCard && lastCard.id === 'god') hint = '\u2026you weren\u2019t supposed to find that one.';
    else if (lastCard && nRev === 3) hint = 'Decisions, decisions.';
    else if (lastCard) hint = lastCard.line || ('Oh, it\u2019s ' + nameOf(lastCard) + '. Tap again to step in, or keep looking.');
    else if (s.dawdle) hint = 'Commitment issues?';
    else if ((this.shuffles || 0) >= 3) hint = 'Picky. I respect that.';
    return {
      phase: phase,
      dz: dz,
      hand: this.hand.map((c) => {
        const o = Object.assign({}, c, {
          chosenCls: pick && pick.id === c.id ? 'chosen' : '',
          aria: rev[c.id] ? (c.id === 'god' ? 'Step into the hidden card' : 'Step into ' + c.label) : 'Turn over card ' + (this.hand.indexOf(c) + 1),
          revCls: rev[c.id] ? 'rev' : '',
          focusCls: s.last === c.id ? 'focus' : '',
          tilt: tl && tl.id === c.id && phase === 'idle' ? 'rotateX(' + tl.y + 'deg) rotateY(' + tl.x + 'deg)' : 'none',
          shine: tl && tl.id === c.id ? tl.sh : 120,
          move: (e) => {
            if (phase !== 'idle' || !e || !e.currentTarget) return;
            const r = e.currentTarget.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
            this.setState({ tilt: { id: c.id, x: Math.round(px * 16), y: Math.round(-py * 14), sh: Math.round(100 - px * 160) } });
            if (!this.hoverT && !s.dawdle) this.hoverT = setTimeout(() => { this.hoverT = null; if (!(this.state && this.state.last)) this.setState({ dawdle: true }); }, 3500);
          },
          leave: () => { clearTimeout(this.hoverT); this.hoverT = null; if (s.tilt) this.setState({ tilt: null }); },
          pick: (e) => {
            if (e && e.preventDefault) e.preventDefault();
            if (this.busy || phase !== 'idle') return;
            if (!rev[c.id]) {
              const r2 = Object.assign({}, rev); r2[c.id] = true;
              clearTimeout(this.hoverT); this.hoverT = null; this.shuffles = 0;
              this.setState({ rev: r2, last: c.id, dawdle: false });
              return;
            }
            this.enterCard(c);
          }
        });
        ids.forEach((id) => { o[cap(id)] = c.id === id; });
        return o;
      }),
      hint: hint,
      canEnter: !!lastCard && phase === 'idle',
      enterLabel: lastCard ? nameOf(lastCard) : '',
      enter: () => { if (lastCard && phase === 'idle') this.enterCard(lastCard); },
      canTurnAll: nRev < 3 && phase === 'idle',
      turnAll: () => { const r = {}; this.hand.forEach((c) => { r[c.id] = true; }); this.setState({ rev: r, last: s.last || this.hand[2].id }); },
      tally: this.deck().map((c, i) => ({ cls: i < seenN ? 'on' : '' })),
      tallyText: this.metAll && seenN <= 3 ? 'You\u2019ve met all ' + all + '. Show-off. Round two: ' + seenN + ' of ' + all : 'You\u2019ve met ' + seenN + ' of ' + all,
      reshuffle: () => {
        if (this.busy) return;
        this.busy = true;
        this.shuffles = (this.shuffles || 0) + 1;
        this.setState({ phase: 'gather', rev: {}, last: null, tilt: null, dawdle: false });
        this.after(900, () => { this.hand = this.deal(); this.dealIn(); });
      },
      ovId: pick ? pick.id : 'none',
      ovOn: s.on ? 'on' : '',
      ovN1: pick ? pick.n1 : '',
      ovN2: pick ? pick.n2 : '',
      ovTag: pick ? pick.tag : '',
      ovLabel: pick ? pick.label : '',
      goHref: pick ? pick.href : '/',
      goRef: (el) => { this.goEl = el; }
    };
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
      <>
        {FONTS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="felt" style={css("min-height: 100vh; box-sizing: border-box; color: #EDEDED; font-family: 'Space Grotesk', system-ui, sans-serif; padding: 28px 24px 64px; display: flex; flex-direction: column; align-items: center")}>
        <header style={css("width: 100%; max-width: 1200px; display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: center")}>
          <div style={css("font-family: 'Cinzel', serif; font-weight: 900; font-size: 18px; letter-spacing: 0.18em; color: #C9A24A")}>
            {"RGG"}
            <span style={css("font-family: 'JetBrains Mono', monospace; font-weight: 400; font-size: 13px; letter-spacing: 0.08em; color: #8E9A93")}>
              {" / portfolio"}
            </span>
          </div>
          {" "}
          <a href="/pro" style={css("font-size: 14px; color: #9C978C; text-decoration: underline; text-underline-offset: 4px; padding: 12px 0")}>
            {"Rather not gamble? See the professional version →"}
          </a>
        </header>
        {" "}
        <section style={css("max-width: 760px; text-align: center; margin-top: 48px; display: flex; flex-direction: column; gap: 14px; align-items: center")}>
          <div style={css("font-family: 'Cinzel', serif; font-weight: 600; font-size: 12px; letter-spacing: 0.42em; color: #C9A24A")}>
            {"RAPHAEL GABRIEL GERONIMO"}
          </div>
          {" "}
          <h1 style={css("margin: 0; font-family: 'Cinzel', serif; font-weight: 600; font-size: clamp(38px, 6vw, 72px); line-height: 1; letter-spacing: 0.02em; color: #F3EDE0")}>
            {"Choose one."}
          </h1>
        </section>
        {" "}
        <div className={`hand p-${v.phase}`} style={css("margin-top: 48px; display: flex; flex-wrap: wrap; gap: 36px; justify-content: center; align-items: center; min-height: 440px; perspective: 2000px")}>
          {(v.hand || []).map((c, __i0) => (
            <React.Fragment key={__i0}>
              <a href={c.href} className={`card ${c.chosenCls} ${c.revCls} ${c.focusCls}`} aria-label={c.aria} onClick={c.pick} onPointerMove={c.move} onPointerLeave={c.leave}>
                <div className="tilt" style={css(`transform: ${c.tilt}`)}>
                  <div className="flip">
                    <div className="face back" aria-hidden="true">
                      <svg className="bk-m" viewBox="0 0 300 430" preserveAspectRatio="none">
                        <g fill="none" stroke="#C9A24A" strokeWidth=".6" opacity=".22">
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(0 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(10 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(20 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(30 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(40 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(50 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(60 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(70 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(80 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(90 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(100 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(110 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(120 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(130 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(140 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(150 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(160 150 215)"></ellipse>
                          <ellipse cx="150" cy="215" rx="112" ry="40" transform="rotate(170 150 215)"></ellipse>
                        </g>
                        {" "}
                        <path d="M220.0 215.0 L248.0 215.0 M219.4 224.1 L235.3 226.2 M217.6 233.1 L244.7 240.4 M214.7 241.8 L229.5 247.9 M210.6 250.0 L234.9 264.0 M205.5 257.6 L218.2 267.4 M199.5 264.5 L219.3 284.3 M192.6 270.5 L202.4 283.2 M185.0 275.6 L199.0 299.9 M176.8 279.7 L182.9 294.5 M168.1 282.6 L175.4 309.7 M159.1 284.4 L161.2 300.3 M150.0 285.0 L150.0 313.0 M140.9 284.4 L138.8 300.3 M131.9 282.6 L124.6 309.7 M123.2 279.7 L117.1 294.5 M115.0 275.6 L101.0 299.9 M107.4 270.5 L97.6 283.2 M100.5 264.5 L80.7 284.3 M94.5 257.6 L81.8 267.4 M89.4 250.0 L65.1 264.0 M85.3 241.8 L70.5 247.9 M82.4 233.1 L55.3 240.4 M80.6 224.1 L64.7 226.2 M80.0 215.0 L52.0 215.0 M80.6 205.9 L64.7 203.8 M82.4 196.9 L55.3 189.6 M85.3 188.2 L70.5 182.1 M89.4 180.0 L65.1 166.0 M94.5 172.4 L81.8 162.6 M100.5 165.5 L80.7 145.7 M107.4 159.5 L97.6 146.8 M115.0 154.4 L101.0 130.1 M123.2 150.3 L117.1 135.5 M131.9 147.4 L124.6 120.3 M140.9 145.6 L138.8 129.7 M150.0 145.0 L150.0 117.0 M159.1 145.6 L161.2 129.7 M168.1 147.4 L175.4 120.3 M176.8 150.3 L182.9 135.5 M185.0 154.4 L199.0 130.1 M192.6 159.5 L202.4 146.8 M199.5 165.5 L219.3 145.7 M205.5 172.4 L218.2 162.6 M210.6 180.0 L234.9 166.0 M214.7 188.2 L229.5 182.1 M217.6 196.9 L244.7 189.6 M219.4 205.9 L235.3 203.8" stroke="#C9A24A" strokeWidth="1" opacity=".55"></path>
                        {" "}
                        <circle cx="150" cy="215" r="62" fill="#0B0912" stroke="#C9A24A" strokeWidth="1.4"></circle>
                        {" "}
                        <circle cx="150" cy="215" r="55" fill="none" stroke="#C9A24A" strokeWidth=".8" strokeDasharray="1 5" strokeLinecap="round"></circle>
                        {" "}
                        <g fill="none" stroke="#C9A24A" strokeWidth="2.2">
                          <circle cx="150" cy="200" r="20"></circle>
                          <circle cx="137" cy="223" r="20"></circle>
                          <circle cx="163" cy="223" r="20"></circle>
                        </g>
                        {" "}
                        <path d="M150 208 L153 215 L150 222 L147 215 Z" fill="#F3E2B8"></path>
                        {" "}
                        <g fill="#C9A24A">
                          <path d="M150 34 L154 44 L150 54 L146 44 Z"></path>
                          <path d="M150 376 L154 386 L150 396 L146 386 Z"></path>
                        </g>
                        {" "}
                        <path d="M40 30 Q40 40 30 40 M260 30 Q260 40 270 40 M40 400 Q40 390 30 390 M260 400 Q260 390 270 390" fill="none" stroke="#C9A24A" strokeWidth="1.2"></path>
                        {" "}
                        <path d="M70 70 H230 M70 360 H230" stroke="#C9A24A" strokeWidth=".6" opacity=".5"></path>
                      </svg>
                      {" "}
                      <div className="bk-f1"></div>
                      {" "}
                      <div className="bk-t" style={css("bottom: 76px")}>
                        {"PICK ME"}
                      </div>
                      {" "}
                      <div className="bk-f2" style={css(`background-position: ${c.shine}% 0`)}></div>
                    </div>
                    {" "}
                    {c.isRough ? (
                      <>
                        <div className="face front" style={css("color: #5A3A1A")}>
                          <div className="idx i-tl">
                            {"2"}
                            <svg viewBox="0 0 24 24">
                              <polygon points="12,1 14,5 18,3 18,7 23,8 20,12 23,16 18,17 18,21 14,19 12,23 10,19 6,21 6,17 1,16 4,12 1,8 6,7 6,3 10,5" fill="currentColor"></polygon>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"2"}
                            <svg viewBox="0 0 24 24">
                              <polygon points="12,1 14,5 18,3 18,7 23,8 20,12 23,16 18,17 18,21 14,19 12,23 10,19 6,21 6,17 1,16 4,12 1,8 6,7 6,3 10,5" fill="currentColor"></polygon>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background-color: #B8925E; background-image: radial-gradient(rgba(30,23,16,.4) 1px, transparent 1.6px); background-size: 6px 6px")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <g transform="rotate(-10 75 80)">
                                <rect x="22" y="38" width="106" height="96" rx="6" fill="#E6C892"></rect>
                                <g fill="#8A6A3E">
                                  <circle cx="40" cy="60" r="2"></circle>
                                  <circle cx="58" cy="72" r="1.6"></circle>
                                  <circle cx="80" cy="58" r="2.2"></circle>
                                  <circle cx="104" cy="70" r="1.8"></circle>
                                  <circle cx="46" cy="96" r="2"></circle>
                                  <circle cx="70" cy="110" r="1.6"></circle>
                                  <circle cx="96" cy="100" r="2.2"></circle>
                                  <circle cx="116" cy="118" r="1.8"></circle>
                                  <circle cx="34" cy="122" r="1.6"></circle>
                                  <circle cx="88" cy="82" r="1.4"></circle>
                                </g>
                                <path d="M34 88 L118 80 M38 104 L110 98" stroke="#FFF3DA" strokeWidth="3" strokeLinecap="round"></path>
                                <rect x="46" y="14" width="66" height="34" rx="9" fill="#3A2412"></rect>
                                <rect x="46" y="40" width="66" height="8" fill="#5A3A1A"></rect>
                              </g>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Rubik Dirt', sans-serif")}>
                              {"Rough-phael"}
                            </div>
                            <div className="tg">
                              {"Grit, grain and code with teeth."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isRock ? (
                      <>
                        <div className="face front" style={css("color: #B3121B")}>
                          <div className="idx i-tl">
                            {"10"}
                            <svg viewBox="0 0 24 24">
                              <polygon points="14,1 4,13 11,13 8,23 20,9 13,9 16,1" fill="currentColor"></polygon>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"10"}
                            <svg viewBox="0 0 24 24">
                              <polygon points="14,1 4,13 11,13 8,23 20,9 13,9 16,1" fill="currentColor"></polygon>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #0B0B0B")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <rect x="24" y="16" width="102" height="118" rx="8" fill="#1C1C1C" stroke="#333333" strokeWidth="3"></rect>
                              <circle cx="75" cy="86" r="38" fill="#111111" stroke="#3A3A3A" strokeWidth="5"></circle>
                              <circle cx="75" cy="86" r="16" fill="#2A2A2A"></circle>
                              <circle cx="46" cy="32" r="4" fill="#C9C9C9"></circle>
                              <circle cx="62" cy="32" r="4" fill="#C9C9C9"></circle>
                              <circle cx="78" cy="32" r="4" fill="#C9C9C9"></circle>
                              <polygon points="92,20 66,74 82,74 70,124 108,62 90,62 104,20" fill="#FF3B3B"></polygon>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Metal Mania', serif; font-size: 46px")}>
                              {"Rock-phael"}
                            </div>
                            <div className="tg">
                              {"Full stack. Full volume."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isRap ? (
                      <>
                        <div className="face front" style={css("color: #7E3427")}>
                          <div className="idx i-tl">
                            {"8"}
                            <svg viewBox="0 0 24 24">
                              <rect x="8" y="1" width="8" height="12" rx="4" fill="currentColor"></rect>
                              <path d="M5 10 a7 7 0 0 0 14 0 M12 17 V23 M8 23 H16" fill="none" stroke="currentColor" strokeWidth="2"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"8"}
                            <svg viewBox="0 0 24 24">
                              <rect x="8" y="1" width="8" height="12" rx="4" fill="currentColor"></rect>
                              <path d="M5 10 a7 7 0 0 0 14 0 M12 17 V23 M8 23 H16" fill="none" stroke="currentColor" strokeWidth="2"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background-color: #7E3427; background-image: linear-gradient(#5E2219 2px, transparent 2px), linear-gradient(90deg, #5E2219 2px, transparent 2px); background-size: 40px 20px, 40px 40px")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <path d="M30 46 Q18 70 30 94 M18 34 Q0 70 18 106 M120 46 Q132 70 120 94 M132 34 Q150 70 132 106" fill="none" stroke="#FFE14D" strokeWidth="5" strokeLinecap="round"></path>
                              <rect x="52" y="14" width="46" height="62" rx="23" fill="#D6D6D6" stroke="#111111" strokeWidth="4"></rect>
                              <path d="M56 34 H94 M54 48 H96 M56 62 H94" stroke="#7A7A7A" strokeWidth="3"></path>
                              <rect x="64" y="76" width="22" height="10" fill="#111111"></rect>
                              <path d="M66 86 H84 L80 138 H70 Z" fill="#222222" stroke="#111111" strokeWidth="3"></path>
                              <circle cx="112" cy="128" r="6" fill="#FF4FA3"></circle>
                              <circle cx="38" cy="124" r="4" fill="#2EE6D6"></circle>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Permanent Marker', cursive; font-size: 44px")}>
                              {"Rap-hael"}
                            </div>
                            <div className="tg">
                              {"Spitting bars and shipping code."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isFail ? (
                      <>
                        <div className="face front" style={css("color: #0A2BB0")}>
                          <div className="idx i-tl">
                            {"4"}
                            <svg viewBox="0 0 24 24">
                              <path d="M12 2 L23 21 H1 Z" fill="currentColor"></path>
                              <rect x="11" y="9" width="2" height="6" fill="#F6F1E7"></rect>
                              <rect x="11" y="17" width="2" height="2" fill="#F6F1E7"></rect>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"4"}
                            <svg viewBox="0 0 24 24">
                              <path d="M12 2 L23 21 H1 Z" fill="currentColor"></path>
                              <rect x="11" y="9" width="2" height="6" fill="#F6F1E7"></rect>
                              <rect x="11" y="17" width="2" height="2" fill="#F6F1E7"></rect>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #0A2BB0; background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 3px)")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <path d="M69 22 L132 128 H6 Z" fill="none" stroke="#FF2E63" strokeWidth="8" strokeLinejoin="round"></path>
                              <path d="M81 22 L144 128 H18 Z" fill="none" stroke="#2EF2FF" strokeWidth="8" strokeLinejoin="round"></path>
                              <path d="M75 22 L138 128 H12 Z" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round"></path>
                              <rect x="69" y="60" width="12" height="36" fill="#FFFFFF"></rect>
                              <rect x="69" y="104" width="12" height="12" fill="#FFFFFF"></rect>
                              <rect x="0" y="78" width="150" height="6" fill="#0A2BB0"></rect>
                              <rect x="20" y="84" width="40" height="4" fill="#FF2E63"></rect>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'VT323', monospace; font-size: 56px")}>
                              {"Ra-fail"}
                            </div>
                            <div className="tg">
                              {"Something went wrong. On purpose."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isSun ? (
                      <>
                        <div className="face front" style={css("color: #1F3A7A")}>
                          <div className="idx i-tl">
                            {"K"}
                            <svg viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
                              <path d="M12 1v4M12 19v4M1 12h4M19 12h4M4 4l3 3M17 17l3 3M4 20l3-3M17 7l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"K"}
                            <svg viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
                              <path d="M12 1v4M12 19v4M1 12h4M19 12h4M4 4l3 3M17 17l3 3M4 20l3-3M17 7l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #F2C46D")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <g stroke="#E8A21E" strokeWidth="4" strokeLinecap="round">
                                <path d="M75 8v16M75 126v-8M18 66h14M118 66h14M34 25l10 10M116 25l-10 10M26 104l10-8M124 104l-10-8"></path>
                              </g>
                              <circle cx="75" cy="66" r="34" fill="#E8A21E"></circle>
                              <circle cx="75" cy="66" r="44" fill="none" stroke="#FFF1C8" strokeWidth="3" strokeDasharray="2 6"></circle>
                              <polygon points="0,150 46,92 92,150" fill="#A86F2E"></polygon>
                              <polygon points="46,92 92,150 46,150" fill="#8A5A24"></polygon>
                              <polygon points="70,150 112,104 150,150" fill="#C98B3E"></polygon>
                              <rect x="0" y="142" width="150" height="8" fill="#1F3A7A"></rect>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Marcellus SC', serif; font-size: 44px")}>
                              {"Ra-phael"}
                            </div>
                            <div className="tg">
                              {"Rises daily. Ships daily."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isGod ? (
                      <>
                        <div className="face front jackpot" style={css("background: #0B0B0D; color: #D9BE85")}>
                          <svg viewBox="0 0 300 430" aria-hidden="true" style={css("position: absolute; inset: 0; width: 100%; height: 100%")}>
                            <defs>
                              <linearGradient id="jpFoil" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="#A9864A"></stop>
                                <stop offset=".3" stopColor="#F3E2B8"></stop>
                                <stop offset=".5" stopColor="#B89458"></stop>
                                <stop offset=".72" stopColor="#F3E2B8"></stop>
                                <stop offset="1" stopColor="#A9864A"></stop>
                              </linearGradient>
                              {" "}
                              <radialGradient id="jpGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0" stopColor="#E9D3A0" stopOpacity=".35"></stop>
                                <stop offset="1" stopColor="#E9D3A0" stopOpacity="0"></stop>
                              </radialGradient>
                            </defs>
                            {" "}
                            <rect x="10" y="10" width="280" height="410" rx="10" fill="none" stroke="url(#jpFoil)" strokeWidth="2"></rect>
                            {" "}
                            <rect x="18" y="18" width="264" height="394" rx="6" fill="none" stroke="#5E4C2C" strokeWidth="1"></rect>
                            {" "}
                            <g stroke="#3A301E" strokeWidth="1" fill="none">
                              <circle cx="150" cy="215" r="60"></circle>
                              <circle cx="150" cy="215" r="80"></circle>
                              <circle cx="150" cy="215" r="100"></circle>
                              <circle cx="150" cy="215" r="120"></circle>
                            </g>
                            {" "}
                            <g stroke="url(#jpFoil)" strokeWidth="1" opacity=".55">
                              <path d="M150 60 V370 M40 215 H260 M72 137 L228 293 M228 137 L72 293"></path>
                            </g>
                            {" "}
                            <circle cx="150" cy="215" r="110" fill="url(#jpGlow)"></circle>
                            {" "}
                            <path d="M150 128 L163 202 L237 215 L163 228 L150 302 L137 228 L63 215 L137 202 Z" fill="url(#jpFoil)"></path>
                            {" "}
                            <path d="M150 168 L156 209 L197 215 L156 221 L150 262 L144 221 L103 215 L144 209 Z" fill="#0B0B0D"></path>
                            {" "}
                            <circle cx="150" cy="215" r="5" fill="url(#jpFoil)"></circle>
                            {" "}
                            <path d="M34 34 L44 44 M266 34 L256 44 M34 396 L44 386 M266 396 L256 386" stroke="url(#jpFoil)" strokeWidth="2"></path>
                            {" "}
                            <circle cx="30" cy="30" r="3" fill="url(#jpFoil)"></circle>
                            <circle cx="270" cy="30" r="3" fill="url(#jpFoil)"></circle>
                            <circle cx="30" cy="400" r="3" fill="url(#jpFoil)"></circle>
                            <circle cx="270" cy="400" r="3" fill="url(#jpFoil)"></circle>
                          </svg>
                          {" "}
                          <div className="jp-shine" aria-hidden="true"></div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isOver ? (
                      <>
                        <div className="face front" style={css("color: #B35A00")}>
                          <div className="idx i-tl">
                            {"Q"}
                            <svg viewBox="0 0 24 24">
                              <path d="M12 1 L22 6.5 V17.5 L12 23 L2 17.5 V6.5 Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"Q"}
                            <svg viewBox="0 0 24 24">
                              <path d="M12 1 L22 6.5 V17.5 L12 23 L2 17.5 V6.5 Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #0F141B")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <g fill="none" stroke="#5FD4FF" strokeWidth="2">
                                <path d="M75 6 L135 40 V110 L75 144 L15 110 V40 Z" opacity=".5"></path>
                                <path d="M75 26 L118 51 V99 L75 124 L32 99 V51 Z" opacity=".8"></path>
                              </g>
                              <path d="M75 26 L118 51 V99 L75 124 L32 99 V51 Z" fill="rgba(95,212,255,.15)"></path>
                              <path d="M75 52 L97 64 V88 L75 100 L53 88 V64 Z" fill="#FF9C1A"></path>
                              <path d="M75 62 L88 69 V83 L75 90 L62 83 V69 Z" fill="#0F141B"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Teko', sans-serif; font-weight: 600; font-size: 54px; text-transform: uppercase")}>
                              {"Ove-rap-tch"}
                            </div>
                            <div className="tg">
                              {"Barrier up. Ship behind it."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isGrab ? (
                      <>
                        <div className="face front" style={css("color: #B0145E")}>
                          <div className="idx i-tl">
                            {"7"}
                            <svg viewBox="0 0 24 24">
                              <path d="M12 0 V7 M5 9 H19 M7 9 L4 18 L7 22 M17 9 L20 18 L17 22 M12 9 V20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"7"}
                            <svg viewBox="0 0 24 24">
                              <path d="M12 0 V7 M5 9 H19 M7 9 L4 18 L7 22 M17 9 L20 18 L17 22 M12 9 V20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #FF4FA3")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <rect x="10" y="10" width="130" height="130" rx="8" fill="rgba(62,224,255,.25)" stroke="#FFFFFF" strokeWidth="4"></rect>
                              <path d="M75 10 V52" stroke="#EDEDED" strokeWidth="4"></path>
                              <rect x="56" y="52" width="38" height="10" rx="3" fill="#C0C0C8"></rect>
                              <path d="M60 62 L52 84 M90 62 L98 84" stroke="#C0C0C8" strokeWidth="6" strokeLinecap="round"></path>
                              <circle cx="75" cy="92" r="16" fill="#FFD23F" stroke="#2B1055" strokeWidth="3"></circle>
                              <path d="M59 92 H91" stroke="#2B1055" strokeWidth="3"></path>
                              <circle cx="36" cy="124" r="14" fill="#3EE0FF" stroke="#2B1055" strokeWidth="3"></circle>
                              <circle cx="116" cy="122" r="14" fill="#7CFF6B" stroke="#2B1055" strokeWidth="3"></circle>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Press Start 2P', monospace; font-size: 22px; line-height: 1.3")}>
                              {"Grab-riel"}
                            </div>
                            <div className="tg">
                              {"Every project is a prize."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isHero ? (
                      <>
                        <div className="face front" style={css("color: #C81E24")}>
                          <div className="idx i-tl">
                            {"J"}
                            <svg viewBox="0 0 24 24">
                              <polygon points="12,0 14,7 21,4 17,10 24,12 17,14 21,20 14,17 12,24 10,17 3,20 7,14 0,12 7,10 3,4 10,7" fill="currentColor"></polygon>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"J"}
                            <svg viewBox="0 0 24 24">
                              <polygon points="12,0 14,7 21,4 17,10 24,12 17,14 21,20 14,17 12,24 10,17 3,20 7,14 0,12 7,10 3,4 10,7" fill="currentColor"></polygon>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background-color: #FFD400; background-image: radial-gradient(#E8A900 1.6px, transparent 1.8px); background-size: 9px 9px")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <polygon points="75,4 88,46 132,26 108,64 148,78 106,90 126,132 84,110 75,148 64,110 22,132 42,90 2,78 42,64 18,26 62,46" fill="#111111"></polygon>
                              <polygon points="75,16 85,52 120,36 100,68 134,78 100,88 116,120 82,102 75,134 66,102 34,120 50,88 16,78 50,68 30,36 64,52" fill="#E4252B"></polygon>
                              <text x="75" y="90" textAnchor="middle" fontFamily="Bangers, sans-serif" fontSize="36" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5">
                                {"POW!"}
                              </text>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Bangers', sans-serif; font-size: 52px; letter-spacing: .02em")}>
                              {"Hero-nimo"}
                            </div>
                            <div className="tg">
                              {"Saving the day, one deploy at a time."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isRetro ? (
                      <>
                        <div className="face front" style={css("color: #000080")}>
                          <div className="idx i-tl">
                            {"9"}
                            <svg viewBox="0 0 24 24">
                              <path d="M4 1 V20 L9 15 L12 23 L15 22 L12 14 L19 14 Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"9"}
                            <svg viewBox="0 0 24 24">
                              <path d="M4 1 V20 L9 15 L12 23 L15 22 L12 14 L19 14 Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #008080")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <rect x="14" y="22" width="122" height="96" fill="#C0C0C0" stroke="#FFFFFF" strokeWidth="3"></rect>
                              <path d="M136 22 V118 H14" fill="none" stroke="#404040" strokeWidth="3"></path>
                              <rect x="18" y="26" width="114" height="16" fill="#000080"></rect>
                              <rect x="116" y="29" width="12" height="10" fill="#C0C0C0"></rect>
                              <rect x="26" y="52" width="98" height="56" fill="#FFFFFF"></rect>
                              <rect x="32" y="84" width="60" height="14" fill="#000080"></rect>
                              <rect x="96" y="84" width="22" height="14" fill="#C0C0C0"></rect>
                              <path d="M96 92 V128 L104 120 L110 134 L116 131 L110 118 L120 118 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'VT323', monospace; font-size: 54px")}>
                              {"Retro-nimo"}
                            </div>
                            <div className="tg">
                              {"Best viewed at 800×600."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isSky ? (
                      <>
                        <div className="face front" style={css("color: #0C5A8A")}>
                          <div className="idx i-tl">
                            {"3"}
                            <svg viewBox="0 0 24 24">
                              <path d="M1 11 A11 9 0 0 1 23 11 Z" fill="currentColor"></path>
                              <path d="M1 11 L12 22 L23 11 M8 11 L12 22 L16 11" fill="none" stroke="currentColor" strokeWidth="1.4"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"3"}
                            <svg viewBox="0 0 24 24">
                              <path d="M1 11 A11 9 0 0 1 23 11 Z" fill="currentColor"></path>
                              <path d="M1 11 L12 22 L23 11 M8 11 L12 22 L16 11" fill="none" stroke="currentColor" strokeWidth="1.4"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #7EC8F2")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <ellipse cx="30" cy="118" rx="26" ry="9" fill="#FFFFFF"></ellipse>
                              <ellipse cx="122" cy="40" rx="22" ry="8" fill="#FFFFFF"></ellipse>
                              <path d="M24 62 A51 40 0 0 1 126 62 Z" fill="#E8512B"></path>
                              <path d="M24 62 Q42 52 58 62 Q75 50 92 62 Q108 52 126 62" fill="#FFD166"></path>
                              <path d="M24 62 L72 112 M58 62 L73 112 M92 62 L77 112 M126 62 L78 112" stroke="#0C2E47" strokeWidth="1.6"></path>
                              <circle cx="75" cy="112" r="7" fill="#0C2E47"></circle>
                              <path d="M75 118 V134 M75 124 L66 116 M75 124 L84 116 M75 134 L68 144 M75 134 L82 144" stroke="#0C2E47" strokeWidth="4" strokeLinecap="round"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Bungee', sans-serif; font-size: 36px")}>
                              {"GERONIMO!"}
                            </div>
                            <div className="tg">
                              {"Jump in. Scroll to fall."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isWrap ? (
                      <>
                        <div className="face front" style={css("color: #C8321F")}>
                          <div className="idx i-tl">
                            {"5"}
                            <svg viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" fill="currentColor"></circle>
                              <circle cx="8.5" cy="8.5" r="3" fill="#F6F1E7"></circle>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"5"}
                            <svg viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" fill="currentColor"></circle>
                              <circle cx="8.5" cy="8.5" r="3" fill="#F6F1E7"></circle>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background-color: #C9A06B; background-image: repeating-linear-gradient(90deg, rgba(110,70,30,.1) 0 1px, transparent 1px 7px)")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <rect x="22" y="40" width="106" height="84" rx="6" fill="#A97D49"></rect>
                              <rect x="22" y="40" width="106" height="84" rx="6" fill="none" stroke="#2A2118" strokeWidth="3"></rect>
                              <rect x="64" y="40" width="22" height="84" fill="#E6C98C"></rect>
                              <g fill="rgba(240,248,252,.55)" stroke="rgba(255,255,255,.9)" strokeWidth="1.5">
                                <circle cx="38" cy="58" r="9"></circle>
                                <circle cx="38" cy="82" r="9"></circle>
                                <circle cx="38" cy="106" r="9"></circle>
                                <circle cx="112" cy="58" r="9"></circle>
                                <circle cx="112" cy="82" r="9"></circle>
                                <circle cx="112" cy="106" r="9"></circle>
                                <circle cx="75" cy="20" r="9"></circle>
                                <circle cx="52" cy="22" r="7"></circle>
                                <circle cx="98" cy="22" r="7"></circle>
                              </g>
                              <g fill="#FFFFFF">
                                <circle cx="35" cy="55" r="2.5"></circle>
                                <circle cx="35" cy="79" r="2.5"></circle>
                                <circle cx="35" cy="103" r="2.5"></circle>
                                <circle cx="109" cy="55" r="2.5"></circle>
                                <circle cx="109" cy="79" r="2.5"></circle>
                                <circle cx="109" cy="103" r="2.5"></circle>
                                <circle cx="72" cy="17" r="2.5"></circle>
                              </g>
                              <text x="75" y="88" textAnchor="middle" fontFamily="Stardos Stencil, serif" fontWeight="700" fontSize="13" fill="#C8321F" transform="rotate(-90 75 82)">
                                {"FRAGILE"}
                              </text>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Archivo Black', sans-serif; font-size: 40px; color: #2A2118")}>
                              {"Wrap-hael"}
                            </div>
                            <div className="tg">
                              {"Packed with care. Pop to open."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isBurr ? (
                      <>
                        <div className="face front">
                          <div className="jk" style={css("left: 18px; top: 16px")}>
                            {"J"}
                            <br />
                            {"O"}
                            <br />
                            {"K"}
                            <br />
                            {"E"}
                            <br />
                            {"R"}
                          </div>
                          {" "}
                          <div className="jk" style={css("right: 18px; bottom: 16px; transform: rotate(180deg)")}>
                            {"J"}
                            <br />
                            {"O"}
                            <br />
                            {"K"}
                            <br />
                            {"E"}
                            <br />
                            {"R"}
                          </div>
                          {" "}
                          <div className="art" style={css("background: repeating-linear-gradient(90deg, #D9481F 0 28px, #FFF6E6 28px 56px)")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <circle cx="75" cy="75" r="62" fill="#FFF6E6" stroke="#2B1A12" strokeWidth="3"></circle>
                              <g transform="rotate(-20 75 75)">
                                <rect x="18" y="52" width="114" height="46" rx="23" fill="#F0C987" stroke="#2B1A12" strokeWidth="3"></rect>
                                <path d="M62 52 H109 A23 23 0 0 1 109 98 H62 Z" fill="#D5DADF" stroke="#2B1A12" strokeWidth="3"></path>
                                <path d="M72 56 L72 94 M84 54 L84 96 M96 54 L96 96" stroke="#FFFFFF" strokeWidth="3" opacity=".8"></path>
                                <circle cx="32" cy="66" r="3" fill="#7BC24F"></circle>
                                <circle cx="40" cy="80" r="3" fill="#D9481F"></circle>
                                <circle cx="30" cy="84" r="2.5" fill="#5A2E22"></circle>
                              </g>
                              <circle cx="98" cy="70" r="15" fill="#F2B33D" stroke="#2B1A12" strokeWidth="2.5"></circle>
                              <text x="98" y="74" textAnchor="middle" fontFamily="Lilita One, sans-serif" fontSize="11" fill="#2B1A12">
                                {"RGG"}
                              </text>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Lilita One', sans-serif; font-size: 42px; color: #D9481F")}>
                              {"Gab-urrito"}
                            </div>
                            <div className="tg">
                              {"Full stack, rolled tight."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isReel ? (
                      <>
                        <div className="face front" style={css("background: #EDEBE6")}>
                          <div className="jk" style={css("left: 18px; top: 16px; color: #111111; font-family: 'Limelight', serif")}>
                            {"J"}
                            <br />
                            {"O"}
                            <br />
                            {"K"}
                            <br />
                            {"E"}
                            <br />
                            {"R"}
                          </div>
                          {" "}
                          <div className="jk" style={css("right: 18px; bottom: 16px; transform: rotate(180deg); color: #111111; font-family: 'Limelight', serif")}>
                            {"J"}
                            <br />
                            {"O"}
                            <br />
                            {"K"}
                            <br />
                            {"E"}
                            <br />
                            {"R"}
                          </div>
                          {" "}
                          <div className="art" style={css("background: radial-gradient(ellipse at 50% 40%, #2A2A2A, #0B0B0B 75%)")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <circle cx="75" cy="72" r="54" fill="#1A1A1A" stroke="#D9D6CC" strokeWidth="4"></circle>
                              <circle cx="75" cy="72" r="10" fill="#D9D6CC"></circle>
                              <g fill="#0B0B0B" stroke="#D9D6CC" strokeWidth="2">
                                <circle cx="75" cy="40" r="13"></circle>
                                <circle cx="103" cy="58" r="13"></circle>
                                <circle cx="96" cy="94" r="13"></circle>
                                <circle cx="54" cy="94" r="13"></circle>
                                <circle cx="47" cy="58" r="13"></circle>
                              </g>
                              <path d="M118 104 Q140 120 128 146" fill="none" stroke="#D9D6CC" strokeWidth="10"></path>
                              <path d="M118 104 Q140 120 128 146" fill="none" stroke="#0B0B0B" strokeWidth="4" strokeDasharray="3 5"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Limelight', serif; font-size: 42px; color: #111111")}>
                              {"Gab-reel"}
                            </div>
                            <div className="tg">
                              {"One take. No retakes."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isDraft ? (
                      <>
                        <div className="face front" style={css("color: #1D3F73")}>
                          <div className="idx i-tl">
                            {"J"}
                            <svg viewBox="0 0 24 24">
                              <circle cx="12" cy="4" r="2.6" fill="currentColor"></circle>
                              <path d="M12 6 L5 22 M12 6 L19 22 M7.5 16 H16.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"J"}
                            <svg viewBox="0 0 24 24">
                              <circle cx="12" cy="4" r="2.6" fill="currentColor"></circle>
                              <path d="M12 6 L5 22 M12 6 L19 22 M7.5 16 H16.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background-color: #1D3F73; background-image: linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px); background-size: 20px 20px")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <g fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="24" y="34" width="102" height="72" rx="4"></rect>
                                <path d="M24 46 H126"></path>
                                <rect x="34" y="54" width="82" height="22"></rect>
                                <path d="M34 54 L116 76 M116 54 L34 76" strokeWidth="1.2"></path>
                                <rect x="34" y="82" width="24" height="16"></rect>
                                <rect x="63" y="82" width="24" height="16"></rect>
                                <rect x="92" y="82" width="24" height="16"></rect>
                              </g>
                              <g fill="none" stroke="#FFFFFF" strokeWidth="1.2">
                                <path d="M24 118 V128 M126 118 V128 M24 123 H126"></path>
                              </g>
                              <text x="75" y="140" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#FFFFFF">
                                {"1440 PX"}
                              </text>
                              <g transform="translate(112 14) rotate(20)">
                                <circle r="4" fill="#FFD65C"></circle>
                                <path d="M0 4 L-9 34 M0 4 L9 34" stroke="#FFD65C" strokeWidth="3" strokeLinecap="round"></path>
                              </g>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Josefin Sans', sans-serif; font-weight: 700; font-size: 36px; letter-spacing: .04em")}>
                              {"DRAFT-AEL"}
                            </div>
                            <div className="tg">
                              {"Measured twice, built once."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isCab ? (
                      <>
                        <div className="face front" style={css("color: #111111")}>
                          <div className="idx i-tl">
                            {"K"}
                            <svg viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2.6"></circle>
                              <circle cx="12" cy="12" r="2.6" fill="currentColor"></circle>
                              <path d="M3 11 H9.5 M14.5 11 H21 M12 14.5 V21" stroke="currentColor" strokeWidth="2.6"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"K"}
                            <svg viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2.6"></circle>
                              <circle cx="12" cy="12" r="2.6" fill="currentColor"></circle>
                              <path d="M3 11 H9.5 M14.5 11 H21 M12 14.5 V21" stroke="currentColor" strokeWidth="2.6"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #1B1E24")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <path d="M0 104 H150" stroke="#2E333E" strokeWidth="26"></path>
                              <path d="M0 104 H150" stroke="#454B58" strokeWidth="2" strokeDasharray="8 8"></path>
                              <path d="M24 92 L34 66 Q38 58 48 58 H102 Q112 58 116 66 L126 92 Z" fill="#FFC72C" stroke="#111111" strokeWidth="3" strokeLinejoin="round"></path>
                              <rect x="16" y="88" width="118" height="22" rx="8" fill="#FFC72C" stroke="#111111" strokeWidth="3"></rect>
                              <path d="M44 64 H70 V86 H38 Z M80 64 H106 L112 86 H80 Z" fill="#2A2A2A"></path>
                              <rect x="56" y="40" width="38" height="16" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="3"></rect>
                              <text x="75" y="52" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="11" fill="#111111">
                                {"TAXI"}
                              </text>
                              <rect x="16" y="96" width="118" height="6" fill="#111111"></rect>
                              <g fill="#111111">
                                <circle cx="42" cy="112" r="11"></circle>
                                <circle cx="108" cy="112" r="11"></circle>
                              </g>
                              <g fill="#8D919B">
                                <circle cx="42" cy="112" r="4"></circle>
                                <circle cx="108" cy="112" r="4"></circle>
                              </g>
                              <rect x="126" y="92" width="8" height="6" rx="2" fill="#FFF6C8"></rect>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Anton', sans-serif; font-size: 44px")}>
                              {"CAB-RIEL"}
                            </div>
                            <div className="tg">
                              {"Every shortcut to the front door."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isLab ? (
                      <>
                        <div className="face front" style={css("color: #1E8F55")}>
                          <div className="idx i-tl">
                            {"Q"}
                            <svg viewBox="0 0 24 24">
                              <path d="M9 2 H15 M10 2 V9 L4 20 Q3 22 5 22 H19 Q21 22 20 20 L14 9 V2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"></path>
                              <path d="M6.5 16 H17.5 L19.5 20.5 H4.5 Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"Q"}
                            <svg viewBox="0 0 24 24">
                              <path d="M9 2 H15 M10 2 V9 L4 20 Q3 22 5 22 H19 Q21 22 20 20 L14 9 V2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"></path>
                              <path d="M6.5 16 H17.5 L19.5 20.5 H4.5 Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #0B1416")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <defs>
                                <clipPath id="cardFlask">
                                  <path d="M60 16 H90 V60 L124 124 Q128 134 118 134 H32 Q22 134 26 124 L60 60 Z"></path>
                                </clipPath>
                              </defs>
                              <g clipPath="url(#cardFlask)">
                                <rect x="0" y="88" width="150" height="60" fill="#7CFFB2"></rect>
                                <rect x="0" y="88" width="150" height="5" fill="#B8FFD6"></rect>
                                <circle cx="62" cy="114" r="6" fill="#DFFFF0" opacity=".8"></circle>
                                <circle cx="84" cy="104" r="4" fill="#DFFFF0" opacity=".8"></circle>
                                <circle cx="96" cy="122" r="5" fill="#DFFFF0" opacity=".7"></circle>
                              </g>
                              <path d="M60 16 H90 V60 L124 124 Q128 134 118 134 H32 Q22 134 26 124 L60 60 Z" fill="none" stroke="#E6F2EE" strokeWidth="4" strokeLinejoin="round"></path>
                              <path d="M54 16 H96" stroke="#E6F2EE" strokeWidth="5" strokeLinecap="round"></path>
                              <circle cx="80" cy="6" r="4" fill="none" stroke="#7CFFB2" strokeWidth="2"></circle>
                              <circle cx="68" cy="-4" r="3" fill="none" stroke="#7CFFB2" strokeWidth="2"></circle>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Syne', sans-serif; font-weight: 800; font-size: 40px; color: #0B1416")}>
                              {"Lab-riel"}
                            </div>
                            <div className="tg">
                              {"It's alive. Mostly tested."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isValo ? (
                      <>
                        <div className="face front" style={css("color: #E23A4A")}>
                          <div className="idx i-tl">
                            {"Q"}
                            <svg viewBox="0 0 24 24">
                              <path d="M12 1 V8 M12 16 V23 M1 12 H8 M16 12 H23" stroke="currentColor" strokeWidth="2.6"></path>
                              <rect x="10.5" y="10.5" width="3" height="3" fill="currentColor"></rect>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"Q"}
                            <svg viewBox="0 0 24 24">
                              <path d="M12 1 V8 M12 16 V23 M1 12 H8 M16 12 H23" stroke="currentColor" strokeWidth="2.6"></path>
                              <rect x="10.5" y="10.5" width="3" height="3" fill="currentColor"></rect>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background-color: #0E161F; background-image: linear-gradient(rgba(237,230,218,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(237,230,218,.07) 1px, transparent 1px); background-size: 16px 16px")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <path d="M0 150 L150 30 L150 62 L40 150 Z" fill="#FF4B5C" opacity=".9"></path>
                              <circle cx="75" cy="68" r="38" fill="none" stroke="#EDE6DA" strokeWidth="2" opacity=".4"></circle>
                              <path d="M75 18 V46 M75 90 V118 M25 68 H53 M97 68 H125" stroke="#EDE6DA" strokeWidth="5"></path>
                              <rect x="72" y="65" width="6" height="6" fill="#FF4B5C"></rect>
                              <text x="75" y="142" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="14" letterSpacing="3" fill="#EDE6DA">
                                {"ROUND 1"}
                              </text>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 44px; text-transform: uppercase; color: #0E161F")}>
                              {"VALO-RAPH"}
                            </div>
                            <div className="tg">
                              {"Buy, plant, GG."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {c.isDomino ? (
                      <>
                        <div className="face front" style={css("color: #111111")}>
                          <div className="idx i-tl">
                            {"6"}
                            <svg viewBox="0 0 24 24">
                              <rect x="6" y="1" width="12" height="22" rx="2.5" fill="currentColor"></rect>
                              <rect x="7" y="11.5" width="10" height="1" fill="#F6F1E7"></rect>
                              <circle cx="12" cy="6" r="1.8" fill="#F6F1E7"></circle>
                              <circle cx="9.5" cy="16" r="1.5" fill="#F6F1E7"></circle>
                              <circle cx="14.5" cy="19" r="1.5" fill="#F6F1E7"></circle>
                            </svg>
                          </div>
                          {" "}
                          <div className="idx i-br">
                            {"6"}
                            <svg viewBox="0 0 24 24">
                              <rect x="6" y="1" width="12" height="22" rx="2.5" fill="currentColor"></rect>
                              <rect x="7" y="11.5" width="10" height="1" fill="#F6F1E7"></rect>
                              <circle cx="12" cy="6" r="1.8" fill="#F6F1E7"></circle>
                              <circle cx="9.5" cy="16" r="1.5" fill="#F6F1E7"></circle>
                              <circle cx="14.5" cy="19" r="1.5" fill="#F6F1E7"></circle>
                            </svg>
                          </div>
                          {" "}
                          <div className="art" style={css("background: #E9E2D2")}>
                            <svg viewBox="0 0 150 150" aria-hidden="true">
                              <rect x="0" y="128" width="150" height="4" fill="#111111"></rect>
                              <g transform="rotate(0 30 128)">
                                <rect x="16" y="58" width="28" height="70" rx="5" fill="#111111"></rect>
                                <circle cx="30" cy="76" r="4" fill="#F5F1E8"></circle>
                                <rect x="20" y="92" width="20" height="2" fill="#F5F1E8"></rect>
                                <circle cx="24" cy="106" r="3.5" fill="#F5F1E8"></circle>
                                <circle cx="36" cy="116" r="3.5" fill="#F5F1E8"></circle>
                              </g>
                              <g transform="rotate(28 92 128)">
                                <rect x="64" y="58" width="28" height="70" rx="5" fill="#111111"></rect>
                                <circle cx="72" cy="70" r="3.5" fill="#F5F1E8"></circle>
                                <circle cx="84" cy="84" r="3.5" fill="#F5F1E8"></circle>
                                <rect x="68" y="92" width="20" height="2" fill="#F5F1E8"></rect>
                                <circle cx="78" cy="110" r="4" fill="#F5F1E8"></circle>
                              </g>
                              <g transform="rotate(62 140 128)">
                                <rect x="112" y="58" width="28" height="70" rx="5" fill="#E4252B"></rect>
                                <circle cx="126" cy="76" r="4" fill="#F5F1E8"></circle>
                                <rect x="116" y="92" width="20" height="2" fill="#F5F1E8"></rect>
                                <circle cx="126" cy="110" r="4" fill="#F5F1E8"></circle>
                              </g>
                            </svg>
                          </div>
                          {" "}
                          <div className="cap">
                            <div className="nm" style={css("font-family: 'Rubik', sans-serif; font-weight: 800; font-size: 40px")}>
                              {"Gero-domino"}
                            </div>
                            <div className="tg">
                              {"One idea knocks over the next."}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </a>
            </React.Fragment>
          ))}
        </div>
        {" "}
        <div style={css("margin-top: 40px; display: flex; flex-direction: column; gap: 22px; align-items: center; text-align: center")}>
          <p aria-live="polite" style={css("margin: 0; min-height: 26px; font-family: 'Cinzel', serif; font-size: 17px; letter-spacing: 0.06em; color: #D8D2C4")}>
            {v.hint}
          </p>
          {" "}
          <div style={css("display: flex; flex-wrap: wrap; gap: 12px; justify-content: center")}>
            {v.canEnter ? (
              <>
                <button type="button" className="dbtn gold" onClick={v.enter}>
                  {"Step into "}{v.enterLabel}{" →"}
                </button>
              </>
            ) : null}
            {" "}
            {v.canTurnAll ? (
              <>
                <button type="button" className="dbtn line" onClick={v.turnAll}>
                  {"Turn them all"}
                </button>
              </>
            ) : null}
            {" "}
            <button type="button" className="dbtn line" onClick={v.reshuffle}>
              {"Deal three new cards"}
            </button>
          </div>
          {" "}
          <div style={css("display: flex; flex-direction: column; gap: 10px; align-items: center")}>
            <div className="tally" aria-hidden="true" style={css("display: flex; gap: 5px")}>
              {(v.tally || []).map((t, __i0) => (
                <React.Fragment key={__i0}>
                  <i className={t.cls}></i>
                </React.Fragment>
              ))}
            </div>
            {" "}
            <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #77736A")}>
              {v.tallyText}
            </span>
          </div>
        </div>
        {" "}
        <div className={`ov t-${v.ovId} ov-${v.ovId} ${v.ovOn}`} aria-hidden="true">
          <div className="dz">
            {v.dz.rough ? (
              <>
                <div className="ab fx fx-left" style={css("left: 0; top: 50%; width: 100%; height: 34vh; margin-top: -17vh; background: linear-gradient(90deg, transparent, rgba(246,235,216,.18) 70%, rgba(246,235,216,.32)); transition-duration: 1.4s; transition-delay: .25s")}></div>
                {" "}
                <div className="ab fx fx-left" style={css("left: 72%; top: 50%; width: 180px; height: 120px; margin-top: -60px; border-radius: 14px; background: #2B2B2B; box-shadow: inset 0 -26px 0 #C9A27A, 0 18px 30px rgba(0,0,0,.4); transition-duration: 1.4s; transition-delay: .25s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 10%; bottom: 10%; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 600; color: #3A1C0E; background: rgba(246,235,216,.85); padding: 6px 10px; border-radius: 6px; transition-delay: 0.40s")}>
                  {"P40"}
                </div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 26%; bottom: 10%; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 600; color: #3A1C0E; background: rgba(246,235,216,.85); padding: 6px 10px; border-radius: 6px; transition-delay: 0.56s")}>
                  {"P80"}
                </div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 42%; bottom: 10%; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 600; color: #3A1C0E; background: rgba(246,235,216,.85); padding: 6px 10px; border-radius: 6px; transition-delay: 0.72s")}>
                  {"P120"}
                </div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 58%; bottom: 10%; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 600; color: #3A1C0E; background: rgba(246,235,216,.85); padding: 6px 10px; border-radius: 6px; transition-delay: 0.88s")}>
                  {"P240"}
                </div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 74%; bottom: 10%; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 600; color: #3A1C0E; background: rgba(246,235,216,.85); padding: 6px 10px; border-radius: 6px; transition-delay: 1.04s")}>
                  {"P400"}
                </div>
              </>
            ) : null}
            {" "}
            {v.dz.sun ? (
              <>
                <div className="ab fx fx-spin" style={css("left: 50%; bottom: -700px; width: 1400px; height: 1400px; margin-left: -700px; border-radius: 50%; background: repeating-conic-gradient(rgba(232,162,30,.45) 0deg 6deg, transparent 6deg 15deg); transition-duration: 1.6s; transition-delay: .3s")}></div>
                {" "}
                <div className="ab fx fx-rise" style={css("left: 50%; bottom: -170px; width: 380px; height: 380px; margin-left: -190px; border-radius: 50%; background: #E8A21E; box-shadow: 0 0 0 26px rgba(255,236,170,.55), 0 0 200px #FFD36E; transition-duration: 1.3s; transition-delay: .25s")}></div>
                {" "}
                <div className="ab fx fx-rise" style={css("left: 6%; bottom: 0; width: 34vw; height: 22vw; background: #A86F2E; clip-path: polygon(50% 0, 100% 100%, 0 100%); transition-delay: .5s")}></div>
                {" "}
                <div className="ab fx fx-rise" style={css("right: 8%; bottom: 0; width: 24vw; height: 15vw; background: #8A5A24; clip-path: polygon(50% 0, 100% 100%, 0 100%); transition-delay: .62s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.rock ? (
              <>
                <div className="ab fx fx-drop" style={css("left: 50%; top: 8%; width: min(46vw, 360px); height: 78vh; margin-left: calc(min(46vw, 360px) / -2); background: #E9E0CC; transform-origin: 50% 0; box-shadow: 0 30px 60px rgba(0,0,0,.6); transition-duration: .55s; transition-delay: .3s; z-index: 0")}>
                  <div style={css("position: absolute; left: 8%; right: 8%; top: 6%; height: 36%; background: #B3121B")}></div>
                  {" "}
                  <div style={css("position: absolute; left: 8%; right: 8%; top: 46%; height: 4px; background: #161312")}></div>
                  {" "}
                  <div style={css("position: absolute; left: 8%; right: 8%; top: 52%; height: 4px; background: #161312; opacity: .5")}></div>
                  {" "}
                  <div style={css("position: absolute; left: 0; right: 0; bottom: 0; height: 12%; background: repeating-linear-gradient(90deg, #E9E0CC 0 18px, #CFC5AF 18px 20px)")}></div>
                  {" "}
                  <div style={css("position: absolute; left: 50%; top: -14px; width: 90px; height: 30px; margin-left: -45px; background: rgba(240,230,190,.7); transform: rotate(-4deg)")}></div>
                </div>
                {" "}
                <svg className="ab fx fx-drop" viewBox="0 0 100 200" style={css("left: 50%; top: 4%; width: 110px; margin-left: 200px; transition-duration: .45s; transition-delay: .75s")}>
                  <polygon points="60,0 10,110 45,110 30,200 90,80 55,80 75,0" fill="#FF3B3B"></polygon>
                </svg>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; bottom: 8%; margin-left: -130px; width: 260px; text-align: center; font-family: 'Metal Mania', serif; font-size: 46px; color: #161312; background: #FF3B3B; transform-origin: 50% 50%; transition-delay: 1s; rotate: -6deg")}>
                  {"TONIGHT"}
                </div>
              </>
            ) : null}
            {" "}
            {v.dz.rap ? (
              <>
                <div className="ab fx fx-drop" style={css("left: 50%; top: 0; margin-left: -60px; width: 120px; display: flex; flex-direction: column; align-items: center; transition-duration: .9s; transition-delay: .3s")}>
                  <div style={css("width: 4px; height: 13vh; background: #111111")}></div>
                  {" "}
                  <svg viewBox="0 0 80 170" style={css("width: 100px")} aria-hidden="true">
                    <rect x="8" y="0" width="64" height="74" rx="32" fill="#C9C9C9" stroke="#111111" strokeWidth="4"></rect>
                    <path d="M14 26h52M12 40h56M14 54h52M40 4v66" stroke="#7A7A7A" strokeWidth="3"></path>
                    <rect x="28" y="74" width="24" height="10" fill="#111111"></rect>
                    <path d="M30 84 L50 84 L46 168 L34 168 Z" fill="#222222" stroke="#111111" strokeWidth="3"></path>
                  </svg>
                </div>
                {" "}
                <div className="ab fx fx-ring" style={css("left: 50%; top: 22vh; width: 120px; height: 120px; margin-left: -60px; border-radius: 50%; border: 5px solid #FFE14D; transition-delay: 1s")}></div>
                {" "}
                <div className="ab fx fx-ring" style={css("left: 50%; top: 22vh; width: 120px; height: 120px; margin-left: -60px; border-radius: 50%; border: 5px solid #FF4FA3; transition-delay: 1.2s")}></div>
                {" "}
                <div className="ab" style={css("left: 0; right: 0; bottom: 0; height: 34vh; display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 0 4vw")}>
                  <div className="fx fx-gy" style={css("flex: 1; height: 40%; background: #FFE14D; transition-delay: .5s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 75%; background: #FF4FA3; transition-delay: .56s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 55%; background: #2EE6D6; transition-delay: .62s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 95%; background: #FFE14D; transition-delay: .68s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 60%; background: #FF4FA3; transition-delay: .74s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 85%; background: #2EE6D6; transition-delay: .8s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 45%; background: #FFE14D; transition-delay: .86s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 70%; background: #FF4FA3; transition-delay: .92s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 100%; background: #2EE6D6; transition-delay: .98s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 50%; background: #FFE14D; transition-delay: 1.04s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 80%; background: #FF4FA3; transition-delay: 1.1s")}></div>
                  {" "}
                  <div className="fx fx-gy" style={css("flex: 1; height: 35%; background: #2EE6D6; transition-delay: 1.16s")}></div>
                </div>
              </>
            ) : null}
            {" "}
            {v.dz.fail ? (
              <>
                <div className="ab fx fx-gx" style={css("left: 6%; top: 10%; white-space: nowrap; overflow: hidden; font-family: 'JetBrains Mono', monospace; font-size: clamp(13px, 1.6vw, 18px); color: #7BD389; transition-timing-function: steps(14); transition-duration: .5s; transition-delay: 0.25s")}>
                  {"$ tail -f rgg.log"}
                </div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 6%; top: 17%; white-space: nowrap; overflow: hidden; font-family: 'JetBrains Mono', monospace; font-size: clamp(13px, 1.6vw, 18px); color: #7BD389; transition-timing-function: steps(14); transition-duration: .5s; transition-delay: 0.47s")}>
                  {"[info] booting raphael.exe"}
                </div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 6%; top: 24%; white-space: nowrap; overflow: hidden; font-family: 'JetBrains Mono', monospace; font-size: clamp(13px, 1.6vw, 18px); color: #F2C46D; transition-timing-function: steps(14); transition-duration: .5s; transition-delay: 0.69s")}>
                  {"[warn] too many ideas in memory"}
                </div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 6%; top: 31%; white-space: nowrap; overflow: hidden; font-family: 'JetBrains Mono', monospace; font-size: clamp(13px, 1.6vw, 18px); color: #F2C46D; transition-timing-function: steps(14); transition-duration: .5s; transition-delay: 0.91s")}>
                  {"[warn] coffee level: low"}
                </div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 6%; top: 38%; white-space: nowrap; overflow: hidden; font-family: 'JetBrains Mono', monospace; font-size: clamp(13px, 1.6vw, 18px); color: #FF4D4D; transition-timing-function: steps(14); transition-duration: .5s; transition-delay: 1.13s")}>
                  {"[FATAL] portfolio failed successfully"}
                </div>
                {" "}
                <div className="ab fx fx-left" style={css("left: 0; right: 0; bottom: 14%; height: 5vh; background: #FF2E63; mix-blend-mode: screen; opacity: .5; transition-timing-function: steps(4); transition-delay: 1.2s")}></div>
                {" "}
                <div className="ab fx fx-right" style={css("left: 0; right: 0; bottom: 22%; height: 2vh; background: #2EF2FF; mix-blend-mode: screen; opacity: .45; transition-timing-function: steps(3); transition-delay: 1.3s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.over ? (
              <>
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 200px; height: 230px; margin: -115px 0 0 -100px; clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%); background: rgba(255,156,26,.25); transition-delay: .3s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 200px; height: 230px; margin: -295px 0 0 -205px; clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%); background: rgba(95,212,255,.22); transition-delay: .4s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 200px; height: 230px; margin: -295px 0 0 5px; clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%); background: rgba(95,212,255,.22); transition-delay: .48s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 200px; height: 230px; margin: -115px 0 0 110px; clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%); background: rgba(95,212,255,.22); transition-delay: .56s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 200px; height: 230px; margin: 65px 0 0 5px; clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%); background: rgba(95,212,255,.22); transition-delay: .64s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 200px; height: 230px; margin: 65px 0 0 -205px; clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%); background: rgba(95,212,255,.22); transition-delay: .72s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 200px; height: 230px; margin: -115px 0 0 -310px; clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%); background: rgba(95,212,255,.22); transition-delay: .8s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.god ? (
              <>
                <div className="ab fx fx-gyt" style={css("left: 50%; top: 0; width: 9vw; height: 100%; margin-left: -4.5vw; background: linear-gradient(rgba(233,196,106,0.38), rgba(233,196,106,0.26) 45%, transparent 92%); clip-path: polygon(32% 0,68% 0,100% 100%,0 100%); transition-duration: 1s; transition-delay: 0.30s")}></div>
                {" "}
                <div className="ab fx fx-gyt" style={css("left: 36%; top: 0; width: 7vw; height: 100%; margin-left: -3.5vw; background: linear-gradient(rgba(233,196,106,0.30), rgba(233,196,106,0.18) 45%, transparent 92%); clip-path: polygon(32% 0,68% 0,100% 100%,0 100%); transition-duration: 1s; transition-delay: 0.40s")}></div>
                {" "}
                <div className="ab fx fx-gyt" style={css("left: 64%; top: 0; width: 7vw; height: 100%; margin-left: -3.5vw; background: linear-gradient(rgba(233,196,106,0.30), rgba(233,196,106,0.18) 45%, transparent 92%); clip-path: polygon(32% 0,68% 0,100% 100%,0 100%); transition-duration: 1s; transition-delay: 0.40s")}></div>
                {" "}
                <div className="ab fx fx-gyt" style={css("left: 22%; top: 0; width: 6vw; height: 100%; margin-left: -3.0vw; background: linear-gradient(rgba(233,196,106,0.24), rgba(233,196,106,0.12) 45%, transparent 92%); clip-path: polygon(32% 0,68% 0,100% 100%,0 100%); transition-duration: 1s; transition-delay: 0.50s")}></div>
                {" "}
                <div className="ab fx fx-gyt" style={css("left: 78%; top: 0; width: 6vw; height: 100%; margin-left: -3.0vw; background: linear-gradient(rgba(233,196,106,0.24), rgba(233,196,106,0.12) 45%, transparent 92%); clip-path: polygon(32% 0,68% 0,100% 100%,0 100%); transition-duration: 1s; transition-delay: 0.50s")}></div>
                {" "}
                <div className="ab fx fx-fade" style={css("left: 50%; top: 50%; width: 640px; height: 640px; margin: -320px 0 0 -320px; border-radius: 50%; background: radial-gradient(circle, rgba(233,196,106,.28), rgba(233,196,106,.08) 40%, transparent 68%); transition-duration: 1.2s; transition-delay: .55s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 360px; height: 360px; margin: -180px 0 0 -180px; border-radius: 50%; border: 3px solid #E9C46A; box-shadow: 0 0 60px rgba(233,196,106,.6), inset 0 0 40px rgba(233,196,106,.3); transition-delay: .7s")}></div>
                {" "}
                <div className="ab fx fx-spin" style={css("left: 50%; top: 50%; width: 400px; height: 400px; margin: -200px 0 0 -200px; border-radius: 50%; border: 1.5px dashed rgba(233,196,106,.55); transition-duration: 1.6s; transition-delay: .75s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 440px; height: 440px; margin: -220px 0 0 -220px; border-radius: 50%; border: 1px solid rgba(233,196,106,.3); transition-delay: .85s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 18%; top: 0; width: 4px; height: 4px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 2.2s; transition-delay: 0.40s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 27%; top: 0; width: 3px; height: 3px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 2.6s; transition-delay: 0.49s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 35%; top: 0; width: 5px; height: 5px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 3.0s; transition-delay: 0.58s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 44%; top: 0; width: 3px; height: 3px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 2.2s; transition-delay: 0.67s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 56%; top: 0; width: 4px; height: 4px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 2.6s; transition-delay: 0.76s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 63%; top: 0; width: 3px; height: 3px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 3.0s; transition-delay: 0.85s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 71%; top: 0; width: 5px; height: 5px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 2.2s; transition-delay: 0.94s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 80%; top: 0; width: 3px; height: 3px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 2.6s; transition-delay: 1.03s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 40%; top: 0; width: 2px; height: 2px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 3.0s; transition-delay: 1.12s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 60%; top: 0; width: 2px; height: 2px; border-radius: 50%; background: #F3E2B8; box-shadow: 0 0 10px #E9C46A; transition-duration: 2.2s; transition-delay: 1.21s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.grab ? (
              <>
                <div className="ab fx fx-gyt" style={css("left: 50%; top: 0; width: 5px; height: 26vh; margin-left: -2px; background: #EDEDED; transition-delay: .3s")}></div>
                {" "}
                <div className="ab fx fx-drop" style={css("left: 50%; top: 26vh; margin-left: -45px; width: 90px; display: flex; flex-direction: column; align-items: center; transition-delay: .3s")}>
                  <div style={css("width: 90px; height: 22px; background: #C0C0C8; border-radius: 6px")}></div>
                  <div style={css("display: flex; gap: 40px")}>
                    <div style={css("width: 10px; height: 48px; background: #C0C0C8; transform: rotate(-8deg)")}></div>
                    <div style={css("width: 10px; height: 48px; background: #C0C0C8; transform: rotate(8deg)")}></div>
                  </div>
                  <div style={css("width: 80px; height: 80px; margin-top: -24px; border-radius: 50%; background: linear-gradient(#FFD23F 50%, #FFFFFF 50%); border: 4px solid #2B1055")}></div>
                </div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 12%; bottom: 8%; width: 110px; height: 110px; border-radius: 50%; background: linear-gradient(#3EE0FF 50%, #FFFFFF 50%); border: 4px solid #2B1055; transition-delay: .6s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("right: 12%; bottom: 10%; width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(#7CFF6B 50%, #FFFFFF 50%); border: 4px solid #2B1055; transition-delay: .7s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.hero ? (
              <>
                <div className="ab fx fx-gx" style={css("left: 0; top: 20%; width: 40vw; height: 10px; background: #111111; transition-delay: .4s")}></div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 0; top: 30%; width: 28vw; height: 6px; background: #111111; transition-delay: .48s")}></div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 0; top: 72%; width: 34vw; height: 8px; background: #111111; transition-delay: .56s")}></div>
                {" "}
                <div className="ab fx fx-spin" style={css("right: 6%; top: 8%; width: 300px; height: 300px; background: #111111; clip-path: polygon(50% 0%,59% 22%,82% 8%,74% 32%,100% 32%,79% 50%,100% 68%,74% 68%,82% 92%,59% 78%,50% 100%,41% 78%,18% 92%,26% 68%,0% 68%,21% 50%,0% 32%,26% 32%,18% 8%,41% 22%); display: flex; align-items: center; justify-content: center; transition-delay: .7s")}>
                  <div style={css("width: 280px; height: 280px; background: #E4252B; clip-path: polygon(50% 0%,59% 22%,82% 8%,74% 32%,100% 32%,79% 50%,100% 68%,74% 68%,82% 92%,59% 78%,50% 100%,41% 78%,18% 92%,26% 68%,0% 68%,21% 50%,0% 32%,26% 32%,18% 8%,41% 22%); display: flex; align-items: center; justify-content: center; font-family: 'Bangers', sans-serif; font-size: 64px; color: #FFFFFF; letter-spacing: .04em")}>
                    {"POW!"}
                  </div>
                </div>
              </>
            ) : null}
            {" "}
            {v.dz.retro ? (
              <>
                <div className="ab fx fx-pop" style={css("left: 50%; bottom: 12%; width: 420px; margin-left: -210px; background: #C0C0C0; border: 3px solid; border-color: #FFFFFF #404040 #404040 #FFFFFF; transition-timing-function: steps(5); transition-delay: .5s")}>
                  <div style={css("background: #000080; color: #FFFFFF; font-family: 'VT323', monospace; font-size: 20px; padding: 4px 8px; text-align: left")}>
                    {"Loading retro-nimo.exe"}
                  </div>
                  {" "}
                  <div style={css("margin: 14px; height: 26px; background: #FFFFFF; border: 2px solid; border-color: #404040 #FFFFFF #FFFFFF #404040; overflow: hidden")}>
                    <div className="fx fx-gx" style={css("height: 100%; background: repeating-linear-gradient(90deg, #000080 0 18px, transparent 18px 22px); transition-duration: 1.2s; transition-timing-function: steps(10); transition-delay: .7s")}></div>
                  </div>
                </div>
              </>
            ) : null}
            {" "}
            {v.dz.sky ? (
              <>
                <div className="ab fx fx-right" style={css("left: 8%; top: 18%; width: 260px; height: 70px; border-radius: 999px; background: #FFFFFF; transition-duration: 1.4s; transition-delay: .3s")}></div>
                {" "}
                <div className="ab fx fx-left" style={css("right: 6%; top: 64%; width: 320px; height: 84px; border-radius: 999px; background: #FFFFFF; transition-duration: 1.4s; transition-delay: .4s")}></div>
                {" "}
                <svg className="ab fx fx-fall" viewBox="0 0 200 160" style={css("left: 50%; top: 0; width: 220px; margin-left: 140px; transition-delay: .35s")} aria-hidden="true">
                  <circle cx="100" cy="40" r="18" fill="#0C2E47"></circle>
                  <path d="M100 58 L100 108" stroke="#E8512B" strokeWidth="20" strokeLinecap="round"></path>
                  <path d="M92 66 L40 40 M108 66 L160 40" stroke="#0C2E47" strokeWidth="10" strokeLinecap="round"></path>
                  <path d="M94 106 L60 146 M106 106 L140 146" stroke="#0C2E47" strokeWidth="11" strokeLinecap="round"></path>
                </svg>
                {" "}
                <div className="ab fx fx-up" style={css("left: 12%; top: 0; width: 3px; height: 22vh; border-radius: 3px; background: rgba(255,255,255,.75); transition-duration: .9s; transition-delay: 0.20s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 24%; top: 0; width: 3px; height: 22vh; border-radius: 3px; background: rgba(255,255,255,.75); transition-duration: .9s; transition-delay: 0.27s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 37%; top: 0; width: 3px; height: 22vh; border-radius: 3px; background: rgba(255,255,255,.75); transition-duration: .9s; transition-delay: 0.34s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 63%; top: 0; width: 3px; height: 22vh; border-radius: 3px; background: rgba(255,255,255,.75); transition-duration: .9s; transition-delay: 0.41s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 76%; top: 0; width: 3px; height: 22vh; border-radius: 3px; background: rgba(255,255,255,.75); transition-duration: .9s; transition-delay: 0.48s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 88%; top: 0; width: 3px; height: 22vh; border-radius: 3px; background: rgba(255,255,255,.75); transition-duration: .9s; transition-delay: 0.55s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 30%; top: 0; width: 3px; height: 22vh; border-radius: 3px; background: rgba(255,255,255,.75); transition-duration: .9s; transition-delay: 0.62s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 70%; top: 0; width: 3px; height: 22vh; border-radius: 3px; background: rgba(255,255,255,.75); transition-duration: .9s; transition-delay: 0.69s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.wrap ? (
              <>
                <div className="ab wb fx fx-pop" style={css("left: 4%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.67s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 15%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 26%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 37%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 48%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.39s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 59%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 70%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 81%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 92%; top: 6%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.67s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 4%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 15%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 26%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 37%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.39s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 48%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.32s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 59%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.39s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 70%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 81%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 92%; top: 25%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 4%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 15%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 26%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.39s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 37%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.32s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 48%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.25s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 59%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.32s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 70%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.39s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 81%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 92%; top: 44%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 4%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 15%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 26%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 37%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.39s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 48%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.32s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 59%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.39s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 70%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 81%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 92%; top: 63%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 4%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.67s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 15%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 26%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 37%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 48%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.39s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 59%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 70%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.53s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 81%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab wb fx fx-pop" style={css("left: 92%; top: 82%; width: 8vw; height: 8vw; max-width: 110px; max-height: 110px; transition-delay: 0.67s")}></div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 0; right: 0; top: 50%; height: 74px; margin-top: -150px; background: #E6C98C; box-shadow: 0 3px 10px rgba(60,40,10,.3); transform-origin: 0 50%; transition-delay: .9s; display: flex; align-items: center; overflow: hidden; white-space: nowrap; font-family: 'Stardos Stencil', serif; font-weight: 700; font-size: 30px; letter-spacing: .2em; color: #C8321F")}>
                  {"FRAGILE · HANDLE WITH CARE · FRAGILE · HANDLE WITH CARE · FRAGILE · HANDLE WITH CARE"}
                </div>
              </>
            ) : null}
            {" "}
            {v.dz.burr ? (
              <>
                <div className="ab fx fx-drop" style={css("left: 0; right: 0; top: 0; height: 90px; background: repeating-linear-gradient(90deg, #D9481F 0 80px, #FFF6E6 80px 160px); box-shadow: 0 6px 10px rgba(60,20,0,.2); transition-delay: .3s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 4%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #F4EBD8; transition-delay: 0.30s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 41%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #5A2E22; transition-delay: 0.38s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 78%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #3F8A3A; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 23%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #D9481F; transition-delay: 0.54s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 60%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #F2B33D; transition-delay: 0.62s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 5%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #7BC24F; transition-delay: 0.70s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 42%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #F4EBD8; transition-delay: 0.30s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 79%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #5A2E22; transition-delay: 0.38s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 24%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #3F8A3A; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 61%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #D9481F; transition-delay: 0.54s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 6%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #F2B33D; transition-delay: 0.62s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 43%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #7BC24F; transition-delay: 0.70s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 80%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #F4EBD8; transition-delay: 0.30s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 25%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #5A2E22; transition-delay: 0.38s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 62%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #3F8A3A; transition-delay: 0.46s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 7%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #D9481F; transition-delay: 0.54s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 44%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #F2B33D; transition-delay: 0.62s")}></div>
                {" "}
                <div className="ab fx fx-fall" style={css("left: 81%; top: 0; width: 34px; height: 26px; border-radius: 40%; background: #7BC24F; transition-delay: 0.70s")}></div>
                {" "}
                <div className="ab fx fx-spin" style={css("left: 50%; top: 50%; width: 46vmin; height: 46vmin; margin: -23vmin 0 0 -23vmin; border-radius: 50%; background: radial-gradient(circle at 30% 30%, rgba(160,90,30,.35) 0 6px, transparent 7px), radial-gradient(circle at 66% 64%, rgba(160,90,30,.3) 0 8px, transparent 9px), radial-gradient(circle, #F6DCA6 0 60%, #EBC27E 100%); z-index: 0; opacity: .9; transition-delay: .25s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.reel ? (
              <>
                <div className="ab fx fx-left" style={css("left: 0; right: 0; top: 4%; height: 54px; background: #1A1A1A radial-gradient(circle at 12px 10px, #0B0B0B 5px, transparent 5.5px) 0 0 / 26px 20px repeat-x; border-top: 2px solid #333333; border-bottom: 2px solid #333333; transition-delay: .3s")}></div>
                {" "}
                <div className="ab fx fx-right" style={css("left: 0; right: 0; bottom: 4%; height: 54px; background: #1A1A1A radial-gradient(circle at 12px 10px, #0B0B0B 5px, transparent 5.5px) 0 0 / 26px 20px repeat-x; border-top: 2px solid #333333; border-bottom: 2px solid #333333; transition-delay: .3s")}></div>
                {" "}
                <div className="ab fx fx-spin" style={css("left: 50%; top: 50%; width: 64vmin; height: 64vmin; margin: -32vmin 0 0 -32vmin; border-radius: 50%; border: 3px solid rgba(217,214,204,.5); background: conic-gradient(rgba(242,240,234,.12) 0 90deg, transparent 90deg); z-index: 0; transition-duration: 1.4s; transition-delay: .2s")}></div>
                {" "}
                <div className="ab fx fx-fade" style={css("left: 50%; top: 0; bottom: 0; width: 2px; background: rgba(217,214,204,.35); transition-delay: .5s")}></div>
                {" "}
                <div className="ab fx fx-fade" style={css("top: 50%; left: 0; right: 0; height: 2px; background: rgba(217,214,204,.35); transition-delay: .5s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.draft ? (
              <>
                <div className="ab fx fx-gx" style={css("left: 8%; width: 84%; top: 20%; height: 2px; background: #FFFFFF; transition-delay: 0.3s")}></div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 8%; width: 84%; top: 80%; height: 2px; background: #FFFFFF; transition-delay: 0.45s")}></div>
                {" "}
                <div className="ab fx fx-gyt" style={css("left: 14%; top: 10%; height: 80%; width: 2px; background: #FFFFFF; transition-delay: 0.4s")}></div>
                {" "}
                <div className="ab fx fx-gyt" style={css("left: 86%; top: 10%; height: 80%; width: 2px; background: #FFFFFF; transition-delay: 0.55s")}></div>
                {" "}
                <div className="ab fx fx-fade" style={css("left: 50%; top: 16%; margin-left: -120px; width: 240px; text-align: center; font-family: 'Space Grotesk', sans-serif; font-size: 13px; letter-spacing: .2em; color: #DCE6F5; transition-delay: .7s")}>
                  {"← 3 NAMES · 1 BUILDER →"}
                </div>
                {" "}
                <div className="ab fx fx-spin" style={css("right: 9%; bottom: 10%; width: 120px; height: 120px; border: 2px dashed #FFD65C; border-radius: 50%; transition-delay: .6s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.cab ? (
              <>
                <div className="ab fx fx-gx" style={css("left: 0; right: 0; top: 0; height: 26px; background: conic-gradient(#111111 25%, #FFC72C 0 50%, #111111 0 75%, #FFC72C 0) 0 0 / 26px 26px; transition-delay: .4s")}></div>
                {" "}
                <div className="ab fx fx-gx" style={css("left: 0; right: 0; bottom: 0; height: 26px; background: conic-gradient(#111111 25%, #FFC72C 0 50%, #111111 0 75%, #FFC72C 0) 0 0 / 26px 26px; transition-delay: .5s")}></div>
                {" "}
                <div className="ab fx fx-left" style={css("left: 0; right: 0; top: 74%; height: 6px; background: repeating-linear-gradient(90deg, #111111 0 60px, transparent 60px 110px); transition-delay: .35s; transition-duration: 1.2s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 14%; margin-left: -90px; width: 180px; height: 56px; border: 4px solid #111111; border-radius: 14px 14px 4px 4px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Anton', sans-serif; font-size: 30px; letter-spacing: .1em; color: #111111; box-shadow: 0 0 40px rgba(255,255,255,.9); transition-delay: .7s")}>
                  {"HIRED"}
                </div>
              </>
            ) : null}
            {" "}
            {v.dz.lab ? (
              <>
                <div className="ab fx fx-up" style={css("left: 8%; top: 0; width: 40px; height: 40px; border-radius: 50%; border: 3px solid #4FE3FF; box-shadow: 0 0 18px #4FE3FF; transition-duration: 1.4s; transition-delay: 0.30s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 17%; top: 0; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #FF4FD8; box-shadow: 0 0 18px #FF4FD8; transition-duration: 1.7s; transition-delay: 0.36s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 26%; top: 0; width: 56px; height: 56px; border-radius: 50%; border: 3px solid #FFB547; box-shadow: 0 0 18px #FFB547; transition-duration: 2.0s; transition-delay: 0.42s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 36%; top: 0; width: 28px; height: 28px; border-radius: 50%; border: 3px solid #7CFFB2; box-shadow: 0 0 18px #7CFFB2; transition-duration: 1.4s; transition-delay: 0.48s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 47%; top: 0; width: 44px; height: 44px; border-radius: 50%; border: 3px solid #4FE3FF; box-shadow: 0 0 18px #4FE3FF; transition-duration: 1.7s; transition-delay: 0.54s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 58%; top: 0; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #FF4FD8; box-shadow: 0 0 18px #FF4FD8; transition-duration: 2.0s; transition-delay: 0.60s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 66%; top: 0; width: 60px; height: 60px; border-radius: 50%; border: 3px solid #FFB547; box-shadow: 0 0 18px #FFB547; transition-duration: 1.4s; transition-delay: 0.66s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 76%; top: 0; width: 30px; height: 30px; border-radius: 50%; border: 3px solid #7CFFB2; box-shadow: 0 0 18px #7CFFB2; transition-duration: 1.7s; transition-delay: 0.72s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 86%; top: 0; width: 48px; height: 48px; border-radius: 50%; border: 3px solid #4FE3FF; box-shadow: 0 0 18px #4FE3FF; transition-duration: 2.0s; transition-delay: 0.78s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 93%; top: 0; width: 20px; height: 20px; border-radius: 50%; border: 3px solid #FF4FD8; box-shadow: 0 0 18px #FF4FD8; transition-duration: 1.4s; transition-delay: 0.84s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 31%; top: 0; width: 18px; height: 18px; border-radius: 50%; border: 3px solid #FFB547; box-shadow: 0 0 18px #FFB547; transition-duration: 1.7s; transition-delay: 0.90s")}></div>
                {" "}
                <div className="ab fx fx-up" style={css("left: 71%; top: 0; width: 16px; height: 16px; border-radius: 50%; border: 3px solid #7CFFB2; box-shadow: 0 0 18px #7CFFB2; transition-duration: 2.0s; transition-delay: 0.96s")}></div>
                {" "}
                <div className="ab fx fx-gy" style={css("left: 0; right: 0; bottom: 0; height: 26vh; background: linear-gradient(transparent, rgba(124,255,178,.35)); transition-delay: .35s")}></div>
              </>
            ) : null}
            {" "}
            {v.dz.valo ? (
              <>
                <div className="ab fx fx-left" style={css("left: -10%; top: 30%; width: 120%; height: 18vh; background: #FF4B5C; transform-origin: 50% 50%; rotate: -8deg; transition-delay: .25s; z-index: 0")}></div>
                {" "}
                <div className="ab fx fx-right" style={css("left: -10%; top: 56%; width: 120%; height: 3px; background: #EDE6DA; rotate: -8deg; transition-delay: .4s")}></div>
                {" "}
                <div className="ab fx fx-pop" style={css("left: 50%; top: 50%; width: 180px; height: 180px; margin: -90px 0 0 -90px; transition-delay: .55s")}>
                  <div style={css("position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; margin-left: -2px; background: linear-gradient(#EDE6DA 0 38%, transparent 38% 62%, #EDE6DA 62%)")}></div>
                  {" "}
                  <div style={css("position: absolute; top: 50%; left: 0; right: 0; height: 4px; margin-top: -2px; background: linear-gradient(90deg, #EDE6DA 0 38%, transparent 38% 62%, #EDE6DA 62%)")}></div>
                </div>
                {" "}
                <div className="ab fx fx-ring" style={css("left: 50%; top: 50%; width: 120px; height: 120px; margin: -60px 0 0 -60px; border: 3px solid #FF4B5C; transition-delay: .9s")}></div>
                {" "}
                <div className="ab fx fx-fade" style={css("left: 0; right: 0; top: 12%; text-align: center; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 20px; letter-spacing: .4em; color: #EDE6DA; transition-delay: .6s")}>
                  {"ROUND 1 · BUY PHASE"}
                </div>
              </>
            ) : null}
            {" "}
            {v.dz.domino ? (
              <>
                <div className="ab" style={css("left: 4%; right: 4%; bottom: 12%; display: flex; justify-content: center; align-items: flex-end; gap: 1.6vw")}>
                  <div className="fx fx-tip" style={css("width: 2vw; height: 4vw; background: #E4252B; border-radius: 6px; transition-delay: 0.45s")}></div>
                  {" "}
                  <div className="fx fx-tip" style={css("width: 2.4vw; height: 5vw; background: #E4252B; border-radius: 6px; transition-delay: 0.58s")}></div>
                  {" "}
                  <div className="fx fx-tip" style={css("width: 2.9vw; height: 6vw; background: #E4252B; border-radius: 6px; transition-delay: 0.71s")}></div>
                  {" "}
                  <div className="fx fx-tip" style={css("width: 3.5vw; height: 7.4vw; background: #E4252B; border-radius: 6px; transition-delay: 0.84s")}></div>
                  {" "}
                  <div className="fx fx-tip" style={css("width: 4.3vw; height: 9vw; background: #E4252B; border-radius: 6px; transition-delay: 0.97s")}></div>
                  {" "}
                  <div className="fx fx-tip" style={css("width: 5.2vw; height: 11vw; background: #E4252B; border-radius: 6px; transition-delay: 1.10s")}></div>
                  {" "}
                  <div className="fx fx-tip" style={css("width: 6.4vw; height: 13.5vw; background: #E4252B; border-radius: 6px; transition-delay: 1.23s")}></div>
                  {" "}
                  <div className="fx fx-pop" style={css("width: 15vw; height: 24vw; max-width: 200px; max-height: 320px; background: #111111; border: 4px solid #111111; border-radius: 18px; box-shadow: inset 0 0 0 6px #111111, inset 0 0 0 8px rgba(245,241,232,.4); display: flex; flex-direction: column; align-items: center; justify-content: space-around; transition-delay: 1.45s")}>
                    <div style={css("display: grid; grid-template-columns: repeat(2, 1.6vw); gap: 1vw")}>
                      <span style={css("width: 1.6vw; height: 1.6vw; border-radius: 50%; background: #F5F1E8")}></span>
                      <span style={css("width: 1.6vw; height: 1.6vw; border-radius: 50%; background: #F5F1E8")}></span>
                      <span style={css("width: 1.6vw; height: 1.6vw; border-radius: 50%; background: #F5F1E8")}></span>
                      <span style={css("width: 1.6vw; height: 1.6vw; border-radius: 50%; background: #F5F1E8")}></span>
                    </div>
                    {" "}
                    <div style={css("width: 70%; height: 3px; background: #F5F1E8")}></div>
                    {" "}
                    <div style={css("width: 1.8vw; height: 1.8vw; border-radius: 50%; background: #E4252B")}></div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          {" "}
          <div className="tag">
            {v.ovTag}
          </div>
          {" "}
          <div className="nm ovn">
            <span style={css("display: block")}>
              {v.ovN1}
            </span>
            <span style={css("display: block")}>
              {v.ovN2}
            </span>
          </div>
          {" "}
          <div className="ovl">
            {"Entering "}{v.ovLabel}{"…"}
          </div>
        </div>
        {" "}
        <a href={v.goHref} ref={v.goRef} tabIndex="-1" aria-hidden="true" style={css("display: none")}>
          {"go"}
        </a>
      </div>
      </>
    );
  }
}
