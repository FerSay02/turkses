import * as React from 'react';

type Star = {
  angle: number;
  baseRadius: number;
  depth: number;
  speed: number;
  size: number;
  colorIndex: number;
  sparkle: number;
  seed: number;
  prevX: number;
  prevY: number;
};

type GlitterWrapProps = {
  reverse?: boolean;
  speed?: number;
  particleCount?: number;
  density?: number;
  starSize?: number;
  focalDepth?: number;
  turbulence?: number;
  brightness?: number;
  glitterIntensity?: number;
  trailAmount?: number;
  color1?: string;
  color2?: string;
  color3?: string;
};

const DEFAULT_COLORS = ['#ffffff', '#CEEAD6', '#34A853'] as const;

function createStar(width: number, height: number, density: number, starSize: number): Star {
  const minDim = Math.min(width, height) || 1;
  const spread = 0.18 + density / 125;
  const maxRadius = minDim * spread;
  return {
    angle: Math.random() * Math.PI * 2,
    baseRadius: Math.random() * maxRadius,
    depth: 0.08 + Math.random() * 0.92,
    speed: 0.45 + Math.random() * 0.85,
    size: 0.45 + Math.random() * (starSize / 18),
    colorIndex: Math.floor(Math.random() * 3),
    sparkle: Math.random() * 0.35,
    seed: Math.random() * 1000,
    prevX: 0,
    prevY: 0,
  };
}

export function GlitterWrap({
  reverse = false,
  speed = 5,
  particleCount = 220,
  density = 100,
  starSize = 20,
  focalDepth = 8,
  turbulence = 0.18,
  brightness = 0.42,
  glitterIntensity = 0.1,
  trailAmount = 0.12,
  color1 = DEFAULT_COLORS[0],
  color2 = DEFAULT_COLORS[1],
  color3 = DEFAULT_COLORS[2],
}: GlitterWrapProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const frameRef = React.useRef<number | null>(null);
  const starsRef = React.useRef<Star[]>([]);
  const sizeRef = React.useRef({ width: 0, height: 0, dpr: 1 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const resize = () => {
      const parent = canvas.parentElement;
      const width = Math.max(1, parent?.clientWidth ?? window.innerWidth);
      const height = Math.max(1, parent?.clientHeight ?? window.innerHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      sizeRef.current = { width, height, dpr };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = Array.from({ length: particleCount }, () =>
        createStar(width, height, density, starSize),
      );
    };

    resize();
    const parent = canvas.parentElement;
    const ro = parent ? new ResizeObserver(resize) : null;
    if (ro && parent) {
      ro.observe(parent);
    }
    window.addEventListener('resize', resize);

    let running = true;
    let last = performance.now();

    const colors = [color1, color2, color3];
    let frameCount = 0;
    const animate = (now: number) => {
      if (!running) {
        return;
      }

      if (document.hidden) {
        frameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      frameCount += 1;
      if (frameCount % 3 !== 0) {
        frameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      const { width, height } = sizeRef.current;
      const delta = Math.min(32, now - last);
      last = now;

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = `rgba(32, 33, 36, ${Math.min(0.2, 0.06 + trailAmount * 0.38)})`;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';

      const cx = width / 2;
      const cy = height / 2;
      const minDim = Math.min(width, height) || 1;
      const driftAmount = turbulence * 8;
      const warp = (speed / 8) * (delta / 16.667);
      const direction = reverse ? 1 : -1;

      for (const star of starsRef.current) {
        star.depth += direction * warp * star.speed * 0.018;
        if (!reverse && star.depth <= 0.08) {
          Object.assign(star, createStar(width, height, density, starSize));
          star.depth = 0.98;
        } else if (reverse && star.depth >= 1.22) {
          Object.assign(star, createStar(width, height, density, starSize));
          star.depth = 0.08;
        }

        const perspective = 1 / Math.max(0.18, star.depth * focalDepth);
        const radius = star.baseRadius * perspective * 0.92;
        const wobblePhase = now * 0.0012 + star.seed;
        const wobbleScale = driftAmount * perspective;
        const wobbleX = Math.sin(wobblePhase + radius * 0.03) * wobbleScale;
        const wobbleY = Math.cos(wobblePhase * 1.15 + radius * 0.025) * wobbleScale;
        const x = cx + Math.cos(star.angle) * radius + wobbleX;
        const y = cy + Math.sin(star.angle) * radius + wobbleY;
        const color = colors[star.colorIndex] ?? color1;
        const alpha = Math.max(0.08, Math.min(0.95, brightness * perspective * 0.54));
        const size = Math.max(0.6, star.size * perspective * 1.15);

        if (star.prevX || star.prevY) {
          ctx.beginPath();
          ctx.moveTo(star.prevX, star.prevY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = colorWithAlpha(color, alpha * (0.16 + trailAmount * 0.6));
          ctx.lineWidth = Math.max(0.6, size * 0.35);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.fillStyle = colorWithAlpha(color, alpha);
        ctx.shadowColor = colorWithAlpha(color, alpha * 0.25);
        ctx.shadowBlur = 4 + size * 1.35;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        if (Math.random() < glitterIntensity * 0.008) {
          star.sparkle = 1;
        }
        if (star.sparkle > 0.01) {
          const sparkleSize = size * (1.35 + star.sparkle * 1.1);
          ctx.beginPath();
          ctx.shadowBlur = 10 + sparkleSize * 1.2;
          ctx.fillStyle = colorWithAlpha('#ffffff', star.sparkle * 0.85);
          ctx.arc(x, y, sparkleSize, 0, Math.PI * 2);
          ctx.fill();
          star.sparkle *= 0.82;
        }

        star.prevX = x;
        star.prevY = y;
      }

      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = `rgba(32, 33, 36, ${Math.min(0.12, 0.03 + trailAmount * 0.05)})`;
      ctx.fillRect(0, 0, width, height);

      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      running = false;
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('resize', resize);
      ro?.disconnect();
    };
  }, [
    brightness,
    color1,
    color2,
    color3,
    density,
    focalDepth,
    glitterIntensity,
    particleCount,
    reverse,
    speed,
    starSize,
    trailAmount,
    turbulence,
  ]);

  return (
    <div className="glitter-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="glitter-wrap-canvas" />
    </div>
  );
}

function colorWithAlpha(color: string, alpha: number) {
  const normalized = color.replace('#', '');
  const bigint = Number.parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, alpha))})`;
}
