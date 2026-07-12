import { SiteContent } from "./types";

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
      href: "/#ecommerce-defense",
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
    headline: "Serious Counsel for Chinese Companies — In the Courtroom and in the Boardroom.",
    subheadline:
      "CBC Law represents Chinese companies and cross-border enterprises in U.S. patent, trademark, and copyright litigation, and in the corporate, M&A, and investment matters that come with doing business across borders. Our team draws on training at top law schools and experience at top-tier firms.",
    actions: [
      {
        label: "Facing a Schedule A Lawsuit? Start Here",
        href: "/#ecommerce-defense",
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
        title: "Professional Excellence",
        description:
          "Senior attorneys from top-tier law firms deliver high-quality, professional services.",
      },
      {
        title: "One-Stop Solutions",
        description:
          "Attorneys from diverse practice areas offer comprehensive legal solutions under one roof.",
      },
      {
        title: "24/7 Coverage",
        description:
          "Round-the-clock support covering the Americas, Asia, and Europe across all time zones.",
      },
      {
        title: "Global Understanding",
        description:
          "Our international team fully understands the global needs of our clients.",
      },
      {
        title: "Industry Expertise",
        description:
          "Deep industry expertise allows us to provide strategic services and resources beyond legal solutions.",
      },
      {
        title: "Technology-Driven",
        description:
          "Leveraging the latest legal technology for efficient, cost-effective service that significantly reduces client costs.",
      },
    ],
  },
  practiceAreas: {
    title: "Two Practices, One Standard: Serious Counsel for Chinese Enterprises.",
    subtitle:
      "CBC Law brings Chinese-fluent, U.S.–China experience to two co-equal practices: high-stakes disputes and the transactions that move enterprises forward.",
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
    groups: [
      { country: "United States", cities: ["Silicon Valley", "Los Angeles", "Seattle", "Chicago"] },
      { country: "China", cities: ["Beijing", "Shanghai", "Shenzhen"] },
      { country: "Mexico", cities: ["Cancun"] },
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
    articles: [
      {
        title: "Seventh Circuit Rules Hague Service Convention Bars Email Service on Chinese Defendants",
        date: "2026-06-02",
        summary: "Law.com examines the far-reaching impact of the Kangol decision and features insight from CBC Law partner and appellate counsel Wesley Johnson.",
        href: "/insights/hague-service-convention-email-service-china",
        image: {
          src: "https://images.law.com/brightspot/21/eb/50dbd11a4f3083019ff65d9b2037/zawiypl-jpeg767x505-1.jpg",
          alt: "CBC Law partner Wesley Johnson at Hangzhou China Silk Town",
          width: 767,
          height: 505,
          credit: "Photo via Law.com",
        },
      },
      {
        title: "The Dilemma of U.S. Schedule A Cases and How to Break It",
        date: "2025-01-20",
        summary: "A practical playbook for cross-border merchants navigating Schedule A TRO proceedings in U.S. district courts.",
        href: "/insights/schedule-a-cases-resolution",
      },
      {
        title: "The Intellectual Property Dilemma of Chinese Cross-Border E-Commerce Sellers",
        date: "2024-09-15",
        summary: "An analysis of the IP risks Chinese sellers face on global e-commerce platforms, with practical defensive strategies.",
        href: "/insights/ip-dilemma-cross-border-sellers",
      },
      {
        title: "What Impact Does the U.S. Government's Antitrust Lawsuit Against Amazon Have on Chinese Cross-Border E-Commerce?",
        date: "2024-07-08",
        summary: "How the FTC's antitrust action may reshape platform rules and seller obligations for Chinese cross-border merchants.",
        href: "/insights/amazon-antitrust-impact",
      },
      {
        title: "TikTok Ban in the U.S.: What Are the Chances of Legal Success?",
        date: "2024-05-15",
        summary: "First Amendment, foreign-affairs deference, and bill-of-attainder analysis of the TikTok divestiture statute.",
        href: "/insights/tiktok-ban-legal-challenge",
      },
    ],
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
  wechat: {
    title: "Official WeChat account",
    accountName: "Cross Border Counselor法务资讯",
    idLabel: "WeChat ID",
    id: "gh_5176c972a240",
    linkLabel: "Open in WeChat",
    href: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU5MDk2ODc2NA==&scene=124#wechat_redirect",
  },
  footer: {
    tagline: "Serious U.S. litigation and cross-border business counsel for Chinese enterprises.",
    copyright: `© ${new Date().getFullYear()} CBC Law. All rights reserved.`,
  },
};
