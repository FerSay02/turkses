import * as React from 'react';

export function AnimatedArrow() {
  return (
    <span className="animated-arrow" aria-hidden="true">
      <span className="animated-arrow-line" />
      <span className="animated-arrow-head" />
    </span>
  );
}
