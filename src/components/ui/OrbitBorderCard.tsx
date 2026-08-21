import * as React from 'react';

type OrbitBorderElement = 'article' | 'div' | 'footer' | 'nav' | 'section';

type OrbitBorderCardProps = {
  as?: OrbitBorderElement;
  children: React.ReactNode;
  className?: string;
  phase?: number;
  speed?: number;
  strokeSize?: number;
  hoverFill?: number;
} & React.HTMLAttributes<HTMLElement>;

const { useEffect, useRef, useState } = React;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reduced;
}

export function OrbitBorderCard({
  as = 'article',
  children,
  className,
  phase = 0,
  speed = 8,
  strokeSize = 1,
  hoverFill = 104,
  ...rest
}: OrbitBorderCardProps) {
  const Component = as;
  const frameRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return undefined;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (!entry) {
        return;
      }

      const { width, height } = entry.contentRect;
      frame.style.setProperty('--orbit-size', `${Math.ceil(Math.max(width, height) * 1.5)}px`);
    });

    resizeObserver.observe(frame);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || prefersReducedMotion) {
      return undefined;
    }

    let animationFrame = 0;
    let startTime = 0;

    const rotate = (time: number) => {
      if (startTime === 0) {
        startTime = time;
      }

      const progress = ((time - startTime) / (speed * 1000)) * 360;
      frame.style.setProperty('--orbit-angle', `${(phase + progress) % 360}deg`);
      animationFrame = window.requestAnimationFrame(rotate);
    };

    animationFrame = window.requestAnimationFrame(rotate);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [phase, prefersReducedMotion, speed]);

  return (
    <Component
      ref={frameRef as React.RefObject<any>}
      className={`orbit-border-card ${className ?? ''}`.trim()}
      {...rest}
      style={
        {
          ...rest.style,
          '--orbit-angle': `${phase}deg`,
          '--orbit-stroke-size': `${strokeSize}px`,
          '--orbit-hover-fill': `${hoverFill}deg`,
        } as React.CSSProperties
      }
    >
      <span className="orbit-border-card__ring" aria-hidden="true">
        <span className="orbit-border-card__comet" />
        <span className="orbit-border-card__glow" />
      </span>
      {children}
    </Component>
  );
}
