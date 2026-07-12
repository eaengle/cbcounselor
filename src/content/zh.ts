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
      { label: "业务领域", href: "#practice-areas" },
      { label: "行业领域", href: "#industries" },
      { label: "专业团队", href: "#team" },
      { label: "代表性案例", href: "#cases" },
      { label: "关于我们", href: "#about" },
      { label: "新闻与洞察", href: "#insights" },
    ],
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
    items: [
      {
        category: "知识产权诉讼",
        result: "为中国大型 LED 制造商代理两起 ITC 第 337 条款调查。",
      },
      {
        category: "商业秘密",
        result: "为美国领先 LED 制造商赢得 6,600 万美元商业秘密侵占陪审团裁决。",
      },
      {
        category: "跨境并购",
        result: "代理海普瑞收购美国竞争对手并投资美国医疗基金。",
      },
      {
        category: "电子商务",
        result: "为跨境电商卖家应对美国 TRO 提供 Schedule A 应诉策略。",
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
    title: "面向全球商业的综合法律解决方案",
    subtitle: "满足企业在美国、中国及其他地区运营时复杂的多法域法律需求。",
    items: [
      {
        name: "争议解决",
        description:
          "我们的争议解决业务专注于协助涉及国际争端的中国企业。我们的诉讼团队在知识产权诉讼、违约案件和国际仲裁方面拥有丰富经验。",
        subareas: ["商业诉讼", "国际仲裁", "知识产权争端", "合同纠纷", "电子商务案件", "劳动争议"],
      },
      {
        name: "投资与并购",
        description:
          "CBC Law 的跨境投资与并购服务旨在帮助企业在全球市场实现战略扩张。我们提供专业指导，识别投资机会、评估风险并制定有效策略。",
      },
      {
        name: "知识产权",
        description:
          "CBC Law 提供专业的知识产权法律服务，致力于保护您的创意与创新。我们团队丰富的经验使我们能够提供量身定制的咨询与支持，确保您的知识产权得到全面保护。",
      },
      {
        name: "合规咨询",
        description:
          "CBC Law 为出海企业、高科技企业以及文化娱乐企业提供全方位的合规咨询服务，帮助管理外国投资法、出口管制、反制裁以及隐私与数据合规等方面的风险。",
      },
    ],
  },
  industries: {
    title: "行业聚焦",
    subtitle: "提供远超传统法律解决方案的战略服务和资源支持。",
    items: [
      {
        name: "新兴科技与新经济",
        description:
          "从人工智能和区块链到 SaaS 和半导体公司，我们为面临复杂跨境法律环境的科技创新企业提供专业顾问服务。",
      },
      {
        name: "文化娱乐与传媒",
        description: "为电影制作、内容授权、艺人协议和国际发行交易提供全面的法律支持。",
      },
      {
        name: "跨境贸易与投资",
        description: "为从事国际贸易的企业提供战略性法律顾问服务，包括电商平台、进出口贸易和跨境供应链。",
      },
      {
        name: "基金与家族办公室",
        description: "为基金设立、投资管理和跨多法域的家族办公室架构提供专业指导。",
      },
    ],
  },
  offices: {
    title: "全球网络",
    subtitle: "专业人员分布于 3 个国家 8 个城市，全天候覆盖美洲、亚洲及欧洲。",
    groups: [
      { country: "美国", cities: ["硅谷", "洛杉矶", "西雅图", "芝加哥"] },
      { country: "中国", cities: ["北京", "上海", "深圳"] },
      { country: "墨西哥", cities: ["坎昆"] },
    ],
  },
  team: {
    title: "认识我们的团队",
    subtitle: "汇聚来自不同背景、在跨境法律事务方面拥有深厚专长的资深律师。",
    roles: [
      { title: "争议解决合伙人", languages: ["EN", "中文"] },
      { title: "投资并购合伙人", languages: ["EN", "中文"] },
      { title: "知识产权合伙人", languages: ["EN", "中文"] },
      { title: "合规咨询合伙人", languages: ["EN", "中文"] },
      { title: "跨境交易顾问", languages: ["EN", "中文"] },
      { title: "诉讼顾问", languages: ["EN", "中文", "粤语"] },
    ],
    comingSoon: "完整律师团队页面即将上线。",
  },
  testimonial: {
    quote: "CBC Law 的法律团队非常专业且高效。他们在处理我们的法律事务中取得了出色的成果。",
    attribution: "范和，《唐人街探案》和《鬼吹灯之寻龙诀》美国制片人",
  },
  insights: {
    title: "新闻、趋势与洞察",
    subtitle: "深度解读跨境法律趋势以及国际贸易和知识产权领域的最新发展。",
    articles: [
      "美国 Schedule A 案件的困局及破解之道",
      "中国跨境电商卖家的知识产权困境",
      "亚马逊遭美国政府反垄断起诉，对中国跨境电商有何影响？",
      "TikTok 美国被禁：法律抗争胜算如何？",
    ],
    readMore: "阅读更多",
  },
  contactCta: {
    title: "无论遇到什么问题，我们都能帮您找到解决方案",
    body: "无论您在哪里遇到法律问题，CBC Law 都能为您对接所需的专业力量。立即联系我们，讨论我们如何协助您的跨境法律事务。",
    email: "info@cbcounselor.com",
    button: "联系我们",
    mandarinNote: "可提供普通话咨询服务。",
  },
  footer: {
    tagline: "一家起源于硅谷的综合性律师事务所，致力于协助全球企业处理跨境法律事务。",
    copyright: `© ${new Date().getFullYear()} CBC Law. 版权所有。`,
  },
};
