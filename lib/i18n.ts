export const locales = ["tr", "ku"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  ku: "Kurmancî"
};

export const localeShortNames: Record<Locale, string> = {
  tr: "TR",
  ku: "KU"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const dictionaries = {
  tr: {
    metadata: {
      title: "Roniva Tech | Yapay Zeka Otomasyon ve Web Sistemleri",
      description:
        "Roniva Tech, küçük işletmeler için Yapay Zeka otomasyon, iş akışı sistemleri ve modern web siteleri kurar.",
      keywords: [
        "yapay zeka otomasyon",
        "web sitesi tasarımı",
        "Diyarbakır yazılım",
        "iş akışı otomasyonu",
        "SaaS geliştirme",
        "kurumsal web sitesi"
      ]
    },
    a11y: {
      skipToContent: "İçeriğe geç"
    },
    nav: {
      home: "Anasayfa",
      services: "Hizmetler",
      work: "Projeler",
      process: "Süreç",
      pricing: "Danışmanlık",
      about: "Hakkımızda",
      contact: "İletişim"
    },
    hero: {
      headline:"Yapay zeka ve güçlü web siteleriyle işinizi bir üst seviyeye taşıyoruz",
      body:
        "Roniva Tech, küçük/büyük işletmelerin dijital büyümesi için hızlı web siteleri, akıllı otomasyonlar ve sade iş sistemleri sunar",
      primaryCta: "İletişime geç",
      secondaryCta: "Hizmetleri gör",
      proof: [
        "Yapay Zeka Otomasyon",
        "Kurumsal Web Siteleri",
        "İş Akışı Sistemleri",
        "Lead Yönetimi",
        "Dijital Dönüşüm"
      ],
      stats: [
        { value: "24 saat", label: "ilk yanıt süresi" },
        { value: "2-4 hafta", label: "ortalama lansman süresi" },
        { value: "2 dil", label: "Türkçe & Kurmancî hizmet" }
      ]
    },
    whatsapp: {
      label: "WhatsApp",
      contactCta: "WhatsApp ile yaz",
      message:
        "Merhaba Roniva Tech, işletmem için web sitesi veya Yapay Zeka otomasyon hakkında bilgi almak istiyorum."
    },
    trust: {
      eyebrow: "Daha az karmaşa, daha net sistem",
      items: ["Yapay Zeka otomasyon", "Modern web", "SaaS altyapı", "Lead sistemleri"]
    },
    services: {
      eyebrow: "Hizmetler",
      title: "İşletmeniz için net, hızlı ve ölçeklenebilir sistemler.",
      body: "Web, otomasyon ve yazılımı tek stratejide topluyoruz.",
      items: [
        {
          title: "Yapay Zeka otomasyon",
          description: "Tekrarlayan işleri azaltan asistanlar ve akıllı akışlar.",
          stat: "Daha az manuel iş"
        },
        {
          title: "Özel web siteleri",
          description: "Hızlı, güven veren ve görüşmeye dönüştüren web siteleri.",
          stat: "Daha güçlü ilk izlenim"
        },
        {
          title: "SaaS geliştirme",
          description: "Panel, portal ve MVP ürünleri için temiz mimari.",
          stat: "Lansmana hazır ürün"
        },
        {
          title: "Yapay Zeka entegrasyonları",
          description: "Mevcut araçlarınıza Yapay Zeka özellikleri ve veri akışları ekleriz.",
          stat: "Daha akıllı araçlar"
        },
        {
          title: "Talep sistemleri",
          description: "Form, landing page ve takip akışlarıyla daha nitelikli talepler.",
          stat: "Daha iyi müşteri akışı"
        },
        {
          title: "Süreç optimizasyonu",
          description: "Dağınık işleri sade, ölçülebilir süreçlere çeviririz.",
          stat: "Daha az operasyon yükü"
        }
      ]
    },
    portfolio: {
      eyebrow: "Projeler",
      title: "Modern web ve otomasyon işleri.",
      body: "Küçük işletmeler için tasarlanan örnek sistemler.",
      items: [
        {
          name: "Avukat Ali Gümüş",
          href: null,
          type: "Avukat web sitesi",
          result: "Profesyonel hukuk imajı",
          description: "Uzmanlık alanlarını net anlatan, güven veren ve danışma talebi oluşturan web sitesi.",
          tags: ["Hukuk", "Web", "İletişim"]
        },
        {
          name: "Gümüştay İnşaat",
          href: null,
          type: "Kurumsal inşaat sitesi",
          result: "Güçlü marka sunumu",
          description: "Projeleri, hizmetleri ve teklif taleplerini sade bir kurumsal yapıda topladık.",
          tags: ["İnşaat", "Kurumsal", "Proje"]
        },
        {
          name: "Altınay Güzellik Merkezi",
          href: "https://xn--altnaygzellik-2ob40f.com/",
          type: "Güzellik merkezi sitesi",
          result: "Daha kolay randevu",
          description: "Hizmetleri öne çıkaran, mobilde hızlı çalışan ve randevuya yönlendiren deneyim.",
          tags: ["Güzellik", "Randevu", "Mobil"]
        }
      ]
    },
    testimonials: {
      eyebrow: "Müşteri Yorumu",
      title: "Profesyonel, sade ve sonuç odaklı.",
      items: [
        {
          quote: "Site daha güçlü, talepler daha düzenli. Otomasyon asıl farkı yarattı.",
          name: "Merve A.",
          role: "Klinik Kurucusu"
        },
        {
          quote: "Dağınık işleri ekibimizin kullandığı net bir sisteme çevirdiler.",
          name: "Daniel K.",
          role: "Operasyon Lideri"
        },
        {
          quote: "Strateji, tasarım ve teknik teslimat çok temiz ilerledi.",
          name: "Sara M.",
          role: "Startup Kurucusu"
        }
      ]
    },
    process: {
      eyebrow: "Süreç",
      title: "Kısa, net ve uygulanabilir.",
      steps: [
        {
          title: "Analiz",
          description: "Web, satış ve operasyon darboğazlarını çıkarırız."
        },
        {
          title: "Plan",
          description: "Öncelikli sistemi ve lansman yolunu belirleriz."
        },
        {
          title: "Kurulum",
          description: "Siteyi, otomasyonu ve entegrasyonları geliştiririz."
        },
        {
          title: "Lansman",
          description: "Yayınlar, ölçer ve iyileştiririz."
        }
      ]
    },
    pricing: {
      eyebrow: "Danışmanlık",
      title: "İlk adım: işletmeniz için net bir dijital büyüme planı.",
      body: "Görüşmede mevcut durumunuzu, müşteri akışınızı ve otomasyon fırsatlarını birlikte inceleriz.",
      note: "Amacımız önce neyin gerçekten işe yarayacağını görmek, sonra sade ve uygulanabilir bir sistem kurmak.",
      primaryCta: "Danışmanlık al",
      secondaryCta: "Hizmetleri gör",
      bullets: ["Mevcut durum incelemesi", "Süreç haritası", "Yapay Zeka fırsatları", "Öncelikli yol haritası"],
      plans: [
        { label: "Analiz", value: "Strateji görüşmesi" },
        { label: "Kurulum", value: "Web + otomasyon" },
        { label: "Büyüme", value: "Sürekli iyileştirme" }
      ]
    },
    about: {
      eyebrow: "Roniva Tech",
      origin: "Diyarbakir",
      title: "Yerel işletmeleri dijital çağda güçlendiriyoruz.",
      body: [
        "Roniva Tech, Diyarbakır merkezli modern bir teknoloji stüdyosudur.",
        "Misyonumuz, küçük ve yerel işletmelerin dijital dünyada hak ettikleri profesyonel duruşa kavuşmasını sağlamak.",
        "Eskimiş web siteleri, dağınık formlar ve kopuk süreçlerin yarattığı kayıpları ortadan kaldırmak için tasarım, web geliştirme, yapay zeka otomasyonu ve iş akışı sistemlerini tek bir bütünleşik stratejide topluyoruz.",
        "Sonuç; daha güvenilir, daha düzenli ve büyümeye hazır bir dijital altyapı."
      ],
      cardText: "Diyarbakır’dan Yapay Zeka, web ve iş sistemleri.",
      principles: ["Strateji", "Tasarım", "Otomasyon", "Büyüme"]
    },
    faq: {
      eyebrow: "SSS",
      title: "Merak edilenler.",
      body: "Görüşmeden önce en çok sorulan sorular.",
      items: [
        {
          question: "Bir proje genellikle ne kadar sürer?",
          answer:
            "Kurumsal web siteleri çoğunlukla 2-4 hafta içinde yayında olur. Otomasyon ve SaaS projelerinde kapsamı ilk görüşmede netleştirir, sprint bazlı ilerleriz."
        },
        {
          question: "Fiyatlandırma nasıl çalışıyor?",
          answer:
            "Kapsamı birlikte netleştirir, sabit ve net bir teklif veririz. İlk görüşme ücretsizdir; süreç boyunca sürpriz maliyet çıkmaz."
        },
        {
          question: "Yapay Zeka otomasyonu benim işletmeme uygun mu?",
          answer:
            "Tekrarlayan mesajlar, formlar, randevular veya takip işleriniz varsa evet. Görüşmede hangi adımların otomatikleşebileceğini birlikte çıkarırız."
        },
        {
          question: "Yayına aldıktan sonra destek veriyor musunuz?",
          answer:
            "Evet. Bakım, içerik güncellemeleri ve yeni özellikler için yanınızdayız; WhatsApp üzerinden hızlıca ulaşabilirsiniz."
        },
        {
          question: "İlk görüşme nasıl ilerliyor?",
          answer:
            "30 dakikalık ücretsiz bir ön görüşme yaparız: mevcut durumunuzu inceler, öncelikleri belirler ve net bir yol haritası çıkarırız."
        },
        {
          question: "Mevcut web sitemi yenileyebilir misiniz?",
          answer:
            "Evet. Mevcut sitenizin hızını, mesajını, mobil deneyimini ve talep akışını inceler; gerekiyorsa aynı marka diliyle daha güçlü bir yapıya taşırız."
        },
        {
          question: "Otomasyonlar hangi araçlarla çalışır?",
          answer:
            "Kullandığınız form, CRM, e-posta, WhatsApp, takvim ve raporlama araçlarına göre kurulum yaparız. Amaç yeni karmaşa eklemek değil, mevcut işi sadeleştirmektir."
        },
        {
          question: "İçerik ve metinleri siz hazırlıyor musunuz?",
          answer:
            "Evet. Hizmetlerinizi, hedef kitlenizi ve güven unsurlarınızı netleştirip web sitesi metinlerini dönüşüm odaklı şekilde hazırlarız."
        },
        {
          question: "Sadece WhatsApp üzerinden ilerleyebilir miyiz?",
          answer:
            "Evet. İlk temas, hızlı sorular ve kısa güncellemeler için WhatsApp kullanabiliriz. Proje kararlarını ise net ve takip edilebilir şekilde özetleriz."
        }
      ]
    },
    contact: {
      eyebrow: "İletişim",
      title: "Neyi modernleştirelim?",
      body: "İşletmenizi ve ihtiyacınızı yazın. Size net sonraki adımlarla dönelim.",
      call: "30 dakikalık görüşme",
      roadmap: "Net otomasyon planı",
      servicesTitle: "Neler için yazabilirsiniz?",
      services: [
        {
          title: "Web Geliştirme",
          description:
            "İhtiyaçlarınıza özel, hızlı ve mobil uyumlu kurumsal web siteleri."
        },
        {
          title: "Kurumsal Kimlik",
          description:
            "Markanızın karakterini yansıtan renk, tipografi ve görsel kimlik sistemi."
        },
        {
          title: "Yapay Zeka Otomasyon",
          description:
            "Tekrarlayan işleri azaltan, müşteri akışını düzenleyen akıllı sistemler."
        }
      ],
      name: "Ad Soyad",
      email: "E-posta",
      company: "Şirket",
      message: "Ne kurmak istiyorsunuz?",
      namePlaceholder: "Adınız",
      emailPlaceholder: "siz@sirket.com",
      companyPlaceholder: "Şirket adı",
      messagePlaceholder: "Web sitesi, Yapay Zeka otomasyon, CRM, SaaS MVP...",
      submit: "Gönder",
      formIntro: "Merhaba Roniva Tech! Görüşme talebi:",
      formHint: "Gönder’e bastığınızda mesajınız WhatsApp’ta hazırlanır.",
      note: "E-posta: ronivatech21@gmail.com"
    },
    footer: {
      line: "Küçük işletmeler için Yapay Zeka otomasyon, web ve iş akışı sistemleri.",
      navHeading: "Sayfalar",
      contactHeading: "İletişim",
      location: "Diyarbakır, Türkiye",
      rights: "Tüm hakları saklıdır."
    }
  },
  ku: {
    metadata: {
      title: "Roniva Tech | AI, Malper û Pergalên Xebatê",
      description:
        "Roniva Tech ji bo karsaziyên biçûk otomasyona AI, malperên nûjen û pergalên xebatê ava dike.",
      keywords: [
        "otomasyona AI",
        "sêwirana malperê",
        "malpera kurumsal",
        "pergalên xebatê",
        "SaaS",
        "Diyarbakir software"
      ]
    },
    a11y: {
      skipToContent: "Here naverokê"
    },
    nav: {
      home: "Serî",
      services: "Xizmet",
      work: "Projeler",
      process: "Pêvajo",
      pricing: "Şêwirmendî",
      about: "Derbarê me",
      contact: "Têkilî"
    },
    hero: {
      headline: "Bi otomasyona AI û malperên nûjen karsaziya xwe mezin bike.",
      body: "Roniva Tech ji bo karsaziyên biçûk malper, otomasyon û pergalên sade ava dike.",
      primaryCta: "Hevdîtinê veqetîne",
      secondaryCta: "Xizmetan bibîne",
      proof: [
        "AI otomasyon",
        "Malperên kurumsal",
        "Pergalên xebatê",
        "Rêveberiya leadan",
        "Guhertina dijîtal"
      ],
      stats: [
        { value: "24 saet", label: "dema bersiva yekem" },
        { value: "2-4 hefte", label: "dema launchê ya navîn" },
        { value: "2 ziman", label: "xizmet bi Tirkî û Kurmancî" }
      ]
    },
    whatsapp: {
      label: "WhatsApp",
      contactCta: "Bi WhatsAppê binivîse",
      message:
        "Silav Roniva Tech, ji bo karsaziya xwe derbarê malper an AI otomasyonê agahî dixwazim."
    },
    trust: {
      eyebrow: "Kêmtir tevlihevî, pergalên zelaltir",
      items: ["AI otomasyon", "Malperên nûjen", "Bingeha SaaS", "Pergalên daxwazê"]
    },
    services: {
      eyebrow: "Xizmet",
      title: "Pergalên zelal, bilez û skalable.",
      body: "Malper, otomasyon û software di yek stratejiyê de.",
      items: [
        {
          title: "AI otomasyon",
          description: "Alîkar û flowên zîrek ji bo kêmkirina karên dubare.",
          stat: "Kêm karê destan"
        },
        {
          title: "Malperên taybet",
          description: "Malperên bilez, bawer û amade ji bo têkilî.",
          stat: "Bandora yekem xurtir"
        },
        {
          title: "SaaS pêşxistin",
          description: "Panel, portal û MVP bi bingehekî paqij.",
          stat: "Hilbera amade"
        },
        {
          title: "Girêdanên AI",
          description: "AI û daneyan li amûrên heyî zêde dikin.",
          stat: "Amûrên zîrektir"
        },
        {
          title: "Pergalên daxwazê",
          description: "Form, landing page û şopandin ji bo daxwazên baştir.",
          stat: "Mişteriyên baştir"
        },
        {
          title: "Optimîzekirina pêvajoyê",
          description: "Karên tevlihev dikin pêvajoyên sade û pîvandî.",
          stat: "Kêm giraniya rojane"
        }
      ]
    },
    portfolio: {
      eyebrow: "Projeler",
      title: "Malper û otomasyona nûjen.",
      body: "Nimûneyên pergalên ji bo karsaziyên biçûk.",
      items: [
        {
          name: "Avukat Ali Gümüş",
          href: null,
          type: "Malpera parêzeriyê",
          result: "Xuyabûna pîşeyî",
          description: "Malperek bawer ku qadên pisporiyê zelal nîşan dide û daxwaza şêwirmendiyê çêdike.",
          tags: ["Hiqûq", "Malper", "Têkilî"]
        },
        {
          name: "Gümüştay İnşaat",
          href: null,
          type: "Malpera şirketê",
          result: "Pêşkêşkirina marka xurt",
          description: "Proje, xizmet û daxwazên teklifê di avahiyeke kurumsal û sade de kom kirin.",
          tags: ["Înşaat", "Kurumsal", "Proje"]
        },
        {
          name: "Altınay Güzellik Merkezi",
          href: "https://xn--altnaygzellik-2ob40f.com/",
          type: "Malpera navenda xweşikiyê",
          result: "Rezervasyona hêsantir",
          description: "Tajrûbeyek bilez a mobil ku xizmetan derdixe pêş û mişteriyan ber bi rezervasyonê ve dibe.",
          tags: ["Xweşikî", "Rezervasyon", "Mobil"]
        }
      ]
    },
    testimonials: {
      eyebrow: "Dengê Mişteriyan",
      title: "Zelal, pîşeyî û bi encam.",
      items: [
        {
          quote: "Malper xurtir bû, daxwaz jî rêkûpêk bûn. Otomasyon cûdahî çêkir.",
          name: "Merve A.",
          role: "Damezrînera Klînîkê"
        },
        {
          quote: "Karên tevlihev kirin pergalek ku tîma me bikar tîne.",
          name: "Daniel K.",
          role: "Rêberê Operasyonê"
        },
        {
          quote: "Stratejî, design û teknîk bi awayekî paqij çûn pêş.",
          name: "Sara M.",
          role: "Damezrînera Startup"
        }
      ]
    },
    process: {
      eyebrow: "Pêvajo",
      title: "Kurt, zelal û pratîk.",
      steps: [
        {
          title: "Analîz",
          description: "Astengiyên malper, firotan û operasyonê dibînin."
        },
        {
          title: "Plan",
          description: "Pergala pêşîn û rêya launch diyar dikin."
        },
        {
          title: "Avakirin",
          description: "Malper, otomasyon û girêdanan ava dikin."
        },
        {
          title: "Launch",
          description: "Dişînin, dipîvin û baştir dikin."
        }
      ]
    },
    pricing: {
      eyebrow: "Şêwirmendî",
      title: "Gava yekem: planeke zelal ji bo mezinbûna dîjîtal.",
      body: "Em rewşa niha, rêya mişterî û firsendên otomasyonê bi hev re dinêrin.",
      note: "Armanca me ew e ku em pêşî bibînin ka çi bi rastî dixebite, paşê pergaleke sade û pêkan ava bikin.",
      primaryCta: "Şêwirmendî bistîne",
      secondaryCta: "Xizmetan bibîne",
      bullets: ["Vekolîna rewşa niha", "Nexşeya pêvajoyê", "Firsendên AI", "Rêxistina pêşîniyan"],
      plans: [
        { label: "Analîz", value: "Hevdîtina stratejiyê" },
        { label: "Avakirin", value: "Malper + otomasyon" },
        { label: "Mezinbûn", value: "Baştirbûna domdar" }
      ]
    },
    about: {
      eyebrow: "Roniva Tech",
      origin: "Diyarbakir",
      title: "Em karsaziyên herêmî di serdema dîjîtal de xurt dikin.",
      body: [
        "Roniva Tech stûdyoyeke teknolojiyê ya nûjen e ku navenda wê Diyarbakir e.",
        "Misyona me ew e ku karsaziyên biçûk û herêmî di cîhana dîjîtal de xuyabûneke pîşeyî û hêjayî bistînin.",
        "Ji bo windahiyên ku ji malperên kevn, formên belav û pêvajoyên qut qut derdikevin kêm bikin, em design, pêşxistina webê, otomasyona AI û pergalên xebatê di yek stratejiyeke yekgirtî de kom dikin.",
        "Encam; bingehek dîjîtal a bawertir, rêkûpêktir û amade ji bo mezinbûnê."
      ],
      cardText: "Ji Diyarbakirê AI, malper û pergalên xebatê.",
      principles: ["Stratejî", "Design", "Otomasyon", "Mezinbûn"]
    },
    faq: {
      eyebrow: "Pirsên Berbelav",
      title: "Pirsên we.",
      body: "Pirsên ku berî hevdîtinê herî zêde tên kirin.",
      items: [
        {
          question: "Projeyek bi gelemperî çiqas dom dike?",
          answer:
            "Malperên kurumsal bi piranî di 2-4 hefteyan de têne weşandin. Ji bo otomasyon û SaaS, em qadê di hevdîtina yekem de zelal dikin û gav bi gav pêş ve diçin."
        },
        {
          question: "Biha çawa dixebite?",
          answer:
            "Em qadê bi hev re zelal dikin û teklîfeke sabît û net didin. Hevdîtina yekem belaş e; lêçûnên surprîz dernakevin."
        },
        {
          question: "Otomasyona AI ji karsaziya min re guncan e?",
          answer:
            "Heke peyamên dubare, form, randevû an şopandina we hebe, erê. Di hevdîtinê de em bi hev re derdixin ka kîjan gav dikarin otomatîk bibin."
        },
        {
          question: "Piştî weşanê piştgirî didin?",
          answer:
            "Erê. Ji bo lênihêrîn, nûvekirina naverokê û taybetmendiyên nû em li cem we ne; bi WhatsAppê zû digihîjin me."
        },
        {
          question: "Hevdîtina yekem çawa pêş ve diçe?",
          answer:
            "Em hevdîtineke belaş a 30 deqîqeyî dikin: rewşa we dinêrin, pêşîniyan diyar dikin û nexşeyeke zelal derdixin."
        },
        {
          question: "Hûn dikarin malpera min a heyî nû bikin?",
          answer:
            "Erê. Em lez, peyam, ezmûna mobîl û rêya daxwazan dinêrin; heke hewce be, wê bi zimanê marka we re xurtir ava dikin."
        },
        {
          question: "Otomasyon bi kîjan amûran re dixebite?",
          answer:
            "Li gorî form, CRM, email, WhatsApp, salname û amûrên raporê yên we saz dikin. Armanc ew e ku kar hêsan bibe, ne ku tevlihevî zêde bibe."
        },
        {
          question: "Hûn naverok û nivîsan amade dikin?",
          answer:
            "Erê. Em xizmet, mişteriyên armanc û xalên baweriyê zelal dikin û nivîsên malperê bi awayekî dönüşüm-odak amade dikin."
        },
        {
          question: "Em dikarin tenê bi WhatsAppê pêş ve biçin?",
          answer:
            "Erê. Ji bo têkiliya yekem, pirsên zû û nûvekirinên kurt WhatsApp bikar tînin. Biryarên projeyê jî bi awayekî zelal û şopandinbar kurt dikin."
        }
      ]
    },
    contact: {
      eyebrow: "Têkilî",
      title: "Em çi nûjen bikin?",
      body: "Karsaziya xwe û hewcedariya xwe binivîse. Em bi gavên zelal vegerin.",
      call: "Hevdîtina 30 deqîqe",
      roadmap: "Plana zelal a otomasyonê",
      servicesTitle: "Ji bo çi dikarî binivîsî?",
      services: [
        {
          title: "Pêşxistina webê",
          description:
            "Malperên kurumsal ên bilez, mobîl-uyumlu û taybet ji bo hewcedariyên te."
        },
        {
          title: "Nasnameya kurumsal",
          description:
            "Pergala reng, tipografî û xuyabûna marka ku karaktera te nîşan dide."
        },
        {
          title: "Otomasyona AI",
          description:
            "Pergalên zîrek ku karên dubare kêm dikin û rêya mişteriyan rêkûpêk dikin."
        }
      ],
      name: "Nav",
      email: "Email",
      company: "Şirket",
      message: "Dixwazî em çi ava bikin?",
      namePlaceholder: "Navê te",
      emailPlaceholder: "tu@sirket.com",
      companyPlaceholder: "Navê şirketê",
      messagePlaceholder: "Malper, AI otomasyon, CRM, SaaS MVP...",
      submit: "Bişîne",
      formIntro: "Silav Roniva Tech! Daxwaza hevdîtinê:",
      formHint: "Dema bişînî, peyama te di WhatsAppê de amade dibe.",
      note: "Email: ronivatech21@gmail.com"
    },
    footer: {
      line: "AI otomasyon, malper û pergalên xebatê ji bo karsaziyên biçûk.",
      navHeading: "Rûpel",
      contactHeading: "Têkilî",
      location: "Diyarbakir, Tirkiye",
      rights: "Hemû maf parastî ne."
    }
  }
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
