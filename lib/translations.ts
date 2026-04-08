export type Locale = "en" | "pl" | "ro" | "cz" | "et";

export const localeNames: Record<Locale, string> = {
  en: "🇬🇧 EN",
  pl: "🇵🇱 PL",
  ro: "🇷🇴 RO",
  cz: "🇨🇿 CZ",
  et: "🇪🇪 ET",
};

export const translations: Record<Locale, {
  lang: string;
  nav: { learn: string; educators: string; toolkit: string; community: string; about: string; startLearning: string };
  euBar: string;
  hero: { badge: string; line1: string; line2: string; line3: string; desc: string; cta1: string; cta2: string };
  stats: { countries: string; languages: string; modules: string; months: string };
  problem: { badge: string; title: string; p1: string; p2: string; learnMore: string };
  problemStats: { s1: string; s2: string; s3: string; s4: string };
  features: { badge: string; title: string; items: { title: string; desc: string; link: string }[] };
  moduleSection: { badge: string; title: string; sub: string; cta: string };
  pact: { title: string; sub: string; cta: string };
  footer: { tagline: string; eu: string; cerv: string; copyright: string; partners: string; learnLinks: string[]; communityLinks: string[]; legalLinks: string[] };
  learnPage: { badge: string; title: string; sub: string };
  aboutPage: { badge: string; title: string; sub: string };
  toolkitPage: { badge: string; title: string; sub: string };
  communityPage: { badge: string; title: string; sub: string; tabPact: string; tabActions: string; tabStories: string };
  educatorsPage: { badge: string; title: string; sub: string };
  contactPage: { badge: string; title: string; sub: string; send: string; sending: string; success: string; successSub: string };
}> = {
  en: {
    lang: "English",
    nav: { learn: "Learn", educators: "Educators", toolkit: "Toolkit & AI", community: "Community", about: "About", startLearning: "Start Learning" },
    euBar: "Co-funded by the European Union – CERV Programme | Citizens, Equality, Rights & Values",
    hero: {
      badge: "🇪🇺 CERV Project · EU-Funded Platform",
      line1: "Stand Up.", line2: "Speak Up.", line3: "Against Hate.",
      desc: "A multilingual platform empowering young people and educators to recognise, respond to, and counter online hate speech — across 5 European countries.",
      cta1: "🚀 Start Learning Free", cta2: "🤖 Explore AI Tool",
    },
    stats: { countries: "Countries", languages: "Languages", modules: "Learning Modules", months: "Month Project" },
    problem: {
      badge: "What We Stand Against",
      title: "Online hate speech affects millions of young people every day",
      p1: "From social media to gaming platforms, young people face hateful messages, discrimination, and harassment online. Without the right tools and knowledge, it can be overwhelming to know how to respond.",
      p2: "SpeakUP against Hate gives youth and educators practical, evidence-based tools to understand, recognise, and constructively counter online hate — in 5 European languages.",
      learnMore: "Learn About the Project →",
    },
    problemStats: {
      s1: "of young Europeans have witnessed hate speech online",
      s2: "feel unable to respond when they see hate online",
      s3: "hate speech incidents go unreported",
      s4: "want more education on how to respond safely",
    },
    features: {
      badge: "Platform Sections",
      title: "Everything you need to fight hate online",
      items: [
        { title: "Youth Learning Area", desc: "6 interactive modules covering hate speech recognition, safe responses, and digital citizenship. Available in 5 languages.", link: "Explore →" },
        { title: "Educator Resources", desc: "Lesson plans, workshop guides, and professional development tools to bring hate speech education into the classroom.", link: "Explore →" },
        { title: "AI Awareness Tool", desc: "An educational AI tool that helps young people recognise patterns of online hate. Safe, ethical, and GDPR-compliant.", link: "Explore →" },
        { title: "Community Actions", desc: "Join Anti-Hate Pacts, share your story, and take micro-actions to make the internet safer for everyone.", link: "Explore →" },
      ],
    },
    moduleSection: { badge: "Learning Path", title: "6 Free Modules. 5 Languages.", sub: "Start your journey to becoming a confident digital citizen and anti-hate advocate.", cta: "📚 Start with Module 1 — Free" },
    pact: { title: "Sign the Anti-Hate Pact", sub: "Join thousands of young people and educators across Europe committing to make online spaces safer and more respectful for everyone.", cta: "🤝 Sign the Pact" },
    footer: {
      tagline: "Empowering young people and educators to recognise, respond to, and counter online hate speech.",
      eu: "Co-funded by the European Union", cerv: "CERV — Citizens, Equality, Rights and Values Programme",
      copyright: "SpeakUP against Hate. All rights reserved.",
      partners: "Project Partners",
      learnLinks: ["Youth Learning Area", "Educator Resources", "Toolkit & AI Tool", "Resource Library"],
      communityLinks: ["Community Actions", "News & Events", "Policy Briefs", "Contact Us"],
      legalLinks: ["Privacy Policy", "GDPR Notice", "Accessibility", "Safeguarding"],
    },
    learnPage: { badge: "📚 Youth Learning Area", title: "6 Free Modules.\n5 Languages.", sub: "Your step-by-step guide to understanding, recognising, and countering online hate speech — built for young people across Europe." },
    aboutPage: { badge: "🇪🇺 CERV Project · 2024–2026", title: "About SpeakUP against Hate", sub: "A 24-month transnational project funded by the European Union's CERV programme." },
    toolkitPage: { badge: "🤖 Educational AI Tool", title: "Toolkit & AI Hate Speech Awareness Tool", sub: "Download our evidence-based toolkit and explore our AI-powered educational tool." },
    communityPage: { badge: "✊ Community Actions", title: "Together We Can Make Online Spaces Safer", sub: "Sign the Anti-Hate Pact. Take community actions. Share your story.", tabPact: "✍️ Sign the Pact", tabActions: "🎯 Take Action", tabStories: "💬 Stories" },
    educatorsPage: { badge: "👩‍🏫 Educator Area", title: "Tools for Educators Who Want to Make a Difference", sub: "Free lesson plans, workshop guides, and professional development resources." },
    contactPage: { badge: "✉️ Get in Touch", title: "Contact Us", sub: "Questions, partnerships, media enquiries, or safeguarding concerns — we're here to help.", send: "📨 Send Message", sending: "⏳ Sending...", success: "Message Sent!", successSub: "Thank you. We've received your message and will respond within 3 working days." },
  },

  pl: {
    lang: "Polski",
    nav: { learn: "Nauka", educators: "Nauczyciele", toolkit: "Narzędzia i AI", community: "Społeczność", about: "O projekcie", startLearning: "Zacznij naukę" },
    euBar: "Współfinansowane przez Unię Europejską – Program CERV | Obywatele, Równość, Prawa i Wartości",
    hero: {
      badge: "🇪🇺 Projekt CERV · Platforma finansowana przez UE",
      line1: "Stań po właściwej stronie.", line2: "Mów głośno.", line3: "Przeciw nienawiści.",
      desc: "Wielojęzyczna platforma wspierająca młodych ludzi i nauczycieli w rozpoznawaniu mowy nienawiści w sieci, reagowaniu na nią i przeciwdziałaniu jej — w 5 krajach europejskich.",
      cta1: "🚀 Zacznij naukę bezpłatnie", cta2: "🤖 Odkryj narzędzie AI",
    },
    stats: { countries: "Kraje", languages: "Języki", modules: "Moduły edukacyjne", months: "Miesięczny projekt" },
    problem: {
      badge: "Przeciwko czemu stoimy",
      title: "Mowa nienawiści w sieci dotyka milionów młodych ludzi każdego dnia",
      p1: "Od mediów społecznościowych po platformy gamingowe — młodzi ludzie spotykają się z nienawistnymi wiadomościami, dyskryminacją i nękaniem online. Bez odpowiednich narzędzi trudno wiedzieć, jak reagować.",
      p2: "SpeakUP against Hate daje młodzieży i nauczycielom praktyczne, oparte na dowodach narzędzia do rozumienia, rozpoznawania i konstruktywnego przeciwdziałania mowie nienawiści — w 5 językach europejskich.",
      learnMore: "Dowiedz się więcej o projekcie →",
    },
    problemStats: {
      s1: "młodych Europejczyków zetknęło się z mową nienawiści w sieci",
      s2: "czuje się bezradnych wobec mowy nienawiści online",
      s3: "przypadków mowy nienawiści nie jest zgłaszanych",
      s4: "chce więcej edukacji na temat bezpiecznego reagowania",
    },
    features: {
      badge: "Sekcje platformy",
      title: "Wszystko, czego potrzebujesz, by walczyć z nienawiścią online",
      items: [
        { title: "Strefa nauki dla młodzieży", desc: "6 interaktywnych modułów dotyczących rozpoznawania mowy nienawiści, bezpiecznych reakcji i cyfrowego obywatelstwa. Dostępne w 5 językach.", link: "Odkryj →" },
        { title: "Zasoby dla nauczycieli", desc: "Plany lekcji, przewodniki warsztatowe i narzędzia do rozwoju zawodowego.", link: "Odkryj →" },
        { title: "Narzędzie AI", desc: "Edukacyjne narzędzie AI pomagające młodym ludziom rozpoznawać wzorce mowy nienawiści online.", link: "Odkryj →" },
        { title: "Działania społecznościowe", desc: "Podpisz Pakt Antynienawiści, podziel się swoją historią i podejmuj mikro-działania.", link: "Odkryj →" },
      ],
    },
    moduleSection: { badge: "Ścieżka edukacyjna", title: "6 bezpłatnych modułów. 5 języków.", sub: "Zacznij drogę ku byciu pewnym siebie obywatelem cyfrowym i rzecznikiem walki z nienawiścią.", cta: "📚 Zacznij od Modułu 1 — bezpłatnie" },
    pact: { title: "Podpisz Pakt Antynienawiści", sub: "Dołącz do tysięcy młodych Europejczyków zobowiązujących się do tworzenia bezpieczniejszych przestrzeni online.", cta: "🤝 Podpisz Pakt" },
    footer: {
      tagline: "Wspieramy młodych ludzi i nauczycieli w rozpoznawaniu, reagowaniu i przeciwdziałaniu mowie nienawiści.",
      eu: "Współfinansowane przez Unię Europejską", cerv: "Program CERV — Obywatele, Równość, Prawa i Wartości",
      copyright: "SpeakUP against Hate. Wszelkie prawa zastrzeżone.",
      partners: "Partnerzy projektu",
      learnLinks: ["Strefa nauki dla młodzieży", "Zasoby dla nauczycieli", "Narzędzia i AI", "Biblioteka zasobów"],
      communityLinks: ["Działania społecznościowe", "Aktualności i wydarzenia", "Policy Briefs", "Kontakt"],
      legalLinks: ["Polityka prywatności", "Informacja RODO", "Dostępność", "Ochrona dzieci"],
    },
    learnPage: { badge: "📚 Strefa nauki dla młodzieży", title: "6 bezpłatnych modułów.\n5 języków.", sub: "Twój przewodnik krok po kroku do rozumienia, rozpoznawania i przeciwdziałania mowie nienawiści w sieci." },
    aboutPage: { badge: "🇪🇺 Projekt CERV · 2024–2026", title: "O projekcie SpeakUP against Hate", sub: "24-miesięczny projekt transnarodowy finansowany przez program CERV Unii Europejskiej." },
    toolkitPage: { badge: "🤖 Edukacyjne narzędzie AI", title: "Zestaw narzędzi i narzędzie AI do rozpoznawania mowy nienawiści", sub: "Pobierz nasz zestaw narzędzi oparty na dowodach i wypróbuj nasze narzędzie edukacyjne AI." },
    communityPage: { badge: "✊ Działania społecznościowe", title: "Razem możemy uczynić internet bezpieczniejszym", sub: "Podpisz Pakt Antynienawiści. Podejmij działania. Podziel się swoją historią.", tabPact: "✍️ Podpisz Pakt", tabActions: "🎯 Działaj", tabStories: "💬 Historie" },
    educatorsPage: { badge: "👩‍🏫 Strefa nauczycieli", title: "Narzędzia dla nauczycieli, którzy chcą zmieniać świat", sub: "Bezpłatne plany lekcji, przewodniki warsztatowe i materiały do rozwoju zawodowego." },
    contactPage: { badge: "✉️ Skontaktuj się", title: "Kontakt", sub: "Pytania, współpraca, zapytania medialne lub kwestie ochrony dzieci — jesteśmy tutaj.", send: "📨 Wyślij wiadomość", sending: "⏳ Wysyłanie...", success: "Wiadomość wysłana!", successSub: "Dziękujemy. Otrzymaliśmy Twoją wiadomość i odpowiemy w ciągu 3 dni roboczych." },
  },

  ro: {
    lang: "Română",
    nav: { learn: "Învață", educators: "Educatori", toolkit: "Instrumente & AI", community: "Comunitate", about: "Despre", startLearning: "Începe să înveți" },
    euBar: "Cofinanțat de Uniunea Europeană – Programul CERV | Cetățeni, Egalitate, Drepturi și Valori",
    hero: {
      badge: "🇪🇺 Proiect CERV · Platformă finanțată de UE",
      line1: "Ridică-te.", line2: "Vorbește tare.", line3: "Împotriva urii.",
      desc: "O platformă multilingvă care îi ajută pe tineri și educatori să recunoască, să răspundă și să contracareze discursul de ură online — în 5 țări europene.",
      cta1: "🚀 Începe să înveți gratuit", cta2: "🤖 Explorează instrumentul AI",
    },
    stats: { countries: "Țări", languages: "Limbi", modules: "Module de învățare", months: "Proiect de luni" },
    problem: {
      badge: "Împotriva a ce luptăm",
      title: "Discursul de ură online afectează milioane de tineri zilnic",
      p1: "De pe rețelele sociale până pe platformele de gaming, tinerii se confruntă cu mesaje de ură, discriminare și hărțuire online. Fără instrumentele potrivite, poate fi copleșitor să știi cum să reacționezi.",
      p2: "SpeakUP against Hate oferă tinerilor și educatorilor instrumente practice, bazate pe dovezi, pentru a înțelege, recunoaște și contracara ura online — în 5 limbi europene.",
      learnMore: "Află mai multe despre proiect →",
    },
    problemStats: {
      s1: "din tinerii europeni au întâlnit discurs de ură online",
      s2: "se simt incapabili să reacționeze la discursul de ură online",
      s3: "din incidentele de ură online nu sunt raportate",
      s4: "doresc mai multă educație despre cum să răspundă în siguranță",
    },
    features: {
      badge: "Secțiunile platformei",
      title: "Tot ce ai nevoie pentru a lupta împotriva urii online",
      items: [
        { title: "Zona de învățare pentru tineri", desc: "6 module interactive despre recunoașterea discursului de ură, răspunsuri sigure și cetățenie digitală. Disponibil în 5 limbi.", link: "Explorează →" },
        { title: "Resurse pentru educatori", desc: "Planuri de lecție, ghiduri de atelier și instrumente de dezvoltare profesională.", link: "Explorează →" },
        { title: "Instrument AI", desc: "Instrument AI educațional care ajută tinerii să recunoască modelele de ură online.", link: "Explorează →" },
        { title: "Acțiuni comunitare", desc: "Semnează Pactul Anti-Ură, împărtășește povestea ta și ia micro-acțiuni.", link: "Explorează →" },
      ],
    },
    moduleSection: { badge: "Traseul de învățare", title: "6 module gratuite. 5 limbi.", sub: "Începe-ți călătoria spre a deveni un cetățean digital și avocat împotriva urii.", cta: "📚 Începe cu Modulul 1 — gratuit" },
    pact: { title: "Semnează Pactul Anti-Ură", sub: "Alătură-te miilor de tineri europeni care se angajează să creeze spații online mai sigure.", cta: "🤝 Semnează Pactul" },
    footer: {
      tagline: "Împuternicim tinerii și educatorii să recunoască, să răspundă și să lupte împotriva discursului de ură online.",
      eu: "Cofinanțat de Uniunea Europeană", cerv: "Programul CERV — Cetățeni, Egalitate, Drepturi și Valori",
      copyright: "SpeakUP against Hate. Toate drepturile rezervate.",
      partners: "Parteneri de proiect",
      learnLinks: ["Zona de învățare pentru tineri", "Resurse pentru educatori", "Instrumente și AI", "Bibliotecă de resurse"],
      communityLinks: ["Acțiuni comunitare", "Știri și evenimente", "Documente de politică", "Contactați-ne"],
      legalLinks: ["Politica de confidențialitate", "Notificare GDPR", "Accesibilitate", "Protecția copilului"],
    },
    learnPage: { badge: "📚 Zona de învățare pentru tineri", title: "6 module gratuite.\n5 limbi.", sub: "Ghidul tău pas cu pas pentru a înțelege, recunoaște și contracara discursul de ură online." },
    aboutPage: { badge: "🇪🇺 Proiect CERV · 2024–2026", title: "Despre SpeakUP against Hate", sub: "Un proiect transnațional de 24 de luni finanțat de programul CERV al Uniunii Europene." },
    toolkitPage: { badge: "🤖 Instrument AI educațional", title: "Toolkit și instrument AI de conștientizare a discursului de ură", sub: "Descarcă toolkit-ul nostru bazat pe dovezi și explorează instrumentul nostru educațional AI." },
    communityPage: { badge: "✊ Acțiuni comunitare", title: "Împreună putem face spațiile online mai sigure", sub: "Semnează Pactul Anti-Ură. Acționează. Împărtășește povestea ta.", tabPact: "✍️ Semnează Pactul", tabActions: "🎯 Acționează", tabStories: "💬 Povești" },
    educatorsPage: { badge: "👩‍🏫 Zona educatorilor", title: "Instrumente pentru educatorii care vor să facă diferența", sub: "Planuri de lecție gratuite, ghiduri de atelier și resurse de dezvoltare profesională." },
    contactPage: { badge: "✉️ Contactați-ne", title: "Contact", sub: "Întrebări, parteneriate, solicitări media sau preocupări de protecție — suntem aici.", send: "📨 Trimite mesajul", sending: "⏳ Se trimite...", success: "Mesaj trimis!", successSub: "Vă mulțumim. Am primit mesajul dvs. și vă vom răspunde în 3 zile lucrătoare." },
  },

  cz: {
    lang: "Čeština",
    nav: { learn: "Vzdělávání", educators: "Pedagogové", toolkit: "Nástroje a AI", community: "Komunita", about: "O projektu", startLearning: "Začít vzdělávání" },
    euBar: "Spolufinancováno Evropskou unií – Program CERV | Občané, Rovnost, Práva a Hodnoty",
    hero: {
      badge: "🇪🇺 Projekt CERV · Platforma financovaná EU",
      line1: "Postav se.", line2: "Mluv nahlas.", line3: "Proti nenávisti.",
      desc: "Vícejazyčná platforma, která pomáhá mladým lidem a pedagogům rozpoznávat nenávistné projevy online, reagovat na ně a čelit jim — v 5 evropských zemích.",
      cta1: "🚀 Začni se vzdělávat zdarma", cta2: "🤖 Prozkoumat nástroj AI",
    },
    stats: { countries: "Země", languages: "Jazyky", modules: "Vzdělávací moduly", months: "Měsíční projekt" },
    problem: {
      badge: "Proti čemu bojujeme",
      title: "Nenávistné projevy online každodenně zasahují miliony mladých lidí",
      p1: "Od sociálních sítí po herní platformy — mladí lidé se setkávají s nenávistnými zprávami, diskriminací a obtěžováním online. Bez správných nástrojů může být těžké vědět, jak reagovat.",
      p2: "SpeakUP against Hate dává mládeži a pedagogům praktické, důkazem podložené nástroje pro porozumění, rozpoznávání a konstruktivní čelení online nenávisti — v 5 evropských jazycích.",
      learnMore: "Zjistit více o projektu →",
    },
    problemStats: {
      s1: "mladých Evropanů se setkalo s nenávistnými projevy online",
      s2: "se cítí bezradných při reagování na online nenávist",
      s3: "incidentů s nenávistí online není nahlášeno",
      s4: "chce více vzdělávání o bezpečném reagování",
    },
    features: {
      badge: "Sekce platformy",
      title: "Vše, co potřebuješ k boji proti online nenávisti",
      items: [
        { title: "Vzdělávací prostor pro mládež", desc: "6 interaktivních modulů o rozpoznávání nenávistných projevů, bezpečných reakcích a digitálním občanství. K dispozici v 5 jazycích.", link: "Prozkoumat →" },
        { title: "Zdroje pro pedagogy", desc: "Plány hodin, průvodce workshopy a nástroje pro profesní rozvoj.", link: "Prozkoumat →" },
        { title: "Nástroj AI", desc: "Vzdělávací nástroj AI pomáhající mladým lidem rozpoznat vzorce online nenávisti.", link: "Prozkoumat →" },
        { title: "Komunitní akce", desc: "Podepiš Pakt proti nenávisti, sdílej svůj příběh a prováděj mikro-akce.", link: "Prozkoumat →" },
      ],
    },
    moduleSection: { badge: "Vzdělávací cesta", title: "6 bezplatných modulů. 5 jazyků.", sub: "Začni cestu k tomu, abys byl sebevědomým digitálním občanem a zastáncem boje proti nenávisti.", cta: "📚 Začni s Modulem 1 — zdarma" },
    pact: { title: "Podpiš Pakt proti nenávisti", sub: "Připoj se k tisícům mladých Evropanů, kteří se zavazují vytvářet bezpečnější online prostory.", cta: "🤝 Podepsat Pakt" },
    footer: {
      tagline: "Pomáháme mladým lidem a pedagogům rozpoznávat, reagovat a čelit nenávistným projevům online.",
      eu: "Spolufinancováno Evropskou unií", cerv: "Program CERV — Občané, rovnost, práva a hodnoty",
      copyright: "SpeakUP against Hate. Všechna práva vyhrazena.",
      partners: "Projektové partnery",
      learnLinks: ["Vzdělávací prostor pro mládež", "Zdroje pro pedagogy", "Nástroje a AI", "Knihovna zdrojů"],
      communityLinks: ["Komunitní akce", "Aktuality a události", "Politické dokumenty", "Kontaktujte nás"],
      legalLinks: ["Zásady ochrany soukromí", "Oznámení GDPR", "Přístupnost", "Ochrana dětí"],
    },
    learnPage: { badge: "📚 Vzdělávací prostor pro mládež", title: "6 bezplatných modulů.\n5 jazyků.", sub: "Tvůj průvodce krok za krokem k pochopení, rozpoznání a čelení online nenávistným projevům." },
    aboutPage: { badge: "🇪🇺 Projekt CERV · 2024–2026", title: "O projektu SpeakUP against Hate", sub: "24měsíční nadnárodní projekt financovaný programem CERV Evropské unie." },
    toolkitPage: { badge: "🤖 Vzdělávací nástroj AI", title: "Sada nástrojů a AI nástroj pro uvědomění o nenávistných projevech", sub: "Stáhněte si naši sadu nástrojů podloženou důkazy a prozkoumejte náš vzdělávací nástroj AI." },
    communityPage: { badge: "✊ Komunitní akce", title: "Společně můžeme online prostory udělat bezpečnějšími", sub: "Podpiš Pakt proti nenávisti. Jednej. Sdílej svůj příběh.", tabPact: "✍️ Podepsit Pakt", tabActions: "🎯 Jednej", tabStories: "💬 Příběhy" },
    educatorsPage: { badge: "👩‍🏫 Prostor pro pedagogy", title: "Nástroje pro pedagogy, kteří chtějí změnit svět", sub: "Bezplatné plány hodin, průvodce workshopy a materiály pro profesní rozvoj." },
    contactPage: { badge: "✉️ Kontaktujte nás", title: "Kontakt", sub: "Dotazy, partnerství, tiskové dotazy nebo obavy o bezpečnost — jsme zde.", send: "📨 Odeslat zprávu", sending: "⏳ Odesílání...", success: "Zpráva odeslána!", successSub: "Děkujeme. Vaši zprávu jsme obdrželi a odpovíme do 3 pracovních dnů." },
  },

  et: {
    lang: "Eesti",
    nav: { learn: "Õpi", educators: "Õpetajad", toolkit: "Tööriistad ja AI", community: "Kogukond", about: "Projekti kohta", startLearning: "Alusta õppimist" },
    euBar: "Kaasrahastab Euroopa Liit – CERV programm | Kodanikud, võrdõiguslikkus, õigused ja väärtused",
    hero: {
      badge: "🇪🇺 CERV projekt · EL-i rahastatav platvorm",
      line1: "Tõuse püsti.", line2: "Räägi.", line3: "Vihkamise vastu.",
      desc: "Mitmekeelne platvorm, mis annab noortele ja õpetajatele vahendid veebis esineva vaenukõne äratundmiseks, sellele reageerimiseks ja sellega võitlemiseks — 5 Euroopa riigis.",
      cta1: "🚀 Alusta õppimist tasuta", cta2: "🤖 Uuri AI-tööriista",
    },
    stats: { countries: "Riiki", languages: "Keelt", modules: "Õppemoodulit", months: "Kuune projekt" },
    problem: {
      badge: "Mille vastu seisame",
      title: "Vaenukõne veebis mõjutab iga päev miljoneid noori",
      p1: "Sotsiaalmeediast mängukeskkondadeni — noored kohtavad veebis vihkavaid sõnumeid, diskrimineerimist ja ahistamist. Ilma õigete vahenditeta on keeruline teada, kuidas reageerida.",
      p2: "SpeakUP against Hate annab noortele ja õpetajatele praktilisi, tõenduspõhiseid vahendeid veebis esineva vaenukõne mõistmiseks, äratundmiseks ja sellele konstruktiivseks vastu seismiseks — 5 Euroopa keeles.",
      learnMore: "Tutvu projektiga lähemalt →",
    },
    problemStats: {
      s1: "Euroopa noortest on veebis vaenukõnega kokku puutunud",
      s2: "tunneb end võimetuna veebis vaenukõnele reageerida",
      s3: "vaenukõne juhtumitest jääb teatamata",
      s4: "soovib rohkem haridust ohutu reageerimise kohta",
    },
    features: {
      badge: "Platvormi osad",
      title: "Kõik, mida vajad veebivihkamise vastu võitlemiseks",
      items: [
        { title: "Noorte õppimisvaldkond", desc: "6 interaktiivset moodulit vaenukõne äratundmisest, ohututest reageeringutest ja digitaalsest kodanikuoskusest. Saadaval 5 keeles.", link: "Uuri →" },
        { title: "Õpetajate ressursid", desc: "Tunnikavad, töötoa juhendid ja professionaalse arengu vahendid.", link: "Uuri →" },
        { title: "AI tööriist", desc: "Hariduslik AI tööriist, mis aitab noortel veebis esineva vaenukõne mustreid ära tunda.", link: "Uuri →" },
        { title: "Kogukonna tegevused", desc: "Kirjuta alla Anti-Hate Paktile, jaga oma lugu ja tee mikrotegusid.", link: "Uuri →" },
      ],
    },
    moduleSection: { badge: "Õppetee", title: "6 tasuta moodulit. 5 keelt.", sub: "Alusta teekonda, et saada enesekindlaks digitaalseks kodanikuks ja vaenukõne vastaseks.", cta: "📚 Alusta 1. mooduliga — tasuta" },
    pact: { title: "Kirjuta alla Anti-Hate Paktile", sub: "Liitu tuhandete Euroopa noorte ja õpetajatega, kes võtavad kohustuse teha veebiruum turvalisemaks.", cta: "🤝 Kirjuta alla Paktile" },
    footer: {
      tagline: "Anname noortele ja õpetajatele vahendid veebis esineva vaenukõne äratundmiseks, sellele reageerimiseks ja võitlemiseks.",
      eu: "Kaasrahastab Euroopa Liit", cerv: "CERV programm — Kodanikud, võrdõiguslikkus, õigused ja väärtused",
      copyright: "SpeakUP against Hate. Kõik õigused kaitstud.",
      partners: "Projektipartnerid",
      learnLinks: ["Noorte õppimisvaldkond", "Õpetajate ressursid", "Tööriistad ja AI", "Ressursside kogu"],
      communityLinks: ["Kogukonna tegevused", "Uudised ja üritused", "Poliitikadokumendid", "Võtke meiega ühendust"],
      legalLinks: ["Privaatsuspoliitika", "Isikuandmete kaitse teade", "Ligipääsetavus", "Laste kaitse"],
    },
    learnPage: { badge: "📚 Noorte õppimisvaldkond", title: "6 tasuta moodulit.\n5 keelt.", sub: "Sinu samm-sammuline juhend veebis esineva vaenukõne mõistmiseks, äratundmiseks ja sellele vastu seismiseks." },
    aboutPage: { badge: "🇪🇺 CERV projekt · 2024–2026", title: "SpeakUP against Hate projektist", sub: "24-kuuline riikidevaheline projekt, mida rahastab Euroopa Liidu CERV programm." },
    toolkitPage: { badge: "🤖 Hariduslik AI tööriist", title: "Tööriistad ja AI vaenukõne teadlikkuse tõstmiseks", sub: "Laadi alla meie tõenduspõhine tööriistad ja uuri meie hariduslikku AI tööriista." },
    communityPage: { badge: "✊ Kogukonna tegevused", title: "Koos saame veebiruumi turvalisemaks muuta", sub: "Kirjuta alla Anti-Hate Paktile. Tegutse. Jaga oma lugu.", tabPact: "✍️ Kirjuta alla Paktile", tabActions: "🎯 Tegutse", tabStories: "💬 Lood" },
    educatorsPage: { badge: "👩‍🏫 Õpetajate valdkond", title: "Vahendid õpetajatele, kes soovivad muutust luua", sub: "Tasuta tunnikavad, töötoa juhendid ja professionaalse arengu ressursid." },
    contactPage: { badge: "✉️ Võtke meiega ühendust", title: "Kontakt", sub: "Küsimused, partnerlused, meediapäringud või kaitsega seotud mured — oleme siin.", send: "📨 Saada sõnum", sending: "⏳ Saatmine...", success: "Sõnum saadetud!", successSub: "Täname. Oleme teie sõnumi kätte saanud ja vastame 3 tööpäeva jooksul." },
  },
};
