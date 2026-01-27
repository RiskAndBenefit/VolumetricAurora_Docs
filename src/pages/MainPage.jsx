import { useRef } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import bgImage from "../assets/NoiseAurora.png";
import { useSnowTrail } from "../hooks/useSnowTrail";

export default function MainPage() {
  const canvasRef = useRef(null);

  useSnowTrail(canvasRef, { throttleMs: 8, maxParticles: 500 });

  return (
    <div className="page" style={{ backgroundImage: `url(${bgImage})` }}>
      <canvas ref={canvasRef} className="snowCanvas" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">Volumetric Aurora</div>
        <nav className="nav">
          <a className="navLink" href="https://www.fab.com/" target="_blank" rel="noreferrer">Fab</a>
          <a className="navLink" href="/docs">Docs</a>
          <a className="navLink" href="#support">Support</a>
        </nav>
      </header>

      <main className="content">
        <h1 className="title cinzel">Volumetric Aurora</h1>
        <p className="tagline">Unreal Engine 5.6+ aurora rendering plugin.</p>

        <div className="ctaRow">
          <Link className="btnPrimary" to="/docs">Documentation</Link>
          <a className="btnGhost" href="https://www.fab.com/" target="_blank" rel="noreferrer">
            View on Fab
          </a>
        </div>
      </main>

      <footer className="footer" id="support">
        <div className="footerLeft">© 2026 Volumetric Aurora</div>
        <div className="footerRight">
          <span className="badge">UE 5.6+</span>
          <a className="footerLink" href="https://github.com/RiskAndBenefit/VolumetricAurora/issues" target="_blank" rel="noreferrer">Issues</a>
        </div>
      </footer>

    </div>
  );
}