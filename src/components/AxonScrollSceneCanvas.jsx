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
    const isMobile = W < 640;
    const isSmallMobile = W < 420;

    if (scene === 'hero-vortex') {
      drawBlueprintGrid('#f8f6f0', 'rgba(11, 15, 23, 0.055)');

      // Center vortex comfortably inside the dedicated lower stage zone
      const cy = H * 0.46;
      const scaleX = Math.min(1, Math.max(0.34, (W - 32) / 920));
      const scaleY = Math.min(1, Math.max(0.52, (H - 30) / 420));

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
        const rx = Math.min(W * 0.44, baseR * Math.max(0.45, scaleX)) * (1.12 - progress * 0.26);
        const ry = rx * (isMobile ? 0.56 : 0.48) * scaleY;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(
          (progress * Math.PI * 1.3 + idx * 1.1) * (idx % 2 === 0 ? 1 : -1)
        );
        ctx.strokeStyle = '#0b0f17';
        ctx.lineWidth = isMobile ? 2 : 2.5;
        ctx.setLineDash([10, 9]);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.setLineDash([]);
        ctx.fillStyle = ringColors[idx];
        ctx.beginPath();
        ctx.arc(rx, 0, isMobile ? 5.5 : 7.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      const cardW = isSmallMobile ? 104 : isMobile ? 118 : W < 860 ? 138 : 158;
      const cardH = isSmallMobile ? 46 : isMobile ? 52 : 60;

      // Safe horizontal & vertical bounds so node cards never clip off screen
      const maxSafeX = Math.max(70, W / 2 - cardW / 2 - 10);
      const startOrbitX = Math.min(365 * scaleX, maxSafeX);
      const endOrbitX = Math.min(245 * scaleX, maxSafeX * 0.82);
      const topOrbitY = isMobile ? Math.min(115, H * 0.31) : 108 * scaleY;
      const midOrbitY = isMobile ? Math.min(68, H * 0.18) : 68 * scaleY;
      const botOrbitY = isMobile ? Math.min(126, H * 0.34) : 132 * scaleY;

      // 5 Growth System Nodes converging into connected orbit — strictly bounded inside stage
      const nodes = [
        {
          code: '01',
          stage: 'ATTRACT',
          sub: 'Search · Ads · Social',
          color: '#f59e0b',
          sx: -startOrbitX,
          sy: -topOrbitY,
          ex: -endOrbitX,
          ey: -topOrbitY * 0.65
        },
        {
          code: '02',
          stage: 'ENGAGE',
          sub: 'Web · Content · UX',
          color: '#2563eb',
          sx: startOrbitX,
          sy: -topOrbitY,
          ex: endOrbitX,
          ey: -topOrbitY * 0.65
        },
        {
          code: '03',
          stage: 'CONVERT',
          sub: 'Funnels · CRM Capture',
          color: '#ff4d2d',
          sx: -startOrbitX,
          sy: midOrbitY,
          ex: -endOrbitX * 0.96,
          ey: midOrbitY * 0.88
        },
        {
          code: '04',
          stage: 'AUTOMATE',
          sub: 'AI Agents · Voice AI',
          color: '#8b5cf6',
          sx: startOrbitX,
          sy: midOrbitY,
          ex: endOrbitX * 0.96,
          ey: midOrbitY * 0.88
        },
        {
          code: '05',
          stage: 'OPTIMIZE',
          sub: 'Data · Hypothesis Loop',
          color: '#a3e635',
          sx: 0,
          sy: botOrbitY,
          ex: 0,
          ey: botOrbitY * 0.86
        }
      ];

      // Draw connecting conduits from each node to central core
      nodes.forEach((n, i) => {
        const nx = cx + n.sx + (n.ex - n.sx) * progress;
        const ny = cy + n.sy + (n.ey - n.sy) * progress;

        ctx.save();
        ctx.strokeStyle =
          progress > 0.35 ? '#0b0f17' : 'rgba(11,15,23,0.28)';
        ctx.lineWidth = progress > 0.35 ? (isMobile ? 2.2 : 3.2) : 1.8;
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
        ctx.arc(px, py, isMobile ? 4.2 : 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      // Central AxonVortex Command Core
      const coreScale = isMobile
        ? 0.76 + progress * 0.12
        : (0.86 + progress * 0.2) * Math.min(1, scaleX + 0.15);
      const coreW = isMobile
        ? Math.min(176, W * 0.48)
        : Math.min(245, W * 0.42) * coreScale;
      const coreH = isMobile ? 78 : 114 * coreScale;
      drawBrutalBox(
        cx - coreW / 2,
        cy - coreH / 2,
        coreW,
        coreH,
        isMobile ? 12 : 16,
        '#0b0f17',
        '#0b0f17',
        isMobile ? 2.5 : 3.5,
        isMobile ? 4 : 7
      );

      ctx.fillStyle = '#a3e635';
      ctx.beginPath();
      ctx.roundRect(
        cx - coreW / 2 + (isMobile ? 6 : 10),
        cy - coreH / 2 + (isMobile ? 6 : 10),
        coreW - (isMobile ? 12 : 20),
        isMobile ? 18 : 24,
        5
      );
      ctx.fill();

      ctx.fillStyle = '#0b0f17';
      ctx.font = `700 ${isMobile ? '7.5px' : '10px'} "Fragment Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(
        progress < 0.42
          ? isMobile
            ? 'DIAGNOSING SILOS...'
            : 'STATE: DIAGNOSING SILOS...'
          : isMobile
          ? 'SYSTEM CONNECTED'
          : 'STATE: CONNECTED SYSTEM ACTIVE',
        cx,
        cy - coreH / 2 + (isMobile ? 18 : 26)
      );

      ctx.fillStyle = '#ffffff';
      ctx.font = `800 ${isMobile ? '13px' : '18px'} "Radio Canada Big", sans-serif`;
      ctx.fillText('AXONVORTEX CORE', cx, cy + (isMobile ? 5 : 7));

      ctx.fillStyle = '#f59e0b';
      ctx.font = `600 ${isMobile ? '9px' : '11px'} "Fragment Mono", monospace`;
      ctx.fillText(
        `SYNC EFFICIENCY: ${Math.round(42 + progress * 58)}%`,
        cx,
        cy + (isMobile ? 22 : 29)
      );

      // Draw each of the 5 Orbiting Node Cards
      nodes.forEach((n) => {
        const nx = cx + n.sx + (n.ex - n.sx) * progress;
        const ny = cy + n.sy + (n.ey - n.sy) * progress;
        drawBrutalBox(
          nx - cardW / 2,
          ny - cardH / 2,
          cardW,
          cardH,
          isMobile ? 9 : 12,
          '#ffffff',
          '#0b0f17',
          isMobile ? 2.2 : 3,
          isMobile ? 3 : 5
        );

        const pillW = isMobile ? 22 : 30;
        const pillH = isMobile ? 15 : 18;
        drawBrutalBox(
          nx - cardW / 2 + (isMobile ? 6 : 9),
          ny - cardH / 2 + (isMobile ? 6 : 9),
          pillW,
          pillH,
          4,
          n.color,
          '#0b0f17',
          1.8,
          0
        );
        ctx.fillStyle =
          n.color === '#2563eb' ||
          n.color === '#8b5cf6' ||
          n.color === '#ff4d2d'
            ? '#ffffff'
            : '#0b0f17';
        ctx.font = `700 ${isMobile ? '8px' : '9.5px'} "Fragment Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(
          n.code,
          nx - cardW / 2 + (isMobile ? 6 : 9) + pillW / 2,
          ny - cardH / 2 + (isMobile ? 16.5 : 22)
        );

        ctx.textAlign = 'left';
        ctx.fillStyle = '#0b0f17';
        ctx.font = `700 ${isMobile ? '10px' : '12.5px'} "Radio Canada Big", sans-serif`;
        ctx.fillText(
          n.stage,
          nx - cardW / 2 + (isMobile ? 33 : 45),
          ny - cardH / 2 + (isMobile ? 17 : 22)
        );

        ctx.fillStyle = '#323232';
        ctx.font = `500 ${isMobile ? '7.8px' : '9.5px'} "Fragment Mono", monospace`;
        ctx.fillText(
          n.sub,
          nx - cardW / 2 + (isMobile ? 6 : 10),
          ny - cardH / 2 + (isMobile ? 35 : 44)
        );
      });
    } else if (scene === 'problem-diagnosis') {
      // Scene 2: Diagnostic X-Ray Scanner inspecting the 6 Pain Points
      drawBlueprintGrid('#091326', 'rgba(255, 255, 255, 0.055)');

      // Top section title inside canvas
      ctx.fillStyle = '#a3e635';
      ctx.font = `700 ${isMobile ? '9.5px' : '12px'} "Fragment Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(
        isMobile
          ? 'LIVE DIAGNOSTIC X-RAY · SCROLL TO SCAN LEAKS'
          : 'LIVE DIAGNOSTIC X-RAY · SCROLL TO SCAN & RESOLVE GROWTH LEAKS',
        cx,
        Math.max(isMobile ? 42 : 115, H * (isMobile ? 0.08 : 0.16))
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

      const gridW = Math.min(960, W - (isMobile ? 24 : 48));
      const cols = W < 760 ? 2 : 3;
      const gap = isMobile ? 10 : 20;
      const rows = Math.ceil(leaks.length / cols);
      const cellW = (gridW - (cols - 1) * gap) / cols;
      const cellH = isMobile ? 92 : 118;
      const startX = (W - gridW) / 2;
      const startY = H * 0.54 - (rows * cellH + (rows - 1) * gap) / 2;

      const scanX = startX + gridW * progress;

      leaks.forEach((lk, idx) => {
        const c = idx % cols;
        const r = Math.floor(idx / cols);
        const x = startX + c * (cellW + gap);
        const y = startY + r * (cellH + gap);
        const isScanned = x + cellW * 0.4 <= scanX;

        drawBrutalBox(
          x,
          y,
          cellW,
          cellH,
          isMobile ? 10 : 14,
          isScanned ? '#f8f6f0' : '#132038',
          isScanned ? '#a3e635' : '#ff4d2d',
          isMobile ? 2.2 : 3,
          isMobile ? 4 : 6
        );

        const pillW = isMobile ? 80 : 96;
        const pillH = isMobile ? 18 : 22;
        drawBrutalBox(
          x + (isMobile ? 8 : 14),
          y + (isMobile ? 8 : 14),
          pillW,
          pillH,
          5,
          isScanned ? '#a3e635' : '#ff4d2d',
          '#0b0f17',
          1.8,
          0
        );
        ctx.fillStyle = isScanned ? '#0b0f17' : '#ffffff';
        ctx.font = `700 ${isMobile ? '8.5px' : '10px'} "Fragment Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(
          isScanned ? 'RESOLVED ✓' : lk.code,
          x + (isMobile ? 8 : 14) + pillW / 2,
          y + (isMobile ? 20 : 29)
        );

        ctx.textAlign = 'left';
        ctx.fillStyle = isScanned ? '#0b0f17' : '#ffffff';
        ctx.font = `700 ${isSmallMobile ? '11px' : isMobile ? '12.5px' : '15px'} "Radio Canada Big", sans-serif`;
        ctx.fillText(lk.title, x + (isMobile ? 8 : 14), y + (isMobile ? 48 : 62));

        ctx.fillStyle = isScanned ? '#194d15' : 'rgba(255,255,255,0.68)';
        ctx.font = `500 ${isSmallMobile ? '9px' : isMobile ? '10px' : '12px'} "Fragment Mono", monospace`;
        ctx.fillText(
          isScanned
            ? `→ ${lk.fix}`
            : isMobile
            ? 'Losing Opportunities'
            : 'Status: Losing Opportunities',
          x + (isMobile ? 8 : 14),
          y + (isMobile ? 72 : 90)
        );
      });

      ctx.save();
      ctx.strokeStyle = '#a3e635';
      ctx.lineWidth = isMobile ? 3 : 4;
      ctx.beginPath();
      ctx.moveTo(scanX, startY - (isMobile ? 14 : 24));
      ctx.lineTo(scanX, startY + rows * (cellH + gap) + 6);
      ctx.stroke();

      const scanBadgeW = isMobile ? 150 : 190;
      const scanBadgeX = Math.max(
        10,
        Math.min(W - scanBadgeW - 10, scanX - scanBadgeW / 2)
      );
      drawBrutalBox(
        scanBadgeX,
        startY - (isMobile ? 38 : 50),
        scanBadgeW,
        isMobile ? 24 : 28,
        8,
        '#a3e635',
        '#0b0f17',
        2.2,
        4
      );
      ctx.fillStyle = '#0b0f17';
      ctx.font = `700 ${isMobile ? '9.5px' : '11px'} "Fragment Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(
        `AUDIT SCAN: ${Math.round(progress * 100)}%`,
        scanBadgeX + scanBadgeW / 2,
        startY - (isMobile ? 22 : 32)
      );
      ctx.restore();
    } else if (scene === 'autonomous-loop') {
      // Scene 3: 24/7 Autonomous AI & Growth Notification Stream
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

      const cardW = Math.min(680, W - (isMobile ? 24 : 44));
      const rowGap = Math.min(
        isMobile ? 64 : 72,
        Math.max(isMobile ? 52 : 54, (H - 44) / events.length)
      );
      const cardH = Math.min(isMobile ? 56 : 60, rowGap - 8);
      const totalStackH = (events.length - 1) * rowGap;
      const baseTop = Math.max(34, (H - totalStackH) / 2);

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
          isMobile ? 10 : 12,
          '#ffffff',
          '#0b0f17',
          isMobile ? 2.4 : 3,
          isMobile ? 3 : 5
        );

        if (isMobile) {
          // Two-row compact layout inside notification card so text never overflows on phones
          drawBrutalBox(
            -cardW / 2 + 10,
            -cardH / 2 + 6,
            92,
            18,
            5,
            ev.accent,
            '#0b0f17',
            1.6,
            0
          );
          ctx.fillStyle =
            ev.accent === '#8b5cf6' ||
            ev.accent === '#2563eb' ||
            ev.accent === '#ff4d2d'
              ? '#ffffff'
              : '#0b0f17';
          ctx.font = '700 8px "Fragment Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText(ev.badge, -cardW / 2 + 56, -cardH / 2 + 18);

          ctx.textAlign = 'right';
          ctx.fillStyle = '#194d15';
          ctx.font = '700 9.5px "Fragment Mono", monospace';
          ctx.fillText(ev.time, cardW / 2 - 10, -cardH / 2 + 18);

          ctx.textAlign = 'left';
          ctx.fillStyle = '#0b0f17';
          ctx.font = `700 ${isSmallMobile ? '10.2px' : '11.5px'} "Radio Canada", sans-serif`;
          ctx.fillText(ev.title, -cardW / 2 + 10, cardH / 2 - 10);
        } else {
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
        }

        ctx.restore();
      });
    } else {
      // Scene 4: "system-convergence" — The AxonVortex Growth Loop
      drawBlueprintGrid('#0b0f17', 'rgba(255, 255, 255, 0.05)');

      ctx.fillStyle = '#a3e635';
      ctx.font = `700 ${isMobile ? '9.5px' : '12px'} "Fragment Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(
        isMobile
          ? 'THE AXONVORTEX GROWTH LOOP · COMPOUNDING SYSTEM'
          : 'THE AXONVORTEX GROWTH LOOP · CONTINUOUS COMPOUNDING EXPERIMENTATION',
        cx,
        Math.max(isMobile ? 48 : 115, H * (isMobile ? 0.12 : 0.18))
      );

      const loopNodes = [
        { full: 'HYPOTHESIS', short: 'HYPOTHESIS' },
        { full: 'ACTION', short: 'ACTION' },
        { full: 'MEASURE', short: 'MEASURE' },
        { full: 'LEARN', short: 'LEARN' },
        { full: 'IMPROVE & SCALE', short: 'SCALE' }
      ];
      const colors = ['#f59e0b', '#2563eb', '#8b5cf6', '#ff4d2d', '#a3e635'];
      const boxW = isMobile ? Math.min(92, Math.max(62, (W - 28) / 5 - 4)) : 148;
      const boxH = isMobile ? 44 : 54;
      const trackW = Math.min(920, W - boxW - (isMobile ? 20 : 60));
      const startX = (W - trackW) / 2;
      const baseY = H * (isMobile ? 0.72 : 0.68);
      const curveRise = isMobile ? Math.min(145, H * 0.36) : 200;

      ctx.strokeStyle = '#a3e635';
      ctx.lineWidth = isMobile ? 3.5 : 5;
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const t = (i / 100) * Math.max(0.08, progress);
        const x = startX + t * trackW;
        const y = baseY - Math.pow(t, 1.65) * curveRise + Math.sin(t * 16) * (isMobile ? 4 : 8);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      loopNodes.forEach((node, idx) => {
        const t = idx / (loopNodes.length - 1);
        const x = startX + t * trackW;
        const y = baseY - Math.pow(t, 1.65) * curveRise;
        const active = progress >= t - 0.05;

        drawBrutalBox(
          x - boxW / 2,
          y - boxH / 2,
          boxW,
          boxH,
          isMobile ? 8 : 12,
          active ? colors[idx] : '#1e293b',
          '#000000',
          isMobile ? 2 : 3,
          isMobile ? 3 : 5
        );
        ctx.fillStyle =
          active && (idx === 1 || idx === 2 || idx === 3)
            ? '#ffffff'
            : active
            ? '#0b0f17'
            : '#94a3b8';
        ctx.font = `700 ${isMobile ? '8px' : '10px'} "Fragment Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(`0${idx + 1}`, x, y - (isMobile ? 5 : 8));
        ctx.font = `800 ${isSmallMobile ? '8.5px' : isMobile ? '9.5px' : '12px'} "Radio Canada Big", sans-serif`;
        ctx.fillText(isMobile ? node.short : node.full, x, y + (isMobile ? 10 : 11));
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
