import { Link } from "react-router-dom";
import "./DocsPage.css";

export default function DocsPage() {
  return (
    <div className="docsPage">
      <header className="docsHeader">
        <div className="docsHeaderInner">
          <Link className="docsBrand cinzel" to="/">
            Volumetric Aurora
          </Link>

          <nav className="docsNav">
            <a
              className="docsNavLink"
              href="https://www.fab.com/"
              target="_blank"
              rel="noreferrer"
            >
              Fab
            </a>
            <a
              className="docsNavLink"
              href="https://github.com/RiskAndBenefit/VolumetricAurora/issues"
              target="_blank"
              rel="noreferrer"
            >
              Issues
            </a>
          </nav>
        </div>
      </header>

      <main className="docsMain">
        <section className="hero">
          <h1 className="heroTitle cinzel">Documentation</h1>
          <p className="heroDesc">
            Unreal Engine 5.6+ aurora rendering plugin. Installation, quick start, presets,
            rendering tips, and troubleshooting are documented here.
          </p>

          <div className="heroMeta">
            <span className="pill">UE 5.6+</span>
            <span className="pill">Windows / macOS</span>
            <span className="pill">Plugin</span>
          </div>
        </section>

        <div className="docsGrid">
          <section className="card">
            <h2 className="cardTitle cinzel">Getting Started</h2>
            <ul className="list">
              <li>What it is</li>
              <li>Installation</li>
              <li>Enable plugin and restart</li>
              <li>First aurora in 2 minutes</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="cardTitle cinzel">Usage</h2>
            <ul className="list">
              <li>Actors and components</li>
              <li>Presets and parameters</li>
              <li>Performance controls</li>
              <li>Recommended project settings</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="cardTitle cinzel">Rendering Notes</h2>
            <ul className="list">
              <li>Exposure / auto exposure tips</li>
              <li>Bloom and color grading</li>
              <li>Noise and banding mitigation</li>
              <li>Recommended post process</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="cardTitle cinzel">FAQ</h2>
            <ul className="list">
              <li>It looks too bright/dim</li>
              <li>Artifacts, flicker, banding</li>
              <li>Performance drops</li>
              <li>Packaging and shipping builds</li>
            </ul>
          </section>
        </div>

        <section className="wideCard">
          <h2 className="cardTitle cinzel">Quick Links</h2>
          <div className="quickLinks">
            <a className="quickLink" href="https://www.fab.com/" target="_blank" rel="noreferrer">
              View on Fab
            </a>
            <a
              className="quickLink"
              href="https://github.com/RiskAndBenefit/VolumetricAurora/issues"
              target="_blank"
              rel="noreferrer"
            >
              Report an Issue
            </a>
            <Link className="quickLink" to="/">
              Back to Main
            </Link>
          </div>
        </section>
      </main>

      <footer className="docsFooter">
        <div>© 2026 Volumetric Aurora</div>
        <div className="docsFooterRight">
          <span className="pill">Docs v0.1</span>
        </div>
      </footer>
    </div>
  );
}