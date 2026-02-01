// DebugSpheres2D.jsx
import React, { useEffect, useMemo, useRef } from "react";

/**
 * 2D canvas wireframe "debug spheres"
 * - fixed segments = 12
 * - no animation / no controls
 * - 9 spheres in one row, each with its own color + label
 */
export default function DebugSpheres2D({ 
  className = "",
  labelColor = "rgba(245,245,245,0.92)", 
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  const SEGMENTS = 12;

  const items = useMemo(
    () => [
      { color: "#FFD400", label: "curl" },       // yellow
      { color: "#FF4DFF", label: "spiral" },     // magenta
      { color: "#22C55E", label: "source" },     // green
      { color: "#FF8A1F", label: "warp" },       // orange
      { color: "#FF2D2D", label: "sink" },       // red
      { color: "#2F6BFF", label: "dipol" },      // blue
      { color: "#00E5FF", label: "vertex" },     // cyan
      { color: "#9B5CFF", label: "emitter" },    // purple
      { color: "#22E6C6", label: "attenuate" },  // turquoise
    ],
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

    // ---------- math helpers ----------
    const rotX = (p, a) => {
      const c = Math.cos(a), s = Math.sin(a);
      return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
    };
    const rotY = (p, a) => {
      const c = Math.cos(a), s = Math.sin(a);
      return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
    };

    const project = (p, cx, cy, radius, persp = 2.8) => {
      const k = persp / (persp + p.z); // p.z in [-1..1]
      return { x: cx + p.x * radius * k, y: cy + p.y * radius * k };
    };

    const spherePoint = (theta, phi) => {
      const cp = Math.cos(phi), sp = Math.sin(phi);
      const ct = Math.cos(theta), st = Math.sin(theta);
      return { x: cp * ct, y: sp, z: cp * st };
    };

    const buildWire = (seg) => {
      const lon = clamp(Math.round(seg), 2, 128);
      const lat = clamp(Math.round(seg / 2), 2, 128);

      const latLines = [];
      for (let i = 1; i < lat; i++) {
        const t = i / lat;
        const phi = (t - 0.5) * Math.PI; // [-pi/2..pi/2]
        const line = [];
        for (let j = 0; j <= lon; j++) {
          const theta = (j / lon) * Math.PI * 2;
          line.push(spherePoint(theta, phi));
        }
        latLines.push(line);
      }

      const lonLines = [];
      for (let j = 0; j < lon; j++) {
        const theta = (j / lon) * Math.PI * 2;
        const line = [];
        for (let i = 0; i <= lat; i++) {
          const t = i / lat;
          const phi = (t - 0.5) * Math.PI;
          line.push(spherePoint(theta, phi));
        }
        lonLines.push(line);
      }

      return { latLines, lonLines };
    };

    const wire = buildWire(SEGMENTS);

    // 고정 각도(회전 애니메이션 없음)
    const yaw = 0.85;
    const pitch = 0.58;

    const transformPoint = (p) => rotX(rotY(p, yaw), pitch);

    const drawPolyline = (pts2, alpha) => {
      if (pts2.length < 2) return;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.moveTo(pts2[0].x, pts2[0].y);
      for (let i = 1; i < pts2.length; i++) ctx.lineTo(pts2[i].x, pts2[i].y);
      ctx.stroke();
    };

    const render = () => {
      const rect = wrap.getBoundingClientRect();
      const cssW = Math.max(1, Math.floor(rect.width));
      const cssH = Math.max(1, Math.floor(rect.height || 220));

      const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssW, cssH);

      // layout: 9 in a row
      const padX = 12;
      const labelH = 26;
      const usableW = cssW - padX * 2;
      const cellW = usableW / items.length;

      const cy = (cssH - labelH) * 0.55;
      const r = Math.min(cellW, cssH - labelH) * 0.34;

      // draw each sphere
      for (let idx = 0; idx < items.length; idx++) {
        const { color, label } = items[idx];
        const cx = padX + cellW * (idx + 0.5);

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 1.25;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        // lat lines
        for (const line of wire.latLines) {
          const pts3 = line.map(transformPoint);
          const pts2 = pts3.map((p) => project(p, cx, cy, r));

          const zAvg = pts3.reduce((s, p) => s + p.z, 0) / pts3.length;
          const alpha = clamp(0.18 + (1 - (zAvg + 1) * 0.5) * 0.55, 0.12, 0.85);
          drawPolyline(pts2, alpha);
        }

        // lon lines
        for (const line of wire.lonLines) {
          const pts3 = line.map(transformPoint);
          const pts2 = pts3.map((p) => project(p, cx, cy, r));

          const zAvg = pts3.reduce((s, p) => s + p.z, 0) / pts3.length;
          const alpha = clamp(0.18 + (1 - (zAvg + 1) * 0.5) * 0.55, 0.12, 0.85);
          drawPolyline(pts2, alpha);
        }

        // label
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = labelColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
        ctx.fillText(label, cx, cssH - 10);
        ctx.globalAlpha = 1;
      }
    };

    const ro = new ResizeObserver(render);
    ro.observe(wrap);
    render();

    return () => ro.disconnect();
  }, [items, labelColor]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        width: "100%",
        height: "220px",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}