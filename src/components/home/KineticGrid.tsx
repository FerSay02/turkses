import * as React from 'react';
import type { CSSProperties } from 'react';

type GridDot = {
  hx: number;
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type KineticGridProps = {
  background?: string;
  dotColor?: string;
  lineColor?: string;
  trailColor?: string;
  spacing?: number;
  radius?: number;
  strength?: number;
  trail?: boolean;
  style?: CSSProperties;
};

export function KineticGrid({
  background = '#202124',
  dotColor = '#CEEAD6',
  lineColor = '#0D652D',
  trailColor = '#34A853',
  spacing = 34,
  radius = 360,
  strength = 4,
  trail = true,
  style,
}: KineticGridProps) {
  const hostRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const mouseRef = React.useRef({ x: -9999, y: -9999, active: false });
  const trailRef = React.useRef<{ x: number; y: number; t: number }[]>([]);

  React.useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gap = Math.max(8, spacing);
    const pullRadius = Math.max(1, radius);
    const pull = (Math.max(1, Math.min(10, strength)) / 10) * 4;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 1;
    let height = 1;
    let columns: GridDot[][] = [];
    let dots: GridDot[] = [];
    let raf = 0;

    const buildGrid = (measuredWidth?: number, measuredHeight?: number) => {
      const rect = host.getBoundingClientRect();
      width = Math.max(1, Math.floor(measuredWidth ?? rect.width));
      height = Math.max(1, Math.floor(measuredHeight ?? rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = [];
      dots = [];
      const columnCount = Math.floor(width / gap) + 2;
      const rowCount = Math.floor(height / gap) + 2;

      for (let column = 0; column < columnCount; column += 1) {
        const currentColumn: GridDot[] = [];
        for (let row = 0; row < rowCount; row += 1) {
          const dot = {
            hx: column * gap,
            hy: row * gap,
            x: column * gap,
            y: row * gap,
            vx: 0,
            vy: 0,
          };
          currentColumn.push(dot);
          dots.push(dot);
        }
        columns.push(currentColumn);
      }
    };

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      mouseRef.current = { x, y, active: x >= 0 && x <= width && y >= 0 && y <= height };
      if (!mouseRef.current.active) return;

      const points = trailRef.current;
      points.push({ x, y, t: performance.now() });
      if (points.length > 80) points.shift();
    };

    const clearMouse = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false };
    };

    const draw = () => {
      const mouse = mouseRef.current;
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        let ax = (dot.hx - dot.x) * 0.08;
        let ay = (dot.hy - dot.y) * 0.08;

        if (mouse.active) {
          const dx = mouse.x - dot.x;
          const dy = mouse.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pullRadius && dist > 0.001) {
            const force = (1 - dist / pullRadius) * pull;
            ax += (dx / dist) * force;
            ay += (dy / dist) * force;
          }
        }

        dot.vx = (dot.vx + ax) * 0.82;
        dot.vy = (dot.vy + ay) * 0.82;
        dot.x += dot.vx;
        dot.y += dot.vy;
      }

      for (let column = 0; column < columns.length; column += 1) {
        const currentColumn = columns[column];
        if (!currentColumn) continue;

        for (let row = 0; row < currentColumn.length; row += 1) {
          const dot = currentColumn[row];
          if (!dot) continue;

          const right = columns[column + 1]?.[row];
          const down = currentColumn[row + 1];
          const proximity = mouse.active
            ? Math.max(0, 1 - Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2) / pullRadius)
            : 0;

          ctx.globalAlpha = 0.055 + proximity * 0.64;
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.45 + proximity * 1.35;

          if (right) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }

          if (down) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(down.x, down.y);
            ctx.stroke();
          }
        }
      }

      for (const dot of dots) {
        const proximity = mouse.active
          ? Math.max(0, 1 - Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2) / pullRadius)
          : 0;
        ctx.globalAlpha = 0.2 + proximity * 0.72;
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 0.75 + proximity * 2.1, 0, 2 * Math.PI);
        ctx.fill();
      }

      if (trail) {
        const now = performance.now();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < trailRef.current.length; i += 1) {
          const start = trailRef.current[i - 1];
          const end = trailRef.current[i];
          if (!start || !end) continue;

          const age = now - end.t;
          if (age > 260) continue;

          ctx.globalAlpha = Math.max(0, 1 - age / 260) * 0.82;
          ctx.strokeStyle = trailColor;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    buildGrid();
    const resizeObserver = new ResizeObserver((entries) => {
      const contentRect = entries[0]?.contentRect;
      buildGrid(contentRect?.width, contentRect?.height);
      if (prefersReducedMotion) draw();
    });

    resizeObserver.observe(host);
    const handlePointerMove = (event: PointerEvent) => updateMouse(event.clientX, event.clientY);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', clearMouse);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', clearMouse);
    };
  }, [background, dotColor, lineColor, radius, spacing, strength, trail, trailColor]);

  return (
    <div ref={hostRef} className="kinetic-grid" style={{ background, ...style }}>
      <canvas ref={canvasRef} className="kinetic-grid-canvas" />
    </div>
  );
}
