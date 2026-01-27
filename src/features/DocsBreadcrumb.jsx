import { Link, useLocation } from "react-router-dom";
import "./DocsBreadcrumb.css";

const LABELS = {
  noise: "Noise",
  spline: "Spline",
  flow: "Flow",
};

const QUICK_START_PATH = "/docs";

function getSlug(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  return parts[1] ?? "";
}

export default function DocsBreadcrumb({ showBrand = false }) {
  const { pathname } = useLocation();

  const isDocsRoot = pathname === "/docs" || pathname === "/docs/";
  const slug = getSlug(pathname);

  const current = isDocsRoot ? "Quick Start" : (LABELS[slug] ?? "Docs");

  return (
    <div className="topCrumbWrap" role="navigation" aria-label="Breadcrumb">
      <div className="topCrumbInner">
        {showBrand ? (
          <>
            <Link className="crumbBrand" to="/">
              Volumetric Aurora
            </Link>
            <span className="crumbSlash" aria-hidden="true">/</span>
          </>
        ) : null}

        <Link className="crumbLink" to={QUICK_START_PATH} aria-current={isDocsRoot ? "page" : undefined}>
          Docs
        </Link>
        <span className="crumbSep" aria-hidden="true">›</span>
        <span className="crumbCurrent" aria-current="page">
          {current}
        </span>
      </div>
    </div>
  );
}