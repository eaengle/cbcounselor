import { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "CBC Law | Cross-Border Legal Solutions",
    description:
      "CBC Law assists global businesses with their most challenging cross-border legal matters spanning the U.S., China, and beyond.",
  },
  nav: {
    links: [
      { label: "Services", href: "#practice-areas" },
      { label: "Industries", href: "#industries" },
      { label: "People", href: "#team" },
      { label: "Cases", href: "#cases" },
      { label: "About", href: "#about" },
      { label: "News & Insights", href: "#insights" },
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
    items: [
      {
        category: "IP Litigation",
        result:
          "Two ITC Section 337 investigations defended for a major Chinese LED manufacturer.",
      },
      {
        category: "Trade Secrets",
        result:
          "$66M jury verdict for a U.S. LED manufacturer over high-power chip trade secrets.",
      },
      {
        category: "Cross-Border M&A",
        result:
          "Represented Hepalink in a U.S. competitor acquisition and healthcare fund investment.",
      },
      {
        category: "E-Commerce",
        result:
          "Schedule A defense playbook for cross-border sellers facing U.S. TROs.",
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
    groups: [
      { country: "United States", cities: ["Silicon Valley", "Los Angeles", "Seattle", "Chicago"] },
      { country: "China", cities: ["Beijing", "Shanghai", "Shenzhen"] },
      { country: "Mexico", cities: ["Cancun"] },
    ],
  },
  team: {
    title: "Our People",
    subtitle: "Attorneys who move fluently between legal systems and languages.",
    roles: [
      { title: "Dispute Resolution Partner", languages: ["EN", "中文"] },
      { title: "M&A Partner", languages: ["EN", "中文"] },
      { title: "Intellectual Property Partner", languages: ["EN", "中文"] },
      { title: "Compliance Partner", languages: ["EN", "中文"] },
      { title: "Cross-Border Transactions Counsel", languages: ["EN", "中文"] },
      { title: "Litigation Counsel", languages: ["EN", "中文", "粤语"] },
    ],
    comingSoon: "Full attorney profiles coming soon.",
  },
  testimonial: {
    quote:
      "The legal team at CBC Law is highly professional and efficient. They achieved excellent results in handling our legal matters.",
    attribution:
      "Fan He, U.S. Producer of Detective Chinatown and Mojin: The Lost Legend",
  },
  insights: {
    title: "News & Insights",
    subtitle: "Where cross-border law is heading next.",
    articles: [
      "The Dilemma of U.S. Schedule A Cases and How to Break It",
      "The Intellectual Property Dilemma of Chinese Cross-Border E-Commerce Sellers",
      "What Impact Does the U.S. Government's Antitrust Lawsuit Against Amazon Have on Chinese Cross-Border E-Commerce?",
      "TikTok Ban in the U.S.: What Are the Chances of Legal Success?",
    ],
    readMore: "Read more",
  },
  contactCta: {
    title: "Wherever you encounter legal issues, we can help.",
    body: "Reach out to discuss your cross-border legal needs with our team.",
    email: "info@cbcounselor.com",
    button: "Get in Touch",
  },
  footer: {
    tagline: "Cross-border legal solutions for global enterprises.",
    copyright: `© ${new Date().getFullYear()} CBC Law. All rights reserved.`,
  },
};
