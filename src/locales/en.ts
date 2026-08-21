import type { TranslationMap } from './types';

export const en: TranslationMap = {
  brand: 'TürkSes',
  brandTag: 'SIGNAL / EVIDENCE',
  nav: [
    { label: 'Project', href: '/proje' },
    { label: 'Approach', href: '/yaklasim' },
    { label: 'Data & Ethics', href: '/veri-etik' },
    { label: 'Roadmap', href: '/yol-haritasi' },
    { label: 'Open Science', href: '/acik-bilim' },
    { label: 'Contact', href: '/iletisim' },
  ],
  localeLabel: 'Language',
  heroKicker: 'Open science · speech signal research · early risk studies',
  heroTitleLines: ['A New View from Turkish Voices', 'to Cognitive Health'],
  heroLead:
    'TürkSes is an open-source research platform designed to support early risk assessment studies for Alzheimer’s disease and other cognitive disorders by analyzing Turkish speech, voice, and vocal signals with AI.',
  heroSecondary:
    'TürkSes is not a medical diagnostic system. AI outputs do not replace clinical judgment; they are being developed only to support risk assessment research and referral to health professionals.',
  ctas: {
    primary: { label: 'Explore the Project', href: '/proje' },
    secondary: { label: 'How Does It Work?', href: '/yaklasim' },
  },
  visual: {
    title: 'VoiceField',
    subtitle: 'Acoustic · temporal · linguistic trace',
    annotations: ['Acoustic', 'Temporal', 'Linguistic'],
  },
  trust: [
    'Academia-first research posture',
    'Focused on Turkish data representation',
    'Not a medical diagnosis system',
    'Supports referral to health professionals',
  ],
  sections: {
    about: {
      id: 'proje',
      kicker: 'About the project',
      title: 'What Is TürkSes?',
      lead:
        'TürkSes is a research initiative that opens Turkish-specific linguistic and acoustic patterns to scientific study while building secure data infrastructure and AI-assisted analysis tools for cognitive health research.',
      needsTitle: 'Why TürkSes?',
      needs: [
        'Early recognition of cognitive disorders is a critical need for research and referral pathways.',
        'Turkish speech data remain underrepresented in global research, limiting the ability of existing models to capture local context.',
        'Turkish-specific rhythm, prosody, syntax, and sound patterns require a dedicated research framework.',
      ],
      objectivesTitle: 'Research objectives',
      objectives: [
        {
          title: 'Turkish-focused data infrastructure',
          body: 'Build a sustainable research backbone that securely gathers, anonymizes, and prepares Turkish speech and vocal signals for analysis.',
        },
        {
          title: 'Multimodal investigation',
          body: 'Study linguistic content, acoustic features, and supporting vocal signals together in a shared research pipeline.',
        },
        {
          title: 'Responsible research outputs',
          body: 'Provide reusable and transparent outputs to the scientific community through open-source tools, model cards, data cards, and publications.',
        },
      ],
    },
    approach: {
      id: 'yaklasim',
      kicker: 'Our approach',
      title: 'A research flow that combines speech, acoustics, and AI',
      lead:
        'TürkSes studies spoken content and the physical properties of voice together. The aim is not diagnosis, but reliable research patterns that can inform scientific insight and early risk assessment support.',
      flow: ['VOICE', 'SPEECH / TEXT', 'LINGUISTIC + ACOUSTIC FEATURES', 'AI MODELS', 'RESEARCH INSIGHT'],
      researchAreasTitle: 'Four research areas',
      researchAreas: [
        {
          title: 'Focused on Turkish',
          body: 'The syntax, morphology, and speaking rhythm of Turkish are treated as a dedicated research axis.',
        },
        {
          title: 'Multimodal analysis',
          body: 'Linguistic content, acoustic voice features, and supporting vocal signals are combined within one analysis line.',
        },
        {
          title: 'Responsible AI',
          body: 'Explainability, fairness, and the research-only limits of model outputs are defined from the beginning.',
        },
        {
          title: 'Open science',
          body: 'Code, documentation, data cards, and publications are planned as shareable research outputs without exposing personal data.',
        },
      ],
      processTitle: 'How does it work?',
      process: [
        {
          index: '01',
          title: 'Information and consent',
          body: 'The participant journey, research scope, and data usage are explained clearly, with appropriate consent procedures.',
        },
        {
          index: '02',
          title: 'Collection of voice and speech data',
          body: 'Speech, voice, and relevant vocal signals are gathered in a structured way according to the research protocol.',
        },
        {
          index: '03',
          title: 'Anonymization and secure storage',
          body: 'Collected data are separated from identifying elements and stored under secure access rules.',
        },
        {
          index: '04',
          title: 'Linguistic and acoustic analysis',
          body: 'Speech-to-text, linguistic feature extraction, and acoustic signal analysis operate in one research workflow.',
        },
        {
          index: '05',
          title: 'AI modeling',
          body: 'Research models are developed on controlled data flows to study patterns, relationships, and risk signals.',
        },
        {
          index: '06',
          title: 'Risk assessment support',
          body: 'Outputs do not replace clinical decisions; they exist only to support research and referral to health professionals.',
        },
      ],
    },
    technology: {
      id: 'arastirma-teknoloji',
      kicker: 'Research and technology',
      title: 'Core technology areas',
      lead:
        'The technology stack is shaped around measurable research functions rather than decorative effects. Each layer is designed for data security, reproducibility, and research use.',
      areas: [
        {
          title: 'Speech and language analysis',
          body: 'Derives linguistic features such as word choice, fluency, pauses, and narrative organization from spoken content.',
        },
        {
          title: 'Acoustic voice analysis',
          body: 'Measures and compares signal properties such as pitch, energy, rhythm, duration, variation, and voice quality.',
        },
        {
          title: 'Cough and vocal signals',
          body: 'Treats non-speech vocal patterns as a separate research layer that strengthens multimodal modeling.',
        },
        {
          title: 'AI models',
          body: 'Combines feature representations with research-focused classification, ranking, and pattern discovery approaches in a controlled way.',
        },
        {
          title: 'Secure technology infrastructure',
          body: 'Manages the data and model lifecycle with role-based access, retention rules, and research logs.',
        },
      ],
    },
    ethics: {
      id: 'veri-etik',
      kicker: 'Data and ethics',
      title: 'Research governance and responsible data framework',
      lead:
        'TürkSes treats data collection and modeling not only as a technical task but also as a matter of research governance. Participant rights, security, fairness, and explainability are evaluated together.',
      pillars: [
        {
          title: 'Informed participant consent',
          body: 'Participants receive clear information about processing purposes, retention periods, access scope, and their rights.',
        },
        {
          title: 'Collection of necessary data only',
          body: 'Data categories unrelated to the research objective are not collected; data minimization is applied.',
        },
        {
          title: 'Anonymization and pseudonymization',
          body: 'Identifying fields are separated from research data and re-identification risk is actively reduced.',
        },
        {
          title: 'Role-based access and secure storage',
          body: 'Access is defined by role, responsibility, and auditable permission rules, with secure storage as the baseline.',
        },
        {
          title: 'Retention, destruction, and ethics board alignment',
          body: 'The data lifecycle is managed with retention and deletion rules while ethics obligations are tracked throughout the process.',
        },
        {
          title: 'AI fairness and responsible disclosure',
          body: 'Model performance is examined across different samples, and limitations and risks are reported openly.',
        },
      ],
    },
    roadmap: {
      id: 'yol-haritasi',
      kicker: 'Roadmap and outputs',
      title: 'The 2026–2028 research journey',
      lead:
        'The roadmap is structured as a phased research plan spanning data infrastructure, modeling tools, open science outputs, and application surfaces.',
      years: [
        {
          year: '2026',
          milestones: [
            'Clarification of the research framework, data protocols, and ethics processes',
            'Preparation of initial Turkish speech and vocal signal collection workflows',
            'Foundation of the secure storage and anonymization infrastructure',
          ],
        },
        {
          year: '2027',
          milestones: [
            'Maturation of linguistic and acoustic feature extraction tools',
            'Expansion of multimodal AI modeling experiments',
            'Preparation of research reports, data cards, and model cards for dissemination',
          ],
        },
        {
          year: '2028',
          milestones: [
            'Expansion of the open-source research platform and application surfaces',
            'Increase in scientific publications, events, and stakeholder outputs',
            'Strengthening of research collaborations and the sustainable open-science framework',
          ],
        },
      ],
      outputsTitle: 'Planned outputs',
      outputs: [
        {
          title: 'Turkish-specific datasets',
          body: 'Turkish-specific multimodal research datasets and the data cards that describe them.',
        },
        {
          title: 'Feature extraction tools',
          body: 'Reusable open-source tools for linguistic and acoustic feature extraction.',
        },
        {
          title: 'Research models',
          body: 'Alzheimer risk assessment models and research models built around cough and vocal signals.',
        },
        {
          title: 'Application surfaces',
          body: 'Web and mobile interfaces that support controlled research use.',
        },
        {
          title: 'Scientific output package',
          body: 'Scientific publications, research reports, model cards, events, and technical documentation.',
        },
      ],
    },
    consortium: {
      id: 'konsorsiyum',
      kicker: 'Consortium and team',
      title: 'Institutional partners and workstreams',
      lead:
        'TürkSes progresses with a consortium model that brings together research, software, AI, ethics, and dissemination under one coordinated structure.',
      organizations: [
        {
          title: 'Yapay Zekâ Ekosistemi Derneği – YZED',
          body: 'Supports ecosystem coordination, dissemination, and institutional collaboration across research stakeholders.',
        },
        {
          title: 'DeepZeka Information Software Technology Industry and Trade Inc.',
          body: 'Leads AI operationalization, technical implementation flows, and coordination of research delivery surfaces.',
        },
        {
          title: 'Gazi University',
          body: 'Contributes academic framing, research methodology, and domain or clinical knowledge.',
        },
      ],
      teamsTitle: 'Work groups',
      teams: [
        'Project Management',
        'Academic and Clinical Team',
        'AI and Data Science',
        'Software and Technical Infrastructure',
        'Ethics and Data Governance',
        'Communication and Dissemination',
      ],
    },
    openScience: {
      id: 'acik-bilim',
      kicker: 'Open science and publications',
      title: 'Shareable research outputs',
      lead:
        'The open-science approach targets code, documentation, and publications. Personal data, raw clinical records, and identifiable voice recordings are not part of public sharing.',
      catalogue: [
        { title: 'Open-source code', status: 'In preparation' },
        { title: 'Technical documentation', status: 'In preparation' },
        { title: 'Model cards', status: 'Coming soon' },
        { title: 'Dataset cards', status: 'Coming soon' },
        { title: 'Scientific publications', status: 'In preparation' },
        { title: 'Research reports', status: 'In preparation' },
        { title: 'Conference presentations', status: 'Coming soon' },
        { title: 'Workshop and event outputs', status: 'Coming soon' },
      ],
      privacyNote:
        'Open science does not mean open sharing of personal or clinical data. Raw clinical records, personal data, and identifiable voice recordings will not be made public.',
    },
    news: {
      id: 'haberler',
      kicker: 'News and events',
      title: 'Announcement and event stream',
      lead:
        'Project developments, scientific publications, conferences, workshops, and open-source announcements are planned to be shared here on a verified schedule.',
      categories: [
        'Project developments',
        'Scientific publications',
        'Conferences',
        'Workshops',
        'Research collaborations',
        'Open-source announcements',
        'Press and media',
      ],
      emptyTitle: 'First announcements are being prepared',
      emptyBody:
        'There are no published news or event entries yet. This area will be updated as verified project developments and scientific outputs become available.',
    },
    contact: {
      id: 'iletisim',
      kicker: 'Quick contact',
      title: 'Institutional contact',
      emailLabel: 'Email',
      email: 'info@deepzeka.com',
      body: 'We route your message to our technical and institutional teams and reply as quickly as possible.',
      logoAlt: 'DeepZeka',
      logoPlaceholder: 'The DeepZeka logo will be placed here',
    },
  },
  footer: {
    description:
      'An institutional research platform focused on acoustic, temporal, and linguistic patterns in Turkish speech data.',
    disclaimer:
      'TürkSes is not a medical diagnosis or treatment system. Research and AI outputs generated by the platform do not replace the evaluation of a health professional or clinical judgment.',
    links: [
      { label: 'About the Project', href: '/proje' },
      { label: 'How It Works', href: '/yaklasim' },
      { label: 'Research and Technology', href: '/yaklasim' },
      { label: 'Data and Ethics', href: '/veri-etik' },
      { label: 'Roadmap', href: '/yol-haritasi' },
      { label: 'Consortium and Team', href: '/yol-haritasi' },
      { label: 'Open Science', href: '/acik-bilim' },
      { label: 'News', href: '/acik-bilim' },
      { label: 'Contact', href: '/iletisim' },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '/veri-etik' },
      { label: 'KVKK Disclosure Text', href: '/veri-etik' },
      { label: 'Cookie Policy', href: '/veri-etik' },
      { label: 'Terms of Use', href: '/veri-etik' },
      { label: 'Open Source', href: '/acik-bilim' },
    ],
    bottom: {
      copyright: '© 2026 TürkSes',
      notice: 'Research-focused; not a substitute for medical diagnosis.',
    },
  },
};
