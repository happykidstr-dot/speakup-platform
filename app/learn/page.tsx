"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const modules = [
  {
    num: "01",
    title: "What is Online Hate Speech?",
    tag: "Foundation",
    tagColor: "rgb(13,110,253)",
    icon: "💬",
    duration: "20 min",
    desc: "Understand what counts as hate speech online, how it differs from offensive content, and why it matters for democratic societies.",
    topics: ["Definition & legal context", "Types of online hate", "Platforms & algorithms", "Real-world impact on targets"],
    level: "Beginner",
  },
  {
    num: "02",
    title: "Recognising Hate Online",
    tag: "Awareness",
    tagColor: "rgb(245,158,11)",
    icon: "🔍",
    duration: "25 min",
    desc: "Develop your ability to spot hate speech in different forms — from explicit slurs to coded language and dog whistles.",
    topics: ["Explicit vs. coded hate", "Dog whistles & memes", "Intersectionality", "Case studies from 5 countries"],
    level: "Beginner",
  },
  {
    num: "03",
    title: "Responding Safely",
    tag: "Skills",
    tagColor: "rgb(16,185,129)",
    icon: "🛡️",
    duration: "30 min",
    desc: "Learn practical, safe strategies for responding to hate speech online — whether as a target, bystander, or ally.",
    topics: ["Do Nothing vs. Engage", "Bystander intervention", "Counter-messaging safely", "Protecting your mental health"],
    level: "Intermediate",
  },
  {
    num: "04",
    title: "Reporting & Protecting Yourself",
    tag: "Action",
    tagColor: "rgb(239,68,68)",
    icon: "📣",
    duration: "20 min",
    desc: "Know your rights and learn how to report hate speech on different platforms and to relevant authorities.",
    topics: ["Platform reporting tools", "National reporting channels", "Legal options in EU countries", "Evidence preservation"],
    level: "Intermediate",
  },
  {
    num: "05",
    title: "Creating Counter-Narratives",
    tag: "Creative",
    tagColor: "rgb(139,92,246)",
    icon: "✏️",
    duration: "35 min",
    desc: "Move from reaction to action — learn how to create powerful, positive counter-narratives that amplify inclusion.",
    topics: ["What makes a good counter-narrative?", "Storytelling for change", "Social media strategy", "Youth-led campaigns"],
    level: "Intermediate",
  },
  {
    num: "06",
    title: "Digital Citizenship & Rights",
    tag: "Rights",
    tagColor: "rgb(0,51,153)",
    icon: "⚖️",
    duration: "25 min",
    desc: "Explore your rights in digital spaces and understand the EU framework protecting freedom of expression and equality online.",
    topics: ["EU Charter of Fundamental Rights", "GDPR & digital privacy", "Platform accountability", "Your right to participate safely"],
    level: "Advanced",
  },
];

export default function LearnPage() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, rgb(0,51,153) 0%, rgb(13,80,200) 60%, rgb(60,130,255) 100%)",
          padding: "4rem 0 3rem",
          color: "white",
        }}>
          <div className="container">
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "rgba(255,204,0,0.15)", color: "rgb(255,204,0)",
              border: "1px solid rgba(255,204,0,0.3)", borderRadius: "999px",
              padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
            }}>{t.learnPage.badge}</span>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>
              {t.learnPage.title.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "560px", lineHeight: 1.7 }}>
              {t.learnPage.sub}
            </p>
            <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
              {[
                { icon: "🕐", val: "~2.5h", label: "Total learning time" },
                { icon: "🌍", val: "5", label: "Languages available" },
                { icon: "📜", val: "Free", label: "Certificate on completion" },
                { icon: "♿", val: "WCAG AA", label: "Fully accessible" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "white" }}>{s.icon} {s.val}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress path visual */}
        <div style={{ background: "rgb(var(--color-surface-2))", borderBottom: "1px solid rgb(var(--color-border))", padding: "1rem 0" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))", fontWeight: 500 }}>Learning path:</span>
            {modules.map((m, i) => (
              <div key={m.num} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: m.tagColor + "20",
                  border: `2px solid ${m.tagColor}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.65rem", fontWeight: 800, color: m.tagColor,
                }}>{m.num}</div>
                {i < modules.length - 1 && <div style={{ width: 20, height: 2, background: "rgb(var(--color-border))" }} />}
              </div>
            ))}
            <span style={{ fontSize: "0.8rem", color: "rgb(var(--color-text-muted))", marginLeft: "0.5rem" }}>→ Certificate</span>
          </div>
        </div>

        {/* Module Cards */}
        <section className="section">
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {modules.map((m) => (
                <Link key={m.num} href={`/learn/modules/${m.num}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "white",
                    border: "1px solid rgb(var(--color-border))",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: "1.5rem",
                    alignItems: "start",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = m.tagColor;
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--color-border))";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}>
                    {/* Number + Icon */}
                    <div style={{
                      width: 64, height: 64, borderRadius: "16px",
                      background: `linear-gradient(135deg, ${m.tagColor}20, ${m.tagColor}10)`,
                      border: `2px solid ${m.tagColor}30`,
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center", gap: "2px",
                      flexShrink: 0,
                    }}>
                      <div style={{ fontSize: "1.4rem" }}>{m.icon}</div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 800, color: m.tagColor }}>{m.num}</div>
                    </div>

                    {/* Content */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                        <h3 style={{ fontSize: "1.15rem", margin: 0 }}>{m.title}</h3>
                        <span style={{
                          background: m.tagColor + "15", color: m.tagColor,
                          border: `1px solid ${m.tagColor}30`,
                          borderRadius: "999px", padding: "0.2rem 0.7rem",
                          fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em",
                        }}>{m.tag}</span>
                      </div>
                      <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>{m.desc}</p>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {m.topics.map((t) => (
                          <span key={t} style={{
                            background: "rgb(var(--color-surface-2))",
                            border: "1px solid rgb(var(--color-border))",
                            borderRadius: "999px", padding: "0.2rem 0.65rem",
                            fontSize: "0.72rem", color: "rgb(var(--color-text-muted))", fontWeight: 500,
                          }}>✓ {t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Meta + CTA */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem", flexShrink: 0 }}>
                      <div style={{ fontSize: "0.8rem", color: "rgb(var(--color-text-muted))", fontWeight: 500 }}>⏱ {m.duration}</div>
                      <div style={{
                        fontSize: "0.75rem", padding: "0.2rem 0.65rem",
                        borderRadius: "999px",
                        background: m.level === "Beginner" ? "rgba(16,185,129,0.1)" : m.level === "Intermediate" ? "rgba(245,158,11,0.1)" : "rgba(139,92,246,0.1)",
                        color: m.level === "Beginner" ? "rgb(16,185,129)" : m.level === "Intermediate" ? "rgb(245,158,11)" : "rgb(139,92,246)",
                        fontWeight: 600,
                      }}>{m.level}</div>
                      <div style={{ color: m.tagColor, fontWeight: 700, fontSize: "0.85rem", marginTop: "0.5rem" }}>
                        Start →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate CTA */}
        <section className="section-sm" style={{ background: "rgb(var(--color-surface-2))", borderTop: "1px solid rgb(var(--color-border))" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🏆</div>
            <h3 style={{ marginBottom: "0.5rem" }}>Complete all 6 modules and earn your certificate</h3>
            <p style={{ color: "rgb(var(--color-text-muted))", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              A free digital certificate recognising your commitment to fighting online hate speech — shareable on LinkedIn and social media.
            </p>
            <Link href="/learn/modules/01" className="btn btn-primary btn-lg">
              🚀 Begin Module 01
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
