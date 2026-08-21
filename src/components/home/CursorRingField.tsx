import * as React from 'react';
import type { CSSProperties } from 'react';

type CursorRingColors =
  | string[]
  | {
      items?: string[];
      background?: string;
    };

type CursorRingProps = {
  push?: number;
  width?: number;
  radius?: number;
  turbulence?: number;
};

type CursorRingFieldProps = {
  background?: string;
  colors?: CursorRingColors;
  density?: number;
  dotSize?: number;
  speed?: number;
  cameraDistance?: number;
  ring?: CursorRingProps;
  style?: CSSProperties;
};

type Particle = {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  size: number;
  color: string;
};

const DEFAULT_COLORS: [string, string, string, string] = ['#4285F4', '#174EA6', '#D2E3FC', '#34A853'];

function resolveColors(colors?: CursorRingColors) {
  if (Array.isArray(colors)) return colors.length > 0 ? colors : DEFAULT_COLORS;
  return colors?.items?.length ? colors.items : DEFAULT_COLORS;
}

export function CursorRingField({
  background = '#ffffff',
  colors,
  density = 560,
  dotSize = 42,
  speed = 5,
  cameraDistance: _cameraDistance = 160,
  ring = { push: 38, width: 9, radius: 12, turbulence: 70 },
  style,
}: CursorRingFieldProps) {
  const hostRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const particlesRef = React.useRef<Particle[]>([]);
  const pointerRef = React.useRef({ x: 0, y: 0, active: false });
  const ringRef = React.useRef({ x: 0, y: 0 });
  const propsRef = React.useRef({ colors, density, dotSize, speed, ring });

  propsRef.current = { colors, density, dotSize, speed, ring };

  React.useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 1;
    let height = 1;
    let raf = 0;
    let lastTime = performance.now();

    const buildParticles = () => {
      const { colors: liveColors, density: liveDensity, dotSize: liveDotSize } = propsRef.current;
      const palette = resolveColors(liveColors);
      const count = Math.max(220, Math.min(1400, Math.round(liveDensity * 2)));
      const particles: Particle[] = [];
      const columns = Math.ceil(Math.sqrt(count * (width / Math.max(height, 1))));
      const rows = Math.ceil(count / columns);
      const cellW = width / columns;
      const cellH = height / rows;

      for (let index = 0; index < count; index += 1) {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = column * cellW + Math.random() * cellW;
        const y = row * cellH + Math.random() * cellH;

        particles.push({
          homeX: x,
          homeY: y,
          x,
          y,
          vx: 0,
          vy: 0,
          phase: Math.random() * Math.PI * 2,
          size: (0.5 + Math.random() * 1.05) * (liveDotSize / 42),
          color: palette[index % palette.length] ?? DEFAULT_COLORS[0],
        });
      }

      particlesRef.current = particles;
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ringRef.current = { x: width / 2, y: height / 2 };
      buildParticles();
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      pointerRef.current = {
        x,
        y,
        active: x >= 0 && x <= rect.width && y >= 0 && y <= rect.height,
      };
    };

    const clearPointer = () => {
      pointerRef.current = { x: width / 2, y: height / 2, active: false };
    };

    const draw = (time: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (time - lastTime) / 1000));
      lastTime = time;

      const { speed: liveSpeed, ring: liveRing } = propsRef.current;
      const pointer = pointerRef.current;
      const ringState = ringRef.current;
      const speedScale = Math.max(0.2, liveSpeed / 5);
      const wanderX = width / 2 + Math.sin(time * 0.00019 * speedScale) * width * 0.18;
      const wanderY = height / 2 + Math.cos(time * 0.00023 * speedScale) * height * 0.14;
      const targetX = pointer.active ? pointer.x : wanderX;
      const targetY = pointer.active ? pointer.y : wanderY;

      ringState.x += (targetX - ringState.x) * (pointer.active ? 0.18 : 0.035);
      ringState.y += (targetY - ringState.y) * (pointer.active ? 0.18 : 0.035);

      ctx.clearRect(0, 0, width, height);

      const influenceRadius = Math.max(120, Math.min(420, (liveRing.radius ?? 12) * 22));
      const softness = Math.max(0.75, (liveRing.width ?? 9) / 9);
      const push = Math.max(0, (liveRing.push ?? 38) / 38);
      const turbulence = Math.max(0, (liveRing.turbulence ?? 70) / 70);

      for (const particle of particlesRef.current) {
        const dx = particle.homeX - ringState.x;
        const dy = particle.homeY - ringState.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - distance / (influenceRadius * softness));
        const energy = proximity * proximity;
        const angle = Math.atan2(dy, dx);
        const noise = Math.sin(time * 0.0012 * speedScale + particle.phase) * turbulence;
        const force = energy * push * 18;
        const targetXParticle = particle.homeX + Math.cos(angle) * force + noise * 3;
        const targetYParticle = particle.homeY + Math.sin(angle) * force + noise * 3;

        particle.vx = (particle.vx + (targetXParticle - particle.x) * 0.035) * 0.82;
        particle.vy = (particle.vy + (targetYParticle - particle.y) * 0.035) * 0.82;
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(angle + noise * 0.5);
        ctx.globalAlpha = 0.16 + energy * 0.54;
        ctx.fillStyle = particle.color;
        const length = particle.size * (2.6 + energy * 5.2);
        const heightSize = particle.size * (0.9 + energy * 1.1);
        const radiusSize = heightSize / 2;
        ctx.beginPath();
        ctx.roundRect(-length / 2, -heightSize / 2, length, heightSize, radiusSize);
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    window.addEventListener('pointermove', updatePointer);
    window.addEventListener('pointerleave', clearPointer);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('pointerleave', clearPointer);
    };
  }, []);

  return (
    <div ref={hostRef} className="cursor-ring-field" style={{ background, ...style }}>
      <canvas ref={canvasRef} className="cursor-ring-field-canvas" />
    </div>
  );
}
