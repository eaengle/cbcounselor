import type { Attorney, Locale } from "./types";

const PORTRAIT_BY_SLUG: Record<string, string> = {
  "ning-zhang": "/people/ning-zhang-portrait-v2.webp",
  "charles-cheng": "/people/charles-cheng-portrait-v2.webp",
  "wesley-johnson": "/people/wesley-johnson-portrait-v2.webp",
  "alan-engle": "/people/alan-engle-portrait-v2.webp",
  "edwin-wheeler": "/people/edwin-wheeler-portrait-v2.webp",
  "benjamin-solter": "/people/benjamin-solter-portrait-v2.webp",
  "conrad-everhard": "/people/conrad-everhard-portrait-v2.webp",
  "leonard-nuara": "/people/leonard-nuara-portrait-v2.webp",
  "marilynn-schuyler": "/people/marilynn-portrait-v2.webp",
  "ian-yang": "/people/ian-portrait-v2.webp",
  "chris-klug": "/people/chris-klug-portrait-v2.webp",
  "daniel-yuan": "/people/daniel-yuan-portrait-v2.webp",
  "jessie-yang": "/people/jessie-portrait-v2.webp",
  "yi-fan": "/people/yi-fan-portrait-v2.webp",
  "cedrick-sun": "/people/weilong-portrait-v2.webp",
  "gong-chen": "/people/gong-chen-portrait-v2.webp",
  "roberto-luo": "/people/roberto-luo-portrait-v2.webp",
  "yenting-feng": "/people/yenting-feng-portrait-v2.webp",
  "leo-zheng": "/people/leo-zheng-portrait-v2.webp",
  "ziqi-yu": "/people/ziqi-yu-portrait-v2.webp",
  "yiyang-huang-daciuk": "/people/yiyang-huang-daciuk-portrait-v2.webp",
  "feng-yang": "/people/feng-yang-portrait-v2.webp",
  "funmi-owolabi": "/people/funmi-portrait-v2.webp",
};

// Ported from the firm-published roster and profile pages on cbcounselor.com.
// Keep this data local so the static export does not depend on the live CMS at build time.
export const attorneysByLocale = {
  "en": [
    {
      "name": "Ning Zhang",
      "slug": "ning-zhang",
      "title": "Founding Partner",
      "role": "partner",
      "barAdmissions": "California, Georgia",
      "education": [
        "JD, Georgetown University (cum laude)",
        "MBA, University of Illinois Urbana-Champaign",
        "MS Journalism, University of Illinois Urbana-Champaign",
        "BA Journalism, Fudan University"
      ],
      "practiceFocus": [
        "Cross-Border Business",
        "Corporate General Counsel",
        "Contracts",
        "Mergers and Acquisitions"
      ],
      "bio": [
        "Ning specializes in corporate services for companies of different sizes and stages. In her ten-year legal career, she has worked at White & Case and Jones Day in four different offices, advising clients on investments and business operations in the U.S., China, and other Asian countries through green-field investment, mergers and acquisitions, joint ventures, and PE/VC financing."
      ],
      "representativeMatters": [
        "Advised on the licensing matter for a joint development program between a U.S. pharmaceutical company and a Chinese pharmaceutical company.",
        "Represented more than ten foreign clients in joint ventures or strategic alliance projects in China and other jurisdictions, including Hong Kong, Singapore, the Cayman Islands, BVI, and the U.S. — clients included Regal Beloit and East Pennsylvania Manufacturing.",
        "Represented and participated in numerous transactions where U.S. investors disposed of their interests in Chinese entities.",
        "Represented Shanghai Automobile Air Conditioning Factory (SAACF) in the acquisition of Delphi Automotive's equity interest in a joint venture with SAACF.",
        "Represented a major U.S. high-tech company in strategic acquisitions involving deep learning, cloud technology, and CDMA business.",
        "Represented Google Capital in a proposed acquisition of an online education site in China.",
        "Represented Hepalink, a Shenzhen Stock Exchange-listed company, in acquiring its U.S. competitor and investing in a U.S. medical fund.",
        "Represented ICBC in its acquisition of a Taiwan commercial bank.",
        "Represented owners of a Chinese hospital in restructuring its business in a sale to a British strategic investor.",
        "Represented a Chinese medical fund in pre-IPO investments in multiple U.S. companies.",
        "Represented Chinese investors in the Series F investment rounds of AirBnB and Uber."
      ],
      "email": "ning.zhang@cbcounselor.com",
      "photo": {
        "src": "/people/ning-zhang.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Charles Cheng",
      "slug": "charles-cheng",
      "title": "Managing Partner",
      "role": "partner",
      "barAdmissions": "California",
      "education": [
        "LLM, Stanford University",
        "PhD, Wuhan University",
        "LLM, Wuhan University",
        "LLB, Wuhan University"
      ],
      "practiceFocus": [
        "Corporate Law & Corporate Governance",
        "Private Equity & Venture Capital",
        "Digital Technology",
        "Startups",
        "Media & Entertainment"
      ],
      "bio": [
        "Charles Cheng's practice areas include corporate governance, venture capital financing, and cross-border transactions. He works closely with the technology and entertainment industries.",
        "Charles serves as a member of the Harvard Business Review Advisory Council, an advising expert at Alumni Ventures Group, and at Health Engine at UC Berkeley. He is a frequent speaker at prestigious events, including the UN Working Group on Business and Human Rights Expert Workshop, the World Blockchain Summit, GenAI Summit San Francisco, Berkeley China Summit, and the IEEE Metaverse Congress. His writings have garnered recognition across China, the United States, Japan, and Norway, and his expertise has been recognized by Forbes, Financial Times, and TEDx. In 2021, Charles was elected as one of the Forbes 60 Outstanding Chinese in North America.",
        "Prior to CBC Law, Charles held key roles in the corporate and legal sectors. He served as a Partner at Amino Capital, where he played pivotal roles in over 100 venture capital financing deals across diverse industries, including TMT, healthcare, AI, and blockchain. He oversaw the firm's global legal affairs, including fund formation, fund management, deal structuring, investment negotiation, investor relations, board advising, and exit strategies. He has also served as a Researcher at the Business and Human Rights Resource Centre, a PILnet Fellow at Columbia Law School, and a Program Director at Wuhan University PIDLI, where he managed legal projects sponsored by the UNDP, the U.S. Department of State, and the Ford Foundation."
      ],
      "representativeMatters": [],
      "email": "charles.cheng@cbcounselor.com",
      "photo": {
        "src": "/people/charles-cheng.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Wesley Johnson",
      "slug": "wesley-johnson",
      "title": "Partner",
      "role": "partner",
      "barAdmissions": "Illinois",
      "education": [
        "JD, Chicago-Kent College of Law",
        "BA, University of Chicago"
      ],
      "practiceFocus": [
        "Commercial Litigation",
        "Complex Litigation",
        "Real Estate Litigation",
        "Employment",
        "Mergers & Acquisitions"
      ],
      "bio": [
        "Wesley's practice is a mix of litigation and transactional matters. He has extensive experience in commercial litigation, real estate litigation, and employment matters, as well as drafting and negotiating documents for mergers and acquisitions, employment relationships, licensing agreements, and more.",
        "With more than 25 years of experience across commercial law — including intellectual property licensing, commercial litigation, employment litigation, large-litigation management, contracts, and real estate — he has the breadth of knowledge necessary to counsel clients in a wide range of commercial matters. Wesley also offers a unique service for businesses that need regular legal guidance, including in the human resources arena, but do not need a full-time, in-house General Counsel. As an outside, part-time \"General Counsel,\" he provides consistency and regular access at a predictable monthly cost."
      ],
      "representativeMatters": [
        "Successfully represented a major Chinese LED manufacturer as lead counsel in two Section 337 ITC investigations, securing dismissal of the first investigation before trial and a decision of no violation following trial in the second case."
      ],
      "email": "wesley.johnson@cbcounselor.com",
      "photo": {
        "src": "/people/wesley-johnson.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Alan Engle",
      "slug": "alan-engle",
      "title": "Partner",
      "role": "partner",
      "barAdmissions": "California, U.S. Patent and Trademark Office",
      "education": [
        "JD, UC Berkeley",
        "PhD studies, University of Pittsburgh",
        "BS and BA, UC San Diego"
      ],
      "practiceFocus": [
        "Intellectual Property",
        "IP Litigation",
        "Patent",
        "Trademark",
        "Commercial Litigation"
      ],
      "bio": [
        "Alan Engle is a registered patent attorney with a practice focused on litigation, intellectual property procurement, licensing, and strategy. Alan has represented clients in significant litigation and arbitration matters involving patent infringement, trade secret misappropriation, trademark infringement, breach of intellectual property agreements, copyright infringement, and contract disputes."
      ],
      "representativeMatters": [
        "Worked on a range of litigation matters on behalf of major U.S. and foreign clients for over 20 years.",
        "Prevailed in patent defense for a large corporation based in part on the discovery of document forgeries by the patentee.",
        "Won at trial for a plaintiff regarding interference with a major software license agreement after the software maker was acquired by a competitor.",
        "Successful defense in a trade secret case where the company founder was alleged to have misappropriated trade secrets from a former employer.",
        "Oversaw implementation of a 100-page settlement agreement related to improper use of trade secrets by a competitor.",
        "Obtained early complete settlement for a Chinese client (formerly a litigation opponent) in a copyright matter related to copying of their mobile video game.",
        "Oversaw an internal corporate investigation in response to Department of Justice inquiries regarding potential criminal IP activities of an employee.",
        "Achieved favorable early resolutions of multiple patent defense matters based on a broad range of defenses.",
        "Prevailed in various trademark cases on behalf of both plaintiffs and defendants."
      ],
      "email": "alan.engle@cbcounselor.com",
      "photo": {
        "src": "/people/alan-engle.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Edwin Wheeler",
      "slug": "edwin-wheeler",
      "title": "Partner",
      "role": "partner",
      "barAdmissions": "California",
      "education": [
        "JD, University of Chicago",
        "BA Economics, Vanderbilt University"
      ],
      "practiceFocus": [
        "Intellectual Property",
        "Patent",
        "Trademark",
        "Litigation"
      ],
      "bio": [
        "Edwin Wheeler is an accomplished attorney with over twenty years of experience across all aspects of intellectual property litigation. Edwin previously worked as a partner in the IP litigation practices at Howrey and McDermott Will & Emery. He has represented Fortune 500 companies in dozens of patent cases in District Courts, the Federal Circuit, and the ITC. Edwin has served as lead counsel or co-lead counsel in jury trials, bench trials, administrative hearings, and arbitrations in patent, trademark/trade dress, trade secret, and antitrust litigation. He has also managed patent litigations in courts throughout Europe and attended multiple trials in Germany (all jurisdictions), the UK, the Netherlands, and the EPO. Edwin is an experienced negotiator who has participated in and documented numerous complex IP licensing arrangements. His expertise includes the patent/antitrust interface, industry standards, and FRAND licensing."
      ],
      "representativeMatters": [
        "Successfully represented a major Chinese LED manufacturer as lead counsel in two Section 337 ITC investigations, securing dismissal of the first before trial and a decision of no violation in the second.",
        "Won a $66 million jury verdict for a leading U.S. LED manufacturer following a Chinese competitor's misappropriation of trade secrets critical to high-power LED lighting chips.",
        "As Vice President, Patent Litigation for Rovi Corporation, managed patent disputes at the ITC, in multiple District Courts, in major European jurisdictions, and at the EPO, supporting Rovi's patent licensing business which generated annual revenue of several hundred million dollars.",
        "Won a patent jury trial in Delaware enforcing patents covering key aspects of V.34, V.90, and V.92 analog modem standards, securing an award of $7.6 million.",
        "Successfully represented a major medical device company in a case alleging infringement of six patents by the client's most advanced ultrasound medical imaging machines; the case settled favorably shortly before expert depositions and the Markman hearing.",
        "Successfully represented a major medical device manufacturer in an arbitration brought by a terminated technology development partner asserting trade secret misappropriation, breach of contract, fraud, and antitrust violations.",
        "Won a preliminary injunction in a trade dress infringement case for a leading U.S. manufacturer of handheld digital multimeters, leading several competitors to settle favorably and enhancing the client's trade dress marketing strategy."
      ],
      "email": "edwin.wheeler@cbcounselor.com",
      "photo": {
        "src": "/people/edwin-wheeler.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Benjamin Solter",
      "slug": "benjamin-solter",
      "title": "Associate",
      "role": "associate",
      "barAdmissions": "California, Illinois",
      "education": [
        "JD, Santa Clara University",
        "BA, BS, University of Rochester"
      ],
      "practiceFocus": [
        "IP Litigation",
        "E-Commerce"
      ],
      "bio": [
        "Ben specializes in defending independent e-commerce merchants in intellectual property disputes, particularly in cases involving injunctive orders. His expertise lies in developing strategic defenses that enable his clients to maintain business operations and protect their e-commerce stores. Additionally, he represents merchants in litigation against major e-commerce platforms, ensuring that his clients' rights are upheld and their interests are vigorously defended.",
        "In addition to his work with e-commerce merchants, Ben assists international clients in navigating the complexities of the United States intellectual property landscape. This includes providing comprehensive patent invalidity and noninfringement analyses, enabling clients to make informed decisions about their intellectual property strategies. By combining his knowledge of U.S. intellectual property law with a deep understanding of the e-commerce sector, he delivers tailored legal solutions that address the unique challenges faced by his international clients.",
        "By combining his knowledge of U.S. intellectual property law with a deep understanding of the e-commerce sector, he delivers tailored legal solutions that address the unique challenges faced by his international clients."
      ],
      "representativeMatters": [],
      "email": "benjamin.solter@cbcounselor.com",
      "photo": {
        "src": "/people/benjamin-solter.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Conrad Everhard",
      "slug": "conrad-everhard",
      "title": "Alliance Partner",
      "role": "alliance-partner",
      "barAdmissions": "New York",
      "education": [
        "JD, Seton Hall Law School (cum laude)",
        "BA, Georgetown University"
      ],
      "practiceFocus": [
        "Mergers & Acquisitions",
        "Venture Capital",
        "Private Equity",
        "Corporate Governance"
      ],
      "bio": [
        "Conrad Everhard is a seasoned corporate and deal attorney with over twenty-five years of experience as a partner at several prominent global law firms and as general counsel of a renewable energy start-up.",
        "Conrad advises a broad range of clients executing complex capital and intellectual property-driven transactions, focusing on mergers and acquisitions and all forms of venture capital and private equity transactions. He has substantial corporate governance experience, including counseling boards of directors, overseeing stockholder actions, and resolving disputes.",
        "Conrad previously served for three years as a partner at VLP Law Group. Before that, he served for several years as general counsel and a key member of the management team of AE Polysilicon, a venture-backed solar start-up that raised more than $200 million from strategic investors including TOTAL Petrochemicals. Earlier in his career, Conrad practiced for over two decades in several global law firms' New York City offices, including Jones Day and Bryan Cave. He is also a thought leader on modernizing the legal industry business model, writing and speaking frequently on the topic."
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/conrad-everhard.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Leonard Nuara",
      "slug": "leonard-nuara",
      "title": "Alliance Partner",
      "role": "alliance-partner",
      "barAdmissions": "New York",
      "education": [
        "JD, Seton Hall Law School",
        "BA, Boston College (cum laude)"
      ],
      "practiceFocus": [
        "Technology & Internet Law",
        "Intellectual Property",
        "Mergers & Acquisitions",
        "Privacy & Cybersecurity",
        "Complex Commercial Litigation"
      ],
      "bio": [
        "Leonard Nuara is a nationally recognized authority on technology and internet law. Known for his high energy and unique blend of legal knowledge, technology expertise, and skills, Leonard serves as trusted advisor to dozens of multinationals, smaller corporates, hospitals and healthcare providers, financial institutions, startups, and venture firms across industries including e-business, retail, hardware and software, communications, and energy — frequently involving the development and deployment of breakthrough technologies.",
        "Leonard's unique insights inform the strategic guidance and counseling he provides to clients. He also advises on mergers & acquisitions, privacy, cybersecurity, and compliance, and offers specialized expertise in the creation of dynamic workflows and incident-recovery solutions to manage and mitigate risk exposures. Clients regularly engage Leonard as special counsel or to manage complex litigation, including in IP infringement, engineering and construction, IT systems, and Internet-business disputes — including the successful resolution of several multi-hundred-million dollar matters.",
        "Leonard was a partner at several prominent law firms and served as Chair of the Technology & Intellectual Property Practice at Thacher Proffitt & Wood, LLP, and a partner in the Intellectual Property and Technology Practice at Greenberg Traurig, LLP. Following the tragic destruction of the World Trade Center on September 11, 2001 — home to Thacher Proffitt & Wood's main office — Leonard interrupted his law practice and served as the firm's CIO for the following six months, responsible for all decisions for the interim survival and ultimate rebuilding of the firm's technology infrastructure. The experience of losing everything and rebuilding from scratch — being the buyer instead of \"representing the buyer\" — gives Leonard valuable insights that inform his practice today."
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/leonard-nuara.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Marilynn Schuyler",
      "slug": "marilynn-schuyler",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "California, United States Supreme Court",
      "education": [
        "JD, Georgetown University Law Center",
        "BA Economics, UC Berkeley"
      ],
      "practiceFocus": [
        "Employment Law and Mediation"
      ],
      "bio": [
        "Marilynn Schuyler has represented clients in labor and employment matters for over twenty years in the public and private sector. She is available to assist global employers in navigating employment laws in the United States, particularly as they relate to non-discrimination and other related issues.    ",
        "Marilynn established and served as Principal of Schuyler Affirmative Action Practice, specializing in federal contractor compliance, and providing training on employment law at annual national conferences. Marilynn is also a certified mediator, and has successfully mediated a wide range of cases. "
      ],
      "representativeMatters": [
        "While serving as an employment attorney for the Department of Defense, won all cases before the MSPB, EEOC, and arbitrators. ",
        "Co-wrote three US Supreme Court Amicus Curiae briefs related to affirmative action in education."
      ],
      "email": "Schuyler@cbcounselor.com",
      "photo": {
        "src": "/people/Marilynn.jpg",
        "width": 552,
        "height": 552
      }
    },
    {
      "name": "Ian Yang",
      "slug": "ian-yang",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "New York, PRC",
      "education": [
        "LL.M., Temple University Beasley School of Law US",
        "LL.M., University of Glasgow School of Law UK",
        "LL.B., China University of Political Science and Law"
      ],
      "practiceFocus": [
        "Corporate Governance",
        "Mergers & Acquisitions",
        "Intellectual Property",
        "Venture Capital",
        "Private Equity",
        "Dispute Resolution"
      ],
      "bio": [
        "Ian Yang is an international business lawyer with more than two decades of experience advising some of the world’s most successful enterprises on their entry into and expansion across the U.S. and Chinese markets, with a particular emphasis on cross-border mergers and acquisitions, direct investment, and capital markets transactions. He brings a rare combination of elite law firm training, senior in-house leadership, and deep cross-jurisdictional fluency that few practitioners can offer.",
        "Prior to joining CBC Law, Ian served as General Counsel for two high-growth, publicly listed technology companies, where he built and led legal functions spanning corporate governance, regulatory compliance, intellectual property, and M&A integration. Before transitioning in-house, Ian practiced at several of the world’s most prestigious international law firms, including Covington & Burling, Morrison & Foerster, and White & Case. He also held a senior role in the Seattle office of one of China’s leading and fastest-growing domestic law firms, giving him firsthand insight into legal strategy on both sides of the Pacific.",
        "Ian’s practice centers on structuring complex M&A and direct investment transactions and building cross-border regulatory compliance frameworks. He has counseled numerous Fortune 100 U.S. companies on the full spectrum of legal issues arising from their operations in China and has advised Chinese enterprises and high-net-worth individuals on establishing and scaling business operations in the United States. He has been educated and trained in law in both the United Kingdom and the United States, and spent years working alongside leading international counsel in China–a background that equips him to navigate the legal, cultural, and commercial dynamics of the U.S.–China corridor with exceptional depth."
      ],
      "representativeMatters": [],
      "email": "ian.yang@cbcounselor.com",
      "photo": {
        "src": "/people/Ian.jpg",
        "width": 612,
        "height": 694
      }
    },
    {
      "name": "Chris Klug",
      "slug": "chris-klug",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "Washington D.C., New York, Illinois, Virginia, Michigan",
      "education": [
        "LLM, Georgetown University Law Center",
        "JD, Michigan State University",
        "BA, Michigan State University"
      ],
      "practiceFocus": [
        "Taxation",
        "Mergers and Acquisitions",
        "Corporate Planning",
        "Estate Planning"
      ],
      "bio": [
        "Chris is a trusted client-focused attorney with extensive experience in domestic and international taxation, corporate and business planning, mergers and acquisitions, cross-border transactions, private equity, family offices, domestic and international estate planning, and tax controversy. Chris is the quintessential legal counsel — navigating clients through the complex tax implications of sophisticated transactions to arrive at practical, holistic solutions.",
        "With experience as managing partner of the DC office for two prior law firms, Chris understands the importance of placing clients' goals first, coming to holistic solutions, and working collaboratively with all of the professional advisors involved to achieve the best overall outcome. Chris's background is different than most tax attorneys, allowing him to provide more practical solutions; his approach is customized to fit each client's circumstances."
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/chris-klug.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Daniel Yuan",
      "slug": "daniel-yuan",
      "title": "Foreign Law Counsel",
      "role": "foreign-law-counsel",
      "barAdmissions": "PRC",
      "education": [
        "JD, University of Arizona",
        "BA, Ocean University of China"
      ],
      "practiceFocus": [
        "Cross-Border Commercial Transactions",
        "Dispute Resolution",
        "E-Commerce IP Defense",
        "Cross-Border Restructuring"
      ],
      "bio": [
        "Before joining CBC Law, Daniel worked at a top-tier law firm in China for nearly eight years. His practice areas primarily focus on cross-border commercial transactions and dispute resolution. The clients Daniel has served include domestic and foreign investment funds, Fortune 500 companies, other domestic and foreign financial institutions, and medium to large enterprises — including China International Capital Corporation, DG Capital, Dao Foods Fund, the International Finance Corporation (IFC), HSBC, Hang Seng Bank, Standard Chartered Bank, Bank of New York Mellon, ICBC Asia, CCB Asia, Deutsche Bank Trust, Bank of Communications Trust, China Development Bank, and Export-Import Bank of China.",
        "Daniel also has extensive experience defending independent e-commerce merchants in intellectual property disputes, particularly in cases involving injunctive orders (Schedule A cases)."
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/daniel-yuan.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Jessie Yang",
      "slug": "jessie-yang",
      "title": "Associate",
      "role": "associate",
      "barAdmissions": "California, PRC",
      "education": [
        "J.D. University of California，Irvine",
        "LLM. Northwestern University",
        "LLB. Southwest University of Political Science and Law"
      ],
      "practiceFocus": [
        "Trademark",
        "Copyright",
        "Corporate Law"
      ],
      "bio": [
        "Prior to joining CBC Law, Jessie worked at the top tier intellectual property law firm Knobbe Martens. She is experienced and passionate about trademark clearance, prosecution, enforcement, and portfolio strategy for both startups and multinational brands. She advises clients on trademark registration before the USPTO and manages trademark filings worldwide. She also leads enforcement efforts including oppositions, cancellations, and online brand protection. Jessie brings a practical and business focused approach to helping clients build and protect brands. "
      ],
      "representativeMatters": [
        "Managed trademark portfolios and led trademark clearance, domestic filings, and international filings for multiple Fortune 500 companies in the beverage, software, and medical device industries",
        "Successfully overcame various USPTO refusals in trademark applications, including likelihood of confusion and descriptiveness refusals",
        "Developed creative and effective trademark enforcement strategies, including drafting cease and desist letters, and defended clients against meritless infringement claims"
      ],
      "email": "Jessie.yang@cbcounselor.com",
      "photo": {
        "src": "/people/Jessie.png",
        "width": 562,
        "height": 520
      }
    },
    {
      "name": "Yi Fan",
      "slug": "yi-fan",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "Minnesota; Passed the Chinese National Judicial Examination",
      "education": [
        "JD, University of Arizona",
        "LLM, China University of Political Science and Law",
        "BA, China University of Political Science and Law"
      ],
      "practiceFocus": [
        "Tax",
        "M&A and Restructuring",
        "Tax Compliance",
        "Tax Dispute Resolution"
      ],
      "bio": [
        "Yi is a lawyer specialized in tax. During his legal career, he has provided tax consulting services for M&A and business restructuring transactions; tax planning services for start-up, technology, and real estate companies; tax compliance and planning services for high-net-worth individuals; and tax dispute resolution (including tax audit defense) services to enterprises and individuals."
      ],
      "representativeMatters": [
        "Advised a Chinese company on the tax issues with respect to its overseas restructuring.",
        "Advised a Hong Kong subsidiary of a Chinese pharmaceutical company on its non-Hong Kong source income tax exemption.",
        "Advised multiple non-Chinese tax-resident enterprises on Chinese tax issues with respect to the indirect transfer of Chinese shares and properties.",
        "Advised individual shareholders of listed companies on Chinese individual income tax compliance and tax planning.",
        "Advised individual shareholders of start-up and TMT companies on Chinese individual income tax compliance and tax planning.",
        "Advised clients in structuring deals, calculating taxes payable based on transaction methods, and communicating with tax authorities.",
        "Advised Hong Kong subsidiaries of multiple Chinese companies on applications for the certificate of Hong Kong tax resident status."
      ],
      "email": null,
      "photo": {
        "src": "/people/yi-fan.png",
        "width": 251,
        "height": 335
      }
    },
    {
      "name": "Cedrick Sun",
      "slug": "cedrick-sun",
      "title": "Foreign Law Counsel",
      "role": "foreign-law-counsel",
      "barAdmissions": "PRC",
      "education": [
        "LL.M., UW – Madison",
        "Master of Law, SJTU",
        "LL.B., ECUST"
      ],
      "practiceFocus": [
        "Mergers and Acquisitions",
        "Sports and Entertainment",
        "Real Estate and Construction",
        "Contracts and Compliance",
        "Corporate General Counsel"
      ],
      "bio": [
        "Cedrick's primary practice areas include Mergers and Acquisitions (M&A), Real Estate and International Engineering, Cross-border Investment, and Sports and Entertainment. In the fields of M&A and investment/financing, Cedrick has extensive project experience, having represented numerous enterprises and funds in completing complex M&A transactions and financing projects, covering sectors such as semiconductors, automotive, manufacturing, new energy, consumer goods, real estate, and sports and entertainment. In these transactions. Cedrick also provides full-process legal services for several Chinese enterprises \"going global,\" including joint venture establishment, greenfield investment, and overseas compliance operations, with a geographic focus on ASEAN countries, the Middle East and North Africa (MENA) and certain European and American countries; simultaneously, he provides full-process legal services for various multinational corporations' investment projects in China, covering engineering construction, bidding and tendering, project development, and infrastructure investment."
      ],
      "representativeMatters": [
        "Provided legal services for C&D Inc. in its acquisition of the controlling interest in Red Star Macalline (A+H shares)",
        "Provided legal services for PSA in the sale of its equity interest in Changan PSA to Baoneng Group",
        "Provided legal services for Keppel Land China in its acquisition of the first senior housing real estate project in China",
        "Provided legal services for Jiushi Group in promoting the equity reform of Shanghai Shenhua Football Club",
        "Provided full-process legal services for JSG (300316) regarding its greenfield investment and engineering construction in Malaysia",
        "Provided full-process legal services for Heli (600761) regarding its greenfield investment in Thailand",
        "Provided full-process legal services for Kunlun Materials regarding its greenfield investment and entrusted construction (agent construction) in Hungary",
        "Provided legal services for 360 in the establishment of a joint venture in Vietnam",
        "Provided legal services for AstraZeneca in the development and construction of its Global Strategic R&D Center in China",
        "Provided full-process legal services for Chevron in the construction of its new plant in the Ningbo Beilun Industrial Zone"
      ],
      "email": "cedricksun@cbcounselor.com",
      "photo": {
        "src": "/people/Weilong.jpg",
        "width": 219,
        "height": 242
      }
    },
    {
      "name": "Gong Chen",
      "slug": "gong-chen",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "California",
      "education": [
        "JD, University of Iowa",
        "MPhil, Stony Brook University",
        "BS, China University of Science & Technology"
      ],
      "practiceFocus": [
        "Patent",
        "Trade Secret",
        "Trademark",
        "Artificial Intelligence"
      ],
      "bio": [
        "Gong Chen is a highly skilled intellectual property attorney with extensive law firm and in-house experience, including as Group Counsel and IPR Director at Intel. Although he has worked across many technologies, Chen's technical expertise is in physics and electrical engineering. Chen provides global technology clients with proactive, risk-optimized, and practical intellectual property advice, particularly in computing, artificial intelligence, and digital technology-based solutions.",
        "His experience includes helping companies maximize the return on their IP investments by defining and implementing strategies and processes to efficiently develop global IP portfolios and licensing programs for patents, software, trade secrets, and trademarks. Chen also applies his technical expertise to support IP-based transactions such as patent and technology licensing, R&D collaborations, and M&A, as well as managing IP litigation (both offensive and defensive)."
      ],
      "representativeMatters": [
        "Led patent assertion strategy by a Silicon Valley tech company against a top competitor, including a Section 337 ITC action that resulted in a successful settlement and strategic merger.",
        "Initiated and managed a Patent Program for an electric vehicle company, including managing a global portfolio of patents, industrial designs, and trademarks.",
        "Developed and led a successful Section 101 patent invalidity defense in patent litigation, including winning a motion to dismiss that was affirmed by the Federal Circuit."
      ],
      "email": null,
      "photo": {
        "src": "/people/gong-chen.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Roberto Luo",
      "slug": "roberto-luo",
      "title": "Foreign Law Counsel",
      "role": "foreign-law-counsel",
      "barAdmissions": "New York, PRC",
      "education": [
        "MS, Tongji University",
        "BS, Nanjing University"
      ],
      "practiceFocus": [
        "Patent Portfolio Strategy",
        "Patent Litigation & Enforcement",
        "IP Due Diligence",
        "Semiconductors & Telecommunications"
      ],
      "bio": [
        "Roberto Luo is a licensed patent attorney and attorney at law in China. He has worked in patent areas for more than 15 years, focusing on helping clients build their patent portfolios globally and enforce their patents in China. Roberto also provides various patent-related due diligence opinions and dispute resolution opinions, especially for high-tech companies operating in the U.S., Europe, or China. Roberto has handled over 1,300 patents — two-thirds of them international.",
        "In addition to Chinese patent matters, he is also familiar with European and U.S. patent matters. Roberto has a technical background in EE, telecommunications, computer science, automation, and automotive electronics. He has represented many Fortune 500 companies for their patent matters in China, including ABB, Bosch, Celgene, Continental, Ericsson, Epson, GE, Gillette, GM, Honeywell, Illumina, Intel, Johnson & Johnson, Kimberly-Clark, Klauke, Kraft, Mann Diesel, Nokia, P&G, Phillips, and Volkswagen. Roberto has also provided directory opinions for several start-up technical companies, half of which now have a $100 million valuation.",
        "Roberto specializes in patent opinions for companies in the fields of semiconductors, telecommunications, AI, and big data. He was once an engineer at Bosch. Roberto started his patent attorney career at China Patent Agent (CPA), the earliest and most significant patent firm in China, where he worked for about four years. He then worked at Jones Day, one of the top-ranked global firms, for about four years. He is an arbitrator at the Wenzhou Arbitration Commission and has been appointed as one of the overseas IP dispute resolution experts of the National Overseas IP Dispute Resolution Guidance Center, Shanghai Branch. The Supreme Court selected one patent infringement case he won for the client as one of the 2019 annual IP Model Cases."
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/roberto-luo.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Yenting Feng",
      "slug": "yenting-feng",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "California",
      "education": [
        "LLM, Stanford University",
        "LLB, National Chengchi University"
      ],
      "practiceFocus": [
        "Corporate Governance",
        "Mergers & Acquisitions",
        "Investment Management",
        "Dispute Resolution",
        "Risk & Policy"
      ],
      "bio": [
        "Yenting Feng is a results-driven corporate counsel with extensive experience in corporate governance, cross-border transactions, regulatory compliance, and dispute resolution. She has advised global investment funds, Fortune 500 companies, and high-profile clients, playing a pivotal role in securing multi-million-dollar transactions across diverse industries. Her expertise spans mergers and acquisitions, strategic negotiations, and regulatory frameworks, ensuring legal alignment across the U.S., Asia-Pacific, and beyond. Yenting has also contributed to AI policy development, trade compliance, and risk mitigation, making her a trusted legal strategist for global organizations."
      ],
      "representativeMatters": [
        "Led legal strategies for over eight global investment funds and a multi-family office managing $3B in assets.",
        "Secured over $600M in cross-border transactions while optimizing legal risk and investor returns.",
        "Structured two investment funds in the Cayman Islands and Singapore, raising over $220M.",
        "Advised on multiple M&A transactions involving East Asian investors divesting interests in U.S. entities.",
        "Spearheaded corporate compliance and governance initiatives across the U.S. and APEC for 20+ entities.",
        "Provided strategic AI policy guidance to Taiwan's National Development Council for U.S.-Taiwan collaboration.",
        "Developed intellectual property and licensing strategies, securing $50M+ in deals for a global gaming platform.",
        "Led regulatory compliance and dispute resolution for government agencies and Fortune 500 companies, achieving major settlements and litigation successes.",
        "Structured and launched a VIE joint venture between Tencent and a U.S.-listed company, expanding global operations.",
        "Secured favorable verdicts in 60 litigation cases, including seven successful appeals to Taiwan's Supreme Court.",
        "Represented government agencies and multinational corporations in 40+ high-stakes national infrastructure and procurement disputes, securing $30M+ in claims."
      ],
      "email": null,
      "photo": {
        "src": "/people/yenting-feng.png",
        "width": 300,
        "height": 314
      }
    },
    {
      "name": "Leo Zheng",
      "slug": "leo-zheng",
      "title": "Foreign Law Counsel",
      "role": "foreign-law-counsel",
      "barAdmissions": "PRC",
      "education": [
        "LLM, William & Mary Law School",
        "LLM, Wuhan University"
      ],
      "practiceFocus": [
        "Intellectual Property",
        "Litigation",
        "M&A",
        "Securities & Compliance"
      ],
      "bio": [
        "Leo specializes in intellectual property, litigation, and M&A. Over the past 20 years, he has worked as an attorney-at-law for a law firm and as in-house counsel for public companies. Before joining CBC Law, he was the General Counsel of a multi-national listed group company."
      ],
      "representativeMatters": [
        "Led the litigation team in handling hundreds of cases, achieving a 90% prevailing rate and 40% loss-mitigation rate.",
        "Led the team in completing M&As in South Africa, the UK, and Korea, and provided legal support for post-investment management.",
        "Managed IP legal affairs (negotiated SEP patent collaborations; handled NPE litigation, copyright litigation, and trade secret misappropriation).",
        "Led the team to combat software piracy through licensing systems, software protection, and legal action.",
        "Developed a Gene Sequence Patent Search System (in collaboration with South China University of Technology).",
        "Managed legal affairs related to listed company securities (designed equity incentive plans; issued legal opinions on private placements, debt/equity swaps, etc.).",
        "Developed contract risk management systems.",
        "Recovered billions (RMB) of accounts receivable through litigation, negotiation, and financial instruments.",
        "Handled white-collar crime matters (embezzlement, forgery of business records, infringement of trade secrets)."
      ],
      "email": null,
      "photo": {
        "src": "/people/leo-zheng.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Ziqi Yu",
      "slug": "ziqi-yu",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "California, Florida, PRC",
      "education": [
        "JD, University of California College of the Law, San Francisco",
        "BS, Huazhong University of Science and Technology (Bioinformatics & IP Law)"
      ],
      "practiceFocus": [
        "Intellectual Property",
        "Cross-Border Litigation",
        "Schedule A E-Commerce Cases",
        "Cross-Border Arbitration"
      ],
      "bio": [
        "Ziqi Yu is a dual-qualified attorney admitted to practice law in both the United States (California and Florida) and China, with deep expertise in intellectual property, cross-border litigation, and legal services for technology-driven businesses. He earned his Juris Doctor (J.D.) from the University of California College of the Law, San Francisco (formerly UC Hastings), where he focused on IP law and received the CALI Excellence for the Future Award for top performance in copyright law. During law school, he served as Senior Articles Editor of the UC Law Journal and produced award-winning scholarship on U.S. copyright doctrine.",
        "Prior to his U.S. legal education, Ziqi obtained dual bachelor's degrees in Bioinformatics and Intellectual Property Law from Huazhong University of Science and Technology — one of China's leading STEM institutions — and completed doctoral coursework in Chinese civil and commercial law before transitioning to international legal practice.",
        "Professionally, Ziqi has advised clients across China and the U.S. on trademark prosecution, patent non-infringement opinions, Schedule A (TRO) e-commerce litigation, and cross-border arbitration under ICC and UNCITRAL rules. He has represented Chinese sellers in U.S. federal court proceedings, Amazon platform disputes, and IP enforcement strategies. His past legal roles include positions with law firms in Shenzhen, Hangzhou, Miami, and San Francisco, as well as public-sector experience with the San Francisco Department of Police Accountability and academic research under Professor Chiméne Keitner, former Legal Adviser to the U.S. Department of State. Ziqi frequently delivers legal training and lectures for cross-border e-commerce associations, IP law firms, and government organizations on topics such as Schedule A litigation, Amazon compliance, and freedom-to-operate (FTO) strategies for AI and biotech startups. He is admitted to practice before numerous U.S. federal district courts, the Court of International Trade, and the U.S. Court of Appeals for the Federal Circuit."
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/ziqi-yu.png",
        "width": 224,
        "height": 313
      }
    },
    {
      "name": "Yiyang Huang Daciuk",
      "slug": "yiyang-huang-daciuk",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "California",
      "education": [
        "JD, University of Texas",
        "BA, Lawrence University"
      ],
      "practiceFocus": [
        "Mergers & Acquisitions",
        "Private Equity",
        "Corporate Law",
        "Securities"
      ],
      "bio": [
        "Yiyang Huang is a business lawyer combining legal expertise and business acumen to offer customized, effective solutions to her clients and help their businesses grow, flourish, and successfully exit. Clients benefit from the depth and breadth of her skills and experience from over a decade of practice with the nation's premier international law firms, her sophisticated legal knowledge and background, and her ability to provide personal attention and individualized service."
      ],
      "representativeMatters": [
        "Represented a private company in acquiring a child-care and education business in Virginia.",
        "Represented IAR Systems Group, a Swedish computer software company traded on NASDAQ OMX Stockholm, in acquiring Secure Thingz, Inc., a Delaware corporation that develops products for embedded security in connected devices.",
        "Represented private equity firm WM Partners, LP in its sale of Nutranext Holdings, LLC and its subsidiaries to The Clorox Company.",
        "Represented Global Partnership Investing Capital, a private equity fund, in connection with the $2.5 billion funding round of GrabTaxi.",
        "Represented Hatchtech Pty Limited, an Australian pharmaceutical company, in its sale to Dr. Reddy's Laboratories of exclusive rights for Hatchtech's head lice product, with upfront and milestone payments.",
        "Represented The Coca-Cola Company in its worldwide strategic partnership with Monster Beverage Corporation and acquired a 16.7% stake in Monster."
      ],
      "email": null,
      "photo": {
        "src": "/people/yiyang-huang-daciuk.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Feng Yang",
      "slug": "feng-yang",
      "title": "Associate",
      "role": "associate",
      "barAdmissions": "California, PRC",
      "education": [
        "LLM, University of California Davis",
        "LLB, Wuhan University"
      ],
      "practiceFocus": [
        "Cross-Border Dispute Resolution",
        "Corporate Law",
        "Mergers and Acquisitions"
      ],
      "bio": [
        "Feng Yang is an attorney licensed to practice law in both China and California, USA. She holds an LL.M. degree from the University of California, Davis School of Law. She possesses seven years of commercial legal experience, encompassing both litigation and non-litigation matters, which she gained from her tenure at a major domestic central State-Owned Enterprise investment company and a reputable domestic law firm."
      ],
      "representativeMatters": [
        "Represented numerous cross-border e-commerce sellers in responding to U.S. Temporary Restraining Order actions",
        "Advised multiple cross-border e-commerce clients on resolving international intellectual property disputes and enforcement matters",
        "Provided legal counsel to a domestic Chinese enterprise in its acquisition of a Singaporean company",
        "Facilitated a domestic enterprise's equity financing project involving capital increase and share expansion",
        "Guided Chinese enterprises on the legal preparations for Initial Public Offerings (IPOs) in Hong Kong and the United States",
        "Participated in numerous criminal defense matters, with particular expertise in cases at the intersection of criminal and commercial law"
      ],
      "email": "fengyang@cbcounselor.com",
      "photo": {
        "src": "/people/Feng Yang.png",
        "width": 491,
        "height": 597
      }
    },
    {
      "name": "Olufunmilayo Owolabi",
      "slug": "funmi-owolabi",
      "title": "Of Counsel",
      "role": "of-counsel",
      "barAdmissions": "District of Columbia, USA",
      "education": [
        "LL.M., University of Baltimore",
        "LL.B., University of Reading"
      ],
      "practiceFocus": [
        "Data Privacy",
        "Cybersecurity",
        "Artificial Intelligence"
      ],
      "bio": [
        "Olufunmilayo Owolabi's primary practice areas include Data Privacy, Cybersecurity Law, and Artificial Intelligence (AI). In these fields, Olufunmilayo brings extensive advisory experience, having counseled AI start-ups, multinational corporations, and technology companies on complex global data governance and regulatory compliance matters. Her client work spans a broad range of industries, including real estate technology, telecommunications, pharmaceuticals, retail, artificial intelligence, gaming, and federal government agencies. Olufunmilayo provides comprehensive legal services across the full lifecycle of privacy and cybersecurity compliance, including privacy impact assessments, data protection impact assessments, incident response planning, and breach notification obligations. She advises clients on compliance with major global privacy frameworks — including GDPR, CCPA/CPRA, HIPAA, and PIPEDA — and provides counsel to organizations on cross-border data transfer mechanisms such as Standard Contractual Clauses and transfer impact assessments. In parallel, she supports the development of enterprise-wide governance structures, privacy-by-design frameworks, and risk-based compliance programs tailored to each organization's regulatory environment. Olufunmilayo has several privacy and security certifications, including the CISSP, AIGP, CIPP/US, CIPP/E, CIPM, CDPSE, CIPT."
      ],
      "representativeMatters": [
        "Advised Alexion Pharmaceuticals in the development of a pharmaceutical-grade privacy compliance program, encompassing the drafting of informed consent documentation, patient data governance protocols, and regulatory compliance advisory under HIPAA and the Washington My Health MY Data Act",
        "Advised Digital Realty in the conduct of comprehensive vendor due diligence and the negotiation of data protection provisions in customer-facing agreements across multiple jurisdictions",
        "Advised Walmart in the design and operationalization of a comprehensive cookie compliance program, including the implementation of consent management frameworks and alignment with applicable U.S. state privacy regulations",
        "Advised Electronic Arts in the development and maintenance of its Records of Processing Activities (RoPA), the execution of enterprise-wide data mapping exercises, and the drafting of internal privacy policies and governance documentation",
        "Supported the U.S. Department of Veterans Affairs in the conduct of Privacy Impact Assessments and the development of privacy governance documentation for federal information systems ",
        "Supported the U.S. Department of Agriculture in legal research and regulatory compliance support concerning federal privacy statutes, data retention obligations, and information disclosure requirements"
      ],
      "email": "Funmi@cbcounselor.com",
      "photo": {
        "src": "/people/Funmi.jpg",
        "width": 506,
        "height": 338
      }
    }
  ],
  "zh": [
    {
      "name": "张宁",
      "slug": "ning-zhang",
      "title": "创始合伙人",
      "role": "partner",
      "barAdmissions": "加州、乔治亚州",
      "education": [
        "乔治城大学法律博士（cum laude）",
        "伊利诺伊大学厄巴纳-香槟分校工商管理硕士",
        "伊利诺伊大学厄巴纳-香槟分校新闻学硕士",
        "复旦大学新闻学学士"
      ],
      "practiceFocus": [
        "跨境业务",
        "公司常年法律顾问",
        "合同事务",
        "并购交易"
      ],
      "bio": [
        "张律师擅长为不同规模和阶段的公司提供企业服务。在她十年的法律职业生涯中，曾在怀特凯斯律师事务所与众达律师事务所的四个不同办公室工作，通过绿地投资、并购、合资企业、PE/VC 融资等方式，为客户在美国、中国及其他亚洲国家的投资和业务运营提供咨询服务。"
      ],
      "representativeMatters": [
        "为一家美国制药公司与一家中国制药公司联合开发项目的许可事宜提供顾问服务。",
        "代表十余家外国客户在中国及其他司法管辖区（包括香港、新加坡、开曼群岛、英属维尔京群岛和美国）开展合资企业或战略联盟项目，客户包括 Regal Beloit 和 East Pennsylvania Manufacturing。",
        "代表并参与多项美国投资者出售其在中国实体中权益的交易。",
        "代表上海汽车空调厂（SAACF），收购德尔福汽车（Delphi Automotive）与 SAACF 合资企业的股权。",
        "代表美国一家大型高科技公司对多家公司或资产进行战略收购，涉及深度学习、云技术、CDMA 业务等。",
        "代表 Google Capital 拟收购中国一家在线教育网站。",
        "代理深圳证券交易所上市公司海普瑞（Hepalink），收购其美国竞争对手并投资美国医疗基金。",
        "代表中国工商银行收购一家台湾商业银行。",
        "代表一家中国医院所有者重组业务，将其出售给一家英国战略投资者。",
        "代表中国某医疗基金对多家美国公司进行 Pre-IPO 轮投资。",
        "在 AirBnB 和 Uber 的 F 轮融资中代表中国投资者。"
      ],
      "email": "ning.zhang@cbcounselor.com",
      "photo": {
        "src": "/people/ning-zhang.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "程骞",
      "slug": "charles-cheng",
      "title": "管理合伙人",
      "role": "partner",
      "barAdmissions": "加州",
      "education": [
        "斯坦福大学法学硕士",
        "武汉大学法学博士",
        "武汉大学法学硕士",
        "武汉大学法学学士"
      ],
      "practiceFocus": [
        "公司法与公司治理",
        "私募股权与风险投资",
        "数字科技",
        "初创企业",
        "媒体与娱乐"
      ],
      "bio": [
        "程律师服务的客户主要是美国硅谷的科技公司、好莱坞的娱乐公司，以及中国出海企业。他擅长为这些客户提供法律与商业相结合的综合解决方案与战略服务。",
        "程律师担任《哈佛商业评论》顾问委员会成员，也是全球最活跃的风投集团之一 Alumni Ventures Group 和加州大学伯克利分校医疗初创加速器 Health Engine 的顾问专家。他经常在知名活动上发言，包括联合国商业与人权工作组专家研讨会、世界区块链峰会、伯克利中国峰会、GenAI Summit 旧金山、IEEE 元宇宙大会等。其文章在中国、美国、日本和挪威等地获得广泛认可；专业能力获《福布斯》、《金融时报》及 TEDx 等媒体肯定。2021 年，程律师被评选为福布斯中国·北美华人精英 TOP60。",
        "在加入 CBC 之前，程律师在企业和法律领域担任重要职务。他曾担任 Amino Capital 的合伙人，在 TMT、医疗健康、人工智能和区块链等多个行业的 100 多个风险投资交易中发挥了关键作用。他负责监督风投基金的全球法律事务，包括基金组建、基金管理、交易结构、投资谈判、投资者关系、董事会咨询和退出策略等。此外，他还曾担任企业责任资源中心研究员、哥伦比亚法学院 PILnet 研究员，以及武汉大学公益与发展法律研究中心项目主管，负责由联合国开发计划署、美国国务院和福特基金会等机构资助的多个国际法律项目。"
      ],
      "representativeMatters": [],
      "email": "charles.cheng@cbcounselor.com",
      "photo": {
        "src": "/people/charles-cheng.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Wesley Johnson",
      "slug": "wesley-johnson",
      "title": "合伙人",
      "role": "partner",
      "barAdmissions": "伊利诺伊州",
      "education": [
        "芝加哥肯特法学院法律博士",
        "芝加哥大学学士"
      ],
      "practiceFocus": [
        "商业诉讼（含复杂案件诉讼）",
        "房地产诉讼",
        "集体诉讼",
        "企业并购"
      ],
      "bio": [
        "Wesley 的法律服务涵盖诉讼和交易业务。他在商业诉讼、房地产诉讼、雇佣争议解决以及并购等案件的起草和谈判方面拥有丰富的经验。",
        "Wesley 拥有超过 25 年的律师执业经验，具备在各种商业事务中提供法律咨询的深厚知识，包括知识产权许可、商业诉讼、劳动争议诉讼、大型诉讼管理、合同和房地产等。他还定期为那些不需要全职内部总法律顾问的企业提供常年法律顾问服务——作为一名外部、兼职的\"总法律顾问\"，他可以为客户节省大量费用。近年来，Wesley 代理了大量中国电商客户的 TRO 案件。"
      ],
      "representativeMatters": [
        "作为首席律师代表中国一家大型 LED 制造商参与两起美国国际贸易委员会（ITC）第 337 条款调查；在第一起调查中庭审前获得撤诉，在第二起调查中庭审后获得不违规裁决。"
      ],
      "email": "wesley.johnson@cbcounselor.com",
      "photo": {
        "src": "/people/wesley-johnson.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Alan Engle",
      "slug": "alan-engle",
      "title": "合伙人",
      "role": "partner",
      "barAdmissions": "加州、美国专利商标局",
      "education": [
        "加州大学伯克利分校法律博士",
        "匹兹堡大学博士课程",
        "加州大学圣地亚哥分校理学与文学双学士"
      ],
      "practiceFocus": [
        "知识产权",
        "知识产权诉讼",
        "专利",
        "商标",
        "商业诉讼"
      ],
      "bio": [
        "Alan Engle 是一名注册专利律师，主要从事诉讼、知识产权采购、许可和战略方面的业务。他曾在涉及专利侵权、商业秘密盗用、商标侵权、违反知识产权协议、版权侵权和合同纠纷的重大诉讼和仲裁案件中代表客户。Alan 力求抓住诉讼纠纷的核心，高效解决纠纷，避免客户产生不必要的开支。"
      ],
      "representativeMatters": [
        "20 多年来代表美国及外国主要客户处理各类诉讼事务。",
        "部分基于发现专利权人伪造文件的事实，为大型企业进行专利辩护并获胜。",
        "在软件制造商被竞争对手收购后，于一起干扰主要软件许可协议的案件中为原告赢得诉讼。",
        "在公司创始人被指控盗用前雇主商业秘密的商业秘密案件中成功辩护。",
        "监督执行一项达 100 页的、与竞争对手不当使用商业机密有关的和解协议。",
        "在一起与手机视频游戏复制有关的版权案件中，为一家中国客户（曾是诉讼对手）提前达成全面和解。",
        "针对司法部关于一名员工可能从事知识产权犯罪活动的询问，监督公司内部调查。",
        "基于广泛的抗辩理由，为多个专利抗辩案件提供了有利的早期解决方案。",
        "代表原告和被告在多起商标案件中胜诉。"
      ],
      "email": "alan.engle@cbcounselor.com",
      "photo": {
        "src": "/people/alan-engle.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Edwin Wheeler",
      "slug": "edwin-wheeler",
      "title": "合伙人",
      "role": "partner",
      "barAdmissions": "加州",
      "education": [
        "芝加哥大学法律博士",
        "范德堡大学经济学学士"
      ],
      "practiceFocus": [
        "知识产权",
        "专利",
        "商标",
        "诉讼"
      ],
      "bio": [
        "Edwin Wheeler 是一名出色的律师，在知识产权诉讼的各个领域拥有 20 多年的经验。Edwin 曾在 Howrey 和 McDermott Will & Emery 担任知识产权诉讼业务合伙人。他曾代表《财富》500 强公司在地区法院、联邦巡回法院和美国国际贸易委员会处理过数十起专利案件。Edwin 曾在专利、商标／商业外观、商业秘密和反垄断诉讼的陪审团审判、法官审判、行政听证和仲裁中担任首席律师或共同首席律师。他还管理过欧洲各地法院的专利诉讼，并参加过德国（所有司法管辖区）、英国、荷兰和欧洲专利局的多次审判。他的专长包括专利／反垄断接口、行业标准和 FRAND 许可。"
      ],
      "representativeMatters": [
        "在两起美国国际贸易委员会（ITC）337 条款调查案中担任首席律师，成功代理一家大型中国 LED 制造商；第一起案件庭审前获撤诉，第二起庭审后获不违规裁决。",
        "在中国竞争对手盗用对制造大功率 LED 照明芯片至关重要的商业机密后，为美国一家领先的 LED 制造商赢得 6,600 万美元的陪审团裁决。",
        "作为 Rovi Corporation 的专利诉讼副总裁，负责管理 ITC、多个地区法院、欧洲主要国家法院以及欧洲专利局的专利纠纷，支持其年收入达数亿美元的专利许可业务。",
        "在特拉华州的专利陪审团审判中获胜，强制执行涉及 V.34、V.90 和 V.92 模拟调制解调器标准关键技术的专利，获得 760 万美元赔偿。",
        "在一起指控客户最先进的超声波医疗成像机侵犯六项专利的案件中，成功代理一家大型医疗设备公司；案件在专家取证和马克曼听证会前不久顺利和解。",
        "在被终止合作的技术开发伙伴以商业秘密盗用、违约、欺诈和违反反垄断法为由提起的仲裁中，成功代理一家大型医疗器械制造商。",
        "在一起商业外观侵权案中，为美国领先的手持式数字万用表制造商赢得初步禁令，导致一系列竞争对手与客户达成有利和解，并加强了客户的商业外观营销战略。"
      ],
      "email": "edwin.wheeler@cbcounselor.com",
      "photo": {
        "src": "/people/edwin-wheeler.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Benjamin Solter",
      "slug": "benjamin-solter",
      "title": "律师",
      "role": "associate",
      "barAdmissions": "加州、伊利诺伊州",
      "education": [
        "圣塔克拉拉大学法学院法律博士",
        "罗切斯特大学文学士、理学士"
      ],
      "practiceFocus": [
        "知识产权诉讼",
        "电子商务"
      ],
      "bio": [
        "Ben专长于在知识产权纠纷中为独立电商商户提供辩护，尤其是涉及禁令的案件。他擅长制定策略性辩护方案，助力客户维持业务运营，保护其电商店铺。此外，他还代表商户对大型电商平台提起诉讼，确保客户的权利得到维护，利益得到有力捍卫。",
        "除了服务电商商户，Ben 还帮助国际客户应对美国知识产权领域的复杂局面，包括提供全面的专利无效性及不侵权分析，使客户能够就其知识产权战略做出明智决策。他将对美国知识产权法的专业知识与对电商行业的深入理解相结合，为国际客户提供量身定制的法律解决方案。",
        "Ben将美国知识产权法律方面的专业知识与对电子商务行业的深入理解相结合，为国际客户提供量身定制的法律解决方案，以应对其所面临的独特挑战。"
      ],
      "representativeMatters": [],
      "email": "benjamin.solter@cbcounselor.com",
      "photo": {
        "src": "/people/benjamin-solter.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Conrad Everhard",
      "slug": "conrad-everhard",
      "title": "联盟合伙人",
      "role": "alliance-partner",
      "barAdmissions": "纽约州",
      "education": [
        "塞顿霍尔法学院法律博士（cum laude）",
        "乔治城大学文学学士"
      ],
      "practiceFocus": [
        "并购交易",
        "风险投资",
        "私募股权",
        "公司治理"
      ],
      "bio": [
        "Conrad Everhard 是一名经验丰富的公司和交易律师，拥有超过 25 年的从业经验，曾在多家全球知名律师事务所担任合伙人，并担任过一家可再生能源初创公司的总法律顾问。",
        "Conrad 在执行复杂的资本和知识产权交易方面为众多客户提供咨询服务，尤其擅长并购以及各种形式的风险投资和私募股权交易。他在公司治理方面拥有丰富的经验，包括为董事会提供咨询、监督股东行动以及解决股东纠纷。",
        "Conrad 曾在 VLP Law Group 担任合伙人三年。在此之前，他曾担任 AE Polysilicon（一家由风险投资支持的太阳能初创公司）的总法律顾问和管理团队重要成员，该公司从包括法国能源集团 TOTAL Petrochemicals 在内的多家战略投资者处筹集了超过 2 亿美元资金。在加入 AEP 之前，Conrad 曾在 Jones Day 和 Bryan Cave 等多家全球性律师事务所的纽约办事处工作了 20 多年。他还是法律行业商业模式现代化运动的思想领袖，经常就法律行业主题撰写文章和发表演讲。"
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/conrad-everhard.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Leonard Nuara",
      "slug": "leonard-nuara",
      "title": "联盟合伙人",
      "role": "alliance-partner",
      "barAdmissions": "纽约州",
      "education": [
        "塞顿霍尔法学院法律博士",
        "波士顿学院文学学士（cum laude）"
      ],
      "practiceFocus": [
        "科技与互联网法律",
        "知识产权",
        "并购交易",
        "隐私与网络安全",
        "复杂商事诉讼"
      ],
      "bio": [
        "Leonard Nuara 是全美公认的技术与互联网法律领域的权威专家。凭借充沛的精力以及将深厚的法律知识、技术专长与实务技能完美融合的独特能力，Leonard 担任了数十家跨国企业、中小企业、医疗机构、金融机构、初创公司及风投机构的可信赖顾问。他的客户遍布电子商务、零售、软硬件、通信及能源等行业，其业务常涉及突破性技术的开发与部署。",
        "Leonard 还就并购、隐私保护、网络安全及合规事务提供法律咨询。在构建动态工作流程及制定突发事件恢复方案以管理和规避风险方面，他拥有极具专业深度的经验。客户常聘请 Leonard 担任特别法律顾问，或委托其处理涉及知识产权侵权、工程建设、IT 系统及互联网业务的重大争议案件，包括成功解决数起涉案金额高达数亿美元的案件。",
        "Leonard 曾是多家知名律师事务所的合伙人，包括曾担任 Thacher Proffitt & Wood, LLP 技术与知识产权业务组主席，以及 Greenberg Traurig, LLP 知识产权与技术业务组的合伙人。2001 年 9 月 11 日，Thacher Proffitt & Wood 位于世贸中心的总部在悲剧中被毁；此后 Leonard 暂停了律师执业，并在随后六个月中出任该所首席信息官，全权负责事务所技术基础设施的过渡期生存及最终重建相关的所有决策。这种从零开始重建系统、从\"代表买方\"转变为\"真正买方\"的亲身经历，赋予了他宝贵的行业洞察力，并深刻影响了他如今的法律执业实践。"
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/leonard-nuara.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "Marilynn Schuyler",
      "slug": "marilynn-schuyler",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "加州",
      "education": [
        "乔治城⼤学法学博⼠",
        "加州⼤学伯克利分校经济学学⼠"
      ],
      "practiceFocus": [
        "雇佣法及调解"
      ],
      "bio": [
        "Marilynn Schuyler 在公共及私营领域拥有逾⼆⼗年处理劳动与雇佣法律事务的专业经验。她⻓期协助全球雇主应对美国复杂的雇佣法律框架,尤其在反歧视及相关合规问题⽅⾯具备深厚的专业能⼒。 ",
        "她创⽴并担任Schuyler Affirmative Action Practice的负责⼈, 专注于联邦承包商合规, 并在多场全国年度会议上提供劳动法专题培训。她同时也是⼀名认证调解员, 成功调解过各类案件, 具备丰富的实务经验。"
      ],
      "representativeMatters": [
        "在担任美国国防部劳动雇佣律师期间, 于MSPB、EEOC及仲裁程序中保持全胜记录。 ",
        "共同撰写了三份提交⾄美国联邦最⾼法院、与教育领域平权⾏动相关的法庭之友 (Amicus Curiae)意⻅书。"
      ],
      "email": "Schuyler@cbcounselor.com",
      "photo": {
        "src": "/people/Marilynn.jpg",
        "width": 552,
        "height": 552
      }
    },
    {
      "name": "Chris Klug",
      "slug": "chris-klug",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "华盛顿特区、纽约州、伊利诺伊州、弗吉尼亚州、密歇根州",
      "education": [
        "乔治城大学法学院法学硕士",
        "密歇根州立大学法律博士",
        "密歇根州立大学文学学士"
      ],
      "practiceFocus": [
        "税务",
        "并购交易",
        "公司规划",
        "资产规划"
      ],
      "bio": [
        "Chris 为客户提供国内和国际税务、税务争议、公司／业务规划、并购、跨境交易以及国内和国际资产规划等服务。他在国内和国际所得税规划方面拥有丰富经验，工作内容包括境内和境外的并购及其他交易税务事项。作为一名前税法教授，Chris 在 C 类和 S 类公司税及合伙企业税方面有着深厚的背景。",
        "他代表公司、私募股权基金、对冲基金、合资企业、房地产基金和家族办公室等。Chris 还代表客户处理税务审计和争议，在解决复杂税务纠纷方面经验丰富。在为具有双重或多重国籍的客户、尤其是居住在美国以外的客户及其家族处理独特资产规划挑战方面，他亦拥有丰富经验。"
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/chris-klug.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "杨彦辉",
      "slug": "ian-yang",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "纽约州，中国法律职业资格",
      "education": [
        "美国天普大学法学硕士",
        "英国格拉斯哥大学法学硕士",
        "中国政法大学本科"
      ],
      "practiceFocus": [
        "公司治理",
        "企业并购",
        "知识产权",
        "风险投资",
        "私募股权",
        "争议解决"
      ],
      "bio": [
        "杨彦辉律师是拥有20多年经验的国际商务律师，长期为国际社会中众多最成功的企业提供咨询，协助其进入中国及美国市场，主要通过融资、并购等方式实现业务扩张。在两家高速增长及上市科技公司担任总法律顾问（General Counsel）之前，杨律师曾在多家全球最具声望的律师事务所工作，包括科文顿律师事务所（Covington & Burling）、美富律师事务所（Morrison & Foerster）以及伟凯律师事务所（White & Case），并曾在一家快速发展的中国大型律师事务所（西雅图办公室）任职。",
        "杨律师在设计并购与直接投资结构，以及建立跨法域监管合规体系方面经验丰富。在英国和美国接受法律教育后，他在中国与顶尖国际律师共事多年，并为众多财富100强美国企业提供咨询，处理其在中国开展业务所涉及的复杂法律问题。除了服务美国公司外，杨律师也拥有丰富的出海法律服务经验，曾为中国企业及高净值人士建立其在美国的业务和运营提供法律支持。"
      ],
      "representativeMatters": [],
      "email": "ian.yang@cbcounselor.com",
      "photo": {
        "src": "/people/Ian.jpg",
        "width": 612,
        "height": 694
      }
    },
    {
      "name": "杨春白雪",
      "slug": "jessie-yang",
      "title": "律师",
      "role": "associate",
      "barAdmissions": "加州, 中国",
      "education": [
        "加州⼤学尔湾分校法律博⼠",
        "西北大学法学硕士",
        "西南政法大学法学学士"
      ],
      "practiceFocus": [
        "商标注册",
        "商标争议解决",
        "公司法"
      ],
      "bio": [
        "Jessie Yang律师拥有加州⼤学尔湾分校法学院 JD学位，之前曾在美国知产精品所Knobbe Martens ⼯作。Jessie Yang律师⻓期致⼒于商标注册及争议解决等领域，其服务的客户包括魔兽能量饮料等。"
      ],
      "representativeMatters": [
        "代表某美国biotech company解决域名争议",
        "为多家全球知名科技，软件，及⽣物医药公司提供商标检索、注册策略，商标申请及维权服务，涵盖美国及海外司法辖区。",
        "代理多起美国商标审理与上诉委员会（TTAB）异议及撤销案件。",
        "为多家知名公司公司提供商标及版权侵权维权服务，包括发函、谈判及诉前准备。"
      ],
      "email": "Jessie.yang@cbcounselor.com",
      "photo": {
        "src": "/people/Jessie.png",
        "width": 562,
        "height": 520
      }
    },
    {
      "name": "袁泉",
      "slug": "daniel-yuan",
      "title": "外国法顾问",
      "role": "foreign-law-counsel",
      "barAdmissions": "中国",
      "education": [
        "亚利桑那大学法律博士",
        "中国海洋大学文学学士"
      ],
      "practiceFocus": [
        "跨境商事交易",
        "争议解决",
        "跨境电商知识产权维权",
        "跨境重组"
      ],
      "bio": [
        "袁泉律师在加入 CBC 之前，曾在国内某\"红圈\"律师事务所工作近 8 年。袁律师的执业领域主要为跨境商事交易和争议解决。其服务的客户包括境内外投资基金、《财富》500 强企业、境内外金融机构及中大型企业，包括中金资本、DG 资本、Dao Foods Fund、国际金融公司（IFC）、汇丰银行、恒生银行、渣打银行、纽约梅隆银行、工银亚洲、建银亚洲、德银信托、交银信托、国家开发银行、中国进出口银行等。",
        "此外，袁律师在为独立跨境电商商户进行知识产权诉讼辩护方面积累了丰富经验，尤其是涉及禁令的\"附表 A\"（Schedule A）案件。"
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/daniel-yuan.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "范一",
      "slug": "yi-fan",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "明尼苏达州；通过中国国家司法考试",
      "education": [
        "亚利桑那大学法律博士",
        "中国政法大学法学硕士",
        "中国政法大学法学学士"
      ],
      "practiceFocus": [
        "税务",
        "并购与重组",
        "税务合规",
        "税务争议解决"
      ],
      "bio": [
        "范律师是一位专注于税务领域的法律专家。在其执业生涯中积累了丰富经验，主要包括：为并购（M&A）及企业重组交易提供税务咨询；为初创企业、科技公司及房地产公司提供税务筹划；为高净值人士提供税务合规及筹划服务；以及协助企业和个人处理税务争议解决（含税务稽查抗辩）事宜。"
      ],
      "representativeMatters": [
        "为一家中国企业的境外重组税务事宜提供咨询。",
        "为一家中国医药企业的香港子公司就其香港来源所得的免税事宜提供咨询。",
        "为多家非中国税收居民企业就间接转让中国股权及财产所涉中国税务问题提供咨询。",
        "为上市公司个人股东提供中国个人所得税合规及税务筹划咨询。",
        "为初创企业及 TMT（科技、媒体及通信）公司个人股东提供中国个人所得税合规及税务筹划咨询。",
        "协助客户设计交易架构，根据交易实施路径测算应纳税额，并负责与税务机关沟通。",
        "协助多家中国企业的香港子公司申请香港税收居民身份证明。"
      ],
      "email": null,
      "photo": {
        "src": "/people/yi-fan.png",
        "width": 251,
        "height": 335
      }
    },
    {
      "name": "孙伟龙",
      "slug": "cedrick-sun",
      "title": "外国法顾问",
      "role": "foreign-law-counsel",
      "barAdmissions": "中国",
      "education": [
        "威斯康星大学麦迪逊分校法律硕士",
        "上海交通大学法律硕士",
        "华东理工大学法学学士"
      ],
      "practiceFocus": [
        "公司并购",
        "体育与娱乐",
        "房地产与建筑工程",
        "商事合规",
        "私募股权"
      ],
      "bio": [
        "孙伟龙律师的主要执业领域为公司并购、房地产与国际工程、跨境投资、体育与娱乐",
        "在并购及投融资领域，孙律师具有丰富的项目经验，曾代表多家企业及基金完成复杂并购交易及融资项目，涉及半导体、汽车、制造业、新能源、消费品、房地产、体育娱乐等多个行业。在相关交易中，孙伟龙协助客户进行交易结构设计、法律尽职调查、交易文件起草及谈判等工作。凭借扎实的专业功底与丰富的实务经验，能够在复杂监管环境及多方利益博弈背景下，为客户设计兼具合规性与商业可行性的解决方案。",
        "在跨境投资及国际工程领域，孙律师为多家中国企业“走出去”提供合资公司设立、绿地投资、境外合规运营等全流程法律服务，国别聚焦东盟国家、中东及北非以及部分欧美国家;同时亦为多家跨国公司在华投资项目提供工程建设、招投标、项目开发及基础设施投资等方面的全流程法律服务。"
      ],
      "representativeMatters": [
        "为建发股份收购红星美凯龙（A+H）控股权提供法律服务",
        "为PSA向宝能集团出售其持有的长安标致雪铁龙汽车有限公司股权提供法律服务",
        "为吉宝置业中国收购全国首个养老地产提供法律服务",
        "为久事集团推进上海申花足球俱乐部股权改革提供法律服务",
        "为晶盛机电在马来西亚的绿地投资和工程建设提供全流程法律服务",
        "为合力叉车在泰国的绿地投资提供全流程法律服务",
        "为昆仑新材在匈牙利的绿地投资和委托代建提供全流程法律服务",
        "为360在越南设立合资公司提供法律服务",
        "为阿斯利康在中国开发和建设全球战略研发中心提供法律服务",
        "为雪佛龙在宁波北仑工业区的新厂区建设提供全程法律服务"
      ],
      "email": "cedricksun@cbcounselor.com",
      "photo": {
        "src": "/people/Weilong.jpg",
        "width": 219,
        "height": 242
      }
    },
    {
      "name": "陈功",
      "slug": "gong-chen",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "加州",
      "education": [
        "爱荷华大学法律博士",
        "纽约州立大学石溪分校物理学硕士",
        "中国科学技术大学物理学学士"
      ],
      "practiceFocus": [
        "专利",
        "商业秘密",
        "商标",
        "人工智能"
      ],
      "bio": [
        "陈律师是一位技艺精湛的知识产权律师，拥有丰富的律师事务所和企业内部工作经验，曾在英特尔公司担任集团法律顾问和知识产权总监。他的技术专长是物理学和电子工程学，但在职业生涯中接触过广泛的技术领域。他为全球技术客户提供积极主动、风险优化和实用的知识产权建议，尤其是在计算、人工智能和基于数字技术的解决方案领域。",
        "他的经验包括通过定义和实施战略与流程，帮助公司最大化知识产权投资回报，从而高效地开发全球知识产权组合及专利、软件、商业秘密和商标的许可计划。陈律师还将其技术专长应用于支持基于知识产权的交易，如专利和技术许可、研发合作和并购，以及管理进攻性和防御性知识产权诉讼。"
      ],
      "representativeMatters": [
        "领导硅谷科技公司针对顶级竞争对手的专利主张战略，包括美国 ITC 337 条款诉讼，最终成功达成和解并进行战略合并。",
        "为一家电动汽车公司启动并管理专利项目，包括管理全球专利、工业设计和商标组合。",
        "在专利诉讼中成功开发并领导 101 条专利无效辩护，包括赢得一项被联邦巡回上诉法院确认的驳回动议。"
      ],
      "email": null,
      "photo": {
        "src": "/people/gong-chen.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "罗智勇",
      "slug": "roberto-luo",
      "title": "外国法顾问",
      "role": "foreign-law-counsel",
      "barAdmissions": "纽约州、中国",
      "education": [
        "同济大学理学硕士",
        "南京大学理学学士"
      ],
      "practiceFocus": [
        "专利组合战略",
        "专利诉讼与维权",
        "知识产权尽职调查",
        "半导体与通信"
      ],
      "bio": [
        "罗律师是中国的执业专利代理人及执业律师。他在专利领域从业超过 15 年，专注于协助客户在全球范围内构建专利组合，并在中国维护其专利权益。罗律师还为客户提供各类与专利相关的尽职调查意见及争议解决建议，特别是针对那些在美国、欧洲或中国开展业务的高科技公司。罗律师经手处理过 1,300 多项专利，其中三分之二为国际专利。",
        "除了中国专利事务，由于长期的执业经验，他还熟知欧洲和美国的专利事务。罗律师拥有电子工程、电信、计算机科学、自动化及汽车电子的技术背景。他曾代表众多《财富》500 强企业处理在中国的专利事务，其中包括 ABB、博世、新基（现百时美施贵宝旗下）、大陆集团、爱立信、爱普生、通用电气、吉列、通用汽车、霍尼韦尔、因美纳、英特尔、强生、金佰利、克劳克、卡夫、曼恩柴油机、诺基亚、宝洁、飞利浦和大众等。罗律师还为多家初创科技公司及其发展提供指导性意见，其中半数公司如今估值已达 1 亿美元。",
        "罗律师专长于为半导体、电信、人工智能及大数据领域的公司提供专利相关意见。他曾在博世担任工程师。罗律师的专利代理人职业生涯始于中国专利代理（香港）有限公司——中国成立最早且颇具影响力的专利事务所之一——他在那里工作了约四年。之后，他在全球顶尖律所之一的众达律师事务所工作了约四年。他是温州仲裁委员会仲裁员，并被聘为国家海外知识产权纠纷应对指导中心上海分中心海外知识产权纠纷应对专家之一。最高法院将他为客户胜诉的一起专利侵权案件选为 2019 年度知识产权典型案例之一。"
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/",
        "width": null,
        "height": null
      }
    },
    {
      "name": "郑磊",
      "slug": "leo-zheng",
      "title": "外国法顾问",
      "role": "foreign-law-counsel",
      "barAdmissions": "中国",
      "education": [
        "威廉与玛丽法学院法学硕士",
        "武汉大学法学硕士"
      ],
      "practiceFocus": [
        "知识产权",
        "诉讼",
        "并购",
        "证券与合规"
      ],
      "bio": [
        "郑律师专长于知识产权、诉讼及并购业务。过去 20 年，他历任律所执业律师与上市公司法务。在加入 CBC 之前，曾担任某跨国上市集团公司的法务总监。"
      ],
      "representativeMatters": [
        "带领诉讼团队处理数百起诉讼案件，胜诉率达 90%，损失挽回率达 40%。",
        "带领团队完成在南非、英国和韩国的并购，并为投资后管理提供法律支持。",
        "管理知识产权法律事务（谈判标准必要专利合作；处理非执业实体（NPE）诉讼、版权诉讼和商业秘密侵权事宜）。",
        "带领团队通过许可系统、软件保护和法律行动等多种措施打击软件盗版。",
        "开发基因序列专利检索系统（与华南理工大学合作）。",
        "管理与上市公司证券相关的法律事务（设计股权激励计划，就定向增发、债转股等出具法律意见）。",
        "开发合同风险管理系统。",
        "通过诉讼、谈判和金融工具收回数十亿人民币的应收账款。",
        "处理白领犯罪案件（贪污、伪造商业记录、侵犯商业秘密）。"
      ],
      "email": null,
      "photo": {
        "src": "/people/leo-zheng.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "俞子奇",
      "slug": "ziqi-yu",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "加州、佛罗里达州、中国",
      "education": [
        "加州大学旧金山法学院法律博士（J.D.）",
        "华中科技大学生物信息学与知识产权法双学士"
      ],
      "practiceFocus": [
        "知识产权",
        "跨境诉讼",
        "附表 A 电商案件",
        "跨境仲裁"
      ],
      "bio": [
        "俞律师持有中国法律职业资格，并为美国加州、佛罗里达州执业律师及国际贸易法院出庭律师，具备理工与法律复合背景，专注跨境知识产权、涉外争议解决与电商平台合规事务。毕业于加州大学旧金山法学院（J.D.，原 UC Hastings），在校期间专注于知识产权法，并因版权法的优异表现获得 CALI Excellence for the Future Award。他曾担任 UC Law Journal 资深编辑，并发表关于美国版权理论的获奖论文。",
        "在赴美求学之前，俞律师在华中科技大学（中国领先的理工类高校之一）取得生物信息学与知识产权法双学士学位，并在转向国际法律执业之前完成了中国民商法的博士课程。",
        "执业方面，俞律师曾为中美两地客户提供商标申请、专利不侵权意见、附表 A（TRO）电商诉讼以及 ICC、UNCITRAL 规则下的跨境仲裁服务。他曾代表中国卖家参与美国联邦法院诉讼、亚马逊平台争议及知识产权维权策略。其过往任职包括深圳、杭州、迈阿密和旧金山的多家律所，以及在旧金山警察问责局的公职经历，并曾在前美国国务院法律顾问 Chiméne Keitner 教授指导下从事学术研究。俞律师经常为跨境电商协会、知识产权律所及政府机构主讲附表 A 诉讼、亚马逊合规以及人工智能与生物科技初创企业的FTO（自由经营）策略等培训。他获准在多家美国联邦地区法院、国际贸易法院及联邦巡回上诉法院出庭执业。"
      ],
      "representativeMatters": [],
      "email": null,
      "photo": {
        "src": "/people/ziqi-yu.png",
        "width": 224,
        "height": 313
      }
    },
    {
      "name": "冯彦婷",
      "slug": "yenting-feng",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "加州",
      "education": [
        "斯坦福大学法学硕士",
        "国立政治大学法学学士"
      ],
      "practiceFocus": [
        "公司治理",
        "并购交易",
        "投资管理",
        "争议解决",
        "风险与政策"
      ],
      "bio": [
        "冯彦婷是一位以成果为导向的企业法律顾问，在公司治理、跨境交易、合规监管以及争议解决方面拥有丰富经验。她曾为全球投资基金、《财富》500 强企业及高端客户提供法律建议，在多个行业协助促成数千万美元的交易，发挥了关键作用。她的专业涵盖并购、战略性谈判及监管框架，确保法律事务与美国、亚太地区及其他地区的法规保持一致。冯律师还曾参与人工智能政策制定、贸易合规及风险控制，是跨国企业值得信赖的法律战略顾问。"
      ],
      "representativeMatters": [
        "为八家以上全球投资基金及一家管理资产达 30 亿美元的多家族办公室提供法律战略指导。",
        "在优化法律风险与投资回报的同时，完成逾 6 亿美元的跨境交易。",
        "在开曼群岛及新加坡成功设立两个投资基金，筹资超过 2.2 亿美元。",
        "就多起涉及东亚投资者撤资美国企业的并购交易提供法律建议。",
        "领导超过 20 家美国及亚太地区企业的合规及公司治理项目。",
        "为台湾国家发展委员会提供美台人工智能政策合作战略建议。",
        "制定知识产权与许可策略，助力全球游戏平台达成超过 5,000 万美元的交易。",
        "为政府机构及《财富》500 强企业提供监管合规及争议解决服务，取得重大和解与诉讼胜利。",
        "主导腾讯与一家美国上市公司设立 VIE 合资企业，拓展全球业务。",
        "在 60 起诉讼案件中获得有利判决，包括 7 起台湾最高法院的上诉胜诉。",
        "代表政府机关及跨国公司处理 40 余起国家重大基础设施与政府采购争议，成功索赔超过 3,000 万美元。"
      ],
      "email": null,
      "photo": {
        "src": "/people/",
        "width": null,
        "height": null
      }
    },
    {
      "name": "黄怡阳",
      "slug": "yiyang-huang-daciuk",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "加州",
      "education": [
        "德克萨斯大学法律博士",
        "劳伦斯大学文学学士"
      ],
      "practiceFocus": [
        "并购交易",
        "私募股权",
        "公司法",
        "证券"
      ],
      "bio": [
        "黄律师是一位商业律师，兼具专业法律知识与商业洞察力，能够为客户量身定制高效解决方案，助力其业务发展、壮大并顺利实现战略退出。过去十多年间，她就职于美国顶尖的国际律师事务所，积累了深厚且广泛的技能与经验，凭借丰富的法律知识、专业背景以及提供贴心专属服务的能力，为客户创造价值。"
      ],
      "representativeMatters": [
        "代表一家私营公司收购弗吉尼亚州的一家儿童保育教育企业。",
        "代表斯德哥尔摩纳斯达克 OMX 上市的瑞典计算机软件公司 IAR Systems Group，收购特拉华州的 Secure Thingz, Inc.；该公司开发用于联网设备嵌入式安全的产品。",
        "代表私募股权公司 WM Partners, LP，将 Nutranext Holdings, LLC 及其子公司售予 The Clorox 公司。",
        "代表私募股权基金 Global Partnership Investing Capital，参与 GrabTaxi 25 亿美元的融资轮相关事务。",
        "代表澳大利亚制药公司 Hatchtech Pty Limited，将其头虱产品独家权利售予雷迪博士实验室（Dr. Reddy's Laboratories），交易含预付款及里程碑付款。",
        "代表可口可乐公司与怪兽饮料公司（Monster Beverage Corporation）建立全球战略合作伙伴关系，并收购怪兽饮料公司 16.7% 的股权。"
      ],
      "email": null,
      "photo": {
        "src": "/people/yiyang-huang-daciuk.png",
        "width": 261,
        "height": 291
      }
    },
    {
      "name": "杨凤",
      "slug": "feng-yang",
      "title": "律师",
      "role": "associate",
      "barAdmissions": "加州，中国",
      "education": [
        "加州⼤学戴维斯分校法学硕⼠",
        "武汉⼤学法学学⼠"
      ],
      "practiceFocus": [
        "跨境争议解决",
        "跨境电商海外维权",
        "公司法"
      ],
      "bio": [
        "杨凤律师 拥有美国加州⼤学戴维斯分校法学院LLM学位，是中国和美国加州律师。曾在国内某央企投资公司及国内某律所从事商事⾮诉及诉讼⼯作7年。杨凤律师执业领域为跨境争议解决、跨境电商海外维权，公司法以及跨境投融资、收购。"
      ],
      "representativeMatters": [
        "为多个跨境电商卖家处理美国TRO案件提供法律服务",
        "为多个跨境电商卖家处理海外知识产权纠纷提供法律服务",
        "为某国内企业收购新家坡企业提供法律服务",
        "为某国内企业增资扩股融资项目提供法律服务",
        "为中国企业香港上市、美国上市提供法律指导",
        "参与多起刑事案件，擅长刑商交叉案件"
      ],
      "email": "fengyang@cbcounselor.com",
      "photo": {
        "src": "/people/Feng Yang.png",
        "width": 491,
        "height": 597
      }
    },
    {
      "name": "Olufunmilayo Owolabi",
      "slug": "funmi-owolabi",
      "title": "资深顾问",
      "role": "of-counsel",
      "barAdmissions": "哥伦比亚特区",
      "education": [
        "巴尔的摩大学法学院法学硕士",
        "英国雷丁大学法学荣誉学士"
      ],
      "practiceFocus": [
        "数据隐私",
        "网络安全",
        "人工智能"
      ],
      "bio": [
        "Olufunmilayo Owolabi 的主要执业领域包括数据隐私、网络安全法以及人工智能（AI）。在这些领域中，Olufunmilayo 拥有丰富的法律咨询经验，曾为 AI 初创公司、跨国企业及科技公司就复杂的全球数据治理和监管合规事务提供法律建议。她的客户涵盖多个行业，包括房地产科技、电信、制药、零售、人工智能、游戏以及联邦政府机构。",
        "Olufunmilayo 为客户提供覆盖隐私与网络安全合规全生命周期的综合法律服务，包括隐私影响评估（Privacy Impact Assessments）、数据保护影响评估（Data Protection Impact Assessments）、事件响应规划以及数据泄露通知义务等。她协助客户遵守主要国际隐私法律框架，包括 GDPR、CCPA/CPRA、HIPAA 和 PIPEDA，并就标准合同条款（Standard Contractual Clauses）及传输影响评估（Transfer Impact Assessments）等跨境数据传输机制向企业提供法律意见。",
        "与此同时，她还协助企业建立覆盖全公司的治理架构、隐私保护设计（Privacy by Design）框架，以及根据企业监管环境量身定制的风险导向型合规项目。Olufunmilayo 拥有多项隐私与信息安全认证，包括 CISSP、AIGP、CIPP/US、CIPP/E、CIPM、CDPSE 和 CIPT。"
      ],
      "representativeMatters": [
        "为 Alexion Pharmaceuticals 提供法律咨询，协助其建立符合制药行业标准的隐私合规体系，包括起草知情同意文件、患者数据治理协议，以及依据 HIPAA 和《Washington My Health My Data Act》提供监管合规建议",
        "为 Digital Realty 提供法律支持，开展全面的供应商尽职调查，并就多个司法辖区客户协议中的数据保护条款进行谈判",
        "为 Walmart 设计并实施全面的 Cookie 合规项目，包括建立同意管理框架，并确保符合美国各州适用的隐私法规要求",
        "为 Electronic Arts 提供法律支持，协助其建立和维护数据处理活动记录（RoPA）、开展企业级数据映射工作，以及起草内部隐私政策和治理文件",
        "为美国退伍军人事务部（U.S. Department of Veterans Affairs）提供支持，协助开展隐私影响评估，并为联邦信息系统制定隐私治理文件",
        "为美国农业部（U.S. Department of Agriculture）提供法律研究及监管合规支持，涉及联邦隐私法规、数据保存义务以及信息披露要求等事务"
      ],
      "email": "Funmi@cbcounselor.com",
      "photo": {
        "src": "/people/Funmi.jpg",
        "width": 506,
        "height": 338
      }
    }
  ]
} satisfies Record<Locale, Attorney[]>;

export function getAttorneys(locale: Locale) {
  return attorneysByLocale[locale].map((attorney) => ({
    ...attorney,
    photo: {
      src: PORTRAIT_BY_SLUG[attorney.slug] ?? attorney.photo.src,
      width: 1152,
      height: 1430,
    },
  }));
}

export function getAttorney(locale: Locale, slug: string) {
  return getAttorneys(locale).find((attorney) => attorney.slug === slug);
}
