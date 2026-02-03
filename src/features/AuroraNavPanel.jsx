import { Link } from "react-router-dom";
import "./AuroraNavPanel.css";

export default function AuroraNavPanel({
  items,
  open,
  onToggle,
}) {
  return (
    <>
      <button
        type="button"
        className={`sideToggle ${open ? "isOpen" : "isClosed"}`}
        onClick={onToggle}
        aria-expanded={open}
        aria-label={open ? "Collapse navigation" : "Expand navigation"}
      />

      <aside className="sidePanel" aria-label="Aurora navigation">
        <div className="sidePanelHeader">
          <div className="sidePanelTop">AURORA NAVIGATION</div>
          <Link className="sidePanelQuickLink" to="/docs">
            <span className="sidePanelQuickLinkText">Quick Start</span>
          </Link>
        </div>

        <div className="navCardList">
          {items.map((it) => (
            <Link key={it.to} className="navCard" to={it.to}>
              <div className="navCardText">
                <div className="navCardTitle">{it.title}</div>
                <div className="navCardMeta">
                  <div className="navMetaLine">{it.meta}</div>
                </div>
              </div>

              {it.img ? (
                <img className="navThumbImg" src={it.img} alt={`${it.title} thumbnail`} />
              ) : (
                <div className="navThumbFallback" aria-hidden="true" />
              )}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}