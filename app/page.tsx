"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const moduleColors = [
  "rgb(13,110,253)", "rgb(245,158,11)", "rgb(16,185,129)",
  "rgb(239,68,68)", "rgb(139,92,246)", "rgb(0,51,153)",
];
const moduleIcons = ["💬", "🔍", "🛡️", "📣", "✏️", "⚖️"];

const featureIcons = ["📚", "👩‍🏫", "🤖", "🤝"];
const featureColors = [
  { bg: "rgba(13,110,253,0.08)", accent: "rgb(13,110,253)" },
  { bg: "rgba(16,185,129,0.08)", accent: "rgb(16,185,129)" },
  { bg: "rgba(255,100,55,0.08)", accent: "rgb(255,100,55)" },
  { bg: "rgba(139,92,246,0.08)", accent: "rgb(139,92,246)" },
];
const featureLinks = ["/learn", "/educators", "/toolkit", "/community"];

const moduleNums = ["01", "02", "03", "04", "05", "06"];
const moduleTitles: Record<string, string[]> = {
  en: ["What is Online Hate Speech?", "Recognising Hate Online", "Responding Safely", "Reporting & Protecting Yourself", "Creating Counter-Narratives", "Digital Citizenship & Rights"],
  pl: ["Czym jest mowa nienawiści?", "Rozpoznawanie nienawiści online", "Bezpieczne reagowanie", "Zgłaszanie i ochrona", "Tworzenie kontrnarracji", "Cyfrowe obywatelstwo i prawa"],
  ro: ["Ce este discursul de ură online?", "Recunoașterea urii online", "Răspuns în siguranță", "Raportare și protecție", "Crearea de contra-narațiuni", "Cetățenie digitală și drepturi"],
  cz: ["Co jsou nenávistné projevy online?", "Rozpoznávání nenávisti online", "Bezpečná reakce", "Nahlašování a ochrana", "Tvorba protiváhy", "Digitální občanství a práva"],
  et: ["Mis on veebis esinev vaenukõne?", "Veebis esineva vaenukõne äratundmine", "Ohutu reageerimine", "Teatamine ja ennast kaitsmine", "Vastunarratiivide loomine", "Digitaalne kodanikuoskus ja õigused"],
};
const moduleTags: Record<string, string[]> = {
  en: ["Foundation", "Awareness", "Skills", "Action", "Creative", "Rights"],
  pl: ["Podstawy", "Świadomość", "Umiejętności", "Działanie", "Twórcze", "Prawa"],
  ro: ["Fundament", "Conștientizare", "Abilități", "Acțiune", "Creativ", "Drepturi"],
  cz: ["Základy", "Povědomí", "Dovednosti", "Akce", "Kreativní", "Práva"],
  et: ["Alused", "Teadlikkus", "Oskused", "Tegevus", "Loovus", "Õigused"],
};

const statIcons = ["🌍", "🗣️", "📚", "📅"];

export default function HomePage() {
  const { t, locale } = useLanguage();
  const titles = moduleTitles[locale] || moduleTitles.en;
  const tags = moduleTags[locale] || moduleTags.en;

  const problemStatLabels = [t.problemStats.s1, t.problemStats.s2, t.problemStats.s3, t.problemStats.s4];
  const statValues = ["70%", "52%", "4 in 5", "89%"];
  const statIcons2 = ["😰", "🤐", "📱", "✊"];

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section style={{
          padding: "6rem 0 5rem", position: "relative", overflow: "hidden",
          background: "radial-gradient(circle at 20% 80%, rgba(255,204,0,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%), linear-gradient(135deg, rgb(0,51,153) 0%, rgb(13,80,200) 40%, rgb(60,130,255) 75%, rgb(30,160,200) 100%)",
        }}>
          <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,204,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(255,204,0,0.15)", color: "rgb(255,204,0)", border: "1px solid rgba(255,204,0,0.3)", borderRadius: "999px", padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                  {t.hero.badge}
                </span>
              </div>
              <h1 className="animate-fade-up" style={{ color: "white", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                {t.hero.line1}<br />
                <span style={{ color: "rgb(255,204,0)" }}>{t.hero.line2}</span><br />
                {t.hero.line3}
              </h1>
              <p className="animate-fade-up delay-100" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: "580px", lineHeight: 1.7, marginBottom: "2rem" }}>
                {t.hero.desc}
              </p>
              <div className="animate-fade-up delay-200" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/learn" className="btn btn-accent btn-lg animate-pulse-glow">{t.hero.cta1}</Link>
                <Link href="/toolkit" className="btn btn-ghost btn-lg" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.08)" }}>{t.hero.cta2}</Link>
              </div>
              <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[
                  { val: "5", label: t.stats.countries },
                  { val: "5", label: t.stats.languages },
                  { val: "6", label: t.stats.modules },
                  { val: "24", label: t.stats.months },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{statIcons[i]} {s.val}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem section */}
        <section className="section" style={{ background: "rgb(var(--color-surface-2))" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <span style={{ display: "inline-flex", background: "rgba(239,68,68,0.08)", color: "rgb(239,68,68)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "999px", padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "1rem" }}>
                  {t.problem.badge}
                </span>
                <h2 style={{ marginBottom: "1rem" }}>{t.problem.title}</h2>
                <p style={{ color: "rgb(var(--color-text-muted))", marginBottom: "1.25rem", fontSize: "1rem", lineHeight: 1.7 }}>{t.problem.p1}</p>
                <p style={{ color: "rgb(var(--color-text-muted))", marginBottom: "2rem", fontSize: "1rem", lineHeight: 1.7 }}>{t.problem.p2}</p>
                <Link href="/about" className="btn btn-outline">{t.problem.learnMore}</Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {statValues.map((val, i) => (
                  <div key={i} className="card" style={{ padding: "1.25rem", textAlign: "center" }}>
                    <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{statIcons2[i]}</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "rgb(var(--color-primary))", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{val}</div>
                    <p style={{ fontSize: "0.78rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.5 }}>{problemStatLabels[i]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span style={{ display: "inline-flex", background: "rgba(13,110,253,0.08)", color: "rgb(13,110,253)", border: "1px solid rgba(13,110,253,0.2)", borderRadius: "999px", padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "0.75rem" }}>
                {t.features.badge}
              </span>
              <h2>{t.features.title}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {t.features.items.map((f, i) => (
                <Link key={i} href={featureLinks[i]} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: "2rem", height: "100%" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = featureColors[i].accent; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--color-border))"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)"; }}>
                    <div style={{ width: 52, height: 52, borderRadius: "14px", background: featureColors[i].bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem" }}>{featureIcons[i]}</div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{f.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.6 }}>{f.desc}</p>
                    <div style={{ marginTop: "1rem", fontSize: "0.85rem", fontWeight: 600, color: featureColors[i].accent }}>{f.link}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Module preview */}
        <section className="section" style={{ background: "rgb(var(--color-surface-2))" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-flex", background: "rgba(255,100,55,0.08)", color: "rgb(255,100,55)", border: "1px solid rgba(255,100,55,0.2)", borderRadius: "999px", padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "0.75rem" }}>
                {t.moduleSection.badge}
              </span>
              <h2>{t.moduleSection.title}</h2>
              <p style={{ color: "rgb(var(--color-text-muted))", marginTop: "0.75rem", maxWidth: "500px", margin: "0.75rem auto 0" }}>{t.moduleSection.sub}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {moduleNums.map((num, i) => (
                <Link key={num} href={`/learn/modules/${num}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "white", border: "1px solid rgb(var(--color-border))", borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", transition: "all 0.2s", cursor: "pointer" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = moduleColors[i]; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--color-border))"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                    <div style={{ width: 44, height: 44, borderRadius: "12px", background: `linear-gradient(135deg, ${moduleColors[i]}30, ${moduleColors[i]}15)`, border: `1.5px solid ${moduleColors[i]}30`, color: moduleColors[i], fontWeight: 800, fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{moduleIcons[i]}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "rgb(var(--color-text))" }}>{titles[i]}</div>
                      <span style={{ display: "inline-flex", background: `${moduleColors[i]}15`, color: moduleColors[i], border: `1px solid ${moduleColors[i]}30`, borderRadius: "999px", padding: "0.15rem 0.6rem", fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.05em", marginTop: "0.3rem" }}>{tags[i]}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/learn" className="btn btn-primary btn-lg">{t.moduleSection.cta}</Link>
            </div>
          </div>
        </section>

        {/* Pact CTA */}
        <section className="section" style={{ background: "linear-gradient(135deg, rgb(10,15,35), rgb(0,51,153))", color: "white" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✊</div>
            <h2 style={{ color: "white", marginBottom: "1rem" }}>{t.pact.title}</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto 2rem", fontSize: "1.05rem", lineHeight: 1.7 }}>{t.pact.sub}</p>
            <Link href="/community/pacts" className="btn btn-accent btn-lg">{t.pact.cta}</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
