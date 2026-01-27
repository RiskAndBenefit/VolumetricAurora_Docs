import { Link, Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import DocsBreadcrumb from "../features/DocsBreadcrumb";
import AuroraNavPanel from "../features/AuroraNavPanel";

import NoiseAuroraImg from "../assets/Noise.png";
import SplineAuroraImg from "../assets/Spline.png";
import FlowAuroraImg from "../assets/Flow.png";

import "./DocsLayout.css";

export default function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const items = useMemo(
    () => [
      { title: "Noise Aurora", meta: "CLASSIC CURTAINS", to: "/docs/noise", img: NoiseAuroraImg },
      { title: "Spline Aurora", meta: "ART-DIRECTABLE SPLINES", to: "/docs/spline", img: SplineAuroraImg },
      { title: "Flow Aurora", meta: "A storm-like dynamic aurora", to: "/docs/flow", img: FlowAuroraImg },
    ],
    []
  );

  return (
    <div className="docsPage" data-sidebar={sidebarOpen ? "open" : "closed"}>
      <header className="docsHeader">
        <div className="docsHeaderInner">
          <DocsBreadcrumb showBrand/>

          <nav className="docsNav">
            <a className="docsNavLink" href="https://www.fab.com/" target="_blank" rel="noreferrer">
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

      <AuroraNavPanel
        items={items}
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((v) => !v)}
      />

      <div className="docsLayout">
        <main className="docsMain">
          <Outlet />
        </main>

        <footer className="docsFooter">
          <div>© 2026 Volumetric Aurora</div>
          <div className="docsFooterRight">
            <span className="pill">Docs v0.1</span>
          </div>
        </footer>
      </div>
    </div>
  );
}