import { SiteContent } from "./types";

// Chinese copy below is ported from the firm-published Chinese localization on
// cbcounselor.com. Copy for sections unique to this rebuild remains data-driven
// and easy to revise after native-speaker review.
export const zh: SiteContent = {
  locale: "zh",
  meta: {
    title: "CBC Law | 跨境法律解决方案",
    description:
      "CBC Law 是一家起源于美国硅谷的综合性律师事务所，专注为全球企业提供中美跨境投资、并购、知识产权、国际争议解决与合规法律服务。",
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
      href: "/zh/#ecommerce-defense",
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
    headline: "为全球企业提供全方位跨境法律解决方案",
    subheadline:
      "CBC Law 协助全球企业处理涉及美国、中国及其他地区的最具挑战性的跨境法律事务。",
    cta: "了解更多",
    watermark: "跨境",
    clientDescriptors: [
      "美国基础设施制造商",
      "深圳上市医疗企业",
      "美国领先 LED 制造商",
      "跨境电商卖家",
    ],
  },
  stats: [
    { value: "$66M+", label: "为客户赢得的陪审团裁决" },
    { value: "8", label: "全球办公室" },
    { value: "3", label: "覆盖国家" },
    { value: "24/7", label: "跨时区全天候服务" },
  ],
  featuredCases: {
    title: "代表性案例",
    subtitle: "跨越国界的专业经验与卓越成果。",
    watermark: "成果",
    filterLabel: "筛选案例",
    allLabel: "全部案例",
    items: [
      {
        category: "知识产权诉讼",
        result: "为中国大型 LED 制造商代理两起 ITC 第 337 条款调查。",
        client: "中国 LED 制造商",
        practiceArea: "知识产权诉讼",
        industries: ["科技", "制造业"],
      },
      {
        category: "商业秘密",
        result: "为美国领先 LED 制造商赢得 6,600 万美元商业秘密侵占陪审团裁决。",
        client: "美国 LED 制造商",
        practiceArea: "知识产权诉讼",
        industries: ["科技", "制造业"],
      },
      {
        category: "跨境并购",
        result: "代理海普瑞收购美国竞争对手并投资美国医疗基金。",
        client: "深圳上市医疗企业",
        practiceArea: "投资与并购",
        industries: ["医疗健康"],
      },
      {
        category: "电子商务",
        result: "为跨境电商卖家应对美国 TRO 提供 Schedule A 应诉策略。",
        client: "跨境电商卖家",
        practiceArea: "争议解决",
        industries: ["电子商务"],
      },
      {
        category: "国际仲裁",
        result: "在国际商会（ICC）仲裁中为一家美国基础设施制造商赢得数百万美元裁决。",
        client: "美国基础设施制造商",
        practiceArea: "争议解决",
        industries: ["基础设施", "制造业"],
      },
      {
        category: "跨境并购",
        result: "代理上海汽车空调器厂收购其与德尔福汽车合资企业的股权。",
        client: "上海汽车空调器厂",
        practiceArea: "投资与并购",
        industries: ["汽车", "制造业"],
      },
      {
        category: "专利抗辩",
        result: "为一家医疗器械公司就六项医学影像专利争议进行抗辩，并在专家证据开示和 Markman 听证前达成有利和解。",
        client: "医疗器械公司",
        practiceArea: "知识产权诉讼",
        industries: ["医疗健康"],
      },
    ],
  },
  about: {
    title: "致力于帮助全球企业跨越国界蓬勃发展",
    body: "CBC Law 是一家起源于美国硅谷的综合性律师事务所，致力于协助全球企业处理最具挑战性的跨境法律事务。我们的核心业务领域包括企业交易、跨境投资与并购、合规咨询、知识产权、国际诉讼、仲裁以及其他争议解决。我们在涉及美国和中国的跨境争议和交易方面尤其拥有丰富经验。",
    differentiators: [
      {
        title: "卓越专业",
        description: "来自顶级律所的资深律师提供高质量、专业化的法律服务。",
      },
      {
        title: "一站式解决方案",
        description: "来自不同业务领域的律师在同一团队中提供综合法律解决方案。",
      },
      {
        title: "全天候服务",
        description: "全天候支持，覆盖美洲、亚洲和欧洲所有时区。",
      },
      {
        title: "全球视野",
        description: "我们的国际化团队充分理解全球客户的国际化需求。",
      },
      {
        title: "行业专长",
        description: "深厚的行业专长使我们能够提供超越法律的战略服务与资源支持。",
      },
      {
        title: "科技驱动",
        description: "充分利用最新法律科技，为客户提供高效经济的专业服务，有效降低客户成本。",
      },
    ],
  },
  practiceAreas: {
    title: "专注跨境商业的精品法律服务",
    subtitle: "CBC Law 凭借中英文双语能力和中美两地经验，平衡发展两大核心业务：重大争议解决与推动企业发展的跨境交易。",
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
    groups: [
      { country: "美国", cities: ["硅谷", "洛杉矶", "西雅图", "芝加哥"] },
      { country: "中国", cities: ["北京", "上海", "深圳"] },
      { country: "墨西哥", cities: ["坎昆"] },
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
    articles: [
      {
        title: "第七巡回法院裁定《海牙送达公约》禁止向中国被告电子邮件送达",
        date: "2026-06-02",
        summary: "Law.com 深度报道 Kangol 案的广泛影响，并援引 CBC Law 合伙人及上诉代理律师 Wesley Johnson 的专业观点。",
        href: "/zh/insights/hague-service-convention-email-service-china",
        image: {
          src: "https://images.law.com/brightspot/21/eb/50dbd11a4f3083019ff65d9b2037/zawiypl-jpeg767x505-1.jpg",
          alt: "CBC Law 合伙人 Wesley Johnson 在杭州中国丝绸城",
          width: 767,
          height: 505,
          credit: "图片来源：Law.com",
        },
      },
      {
        title: "美国 Schedule A 案件的困局及破解之道",
        date: "2025-01-20",
        summary: "为跨境商家应对美国联邦地区法院 Schedule A 临时限制令程序提供实务策略。",
        href: "/zh/insights/schedule-a-cases-resolution",
      },
      {
        title: "中国跨境电商卖家的知识产权困境",
        date: "2024-09-15",
        summary: "分析中国卖家进入全球电商平台时面临的知识产权风险及实用应对策略。",
        href: "/zh/insights/ip-dilemma-cross-border-sellers",
      },
      {
        title: "亚马逊遭美国政府反垄断起诉，对中国跨境电商有何影响？",
        date: "2024-07-08",
        summary: "探讨美国联邦贸易委员会的反垄断行动如何影响平台规则与跨境卖家义务。",
        href: "/zh/insights/amazon-antitrust-impact",
      },
      {
        title: "TikTok 美国被禁：法律抗争胜算如何？",
        date: "2024-05-15",
        summary: "从第一修正案、外交事务司法尊重与剥夺公权法案角度分析 TikTok 剥离法案。",
        href: "/zh/insights/tiktok-ban-legal-challenge",
      },
    ],
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
  wechat: {
    title: "官方微信公众号",
    accountName: "Cross Border Counselor法务资讯",
    idLabel: "微信号",
    id: "gh_5176c972a240",
    linkLabel: "在微信中打开",
    href: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU5MDk2ODc2NA==&scene=124#wechat_redirect",
  },
  footer: {
    tagline: "一家起源于硅谷的综合性律师事务所，致力于协助全球企业处理跨境法律事务。",
    copyright: `© ${new Date().getFullYear()} CBC Law. 版权所有。`,
  },
};
