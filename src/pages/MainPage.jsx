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
          <a className="navLink" href="https://www.fab.com/ko/listings/57cba704-cfa8-4014-b6c2-b582822ce3fc" target="_blank" rel="noreferrer">Fab</a>
          <Link className="navLink" to="/docs">Docs</Link>
          <a className="navLink" href="#support">Support</a>
        </nav>
      </header>

      <main className="content">
        <h1 className="title cinzel">Volumetric Aurora</h1>
        <p className="tagline">Unreal Engine 5.6+ aurora rendering plugin.</p>

        <div className="ctaRow">
          <Link className="btnPrimary" to="/docs">Documentation</Link>
          <a className="btnGhost" href="https://www.fab.com/ko/listings/57cba704-cfa8-4014-b6c2-b582822ce3fc" target="_blank" rel="noreferrer">
            View on Fab
          </a>
        </div>
      </main>

      <footer className="footer" id="support">
        <div className="footerLeft">© 2026 Volumetric Aurora</div>
        <div className="footerRight">
          <span className="badge">UE 5.6+</span>
          <span className="badge">By R&B</span>
        </div>
      </footer>

    </div>
  );
}