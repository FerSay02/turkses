import * as React from 'react';

type ScrollTextRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollTextReveal({ children, className, delay = 0 }: ScrollTextRevealProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.24 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`scroll-text-reveal-shell${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      <span className="scroll-text-reveal">{children}</span>
    </span>
  );
}
