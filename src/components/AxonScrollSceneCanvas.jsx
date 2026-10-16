import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * 100% Original AXONVORTEX Procedural Scroll-Scrubbed Canvas Engine.
 * Locked frame-for-frame to Lenis & GSAP ScrollTrigger with responsive
 * bounds so nodes and telemetry cards never collide with headings or edges.
 */
export default function AxonScrollSceneCanvas({
  scene = 'hero-vortex',
  triggerRef,
  start = 'top top',
  end = 'bottom bottom',
  className = ''
}) {
  const canvasRef = useRef(null);
  const progressRef = useRef(0);
  const [hudProgress, setHudProgress] = useState(0);

  const drawScene = (progress) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;

    ctx.save();
    ctx.scale(dpr, dpr);

    const drawBrutalBox = (
      x,
      y,
      w,
      h,
      r,
      fill,
      stroke = '#000',
      strokeW = 3,
      shadow = 5
    ) => {
      if (shadow > 0) {
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.roundRect(x + shadow, y + shadow, w, h, r);
        ctx.fill();
      }
      ctx.fillStyle = fill;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeW;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, r);
      ctx.fill();
      if (strokeW > 0) ctx.stroke();
    };

    const drawBlueprintGrid = (bg, lineCol) => {
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = lineCol;
      ctx.lineWidth = 1;
      const step = 46;
      const offset = (progress * 110) % step;
      for (let x = -step; x < W + step; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + offset * 0.3, 0);
        ctx.lineTo(x + offset * 0.3, H);
        ctx.stroke();
      }
      for (let y = -step; y < H + step; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y - offset);
        ctx.lineTo(W, y - offset);
        ctx.stroke();
      }
    };

    const cx = W / 2;

    if (scene === 'hero-vortex') {
      drawBlueprintGrid('#f8f6f0', 'rgba(11, 15, 23, 0.055)');

      // Center vortex comfortably inside the dedicated lower stage zone
      const cy = H * 0.45;
      const scaleX = Math.min(1, Math.max(0.58, (W - 60) / 980));
      const scaleY = Math.min(1, Math.max(0.62, (H - 40) / 430));

      // Perspective floor grid lines
      ctx.strokeStyle = 'rgba(11, 15, 23, 0.1)';
      ctx.lineWidth = 1.5;
      for (let i = -6; i <= 6; i++) {
        ctx.beginPath();
        ctx.moveTo(cx + i * 42 * scaleX, cy - 20 * scaleY);
        ctx.lineTo(cx + i * 175 * scaleX, H + 20);
        ctx.stroke();
      }

      // Outer converging rings driven by scroll progress
      const ringRadii = [300, 220, 145];
      const ringColors = ['#2563eb', '#8b5cf6', '#a3e635'];
      ringRadii.forEach((baseR, idx) => {
        const rx = baseR * scaleX * (1.12 - progress * 0.26);
        const ry = rx * 0.48 * scaleY;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(
          (progress * Math.PI * 1.3 + idx * 1.1) * (idx % 2 === 0 ? 1 : -1)
        );
        ctx.strokeStyle = '#0b0f17';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([10, 9]);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.setLineDash([]);
        ctx.fillStyle = ringColors[idx];
        ctx.beginPath();
        ctx.arc(rx, 0, 7.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      // 5 Growth System Nodes converging into connected orbit — strictly bounded inside stage
      const nodes = [
        {
          code: '01',
          stage: 'ATTRACT',
          sub: 'Search · Ads · Social',
          color: '#f59e0b',
          sx: -355 * scaleX,
          sy: -108 * scaleY,
          ex: -245 * scaleX,
          ey: -64 * scaleY
        },
        {
          code: '02',
          stage: 'ENGAGE',
          sub: 'Web · Content · UX',
          color: '#2563eb',
          sx: 355 * scaleX,
          sy: -108 * scaleY,
          ex: 245 * scaleX,
          ey: -64 * scaleY
        },
        {
          code: '03',
          stage: 'CONVERT',
          sub: 'Funnels · CRM Capture',
          color: '#ff4d2d',
          sx: -375 * scaleX,
          sy: 72 * scaleY,
          ex: -235 * scaleX,
          ey: 60 * scaleY
        },
        {
          code: '04',
          stage: 'AUTOMATE',
          sub: 'AI Agents · Voice AI',
          color: '#8b5cf6',
          sx: 375 * scaleX,
          sy: 72 * scaleY,
          ex: 235 * scaleX,
          ey: 60 * scaleY
        },
        {
          code: '05',
          stage: 'OPTIMIZE',
          sub: 'Data · Hypothesis Loop',
          color: '#a3e635',
          sx: 0,
          sy: 142 * scaleY,
          ex: 0,
          ey: 116 * scaleY
        }
      ];

      // Draw connecting conduits from each node to central core
      nodes.forEach((n, i) => {
        const nx = cx + n.sx + (n.ex - n.sx) * progress;
        const ny = cy + n.sy + (n.ey - n.sy) * progress;

        ctx.save();
        ctx.strokeStyle =
          progress > 0.35 ? '#0b0f17' : 'rgba(11,15,23,0.28)';
        ctx.lineWidth = progress > 0.35 ? 3.2 : 2;
        if (progress <= 0.35) ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.quadraticCurveTo(cx, ny, cx, cy);
        ctx.stroke();

        // Data packet flowing along conduit into the core
        const t = (progress * 3 + i * 0.2) % 1;
        const px =
          (1 - t) * (1 - t) * nx + 2 * (1 - t) * t * cx + t * t * cx;
        const py =
          (1 - t) * (1 - t) * ny + 2 * (1 - t) * t * ny + t * t * cy;
        ctx.fillStyle = n.color;
        ctx.strokeStyle = '#0b0f17';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px, py, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      // Central AxonVortex Command Core
      const coreScale = (0.86 + progress * 0.2) * Math.min(1, scaleX + 0.15);
      const coreW = Math.min(245, W * 0.42) * coreScale;
      const coreH = 114 * coreScale;
      drawBrutalBox(
        cx - coreW / 2,
        cy - coreH / 2,
        coreW,
        coreH,
        16,
        '#0b0f17',
        '#0b0f17',
        3.5,
        7
      );

      ctx.fillStyle = '#a3e635';
      ctx.beginPath();
      ctx.roundRect(
        cx - coreW / 2 + 10,
        cy - coreH / 2 + 10,
        coreW - 20,
        24,
        6
      );
      ctx.fill();

      ctx.fillStyle = '#0b0f17';
      ctx.font = '700 10px "Fragment Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(
        progress < 0.42
          ? 'STATE: DIAGNOSING SILOS...'
          : 'STATE: CONNECTED SYSTEM ACTIVE',
        cx,
        cy - coreH / 2 + 26
      );

      ctx.fillStyle = '#ffffff';
      ctx.font = '800 18px "Radio Canada Big", sans-serif';
      ctx.fillText('AXONVORTEX CORE', cx, cy + 7);

      ctx.fillStyle = '#f59e0b';
      ctx.font = '600 11px "Fragment Mono", monospace';
      ctx.fillText(
        `SYNC EFFICIENCY: ${Math.round(42 + progress * 58)}%`,
        cx,
        cy + 29
      );

      // Draw each of the 5 Orbiting Node Cards
      nodes.forEach((n) => {
        const nx = cx + n.sx + (n.ex - n.sx) * progress;
        const ny = cy + n.sy + (n.ey - n.sy) * progress;
        const cardW = W < 700 ? 124 : 158;
        const cardH = 60;
        drawBrutalBox(
          nx - cardW / 2,
          ny - cardH / 2,
          cardW,
          cardH,
          12,
          '#ffffff',
          '#0b0f17',
          3,
          5
        );

        drawBrutalBox(
          nx - cardW / 2 + 9,
          ny - cardH / 2 + 9,
          30,
          18,
          5,
          n.color,
          '#0b0f17',
          2,
          0
        );
        ctx.fillStyle =
          n.color === '#2563eb' ||
          n.color === '#8b5cf6' ||
          n.color === '#ff4d2d'
            ? '#ffffff'
            : '#0b0f17';
        ctx.font = '700 9.5px "Fragment Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(n.code, nx - cardW / 2 + 24, ny - cardH / 2 + 22);

        ctx.textAlign = 'left';
        ctx.fillStyle = '#0b0f17';
        ctx.font = '700 12.5px "Radio Canada Big", sans-serif';
        ctx.fillText(n.stage, nx - cardW / 2 + 45, ny - cardH / 2 + 22);

        ctx.fillStyle = '#323232';
        ctx.font = '500 9.5px "Fragment Mono", monospace';
        ctx.fillText(n.sub, nx - cardW / 2 + 10, ny - cardH / 2 + 44);
      });
    } else if (scene === 'problem-diagnosis') {
      // Scene 2: Diagnostic X-Ray Scanner inspecting the 6 Pain Points
      drawBlueprintGrid('#091326', 'rgba(255, 255, 255, 0.055)');

      // Top section title inside canvas
      ctx.fillStyle = '#a3e635';
      ctx.font = '700 12px "Fragment Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(
        'LIVE DIAGNOSTIC X-RAY · SCROLL TO SCAN & RESOLVE GROWTH LEAKS',
        cx,
        Math.max(115, H * 0.16)
      );

      const leaks = [
        {
          code: 'LEAK 01',
          title: 'Weak Digital Presence',
          fix: 'Websites & E-Commerce',
          col: '#ff4d2d'
        },
        {
          code: 'LEAK 02',
          title: 'Disconnected Marketing',
          fix: 'Connected Paid & Organic',
          col: '#f59e0b'
        },
        {
          code: 'LEAK 03',
          title: 'Unattributed Ad Spend',
          fix: 'Full-Funnel Tracking',
          col: '#ff4d2d'
        },
        {
          code: 'LEAK 04',
          title: 'Slow Lead Follow-Up',
          fix: '60s CRM + SMS Nurture',
          col: '#8b5cf6'
        },
        {
          code: 'LEAK 05',
          title: 'Manual Team Busywork',
          fix: 'Workflow Automation',
          col: '#2563eb'
        },
        {
          code: 'LEAK 06',
          title: 'AI Without Strategy',
          fix: 'Bounded AI Agents',
          col: '#a3e635'
        }
      ];

      const gridW = Math.min(960, W - 48);
      const cols = W < 720 ? 2 : 3;
      const rows = Math.ceil(leaks.length / cols);
      const cellW = (gridW - (cols - 1) * 20) / cols;
      const cellH = 118;
      const startX = (W - gridW) / 2;
      const startY = H * 0.54 - (rows * cellH + (rows - 1) * 20) / 2;

      const scanX = startX + gridW * progress;

      leaks.forEach((lk, idx) => {
        const c = idx % cols;
        const r = Math.floor(idx / cols);
        const x = startX + c * (cellW + 20);
        const y = startY + r * (cellH + 20);
        const isScanned = x + cellW * 0.4 <= scanX;

        drawBrutalBox(
          x,
          y,
          cellW,
          cellH,
          14,
          isScanned ? '#f8f6f0' : '#132038',
          isScanned ? '#a3e635' : '#ff4d2d',
          3,
          6
        );

        drawBrutalBox(
          x + 14,
          y + 14,
          96,
          22,
          6,
          isScanned ? '#a3e635' : '#ff4d2d',
          '#0b0f17',
          2,
          0
        );
        ctx.fillStyle = isScanned ? '#0b0f17' : '#ffffff';
        ctx.font = '700 10px "Fragment Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(isScanned ? 'RESOLVED ✓' : lk.code, x + 62, y + 29);

        ctx.textAlign = 'left';
        ctx.fillStyle = isScanned ? '#0b0f17' : '#ffffff';
        ctx.font = '700 15px "Radio Canada Big", sans-serif';
        ctx.fillText(lk.title, x + 14, y + 62);

        ctx.fillStyle = isScanned ? '#194d15' : 'rgba(255,255,255,0.68)';
        ctx.font = '500 12px "Fragment Mono", monospace';
        ctx.fillText(
          isScanned ? `→ ${lk.fix}` : 'Status: Losing Opportunities',
          x + 14,
          y + 90
        );
      });

      ctx.save();
      ctx.strokeStyle = '#a3e635';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(scanX, startY - 24);
      ctx.lineTo(scanX, startY + rows * (cellH + 20) + 6);
      ctx.stroke();

      drawBrutalBox(
        scanX - 95,
        startY - 50,
        190,
        28,
        8,
        '#a3e635',
        '#0b0f17',
        2.5,
        4
      );
      ctx.fillStyle = '#0b0f17';
      ctx.font = '700 11px "Fragment Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(
        `AUDIT SCAN: ${Math.round(progress * 100)}%`,
        scanX,
        startY - 32
      );
      ctx.restore();
    } else if (scene === 'autonomous-loop') {
      // Scene 3: 24/7 Autonomous AI & Growth Notification Stream
      // Rendered inside its own lower flex container so it NEVER overlaps the top typewriter card
      drawBlueprintGrid('#f8f6f0', 'rgba(11, 15, 23, 0.055)');

      const events = [
        {
          time: '00:02s',
          badge: 'AI CHATBOT',
          title: 'Visitor qualified & matched to E-Commerce System',
          accent: '#8b5cf6'
        },
        {
          time: '00:08s',
          badge: 'VOICE AI',
          title: 'Inbound call answered → Discovery Call booked on calendar',
          accent: '#ff4d2d'
        },
        {
          time: '00:14s',
          badge: 'CRM ROUTER',
          title: 'Lead enriched, scored & pushed to Slack + HubSpot pipeline',
          accent: '#2563eb'
        },
        {
          time: '00:29s',
          badge: 'META & SEARCH',
          title: 'High-intent conversion signal fed back to ad bidding loop',
          accent: '#f59e0b'
        },
        {
          time: '00:45s',
          badge: 'GROWTH LOOP',
          title: 'Weekly hypothesis test +34% landing page conversion lift',
          accent: '#a3e635'
        }
      ];

      const cardW = Math.min(680, W - 44);
      const rowGap = Math.min(72, Math.max(54, (H - 56) / events.length));
      const cardH = Math.min(60, rowGap - 10);
      const totalStackH = (events.length - 1) * rowGap;
      const baseTop = Math.max(38, (H - totalStackH) / 2);

      events.forEach((ev, idx) => {
        const threshold = idx * 0.16;
        const localP = Math.max(0, Math.min(1, (progress - threshold) / 0.22));
        const yOffset = idx * rowGap + (1 - localP) * 28;
        const scale = 0.94 + localP * 0.06;

        ctx.save();
        ctx.globalAlpha = 0.25 + localP * 0.75;
        ctx.translate(cx, baseTop + yOffset);
        ctx.scale(scale, scale);

        drawBrutalBox(
          -cardW / 2,
          -cardH / 2,
          cardW,
          cardH,
          12,
          '#ffffff',
          '#0b0f17',
          3,
          5
        );
        drawBrutalBox(
          -cardW / 2 + 12,
          -14,
          108,
          28,
          7,
          ev.accent,
          '#0b0f17',
          2,
          0
        );

        ctx.fillStyle =
          ev.accent === '#8b5cf6' ||
          ev.accent === '#2563eb' ||
          ev.accent === '#ff4d2d'
            ? '#ffffff'
            : '#0b0f17';
        ctx.font = '700 9.5px "Fragment Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(ev.badge, -cardW / 2 + 66, 4);

        ctx.textAlign = 'left';
        ctx.fillStyle = '#0b0f17';
        ctx.font = '700 13.5px "Radio Canada", sans-serif';
        ctx.fillText(ev.title, -cardW / 2 + 134, 4);

        ctx.textAlign = 'right';
        ctx.fillStyle = '#194d15';
        ctx.font = '700 11px "Fragment Mono", monospace';
        ctx.fillText(ev.time, cardW / 2 - 16, 4);

        ctx.restore();
      });
    } else {
      // Scene 4: "system-convergence" — The AxonVortex Growth Loop
      drawBlueprintGrid('#0b0f17', 'rgba(255, 255, 255, 0.05)');

      ctx.fillStyle = '#a3e635';
      ctx.font = '700 12px "Fragment Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(
        'THE AXONVORTEX GROWTH LOOP · CONTINUOUS COMPOUNDING EXPERIMENTATION',
        cx,
        Math.max(115, H * 0.18)
      );

      const loopNodes = [
        'HYPOTHESIS',
        'ACTION',
        'MEASURE',
        'LEARN',
        'IMPROVE & SCALE'
      ];
      const colors = ['#f59e0b', '#2563eb', '#8b5cf6', '#ff4d2d', '#a3e635'];
      const trackW = Math.min(920, W - 80);
      const startX = (W - trackW) / 2;
      const baseY = H * 0.68;

      ctx.strokeStyle = '#a3e635';
      ctx.lineWidth = 5;
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const t = (i / 100) * Math.max(0.08, progress);
        const x = startX + t * trackW;
        const y = baseY - Math.pow(t, 1.65) * 200 + Math.sin(t * 16) * 8;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      loopNodes.forEach((label, idx) => {
        const t = idx / (loopNodes.length - 1);
        const x = startX + t * trackW;
        const y = baseY - Math.pow(t, 1.65) * 200;
        const active = progress >= t - 0.05;

        drawBrutalBox(
          x - 74,
          y - 30,
          148,
          54,
          12,
          active ? colors[idx] : '#1e293b',
          '#000000',
          3,
          5
        );
        ctx.fillStyle =
          active && (idx === 1 || idx === 2 || idx === 3)
            ? '#ffffff'
            : active
            ? '#0b0f17'
            : '#94a3b8';
        ctx.font = '700 10px "Fragment Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`STEP 0${idx + 1}`, x, y - 8);
        ctx.font = '800 12px "Radio Canada Big", sans-serif';
        ctx.fillText(label, x, y + 11);
      });
    }

    ctx.restore();
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      drawScene(progressRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scene]);

  useEffect(() => {
    const targetEl = triggerRef?.current;
    if (!targetEl) return;

    const st = ScrollTrigger.create({
      trigger: targetEl,
      start,
      end,
      scrub: 0.15,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        setHudProgress(Math.round(self.progress * 100));
        drawScene(self.progress);
      }
    });

    drawScene(progressRef.current);
    return () => st.kill();
  }, [triggerRef, scene, start, end]);

  return (
    <div className={`hp-sequence-wrap ${className}`}>
      <canvas ref={canvasRef} className="hp-sequence-canvas" />
      <div className="hp-sequence-loading-badge">
        AXONVORTEX ENGINE · SCROLL SYNC {hudProgress}%
      </div>
    </div>
  );
}
