"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const toolkitItems = [
  { icon: "📘", title: "Full Toolkit (PDF)", desc: "Complete SpeakUP toolkit — theory, exercises, facilitator notes. Available in 5 languages.", type: "Download", size: "4.2 MB", tag: "All languages" },
  { icon: "🏫", title: "School Guide", desc: "Step-by-step guide for teachers to use SpeakUP modules in secondary and upper secondary classrooms.", type: "Download", size: "1.8 MB", tag: "Educators" },
  { icon: "🏢", title: "CSO & NGO Guide", desc: "Practical guide for civil society organisations to run SpeakUP community sessions and workshops.", type: "Download", size: "2.1 MB", tag: "Organisations" },
  { icon: "🎮", title: "Interactive Exercises", desc: "Printable and digital exercises for each module — scenario cards, debate prompts, recognition activities.", type: "Download", size: "3.5 MB", tag: "Youth" },
];

const scenarios = [
  { text: "I hate all immigrants. They're ruining our country and should be sent back.", label: "Explicit Hate Speech", color: "rgb(239,68,68)", explanation: "This contains direct, unambiguous hate speech targeting a group based on national origin. It dehumanises people and calls for discriminatory action." },
  { text: "Why do 'certain people' always complain? You know who I mean 👀", label: "Coded Hate / Dog Whistle", color: "rgb(245,158,11)", explanation: "This uses coded language that appears neutral on the surface but signals hate to a specific audience. The scare quotes and emoji are dog whistles." },
  { text: "I totally disagree with this political position — it's damaging for society.", label: "Strong Opinion (Not Hate)", color: "rgb(16,185,129)", explanation: "This expresses a strong political disagreement but does not target a group based on their identity. Robust debate is protected speech, even when harsh." },
  { text: "People like them don't belong here. It's just biology.", label: "Pseudoscientific Hate", color: "rgb(139,92,246)", explanation: "This uses false scientific framing to legitimise exclusion and discrimination. Pseudoscientific arguments are a common tactic in modern hate speech." },
];

export default function ToolkitPage() {
  const { t } = useLanguage();
  const [demoStep, setDemoStep] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const currentScenario = scenarios[demoStep];

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, rgb(20,10,40) 0%, rgb(60,20,120) 50%, rgb(100,40,200) 100%)",
          padding: "5rem 0 4rem", color: "white", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-20%", right: "-5%", width: "500px", height: "500px",
            borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-flex", background: "rgba(139,92,246,0.2)", color: "rgb(200,160,255)",
              border: "1px solid rgba(139,92,246,0.4)", borderRadius: "999px",
              padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
            }}>{t.toolkitPage.badge}</span>
            <h1 style={{ color: "white", marginBottom: "1rem", maxWidth: "660px" }}>
              {t.toolkitPage.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "580px", lineHeight: 1.7, marginBottom: "2rem" }}>
              {t.toolkitPage.sub}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#ai-tool" className="btn btn-lg" style={{
                background: "rgba(139,92,246,0.9)", color: "white",
                border: "1px solid rgba(139,92,246,0.5)",
              }}>{t.toolkitPage.tryAIBtn}</a>
              <a href="#downloads" className="btn btn-lg" style={{
                background: "rgba(255,255,255,0.1)", color: "white",
                border: "1px solid rgba(255,255,255,0.25)",
              }}>{t.toolkitPage.downloadToolkitBtn}</a>
            </div>
          </div>
        </section>

        {/* Ethical Disclaimer */}
        <div style={{
          background: "rgba(245,158,11,0.08)", borderBottom: "1px solid rgba(245,158,11,0.2)",
          padding: "1rem 0",
        }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.2rem", marginTop: "0.05rem" }}>⚠️</span>
              <p style={{ fontSize: "0.85rem", color: "rgb(var(--color-text))", margin: 0, lineHeight: 1.6 }}>
                <strong>Educational purpose only.</strong> This AI tool is designed to support hate speech <em>awareness and education</em>. It does not make legal or content moderation decisions, does not store personal data, and should not be used as the sole basis for reporting or enforcement. It is suitable for use by people aged 13 and over, ideally with adult or educator supervision.
              </p>
            </div>
          </div>
        </div>

        {/* AI Tool Demo */}
        <section className="section" id="ai-tool">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{
                display: "inline-flex", background: "rgba(139,92,246,0.08)", color: "rgb(139,92,246)",
                border: "1px solid rgba(139,92,246,0.2)", borderRadius: "999px",
                padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem",
              }}>{t.toolkitPage.demoLabel}</span>
              <h2>{t.toolkitPage.demoTitle}</h2>
              <p style={{ color: "rgb(var(--color-text-muted))", maxWidth: "520px", margin: "0.75rem auto 0" }}>
                {t.toolkitPage.demoSub}
              </p>
            </div>

            {/* Demo Tool */}
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>

              {/* Step indicator */}
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", justifyContent: "center" }}>
                {scenarios.map((_, i) => (
                  <button key={i} onClick={() => { setDemoStep(i); setRevealed(false); }} style={{
                    width: 32, height: 32, borderRadius: "50%", border: "2px solid",
                    borderColor: i === demoStep ? "rgb(139,92,246)" : "rgb(var(--color-border))",
                    background: i === demoStep ? "rgb(139,92,246)" : "white",
                    color: i === demoStep ? "white" : "rgb(var(--color-text-muted))",
                    fontWeight: 700, fontSize: "0.82rem", cursor: "pointer",
                    transition: "all 0.2s",
                  }}>{i + 1}</button>
                ))}
              </div>

              {/* Scenario card */}
              <div style={{
                background: "white", border: "1px solid rgb(var(--color-border))",
                borderRadius: "var(--radius-lg)", overflow: "hidden",
                boxShadow: "var(--shadow-md)",
              }}>
                {/* Tool header */}
                <div style={{
                  background: "linear-gradient(135deg, rgb(20,10,40), rgb(60,20,120))",
                  padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "10px",
                    background: "rgba(139,92,246,0.3)", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.1rem",
                  }}>🤖</div>
                  <div>
                    <div style={{ color: "white", fontWeight: 700, fontSize: "0.9rem" }}>SpeakUP AI Awareness Tool</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem" }}>Educational Demo · GDPR Compliant · No data stored</div>
                  </div>
                  <div style={{
                    marginLeft: "auto", background: "rgba(16,185,129,0.2)", color: "rgb(16,185,129)",
                    border: "1px solid rgba(16,185,129,0.3)", borderRadius: "999px",
                    padding: "0.2rem 0.65rem", fontSize: "0.7rem", fontWeight: 600,
                  }}>● ACTIVE</div>
                </div>

                {/* Content */}
                <div style={{ padding: "2rem" }}>
                  <div style={{
                    background: "rgb(var(--color-surface-2))",
                    borderRadius: "var(--radius-md)", padding: "1.25rem",
                    marginBottom: "1.5rem", borderLeft: "4px solid rgb(var(--color-border))",
                  }}>
                    <div style={{ fontSize: "0.72rem", color: "rgb(var(--color-text-muted))", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {t.toolkitPage.exampleOf} {demoStep + 1} of {scenarios.length}
                    </div>
                    <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgb(var(--color-text))", margin: 0, fontStyle: "italic" }}>
                      "{currentScenario.text}"
                    </p>
                  </div>

                  {!revealed ? (
                    <div style={{ textAlign: "center" }}>
                      <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.875rem", marginBottom: "1rem" }}>
                        {t.toolkitPage.howCategorise}
                      </p>
                      <button onClick={() => setRevealed(true)} style={{
                        background: "linear-gradient(135deg, rgb(60,20,120), rgb(139,92,246))",
                        color: "white", border: "none", borderRadius: "999px",
                        padding: "0.75rem 2rem", fontSize: "0.95rem", fontWeight: 700,
                        cursor: "pointer", transition: "all 0.2s",
                        boxShadow: "0 4px 14px rgba(139,92,246,0.35)",
                      }}>{t.toolkitPage.revealBtn}</button>
                    </div>
                  ) : (
                    <div>
                      {/* Result */}
                      <div style={{
                        background: currentScenario.color + "10",
                        border: `2px solid ${currentScenario.color}30`,
                        borderRadius: "var(--radius-md)", padding: "1.25rem",
                        marginBottom: "1rem",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                          <div style={{
                            width: 10, height: 10, borderRadius: "50%",
                            background: currentScenario.color,
                          }} />
                          <span style={{ fontWeight: 800, fontSize: "0.95rem", color: currentScenario.color }}>
                            {currentScenario.label}
                          </span>
                        </div>
                        <p style={{ fontSize: "0.875rem", color: "rgb(var(--color-text))", lineHeight: 1.7, margin: 0 }}>
                          {currentScenario.explanation}
                        </p>
                      </div>

                      {/* What to do */}
                      <div style={{
                        background: "rgba(13,110,253,0.05)", border: "1px solid rgba(13,110,253,0.15)",
                        borderRadius: "var(--radius-md)", padding: "1rem",
                        marginBottom: "1.25rem",
                      }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgb(13,110,253)", marginBottom: "0.4rem" }}>{t.toolkitPage.whatCanYouDo}</div>
                        <p style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))", margin: 0, lineHeight: 1.6 }}>
                          {currentScenario.color === "rgb(16,185,129)"
                            ? "This is not hate speech — strong opinions are allowed. Continue engaging critically with different views."
                            : "Consider using the platform reporting tool. Document the content (screenshot + timestamp). You can also explore counter-narrative strategies in Module 5."}
                        </p>
                      </div>

                      {/* Navigation */}
                      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "space-between" }}>
                        <button onClick={() => { setDemoStep(Math.max(0, demoStep - 1)); setRevealed(false); }}
                          disabled={demoStep === 0}
                          style={{
                            background: "rgb(var(--color-surface-2))",
                            border: "1px solid rgb(var(--color-border))",
                            borderRadius: "999px", padding: "0.5rem 1.25rem",
                            fontSize: "0.85rem", fontWeight: 600, cursor: demoStep === 0 ? "not-allowed" : "pointer",
                            opacity: demoStep === 0 ? 0.4 : 1, color: "rgb(var(--color-text))",
                          }}>{t.toolkitPage.prevBtn}</button>
                        {demoStep < scenarios.length - 1 ? (
                          <button onClick={() => { setDemoStep(demoStep + 1); setRevealed(false); }} style={{
                            background: "rgb(139,92,246)", color: "white", border: "none",
                            borderRadius: "999px", padding: "0.5rem 1.25rem",
                            fontSize: "0.85rem", fontWeight: 700, cursor: "pointer",
                          }}>{t.toolkitPage.nextBtn}</button>
                        ) : (
                          <Link href="/learn" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
                            {t.toolkitPage.startModulesBtn}
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Disclaimer */}
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "rgb(var(--color-text-muted))", marginTop: "1rem" }}>
                This tool uses curated educational examples. No personal data is collected or processed.
                Full AI tool requires registration and educator/partner access.
              </p>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="section" id="downloads" style={{ background: "rgb(var(--color-surface-2))" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{
                display: "inline-flex", background: "rgba(13,110,253,0.08)", color: "rgb(13,110,253)",
                border: "1px solid rgba(13,110,253,0.2)", borderRadius: "999px",
                padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem",
              }}>{t.toolkitPage.downloadsLabel}</span>
              <h2>{t.toolkitPage.downloadsTitle}</h2>
              <p style={{ color: "rgb(var(--color-text-muted))", maxWidth: "500px", margin: "0.75rem auto 0" }}>
                {t.toolkitPage.downloadsSub}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {toolkitItems.map((item) => (
                <div key={item.title} style={{
                  background: "white", border: "1px solid rgb(var(--color-border))",
                  borderRadius: "var(--radius-lg)", padding: "1.5rem",
                  transition: "all 0.2s",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <h4 style={{ margin: 0, fontSize: "1rem" }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.6, marginBottom: "1rem" }}>{item.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                      <span style={{
                        background: "rgba(13,110,253,0.08)", color: "rgb(13,110,253)",
                        borderRadius: "999px", padding: "0.15rem 0.6rem",
                        fontSize: "0.68rem", fontWeight: 600,
                      }}>{item.tag}</span>
                      <span style={{
                        background: "rgb(var(--color-surface-2))",
                        border: "1px solid rgb(var(--color-border))",
                        borderRadius: "999px", padding: "0.15rem 0.6rem",
                        fontSize: "0.68rem", color: "rgb(var(--color-text-muted))",
                      }}>{item.size}</span>
                    </div>
                    <button style={{
                      background: "rgb(13,110,253)", color: "white", border: "none",
                      borderRadius: "999px", padding: "0.4rem 1rem",
                      fontSize: "0.8rem", fontWeight: 700, cursor: "pointer",
                    }}>{t.toolkitPage.downloadBtn}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethical use */}
        <section className="section">
          <div className="container-narrow" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔐</div>
            <h2 style={{ marginBottom: "1rem" }}>{t.toolkitPage.ethicalLabel}</h2>
            <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.8, marginBottom: "2rem" }}>
              The SpeakUP AI tool is built on principles of educational ethics, child safeguarding, and GDPR compliance. It is tested with youth groups and reviewed by educators before deployment. No user data is stored. The tool does not make autonomous moderation, legal, or enforcement decisions.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/legal/safeguarding" className="btn btn-outline">🛡️ Safeguarding Policy</Link>
              <Link href="/legal/privacy" className="btn btn-ghost">🔒 Privacy Policy</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
