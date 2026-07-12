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
  client?: string;
  practiceArea: string;
  industries: string[];
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

export type AttorneyRole =
  | "partner"
  | "of-counsel"
  | "associate"
  | "foreign-law-counsel"
  | "alliance-partner";

export interface Attorney {
  name: string;
  slug: string;
  title: string;
  role: AttorneyRole;
  barAdmissions: string;
  education: string[];
  practiceFocus: string[];
  bio: string[];
  representativeMatters: string[];
  email: string | null;
  photo: {
    src: string;
    width: number | null;
    height: number | null;
  };
}

export interface InsightArticle {
  title: string;
  date: string;
  summary: string;
  href: string;
  slug?: string;
  author?: string;
}

export interface TestimonialItem {
  quote: string;
  attribution: string;
  translation?: string;
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
    clientDescriptors: string[];
  };
  stats: StatItem[];
  featuredCases: {
    title: string;
    subtitle: string;
    watermark: string;
    filterLabel: string;
    allLabel: string;
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
    mapLabel: string;
    groups: OfficeGroup[];
  };
  team: {
    title: string;
    subtitle: string;
    featuredSlugs: string[];
    viewAll: string;
    sectionLabels: Record<AttorneyRole, string>;
    profileLabels: {
      barAdmissions: string;
      education: string;
      practiceFocus: string;
      representativeMatters: string;
      contact: string;
      backToPeople: string;
    };
  };
  testimonials: {
    items: TestimonialItem[];
    previous: string;
    next: string;
  };
  insights: {
    title: string;
    subtitle: string;
    articles: InsightArticle[];
    readMore: string;
    articleLabel: string;
    backLabel: string;
    archiveNote: string;
  };
  contactCta: {
    title: string;
    body: string;
    email: string;
    button: string;
    mandarinNote: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    infoTitle: string;
    infoBody: string;
    emailLabel: string;
    officesLabel: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      button: string;
      note: string;
      subject: string;
    };
  };
  wechat: {
    title: string;
    accountName: string;
    idLabel: string;
    id: string;
    linkLabel: string;
    href: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}
