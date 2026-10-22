'use client';
// Generated from the Default design. Edit freely: it is plain React now.
import React from 'react';
import { C, css, shot, up, nospace } from '../../lib/runtime';

const STYLES = "\nbody{margin:0;background:#F7F7F5}\na{color:#121212}a:hover{color:#2F4BFF}\n.btn-solid:hover{background:#121212 !important;color:#FFFFFF !important}\n.btn-line:hover{background:#121212 !important;color:#F7F7F5 !important}\n.proj:hover{border-color:#2F4BFF !important;transform:translateY(-4px)}\n.proj{transition:transform .2s ease,border-color .2s ease}\n.alias:hover{background:#2F4BFF !important;color:#FFFFFF !important;border-color:#2F4BFF !important}\n";
const FONTS = ["https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap"];

export default class Professional extends React.Component {
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
      <div style={css("min-height: 100vh; background: #F7F7F5; color: #121212; font-family: 'Space Grotesk', system-ui, sans-serif")}>
        <div style={css("background: #121212; color: #F7F7F5; font-size: 14px; padding: 10px 24px; display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: center; align-items: center")}>
          <span>
            {"You're viewing the professional version."}
          </span>
          {" "}
          <a href="/" style={css("color: #9FB0FF; text-decoration: underline; text-underline-offset: 3px; padding: 6px 0")}>
            {"Deal me the theme cards →"}
          </a>
        </div>
        {" "}
        <div style={css("max-width: 1200px; margin: 0 auto; padding: 0 24px")}>
          <nav style={css("display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: center; padding: 24px 0")}>
            <a href="#top" style={css("font-weight: 700; font-size: 18px; text-decoration: none; letter-spacing: -0.01em")}>
              {"Raphael"}
              <span style={css("color: #2F4BFF")}>
                {"."}
              </span>
              {"Geronimo"}
            </a>
            {" "}
            <div style={css("display: flex; flex-wrap: wrap; gap: 8px 28px; align-items: center; font-size: 15px")}>
              <a href="#work" style={css("text-decoration: none; padding: 10px 0")}>
                {"Work"}
              </a>
              {" "}
              <a href="#about" style={css("text-decoration: none; padding: 10px 0")}>
                {"About"}
              </a>
              {" "}
              <a href="#venture" style={css("text-decoration: none; padding: 10px 0")}>
                {"Venture"}
              </a>
              {" "}
              <a href="#contact" className="btn-solid" style={css("text-decoration: none; background: #2F4BFF; color: #FFFFFF; padding: 12px 20px; border-radius: 999px; font-weight: 500")}>
                {"Let's talk"}
              </a>
            </div>
          </nav>
          {" "}
          <section id="top" style={css("display: flex; flex-wrap: wrap; gap: 48px; align-items: center; padding: 72px 0 88px")}>
            <div style={css("flex: 999 1 560px; min-width: 0; display: flex; flex-direction: column; gap: 28px")}>
              <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; color: #5C5C66")}>
                {"Full-stack developer · Founder · Tech geek"}
              </div>
              {" "}
              <h1 style={css("margin: 0; font-size: clamp(52px, 8vw, 112px); line-height: 0.92; letter-spacing: -0.045em; font-weight: 700")}>
                {"Raphael"}
                <br />
                {"Gabriel"}
                <br />
                {"Geronimo"}
                <span style={css("color: #2F4BFF")}>
                  {"."}
                </span>
              </h1>
              {" "}
              <p style={css("margin: 0; font-size: 21px; line-height: 1.5; color: #3A3A42; max-width: 560px")}>
                {"I build products end to end — from the database to the last pixel — and run "}{C.company.name}{" so they reach real customers."}
              </p>
              {" "}
              <div style={css("display: flex; flex-wrap: wrap; gap: 12px")}>
                <a href="#work" className="btn-solid" style={css("text-decoration: none; background: #2F4BFF; color: #FFFFFF; padding: 15px 26px; border-radius: 999px; font-weight: 500")}>
                  {"See selected work"}
                </a>
                {" "}
                <a href="#contact" className="btn-line" style={css("text-decoration: none; border: 1.5px solid #121212; padding: 14px 26px; border-radius: 999px; font-weight: 500")}>
                  {"Get in touch"}
                </a>
              </div>
            </div>
            {" "}
            <div style={css("flex: 1 1 360px; min-width: 0; background: #121212; color: #E6E6EA; border-radius: 16px; padding: 24px; font-family: 'JetBrains Mono', monospace; font-size: 14px; line-height: 1.8; box-shadow: 0 30px 60px rgba(18,18,18,.18)")}>
              <div style={css("display: flex; gap: 8px; margin-bottom: 16px")}>
                <span style={css("width: 12px; height: 12px; border-radius: 50%; background: #FF5F57")}></span>
                <span style={css("width: 12px; height: 12px; border-radius: 50%; background: #FEBC2E")}></span>
                <span style={css("width: 12px; height: 12px; border-radius: 50%; background: #28C840")}></span>
              </div>
              {" "}
              <div>
                <span style={css("color: #9FB0FF")}>
                  {"const"}
                </span>
                {" raphael = {"}
              </div>
              {" "}
              <div style={css("padding-left: 20px")}>
                {"role: "}
                <span style={css("color: #A7E3A1")}>
                  {"'full-stack dev'"}
                </span>
                {","}
              </div>
              {" "}
              <div style={css("padding-left: 20px")}>
                {"also: "}
                <span style={css("color: #A7E3A1")}>
                  {"'founder'"}
                </span>
                {","}
              </div>
              {" "}
              <div style={css("padding-left: 20px")}>
                {"stack: "}
                <span style={css("color: #A7E3A1")}>
                  {"'[your stack]'"}
                </span>
                {","}
              </div>
              {" "}
              <div style={css("padding-left: 20px")}>
                {"based: "}
                <span style={css("color: #A7E3A1")}>
                  {"'"}{C.city}{"'"}
                </span>
                {","}
              </div>
              {" "}
              <div style={css("padding-left: 20px")}>
                {"raphaels: "}
                <span style={css("color: #F5C77E")}>
                  {"18"}
                </span>
                {","}
              </div>
              {" "}
              <div>
                {"};"}
              </div>
              {" "}
              <div style={css("color: #8E8E99; margin-top: 8px")}>
                {"// open to: [freelance / partnerships / roles]"}
              </div>
            </div>
          </section>
        </div>
        {" "}
        <section aria-label="The Raphaels" style={css("border-top: 1px solid #DCDCD6; border-bottom: 1px solid #DCDCD6; padding: 20px 24px")}>
          <div style={css("max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 10px 12px; align-items: center")}>
            <span style={css("font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #5C5C66; margin-right: 8px")}>
              {"The other Raphaels"}
            </span>
            {" "}
            <a href="/rough-phael" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Rough-phael"}
            </a>
            {" "}
            <a href="/ra-phael" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Ra-phael"}
            </a>
            {" "}
            <a href="/rock-phael" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Rock-phael"}
            </a>
            {" "}
            <a href="/rap-hael" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Rap-hael"}
            </a>
            {" "}
            <a href="/ra-fail" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Ra-fail"}
            </a>
            {" "}
            <a href="/valo-raph" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"VALO-RAPH"}
            </a>
            {" "}
            <a href="/archangel" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"✦ Archangel"}
            </a>
            {" "}
            <a href="/grab-riel" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Grab-riel"}
            </a>
            {" "}
            <a href="/hero-nimo" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Hero-nimo"}
            </a>
            {" "}
            <a href="/retro-nimo" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Retro-nimo"}
            </a>
            {" "}
            <a href="/geronimo" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"GERONIMO!"}
            </a>
            {" "}
            <a href="/gero-domino" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Gero-domino"}
            </a>
            {" "}
            <a href="/wrap-hael" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Wrap-hael"}
            </a>
            {" "}
            <a href="/gab-urrito" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Gab-urrito"}
            </a>
            {" "}
            <a href="/gab-reel" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Gab-reel"}
            </a>
            {" "}
            <a href="/draft-ael" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Draft-ael"}
            </a>
            {" "}
            <a href="/cab-riel" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Cab-riel"}
            </a>
            {" "}
            <a href="/lab-riel" className="alias" style={css("text-decoration: none; border: 1px solid #C9C9C2; border-radius: 999px; padding: 10px 16px; font-size: 15px")}>
              {"Lab-riel"}
            </a>
          </div>
        </section>
        {" "}
        <div style={css("max-width: 1200px; margin: 0 auto; padding: 0 24px")}>
          <section id="work" style={css("padding: 96px 0 72px; display: flex; flex-direction: column; gap: 40px")}>
            <div style={css("display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: flex-end")}>
              <h2 style={css("margin: 0; font-size: clamp(36px, 5vw, 56px); letter-spacing: -0.03em; line-height: 1")}>
                {"Selected work"}
              </h2>
              {" "}
              <a href="#work" style={css("font-size: 15px; padding: 10px 0")}>
                {"All projects →"}
              </a>
            </div>
            {" "}
            <div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px")}>
              <a href="#work" className="proj" style={css("text-decoration: none; background: #FFFFFF; border: 1.5px solid #E2E2DC; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px")}>
                <div style={css("height: 180px; border-radius: 10px; background: #E9ECFF; display: flex; align-items: center; justify-content: center; color: #2F4BFF; font-family: 'JetBrains Mono', monospace; font-size: 13px")}>
                  {shot(C.projects[0])}
                </div>
                {" "}
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #5C5C66")}>
                  {"01 · "}{C.projects[0].type}
                </div>
                {" "}
                <div style={css("font-size: 24px; font-weight: 700; letter-spacing: -0.01em")}>
                  {C.projects[0].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 16px; line-height: 1.5; color: #3A3A42")}>
                  {C.projects[0].summary}
                </p>
                {" "}
                <div style={css("font-size: 14px; color: #2F4BFF; font-weight: 500")}>
                  {"Case study →"}
                </div>
              </a>
              {" "}
              <a href="#work" className="proj" style={css("text-decoration: none; background: #FFFFFF; border: 1.5px solid #E2E2DC; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px")}>
                <div style={css("height: 180px; border-radius: 10px; background: #121212; display: flex; align-items: center; justify-content: center; color: #E6E6EA; font-family: 'JetBrains Mono', monospace; font-size: 13px")}>
                  {shot(C.projects[1])}
                </div>
                {" "}
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #5C5C66")}>
                  {"02 · "}{C.projects[1].type}
                </div>
                {" "}
                <div style={css("font-size: 24px; font-weight: 700; letter-spacing: -0.01em")}>
                  {C.projects[1].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 16px; line-height: 1.5; color: #3A3A42")}>
                  {C.projects[1].summary}
                </p>
                {" "}
                <div style={css("font-size: 14px; color: #2F4BFF; font-weight: 500")}>
                  {"Case study →"}
                </div>
              </a>
              {" "}
              <a href="#work" className="proj" style={css("text-decoration: none; background: #FFFFFF; border: 1.5px solid #E2E2DC; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px")}>
                <div style={css("height: 180px; border-radius: 10px; background: #2F4BFF; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-family: 'JetBrains Mono', monospace; font-size: 13px")}>
                  {shot(C.projects[2])}
                </div>
                {" "}
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #5C5C66")}>
                  {"03 · "}{C.projects[2].type}
                </div>
                {" "}
                <div style={css("font-size: 24px; font-weight: 700; letter-spacing: -0.01em")}>
                  {C.projects[2].name}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 16px; line-height: 1.5; color: #3A3A42")}>
                  {C.projects[2].summary}
                </p>
                {" "}
                <div style={css("font-size: 14px; color: #2F4BFF; font-weight: 500")}>
                  {"Case study →"}
                </div>
              </a>
            </div>
          </section>
          {" "}
          <section id="about" style={css("padding: 72px 0; display: flex; flex-wrap: wrap; gap: 48px; border-top: 1px solid #DCDCD6")}>
            <div style={css("flex: 1 1 320px; min-width: 0; display: flex; flex-direction: column; gap: 20px")}>
              <h2 style={css("margin: 0; font-size: clamp(36px, 5vw, 56px); letter-spacing: -0.03em; line-height: 1")}>
                {"About"}
              </h2>
              {" "}
              <p style={css("margin: 0; font-size: 19px; line-height: 1.6; color: #3A3A42")}>
                {"A tech geek with two sides: the developer who writes the code, and the founder who runs a retail and wholesale business online. "}{C.bio.origin}
              </p>
            </div>
            {" "}
            <div style={css("flex: 999 1 560px; min-width: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px")}>
              <div style={css("border-top: 3px solid #121212; padding-top: 16px; display: flex; flex-direction: column; gap: 8px")}>
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #5C5C66")}>
                  {"FRONT"}
                </div>
                {" "}
                <div style={css("font-size: 20px; font-weight: 700")}>
                  {"Interfaces"}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 15px; line-height: 1.5; color: #3A3A42")}>
                  {C.skills.frontend}
                </p>
              </div>
              {" "}
              <div style={css("border-top: 3px solid #121212; padding-top: 16px; display: flex; flex-direction: column; gap: 8px")}>
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #5C5C66")}>
                  {"BACK"}
                </div>
                {" "}
                <div style={css("font-size: 20px; font-weight: 700")}>
                  {"Systems & APIs"}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 15px; line-height: 1.5; color: #3A3A42")}>
                  {C.skills.backend}
                </p>
              </div>
              {" "}
              <div style={css("border-top: 3px solid #2F4BFF; padding-top: 16px; display: flex; flex-direction: column; gap: 8px")}>
                <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #2F4BFF")}>
                  {"BUSINESS"}
                </div>
                {" "}
                <div style={css("font-size: 20px; font-weight: 700")}>
                  {"Product & ops"}
                </div>
                {" "}
                <p style={css("margin: 0; font-size: 15px; line-height: 1.5; color: #3A3A42")}>
                  {C.skills.business}
                </p>
              </div>
            </div>
          </section>
          {" "}
          <section id="venture" style={css("margin: 24px 0 96px; background: #2F4BFF; color: #FFFFFF; border-radius: 24px; padding: clamp(28px, 5vw, 64px); display: flex; flex-wrap: wrap; gap: 32px; justify-content: space-between; align-items: flex-end")}>
            <div style={css("flex: 999 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 16px")}>
              <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.14em")}>
                {"FOUNDER OF"}
              </div>
              {" "}
              <div style={css("font-size: clamp(40px, 6vw, 72px); font-weight: 700; letter-spacing: -0.03em; line-height: 1")}>
                {C.company.name}
              </div>
              {" "}
              <p style={css("margin: 0; font-size: 19px; line-height: 1.5; max-width: 560px")}>
                {C.company.summary}
              </p>
            </div>
            {" "}
            <a href="#venture" style={css("text-decoration: none; background: #FFFFFF; color: #121212; padding: 15px 26px; border-radius: 999px; font-weight: 500")}>
              {"Visit the company →"}
            </a>
          </section>
        </div>
        {" "}
        <footer id="contact" style={css("background: #121212; color: #F7F7F5; padding: 96px 24px 40px")}>
          <div style={css("max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px")}>
            <div style={css("display: flex; flex-direction: column; gap: 20px")}>
              <div style={css("font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.14em; color: #A6A6AF")}>
                {"CONTACT"}
              </div>
              {" "}
              <h2 style={css("margin: 0; font-size: clamp(44px, 7vw, 96px); letter-spacing: -0.04em; line-height: 0.95")}>
                {"Have something"}
                <br />
                {"to build?"}
              </h2>
              {" "}
              <a href={`mailto:${C.email}`} style={css("color: #9FB0FF; font-size: clamp(22px, 3vw, 32px); text-underline-offset: 6px")}>
                {C.email}
              </a>
            </div>
            {" "}
            <div style={css("display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; border-top: 1px solid #2E2E34; padding-top: 24px; font-size: 15px")}>
              <div style={css("display: flex; flex-wrap: wrap; gap: 24px")}>
                <a href={C.links.github} style={css("color: #F7F7F5; padding: 8px 0")} target="_blank" rel="noreferrer">
                  {"GitHub"}
                </a>
                {" "}
                <a href={C.links.linkedin} style={css("color: #F7F7F5; padding: 8px 0")} target="_blank" rel="noreferrer">
                  {"LinkedIn"}
                </a>
                {" "}
                <a href={C.company.url} style={css("color: #F7F7F5; padding: 8px 0")} target="_blank" rel="noreferrer">
                  {C.company.siteLabel}
                </a>
              </div>
              {" "}
              <div style={css("color: #A6A6AF; padding: 8px 0")}>
                {"© Raphael Gabriel Geronimo"}
              </div>
            </div>
          </div>
        </footer>
      </div>
      </>
    );
  }
}
