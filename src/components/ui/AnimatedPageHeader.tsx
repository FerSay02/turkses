import * as React from 'react';
import StrokeText from './StrokeText';

type AnimatedPageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'start' | 'center';
  eyebrowTone?: 'blue' | 'green';
};

const TITLE_BREAKPOINTS = [
  { width: 480, chars: 18 },
  { width: 760, chars: 28 },
  { width: 1024, chars: 38 },
  { width: Number.POSITIVE_INFINITY, chars: 48 },
];
const DEFAULT_TITLE_MAX_CHARS = 48;

function splitTitleLines(text: string, maxChars: number) {
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  let current = '';

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;

    if (current && next.length > maxChars) {
      lines.push(current);
      current = word;
      return;
    }

    current = next;
  });

  if (current) {
    lines.push(current);
  }

  return lines.length ? lines : [text];
}

function useResponsiveTitleLines(title: string) {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const [maxChars, setMaxChars] = React.useState(DEFAULT_TITLE_MAX_CHARS);

  React.useLayoutEffect(() => {
    const node = ref.current;
    if (!node || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const update = () => {
      const width = node.getBoundingClientRect().width;
      const match = TITLE_BREAKPOINTS.find((breakpoint) => width <= breakpoint.width);
      const next = match?.chars ?? DEFAULT_TITLE_MAX_CHARS;
      setMaxChars((prev) => (prev === next ? prev : next));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return {
    ref,
    lines: React.useMemo(() => splitTitleLines(title, maxChars), [title, maxChars]),
  };
}

export function AnimatedPageHeader({
  title,
  description,
}: AnimatedPageHeaderProps) {
  const titleLines = useResponsiveTitleLines(title);

  return (
    <div className="section-heading page-header section-heading-center">
      <h1 ref={titleLines.ref} className="section-title page-header-title" aria-label={title}>
        {titleLines.lines.map((line, index) => (
          <StrokeText
            key={`${line}-${index}`}
            className="page-header-stroke"
            text={line}
            strokeColor="#4285F4"
            fillColor="#174EA6"
            strokeWidth={1.1}
            drawDuration={0.75}
            fillDelay={0.08}
            stagger={0.01}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize="clamp(34px, 3.2vw, 52px)"
            fontWeight={400}
            letterSpacing="-0.03em"
          />
        ))}
      </h1>
      {description ? <p className="section-lead page-header-description">{description}</p> : null}
    </div>
  );
}
