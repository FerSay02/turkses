export type Locale = 'tr' | 'en';

export type LinkItem = {
  label: string;
  href: string;
};

export type TitledBodyItem = {
  title: string;
  body: string;
};

export type TimelineItem = {
  index: string;
  title: string;
  body: string;
};

export type RoadmapYear = {
  year: string;
  milestones: readonly string[];
};

export type PublicationItem = {
  title: string;
  status: string;
};

export type TranslationMap = {
  brand: string;
  brandTag: string;
  nav: readonly LinkItem[];
  localeLabel: string;
  heroKicker: string;
  heroTitleLines: readonly [string, string];
  heroLead: string;
  heroSecondary: string;
  ctas: {
    primary: LinkItem;
    secondary: LinkItem;
  };
  visual: {
    title: string;
    subtitle: string;
    annotations: readonly string[];
  };
  trust: readonly string[];
  sections: {
    about: {
      id: string;
      kicker?: string;
      title: string;
      lead: string;
      needsTitle: string;
      needs: readonly string[];
      objectivesTitle: string;
      objectives: readonly TitledBodyItem[];
    };
    approach: {
      id: string;
      kicker?: string;
      title: string;
      lead: string;
      flow: readonly string[];
      researchAreasTitle: string;
      researchAreas: readonly TitledBodyItem[];
      processTitle: string;
      process: readonly TimelineItem[];
    };
    technology: {
      id: string;
      kicker?: string;
      title: string;
      lead: string;
      areas: readonly TitledBodyItem[];
    };
    ethics: {
      id: string;
      kicker?: string;
      title: string;
      lead: string;
      pillars: readonly TitledBodyItem[];
    };
    roadmap: {
      id: string;
      kicker?: string;
      title: string;
      lead: string;
      years: readonly RoadmapYear[];
      outputsTitle: string;
      outputs: readonly TitledBodyItem[];
    };
    consortium: {
      id: string;
      kicker?: string;
      title: string;
      lead: string;
      organizations: readonly TitledBodyItem[];
      teamsTitle: string;
      teams: readonly string[];
    };
    openScience: {
      id: string;
      kicker?: string;
      title: string;
      lead: string;
      catalogue: readonly PublicationItem[];
      privacyNote: string;
    };
    news: {
      id: string;
      kicker?: string;
      title: string;
      lead: string;
      categories: readonly string[];
      emptyTitle: string;
      emptyBody: string;
    };
    contact: {
      id: string;
      kicker?: string;
      title: string;
      emailLabel: string;
      email: string;
      body: string;
      logoAlt: string;
      logoPlaceholder: string;
    };
  };
  footer: {
    description: string;
    disclaimer: string;
    links: readonly LinkItem[];
    legalLinks: readonly LinkItem[];
    bottom: {
      copyright: string;
      notice: string;
    };
  };
};
