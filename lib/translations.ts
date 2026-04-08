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
  learnPage: {
    badge: string; title: string; sub: string;
    moduleTitles: string[]; moduleTags: string[]; moduleDescs: string[];
    levels: { beginner: string; intermediate: string; advanced: string };
    learningPath: string; certLabel: string;
    certTitle: string; certDesc: string;
    beginBtn: string; startBtn: string;
  };
  aboutPage: {
    badge: string; title: string; sub: string;
    problemLabel: string; problemTitle: string; problemDesc1: string; problemDesc2: string;
    solutionLabel: string; solutionTitle: string; solutionDesc: string;
    problemPoints: string[]; solutionPoints: string[];
    cervTitle: string; cervDesc: string; cervDisclaimer: string;
    timelineLabel: string; timelineTitle: string;
    partnerLabel: string; partnerTitle: string; coordinatorLabel: string;
    cta: string; ctaLearn: string; ctaCommunity: string; ctaContact: string;
  };
  toolkitPage: {
    badge: string; title: string; sub: string;
    demoLabel: string; demoTitle: string; demoSub: string;
    revealBtn: string; prevBtn: string; nextBtn: string; startModulesBtn: string;
    exampleOf: string; howCategorise: string; whatCanYouDo: string;
    downloadsLabel: string; downloadsTitle: string; downloadsSub: string; downloadBtn: string;
    ethicalLabel: string; tryAIBtn: string; downloadToolkitBtn: string;
    tryFullBtn: string;
  };
  communityPage: {
    badge: string; title: string; sub: string; tabPact: string; tabActions: string; tabStories: string;
    pactTitle: string; signPactTitle: string; signPactSub: string;
    nameLabel: string; emailLabel: string; cityLabel: string; countryLabel: string; roleLabel: string;
    namePlaceholder: string; emailPlaceholder: string; cityPlaceholder: string;
    roleOptions: string[]; consentLabel: string; displayLabel: string; signBtn: string;
    successTitle: string; successSub: string; takeActionBtn: string;
    heroStats: string[]; selectCountry: string; startLearnBtn: string; signatoryCount: string; startBtn: string;
    signatoryWall: string; actionTitle: string; actionSub: string;
    storiesTitle: string; storiesSub: string; shareTitle: string; shareSub: string; shareBtn: string;
    pactText: string; gdprNote: string;
    actions: { title: string; desc: string; tag: string }[];
    stories: { name: string; country: string; story: string }[];
  };
  educatorsPage: {
    badge: string; title: string; sub: string;
    heroStats: string[];
    curriculumLabel: string; curriculumTitle: string; curriculumSub: string; curriculumDesc1: string; curriculumDesc2: string;
    resourceLibLabel: string; resourceLibTitle: string; downloadBtn: string;
    filterAll: string; moduleLabel: string;
    faqTitle: string;
    joinTitle: string; joinSub: string;
    requestAccessBtn: string; previewBtn: string;
  };
  contactPage: {
    badge: string; title: string; sub: string;
    send: string; sending: string; success: string; successSub: string; sendAnother: string;
    quickContact: string; followProject: string; contactPartner: string;
    general: string; mediaPress: string; safeguardingLabel: string;
    sendMessage: string; formRequired: string;
    nameLabel: string; emailLabel: string; orgLabel: string; countryLabel: string; reasonLabel: string; messageLabel: string;
    namePlaceholder: string; orgPlaceholder: string; msgPlaceholder: string;
    selectCountry: string;
    reasons: string[];
    consentLabel: string; gdprNote: string; safeguardingNote: string; errorMsg: string;
  };
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
    learnPage: {
      badge: "📚 Youth Learning Area", title: "6 Free Modules.\n5 Languages.", sub: "Your step-by-step guide to understanding, recognising, and countering online hate speech — built for young people across Europe.",
      moduleTitles: ["What is Online Hate Speech?", "Recognising Hate Online", "Responding Safely", "Reporting & Protecting Yourself", "Creating Counter-Narratives", "Digital Citizenship & Rights"],
      moduleTags: ["Foundation", "Awareness", "Skills", "Action", "Creative", "Rights"],
      moduleDescs: [
        "Understand what hate speech is, its different forms, and why it matters. Learn the legal and ethical framework across Europe.",
        "Identify coded language, dog whistles, and subtle discrimination. Case studies from real social media platforms.",
        "Learn evidence-based strategies for responding safely to hate online — without escalating or putting yourself at risk.",
        "Know your rights. Learn how to document and report hate speech on major platforms and through legal channels.",
        "Develop creative skills to create positive counter-narratives that challenge hate and promote inclusion.",
        "Understand your digital rights, responsibilities, and how to be an active, ethical citizen in online spaces."
      ],
      levels: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
      learningPath: "Learning path:", certLabel: "Certificate",
      certTitle: "Complete all 6 modules and earn your certificate",
      certDesc: "A free digital certificate recognising your commitment to fighting online hate speech — shareable on LinkedIn and social media.",
      beginBtn: "🚀 Begin Module 01", startBtn: "Start →",
    },
    aboutPage: {
      badge: "🇪🇺 CERV Project · 2024–2026", title: "About SpeakUP against Hate", sub: "A 24-month transnational project funded by the European Union's CERV programme.",
      problemLabel: "The Problem", problemTitle: "Online hate is growing. The tools to fight it are not.",
      problemDesc1: "Young people across Europe encounter online hate speech daily — on social media, in gaming communities, and in messaging apps. Yet most young people and educators lack the practical knowledge and tools to respond effectively.",
      problemDesc2: "Existing resources are often monolingual, adult-centred, or disconnected from the realities of digital culture. There is a clear gap between EU-level policy ambitions and grassroots capacity to act.",
      solutionLabel: "Our Solution", solutionTitle: "A multilingual platform built for real change.",
      solutionDesc: "SpeakUP against Hate builds a youth-friendly, educator-supported, AI-enhanced online platform that makes evidence-based anti-hate education accessible across 5 EU languages — for free.",
      problemPoints: ["Hate speech is normalised in many online spaces", "Youth lack evidence-based, age-appropriate tools", "Educators need practical classroom resources", "Most resources are English-only"],
      solutionPoints: ["6 learning modules for youth (EN/PL/RO/CZ/ET)", "Educator resources, lesson plans, and workshop guides", "AI-supported hate speech awareness tool", "Community actions, Anti-Hate Pacts, micro-campaigns", "Policy briefs for European and national decision-makers"],
      cervTitle: "Co-funded by the European Union",
      cervDesc: "This project is funded under the CERV (Citizens, Equality, Rights and Values) Programme, Strand 2: Equality, Rights and Gender Equality. The CERV programme promotes and protects EU values, fundamental rights, and democratic participation.",
      cervDisclaimer: "The content of this platform represents the views of the authors only and is their sole responsibility. The European Commission does not accept any responsibility for use that may be made of the information it contains.",
      timelineLabel: "Project Timeline", timelineTitle: "24-Month Implementation Plan",
      partnerLabel: "Project Consortium", partnerTitle: "5 Partners. 4 Countries. One Mission.", coordinatorLabel: "Coordinator",
      cta: "Ready to get involved?", ctaLearn: "📚 Start Learning", ctaCommunity: "🤝 Join the Community", ctaContact: "✉️ Contact Us",
    },
    toolkitPage: {
      badge: "🤖 Educational AI Tool", title: "Toolkit & AI Hate Speech Awareness Tool", sub: "Download our evidence-based toolkit and explore our AI-powered educational tool.",
      demoLabel: "Interactive Demo", demoTitle: "Learn to Recognise Online Hate",
      demoSub: "Read each example, think about its category, then reveal the analysis.",
      revealBtn: "🔍 Reveal Analysis", prevBtn: "← Previous", nextBtn: "Next Example →", startModulesBtn: "📚 Start Learning Modules",
      exampleOf: "Example", howCategorise: "How would you categorise this content?", whatCanYouDo: "💡 WHAT CAN YOU DO?",
      downloadsLabel: "Free Downloads", downloadsTitle: "Download the SpeakUP Toolkit",
      downloadsSub: "All resources are free, open-access, and licensed for educational use.", downloadBtn: "📥 Download",
      ethicalLabel: "Ethical & Safe Use", tryAIBtn: "🤖 Try AI Tool Demo", downloadToolkitBtn: "📥 Download Toolkit",
      tryFullBtn: "Try Full AI Tool →",
    },
    communityPage: {
      badge: "✊ Community Actions", title: "Together We Can Make Online Spaces Safer", sub: "Sign the Anti-Hate Pact. Take community actions. Share your story.",
      tabPact: "✍️ Sign the Pact", tabActions: "🎯 Take Action", tabStories: "💬 Stories",
      pactTitle: "The Anti-Hate Pact", signPactTitle: "Sign the Pact",
      signPactSub: "Join thousands of young people across Europe committing to safer digital spaces.",
      nameLabel: "Full Name *", emailLabel: "Email Address *", cityLabel: "City *", countryLabel: "Country *", roleLabel: "I am a... (optional)",
      namePlaceholder: "Your name", emailPlaceholder: "you@example.com", cityPlaceholder: "Your city",
      roleOptions: ["Prefer not to say", "Young person (under 25)", "Educator / Teacher", "NGO / Civil Society", "University Student", "Other"],
      consentLabel: "I agree to the Anti-Hate Pact and understand my data will be used only for this purpose. *",
      displayLabel: "I consent to my first name and country being displayed on the public signatory wall.",
      signBtn: "✊ Sign the Anti-Hate Pact",
      successTitle: "You've signed the pact!", successSub: "Thank you for standing up against hate.", takeActionBtn: "Take an Action →",
      heroStats: ["Pact Signatories", "Countries", "Community Actions", "Youth Stories"],
      selectCountry: "Select your country", startLearnBtn: "📚 Start Learning", signatoryCount: "people have already signed from 5+ countries", startBtn: "Start →",
      signatoryWall: "Signatory Wall", actionTitle: "Take Action Against Hate",
      actionSub: "Small actions add up. Choose one and share with #SpeakUPagainstHate.",
      storiesTitle: "Youth Stories", storiesSub: "Real experiences from young people across Europe.",
      shareTitle: "Share Your Story", shareSub: "Did you witness or counter online hate? Your experience can inspire others.",
      shareBtn: "Submit Your Story",
      pactText: "We, the undersigned, commit to speaking up against online hate speech in our digital communities.\n\nWe pledge to:\n• Recognise hate speech when we encounter it — including coded and subtle forms\n• Not stay silent when hate is directed at others in our communities\n• Report hateful content through available platform tools and legal channels\n• Support targets of hate speech with solidarity and care\n• Choose words that build respect and inclusion, not division\n• Never share, amplify or like hateful content — even \"as a joke\"\n• Educate ourselves and others about the harms of hate speech\n• Stand for the equal dignity of every person, regardless of their identity\n\nWe believe safer digital spaces are possible — and that each of us has a role to play in creating them.",
      gdprNote: "🔒 By signing, you agree to your name (if consented) being displayed on the public signatory wall. Your email will only be used to send a confirmation. GDPR compliant.",
      actions: [
        { title: "Create a Counter-Narrative Post", desc: "Design a social media post promoting inclusion and digital respect. Share with #SpeakUPagainstHate.", tag: "Creative" },
        { title: "Organise a School Discussion", desc: "Facilitate a classroom discussion about hate speech with your peers using our free facilitation guide.", tag: "Education" },
        { title: "Recruit 5 Pact Signatories", desc: "Share the Anti-Hate Pact with 5 friends and invite them to sign. Every signature counts.", tag: "Community" },
        { title: "Share Your Story", desc: "Tell us about a time you witnessed or countered online hate. Your story can inspire others.", tag: "Stories" },
      ],
      stories: [
        { name: "Maria, 19", country: "Romania 🇷🇴", story: "I saw a classmate being targeted in a group chat because of their religion. I didn't know what to do at first, but after using SpeakUP I found the courage to speak up privately and report the messages." },
        { name: "Jakub, 22", country: "Czech Republic 🇨🇿", story: "I used to scroll past hate comments thinking they weren't my problem. Now I understand that silence is also a choice — and it's usually the wrong one." },
        { name: "Kristiina, 17", country: "Estonia 🇪🇪", story: "Our school organised a SpeakUP session and we made an Anti-Hate Pact together. It felt like our class became closer and more aware of each other's experiences." },
      ],
    },
    educatorsPage: {
      badge: "👩‍🏫 Educator Area", title: "Tools for Educators Who Want to Make a Difference", sub: "Free lesson plans, workshop guides, and professional development resources.",
      heroStats: ["Free Resources", "Languages", "Activity Cards", "Always"],
      curriculumLabel: "Ready-Made Curriculum", curriculumTitle: "6 modules — ready to use in your classroom",
      curriculumSub: "Each module includes lesson plans, facilitator guides, slide decks, and assessment tools.",
      curriculumDesc1: "Each SpeakUP learning module comes with a corresponding lesson plan and supporting materials. You can use one module as a stand-alone session or deliver all six as a progressive curriculum.",
      curriculumDesc2: "All modules are designed for approximately 60–90 minutes each and include discussion questions, a key takeaways summary, and a quiz for knowledge review.",
      resourceLibLabel: "Resource Library", resourceLibTitle: "Download Free Educator Materials", downloadBtn: "📥 Download",
      filterAll: "All", moduleLabel: "Module",
      faqTitle: "Frequently Asked Questions",
      joinTitle: "Join the Educator Community", joinSub: "Connect with educators from Poland, Estonia, Czech Republic, and Romania.",
      requestAccessBtn: "Request Access", previewBtn: "Preview All Modules",
    },
    contactPage: {
      badge: "✉️ Get in Touch", title: "Contact Us", sub: "Questions, partnerships, media enquiries, or safeguarding concerns — we're here to help.",
      send: "📨 Send Message", sending: "⏳ Sending...", success: "Message Sent!",
      successSub: "Thank you. We've received your message and will respond within 3 working days.", sendAnother: "Send Another Message",
      quickContact: "Quick Contact", followProject: "Follow the Project", contactPartner: "Contact a Partner Directly",
      general: "General", mediaPress: "Media & Press", safeguardingLabel: "Safeguarding",
      sendMessage: "Send Us a Message", formRequired: "All fields marked * are required. We respond within 3 working days.",
      nameLabel: "Full Name *", emailLabel: "Email Address *", orgLabel: "Organisation", countryLabel: "Country", reasonLabel: "Reason for Contact *", messageLabel: "Message *",
      namePlaceholder: "Your name", orgPlaceholder: "School, NGO, University...", msgPlaceholder: "Tell us how we can help you...",
      selectCountry: "Select country",
      reasons: ["General Enquiry", "Educator Partnership", "Project Partnership", "Media & Press", "Share My Story", "Technical Issue", "Safeguarding Concern"],
      consentLabel: "I agree to my data being processed in accordance with the Privacy Policy for the purpose of responding to this enquiry. *",
      gdprNote: "🔒 Your data is protected under GDPR. We will never share your information with third parties.",
      safeguardingNote: "🛡️ Safeguarding concern? If urgent, please contact your local emergency services directly. We aim to respond within 24 hours.",
      errorMsg: "❌ Something went wrong. Please try again or email us directly.",
    },
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
    learnPage: {
      badge: "📚 Strefa nauki dla młodzieży", title: "6 bezpłatnych modułów.\n5 języków.", sub: "Twój przewodnik krok po kroku do rozumienia, rozpoznawania i przeciwdziałania mowie nienawiści w sieci.",
      moduleTitles: ["Czym jest mowa nienawiści online?", "Rozpoznawanie nienawiści w sieci", "Bezpieczne reagowanie", "Zgłaszanie i ochrona siebie", "Tworzenie kontrnarracji", "Obywatelstwo cyfrowe i prawa"],
      moduleTags: ["Podstawy", "Świadomość", "Umiejętności", "Działanie", "Kreatywność", "Prawa"],
      moduleDescs: [
        "Zrozum, czym jest mowa nienawiści, jakie przybiera formy i dlaczego ma znaczenie.",
        "Identyfikuj zakodowany język i subtelną dyskryminację na podstawie studiów przypadku z mediów społecznościowych.",
        "Poznaj strategie bezpiecznego reagowania na nienawiść online bez eskalowania sytuacji.",
        "Poznaj swoje prawa i naucz się dokumentować oraz zgłaszać mowę nienawiści na platformach i kanałach prawnych.",
        "Rozwijaj umiejętności tworzenia pozytywnych kontrnarracji promujących włączenie społeczne.",
        "Poznaj swoje prawa i obowiązki cyfrowe oraz jak być aktywnym, etycznym obywatelem online."
      ],
      levels: { beginner: "Początkujący", intermediate: "Średniozaawansowany", advanced: "Zaawansowany" },
      learningPath: "Ścieżka nauki:", certLabel: "Certyfikat",
      certTitle: "Ukończ wszystkie 6 modułów i zdobądź certyfikat",
      certDesc: "Bezpłatny certyfikat cyfrowy potwierdzający Twoje zaangażowanie w walkę z mową nienawiści — do udostępnienia na LinkedIn i mediach społecznościowych.",
      beginBtn: "🚀 Rozpocznij Moduł 01", startBtn: "Zacznij →",
    },
    aboutPage: {
      badge: "🇪🇺 Projekt CERV · 2024–2026", title: "O projekcie SpeakUP against Hate", sub: "24-miesięczny projekt transnarodowy finansowany przez program CERV Unii Europejskiej.",
      problemLabel: "Problem", problemTitle: "Nienawiść w sieci rośnie. Narzędzia do walki z nią — nie.",
      problemDesc1: "Młodzi ludzie w Europie codziennie napotykają mowę nienawiści w mediach społecznościowych, grach i komunikatorach. Większość nie posiada odpowiednich narzędzi, by skutecznie reagować.",
      problemDesc2: "Dostępne zasoby są często jednojęzyczne, nastawione na dorosłych lub oderwane od realiów kultury cyfrowej. Istnieje wyraźna luka między polityką UE a oddolną zdolnością do działania.",
      solutionLabel: "Nasze rozwiązanie", solutionTitle: "Wielojęzyczna platforma zbudowana dla realnej zmiany.",
      solutionDesc: "SpeakUP against Hate tworzy przyjazną dla młodzieży platformę edukacyjną, która udostępnia edukację antynenawiści opartą na dowodach w 5 językach UE — bezpłatnie.",
      problemPoints: ["Mowa nienawiści jest normalizowana w wielu przestrzeniach online", "Młodzieży brakuje opartych na dowodach narzędzi", "Edukatorzy potrzebują praktycznych zasobów szkolnych", "Większość zasobów jest tylko po angielsku"],
      solutionPoints: ["6 modułów szkoleniowych dla młodzieży (EN/PL/RO/CZ/ET)", "Zasoby dla edukatorów, plany lekcji i przewodniki", "Narzędzie AI do rozpoznawania mowy nienawiści", "Działania społecznościowe, Pakty Antynienawiści", "Raporty polityczne dla decydentów europejskich"],
      cervTitle: "Współfinansowane przez Unię Europejską",
      cervDesc: "Projekt jest finansowany w ramach Programu CERV (Obywatele, Równość, Prawa i Wartości), Nurt 2: Równość, Prawa i Równość płci. Program CERV promuje i chroni wartości UE.",
      cervDisclaimer: "Treść tej platformy wyraża wyłącznie poglądy autorów i stanowi ich wyłączną odpowiedzialność. Komisja Europejska nie ponosi odpowiedzialności za jakiekolwiek wykorzystanie zawartych tu informacji.",
      timelineLabel: "Harmonogram projektu", timelineTitle: "24-miesięczny plan realizacji",
      partnerLabel: "Konsorcjum projektowe", partnerTitle: "5 partnerów. 4 kraje. Jedna misja.", coordinatorLabel: "Koordynator",
      cta: "Gotowy/a do zaangażowania?", ctaLearn: "📚 Zacznij naukę", ctaCommunity: "🤝 Dołącz do społeczności", ctaContact: "✉️ Kontakt",
    },
    toolkitPage: {
      badge: "🤖 Edukacyjne narzędzie AI", title: "Zestaw narzędzi i narzędzie AI do rozpoznawania mowy nienawiści", sub: "Pobierz nasz zestaw narzędzi i wypróbuj nasze narzędzie edukacyjne AI.",
      demoLabel: "Interaktywne demo", demoTitle: "Naucz się rozpoznawać nienawiść online",
      demoSub: "Przeczytaj każdy przykład, zastanów się nad kategorią, następnie odkryj analizę.",
      revealBtn: "🔍 Odkryj analizę", prevBtn: "← Poprzedni", nextBtn: "Następny przykład →", startModulesBtn: "📚 Zacznij moduły nauki",
      exampleOf: "Przykład", howCategorise: "Jak sklasyfikujesz tę treść?", whatCanYouDo: "💡 CO MOŻESZ ZROBIĆ?",
      downloadsLabel: "Bezpłatne pliki", downloadsTitle: "Pobierz Zestaw narzędzi SpeakUP",
      downloadsSub: "Wszystkie zasoby są bezpłatne i licencjonowane do użytku edukacyjnego.", downloadBtn: "📥 Pobierz",
      ethicalLabel: "Etyczne i bezpieczne użycie", tryAIBtn: "🤖 Wypróbuj demo AI", downloadToolkitBtn: "📥 Pobierz zestaw narzędzi",
      tryFullBtn: "Wypróbuj pełne narzędzie AI →",
    },
    communityPage: {
      badge: "✊ Działania społecznościowe", title: "Razem możemy uczynić internet bezpieczniejszym", sub: "Podpisz Pakt Antynienawiści. Podejmij działania. Podziel się swoją historią.",
      tabPact: "✍️ Podpisz Pakt", tabActions: "🎯 Działaj", tabStories: "💬 Historie",
      pactTitle: "Pakt Antynienawiści", signPactTitle: "Podpisz Pakt",
      signPactSub: "Dołącz do tysięcy młodych ludzi z Europy zobowiązujących się do bezpieczniejszych przestrzeni cyfrowych.",
      nameLabel: "Imię i nazwisko *", emailLabel: "Adres e-mail *", cityLabel: "Miasto *", countryLabel: "Kraj *", roleLabel: "Jestem... (opcjonalnie)",
      namePlaceholder: "Twoje imię", emailPlaceholder: "ty@przykład.pl", cityPlaceholder: "Twoje miasto",
      roleOptions: ["Wolę nie mówić", "Młoda osoba (poniżej 25 lat)", "Edukator / Nauczyciel", "NGO / Społeczeństwo obywatelskie", "Student/ka", "Inne"],
      consentLabel: "Zgadzam się z Paktem Antynienawiści i rozumiem, że moje dane zostaną użyte tylko w tym celu. *",
      displayLabel: "Wyrażam zgodę na wyświetlanie mojego imienia i kraju na ścianie sygnatariuszy.",
      signBtn: "✊ Podpisz Pakt Antynienawiści",
      successTitle: "Podpisałeś/aś pakt!", successSub: "Dziękujemy za stanie po właściwej stronie.", takeActionBtn: "Podejmij działanie →",
      heroStats: ["Sygnatariusze Paktu", "Kraje", "Działania społecznościowe", "Opowieści młodych"],
      selectCountry: "Wybierz swój kraj", startLearnBtn: "📚 Zacznij naukę", signatoryCount: "osób już podpisało z 5+ krajów", startBtn: "Zacznij →",
      signatoryWall: "Ściana sygnatariuszy", actionTitle: "Działaj przeciwko nienawiści",
      actionSub: "Małe działania sumują się. Wybierz jedno i udostępnij z #SpeakUPagainstHate.",
      storiesTitle: "Opowieści młodych", storiesSub: "Prawdziwe doświadczenia młodych ludzi z całej Europy.",
      shareTitle: "Podziel się swoją historią", shareSub: "Byłeś/aś świadkiem lub sprzeciwiłeś/aś się nienawiści online? Twoje doświadczenie może inspirować.",
      shareBtn: "Prześlij swoją historię",
      gdprNote: "🔒 Podpisując, wyrażasz zgodę na wyświetlanie Twojego imienia (za Twoją zgodą) na publicznej ścianie sygnatariuszy. Twój e-mail będzie użyty wyłącznie do potwierdzenia. Zgodne z RODO.",
      pactText: "My, niżej podpisani, zobowiązujemy się mówić głośno przeciwko mowie nienawiści w sieci w naszych społecznościach cyfrowych.\n\nZobowiązujemy się:\n• Rozpoznawać mowę nienawiści, gdy się z nią spotykamy — w tym jej zakodowane i subtelne formy\n• Nie milczeć, gdy nienawiść jest skierowana do innych w naszych społecznościach\n• Zgłaszać nienawistne treści za pomocą dostępnych narzędzi platform i kanałów prawnych\n• Wspierać ofiary mowy nienawiści z solidarnością i troską\n• Wybierać słowa budujące szacunek i włączenie, a nie podziały\n• Nigdy nie udostępniać, wzmacniać ani polubić nienawistnych treści — nawet \"jako żart\"\n• Edukować siebie i innych o szkodach wynikających z mowy nienawiści\n• Stać na straży równej godności każdej osoby, niezależnie od jej tożsamości\n\nWierzymy, że bezpieczniejsze przestrzenie cyfrowe są możliwe — i że każdy z nas ma rolę do odegrania w ich tworzeniu.",
      actions: [
        { title: "Stwórz post kontrnarracyjny", desc: "Zaprojektuj post w mediach społecznościowych promujący inkluzywność i szacunek. Udostępnij z #SpeakUPagainstHate.", tag: "Kreatywność" },
        { title: "Zorganizuj dyskusję szkolną", desc: "Przeprowadź dyskusję klasową na temat mowy nienawiści z rówieśnikami, korzystając z naszego bezpłatnego przewodnika.", tag: "Edukacja" },
        { title: "Zrekrutuj 5 sygnatariuszy", desc: "Podziel się Paktem Antynienawiści z 5 znajomymi i zaproś ich do podpisania. Każdy podpis się liczy.", tag: "Społeczność" },
        { title: "Podziel się swoją historią", desc: "Opowiedz nam o czasach, gdy byłeś świadkiem lub przeciwdziałałeś nienawiści online. Twoja historia może inspirować.", tag: "Historie" },
      ],
      stories: [
        { name: "Maria, 19", country: "Rumunia 🇷🇴", story: "Widziałam, jak kolega był atakowany na czacie grupowym z powodu swojej religii. Na początku nie wiedziałam, co zrobić, ale po skorzystaniu z SpeakUP znalazłam odwagę, żeby porozmawiać prywatnie i zgłosić wiadomości." },
        { name: "Jakub, 22", country: "Czechy 🇨🇿", story: "Kiedyś przewijałem komentarze pełne nienawiści, myśląc, że to nie mój problem. Teraz rozumiem, że milczenie też jest wyborem — i zazwyczaj złym." },
        { name: "Kristiina, 17", country: "Estonia 🇪🇪", story: "Nasza szkoła zorganizowała sesję SpeakUP i razem podpisaliśmy Pakt Antynienawiści. Poczułam, że klasa stała się bliższa i bardziej świadoma doświadczeń innych." },
      ],
    },
    educatorsPage: {
      badge: "👩‍🏫 Strefa nauczycieli", title: "Narzędzia dla nauczycieli, którzy chcą zmieniać świat", sub: "Bezpłatne plany lekcji, przewodniki warsztatowe i materiały do rozwoju zawodowego.",
      heroStats: ["Bezpłatne zasoby", "Języki", "Karty aktywności", "Zawsze"],
      curriculumLabel: "Gotowy program nauczania", curriculumTitle: "6 modułów — gotowych do użycia w Twojej klasie",
      curriculumSub: "Każdy moduł zawiera plany lekcji, przewodniki, prezentacje i narzędzia oceny.",
      curriculumDesc1: "Każdy moduł SpeakUP zawiera plan lekcji i materiały pomocnicze. Możesz użyć jednego jako samodzielnej sesji lub dostarczyć wszystkie sześć jako program nauczania.",
      curriculumDesc2: "Wszystkie moduły są zaprojektowane na ok. 60–90 minut i zawierają pytania dyskusyjne, podsumowanie i quiz.",
      resourceLibLabel: "Biblioteka zasobów", resourceLibTitle: "Pobierz bezpłatne materiały dla edukatorów", downloadBtn: "📥 Pobierz",
      filterAll: "Wszystkie", moduleLabel: "Moduł",
      faqTitle: "Często zadawane pytania",
      joinTitle: "Dołącz do społeczności edukatorów", joinSub: "Nawiąż kontakty z edukatorami z Polski, Estonii, Czech i Rumunii.",
      requestAccessBtn: "Poproś o dostęp", previewBtn: "Podejrzyj wszystkie moduły",
    },
    contactPage: {
      badge: "✉️ Skontaktuj się", title: "Kontakt", sub: "Pytania, współpraca, zapytania medialne lub kwestie ochrony dzieci — jesteśmy tutaj.",
      send: "📨 Wyślij wiadomość", sending: "⏳ Wysyłanie...", success: "Wiadomość wysłana!",
      successSub: "Dziękujemy. Otrzymaliśmy Twoją wiadomość i odpowiemy w ciągu 3 dni roboczych.", sendAnother: "Wyślij kolejną wiadomość",
      quickContact: "Szybki kontakt", followProject: "Śledź projekt", contactPartner: "Skontaktuj się z partnerem",
      general: "Ogólny", mediaPress: "Media i prasa", safeguardingLabel: "Ochrona dzieci",
      sendMessage: "Wyślij nam wiadomość", formRequired: "Pola oznaczone * są wymagane. Odpowiadamy w ciągu 3 dni roboczych.",
      nameLabel: "Imię i nazwisko *", emailLabel: "Adres e-mail *", orgLabel: "Organizacja", countryLabel: "Kraj", reasonLabel: "Powód kontaktu *", messageLabel: "Wiadomość *",
      namePlaceholder: "Twoje imię", orgPlaceholder: "Szkoła, NGO, Uczelnia...", msgPlaceholder: "Powiedz nam, jak możemy Ci pomóc...",
      selectCountry: "Wybierz kraj",
      reasons: ["Zapytanie ogólne", "Partnerstwo edukacyjne", "Partnerstwo projektowe", "Media i prasa", "Moja historia", "Problem techniczny", "Ochrona dzieci"],
      consentLabel: "Wyrażam zgodę na przetwarzanie moich danych zgodnie z Polityką Prywatności w celu udzielenia odpowiedzi na zapytanie. *",
      gdprNote: "🔒 Twoje dane są chronione zgodnie z RODO. Nigdy nie udostępnimy Twoich danych osobom trzecim.",
      safeguardingNote: "🛡️ Kwestia ochrony dzieci? W nagłych przypadkach prosimy o kontakt z lokalną policją lub organem ochrony dzieci. Odpowiadamy w ciągu 24 godzin.",
      errorMsg: "❌ Coś poszło nie tak. Spróbuj ponownie lub napisz do nas bezpośrednio.",
    },
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
    learnPage: {
      badge: "📚 Zona de învățare pentru tineri", title: "6 module gratuite.\n5 limbi.", sub: "Ghidul tău pas cu pas pentru a înțelege, recunoaște și contracara discursul de ură online.",
      moduleTitles: ["Ce este discursul de ură online?", "Recunoașterea urii online", "Răspuns în siguranță", "Raportarea și protejarea ta", "Crearea de contranarative", "Cetățenie digitală și drepturi"],
      moduleTags: ["Fundație", "Conștientizare", "Abilități", "Acțiune", "Creativitate", "Drepturi"],
      moduleDescs: [
        "Înțelege ce este discursul de ură, formele sale și de ce contează.",
        "Identifică limbajul codat și discriminarea subtilă pe baza studiilor de caz din rețelele sociale.",
        "Învață strategii bazate pe dovezi pentru a răspunde în siguranță la ura online.",
        "Cunoaște-ți drepturile și învață cum să documentezi și să raportezi discursul de ură.",
        "Dezvoltă abilități creative pentru a crea contranarative pozitive care promovează incluziunea.",
        "Înțelege drepturile și responsabilitățile tale digitale și cum să fii un cetățean activ online."
      ],
      levels: { beginner: "Începător", intermediate: "Intermediar", advanced: "Avansat" },
      learningPath: "Parcurs de învățare:", certLabel: "Certificat",
      certTitle: "Finalizați toate cele 6 module și obțineți certificatul",
      certDesc: "Un certificat digital gratuit care recunoaște angajamentul dvs. față de combaterea discursului de ură online — partajabil pe LinkedIn și rețele sociale.",
      beginBtn: "🚀 Începeți Modulul 01", startBtn: "Start →",
    },
    aboutPage: {
      badge: "🇪🇺 Proiect CERV · 2024–2026", title: "Despre SpeakUP against Hate", sub: "Un proiect transnational de 24 de luni finanțat de programul CERV al Uniunii Europene.",
      problemLabel: "Problema", problemTitle: "Ura online crește. Instrumentele pentru a o combate — nu.",
      problemDesc1: "Tinerii din Europa se confruntă zilnic cu discurs de ură pe rețelele de socializare, în comunitățile de gaming și aplicații de mesagerie.",
      problemDesc2: "Resursele existente sunt adesea monolingve, orientate spre adulți sau rupte de realitățile culturii digitale.",
      solutionLabel: "Soluția noastră", solutionTitle: "O platformă multilingvă construită pentru schimbare reală.",
      solutionDesc: "SpeakUP against Hate construiește o platformă educativă accesibilă în 5 limbi UE — gratuit.",
      problemPoints: ["Discursul de ură este normalizat în multe spații online", "Tinerii nu au instrumente bazate pe dovezi", "Educatorii au nevoie de resurse practice", "Majoritatea resurselor sunt doar în limba engleză"],
      solutionPoints: ["6 module de învățare pentru tineri (EN/PL/RO/CZ/ET)", "Resurse pentru educatori, planuri de lecție și ghiduri", "Instrument AI pentru conștientizarea discursului de ură", "Acțiuni comunitare, Pacte Anti-Ură", "Rapoarte de politici pentru factorii de decizie"],
      cervTitle: "Cofinanțat de Uniunea Europeană",
      cervDesc: "Acest proiect este finanțat în cadrul Programului CERV (Cetățeni, Egalitate, Drepturi și Valori).",
      cervDisclaimer: "Conținutul acestei platforme reprezintă viziunile autorilor și este responsabilitatea lor exclusivă.",
      timelineLabel: "Calendarul proiectului", timelineTitle: "Plan de implementare de 24 de luni",
      partnerLabel: "Consorțiul proiectului", partnerTitle: "5 parteneri. 4 țări. O misiune.", coordinatorLabel: "Coordonator",
      cta: "Ești gata să te implici?", ctaLearn: "📚 Învață", ctaCommunity: "🤝 Comunitate", ctaContact: "✉️ Contact",
    },
    toolkitPage: {
      badge: "🤖 Instrument AI educațional", title: "Toolkit și instrument AI de conștientizare a discursului de ură", sub: "Descărcați toolkit-ul nostru bazat pe dovezi și explorați instrumentul nostru educațional AI.",
      demoLabel: "Demonstrație interactivă", demoTitle: "Invăță să recunoști ura online",
      demoSub: "Citește fiecare exemplu, gândește-te la categorie, apoi dezvăluie analiza.",
      revealBtn: "🔍 Dezvăluie analiza", prevBtn: "← Anterior", nextBtn: "Următorul exemplu →", startModulesBtn: "📚 Începe modulele de învățare",
      exampleOf: "Exemplu", howCategorise: "Cum ai clasifica acest conținut?", whatCanYouDo: "💡 CE POȚI FACE?",
      downloadsLabel: "Descărcări gratuite", downloadsTitle: "Descărcați Toolkit-ul SpeakUP",
      downloadsSub: "Toate resursele sunt gratuite și licențiate pentru uz educațional.", downloadBtn: "📥 Descărcă",
      ethicalLabel: "Utilizare etică și sigură", tryAIBtn: "🤖 Încearcă demonstrația AI", downloadToolkitBtn: "📥 Descărcă Toolkit-ul",
      tryFullBtn: "Instrumentul AI complet →",
    },
    communityPage: {
      badge: "✊ Acțiuni comunitare", title: "Împreună putem face spațiile online mai sigure", sub: "Semnează Pactul Anti-Ură. Acționează. Împărtășește-ți povestea.",
      tabPact: "✍️ Semnează Pactul", tabActions: "🎯 Acționează", tabStories: "💬 Povești",
      pactTitle: "Pactul Anti-Ură", signPactTitle: "Semnează Pactul",
      signPactSub: "Alătură-te miilor de tineri din Europa care se angajează pentru spații digitale mai sigure.",
      nameLabel: "Nume complet *", emailLabel: "Adresă de e-mail *", cityLabel: "Oraș *", countryLabel: "Țară *", roleLabel: "Sunt un/o... (opțional)",
      namePlaceholder: "Numele tău", emailPlaceholder: "tu@exemplu.ro", cityPlaceholder: "Orașul tău",
      roleOptions: ["Prefer să nu spun", "Tânăr/ă (sub 25 de ani)", "Educator / Profesor/ă", "ONG / Societate civilă", "Student/ă universitar/ă", "Altul/Alta"],
      consentLabel: "Sunt de acord cu Pactul Anti-Ură și înțeleg că datele mele vor fi folosite doar în acest scop. *",
      displayLabel: "Sunt de acord ca prenumele și țara mea să fie afișate pe zidul public al semnatarilor.",
      signBtn: "✊ Semnează Pactul Anti-Ură",
      successTitle: "Ai semnat pactul!", successSub: "Mulțumim că te-ai ridicat împotriva urii.", takeActionBtn: "Acționează →",
      heroStats: ["Semnatari ai Pactului", "Țări", "Acțiuni comunitare", "Povești ale tinerilor"],
      selectCountry: "Selectează țara ta", startLearnBtn: "📚 Învață", signatoryCount: "persoane au semnat deja din 5+ țări", startBtn: "Start →",
      signatoryWall: "Zidul Semnatarilor", actionTitle: "Acționează împotriva urii",
      actionSub: "Acțiunile mici contează. Alege una și share cu #SpeakUPagainstHate.",
      storiesTitle: "Povești ale tinerilor", storiesSub: "Experiențe reale ale tinerilor din toată Europa.",
      shareTitle: "Împărtășește-ți povestea", shareSub: "Ai asistat sau ai contracarat ura online? Experiența ta poate inspira pe alții.",
      shareBtn: "Trimite povestea ta",
      gdprNote: "🔒 Prin semnare, ești de acord ca numele tău (dacă ai consimțit) să fie afișat pe zidul public al semnatarilor. E-mailul tău va fi folosit doar pentru confirmare. Conform GDPR.",
      pactText: "Noi, cei de mai jos, ne angajăm să luăm atitudine împotriva discursului de ură online în comunitățile noastre digitale.\n\nNe angajăm să:\n• Recunoaștem discursul de ură atunci când îl întâlnim — inclusiv formele sale codificate și subtile\n• Nu rămânem tăcuți când ura este îndreptată spre alții în comunitățile noastre\n• Raportăm conținutul de ură prin instrumentele disponibile ale platformelor și canalele legale\n• Sprijinim victimele discursului de ură cu solidaritate și grijă\n• Alegem cuvinte care construiesc respect și incluziune, nu diviziune\n• Nu distribuim, amplificăm sau apreciem niciodată conținut de ură — nici măcar \"ca o glumă\"\n• Ne educăm pe noi și pe alții cu privire la daunele discursului de ură\n• Susținem demnitatea egală a fiecărei persoane, indiferent de identitatea sa\n\nCredem că spațiile digitale mai sigure sunt posibile — și că fiecare dintre noi are un rol de jucat în crearea lor.",
      actions: [
        { title: "Creează o postare contra-narrativă", desc: "Proiectează o postare pe rețelele sociale care promovează incluziunea și respectul digital. Share cu #SpeakUPagainstHate.", tag: "Creativ" },
        { title: "Organizează o discuție școlară", desc: "Facilitează o discuție în clasă despre discursul de ură cu colegii tăi, folosind ghidul nostru gratuit de facilitare.", tag: "Educație" },
        { title: "Recrutează 5 semnatari ai Pactului", desc: "Distribuie Pactul Anti-Ură la 5 prieteni și invită-i să semneze. Fiecare semnătură contează.", tag: "Comunitate" },
        { title: "Împărtășește-ți povestea", desc: "Spune-ne despre o dată când ai asistat la sau ai contracarat ura online. Povestea ta poate inspira pe alții.", tag: "Povești" },
      ],
      stories: [
        { name: "Maria, 19", country: "România 🇷🇴", story: "Am văzut un coleg vizat într-un grup de chat din cauza religiei sale. La început nu știam ce să fac, dar după ce am folosit SpeakUP am găsit curajul să vorbesc privat și să raportez mesajele." },
        { name: "Jakub, 22", country: "Republica Cehă 🇨🇿", story: "Obișnuiam să derulesc comentariile de ură gândind că nu sunt problema mea. Acum înțeleg că tăcerea este și ea o alegere — și de obicei cea greșită." },
        { name: "Kristiina, 17", country: "Estonia 🇪🇪", story: "Școala noastră a organizat o sesiune SpeakUP și am făcut un Pact Anti-Ură împreună. Mi s-a părut că clasa noastră a devenit mai apropiată și mai conștientă de experiențele celorlalți." },
      ],
    },
    educatorsPage: {
      badge: "👩‍🏫 Zona educatorilor", title: "Instrumente pentru educatorii care vor să facă diferența", sub: "Planuri de lecție gratuite, ghiduri de atelier și resurse de dezvoltare profesională.",
      heroStats: ["Resurse gratuite", "Limbi", "Cărți de activități", "Întotdeauna"],
      curriculumLabel: "Curriculum gata pregătit", curriculumTitle: "6 module — gata de utilizat în clasa dvs.",
      curriculumSub: "Fiecare modul include planuri de lecție, ghiduri, prezentări și instrumente de evaluare.",
      curriculumDesc1: "Fiecare modul SpeakUP vine cu un plan de lecție și materiale suport.",
      curriculumDesc2: "Toate modulele sunt proiectate pentru aproximativ 60–90 de minute și includ întrebări de discuție și un test.",
      resourceLibLabel: "Biblioteca de resurse", resourceLibTitle: "Descărcați materiale gratuite pentru educatori", downloadBtn: "📥 Descărcă",
      filterAll: "Toate", moduleLabel: "Modul",
      faqTitle: "Întrebări frecvente",
      joinTitle: "Alătură-te Comunității de Educatori", joinSub: "Conectați-vă cu educatori din Polonia, Estonia, Republica Cehă și România.",
      requestAccessBtn: "Solicită acces", previewBtn: "Previzualizează toate modulele",
    },
    contactPage: {
      badge: "✉️ Contactați-ne", title: "Contact", sub: "Întrebări, parteneriate, solicitări media sau preocupări de protecție — suntem aici.",
      send: "📨 Trimite mesajul", sending: "⏳ Se trimite...", success: "Mesaj trimis!",
      successSub: "Vă mulțumim. Am primit mesajul dvs. și vă vom răspunde în 3 zile lucrătoare.", sendAnother: "Trimite un alt mesaj",
      quickContact: "Contact rapid", followProject: "Urmează proiectul", contactPartner: "Contactați direct un partener",
      general: "General", mediaPress: "Media și presă", safeguardingLabel: "Protecția copilului",
      sendMessage: "Trimiteți-ne un mesaj", formRequired: "Câmpurile marcate cu * sunt obligatorii. Răspundem în 3 zile lucrătoare.",
      nameLabel: "Nume complet *", emailLabel: "Adresă de e-mail *", orgLabel: "Organizație", countryLabel: "Țară", reasonLabel: "Motivul contactului *", messageLabel: "Mesaj *",
      namePlaceholder: "Numele dumneavoastră", orgPlaceholder: "Școală, ONG, Universitate...", msgPlaceholder: "Spuneți-ne cum vă putem ajuta...",
      selectCountry: "Selectați țara",
      reasons: ["Cerere generală", "Parteneriat educațional", "Parteneriat de proiect", "Media și presă", "Împărtășește povestea", "Problemă tehnică", "Protecția copilului"],
      consentLabel: "Sunt de acord ca datele mele să fie prelucrate în conformitate cu Politica de Confidențialitate în scopul răspunsului la această solicitare. *",
      gdprNote: "🔒 Datele dvs. sunt protejate în conformitate cu GDPR. Nu vom împărți niciodată informațiile dvs. cu terțe părți.",
      safeguardingNote: "🛡️ Preocupare privind protecția? În caz de urgență, contactați serviciile de urgență locale. Răspundem la solicitările de protecție în 24 de ore.",
      errorMsg: "❌ Ceva nu a mers bine. Vă rugăm să încercați din nou sau să ne trimiteți un e-mail direct.",
    },
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
    learnPage: {
      badge: "📚 Vzdělávací prostor pro mládež", title: "6 bezplatných modulů.\n5 jazyků.", sub: "Tvůj průvodce krok za krokem k pochopení, rozpoznání a čelení online nenávistným projevům.",
      moduleTitles: ["Co je online nenávistný projev?", "Rozpoznávání online nenávisti", "Bezpečná reakce", "Hlášení a ochrana sebe", "Vytváření kontranaratívů", "Digitální občanství a práva"],
      moduleTags: ["Základ", "Uvědomění", "Dovednosti", "Akce", "Kreativita", "Práva"],
      moduleDescs: [
        "Pochop, co je nenávistný projev, jaké má formy a proč je důležitý.",
        "Rozpoznej zakódovaný jazyk a jemnou diskriminaci na základě případových studií ze sociálních sítí.",
        "Nauč se strategie bezpečného reagování na online nenávist bez eskalace situace.",
        "Znáš svá práva. Nauč se dokumentovat a hlásit nenávistné projevy na platformách a právními kanály.",
        "Rozvíjej kreativní dovednosti pro tvorbu pozitivních kontranaratívů podporujících inkluzi.",
        "Pochop svá digitální práva a povinnosti a jak být aktivním etickým občanem online."
      ],
      levels: { beginner: "Začátečník", intermediate: "Střední úroveň", advanced: "Pokročilý" },
      learningPath: "Cesta učení:", certLabel: "Certifikát",
      certTitle: "Dokončete všech 6 modulů a získejte certifikát",
      certDesc: "Bezplatný digitální certifikát uznávající váš závazek bojovat s online nenávistným projevem — sdílitelný na LinkedIn a sociálních sítích.",
      beginBtn: "🚀 Začít Modul 01", startBtn: "Začít →",
    },
    aboutPage: {
      badge: "🇪🇺 Projekt CERV · 2024–2026", title: "O projektu SpeakUP against Hate", sub: "24měsíční nadnárodní projekt financovaný programem CERV Evropské unie.",
      problemLabel: "Problém", problemTitle: "Online nenávist roste. Nástroje pro boj s ní — ne.",
      problemDesc1: "Mladí lidé v Evropě se denně setkávají s nenávistnými projevy na sociálních sítích, v hernch komunitách a chatovacích aplikacích.",
      problemDesc2: "Dostupné zdroje jsou často jednojazyčné, orientované na dospělé nebo odtržené od realit digitální kultury.",
      solutionLabel: "Naše řešení", solutionTitle: "Vícejazyčná platforma vytvořená pro skutečnou změnu.",
      solutionDesc: "SpeakUP against Hate vytváří vzdělávací platformu dostupnou v 5 jazycích EU — zdarma.",
      problemPoints: ["Nenávistné projevy jsou normalizovány v mnoha online prostorech", "Mládeži chybí nástroje podložené důkazy", "Pedagogové potřebují praktické materiály do tříd", "Většina zdrojů je pouze v angličtině"],
      solutionPoints: ["6 vzdělávacích modulů pro mládež (EN/PL/RO/CZ/ET)", "Materiály pro pedagogy, plány hodin a průvodci", "Nástroj AI pro uvědomění o nenávistném projevu", "Komunitní akce, Pakty proti nenávisti, mikrokampaně", "Politické dokumenty pro evropské a národní rozhodovatelé"],
      cervTitle: "Spolufinancováno Evropskou unií",
      cervDesc: "Tento projekt je financován v rámci programu CERV (Občané, rovnost, práva a hodnoty).",
      cervDisclaimer: "Obsah této platformy představuje výhradně pohledy autorů a je jejich výlučnou zodpovědností.",
      timelineLabel: "Harmonogram projektu", timelineTitle: "24měsíční plán realizace",
      partnerLabel: "Projektové konsorcium", partnerTitle: "5 partnerů. 4 země. Jedna mise.", coordinatorLabel: "Koordinátor",
      cta: "Jste připraven/a se zapojit?", ctaLearn: "📚 Začít učit se", ctaCommunity: "🤝 Komunita", ctaContact: "✉️ Kontakt",
    },
    toolkitPage: {
      badge: "🤖 Vzdělávací nástroj AI", title: "Sada nástrojů a AI nástroj pro uvědomění o nenávistných projevech", sub: "Stáhněte si naši sadu nástrojů podloženou důkazy a prozkoumejte náš vzdělávací nástroj AI.",
      demoLabel: "Interaktivní demo", demoTitle: "Naučte se rozpoznávat online nenávist",
      demoSub: "Přečtěte každý příklad, zamyslete se nad kategorií, poté odhalte analýzu.",
      revealBtn: "🔍 Odhalit analýzu", prevBtn: "← Předchozí", nextBtn: "Další příklad →", startModulesBtn: "📚 Začít výukové moduly",
      exampleOf: "Příklad", howCategorise: "Jak byste tuto věc kategorizoval/a?", whatCanYouDo: "💡 CO MŮŽETE UDĚLAT?",
      downloadsLabel: "Bezplatné stahování", downloadsTitle: "Stáhněte si sadu nástrojů SpeakUP",
      downloadsSub: "Všechny zdroje jsou zdarma a licencovány pro vzdělávací použití.", downloadBtn: "📥 Stáhnout",
      ethicalLabel: "Etické a bezpečné použití", tryAIBtn: "🤖 Vyzkoušet demo AI", downloadToolkitBtn: "📥 Stáhnout sadu nástrojů",
      tryFullBtn: "Plný nástroj AI →",
    },
    communityPage: {
      badge: "✊ Komunitní akce", title: "Společně můžeme online prostory udělat bezpečnějšími", sub: "Podpiš Pakt proti nenávisti. Jednej. Sdílej svůj příběh.",
      tabPact: "✍️ Podepsat Pakt", tabActions: "🎯 Jednej", tabStories: "💬 Příběhy",
      pactTitle: "Pakt proti nenávisti", signPactTitle: "Podepsat Pakt",
      signPactSub: "Připoj se k tisícům mladých lidí z Evropy, kteří se zavazují k bezpečnějším digitálním prostorům.",
      nameLabel: "Celé jméno *", emailLabel: "E-mailová adresa *", cityLabel: "Město *", countryLabel: "Země *", roleLabel: "Jsem... (nepovinné)",
      namePlaceholder: "Vaše jméno", emailPlaceholder: "vy@příklad.cz", cityPlaceholder: "Vaše město",
      roleOptions: ["Raději neuvádím", "Mladý/á člověk/žena (do 25 let)", "Pedagog/Učitel/ka", "NGO / Občanská společnost", "Student/ka", "Jiné"],
      consentLabel: "Souhlasím s Paktem proti nenávisti a chápu, že moje data budou použita pouze k tomuto účelu. *",
      displayLabel: "Souhlasím s tím, aby mé jméno a země byly zobrazeny na veřejné zdi signatářů.",
      signBtn: "✊ Podepsat Pakt proti nenávisti",
      successTitle: "Podepsal/a jste pakt!", successSub: "Děkujeme, že se stavíte proti nenávisti.", takeActionBtn: "Jednejte →",
      heroStats: ["Osob podepsalo Pakt", "Země", "Komunitní akce", "Příběhy mládeže"],
      selectCountry: "Vyberte zemi", startLearnBtn: "📚 Začít se učit", signatoryCount: "lidí již podepsalo z 5+ zemí", startBtn: "Začít →",
      signatoryWall: "Zeď signatářů", actionTitle: "Jednej proti nenávisti",
      actionSub: "Malé akce se sčítají. Vyber jednu a sdílej s #SpeakUPagainstHate.",
      storiesTitle: "Příběhy mládeže", storiesSub: "Skutečné zkušenosti mladých lidí z celé Evropy.",
      shareTitle: "Sdílej svůj příběh", shareSub: "Byl/a jsi svědkem nebo jsi čelil/a online nenávisti? Tvá zkušenost může inspirovat ostatní.",
      shareBtn: "Odeslat svůj příběh",
      gdprNote: "🔒 Podpisem souhlasíte s tím, že vaše jméno (pokud jste souhlasil/a) bude zobrazeno na veřejné zdi signatářů. Váš e-mail bude použit pouze pro potvrzení. V souladu s GDPR.",
      pactText: "My, níže podepsaní, se zavazujeme mluvit nahlas proti nenávistným projevům v našich digitálních komunitách.\n\nZavazujeme se:\n• Rozpoznávat nenávistné projevy, kdykoli se s nimi setkáme — včetně zakódovaných a subtilních forem\n• Nemlčet, když je nenávist namířena na ostatní v našich komunitách\n• Hlásit nenávistný obsah prostřednictvím dostupných nástrojů platforem a právních kanálů\n• Podporovat oběti nenávistných projevů se solidaritou a péčí\n• Vybírat slova, která budují respekt a inkluzi, ne rozdělení\n• Nikdy nesdílet, nezesilovat ani nelíbovat nenávistný obsah — ani \"jako vtip\"\n• Vzdělávat sebe i ostatní o škodách nenávistných projevů\n• Stát za rovnou důstojností každé osoby bez ohledu na její identitu\n\nVěříme, že bezpečnější digitální prostory jsou možné — a že každý z nás má roli v jejich vytváření.",
      actions: [
        { title: "Vytvoř kontranaratívní příspěvek", desc: "Navrhni příspěvek na sociálních sítích propagující inkluzi a digitální respekt. Sdílej s #SpeakUPagainstHate.", tag: "Kreativita" },
        { title: "Zorganizuj školní diskusi", desc: "Facilituj třídní diskusi o nenávistných projevech se spolužáky pomocí našeho bezplatného průvodce.", tag: "Vzdělávání" },
        { title: "Získej 5 signatářů Paktu", desc: "Sdílej Pakt proti nenávisti s 5 přáteli a pozvi je k podpisu. Každý podpis se počítá.", tag: "Komunita" },
        { title: "Sdílej svůj příběh", desc: "Řekni nám o době, kdy jsi byl/a svědkem nebo čelil/a online nenávisti. Tvůj příběh může inspirovat ostatní.", tag: "Příběhy" },
      ],
      stories: [
        { name: "Maria, 19", country: "Rumunsko 🇷🇴", story: "Viděla jsem spolužáka terčem v skupinovém chatu kvůli jeho náboženství. Zpočátku jsem nevěděla, co dělat, ale po použití SpeakUP jsem našla odvahu promluvit soukromě a zprávy nahlásit." },
        { name: "Jakub, 22", country: "Česká republika 🇨🇿", story: "Dříve jsem přeskakoval nenávistné komentáře s myšlenkou, že to není můj problém. Teď chápu, že mlčení je také volba — a obvykle špatná." },
        { name: "Kristiina, 17", country: "Estonsko 🇪🇪", story: "Naše škola zorganizovala session SpeakUP a společně jsme uzavřeli Pakt proti nenávisti. Měla jsem pocit, že naše třída se stala bližší a více si uvědomuje zkušenosti ostatních." },
      ],
    },
    educatorsPage: {
      badge: "👩‍🏫 Prostor pro pedagogy", title: "Nástroje pro pedagogy, kteří chtějí změnit svět", sub: "Bezplatné plány hodin, průvodce workshopy a materiály pro profesní rozvoj.",
      heroStats: ["Bezplatné zdroje", "Jazyky", "Karty aktivit", "Vždy"],
      curriculumLabel: "Hotový vzdělávací program", curriculumTitle: "6 modulů — připravených k použití ve třídě",
      curriculumSub: "Každý modul obsahuje plány hodin, průvodce, prezentace a hodnotící nástroje.",
      curriculumDesc1: "Každý modul SpeakUP obsahuje plán hodiny a podpůrné materiály.",
      curriculumDesc2: "Všechny moduly jsou navrženy na cca 60–90 minut a obsahují diskusní otázky a kviz.",
      resourceLibLabel: "Knihovna zdrojů", resourceLibTitle: "Stáhněte si bezplatné materiály pro pedagogy", downloadBtn: "📥 Stáhnout",
      filterAll: "Vše", moduleLabel: "Modul",
      faqTitle: "Nejčastější dotazy",
      joinTitle: "Připojte se ke komunitě pedagogů", joinSub: "Spojte se s pedagogy z Polska, Estonska, České republiky a Rumunska.",
      requestAccessBtn: "Požádat o přístup", previewBtn: "Prohlédnout všechny moduly",
    },
    contactPage: {
      badge: "✉️ Kontaktujte nás", title: "Kontakt", sub: "Dotazy, partnerství, tiskové dotazy nebo obavy o bezpečnost — jsme zde.",
      send: "📨 Odeslat zprávu", sending: "⏳ Odesílání...", success: "Zpráva odeslána!",
      successSub: "Děkujeme. Vaši zprávu jsme obdrželi a odpovíme do 3 pracovních dnů.", sendAnother: "Odeslat další zprávu",
      quickContact: "Rychlý kontakt", followProject: "Sleduj projekt", contactPartner: "Kontaktujte přímo partnera",
      general: "Obecný", mediaPress: "Média a tisk", safeguardingLabel: "Ochrana dětí",
      sendMessage: "Napište nám", formRequired: "Pole označená * jsou povinná. Odpovídáme do 3 pracovních dnů.",
      nameLabel: "Celé jméno *", emailLabel: "E-mailová adresa *", orgLabel: "Organizace", countryLabel: "Země", reasonLabel: "Důvod kontaktu *", messageLabel: "Zpráva *",
      namePlaceholder: "Vaše jméno", orgPlaceholder: "Škola, NGO, Univerzita...", msgPlaceholder: "Řekněte nám, jak vám můžeme pomoci...",
      selectCountry: "Vyberte zemi",
      reasons: ["Obecný dotaz", "Vzdělávací partnerství", "Projektové partnerství", "Média a tisk", "Sdílet svůj příběh", "Technický problém", "Ochrana dětí"],
      consentLabel: "Souhlasím se zpracováním svých údajů v souladu se Zásadami ochrany soukromí za účelem odpovědi na tento dotaz. *",
      gdprNote: "🔒 Vaše data jsou chráněna v souladu s GDPR. Nikdy nebudeme sdílet vaše informace s třetími stranami.",
      safeguardingNote: "🛡️ Zájem o ochranu dětí? V naléhavých případech se obraťte přímo na místní záchranné služby. Na dotazy ohledně ochrany odpovídáme do 24 hodin.",
      errorMsg: "❌ Něco se pokazilo. Zkuste to prosím znovu nebo nám napište přímo e-mailem.",
    },
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
    learnPage: {
      badge: "📚 Noorte õppimisvaldkond", title: "6 tasuta moodulit.\n5 keelt.", sub: "Sinu samm-sammuline juhend veebis esineva vaenukõne mõistmiseks, äratundmiseks ja sellele vastu seismiseks.",
      moduleTitles: ["Mis on veebis leviv vaenukõne?", "Vaenukõne tuvastamine veebis", "Ohutu reageerimine", "Teatamine ja enda kaitsmine", "Vastunäitluste loomine", "Digitaalne kodakondsus ja õigused"],
      moduleTags: ["Alustamine", "Teadlikkus", "Oskused", "Tegevus", "Loovus", "Õigused"],
      moduleDescs: [
        "Mõista, mis on vaenukõne, selle erinevad vormid ja miks see on oluline.",
        "Tunne ära kodeeritud keel ja peen diskrimineerimine sotsiaalmeedia juhtumite põhjal.",
        "Õpi tõenduspõhiseid strateegiaid veebis leviva vaenukõne ohutult käsitlemiseks.",
        "Tunne oma õigusi. Õpi dokumenteerima ja teatama vaenukõnest platvormidel ja õiguslike kanalite kaudu.",
        "Arendage loovaid oskusi positiivsete vastunäitluste loomiseks, mis edendavad kaasatust.",
        "Mõista oma digitaalseid õigusi ja kohustusi ning kuidas olla aktiivne, eetiline kodanik veebis."
      ],
      levels: { beginner: "Algaja", intermediate: "Kesktase", advanced: "Edasijõudnu" },
      learningPath: "Õpperada:", certLabel: "Sertifikaat",
      certTitle: "Läbige kõik 6 moodulit ja teenige sertifikaat",
      certDesc: "Tasuta digitaalne sertifikaat, mis tunnustab teie pühendumust veebis leviva vaenukõne vastu võitlemisel — jagatav LinkedInis ja sotsiaalvõrgustikes.",
      beginBtn: "🚀 Alusta Moodul 01", startBtn: "Alusta →",
    },
    aboutPage: {
      badge: "🇪🇺 CERV projekt · 2024–2026", title: "SpeakUP against Hate projektist", sub: "24-kuuline riikidevaheline projekt, mida rahastab Euroopa Liidu CERV programm.",
      problemLabel: "Probleem", problemTitle: "Vaenukõne veebis kasvab. Selle vastu võitlemise vahendid ei kasva.",
      problemDesc1: "Euroopa noored kohtavad igapäevaselt vaenukõnet sotsiaalmeedias, mängukogukondades ja sõnumirakendustes.",
      problemDesc2: "Olemasolevad ressursid on sageli ühekeelsed, täiskasvanutele suunatud või digitaalkultuurist lahutatud.",
      solutionLabel: "Meie lahendus", solutionTitle: "Mitmekeelne platvorm, mis on loodud tõeliseks muutuseks.",
      solutionDesc: "SpeakUP against Hate ehitab haridusplatvormi, mis on tasuta kättesaadav 5 EL keeles.",
      problemPoints: ["Vaenukõne on normaliseeritud paljudes veebikeskkondades", "Noortel puuduvad tõenduspõhised, vanusele vastavad vahendid", "Õpetajatel on vaja praktilisi klassiruumi ressursse", "Enamik ressursse on ainult inglise keeles"],
      solutionPoints: ["6 õppemoodulit noortele (EN/PL/RO/CZ/ET)", "Pedagoogilised ressursid, tunnikavad ja töötoa juhendid", "AI-toetatud vaenukõne teadlikkuse tõstmise tööriist", "Kogukonna tegevused, Anti-Hate Paktid", "Poliitikabriifid Euroopa ja riiklikele otsustajatele"],
      cervTitle: "Kaasrahastab Euroopa Liit",
      cervDesc: "Seda projekti rahastatakse CERV programmi (Kodanikud, võrdõiguslikkus, õigused ja väärtused) raames.",
      cervDisclaimer: "Platvormi sisu väljendab ainult autorite seisukohti ning on nende ainuvästutus.",
      timelineLabel: "Projekti ajakava", timelineTitle: "24-kuuline rakendusplaan",
      partnerLabel: "Projekti konsortsium", partnerTitle: "5 partnerit. 4 riiki. Üks missioon.", coordinatorLabel: "Koordinaator",
      cta: "Valmis osalema?", ctaLearn: "📚 Alusta õppimist", ctaCommunity: "🤝 Kogukond", ctaContact: "✉️ Kontakt",
    },
    toolkitPage: {
      badge: "🤖 Hariduslik AI tööriist", title: "Tööriistad ja AI vaenukõne teadlikkuse tõstmiseks", sub: "Laadi alla meie tõenduspõhine tööriistad ja uuri meie hariduslikku AI tööriista.",
      demoLabel: "Interaktiivne demo", demoTitle: "Õpi tuvastama veebis levivat vihkamist",
      demoSub: "Lugege iga näidet, mõelge kategooria peale, seejärel avage analüüs.",
      revealBtn: "🔍 Ava analüüs", prevBtn: "← Eelmine", nextBtn: "Järgmine näide →", startModulesBtn: "📚 Alusta õppemooduleid",
      exampleOf: "Näide", howCategorise: "Kuidas liigitaksite seda sisu?", whatCanYouDo: "💡 MIDA SAATE TEHA?",
      downloadsLabel: "Tasuta allalaadimised", downloadsTitle: "Laadige alla SpeakUP tööriistad",
      downloadsSub: "Kõik ressursid on tasuta ja litsentsitud hariduslikuks kasutamiseks.", downloadBtn: "📥 Laadi alla",
      ethicalLabel: "Eetiline ja ohutu kasutamine", tryAIBtn: "🤖 Proovi AI tööriista dem", downloadToolkitBtn: "📥 Laadi tööriistad alla",
      tryFullBtn: "Täis AI tööriist →",
    },
    communityPage: {
      badge: "✊ Kogukonna tegevused", title: "Koos saame veebiruumi turvalisemaks muuta", sub: "Kirjuta alla Anti-Hate Paktile. Tegutse. Jaga oma lugu.",
      tabPact: "✍️ Kirjuta alla Paktile", tabActions: "🎯 Tegutse", tabStories: "💬 Lood",
      pactTitle: "Anti-Hate Pakt", signPactTitle: "Allkirjasta Pakt",
      signPactSub: "Liitu tuhandete noorte inimestega üle Euroopa, kes kohustuvad looma turvalisemaid digitaalseid ruume.",
      nameLabel: "Täisnimi *", emailLabel: "E-posti aadress *", cityLabel: "Linn *", countryLabel: "Riik *", roleLabel: "Mina olen... (valikuline)",
      namePlaceholder: "Teie nimi", emailPlaceholder: "sina@näide.ee", cityPlaceholder: "Teie linn",
      roleOptions: ["Ei soovi öelda", "Noor inimene (alla 25 a.)", "Õpetaja / Pedagoog", "MTÜ / Kodanikuühiskond", "Üliõpilane", "Muu"],
      consentLabel: "Nõustun Anti-Hate Paktiga ja saan aru, et minu andmeid kasutatakse ainult sel eesmärgil. *",
      displayLabel: "Nõustun, et minu eesnimi ja riik kuvatakse avalikul allakirjutajate seinale.",
      signBtn: "✊ Allkirjasta Anti-Hate Pakt",
      successTitle: "Kirjutasite paktile alla!", successSub: "Täname, et seisate vaenukõne vastu.", takeActionBtn: "Tegutse →",
      heroStats: ["Pakti allakirjutajad", "Riigid", "Kogukonna tegevused", "Noorte lood"],
      selectCountry: "Vali oma riik", startLearnBtn: "📚 Alusta õppimist", signatoryCount: "inimest on juba alla kirjutanud 5+ riigist", startBtn: "Alusta →",
      signatoryWall: "Allakirjutajate sein", actionTitle: "Tegutse vaenukõne vastu",
      actionSub: "Väikesed teod liituvad. Valige üks ja jagage kasutades #SpeakUPagainstHate.",
      storiesTitle: "Noorte lood", storiesSub: "Tõelikud kogemused noorte inimestelt üle Euroopa.",
      shareTitle: "Jaga oma lugu", shareSub: "Kas olete tunnistanud veebis vaenukõnet? Teie kogemus võib teisi inspireerida.",
      shareBtn: "Saada oma lugu",
      gdprNote: "🔒 Allkirjastamisega nõustute, et teie nimi (kui olete nõus) kuvatakse avalikul allakirjutajate seinale. Teie e-posti aadressi kasutatakse ainult kinnitamiseks. GDPR-iga kooskõlas.",
      pactText: "Meie, allakirjutanud, kohustume vaenukõne vastu sõna võtma oma digitaalsetes kogukondades.\n\nMe lubame:\n• Tuvastada vaenukõnet alati, kui sellega kokku puutume — kaasa arvatud kodeeritud ja peened vormid\n• Mitte vaikida, kui viha on suunatud teistele meie kogukondades\n• Teatada vihkavast sisust kättesaadavate platvormivahendite ja õiguslike kanalite kaudu\n• Toetada vaenukõne ohvreid solidaarsuse ja hoolitsusega\n• Valida sõnu, mis ehitavad austust ja kaasatust, mitte lõhet\n• Mitte kunagi jagada, võimendada ega meeldida märkida vihkavat sisu — isegi mitte \"naljana\"\n• Harida ennast ja teisi vaenukõne kahjulikkuse osas\n• Seista iga inimese võrdse väärikuse eest, olenemata nende identiteedist\n\nUsume, et turvalisemad digitaalruumid on võimalikud — ja et igaühel meist on roll nende loomisel.",
      actions: [
        { title: "Loo vastunäitlik postitus", desc: "Kujunda sotsiaalmeedia postitus, mis edendab kaasatust ja digitaalset austust. Jaga #SpeakUPagainstHate.", tag: "Loovus" },
        { title: "Korraldage kooli arutelu", desc: "Juhenda klassiarutelu vaenukõne teemal kaaslastega, kasutades meie tasuta juhendaja juhendit.", tag: "Haridus" },
        { title: "Värbake 5 Pakti allakirjutajat", desc: "Jaga Anti-Hate Pakti 5 sõbraga ja kutsu neid alla kirjutama. Iga allkiri loeb.", tag: "Kogukond" },
        { title: "Jaga oma lugu", desc: "Räägi meile ajast, mil oled tunnistanud või vastu seisnud veebis levivale vihkamisele. Sinu lugu võib teisi inspireerida.", tag: "Lood" },
      ],
      stories: [
        { name: "Maria, 19", country: "Rumeenia 🇷🇴", story: "Nägin, kuidas kaasõpilast sihtis grupichat tema religiooni tõttu. Alguses ei teadnud, mida teha, kuid pärast SpeakUP kasutamist leidsin julguse privaatselt rääkida ja sõnumeid teatada." },
        { name: "Jakub, 22", country: "Tšehhi 🇨🇿", story: "Varem kerisin vihkavatest kommentaaridest mööda, arvates, et see pole minu probleem. Nüüd mõistan, et vaikimine on samuti valik — ja tavaliselt vale valik." },
        { name: "Kristiina, 17", country: "Eesti 🇪🇪", story: "Meie kool korraldas SpeakUP seansi ja me tegime koos Anti-Hate Pakti. Tundus, et meie klass sai lähemaks ja teadlikumaks üksteise kogemustest." },
      ],
    },
    educatorsPage: {
      badge: "👩‍🏫 Õpetajate valdkond", title: "Vahendid õpetajatele, kes soovivad muutust luua", sub: "Tasuta tunnikavad, töötoa juhendid ja professionaalse arengu ressursid.",
      heroStats: ["Tasuta ressursid", "Keeled", "Tegevuskaardid", "Alati"],
      curriculumLabel: "Valmis õppekava", curriculumTitle: "6 moodulit — valmis kasutamiseks teie klassiruumis",
      curriculumSub: "Iga moodul sisaldab tunnikavasid, juhendeid, slaidikavasid ja hindamisvahendeid.",
      curriculumDesc1: "Iga SpeakUP moodul sisaldab tunnipappi ja abimaterjale.",
      curriculumDesc2: "Kõik moodulid on mõeldud u. 60–90 minutiks ning sisaldavad arutlusküsimusi ja viktoriini.",
      resourceLibLabel: "Ressursside raamatukogu", resourceLibTitle: "Laadige alla tasuta pedagoogilised materjalid", downloadBtn: "📥 Laadi alla",
      filterAll: "Kõik", moduleLabel: "Moodul",
      faqTitle: "Korduma kippuvad küsimused",
      joinTitle: "Liitu pedagoogide kogukonnaga", joinSub: "Ühendage end pedagoogidega Poolast, Eestist, Tšehhi Vabariigist ja Rumeeniast.",
      requestAccessBtn: "Taotle juurdepääsu", previewBtn: "Vaata kõiki mooduleid",
    },
    contactPage: {
      badge: "✉️ Võtke meiega ühendust", title: "Kontakt", sub: "Küsimused, partnerlused, meediapäringud või kaitsega seotud mured — oleme siin.",
      send: "📨 Saada sõnum", sending: "⏳ Saatmine...", success: "Sõnum saadetud!",
      successSub: "Täname. Oleme teie sõnumi kätte saanud ja vastame 3 tööpäeva jooksul.", sendAnother: "Saada teine sõnum",
      quickContact: "Kiirkontakt", followProject: "Jälgi projekti", contactPartner: "Võtke otse partneriga ühendust",
      general: "Üldine", mediaPress: "Meedia ja ajakirjandus", safeguardingLabel: "Laste kaitse",
      sendMessage: "Saatke meile sõnum", formRequired: "Tärniga * märgitud väljad on kohustuslikud. Vastame 3 tööpäeva jooksul.",
      nameLabel: "Täisnimi *", emailLabel: "E-posti aadress *", orgLabel: "Organisatsioon", countryLabel: "Riik", reasonLabel: "Kontakti põhjus *", messageLabel: "Sõnum *",
      namePlaceholder: "Teie nimi", orgPlaceholder: "Kool, MTÜ, Ülikool...", msgPlaceholder: "Rääkige meile, kuidas saame teid aidata...",
      selectCountry: "Valige riik",
      reasons: ["Üldine päring", "Hariduspartnerlus", "Projektipartnerlus", "Meedia ja ajakirjandus", "Jaga oma lugu", "Tehniline probleem", "Laste kaitsega seotud mure"],
      consentLabel: "Nõustun oma andmete töötlemisega vastavalt privaatsuspoliitikale selle päringu vastamiseks. *",
      gdprNote: "🔒 Teie andmed on kaitstud vastavalt GDPR-ile. Me ei jaga teie teavet kunagi kolmandate isikutega.",
      safeguardingNote: "🛡️ Laste kaitsega seotud mure? Kiireloomulistel juhtudel võtke otse ühendust kohaliku häirekeskusega. Vastame kaitsepäringutele 24 tunni jooksul.",
      errorMsg: "❌ Midagi läks valesti. Proovige uuesti või kirjutage meile otse e-postiga.",
    },
  },
};
