import { SiteContent } from "./types";
import { getInsights } from "./insights";

// Chinese copy below is ported from the firm-published Chinese localization on
// cbcounselor.com. Copy for sections unique to this rebuild remains data-driven
// and easy to revise after native-speaker review.
export const zh: SiteContent = {
  locale: "zh",
  meta: {
    title: "CBC Law | 为中国企业提供美国诉讼与跨境法律顾问服务",
    description:
      "CBC Law 是一家精品中美跨境律师事务所，为中国企业提供知识产权与商业诉讼、公司事务、并购、投资及合规法律服务。",
    keywords: [
      "跨境律师事务所",
      "中美跨境法律服务",
      "美国律师",
      "中国企业出海",
      "跨境并购",
      "知识产权诉讼",
      "国际仲裁",
      "跨境电商法律服务",
    ],
  },
  nav: {
    links: [
      { label: "核心业务", href: "/zh/#practice-areas" },
      { label: "专业团队", href: "/zh/people" },
      { label: "新闻与洞察", href: "/zh/#insights" },
    ],
    urgent: {
      label: "Schedule A 紧急应诉",
      href: "/zh/services/ecommerce-amazon-defense#urgent-intake",
      ariaLabel: "Schedule A 与跨境电商紧急应诉",
    },
    positioningLabel: "精通中英文的中美跨境法律顾问",
    contactLabel: "联系我们",
    menuLabel: "菜单",
    languageToggleLabel: "EN",
    languageToggleHref: "/",
  },
  hero: {
    eyebrow: "美国 ↔ 中国 ↔ 全球",
    headline: "为中国企业提供严肃法律顾问——从法庭到董事会。",
    subheadline:
      "CBC Law 为中国企业及跨境企业代理美国专利、商标和版权诉讼，并就跨境经营涉及的公司事务、并购与投资提供法律服务。本所律师拥有数十年处理复杂法律事务的经验。",
    actions: [
      {
        label: "正面临 Schedule A 诉讼？从这里开始",
        href: "/zh/services/ecommerce-amazon-defense#urgent-intake",
        emphasis: "primary",
      },
      { label: "与我们的团队沟通", href: "/zh/contact", emphasis: "secondary" },
    ],
    watermark: "跨境",
    clientDescriptors: [
      "中国企业",
      "跨境公司",
      "跨境电商卖家",
      "在美运营企业",
    ],
  },
  featuredBar: {
    label: "跨境业务重点",
    items: [
      {
        title: "公司与跨境交易",
        description: "为拓展全球业务的中国企业提供并购、投资及架构设计法律服务。",
      },
      {
        title: "专利、商标与版权诉讼",
        description: "为中国企业代理联邦法院、ITC 及仲裁案件，包括美国紧急诉讼。",
      },
      {
        title: "企业设立与合规",
        description: "为在美国运营的中国企业提供法律建议。",
      },
    ],
  },
  about: {
    title: "致力于帮助全球企业跨越国界蓬勃发展",
    body: "CBC Law 是一家起源于美国硅谷的精品跨境律师事务所，致力于协助中国企业及跨境企业处理重要的美国争议与商业事务。",
    differentiators: [
      {
        title: "数十年复杂事务经验",
        description: "本所律师拥有数十年处理复杂法律事务的经验。",
      },
      {
        title: "数十起 Schedule A 案件",
        description: "本所处理过数十起涉及跨境电商被告的 Schedule A 案件。",
      },
      {
        title: "ITC 第 337 条调查",
        description: "CBC 律师曾在 ITC 第 337 条调查中担任主办律师。",
      },
      {
        title: "中英双语中美视角",
        description: "双语合伙人拥有横跨美国与中国的法律及执业经验。",
      },
      {
        title: "多法域争议经验",
        description: "经验涵盖州及联邦法院、仲裁和 ITC 中的专利、商标、版权及商业秘密事务。",
      },
    ],
  },
  practiceAreas: {
    title: "两大核心业务，同一专业标准：为中国企业提供严肃法律顾问。",
    subtitle: "我们的律师在公司事务、诉讼或两者兼具的广泛领域拥有丰富经验。CBC Law 将中英双语能力及中美经验同等运用于两大核心业务。",
    primaryLabel: "核心业务",
    primaryItems: [
      {
        name: "知识产权与商业诉讼",
        description:
          "为中国企业及跨境企业处理专利、商标、版权和商业秘密争议，涵盖联邦与州法院诉讼、美国国际贸易委员会第 337 条调查及仲裁。",
        subareas: ["专利、商标与版权", "商业秘密", "联邦与州法院", "ITC 第 337 条", "仲裁"],
      },
      {
        name: "公司与跨境法律顾问",
        description:
          "为中国企业在美国及全球市场开展跨境并购、投资、合规与实体架构提供公司法律顾问服务。",
        subareas: ["并购", "投资", "合规", "实体架构"],
      },
    ],
    supportingLabel: "配套业务",
    supportingTitle: "围绕核心事务提供专门支持",
    supportingItems: [
      {
        eyebrow: "紧急应诉",
        name: "跨境电商与亚马逊卖家抗辩",
        description: "为面临美国紧急诉讼的企业处理 Schedule A、临时限制令、平台及跨境卖家抗辩。",
      },
      {
        eyebrow: "争议支持",
        name: "国际仲裁",
        description: "在不同仲裁机构及法律体系下代理国际商事争议。",
      },
      {
        eyebrow: "行业顾问",
        name: "文化娱乐与传媒",
        description: "为影视制作、内容授权、艺人协议和国际发行提供法律顾问服务。",
      },
      {
        eyebrow: "私募资本",
        name: "基金与家族办公室",
        description: "就基金设立、投资管理及跨境家族办公室架构提供法律指导。",
      },
    ],
  },
  offices: {
    title: "全球网络",
    subtitle: "专业人员分布于 3 个国家 8 个城市，全天候覆盖美洲、亚洲及欧洲。",
    mapLabel: "显示 CBC Law 美国、中国和墨西哥办公室连接的地图",
    phoneLabel: "电话",
    faxLabel: "传真",
    // 地址以英文显示以保证邮寄准确（2026-07-15 由 Alan Engle 提供）。
    // 上海地址的中文版本待母语者确认后再替换。城市顺序与 OfficeMap.tsx 的坐标索引对应，勿调整。
    groups: [
      {
        country: "美国",
        cities: [
          {
            name: "硅谷",
            addressLines: ["149 Commonwealth Dr, Suite 1042", "Menlo Park, CA 94025"],
          },
          {
            name: "南加州",
            addressLines: ["Suite 1167, 7755 Center Ave", "Huntington Beach, CA 92647"],
          },
          { name: "西雅图" },
          {
            name: "芝加哥",
            addressLines: ["105 W. Madison St., Suite 2300", "Chicago, IL 60602-4678"],
            phone: "(312) 752-4828",
            fax: "(312) 264-2535",
          },
        ],
      },
      {
        country: "中国",
        cities: [
          { name: "北京" },
          {
            name: "上海",
            addressLines: [
              "c/o Yuanda Law Firm",
              "Room 2010B, 5 Corporate Avenue",
              "No. 150 Hubin Road, Huangpu District",
              "Shanghai 200021",
            ],
          },
          { name: "深圳" },
        ],
      },
      { country: "墨西哥", cities: [{ name: "坎昆" }] },
    ],
  },
  team: {
    title: "认识我们的团队",
    subtitle: "汇聚来自不同背景、在跨境法律事务方面拥有深厚专长的资深律师。",
    featuredSlugs: ["ning-zhang", "charles-cheng", "alan-engle"],
    viewAll: "查看完整团队",
    sectionLabels: {
      partner: "合伙人",
      "of-counsel": "资深顾问",
      associate: "律师",
      "foreign-law-counsel": "外国法律顾问",
      "alliance-partner": "联盟合伙人",
    },
    profileLabels: {
      barAdmissions: "执业资格",
      education: "教育背景",
      practiceFocus: "专业领域",
      representativeMatters: "代表性事项",
      contact: "联系方式",
      backToPeople: "返回专业团队",
    },
  },
  testimonials: {
    items: [
      {
        quote: "CBC Law 的法律团队非常专业且高效。他们在处理我们的法律事务中取得了出色的成果。",
        attribution: "范和，《唐人街探案》和《鬼吹灯之寻龙诀》美国制片人",
        translation: "The legal team at CBC Law is highly professional and efficient. They achieved excellent results in handling our legal matters.",
      },
    ],
    previous: "上一条客户评价",
    next: "下一条客户评价",
  },
  insights: {
    title: "新闻、趋势与洞察",
    subtitle: "深度解读跨境法律趋势以及国际贸易和知识产权领域的最新发展。",
    // 首页展示最新五篇文章；全部文章以 Markdown 文件形式存放于
    // content/insights/zh/ 目录（参见 content/insights/README.md）。
    articles: getInsights("zh").slice(0, 5),
    readMore: "阅读更多",
    articleLabel: "专业文章",
    backLabel: "返回新闻与洞察",
    archiveNote: "以上是 CBC Law 目前公开发布的完整文章内容。事务所的源内容库尚未发布更多正文。",
  },
  contactCta: {
    title: "无论遇到什么问题，我们都能帮您找到解决方案",
    body: "无论您在哪里遇到法律问题，CBC Law 都能为您对接所需的专业力量。立即联系我们，讨论我们如何协助您的跨境法律事务。",
    email: "info@cbcounselor.com",
    button: "联系我们",
    mandarinNote: "可提供普通话咨询服务。",
  },
  contactPage: {
    eyebrow: "联系我们",
    title: "我们随时为您提供帮助",
    intro: "无论您在哪里遇到法律问题，CBC Law 都能为您对接所需的专业力量。",
    infoTitle: "联系方式",
    infoBody: "您可以直接联系我们的团队，或告诉我们您需要哪方面的协助。",
    emailLabel: "电子邮箱",
    officesLabel: "办公室",
    form: {
      firstName: "名字",
      lastName: "姓氏",
      email: "电子邮箱",
      message: "我们能如何帮助您？",
      button: "准备邮件",
      note: "提交后，您的邮件应用将打开并生成一封发送给 CBC Law 的咨询邮件。本网站不会存储您填写的信息。",
      subject: "CBC Law 网站咨询",
    },
  },
  footer: {
    tagline: "为中国企业提供严肃的美国诉讼与跨境商业法律顾问服务。",
    copyright: `© ${new Date().getFullYear()} CBC Law. 版权所有。`,
  },
};
