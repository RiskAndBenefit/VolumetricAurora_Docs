import { useEffect } from "react";

export function useSnowTrail(canvasRef, { throttleMs = 8, maxParticles = 500 } = {}) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let rafId = 0;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const particles = [];
    let w = 0, h = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = Math.floor(rect.width);
      h = Math.floor(rect.height);

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(x, y) {
      const n = 1; // 한 번에 생성할 입자 수

      for (let i = 0; i < n; i++) {
        if (particles.length > maxParticles) particles.shift();

        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 0.9;

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (0.6 + Math.random() * 0.8),
          g: 0.04 + Math.random() * 0.05,
          drag: 0.985,
          r: 1.2 + Math.random() * 2.2, // 크기
          life: 1,  // 1 -> 0
          decay: 0.015 + Math.random() * 0.02,
          tw: Math.random() * Math.PI * 2,  // 반짝임 위상
          twSpd: 0.12 + Math.random() * 0.18,
        });
      }
    }

    const target = canvas.parentElement;
    let lastT = 0;

    function onMove(e) {
      const now = performance.now();
      if (now - lastT < throttleMs) return;
      lastT = now;

      const rect = canvas.getBoundingClientRect();
      spawn(e.clientX - rect.left, e.clientY - rect.top);
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.vx *= p.drag;
        p.vy = p.vy * p.drag + p.g;

        p.x += p.vx;
        p.y += p.vy;

        p.tw += p.twSpd;
        p.life -= p.decay;

        if (p.life <= 0 || p.x < -50 || p.x > w + 50 || p.y < -50 || p.y > h + 80) {
          particles.splice(i, 1);
          continue;
        }

        const sparkle = 0.55 + 0.45 * Math.sin(p.tw);
        const a = Math.max(0, p.life) * 0.9 * sparkle;

        // 그라데이션 파티클 (중앙 밝고 가장자리 투명)
        const R = p.r * 2.4;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
        grad.addColorStop(0.0, `rgba(255,255,255,${a})`);
        grad.addColorStop(0.35, `rgba(255,255,255,${a * 0.55})`);
        grad.addColorStop(1.0, `rgba(255,255,255,0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, R, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    }

    resize();
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    target?.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      target?.removeEventListener("pointermove", onMove);
      ro.disconnect();
    };
  }, [throttleMs, maxParticles]);   // [숫자 키우면 덜 나옴, 숫자 줄이면 덜 누적됨]
}
