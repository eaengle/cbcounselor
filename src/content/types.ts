export type Locale = "en" | "zh";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CaseItem {
  category: string;
  result: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  description: string;
}

export interface OfficeGroup {
  country: string;
  cities: string[];
}

export interface PracticeArea {
  name: string;
  description: string;
  subareas?: string[];
}

export interface TeamRole {
  title: string;
  languages: string[];
}

export interface SiteContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    links: NavLink[];
    contactLabel: string;
    menuLabel: string;
    languageToggleLabel: string;
    languageToggleHref: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: string;
    watermark: string;
  };
  stats: StatItem[];
  featuredCases: {
    title: string;
    subtitle: string;
    watermark: string;
    items: CaseItem[];
  };
  about: {
    title: string;
    body: string;
    differentiators: Differentiator[];
  };
  practiceAreas: {
    title: string;
    subtitle: string;
    items: PracticeArea[];
  };
  industries: {
    title: string;
    subtitle: string;
    items: Industry[];
  };
  offices: {
    title: string;
    subtitle: string;
    groups: OfficeGroup[];
  };
  team: {
    title: string;
    subtitle: string;
    roles: TeamRole[];
    comingSoon: string;
  };
  testimonial: {
    quote: string;
    attribution: string;
  };
  insights: {
    title: string;
    subtitle: string;
    articles: string[];
    readMore: string;
  };
  contactCta: {
    title: string;
    body: string;
    email: string;
    button: string;
  };
  wechat: {
    title: string;
    idLabel: string;
    id: string;
    qrAlt: string;
    availability: string;
    placeholder: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}
