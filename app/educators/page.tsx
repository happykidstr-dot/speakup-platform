"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const resources = [
  {
    icon: "📝", title: "Lesson Plan: Introduction to Hate Speech",
    desc: "A complete 90-minute lesson plan for secondary students (ages 14–18). Includes discussion prompts, video links, and group activities.",
    type: "Lesson Plan", pages: "12 pages", level: "Secondary", lang: "EN / PL / RO / CZ / ET",
    color: "rgb(13,110,253)", tags: ["Ages 14–18", "90 min", "Group work"],
  },
  {
    icon: "📝", title: "Lesson Plan: Recognising Coded Hate",
    desc: "Focused lesson on dog whistles, memes, and coded language. Includes image analysis exercises and class discussion framework.",
    type: "Lesson Plan", pages: "10 pages", level: "Secondary/Higher", lang: "EN / PL / RO",
    color: "rgb(13,110,253)", tags: ["Ages 16+", "60 min", "Critical thinking"],
  },
  {
    icon: "🎪", title: "Workshop Guide: SpeakUP Sessions",
    desc: "A full facilitation guide for running 3-hour SpeakUP community workshops. Includes icebreakers, activities, debrief prompts, and safety protocols.",
    type: "Workshop Guide", pages: "24 pages", level: "All levels", lang: "EN / PL / RO / CZ / ET",
    color: "rgb(16,185,129)", tags: ["3 hours", "Facilitation", "Community"],
  },
  {
    icon: "🃏", title: "Scenario Cards: What Would You Do?",
    desc: "48 printable scenario cards depicting online situations ranging from explicit to subtle hate speech. Use for discussion, debate, or role-play.",
    type: "Activity Cards", pages: "48 cards", level: "Secondary+", lang: "EN / PL",
    color: "rgb(245,158,11)", tags: ["Printable", "Discussion", "Ages 14+"],
  },
  {
    icon: "🎓", title: "Educator Self-Study Guide",
    desc: "A professional development guide for teachers and educators to build their own understanding before delivering SpeakUP sessions.",
    type: "Self-Study", pages: "32 pages", level: "Educator", lang: "EN",
    color: "rgb(139,92,246)", tags: ["CPD", "Self-paced", "Professional dev"],
  },
  {
    icon: "📊", title: "Assessment & Evaluation Templates",
    desc: "Pre- and post-session assessment tools to measure student learning, attitude shifts, and confidence in responding to online hate.",
    type: "Assessment", pages: "8 templates", level: "All", lang: "EN / PL / RO",
    color: "rgb(239,68,68)", tags: ["Evaluation", "Impact", "Monitoring"],
  },
];

const moduleLinks = [
  { num: "01", topic: "What is Online Hate Speech?", icon: "💬", color: "rgb(13,110,253)" },
  { num: "02", topic: "Recognising Hate Online", icon: "🔍", color: "rgb(245,158,11)" },
  { num: "03", topic: "Responding Safely", icon: "🛡️", color: "rgb(16,185,129)" },
  { num: "04", topic: "Reporting & Protecting Yourself", icon: "📣", color: "rgb(239,68,68)" },
  { num: "05", topic: "Creating Counter-Narratives", icon: "✏️", color: "rgb(139,92,246)" },
  { num: "06", topic: "Digital Citizenship & Rights", icon: "⚖️", color: "rgb(0,51,153)" },
];

const faqs = [
  { q: "Do I need to be an expert on hate speech to deliver SpeakUP?", a: "No. Our materials are designed for educators who are not specialists. The Educator Self-Study Guide prepares you to facilitate confidently. We also offer optional online training sessions." },
  { q: "What age groups are the materials suitable for?", a: "Our core materials target ages 15–25. Some lesson plans are adapted for ages 14+ and some for higher education. Each resource clearly states the recommended age range." },
  { q: "Are the materials available in languages other than English?", a: "Yes. All core materials are available in English, Polish, Romanian, Czech, and Estonian. Some supplementary resources are available in English and Polish." },
  { q: "How do I get a badge or acknowledgement for my school/organisation?", a: "Schools and organisations that complete SpeakUP training can apply for a SpeakUP Partner Badge. Contact us via the contact form for more information." },
  { q: "Is there support available when running sessions?", a: "Yes. You can access the educator community forum (registration required) and contact the project partner in your country for guidance." },
];

export default function EducatorsPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const types = ["All", "Lesson Plan", "Workshop Guide", "Activity Cards", "Self-Study", "Assessment"];
  const filtered = filter === "All" ? resources : resources.filter((r) => r.type === filter);

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, rgb(10,15,35) 0%, rgb(13,60,160) 50%, rgb(13,110,253) 100%)",
          padding: "5rem 0 4rem", color: "white", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", bottom: "-30%", right: "-5%", width: "500px", height: "500px",
            borderRadius: "50%", background: "radial-gradient(circle, rgba(255,204,0,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-flex", background: "rgba(255,204,0,0.15)", color: "rgb(255,204,0)",
              border: "1px solid rgba(255,204,0,0.3)", borderRadius: "999px",
              padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
            }}>{t.educatorsPage.badge}</span>
            <h1 style={{ color: "white", marginBottom: "1rem", maxWidth: "700px" }}>
              {t.educatorsPage.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "580px", lineHeight: 1.7, marginBottom: "2rem" }}>
              {t.educatorsPage.sub}
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { val: "6+", label: "Free Resources" },
                { val: "5", label: "Languages" },
                { val: "48", label: "Activity Cards" },
                { val: "Free", label: "Always" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>{s.val}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="section-sm" style={{ background: "rgb(var(--color-surface-2))", borderBottom: "1px solid rgb(var(--color-border))" }}>
          <div className="container">
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { icon: "🏫", label: "Secondary School Teachers", desc: "Ages 14–18 classroom settings" },
                { icon: "🎓", label: "Higher Education Lecturers", desc: "University and college contexts" },
                { icon: "🌱", label: "Youth Workers & NGOs", desc: "Community and informal education" },
                { icon: "🏛️", label: "Community Facilitators", desc: "Civic and municipal contexts" },
              ].map((a) => (
                <div key={a.label} style={{
                  background: "white", border: "1px solid rgb(var(--color-border))",
                  borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem",
                  display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 240,
                }}>
                  <span style={{ fontSize: "1.5rem" }}>{a.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{a.label}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgb(var(--color-text-muted))" }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules as curriculum */}
        <section className="section">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <span style={{
                  display: "inline-flex", background: "rgba(13,110,253,0.08)", color: "rgb(13,110,253)",
                  border: "1px solid rgba(13,110,253,0.2)", borderRadius: "999px",
                  padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
                }}>{t.educatorsPage.curriculumLabel}</span>
                <h2 style={{ marginBottom: "1rem" }}>{t.educatorsPage.curriculumTitle}</h2>
                <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Each SpeakUP learning module comes with a corresponding lesson plan and supporting materials. You can use one module as a stand-alone session or deliver all six as a progressive curriculum.
                </p>
                <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  All modules are designed for approximately <strong>60–90 minutes</strong> each and include discussion questions, a key takeaways summary, and a quiz for knowledge review.
                </p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Link href="/learn" className="btn btn-primary">{t.educatorsPage.previewBtn}</Link>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {moduleLinks.map((m) => (
                  <Link key={m.num} href={`/learn/modules/${m.num}`} style={{ textDecoration: "none" }}>
                    <div style={{
                      background: "white", border: "1px solid rgb(var(--color-border))",
                      borderRadius: "var(--radius-md)", padding: "0.875rem 1.25rem",
                      display: "flex", alignItems: "center", gap: "1rem",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = m.color;
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--color-border))";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: "10px", flexShrink: 0,
                        background: m.color + "15", border: `1.5px solid ${m.color}30`,
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
                      }}>{m.icon}</div>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: "0.7rem", fontWeight: 700, color: m.color, textTransform: "uppercase" }}>Module {m.num}</span>
                        <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "rgb(var(--color-text))" }}>{m.topic}</div>
                      </div>
                      <span style={{ color: m.color, fontSize: "0.85rem", fontWeight: 700 }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Library */}
        <section className="section" style={{ background: "rgb(var(--color-surface-2))" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span style={{
                display: "inline-flex", background: "rgba(13,110,253,0.08)", color: "rgb(13,110,253)",
                border: "1px solid rgba(13,110,253,0.2)", borderRadius: "999px",
                padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem",
              }}>{t.educatorsPage.resourceLibLabel}</span>
              <h2>{t.educatorsPage.resourceLibTitle}</h2>
            </div>

            {/* Type filter */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
              {types.map((t) => (
                <button key={t} onClick={() => setFilter(t)} style={{
                  padding: "0.4rem 1rem", borderRadius: "999px", border: "1.5px solid",
                  borderColor: filter === t ? "rgb(13,110,253)" : "rgb(var(--color-border))",
                  background: filter === t ? "rgba(13,110,253,0.08)" : "white",
                  color: filter === t ? "rgb(13,110,253)" : "rgb(var(--color-text-muted))",
                  fontWeight: 600, fontSize: "0.82rem", cursor: "pointer", transition: "all 0.2s",
                }}>{t}</button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {filtered.map((r) => (
                <div key={r.title} style={{
                  background: "white", border: "1px solid rgb(var(--color-border))",
                  borderRadius: "var(--radius-lg)", padding: "1.75rem",
                  borderTop: `4px solid ${r.color}`,
                  display: "flex", flexDirection: "column",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{r.icon}</div>
                  <div style={{ marginBottom: "0.35rem" }}>
                    <span style={{
                      background: r.color + "15", color: r.color,
                      borderRadius: "999px", padding: "0.15rem 0.65rem",
                      fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase",
                    }}>{r.type}</span>
                  </div>
                  <h3 style={{ fontSize: "0.95rem", margin: "0.5rem 0" }}>{r.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.6, flex: 1, marginBottom: "1rem" }}>{r.desc}</p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    {r.tags.map((tag) => (
                      <span key={tag} style={{
                        background: "rgb(var(--color-surface-2))", border: "1px solid rgb(var(--color-border))",
                        borderRadius: "999px", padding: "0.15rem 0.55rem",
                        fontSize: "0.68rem", color: "rgb(var(--color-text-muted))", fontWeight: 500,
                      }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgb(var(--color-border))", paddingTop: "0.75rem" }}>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "rgb(var(--color-text-muted))" }}>{r.pages} · {r.lang}</div>
                    </div>
                    <button style={{
                      background: r.color, color: "white", border: "none",
                      borderRadius: "999px", padding: "0.4rem 1rem",
                      fontSize: "0.8rem", fontWeight: 700, cursor: "pointer",
                    }}>{t.educatorsPage.downloadBtn}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container-narrow">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2>{t.educatorsPage.faqTitle}</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: "white", border: "1px solid rgb(var(--color-border))",
                  borderRadius: "var(--radius-md)", overflow: "hidden",
                }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                    width: "100%", padding: "1.25rem 1.5rem",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "none", border: "none", cursor: "pointer",
                    fontWeight: 600, fontSize: "0.9rem", textAlign: "left",
                    color: "rgb(var(--color-text))",
                  }}>
                    <span>{faq.q}</span>
                    <span style={{
                      fontSize: "1.2rem", color: "rgb(13,110,253)",
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                      transition: "transform 0.2s", flexShrink: 0, marginLeft: "1rem",
                    }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{
                      padding: "0 1.5rem 1.25rem",
                      fontSize: "0.875rem", color: "rgb(var(--color-text-muted))",
                      lineHeight: 1.7, borderTop: "1px solid rgb(var(--color-border))",
                      paddingTop: "1rem",
                    }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educator Community CTA */}
        <section className="section-sm" style={{
          background: "linear-gradient(135deg, rgb(0,51,153), rgb(13,110,253))",
          color: "white", textAlign: "center",
        }}>
          <div className="container">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>👩‍🏫</div>
            <h2 style={{ color: "white", marginBottom: "0.75rem" }}>{t.educatorsPage.joinTitle}</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: "480px", margin: "0 auto 1.75rem", lineHeight: 1.7 }}>
              {t.educatorsPage.joinSub}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-accent btn-lg">{t.educatorsPage.requestAccessBtn}</Link>
              <Link href="/learn" className="btn btn-ghost btn-lg" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)" }}>{t.educatorsPage.previewBtn}</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
