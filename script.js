const portfolioData = {
  tr: {
    nav: [
      { id: "experience", label: "Deneyim" },
      { id: "projects", label: "Projeler" },
      { id: "education", label: "Eğitim" },
      { id: "skills", label: "Yetenekler" },
      { id: "interests", label: "İlgi Alanları" },
      { id: "references", label: "Referanslar" },
      { id: "contact", label: "İletişim" }
    ],
    hero: {
      eyebrow: "Yazılım, e-ticaret ve operasyon sistemleri",
      name: "Emre Kaan Durmuş",
      role: "Project Manager | Software Tester | Business Analyst | Front-End Developer",
      summary:
        "E-ticaret operasyonları, ERP sistemleri, ödeme entegrasyonları, Shopify projeleri ve üretim odaklı yazılım akışları üzerinde çalışan; teknik ve operasyonel tarafları bir araya getiren çok disiplinli bir profesyonel.",
      primaryAction: "Deneyimi incele",
      secondaryAction: "İletişim bilgileri",
      stats: [
        { value: "4+", label: "Profesyonel rol" },
        { value: "9", label: "CV'deki ana proje" },
        { value: "2", label: "Dil seçeneği" }
      ],
      panelTitle: "Odak Alanları",
      panelDescription: "CV'deki teknik ve operasyonel güçler, etiketli ve okunabilir bir özet halinde.",
      codeLines: [
        { label: "Proje Yönetimi", detail: "Cross-functional delivery ve operasyon koordinasyonu", level: 92 },
        { label: "E-Ticaret Sistemleri", detail: "Shopify, ödeme sistemleri ve marketplace operasyonları", level: 90 },
        { label: "ERP ve Üretim", detail: "Stok, sipariş, shipping ve operasyon modülleri", level: 95 },
        { label: "Front-End Stack", detail: "React, TypeScript, Next.js ve arayüz kurgusu", level: 88 },
        { label: "Otomasyon", detail: "Python, ZPL, QR ve render pipeline çözümleri", level: 86 },
        { label: "Global Operasyon", detail: "TR ve U.S. market setup ve entegrasyonları", level: 84 }
      ]
    },
    contact: {
      tag: "Bağlantı",
      title: "İletişim",
      items: [
        { label: "Adres", value: "Ataken Mahallesi, 241 Sokak, No:5 Dumankaya Konsept Sitesi C Blok, 34307" },
        { label: "Telefon", value: "+90 531 968 96 66", href: "tel:+905319689666" },
        { label: "E-posta", value: "emrekaandrms@gmail.com", href: "mailto:emrekaandrms@gmail.com" }
      ]
    },
    experience: {
      tag: "Kariyer",
      title: "Profesyonel Deneyim",
      description:
        "Yazılım testinden operasyonel raporlamaya, front-end geliştirmeden proje yönetimine uzanan deneyimlerin tamamını zaman çizelgesi formatında sunar.",
      items: [
        {
          company: "Allegro",
          period: "Kasım 2023 — Güncel",
          role: "Project Manager",
          bullets: [
            "Fonksiyonlar arası ekipleri yöneterek karmaşık e-ticaret projelerini zamanında ve bütçe dahilinde teslim etti.",
            "Proje takvimlerini, paydaş iletişimini ve kaynak planlamasını yürüterek operasyonel verimliliği sağladı.",
            "Altın sektörüne özel yazılım geliştirmelerini; RFID tabanlı stok takibi ve iş akışı optimizasyonu dahil olmak üzere geliştirdi.",
            "Kargo entegrasyonlarını, render otomasyonunu ve gelişmiş e-ticaret ödeme sistemlerini devreye aldı.",
            "Shopify tema özelleştirme, uygulama geliştirme, SEO yönetimi ve pazarlama çalışmaları gibi platform projelerini yönetti.",
            "ABD pazarındaki operasyonları; ödeme kanalları ve Amazon, Etsy, Walmart gibi platform hesapları dahil olacak şekilde kurdu ve yönetti."
          ],
          subgroups: [
            {
              title: "Kullanılan Teknolojiler ve Uygulamalar",
              pills: [
                "Docker",
                "Node.js",
                "Next.js",
                "React",
                "TypeScript",
                "PostgreSQL",
                "Firebase",
                "Material-UI",
                "Three.js",
                "Python",
                "Express.js",
                "TypeORM",
                "JWT",
                "API2Cart",
                "Shopify (Liquid, Matrixify)",
                "Rhino",
                "RhinoScript",
                "MatrixGold",
                "KeyShot",
                "Materialise Magics",
                "Craftgate",
                "Adyen",
                "Braintree",
                "Stripe",
                "Payoneer",
                "Mercury",
                "Twilio",
                "SE"
              ]
            },
            {
              title: "Uzmanlık Alanları",
              bullets: [
                "Altın stok yönetimi yazılımları ve RFID ile ürün takibi geliştirme konusunda yoğun deneyim.",
                "Altın üretim sürecindeki iş akışları ve operasyon tanımlarını kurgulama.",
                "Üretim ve teslimat verimliliğini artırmak için render otomasyonu ve kargo entegrasyonları yönetimi.",
                "Ödeme orkestrasyon araçları entegrasyonu ve iş ortaklığı süreçlerinin yürütülmesi.",
                "Shopify tema özelleştirme, uygulama geliştirme, SEO yönetimi ve pazarlama kampanyaları yürütülmesi.",
                "Meta Business reklam kampanyaları, Google Ads ve e-posta pazarlama stratejilerinde uzmanlaşma.",
                "ABD pazarında şirket kurulumları, ödeme kanalları ve banka hesapları açılışı; PayPal, Amazon, Etsy ve Walmart hesap yönetimi.",
                "Etsy Commercial Access ve Standard API'leri ile web uygulamaları geliştirme.",
                "Shipentegra sistemleri ve API erişimleri üzerinden entegratör yönetimi.",
                "Çoklu mağaza yönetimi için SMTP, mail hosting, IVR sistemleri ve IP spoofing konfigürasyonları.",
                "SMS ve e-posta servisleri, çağrı sistemleri ve pazarlama otomasyonunun denetlenmesi."
              ]
            }
          ]
        },
        {
          company: "Glamira",
          period: "Şubat 2021 - Ekim 2023",
          role: "Software Tester and Business Analyst",
          bullets: [
            "Magento CMS için manuel testler yaptı, eklenti kurulumlarını gerçekleştirdi ve test senaryoları oluşturdu.",
            "Mücevher üretim süreçlerini analiz etti, iş akışları oluşturdu ve Magento için operasyon dokümanları hazırladı.",
            "UI/UX güncellemeleri, mantıksal iyileştirmeler, cron job'lar ve CMS blokları/sayfaları konfigure etti.",
            "Faturalama ve credit memo süreçlerini yönetti, penetration testleri gerçekleştirdi.",
            "Ödeme sistemleri ve ödeme geçitlerini entegre etti, ödeme orkestrasyon araçlarını yönetti ve üretim veritabanlarında sorgular çalıştırdı.",
            "Lojistik ve depo entegrasyonlarını özel API'ler ve RFID çözümleriyle yönetti.",
            "Müşteri hizmetleri helpdesk kurallarını tasarladı ve uyguladı; proje yönetim sistemlerini yönetti.",
            "3D ürün tarayıcı entegrasyonlarına liderlik etti, projelerin PWA versiyonlarını hazırladı ve yapay zekâ destekli chatbot geliştirmelerini destekledi.",
            "İç veri yedeklemeleri, Google Workspace, GA4 veri akışları ve fraud protection sistemlerini yönetti."
          ]
        },
        {
          company: "Huawei",
          period: "Ocak 2019 - Kasım 2019",
          role: "Monitoring and Reporting Analyst",
          bullets: [
            "Servis seviyelerini izledi ve sorun kalıplarını tespit etmek için müşteri destek metriklerini analiz etti.",
            "Gelişmiş makrolar ve büyük veri tablolarını kullanarak Excel tabanlı operasyonel raporlar oluşturdu.",
            "Performans ve problemler hakkında operasyon direktörlerini bilgilendirmek için sunumlar hazırladı."
          ]
        },
        {
          company: "Sesli Harfler Agency",
          period: "Mayıs 2018 - Eylül 2018",
          role: "Front-End Developer Trainee",
          bullets: [
            "Ajans projelerindeki hataları debug ederek düzeltti ve yeni özellikler geliştirdi.",
            "İçerik tasarımı odaklı React ve Drupal CMS projelerinde görev aldı.",
            'MVC tabanlı projelerde veritabanı, sayfalama sistemleri ve "account" süreçlerini yeniden tasarladı.'
          ]
        }
      ]
    },
    projects: {
      tag: "Yapılar",
      title: "Öne Çıkan Projeler",
      description:
        "CV'deki proje listesinin tamamını, teknik odak ve etki bağlamıyla birlikte kart yapısında sunar.",
      items: [
        {
          title: "Tüm modülleriyle ERP sistemi",
          tag: "ERP / Operations",
          description: "Kargo, stok, sipariş ve operasyon modüllerini kapsayan tam kapsamlı ERP sistemi."
        },
        {
          title: "Yapay zekâ destekli müşteri destek uygulaması",
          tag: "AI / Web App",
          description: "Anvil ve ChatGPT API token kullanılarak geliştirilen otomatik müşteri destek cevaplama web uygulaması."
        },
        {
          title: "ERP entegre QR kod okuyucu",
          tag: "Production / QR",
          description: "Üretim adımlarını takip etmek için ERP sistemine tam entegre çalışan QR kod okuyucu uygulaması."
        },
        {
          title: "Zebra printer için ZPL uygulaması",
          tag: "Python / ZPL",
          description: "Python ve Zebra Programming Language kullanılarak geliştirilen Zebra yazıcı uygulaması."
        },
        {
          title: "Mücevher ürünleri için render farm sistemi",
          tag: "Automation / Rendering",
          description: "Mücevher ürünlerine yönelik render farming sistemi ve ona bağlı uygulama."
        },
        {
          title: "Native Shopify entegrasyon uygulaması",
          tag: "Shopify / API",
          description: "Commercial API erişimi odaklı native Shopify uygulaması."
        },
        {
          title: "Etsy için residential proxy uygulaması",
          tag: "Python / Proxy",
          description: "Python ve IPRoyal kullanılarak Etsy odaklı residential proxy uygulaması."
        },
        {
          title: "Tarayıcıda 3D ürün görüntüleme",
          tag: "Three.js / Canvas",
          description: "HTML canvas ve Three.js kullanılarak tarayıcıda geliştirilmiş 3D ürün görüntüleme uygulaması."
        },
        {
          title: "Yüzük ölçüsü bulma için AR uygulaması",
          tag: "AR / Product Experience",
          description: "Yüzük ölçüsünü bulmaya yardımcı augmented reality uygulaması."
        }
      ]
    },
    education: {
      tag: "Akademik Altyapı",
      title: "Eğitim",
      description:
        "Teknik altyapı ile yönetsel bakış açısını birleştiren iki farklı program üzerinden şekillenen eğitim geçmişi.",
      items: [
        {
          school: "Anadolu University",
          meta: "Eylül 2021 - Güncel | Program: Management Information Systems",
          points: [
            "Veri işleme ve kurumsal davranışlara yönelik yönetsel perspektif alanında uzmanlaştı.",
            "GANO: 3.37 / 4"
          ]
        },
        {
          school: "Trakya University",
          meta: "Eylül 2016 - Eylül 2018 | Program: Computer Programming",
          points: [
            "Yazılım geliştirme ilkeleri ve temelleri konusunda güçlü bir altyapı kazandı.",
            "Proje geliştirme odağıyla mezuniyet döneminde sınıfının ilk %10'u içinde yer aldı."
          ]
        }
      ]
    },
    skills: {
      tag: "Yetkinlikler",
      title: "Teknik ve Operasyonel Yetenekler",
      description:
        "CV'deki teknoloji ve yetenek başlıkları; yazılım, veri, e-ticaret ve karar alma odaklı gruplar halinde düzenlendi.",
      groups: [
        {
          title: "Programming Languages & Frameworks",
          tags: ["React", "TypeScript", "Next.js", "Python", "C#"]
        },
        {
          title: "Web Development & Automation",
          tags: ["CMS", "Magento", "Shopify", "Zapier"]
        },
        {
          title: "Database Management",
          tags: ["Firebase", "Postgre", "MariaDB"]
        },
        {
          title: "Core Strengths",
          tags: ["Problem Solver", "Decision Maker"]
        },
        {
          title: "Platform & Tooling Stack",
          tags: [
            "Magento",
            "GitLab",
            "WordPress",
            "PyroCMS",
            "Shopify",
            "Adyen",
            "Braintree",
            "Stripe",
            "ApplePay",
            "GooglePay",
            "Primer",
            "Zapier",
            "Aftership",
            "ShippyPro",
            "ShipTheory",
            "Trustpilot",
            "eDesk",
            "Zendesk",
            "CloudTalk",
            "Squeezely",
            "GA4",
            "Salesforce",
            "Metasploit",
            "Zebra ZPL",
            "Irys RFID",
            "Sendcloud",
            "ixopay",
            "Duda",
            "Odoo",
            "AWS S3",
            "Forter",
            "Signifyd",
            "Pandadoc",
            "Docusign",
            "Rhinoceros 3D",
            "MatrixGold",
            "TG3D",
            "Scanatic 360 Body Scanner",
            "Figma",
            "Multcloud",
            "Firecloud",
            "Box Shuttle",
            "Monday",
            "Slack"
          ]
        }
      ]
    },
    interests: {
      tag: "Disiplini Besleyen Alanlar",
      title: "İlgi Alanları",
      description:
        "Teknik merak ile yaratıcı ve performans odaklı hobilerin bir araya geldiği alanlar.",
      items: [
        {
          title: "Müzik",
          description: "Piyano, film müzikleri; Tulpar ve Damocles Band'de gitar."
        },
        {
          title: "Teknoloji",
          description: "A.I. teknolojileri ve Unreal Engine."
        },
        {
          title: "Spor",
          description: "Rallycross ve kamp."
        }
      ]
    },
    references: {
      tag: "Güven Ağı",
      title: "Referanslar",
      description:
        "CV'de yer alan profesyonel referanslar birebir korunarak listelendi.",
      items: [
        {
          name: "Nilay Balkanlı",
          role: "Project Director at Allegro",
          phone: "+90 532 405 11 35"
        },
        {
          name: "Şükrü Can",
          role: "Web Project Manager, Glamira",
          phone: "+359 88 776 8999"
        },
        {
          name: "İnanç Tutku Saraç",
          role: "Project Manager, Huawei",
          phone: "+90 544 828 32 28"
        }
      ]
    }
  },
  en: {
    nav: [
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "interests", label: "Interests" },
      { id: "references", label: "References" },
      { id: "contact", label: "Contact" }
    ],
    hero: {
      eyebrow: "Software, e-commerce, and operational systems",
      name: "Emre Kaan Durmuş",
      role: "Project Manager | Software Tester | Business Analyst | Front-End Developer",
      summary:
        "A multidisciplinary professional connecting technical execution with operational strategy across e-commerce operations, ERP systems, payment integrations, Shopify projects, and production-focused software workflows.",
      primaryAction: "Explore experience",
      secondaryAction: "View contact info",
      stats: [
        { value: "4+", label: "Professional roles" },
        { value: "9", label: "Featured CV projects" },
        { value: "2", label: "Language options" }
      ],
      panelTitle: "Focus Areas",
      panelDescription: "A readable snapshot of the strongest technical and operational capabilities from the CV.",
      codeLines: [
        { label: "Project Management", detail: "Cross-functional delivery and operational coordination", level: 92 },
        { label: "E-Commerce Systems", detail: "Shopify, payment systems, and marketplace operations", level: 90 },
        { label: "ERP & Production", detail: "Stock, order, shipping, and operational modules", level: 95 },
        { label: "Front-End Stack", detail: "React, TypeScript, Next.js, and interface architecture", level: 88 },
        { label: "Automation", detail: "Python, ZPL, QR, and render pipeline solutions", level: 86 },
        { label: "Global Operations", detail: "TR and U.S. market setup and integrations", level: 84 }
      ]
    },
    contact: {
      tag: "Connection",
      title: "Contact",
      items: [
        { label: "Address", value: "Ataken Mahallesi, 241 Sokak, No:5 Dumankaya Konsept Sitesi C Blok, 34307" },
        { label: "Phone", value: "+90 531 968 96 66", href: "tel:+905319689666" },
        { label: "Email", value: "emrekaandrms@gmail.com", href: "mailto:emrekaandrms@gmail.com" }
      ]
    },
    experience: {
      tag: "Career",
      title: "Professional Experience",
      description:
        "A timeline of roles spanning software testing, operational reporting, front-end development, and project management.",
      items: [
        {
          company: "Allegro",
          period: "November 2023 - Present",
          role: "Project Manager",
          bullets: [
            "Led cross-functional teams to deliver complex e-commerce projects on time and within budget.",
            "Managed project timelines, stakeholder communication, and resource allocation to maintain operational efficiency.",
            "Advanced gold industry software solutions, including RFID-based stock tracking and workflow optimization.",
            "Implemented shipping integrations, rendering automation, and advanced e-commerce payment systems.",
            "Delivered Shopify initiatives covering theme customization, app development, SEO management, and marketing workflows.",
            "Established and managed U.S. market operations, including payment channels and platform accounts such as Amazon, Etsy, and Walmart."
          ],
          subgroups: [
            {
              title: "Technologies and Applications",
              pills: [
                "Docker",
                "Node.js",
                "Next.js",
                "React",
                "TypeScript",
                "PostgreSQL",
                "Firebase",
                "Material-UI",
                "Three.js",
                "Python",
                "Express.js",
                "TypeORM",
                "JWT",
                "API2Cart",
                "Shopify (Liquid, Matrixify)",
                "Rhino",
                "RhinoScript",
                "MatrixGold",
                "KeyShot",
                "Materialise Magics",
                "Craftgate",
                "Adyen",
                "Braintree",
                "Stripe",
                "Payoneer",
                "Mercury",
                "Twilio",
                "SE"
              ]
            },
            {
              title: "Expertise Areas",
              bullets: [
                "Extensive experience in developing gold stock management software and tracking products with RFID.",
                "Defined workflows throughout the gold production process.",
                "Managed rendering automation and shipping integrations to improve production and delivery efficiency.",
                "Integrated payment orchestration tools and handled related business negotiations.",
                "Executed comprehensive Shopify work across theme customization, app development, SEO management, and marketing campaigns.",
                "Specialized in Meta Business advertising campaigns, Google Ads, and email marketing strategies.",
                "Established companies in the U.S. market, opened payment channels and bank accounts, and managed PayPal, Amazon, Etsy, and Walmart operations.",
                "Built web applications using Etsy Commercial Access and Standard APIs for seamless integrations.",
                "Managed integrators using Shipentegra systems and API access.",
                "Configured SMTP, mail hosting, IVR systems, and IP spoofing for multi-store management.",
                "Oversaw SMS and email services, call systems, and marketing automation."
              ]
            }
          ]
        },
        {
          company: "Glamira",
          period: "February 2021 - October 2023",
          role: "Software Tester and Business Analyst",
          bullets: [
            "Conducted manual testing for Magento CMS, installed plugins, and created test scenarios.",
            "Analyzed jewelry production processes, built workflows, and prepared operational documents for Magento.",
            "Configured UI/UX updates, logical improvements, cron jobs, and CMS blocks/pages.",
            "Managed invoicing and credit memo processes, and performed penetration tests.",
            "Integrated payment systems and gateways, managed payment orchestration tools, and queried production databases.",
            "Handled logistics and warehouse integrations through custom APIs and RFID-based stock management solutions.",
            "Designed and implemented customer service helpdesk rules and managed project management systems.",
            "Led 3D product scanner integrations, created PWA versions of projects, and supported AI-powered chatbot development.",
            "Managed internal data backups, Google Workspace, GA4 data feeds, and fraud protection systems."
          ]
        },
        {
          company: "Huawei",
          period: "January 2019 - November 2019",
          role: "Monitoring and Reporting Analyst",
          bullets: [
            "Monitored service levels and analyzed customer support metrics to identify recurring issue patterns.",
            "Created operational reports in Excel using advanced macros and large data tables.",
            "Prepared presentations to brief operations directors on performance and critical issues."
          ]
        },
        {
          company: "Sesli Harfler Agency",
          period: "May 2018 - September 2018",
          role: "Front-End Developer Trainee",
          bullets: [
            "Debugged and fixed issues in agency projects while developing new features.",
            "Worked on front-end projects with React and Drupal CMS for content-focused experiences.",
            'Redesigned databases, paging systems, and "account" processes for MVC-based projects.'
          ]
        }
      ]
    },
    projects: {
      tag: "Builds",
      title: "Highlighted Projects",
      description:
        "All projects listed in the CV, presented as focused product cards with technical context.",
      items: [
        {
          title: "Full ERP system with all modules",
          tag: "ERP / Operations",
          description: "A complete ERP system covering shipping, stock, order, and operational modules."
        },
        {
          title: "AI customer support auto-response app",
          tag: "AI / Web App",
          description: "An AI-powered customer support auto-response web app built with Anvil and a ChatGPT API token."
        },
        {
          title: "ERP-integrated QR reader app",
          tag: "Production / QR",
          description: "A QR code reader application fully integrated with the ERP system for production-step tracking."
        },
        {
          title: "ZPL app for Zebra printers",
          tag: "Python / ZPL",
          description: "A Zebra printer application built with Python and Zebra Programming Language."
        },
        {
          title: "Render farming system for jewelry products",
          tag: "Automation / Rendering",
          description: "A render farming system and application designed for jewelry products."
        },
        {
          title: "Native Shopify integration app",
          tag: "Shopify / API",
          description: "A native Shopify app built for integration-focused commercial API access."
        },
        {
          title: "Residential proxy app for Etsy",
          tag: "Python / Proxy",
          description: "A residential proxy application for Etsy built with Python and IPRoyal."
        },
        {
          title: "Browser-based 3D product viewer",
          tag: "Three.js / Canvas",
          description: "A browser 3D product viewing app built with HTML canvas and Three.js."
        },
        {
          title: "AR app for ring size discovery",
          tag: "AR / Product Experience",
          description: "An augmented reality application designed to help users find ring size."
        }
      ]
    },
    education: {
      tag: "Academic Foundation",
      title: "Education",
      description:
        "An educational background shaped by both technical fundamentals and managerial systems thinking.",
      items: [
        {
          school: "Anadolu University",
          meta: "September 2021 - Present | Program: Management Information Systems",
          points: [
            "Specialized in data processing and managerial perspectives on corporate behavior.",
            "GPA: 3.37 / 4"
          ]
        },
        {
          school: "Trakya University",
          meta: "September 2016 - September 2018 | Program: Computer Programming",
          points: [
            "Built a strong foundation in software development principles and fundamentals.",
            "Ranked in the top 10% of the graduating class with a strong focus on project development."
          ]
        }
      ]
    },
    skills: {
      tag: "Capabilities",
      title: "Technical and Operational Skills",
      description:
        "Technologies and strengths from the CV, organized into software, data, e-commerce, and decision-oriented capability groups.",
      groups: [
        {
          title: "Programming Languages & Frameworks",
          tags: ["React", "TypeScript", "Next.js", "Python", "C#"]
        },
        {
          title: "Web Development & Automation",
          tags: ["CMS", "Magento", "Shopify", "Zapier"]
        },
        {
          title: "Database Management",
          tags: ["Firebase", "Postgre", "MariaDB"]
        },
        {
          title: "Core Strengths",
          tags: ["Problem Solver", "Decision Maker"]
        },
        {
          title: "Platforms & Tools",
          tags: [
            "Magento",
            "GitLab",
            "WordPress",
            "PyroCMS",
            "Shopify",
            "Adyen",
            "Braintree",
            "Stripe",
            "ApplePay",
            "GooglePay",
            "Primer",
            "Zapier",
            "Aftership",
            "ShippyPro",
            "ShipTheory",
            "Trustpilot",
            "eDesk",
            "Zendesk",
            "CloudTalk",
            "Squeezely",
            "GA4",
            "Salesforce",
            "Metasploit",
            "Zebra ZPL",
            "Irys RFID",
            "Sendcloud",
            "ixopay",
            "Duda",
            "Odoo",
            "AWS S3",
            "Forter",
            "Signifyd",
            "Pandadoc",
            "Docusign",
            "Rhinoceros 3D",
            "MatrixGold",
            "TG3D",
            "Scanatic 360 Body Scanner",
            "Figma",
            "Multcloud",
            "Firecloud",
            "Box Shuttle",
            "Monday",
            "Slack"
          ]
        }
      ]
    },
    interests: {
      tag: "Outside the Build",
      title: "Interests",
      description:
        "Creative and technical interests that complement the engineering mindset.",
      items: [
        {
          title: "Music",
          description: "Piano, film scores, and guitar performances with Tulpar and Damocles Band."
        },
        {
          title: "Technology",
          description: "A.I. technologies and Unreal Engine."
        },
        {
          title: "Sports",
          description: "Rallycross and camping."
        }
      ]
    },
    references: {
      tag: "Network",
      title: "References",
      description:
        "Professional references listed exactly as provided in the CV.",
      items: [
        {
          name: "Nilay Balkanlı",
          role: "Project Director at Allegro",
          phone: "+90 532 405 11 35"
        },
        {
          name: "Şükrü Can",
          role: "Web Project Manager, Glamira",
          phone: "+359 88 776 8999"
        },
        {
          name: "İnanç Tutku Saraç",
          role: "Project Manager, Huawei",
          phone: "+90 544 828 32 28"
        }
      ]
    }
  }
};

let currentLang = "tr";

const ids = {
  heroEyebrow: document.getElementById("heroEyebrow"),
  heroName: document.getElementById("heroName"),
  heroRole: document.getElementById("heroRole"),
  heroSummary: document.getElementById("heroSummary"),
  heroPrimaryAction: document.getElementById("heroPrimaryAction"),
  heroSecondaryAction: document.getElementById("heroSecondaryAction"),
  heroStats: document.getElementById("heroStats"),
  heroCodeFrame: document.getElementById("heroCodeFrame"),
  nav: document.getElementById("nav"),
  contactTag: document.getElementById("contactTag"),
  contactTitle: document.getElementById("contactTitle"),
  contactList: document.getElementById("contactList"),
  experienceTag: document.getElementById("experienceTag"),
  experienceTitle: document.getElementById("experienceTitle"),
  experienceDescription: document.getElementById("experienceDescription"),
  experienceTimeline: document.getElementById("experienceTimeline"),
  projectsTag: document.getElementById("projectsTag"),
  projectsTitle: document.getElementById("projectsTitle"),
  projectsDescription: document.getElementById("projectsDescription"),
  projectsGrid: document.getElementById("projectsGrid"),
  educationTag: document.getElementById("educationTag"),
  educationTitle: document.getElementById("educationTitle"),
  educationDescription: document.getElementById("educationDescription"),
  educationList: document.getElementById("educationList"),
  skillsTag: document.getElementById("skillsTag"),
  skillsTitle: document.getElementById("skillsTitle"),
  skillsDescription: document.getElementById("skillsDescription"),
  skillsGroups: document.getElementById("skillsGroups"),
  interestsTag: document.getElementById("interestsTag"),
  interestsTitle: document.getElementById("interestsTitle"),
  interestsDescription: document.getElementById("interestsDescription"),
  interestsGrid: document.getElementById("interestsGrid"),
  referencesTag: document.getElementById("referencesTag"),
  referencesTitle: document.getElementById("referencesTitle"),
  referencesDescription: document.getElementById("referencesDescription"),
  referencesList: document.getElementById("referencesList"),
  langToggle: document.getElementById("langToggle")
};

function renderNav(data) {
  ids.nav.innerHTML = data.nav
    .map((item) => `<a href="#${item.id}">${item.label}</a>`)
    .join("");
}

function renderHero(data) {
  ids.heroEyebrow.textContent = data.hero.eyebrow;
  ids.heroName.textContent = data.hero.name;
  ids.heroRole.textContent = data.hero.role;
  ids.heroSummary.textContent = data.hero.summary;
  ids.heroPrimaryAction.textContent = data.hero.primaryAction;
  ids.heroSecondaryAction.textContent = data.hero.secondaryAction;
  ids.heroStats.innerHTML = data.hero.stats
    .map(
      (item) => `
        <div class="stat-card">
          <span class="stat-value">${item.value}</span>
          <span class="stat-label">${item.label}</span>
        </div>
      `
    )
    .join("");

  ids.heroCodeFrame.innerHTML = `
    <div class="panel-copy">
      <p class="panel-tag">${data.hero.panelTitle}</p>
      <p class="panel-description">${data.hero.panelDescription}</p>
    </div>
    ${data.hero.codeLines
    .map((line, index) => {
      return `
        <div class="code-line">
          <span class="code-index">0${index + 1}</span>
          <div class="code-content">
            <div class="code-copy">
              <strong class="code-label">${line.label}</strong>
              <span class="code-detail">${line.detail}</span>
            </div>
            <div class="code-meter" aria-label="${line.label}">
              <div class="code-bar" style="--bar-size:${line.level}%;">
                <span class="code-percent">${line.level}%</span>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("")}
  `;
}

function renderContact(data) {
  ids.contactTag.textContent = data.contact.tag;
  ids.contactTitle.textContent = data.contact.title;
  ids.contactList.innerHTML = data.contact.items
    .map((item) => {
      const value = item.href
        ? `<a class="contact-value" href="${item.href}">${item.value}</a>`
        : `<p class="contact-value">${item.value}</p>`;

      return `
        <div class="contact-item">
          <p class="contact-label">${item.label}</p>
          ${value}
        </div>
      `;
    })
    .join("");
}

function renderExperience(data) {
  ids.experienceTag.textContent = data.experience.tag;
  ids.experienceTitle.textContent = data.experience.title;
  ids.experienceDescription.textContent = data.experience.description;
  ids.experienceTimeline.innerHTML = data.experience.items
    .map((item) => {
      const bullets = item.bullets
        .map((bullet) => `<li>${bullet}</li>`)
        .join("");

      const subgroups = item.subgroups
        ? `
          <div class="experience-subgroups">
            ${item.subgroups
              .map((group) => {
                const content = group.pills
                  ? `<div class="pill-list">${group.pills.map((pill) => `<span class="pill">${pill}</span>`).join("")}</div>`
                  : `<ul>${group.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`;

                return `
                  <div class="experience-subgroup">
                    <h4>${group.title}</h4>
                    <div class="timeline-copy">${content}</div>
                  </div>
                `;
              })
              .join("")}
          </div>
        `
        : "";

      return `
        <article class="timeline-item">
          <div class="timeline-header">
            <span class="timeline-meta">${item.period}</span>
            <h3>${item.company}</h3>
            <span class="timeline-role">${item.role}</span>
          </div>
          <div class="timeline-copy">
            <ul>${bullets}</ul>
            ${subgroups}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProjects(data) {
  ids.projectsTag.textContent = data.projects.tag;
  ids.projectsTitle.textContent = data.projects.title;
  ids.projectsDescription.textContent = data.projects.description;
  ids.projectsGrid.innerHTML = data.projects.items
    .map(
      (item) => `
        <article class="project-card">
          <span class="project-tag">${item.tag}</span>
          <div class="project-copy">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderEducation(data) {
  ids.educationTag.textContent = data.education.tag;
  ids.educationTitle.textContent = data.education.title;
  ids.educationDescription.textContent = data.education.description;
  ids.educationList.innerHTML = data.education.items
    .map(
      (item) => `
        <article class="education-item">
          <span class="education-meta">${item.meta}</span>
          <h3>${item.school}</h3>
          <ul class="education-points">
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderSkills(data) {
  ids.skillsTag.textContent = data.skills.tag;
  ids.skillsTitle.textContent = data.skills.title;
  ids.skillsDescription.textContent = data.skills.description;
  ids.skillsGroups.innerHTML = data.skills.groups
    .map(
      (group) => `
        <article class="skill-group">
          <h3>${group.title}</h3>
          <ul class="skill-tags">
            ${group.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderInterests(data) {
  ids.interestsTag.textContent = data.interests.tag;
  ids.interestsTitle.textContent = data.interests.title;
  ids.interestsDescription.textContent = data.interests.description;
  ids.interestsGrid.innerHTML = data.interests.items
    .map(
      (item) => `
        <article class="interest-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderReferences(data) {
  ids.referencesTag.textContent = data.references.tag;
  ids.referencesTitle.textContent = data.references.title;
  ids.referencesDescription.textContent = data.references.description;
  ids.referencesList.innerHTML = data.references.items
    .map(
      (item) => `
        <article class="reference-item">
          <div class="reference-icon">::</div>
          <div class="reference-copy">
            <h3>${item.name}</h3>
            <span class="reference-role">${item.role}</span>
            <p>${item.phone}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function syncLanguageIndicators() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-lang-indicator]").forEach((element) => {
    element.classList.toggle("active", element.dataset.langIndicator === currentLang);
  });
}

function renderPage() {
  const data = portfolioData[currentLang];
  renderNav(data);
  renderHero(data);
  renderContact(data);
  renderExperience(data);
  renderProjects(data);
  renderEducation(data);
  renderSkills(data);
  renderInterests(data);
  renderReferences(data);
  syncLanguageIndicators();
}

function setupRevealAnimations() {
  const revealElements = Array.from(document.querySelectorAll(".reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0.08) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: [0, 0.08, 0.18],
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isInitiallyVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (isInitiallyVisible) {
      element.classList.add("visible");
      return;
    }

    observer.observe(element);
  });
}

function setupParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) {
    return;
  }

  window.addEventListener("pointermove", (event) => {
    const ratioX = (event.clientX / window.innerWidth - 0.5) * 10;
    const ratioY = (event.clientY / window.innerHeight - 0.5) * 10;
    hero.style.setProperty("--hero-shift-x", `${ratioX * 0.4}px`);
    hero.style.setProperty("--hero-shift-y", `${ratioY * 0.25}px`);
  });

  window.addEventListener("mouseleave", () => {
    hero.style.setProperty("--hero-shift-x", "0px");
    hero.style.setProperty("--hero-shift-y", "0px");
  });
}

ids.langToggle.addEventListener("click", () => {
  currentLang = currentLang === "tr" ? "en" : "tr";
  renderPage();
});

renderPage();
setupRevealAnimations();
setupParallax();
