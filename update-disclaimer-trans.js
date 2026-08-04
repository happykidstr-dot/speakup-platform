const fs = require('fs');

let code = fs.readFileSync('G:\\Drive\'ım\\YEDEK1404-Project Factory AI Workspace\\pfai-workspace\\speakup-platform\\lib\\translations.ts', 'utf8');

// Reset footer type definition to clean state first
code = code.replace(
  /footer:\s*\{[^}]+\};/g,
  'footer: { tagline: string; eu: string; cerv: string; disclaimerTitle: string; disclaimer: string; copyright: string; partners: string; learnLinks: string[]; communityLinks: string[]; legalLinks: string[] };'
);

// Clean up duplicate props in footer objects if any
code = code.replace(/(disclaimerTitle:\s*"[^"]+",\s*disclaimer:\s*"[^"]+",\s*)+/g, '');

// Now insert clean props
code = code.replace(
  'eu: "Co-funded by the European Union", cerv: "CERV — Citizens, Equality, Rights and Values Programme",',
  'eu: "Co-funded by the European Union", cerv: "CERV — Citizens, Equality, Rights and Values Programme", disclaimerTitle: "Disclaimer", disclaimer: "Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor the granting authority can be held responsible for them.",'
);

code = code.replace(
  'eu: "Współfinansowane przez Unię Europejską", cerv: "Program CERV — Obywatele, Równość, Prawa i Wartości",',
  'eu: "Współfinansowane przez Unię Europejską", cerv: "Program CERV — Obywatele, Równość, Prawa i Wartości", disclaimerTitle: "Wyłączenie Odpowiedzialności", disclaimer: "Współfinansowane przez Unię Europejską. Wyrażone poglądy i opinie są jednak wyłącznie poglądami autora (autorów) i nie muszą odzwierciedlać poglądów Unii Europejskiej ani Europejskiej Agencji Wykonawczej ds. Edukacji i Kultury (EACEA). Ani Unia Europejska, ani organ przyznający dotację nie mogą ponosić za nie odpowiedzialności.",'
);

code = code.replace(
  'eu: "Cofinanțat de Uniunea Europeană", cerv: "Programul CERV — Cetățeni, Egalitate, Drepturi și Valori",',
  'eu: "Cofinanțat de Uniunea Europeană", cerv: "Programul CERV — Cetățeni, Egalitate, Drepturi și Valori", disclaimerTitle: "Declinarea Responsabilității", disclaimer: "Cofinanțat de Uniunea Europeană. Cu toate acestea, opiniile exprimate aparțin doar autorului (autorilor) și nu reflectă neapărat cele ale Uniunii Europene sau ale EACEA. Nici Uniunea Europeană și nici autoritatea finanțatoare nu pot fi făcute responsabile pentru acestea.",'
);

code = code.replace(
  'eu: "Spolufinancováno Evropskou unií", cerv: "Program CERV — Občané, rovnost, práva a hodnoty",',
  'eu: "Spolufinancováno Evropskou unií", cerv: "Program CERV — Občané, rovnost, práva a hodnoty", disclaimerTitle: "Vyloučení Odpovědnosti", disclaimer: "Spolufinancováno Evropskou unií. Vyjádřené názory a stanoviska představují pouze názory autora (autorů) a nemusí nutně odrážet názory Evropské unie nebo agentury EACEA. Evropská unie ani poskytovatel dotace za ně nenesou odpovědnost.",'
);

code = code.replace(
  'eu: "Kaasrahastab Euroopa Liit", cerv: "CERV programm — Kodanikud, võrdõiguslikkus, õigused ja väärtused",',
  'eu: "Kaasrahastab Euroopa Liit", cerv: "CERV programm — Kodanikud, võrdõiguslikkus, õigused ja väärtused", disclaimerTitle: "Lahtiütlus", disclaimer: "Kaasrahastab Euroopa Liit. Avaldatud seisukohad ja arvamused on ainult autori(te) omad ega pruugi kajastada Euroopa Liidu ega EACEA seisukohti. Euroopa Liit ega toetuse andja ei vastuta nende eest.",'
);

fs.writeFileSync('G:\\Drive\'ım\\YEDEK1404-Project Factory AI Workspace\\pfai-workspace\\speakup-platform\\lib\\translations.ts', code, 'utf8');
console.log('translations.ts cleaned and updated cleanly!');
