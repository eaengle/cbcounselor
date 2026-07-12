import type { InsightArticle, Locale } from "./types";

// Complete article index ported from the firm-published insights archive.
export const insightsByLocale = {
  "en": [
    {
      "title": "The Dilemma of U.S. Schedule A Cases and How to Break It",
      "date": "2025-01-20",
      "summary": "A practical playbook for cross-border merchants navigating Schedule A TRO proceedings in U.S. district courts.",
      "href": "https://cbcounselor.com/insights/schedule-a-cases-resolution/"
    },
    {
      "title": "The Intellectual Property Dilemma of Chinese Cross-Border E-Commerce Sellers",
      "date": "2024-09-15",
      "summary": "An analysis of the IP risks Chinese sellers face when bringing products to global e-commerce platforms, with practical defensive strategies.",
      "href": "https://cbcounselor.com/insights/ip-dilemma-cross-border-sellers/"
    },
    {
      "title": "What Impact Does the U.S. Government's Antitrust Lawsuit Against Amazon Have on Chinese Cross-Border E-Commerce?",
      "date": "2024-07-08",
      "summary": "Examining how the FTC's antitrust action against Amazon may reshape platform rules and seller obligations for Chinese cross-border merchants.",
      "href": "https://cbcounselor.com/insights/amazon-antitrust-impact/"
    },
    {
      "title": "TikTok Ban in the U.S.: What Are the Chances of Legal Success?",
      "date": "2024-05-15",
      "summary": "First Amendment, foreign-affairs deference, and bill-of-attainder analysis of the TikTok divestiture statute.",
      "href": "https://cbcounselor.com/insights/tiktok-ban-legal-challenge/"
    },
    {
      "title": "Lilith Games Successfully Defends Against Class Action on Rise of Kingdoms Loot Boxes",
      "date": "2024-04-22",
      "summary": "Case note on the successful defense of Lilith Games in a U.S. class action over alleged unlawful loot-box mechanics.",
      "href": "https://cbcounselor.com/insights/lilith-rok-class-action/"
    },
    {
      "title": "Still Following the Trend of Settlements? — Key Cases for Store Owners Hit by TROs in Patent Infringement Disputes",
      "date": "2024-02-19",
      "summary": "Why blanket settlement is no longer the right answer: cases store owners must read before responding to a TRO in a Schedule A patent matter.",
      "href": "https://cbcounselor.com/insights/tro-store-owner-cases/"
    },
    {
      "title": "Risk Prevention Without Collateral Damage: How the U.S. Regulates Digital Assets",
      "date": "2024-01-10",
      "summary": "A comparative review of the U.S. digital asset regulatory framework — how it balances innovation with investor protection.",
      "href": "https://cbcounselor.com/insights/us-digital-asset-regulation/"
    },
    {
      "title": "Who Owns the Copyright for Articles Written by ChatGPT: Me or It?",
      "date": "2023-09-20",
      "summary": "Authorship and originality questions raised by generative AI under U.S. and Chinese copyright doctrine.",
      "href": "https://cbcounselor.com/insights/chatgpt-copyright-ownership/"
    },
    {
      "title": "The First Metaverse Trademark Case Ruling: Hermès Wins Against MetaBirkins",
      "date": "2023-06-12",
      "summary": "Lessons from the first jury verdict on NFT trademark infringement and the limits of the Rogers test.",
      "href": "https://cbcounselor.com/insights/metabirkins-trademark-case/"
    },
    {
      "title": "Can Copyright NFT Trading Platforms Become the Next Darling of Hong Kong's FinTech Market?",
      "date": "2023-03-08",
      "summary": "Whether Hong Kong's evolving virtual asset regime opens the door for compliant copyright NFT marketplaces.",
      "href": "https://cbcounselor.com/insights/copyright-nft-platforms-hk/"
    },
    {
      "title": "Corporate Environmental Responsibility from a Human Rights Perspective",
      "date": "2021-12-01",
      "summary": "Reframing corporate environmental obligations through the UN Guiding Principles on Business and Human Rights.",
      "href": "https://cbcounselor.com/insights/corporate-environmental-responsibility/"
    },
    {
      "title": "The Human Rights Impacts of Chinese Enterprises' Overseas Investments",
      "date": "2020-09-01",
      "summary": "Empirical study of human rights challenges faced by Chinese enterprises operating abroad and the corresponding governance gaps.",
      "href": "https://cbcounselor.com/insights/chinese-overseas-investment-human-rights/"
    },
    {
      "title": "How the SEC Views ICOs",
      "date": "2018-11-05",
      "summary": "Application of the Howey test to token offerings and the SEC's evolving enforcement posture.",
      "href": "https://cbcounselor.com/insights/sec-ico-perspective/"
    },
    {
      "title": "Legal Risks of Investing in Crypto Assets",
      "date": "2018-07-22",
      "summary": "A practitioner's guide to the principal legal risks individual and institutional investors face in the crypto market.",
      "href": "https://cbcounselor.com/insights/crypto-investment-legal-risks/"
    }
  ],
  "zh": [
    {
      "title": "美国 Schedule A 案件的困局及破解之道",
      "date": "2025-01-20",
      "summary": "为跨境商户提供应对美国地区法院附表 A TRO 程序的实操手册。",
      "href": "https://cbcounselor.com/insights/schedule-a-cases-resolution/"
    },
    {
      "title": "中国跨境电商卖家的知识产权困境",
      "date": "2024-09-15",
      "summary": "分析中国卖家在全球电商平台所面临的知识产权风险，并给出实务防御策略。",
      "href": "https://cbcounselor.com/insights/ip-dilemma-cross-border-sellers/"
    },
    {
      "title": "亚马逊遭美国政府反垄断起诉，对中国跨境电商有何影响？",
      "date": "2024-07-08",
      "summary": "探讨美国 FTC 对亚马逊的反垄断诉讼如何重塑平台规则及对中国跨境卖家的影响。",
      "href": "https://cbcounselor.com/insights/amazon-antitrust-impact/"
    },
    {
      "title": "TikTok 美国被禁：法律抗争胜算如何？",
      "date": "2024-05-15",
      "summary": "从第一修正案、外交事务豁免与剥夺公权法案角度分析 TikTok 强制剥离法案的合法性。",
      "href": "https://cbcounselor.com/insights/tiktok-ban-legal-challenge/"
    },
    {
      "title": "莉莉丝游戏成功驳回关于《万国觉醒》\"战利品箱\"的集体诉讼",
      "date": "2024-04-22",
      "summary": "解析莉莉丝游戏在美国集体诉讼中成功抗辩\"战利品箱\"不当性主张的关键策略。",
      "href": "https://cbcounselor.com/insights/lilith-rok-class-action/"
    },
    {
      "title": "还在跟风和解吗？——就专利侵权被 TRO 的店家必须关注的重要案例",
      "date": "2024-02-19",
      "summary": "盲目和解已不再是最佳选择——附表 A 专利案件中店家应诉前必读的几个关键判例。",
      "href": "https://cbcounselor.com/insights/tro-store-owner-cases/"
    },
    {
      "title": "既防风险，又免\"误伤\"：美国如何治理数字资产？",
      "date": "2024-01-10",
      "summary": "比较视角下的美国数字资产监管框架——如何在保护投资者的同时为创新留出空间。",
      "href": "https://cbcounselor.com/insights/us-digital-asset-regulation/"
    },
    {
      "title": "ChatGPT 写出的文章，版权归我还是归它？",
      "date": "2023-09-20",
      "summary": "生成式 AI 在美国与中国著作权法下的作者身份与独创性问题。",
      "href": "https://cbcounselor.com/insights/chatgpt-copyright-ownership/"
    },
    {
      "title": "元宇宙商标第一案宣判：爱马仕胜诉\"元铂金\"",
      "date": "2023-06-12",
      "summary": "首例 NFT 商标侵权陪审团判决及 Rogers 测试边界的启示。",
      "href": "https://cbcounselor.com/insights/metabirkins-trademark-case/"
    },
    {
      "title": "版权 NFT 交易平台能否成为香港金融科技市场的新宠？",
      "date": "2023-03-08",
      "summary": "香港不断完善的虚拟资产监管框架是否为合规的版权 NFT 交易平台打开大门？",
      "href": "https://cbcounselor.com/insights/copyright-nft-platforms-hk/"
    },
    {
      "title": "人权视角下的公司环境责任",
      "date": "2021-12-01",
      "summary": "从联合国《工商业与人权指导原则》重新审视企业的环境责任。",
      "href": "https://cbcounselor.com/insights/corporate-environmental-responsibility/"
    },
    {
      "title": "中国企业海外投资的人权影响",
      "date": "2020-09-01",
      "summary": "中国企业海外经营所面临的人权挑战及相应治理空白的实证研究。",
      "href": "https://cbcounselor.com/insights/chinese-overseas-investment-human-rights/"
    },
    {
      "title": "美国证监会如何看待 ICO",
      "date": "2018-11-05",
      "summary": "Howey 测试在代币发行中的适用，以及 SEC 不断演进的执法态度。",
      "href": "https://cbcounselor.com/insights/sec-ico-perspective/"
    },
    {
      "title": "加密资产投资的法律风险",
      "date": "2018-07-22",
      "summary": "执业律师视角下，个人与机构投资者在加密资产市场所面临的主要法律风险。",
      "href": "https://cbcounselor.com/insights/crypto-investment-legal-risks/"
    }
  ]
} satisfies Record<Locale, InsightArticle[]>;

const authors: Record<string, string> = {
  "schedule-a-cases-resolution": "Daniel Yuan",
  "ip-dilemma-cross-border-sellers": "Ning Zhang",
  "amazon-antitrust-impact": "Ning Zhang",
  "tiktok-ban-legal-challenge": "Charles Cheng",
};

export function getInsightSlug(article: InsightArticle) {
  return article.href.match(/\/insights\/([^/]+)/)?.[1] ?? "";
}

export function getInsights(locale: Locale): InsightArticle[] {
  return insightsByLocale[locale].map((article) => {
    const slug = getInsightSlug(article);
    return {
      ...article,
      slug,
      author: authors[slug],
      href: `${locale === "zh" ? "/zh" : ""}/insights/${slug}`,
    };
  });
}

export function getInsight(locale: Locale, slug: string) {
  return getInsights(locale).find((article) => article.slug === slug);
}
