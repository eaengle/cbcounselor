import { kangolResult } from "./verified-claims";

export interface EcommercePageContent {
  locale: "en" | "zh";
  meta: { title: string; description: string };
  eyebrow: string;
  headline: string;
  intro: string;
  heroCta: string;
  servicesLabel: string;
  servicesTitle: string;
  services: { title: string; description: string }[];
  reasonsLabel: string;
  reasonsTitle: string;
  reasons: { title: string; description: string }[];
  resultsLabel: string;
  resultsTitle: string;
  resultTitle: string;
  resultDescription: string;
  opinionLabel: string;
  intake: {
    eyebrow: string;
    title: string;
    intro: string;
    name: string;
    email: string;
    platform: string;
    deadline: string;
    matter: string;
    button: string;
    note: string;
    subject: string;
  };
}

export const ecommerceEn: EcommercePageContent = {
  locale: "en",
  meta: {
    title: "E-Commerce & Amazon Seller Defense | CBC Law",
    description:
      "Urgent bilingual defense for Schedule A lawsuits, marketplace suspensions, IP claims, and frozen seller funds in U.S. federal court.",
  },
  eyebrow: "Urgent e-commerce defense",
  headline: "Your Account Is Frozen. Your Funds Are Locked. You Have Days, Not Weeks.",
  intro:
    "CBC Law can respond immediately to Schedule A lawsuits, ex parte temporary restraining orders, and Amazon, PayPal, or Alipay fund freezes in U.S. federal court—and communicate with clients in their language.",
  heroCta: "Start an urgent intake",
  servicesLabel: "How we help",
  servicesTitle: "Focused defense for cross-border sellers",
  services: [
    {
      title: "Schedule A and John Doe defense",
      description:
        "Federal-court defense, emergency response, motions to dissolve temporary restraining orders, and challenges to service and jurisdiction.",
    },
    {
      title: "Marketplace suspension and reinstatement",
      description:
        "Response strategy for Amazon, Temu, and Walmart Marketplace account suspensions and reinstatement proceedings.",
    },
    {
      title: "Trademark and patent troll defense",
      description:
        "Defense against trademark and patent allegations, including bad-faith intellectual-property claims directed at online sellers.",
    },
    {
      title: "Asset and fund-freeze release",
      description:
        "Legal action addressing funds restrained through Amazon, PayPal, Payoneer, and Alipay in connection with U.S. proceedings.",
    },
    {
      title: "Seller structuring and compliance",
      description:
        "U.S. entity structuring and compliance guidance for high-volume sellers building durable cross-border operations.",
    },
  ],
  reasonsLabel: "Why CBC Law",
  reasonsTitle: "Counsel built for U.S.–China urgency",
  reasons: [
    {
      title: "Bilingual U.S.–China experience",
      description:
        "A cross-border team that understands U.S. litigation procedure and the operating realities facing China-based businesses.",
    },
    {
      title: "Cross-time-zone coverage",
      description:
        "Offices and attorneys across U.S. and China time zones help the team respond when court and platform deadlines move quickly.",
    },
    {
      title: "Direct WeChat communication",
      description:
        "Clients can use WeChat as a direct communication channel alongside standard email and website contact routes.",
    },
  ],
  resultsLabel: "Representative result",
  resultsTitle: "A consequential ruling for Schedule A defendants",
  resultTitle: `${kangolResult.caseName}, ${kangolResult.citation}`,
  resultDescription: kangolResult.description,
  opinionLabel: "Read the Seventh Circuit opinion",
  intake: {
    eyebrow: "Urgent — Active U.S. Litigation.",
    title: "Tell us what deadline you are facing",
    intro:
      "Use this short intake to prepare an email to CBC Law. Please do not send confidential documents through this form.",
    name: "Name",
    email: "Email",
    platform: "Marketplace or payment platform",
    deadline: "Deadline or hearing date",
    matter: "Brief matter description",
    button: "Prepare urgent email",
    note: "Your email app will open with this inquiry addressed to CBC Law. No information is stored by this website.",
    subject: "Urgent — Active U.S. Litigation",
  },
};

export const ecommerceZh: EcommercePageContent = {
  locale: "zh",
  meta: {
    title: "跨境电商与亚马逊卖家抗辩 | CBC Law",
    description:
      "为 Schedule A 诉讼、平台封号、知识产权主张及卖家资金冻结提供中英双语美国联邦法院紧急应诉服务。",
  },
  eyebrow: "跨境电商紧急应诉",
  headline: "账户被冻结，资金被锁定。您只有几天，而不是几周。",
  intro:
    "CBC Law 可立即应对美国联邦法院的 Schedule A 诉讼、单方临时限制令，以及 Amazon、PayPal 或 Alipay 资金冻结，并以客户熟悉的语言直接沟通。",
  heroCta: "开始紧急咨询",
  servicesLabel: "我们的服务",
  servicesTitle: "为跨境卖家提供针对性抗辩",
  services: [
    {
      title: "Schedule A 与 John Doe 案件抗辩",
      description: "处理联邦法院应诉、紧急响应、申请解除临时限制令，并对送达及管辖权提出异议。",
    },
    {
      title: "平台停用与恢复",
      description: "就 Amazon、Temu 和 Walmart Marketplace 账户停用及恢复程序制定应对策略。",
    },
    {
      title: "商标及专利恶意维权抗辩",
      description: "应对针对网络卖家的商标、专利指控，包括恶意知识产权主张。",
    },
    {
      title: "资产及冻结资金解封",
      description: "处理与美国诉讼相关的 Amazon、PayPal、Payoneer 和 Alipay 资金限制。",
    },
    {
      title: "卖家实体架构与合规",
      description: "为大规模卖家建立稳健的跨境业务提供美国实体架构及合规建议。",
    },
  ],
  reasonsLabel: "为何选择 CBC Law",
  reasonsTitle: "专为中美跨境紧急事项组建的法律团队",
  reasons: [
    {
      title: "中英双语及中美经验",
      description: "跨境团队熟悉美国诉讼程序，也理解中国企业的实际经营环境。",
    },
    {
      title: "跨时区覆盖",
      description: "团队横跨中美时区，可在法院及平台期限紧迫时及时响应。",
    },
    {
      title: "微信直接沟通",
      description: "除电子邮件及网站联系渠道外，客户还可通过微信与团队直接沟通。",
    },
  ],
  resultsLabel: "代表性成果",
  resultsTitle: "对 Schedule A 被告具有重要意义的裁决",
  resultTitle: `${kangolResult.caseName}, ${kangolResult.citation}`,
  resultDescription: kangolResult.descriptionZh,
  opinionLabel: "阅读第七巡回上诉法院判决",
  intake: {
    eyebrow: "紧急——正在进行的美国诉讼",
    title: "请告知您面临的期限",
    intro: "此简短表单将为您生成发送给 CBC Law 的电子邮件。请勿通过此表单发送机密文件。",
    name: "姓名",
    email: "电子邮箱",
    platform: "电商或支付平台",
    deadline: "截止日期或开庭日期",
    matter: "事项简述",
    button: "生成紧急咨询邮件",
    note: "您的邮件应用将打开并把咨询发送至 CBC Law。本网站不会存储任何表单信息。",
    subject: "紧急——正在进行的美国诉讼",
  },
};
