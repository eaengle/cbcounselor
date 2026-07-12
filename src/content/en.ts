import { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "CBC Law | Cross-Border Legal Solutions",
    description:
      "CBC Law assists global businesses with their most challenging cross-border legal matters spanning the U.S., China, and beyond.",
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
      { label: "Services", href: "/#practice-areas" },
      { label: "Industries", href: "/#industries" },
      { label: "People", href: "/people" },
      { label: "Cases", href: "/#cases" },
      { label: "About", href: "/#about" },
      { label: "News & Insights", href: "/#insights" },
    ],
    contactLabel: "Contact",
    menuLabel: "Menu",
    languageToggleLabel: "中",
    languageToggleHref: "/zh",
  },
  hero: {
    eyebrow: "U.S. ↔ China ↔ Beyond",
    headline: "Comprehensive Cross-Border Legal Solutions for Global Enterprises",
    subheadline:
      "CBC Law assists global businesses with their most challenging cross-border legal matters spanning the U.S., China, and beyond.",
    cta: "Learn More",
    watermark: "跨境",
    clientDescriptors: [
      "U.S. infrastructure manufacturer",
      "Shenzhen-listed healthcare company",
      "Leading U.S. LED manufacturer",
      "Cross-border e-commerce sellers",
    ],
  },
  stats: [
    { value: "$66M+", label: "Jury verdict secured for a client" },
    { value: "8", label: "Offices worldwide" },
    { value: "3", label: "Countries covered" },
    { value: "24/7", label: "Coverage across time zones" },
  ],
  featuredCases: {
    title: "Notable Results",
    subtitle: "A track record built across borders.",
    watermark: "成果",
    filterLabel: "Filter results",
    allLabel: "All results",
    items: [
      {
        category: "IP Litigation",
        result:
          "Two ITC Section 337 investigations defended for a major Chinese LED manufacturer.",
        client: "Chinese LED Manufacturer",
        practiceArea: "IP Litigation",
        industries: ["Technology", "Manufacturing"],
      },
      {
        category: "Trade Secrets",
        result:
          "$66M jury verdict for a U.S. LED manufacturer over high-power chip trade secrets.",
        client: "U.S. LED Manufacturer",
        practiceArea: "IP Litigation",
        industries: ["Technology", "Manufacturing"],
      },
      {
        category: "Cross-Border M&A",
        result:
          "Represented Hepalink in a U.S. competitor acquisition and healthcare fund investment.",
        client: "Shenzhen-listed Healthcare Company",
        practiceArea: "Investment & M&A",
        industries: ["Healthcare"],
      },
      {
        category: "E-Commerce",
        result:
          "Schedule A defense playbook for cross-border sellers facing U.S. TROs.",
        client: "Cross-Border Sellers",
        practiceArea: "Dispute Resolution",
        industries: ["E-Commerce"],
      },
      {
        category: "International Arbitration",
        result:
          "Secured a multimillion-dollar ICC arbitration award for a U.S. infrastructure manufacturer.",
        client: "U.S. Infrastructure Manufacturer",
        practiceArea: "Dispute Resolution",
        industries: ["Infrastructure", "Manufacturing"],
      },
      {
        category: "Cross-Border M&A",
        result:
          "Represented Shanghai Automotive Air-Conditioning Factory in acquiring equity in a Delphi Automotive joint venture.",
        client: "SAACF",
        practiceArea: "Investment & M&A",
        industries: ["Automotive", "Manufacturing"],
      },
      {
        category: "Patent Defense",
        result:
          "Resolved a six-patent medical-imaging dispute through a favorable settlement before expert discovery and a Markman hearing.",
        client: "Medical Device Company",
        practiceArea: "IP Litigation",
        industries: ["Healthcare"],
      },
    ],
  },
  about: {
    title: "About CBC Law",
    body: "CBC Law is a full-service law firm originating from Silicon Valley, dedicated to guiding clients through complex cross-border legal challenges.",
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
    title: "Core Practice Areas",
    subtitle: "Full-service counsel across the matters that matter most.",
    items: [
      {
        name: "Dispute Resolution",
        description:
          "Our dispute resolution practice specializes in assisting Chinese companies involved in international disputes. Our litigation team has extensive experience in intellectual property litigation, breach of contract cases, and international arbitration.",
        subareas: [
          "Commercial Litigation",
          "International Arbitration",
          "IP Disputes",
          "Contract Disputes",
          "E-Commerce Cases",
          "Employment Disputes",
        ],
      },
      {
        name: "Investment & M&A",
        description:
          "CBC Law's cross-border investment and M&A services help companies achieve strategic expansion in the global market. We provide expert guidance to identify investment opportunities, assess risks, and formulate effective strategies.",
      },
      {
        name: "Intellectual Property",
        description:
          "CBC Law provides professional intellectual property legal services dedicated to safeguarding your creativity and innovation. Our team's extensive experience enables us to offer tailored advice and support, ensuring comprehensive protection of your IP.",
      },
      {
        name: "Compliance",
        description:
          "CBC Law provides comprehensive compliance consulting services to outbound companies, high-tech enterprises, and cultural and entertainment businesses. We help manage risks related to foreign investment laws, export controls, sanctions, and privacy and data compliance.",
      },
    ],
  },
  industries: {
    title: "Industry Focus",
    subtitle: "Sector depth that goes beyond the law.",
    items: [
      {
        name: "Emerging Technologies & New Economy",
        description:
          "From AI and blockchain to SaaS and semiconductor companies, we advise technology innovators navigating complex cross-border legal landscapes.",
      },
      {
        name: "Entertainment & Media",
        description:
          "Comprehensive legal support for film production, content licensing, talent agreements, and international distribution deals.",
      },
      {
        name: "Cross-Border Trade & Investment",
        description:
          "Strategic counsel for companies engaged in international trade, including e-commerce platforms, import/export, and cross-border supply chains.",
      },
      {
        name: "Funds & Family Offices",
        description:
          "Expert guidance for fund formation, investment management, and family office structuring across multiple jurisdictions.",
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
    tagline: "Cross-border legal solutions for global enterprises.",
    copyright: `© ${new Date().getFullYear()} CBC Law. All rights reserved.`,
  },
};
