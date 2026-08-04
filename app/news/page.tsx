"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

export default function NewsPage() {
  const { t } = useLanguage();

  const newsItems = [
    {
      date: "August 2026",
      tag: "Project Milestone",
      tagColor: "rgb(13,110,253)",
      title: "SpeakUP Platform Officially Launches Across 5 European Partner Countries",
      desc: "The CERV-funded SpeakUP against Hate platform is now live in English, Polish, Romanian, Czech, and Estonian, providing free education and AI tools to combat online hate speech.",
      readMore: "Read Announcement →"
    },
    {
      date: "July 2026",
      tag: "Resource Release",
      tagColor: "rgb(16,185,129)",
      title: "AI Awareness & Ethical Detection Toolkit Published for Educators",
      desc: "Our team of experts has published the complete educator toolkit, featuring interactive scenario analyzers, lesson plans, and ethical AI guidance for classroom use.",
      readMore: "Explore Toolkit →"
    },
    {
      date: "June 2026",
      tag: "EU Event",
      tagColor: "rgb(245,158,11)",
      title: "SpeakUP Consortium Presents Findings at EU CERV Network Assembly",
      desc: "Representatives from all 5 partner organisations gathered to share baseline research on youth exposure to online hate speech and counter-narrative strategies.",
      readMore: "View Report →"
    },
    {
      date: "May 2026",
      tag: "Youth Network",
      tagColor: "rgb(139,92,246)",
      title: "Youth Anti-Hate Pact Reaches 1,000 Signatories Across Europe",
      desc: "Young leaders and educators from Poland, Romania, Czechia, Estonia, and beyond have joined our online pledge to build respectful digital communities.",
      readMore: "Join the Pact →"
    }
  ];

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section style={{
          padding: "4.5rem 0 3.5rem",
          background: "linear-gradient(135deg, rgb(0,51,153) 0%, rgb(13,80,200) 60%, rgb(60,130,255) 100%)",
          color: "white",
        }}>
          <div className="container">
            <span style={{
              display: "inline-block", background: "rgba(255,254,0,0.15)", color: "rgb(255,204,0)",
              border: "1px solid rgba(255,204,0,0.3)", borderRadius: "999px",
              padding: "0.3rem 0.9rem", fontSize: "0.75rem", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem"
            }}>
              📰 Project Updates & Press
            </span>
            <h1 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              News & Events
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: "600px", lineHeight: 1.7 }}>
              Stay updated with the latest milestones, press releases, research findings, and events from the SpeakUP against Hate project.
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="section">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {newsItems.map((item, index) => (
                <div key={index} className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                      <span style={{
                        background: item.tagColor + "15", color: item.tagColor,
                        border: `1px solid ${item.tagColor}30`, borderRadius: "999px",
                        padding: "0.2rem 0.75rem", fontSize: "0.72rem", fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.05em"
                      }}>
                        {item.tag}
                      </span>
                      <span style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))" }}>
                        {item.date}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.85rem", lineHeight: 1.4 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                      {item.desc}
                    </p>
                  </div>
                  <Link href="/contact" style={{
                    color: item.tagColor, fontWeight: 700, fontSize: "0.9rem",
                    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem"
                  }}>
                    {item.readMore}
                  </Link>
                </div>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="card" style={{
              marginTop: "4rem", padding: "3rem 2rem",
              background: "linear-gradient(135deg, rgba(13,110,253,0.06), rgba(255,204,0,0.08))",
              border: "1px solid rgba(13,110,253,0.15)", borderRadius: "var(--radius-lg)",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"
            }}>
              <span style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📩</span>
              <h2 style={{ marginBottom: "0.75rem" }}>Subscribe for Project Updates</h2>
              <p style={{ color: "rgb(var(--color-text-muted))", maxWidth: "550px", marginBottom: "2rem" }}>
                Receive quarterly briefings on new learning modules, research publications, and upcoming European workshops.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", maxWidth: "450px", width: "100%", flexWrap: "wrap", justifyContent: "center" }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  style={{
                    flex: 1, padding: "0.75rem 1.25rem", borderRadius: "999px",
                    border: "1px solid rgb(var(--color-border))", outline: "none",
                    minWidth: "240px", fontSize: "0.9rem"
                  }}
                />
                <button className="btn btn-primary" style={{ padding: "0.75rem 1.5rem" }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
