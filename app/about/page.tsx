"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  {
    name: "FUNDACJA EDUKACJI ROZWOJU I INNOWACJI FERI",
    short: "FERI",
    country: "Poland",
    flag: "🇵🇱",
    pic: "909290805",
    role: "Coordinator",
    color: "rgb(0,51,153)",
    desc: "A Polish foundation specialising in education, development and innovation. As coordinator, FERI leads project management, partner communication and overall quality assurance.",
    expertise: ["Project Management", "Adult Education", "Innovation"],
  },
  {
    name: "Skill Empowerment Solutions OÜ",
    short: "Skill Empowerment",
    country: "Estonia",
    flag: "🇪🇪",
    pic: "873858742",
    role: "Partner",
    color: "rgb(13,110,253)",
    desc: "An Estonian organisation focused on digital skills, eLearning and professional development. Contributes expertise in digital literacy and the Estonian digital society.",
    expertise: ["Digital Skills", "eLearning", "Digital Society"],
  },
  {
    name: "Mission: Reconnect, z.s.",
    short: "Mission: Reconnect",
    country: "Czech Republic",
    flag: "🇨🇿",
    pic: "896755786",
    role: "Partner",
    color: "rgb(16,185,129)",
    desc: "A Czech civil society organisation working with youth and communities on reconnection, participation and social inclusion.",
    expertise: ["Youth Work", "Community Engagement", "Civil Society"],
  },
  {
    name: "Universitatea Lucian Blaga din Sibiu",
    short: "ULBS",
    country: "Romania",
    flag: "🇷🇴",
    pic: "975502423",
    role: "Partner",
    color: "rgb(245,158,11)",
    desc: "A leading Romanian university providing the academic and research foundation for the project, including evidence-based content development and impact evaluation.",
    expertise: ["Academic Research", "Evidence Base", "University Networks"],
  },
  {
    name: "Smart Secure Networks Sp. z o.o.",
    short: "Smart Secure Networks",
    country: "Poland",
    flag: "🇵🇱",
    pic: "888408257",
    role: "Partner",
    color: "rgb(139,92,246)",
    desc: "A Polish technology company specialising in AI, cybersecurity and digital tools. Leads the development of the AI-supported hate speech awareness tool.",
    expertise: ["AI Development", "Cybersecurity", "Digital Tools"],
  },
];

const timeline = [
  { month: "M1–M3", phase: "Kick-off & Foundation", icon: "🚀", desc: "Project kick-off meeting, team formation, work plan finalisation, platform architecture design, initial target group research." },
  { month: "M4–M6", phase: "Research & Content Design", icon: "🔬", desc: "Gap analysis in each partner country, consultation with youth and educators, learning module curriculum development, AI tool specification." },
  { month: "M7–M12", phase: "Platform Development", icon: "🏗️", desc: "Platform build (Phases 1–4), AI tool development, content creation in all 5 languages, first internal review, youth beta testing." },
  { month: "M13–M15", phase: "Soft Launch & Testing", icon: "🧪", desc: "Internal partner review, youth tester group (25 participants), educator tester group (15 participants), bug fixes, accessibility audit." },
  { month: "M16–M18", phase: "Public Launch", icon: "🌐", desc: "Full public launch, launch webinar across 5 countries, media outreach, social media campaign activation, first community actions." },
  { month: "M19–M22", phase: "Scaling & Community", icon: "📈", desc: "Community Growth, Anti-Hate Pact campaign, school outreach programme, webinar series, policy brief publications, partner network expansion." },
  { month: "M23–M24", phase: "Evaluation & Sustainability", icon: "📋", desc: "Final impact evaluation, sustainability planning, CMS training for post-project owners, final report, replication package publication." },
];

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, rgb(10,15,35) 0%, rgb(0,51,153) 60%, rgb(13,80,200) 100%)",
          padding: "5rem 0 4rem", color: "white",
        }}>
          <div className="container">
            <span style={{
              display: "inline-flex", background: "rgba(255,204,0,0.15)", color: "rgb(255,204,0)",
              border: "1px solid rgba(255,204,0,0.3)", borderRadius: "999px",
              padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
            }}>{t.aboutPage.badge}</span>
            <h1 style={{ color: "white", marginBottom: "1rem", maxWidth: "700px" }}>
              {t.aboutPage.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "620px", lineHeight: 1.7 }}>
              {t.aboutPage.sub}
            </p>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="section">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
              <div>
                <span style={{
                  display: "inline-flex", background: "rgba(239,68,68,0.08)", color: "rgb(239,68,68)",
                  border: "1px solid rgba(239,68,68,0.2)", borderRadius: "999px",
                  padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
                }}>{t.aboutPage.problemLabel}</span>
                <h2 style={{ marginBottom: "1rem" }}>{t.aboutPage.problemTitle}</h2>
                <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.8, marginBottom: "1rem" }}>
                  {t.aboutPage.problemDesc1}
                </p>
                <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.8, marginBottom: "1rem" }}>
                  {t.aboutPage.problemDesc2}
                </p>
                {t.aboutPage.problemPoints.map((pt) => (
                  <div key={pt} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ color: "rgb(239,68,68)", fontSize: "1rem" }}>⚠️</span>
                    <span style={{ fontSize: "0.9rem", color: "rgb(var(--color-text))" }}>{pt}</span>
                  </div>
                ))}
              </div>

              <div>
                <span style={{
                  display: "inline-flex", background: "rgba(16,185,129,0.08)", color: "rgb(16,185,129)",
                  border: "1px solid rgba(16,185,129,0.2)", borderRadius: "999px",
                  padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
                }}>{t.aboutPage.solutionLabel}</span>
                <h2 style={{ marginBottom: "1rem" }}>{t.aboutPage.solutionTitle}</h2>
                <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  {t.aboutPage.solutionDesc}
                </p>
                {["📚", "👩‍🏫", "🤖", "🤝", "📑"].map((icon, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "1.1rem", marginTop: "0.05rem" }}>{icon}</span>
                    <span style={{ fontSize: "0.9rem", color: "rgb(var(--color-text))", lineHeight: 1.6 }}>{t.aboutPage.solutionPoints[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CERV Context */}
        <section className="section-sm" style={{ background: "rgb(var(--color-surface-2))", borderTop: "1px solid rgb(var(--color-border))" }}>
          <div className="container">
            <div style={{
              background: "white", border: "1px solid rgb(var(--color-border))",
              borderRadius: "var(--radius-lg)", padding: "2.5rem",
              display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap",
            }}>
              <div style={{ fontSize: "3rem" }}>🇪🇺</div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <h3 style={{ marginBottom: "0.5rem" }}>{t.aboutPage.cervTitle}</h3>
                <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                  {t.aboutPage.cervDesc}
                </p>
                <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.82rem" }}>
                  {t.aboutPage.cervDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{
                display: "inline-flex", background: "rgba(13,110,253,0.08)", color: "rgb(13,110,253)",
                border: "1px solid rgba(13,110,253,0.2)", borderRadius: "999px",
                padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem",
              }}>{t.aboutPage.timelineLabel}</span>
              <h2>{t.aboutPage.timelineTitle}</h2>
            </div>
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute", left: "30px", top: 0, bottom: 0,
                width: "2px", background: "rgb(var(--color-border))",
              }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {timeline.map((t, i) => (
                  <div key={t.month} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                    {/* Icon circle */}
                    <div style={{
                      width: 60, height: 60, borderRadius: "50%",
                      background: "white", border: "2px solid rgb(var(--color-border))",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.5rem", flexShrink: 0, position: "relative", zIndex: 1,
                      boxShadow: "var(--shadow-sm)",
                    }}>{t.icon}</div>
                    <div style={{
                      background: "white", border: "1px solid rgb(var(--color-border))",
                      borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem", flex: 1,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                        <span style={{
                          background: "rgb(0,51,153)", color: "white",
                          borderRadius: "999px", padding: "0.2rem 0.7rem",
                          fontSize: "0.72rem", fontWeight: 700,
                        }}>{t.month}</span>
                        <h4 style={{ margin: 0, fontSize: "1rem" }}>{t.phase}</h4>
                      </div>
                      <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="section" style={{ background: "rgb(var(--color-surface-2))" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{
                display: "inline-flex", background: "rgba(13,110,253,0.08)", color: "rgb(13,110,253)",
                border: "1px solid rgba(13,110,253,0.2)", borderRadius: "999px",
                padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem",
              }}>{t.aboutPage.partnerLabel}</span>
              <h2>{t.aboutPage.partnerTitle}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {partners.map((p) => (
                <div key={p.pic} style={{
                  background: "white", border: "1px solid rgb(var(--color-border))",
                  borderRadius: "var(--radius-lg)", padding: "1.75rem", position: "relative",
                  borderTop: `4px solid ${p.color}`,
                }}>

                  {p.role === "Coordinator" && (
                    <span style={{
                      position: "absolute", top: "1rem", right: "1rem",
                      background: "rgb(255,204,0)", color: "rgb(0,51,153)",
                      borderRadius: "999px", padding: "0.2rem 0.65rem",
                      fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em",
                    }}>{t.aboutPage.coordinatorLabel}</span>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "2rem" }}>{p.flag}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1rem", color: p.color }}>{p.short}</div>
                      <div style={{ fontSize: "0.75rem", color: "rgb(var(--color-text-muted))" }}>{p.country} · PIC {p.pic}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.6, marginBottom: "1rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {p.expertise.map((e) => (
                      <span key={e} style={{
                        background: p.color + "10", color: p.color,
                        border: `1px solid ${p.color}20`,
                        borderRadius: "999px", padding: "0.2rem 0.6rem",
                        fontSize: "0.7rem", fontWeight: 600,
                      }}>{e}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm">
          <div className="container" style={{ textAlign: "center" }}>
            <h3 style={{ marginBottom: "1rem" }}>{t.aboutPage.cta}</h3>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/learn" className="btn btn-primary btn-lg">{t.aboutPage.ctaLearn}</Link>
              <Link href="/community" className="btn btn-outline btn-lg">{t.aboutPage.ctaCommunity}</Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">{t.aboutPage.ctaContact}</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
