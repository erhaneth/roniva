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
      title: "Roniva Tech | AI Otomasyon ve Web Sistemleri",
      description:
        "Roniva Tech, küçük işletmeler için AI otomasyon, iş akışı sistemleri ve modern web siteleri kurar."
    },
    nav: {
      services: "Hizmetler",
      work: "Projeler",
      process: "Süreç",
      pricing: "Danışmanlık",
      about: "Hakkımızda",
      contact: "İletişim"
    },
    hero: {
      headline: "AI otomasyon ve modern web siteleriyle işinizi büyütün.",
      body:
        "Roniva Tech, küçük işletmeler için hızlı web siteleri, akıllı otomasyonlar ve sade iş sistemleri kurar.",
      primaryCta: "Görüşme al",
      proof: "Web siteleri • AI otomasyon • İş akışı sistemleri"
    },
    whatsapp: {
      label: "WhatsApp",
      contactCta: "WhatsApp ile yaz",
      message:
        "Merhaba Roniva Tech, işletmem için web sitesi veya AI otomasyon hakkında bilgi almak istiyorum."
    },
    trust: {
      eyebrow: "Daha az karmaşa, daha net sistem",
      items: ["AI otomasyon", "Modern web", "SaaS altyapı", "Lead sistemleri"]
    },
    services: {
      eyebrow: "Hizmetler",
      title: "İşletmeniz için net, hızlı ve ölçeklenebilir sistemler.",
      body: "Web, otomasyon ve yazılımı tek stratejide topluyoruz.",
      items: [
        {
          title: "AI otomasyon",
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
          title: "AI entegrasyonları",
          description: "Mevcut araçlarınıza AI özellikleri ve veri akışları ekleriz.",
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
          type: "Avukat web sitesi",
          result: "Profesyonel hukuk imajı",
          description: "Uzmanlık alanlarını net anlatan, güven veren ve danışma talebi oluşturan web sitesi.",
          tags: ["Hukuk", "Web", "İletişim"]
        },
        {
          name: "Gümüştay İnşaat",
          type: "Kurumsal inşaat sitesi",
          result: "Güçlü marka sunumu",
          description: "Projeleri, hizmetleri ve teklif taleplerini sade bir kurumsal yapıda topladık.",
          tags: ["İnşaat", "Kurumsal", "Proje"]
        },
        {
          name: "Altınay Güzellik Merkezi",
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
      title: "İlk adım: net bir büyüme ve otomasyon planı.",
      body: "Görüşmede web sitenizi, müşteri akışınızı ve otomasyon fırsatlarını birlikte inceleriz.",
      primaryCta: "Danışmanlık al",
      secondaryCta: "Hizmetleri gör",
      bullets: ["Web incelemesi", "Süreç haritası", "AI fırsatları", "Öncelikli yol haritası"],
      plans: [
        { label: "Analiz", value: "Strateji görüşmesi" },
        { label: "Kurulum", value: "Web + otomasyon" },
        { label: "Büyüme", value: "Sürekli iyileştirme" }
      ]
    },
    about: {
      eyebrow: "Roniva Tech",
      origin: "Diyarbakir",
      title: "Diyarbakır’dan doğan modern teknoloji stüdyosu.",
      body:
        "Roniva Tech, Diyarbakır’da küçük işletmelerin dijitalde daha güçlü görünmesi ve günlük işlerini daha az manuel yükle yönetmesi için kuruldu. İlk fikir; iyi hizmet veren yerel işletmelerin eski web siteleri, dağınık formlar ve kopuk takip süreçleri yüzünden potansiyel müşterileri kaçırdığını görmekten çıktı. Bugün tasarım, web geliştirme, AI otomasyon ve iş akışı sistemlerini tek bir stratejide birleştirerek daha güven veren, daha düzenli ve büyümeye hazır dijital altyapılar kuruyoruz.",
      cardText: "Diyarbakır’dan AI, web ve iş sistemleri.",
      principles: ["Strateji", "Tasarım", "Otomasyon", "Büyüme"]
    },
    contact: {
      eyebrow: "İletişim",
      title: "Neyi modernleştirelim?",
      body: "İşletmenizi ve ihtiyacınızı yazın. Size net sonraki adımlarla dönelim.",
      call: "30 dakikalık görüşme",
      roadmap: "Net otomasyon planı",
      name: "Ad Soyad",
      email: "E-posta",
      company: "Şirket",
      message: "Ne kurmak istiyorsunuz?",
      namePlaceholder: "Adınız",
      emailPlaceholder: "siz@sirket.com",
      companyPlaceholder: "Şirket adı",
      messagePlaceholder: "Web sitesi, AI otomasyon, CRM, SaaS MVP...",
      submit: "Gönder",
      note: "E-posta: hello@ronivatech.com"
    },
    footer: {
      line: "Küçük işletmeler için AI otomasyon, web ve iş akışı sistemleri.",
      rights: "Tüm hakları saklıdır."
    }
  },
  ku: {
    metadata: {
      title: "Roniva Tech | AI, Malper û Pergalên Xebatê",
      description:
        "Roniva Tech ji bo karsaziyên biçûk otomasyona AI, malperên nûjen û pergalên xebatê ava dike."
    },
    nav: {
      services: "Xizmet",
      work: "Projeler",
      process: "Pêvajo",
      pricing: "Şêwirmendî",
      about: "Derbarê me",
      contact: "Têkilî"
    },
    hero: {
      headline: "Bi AI û malperên nûjen karsaziya xwe mezin bike.",
      body: "Roniva Tech ji bo karsaziyên biçûk malper, otomasyon û pergalên sade ava dike.",
      primaryCta: "Hevdîtinê veqetîne",
      proof: "Malper • AI otomasyon • Pergalên xebatê"
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
          type: "Malpera parêzeriyê",
          result: "Xuyabûna pîşeyî",
          description: "Malperek bawer ku qadên pisporiyê zelal nîşan dide û daxwaza şêwirmendiyê çêdike.",
          tags: ["Hiqûq", "Malper", "Têkilî"]
        },
        {
          name: "Gümüştay İnşaat",
          type: "Malpera şirketê",
          result: "Pêşkêşkirina marka xurt",
          description: "Proje, xizmet û daxwazên teklifê di avahiyeke kurumsal û sade de kom kirin.",
          tags: ["Înşaat", "Kurumsal", "Proje"]
        },
        {
          name: "Altınay Güzellik Merkezi",
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
      title: "Gava yekem: plana zelal a mezinbûnê.",
      body: "Em malper, rêya mişterî û firsendên otomasyonê bi hev re dinêrin.",
      primaryCta: "Şêwirmendî bistîne",
      secondaryCta: "Xizmetan bibîne",
      bullets: ["Vekolîna malperê", "Nexşeya pêvajoyê", "Firsendên AI", "Rêxistina pêşîniyan"],
      plans: [
        { label: "Analîz", value: "Hevdîtina stratejiyê" },
        { label: "Avakirin", value: "Malper + otomasyon" },
        { label: "Mezinbûn", value: "Baştirbûna domdar" }
      ]
    },
    about: {
      eyebrow: "Roniva Tech",
      origin: "Diyarbakir",
      title: "Stûdyoya teknolojiyê ya ji Diyarbakirê.",
      body:
        "Roniva Tech li Diyarbakirê hate damezrandin da ku karsaziyên biçûk di dîjîtalê de xurtir xuya bikin û karên rojane bi kêmtir barê destan bi rê ve bibin. Fikra yekem ji wê rastiyê hat ku gelek karsaziyên herêmî xizmeteke baş didin, lê ji ber malperên kevn, formên belav û şopandina qut qut mişteriyên nû winda dikin. Îro em design, pêşxistina web, AI otomasyon û pergalên xebatê di yek stratejiyê de tînin hev da ku bingehek dîjîtal a bawer, rêkûpêk û amade ji bo mezinbûnê ava bikin.",
      cardText: "Ji Diyarbakirê AI, malper û pergalên xebatê.",
      principles: ["Stratejî", "Design", "Otomasyon", "Mezinbûn"]
    },
    contact: {
      eyebrow: "Têkilî",
      title: "Em çi nûjen bikin?",
      body: "Karsaziya xwe û hewcedariya xwe binivîse. Em bi gavên zelal vegerin.",
      call: "Hevdîtina 30 deqîqe",
      roadmap: "Plana zelal a otomasyonê",
      name: "Nav",
      email: "Email",
      company: "Şirket",
      message: "Dixwazî em çi ava bikin?",
      namePlaceholder: "Navê te",
      emailPlaceholder: "tu@sirket.com",
      companyPlaceholder: "Navê şirketê",
      messagePlaceholder: "Malper, AI otomasyon, CRM, SaaS MVP...",
      submit: "Bişîne",
      note: "Email: hello@ronivatech.com"
    },
    footer: {
      line: "AI otomasyon, malper û pergalên xebatê ji bo karsaziyên biçûk.",
      rights: "Hemû maf parastî ne."
    }
  }
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
