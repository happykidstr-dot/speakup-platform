const fs = require('fs');
let code = fs.readFileSync('G:\\Drive\'ım\\YEDEK1404-Project Factory AI Workspace\\pfai-workspace\\speakup-platform\\lib\\translations.ts', 'utf8');

code = code.replace(
  'nav: { learn: string; educators: string; toolkit: string; community: string; about: string; startLearning: string };',
  'nav: { about: string; learn: string; educators: string; toolkit: string; community: string; news: string; startLearning: string };'
);

code = code.replace(
  'nav: { learn: "Learn", educators: "Educators", toolkit: "Toolkit & AI", community: "Community", about: "About", startLearning: "Start Learning" },',
  'nav: { about: "About Project", learn: "Learn", educators: "Educators", toolkit: "Toolkit & AI", community: "Community", news: "News & Events", startLearning: "Start Learning" },'
);

code = code.replace(
  'nav: { learn: "Nauka", educators: "Nauczyciele", toolkit: "Narzędzia i AI", community: "Społeczność", about: "O projekcie", startLearning: "Zacznij naukę" },',
  'nav: { about: "O projekcie", learn: "Edukacja", educators: "Nauczyciele", toolkit: "Narzędzia i AI", community: "Społeczność", news: "Wiadomości", startLearning: "Zacznij naukę" },'
);

code = code.replace(
  'nav: { learn: "Învață", educators: "Educatori", toolkit: "Instrumente & AI", community: "Comunitate", about: "Despre", startLearning: "Începe să înveți" },',
  'nav: { about: "Despre Proiect", learn: "Învățare", educators: "Educatori", toolkit: "Instrumente & AI", community: "Comunitate", news: "Știri & Evenimente", startLearning: "Începe să înveți" },'
);

code = code.replace(
  'nav: { learn: "Vzdělávání", educators: "Pedagogové", toolkit: "Nástroje a AI", community: "Komunita", about: "O projektu", startLearning: "Začít vzdělávání" },',
  'nav: { about: "O projektu", learn: "Vzdělávání", educators: "Pedagogové", toolkit: "Nástroje a AI", community: "Komunita", news: "Zprávy a události", startLearning: "Začít vzdělávání" },'
);

code = code.replace(
  'nav: { learn: "Õpi", educators: "Õpetajad", toolkit: "Tööriistad ja AI", community: "Kogukond", about: "Projekti kohta", startLearning: "Alusta õppimist" },',
  'nav: { about: "Projekti teave", learn: "Õppimine", educators: "Õpetajad", toolkit: "Tööriistad ja AI", community: "Kogukond", news: "Uudised ja sündmused", startLearning: "Alusta õppimist" },'
);

fs.writeFileSync('G:\\Drive\'ım\\YEDEK1404-Project Factory AI Workspace\\pfai-workspace\\speakup-platform\\lib\\translations.ts', code, 'utf8');
console.log('translations.ts updated OK');
