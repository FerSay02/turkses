import * as React from 'react';

type SectionJumpNavItem = {
  href: string;
  label: string;
};

type SectionJumpNavProps = {
  items: readonly SectionJumpNavItem[];
  ariaLabel: string;
};

export function SectionJumpNav({ items, ariaLabel }: SectionJumpNavProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="page-jump-nav" aria-label={ariaLabel}>
      {items.map((item) => (
        <a key={item.href} className="page-jump-link" href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
