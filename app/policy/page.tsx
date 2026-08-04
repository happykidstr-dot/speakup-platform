"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

export default function PolicyPage() {
  const { t } = useLanguage();

  const policyBriefs = [
    {
      code: "PB-2026-01",
      title: "Implementing the EU Digital Services Act (DSA) in Educational Settings",
      target: "EU Policy Makers & School Boards",
      date: "July 2026",
      desc: "Guidelines on how schools and non-formal education providers can align digital safety protocols with Article 28 of the DSA regarding minor protection online.",
      fileSize: "PDF · 1.4 MB"
    },
    {
      code: "PB-2026-02",
      title: "Counter-Narrative Effectiveness: Evidence-Based Recommendations for Youth Work",
      target: "Youth Organizations & Educators",
      date: "June 2026",
      desc: "Empirical analysis of 120+ counter-narrative campaigns across 5 EU countries, evaluating empathy-based vs. fact-checking responses to online hate speech.",
      fileSize: "PDF · 2.1 MB"
    },
    {
      code: "PB-2026-03",
      title: "Ethical AI in Youth Education: Detecting Coded Hate Without Silencing Expression",
      target: "Tech Platforms & AI Developers",
      date: "May 2026",
      desc: "Framework for balancing automated content moderation with freedom of expression, preventing bias against marginalized youth language.",
      fileSize: "PDF · 1.8 MB"
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
              display: "inline-block", background: "rgba(255,204,0,0.15)", color: "rgb(255,204,0)",
              border: "1px solid rgba(255,204,0,0.3)", borderRadius: "999px",
              padding: "0.3rem 0.9rem", fontSize: "0.75rem", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem"
            }}>
              ⚖️ Policy & Legal Frameworks
            </span>
            <h1 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Policy Briefs & EU Recommendations
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: "650px", lineHeight: 1.7 }}>
              Evidence-based recommendations developed under the CERV Programme to support EU institutions, national ministries, and civil society in countering online hate speech.
            </p>
          </div>
        </section>

        {/* Policy Briefs Section */}
        <section className="section">
          <div className="container">
            <h2 style={{ marginBottom: "2rem" }}>Published Policy Publications</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {policyBriefs.map((brief, index) => (
                <div key={index} className="card" style={{
                  padding: "2rem", display: "grid", gridTemplateColumns: "1fr auto",
                  gap: "2rem", alignItems: "center"
                }}>
                  <div>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                      <span style={{
                        background: "rgba(13,110,253,0.1)", color: "rgb(13,110,253)",
                        fontWeight: 700, fontSize: "0.75rem", padding: "0.2rem 0.6rem",
                        borderRadius: "4px"
                      }}>
                        {brief.code}
                      </span>
                      <span style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))" }}>
                        Target: {brief.target} · {brief.date}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      {brief.title}
                    </h3>
                    <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                      {brief.desc}
                    </p>
                  </div>
                  <div>
                    <Link href="/contact" className="btn btn-outline" style={{ whiteSpace: "nowrap" }}>
                      📄 Download {brief.fileSize}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CERV Context */}
            <div style={{
              marginTop: "4rem", background: "rgb(var(--color-surface-2))",
              border: "1px solid rgb(var(--color-border))", borderRadius: "var(--radius-lg)",
              padding: "2.5rem"
            }}>
              <h3>🇪🇺 European Union CERV Programme Context</h3>
              <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.7, marginTop: "1rem" }}>
                The Citizens, Equality, Rights and Values (CERV) programme aims to protect and promote Union rights and values as enshrined in the EU Treaties and the Charter of Fundamental Rights. SpeakUP policy recommendations contribute directly to the EU Strategy on Combating Antisemitism and Fostering Jewish Life, the EU Anti-racism Action Plan, and the EU Gender Equality Strategy.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/about" className="btn btn-primary">
                  Learn More About CERV Alignment →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
