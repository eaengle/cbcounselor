import { SiteContent } from "./types";
import { getInsights } from "./insights";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "CBC Law | Litigation and Cross-Border Counsel for Chinese Companies",
    description:
      "Boutique U.S.–China counsel for Chinese companies in intellectual property and business litigation, corporate matters, M&A, investment, and compliance.",
    keywords: [
      "cross-border law firm",
      "U.S. China legal counsel",
      "international business law",
      "cross-border M&A",
      "intellectual property litigation",
      "international arbitration",
    ],
  },
  nav: {
    links: [
      { label: "Practices", href: "/#practice-areas" },
      { label: "People", href: "/people" },
      { label: "News & Insights", href: "/#insights" },
    ],
    urgent: {
      label: "Schedule A Defense",
      href: "/services/ecommerce-amazon-defense#urgent-intake",
      ariaLabel: "Urgent Schedule A and e-commerce defense",
    },
    positioningLabel: "Bilingual U.S.–China counsel",
    contactLabel: "Contact",
    menuLabel: "Menu",
    languageToggleLabel: "中",
    languageToggleHref: "/zh",
  },
  hero: {
    eyebrow: "U.S. ↔ China ↔ Beyond",
    headline: "Securing the Business of U.S. and Foreign Companies.",
    subheadline:
      "CBC Law represents U.S. and cross-border enterprises in intellectual property disputes, business litigation, and in corporate, M&A, and investment matters that come with doing business across borders. Attorneys at the firm have decades of experience handling complex legal matters in each of these areas.",
    actions: [
      {
        label: "Facing a Schedule A Lawsuit? Start Here",
        href: "/services/ecommerce-amazon-defense#urgent-intake",
        emphasis: "primary",
      },
      { label: "Talk to Our Team", href: "/contact", emphasis: "secondary" },
    ],
    watermark: "跨境",
    clientDescriptors: [
      "Chinese enterprises",
      "Cross-border companies",
      "Cross-border e-commerce sellers",
      "U.S. operating businesses",
    ],
  },
  featuredBar: {
    label: "Cross-border priorities",
    items: [
      {
        title: "Corporate & Cross-Border Transactions",
        description:
          "M&A, investment, and structuring counsel for Chinese enterprises expanding globally.",
      },
      {
        title: "Patent, Trademark & Copyright Litigation",
        description:
          "Federal court, ITC, and arbitration representation for Chinese companies, including urgent U.S. litigation.",
      },
      {
        title: "Business Organization & Compliance",
        description: "Advice for Chinese companies operating in the U.S.",
      },
    ],
  },
  about: {
    title: "About CBC Law",
    body: "CBC Law is a boutique cross-border firm originating from Silicon Valley, guiding Chinese companies and cross-border enterprises through consequential U.S. disputes and business matters.",
    differentiators: [
      {
        title: "Decades of Complex-Matter Experience",
        description:
          "Attorneys at the firm have decades of experience handling complex legal matters.",
      },
      {
        title: "Dozens of Schedule A Cases",
        description:
          "The firm’s experience includes dozens of Schedule A cases involving cross-border e-commerce defendants.",
      },
      {
        title: "ITC Section 337 Investigations",
        description:
          "CBC attorneys have served as lead counsel in ITC Section 337 investigations.",
      },
      {
        title: "Bilingual U.S.–China Perspective",
        description:
          "Bilingual partners bring legal and practice experience spanning the United States and China.",
      },
      {
        title: "Disputes Across Forums",
        description:
          "Experience includes patent, trademark, copyright, and trade-secret matters in state and federal court, arbitration, and the ITC.",
      },
    ],
  },
  practiceAreas: {
    title: "Two Practices, One Standard: Serious Counsel for Chinese Enterprises.",
    subtitle:
      "Our attorneys have substantial experience across a range of corporate work, litigation, or both. CBC Law brings Chinese-fluent, U.S.–China experience to both practices.",
    primaryLabel: "Primary practices",
    primaryItems: [
      {
        name: "IP & Business Litigation",
        description:
          "Counsel for Chinese companies and cross-border enterprises in patent, trademark, copyright, and trade-secret disputes in federal and state courts, ITC Section 337 investigations, and arbitration.",
        subareas: [
          "Patent, Trademark & Copyright",
          "Trade Secrets",
          "Federal & State Courts",
          "ITC Section 337",
          "Arbitration",
        ],
      },
      {
        name: "Corporate & Cross-Border Counsel",
        description:
          "Corporate counsel for Chinese enterprises navigating cross-border M&A, investment, compliance, and entity structuring in the United States and global markets.",
        subareas: ["M&A", "Investment", "Compliance", "Entity Structuring"],
      },
    ],
    supportingLabel: "Supporting capabilities",
    supportingTitle: "Focused support around the core matters",
    supportingItems: [
      {
        eyebrow: "Urgent response",
        name: "E-Commerce & Amazon Seller Defense",
        description:
          "Schedule A, TRO, marketplace, and cross-border seller defense for businesses facing urgent U.S. proceedings.",
      },
      {
        eyebrow: "Dispute support",
        name: "International Arbitration",
        description:
          "Representation in international commercial disputes across institutions and legal systems.",
      },
      {
        eyebrow: "Industry counsel",
        name: "Entertainment & Media",
        description:
          "Counsel for production, content licensing, talent agreements, and international distribution.",
      },
      {
        eyebrow: "Private capital",
        name: "Funds & Family Offices",
        description:
          "Guidance on fund formation, investment management, and cross-border family-office structures.",
      },
    ],
  },
  offices: {
    title: "Global Presence",
    subtitle: "Eight offices, three countries, one team.",
    mapLabel: "Map showing connections among CBC Law offices in the United States, China, and Mexico",
    phoneLabel: "Phone",
    faxLabel: "Fax",
    // Addresses supplied by Alan Engle, 2026-07-15. Beijing/Shenzhen pending;
    // Seattle and Cancun unconfirmed. Map dots in OfficeMap.tsx are index-based —
    // keep city order stable.
    groups: [
      {
        country: "United States",
        cities: [
          {
            name: "Silicon Valley",
            addressLines: ["149 Commonwealth Dr, Suite 1042", "Menlo Park, CA 94025"],
          },
          {
            name: "Southern California",
            addressLines: ["Suite 1167, 7755 Center Ave", "Huntington Beach, CA 92647"],
          },
          { name: "Seattle" },
          {
            name: "Chicago",
            addressLines: ["105 W. Madison St., Suite 2300", "Chicago, IL 60602-4678"],
            phone: "(312) 752-4828",
            fax: "(312) 264-2535",
          },
        ],
      },
      {
        country: "China",
        cities: [
          { name: "Beijing" },
          {
            name: "Shanghai",
            addressLines: [
              "c/o Yuanda Law Firm",
              "Room 2010B, 5 Corporate Avenue",
              "No. 150 Hubin Road, Huangpu District",
              "Shanghai 200021",
            ],
          },
          { name: "Shenzhen" },
        ],
      },
      { country: "Mexico", cities: [{ name: "Cancun" }] },
    ],
  },
  team: {
    title: "Our People",
    subtitle: "Attorneys who move fluently between legal systems and languages.",
    featuredSlugs: ["ning-zhang", "charles-cheng", "alan-engle"],
    viewAll: "Meet the full team",
    sectionLabels: {
      partner: "Partners",
      "of-counsel": "Of Counsel",
      associate: "Associates",
      "foreign-law-counsel": "Foreign Law Counsel",
      "alliance-partner": "Alliance Partners",
    },
    profileLabels: {
      barAdmissions: "Bar Admissions",
      education: "Education",
      practiceFocus: "Areas of Expertise",
      representativeMatters: "Representative Matters",
      contact: "Contact",
      backToPeople: "Back to all people",
    },
  },
  testimonials: {
    items: [
      {
        quote:
          "The legal team at CBC Law is highly professional and efficient. They achieved excellent results in handling our legal matters.",
        attribution:
          "Fan He, U.S. Producer of Detective Chinatown and Mojin: The Lost Legend",
        translation:
          "CBC Law 的法律团队非常专业且高效。他们在处理我们的法律事务中取得了出色的成果。",
      },
    ],
    previous: "Previous testimonial",
    next: "Next testimonial",
  },
  insights: {
    title: "News & Insights",
    subtitle: "Where cross-border law is heading next.",
    // Homepage shows the newest five articles; the full set lives as Markdown
    // files under content/insights/en/ (see content/insights/README.md).
    articles: getInsights("en").slice(0, 5),
    readMore: "Read more",
    articleLabel: "Publication",
    backLabel: "Back to News & Insights",
    archiveNote: "This is the complete article content currently published by CBC Law. Additional body copy has not yet been released in the firm's source archive.",
  },
  contactCta: {
    title: "Wherever you encounter legal issues, we can help.",
    body: "Reach out to discuss your cross-border legal needs with our team.",
    email: "info@cbcounselor.com",
    button: "Get in Touch",
    mandarinNote: "Consultations available in Mandarin.",
  },
  contactPage: {
    eyebrow: "Get in Touch",
    title: "We're Here to Help",
    intro: "Wherever you encounter legal issues, CBC Law can connect you with the expertise you need.",
    infoTitle: "Contact Information",
    infoBody: "Reach out to our team directly or tell us how we can help.",
    emailLabel: "Email",
    officesLabel: "Offices",
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      message: "How Can We Help?",
      button: "Prepare Message",
      note: "Your email app will open with this inquiry addressed to CBC Law. No information is stored by this website.",
      subject: "Website inquiry for CBC Law",
    },
  },
  footer: {
    tagline: "Serious U.S. litigation and cross-border business counsel for Chinese enterprises.",
    copyright: `© ${new Date().getFullYear()} CBC Law. All rights reserved.`,
  },
};
