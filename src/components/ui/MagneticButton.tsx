import * as React from 'react';

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  tone: 'solid' | 'ghost';
  href?: string;
};

export function MagneticButton({ children, className, tone, href }: MagneticButtonProps) {
  const ref = React.useRef<HTMLElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 1.25;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 1.25;
    element.style.setProperty('--magnetic-x', `${offsetX.toFixed(2)}px`);
    element.style.setProperty('--magnetic-y', `${offsetY.toFixed(2)}px`);
  };

  const handleLeave = () => {
    const element = ref.current;
    if (!element) {
      return;
    }
    element.style.setProperty('--magnetic-x', '0px');
    element.style.setProperty('--magnetic-y', '0px');
  };

  return (
    href ? (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={`${className ?? ''} magnetic-button tone-${tone}`.trim()}
        href={href}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        {children}
      </a>
    ) : (
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        className={`${className ?? ''} magnetic-button tone-${tone}`.trim()}
        type="button"
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        {children}
      </button>
    )
  );
}
