"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";


const signatories = [
  { name: "Ana Kovács", city: "Budapest", country: "Hungary", flag: "🇭🇺", date: "2026-04-01" },
  { name: "Marek Wiśniewski", city: "Warsaw", country: "Poland", flag: "🇵🇱", date: "2026-04-02" },
  { name: "Signe Tamm", city: "Tallinn", country: "Estonia", flag: "🇪🇪", date: "2026-04-03" },
  { name: "Lucia Ionescu", city: "Sibiu", country: "Romania", flag: "🇷🇴", date: "2026-04-04" },
  { name: "Tomáš Novák", city: "Prague", country: "Czech Republic", flag: "🇨🇿", date: "2026-04-05" },
  { name: "Karolina Bąk", city: "Kraków", country: "Poland", flag: "🇵🇱", date: "2026-04-06" },
  { name: "Liina Mägi", city: "Tartu", country: "Estonia", flag: "🇪🇪", date: "2026-04-06" },
  { name: "Andrei Popescu", city: "Cluj-Napoca", country: "Romania", flag: "🇷🇴", date: "2026-04-07" },
  { name: "Jana Dvořáková", city: "Brno", country: "Czech Republic", flag: "🇨🇿", date: "2026-04-07" },
  { name: "Piotr Kowalski", city: "Gdańsk", country: "Poland", flag: "🇵🇱", date: "2026-04-08" },
  { name: "Marta Väli", city: "Pärnu", country: "Estonia", flag: "🇪🇪", date: "2026-04-08" },
  { name: "Elena Radu", city: "Timișoara", country: "Romania", flag: "🇷🇴", date: "2026-04-08" },
];

const pactText = `We, the undersigned, commit to speaking up against online hate speech in our digital communities.

We pledge to:
• Recognise hate speech when we encounter it — including coded and subtle forms
• Not stay silent when hate is directed at others in our communities
• Report hateful content through available platform tools and legal channels
• Support targets of hate speech with solidarity and care
• Choose words that build respect and inclusion, not division
• Never share, amplify or like hateful content — even "as a joke"
• Educate ourselves and others about the harms of hate speech
• Stand for the equal dignity of every person, regardless of their identity

We believe safer digital spaces are possible — and that each of us has a role to play in creating them.`;

const communityActions = [
  { icon: "🎨", title: "Create a Counter-Narrative Post", desc: "Design a social media post promoting inclusion and digital respect. Share with #SpeakUPagainstHate.", tag: "Creative", color: "rgb(139,92,246)" },
  { icon: "📢", title: "Organise a School Discussion", desc: "Facilitate a classroom discussion about hate speech with your peers using our free facilitation guide.", tag: "Education", color: "rgb(13,110,253)" },
  { icon: "🤝", title: "Recruit 5 Pact Signatories", desc: "Share the Anti-Hate Pact with 5 friends and invite them to sign. Every signature counts.", tag: "Community", color: "rgb(16,185,129)" },
  { icon: "🎤", title: "Share Your Story", desc: "Tell us about a time you witnessed or countered online hate. Your story can inspire others.", tag: "Stories", color: "rgb(245,158,11)" },
];

const stories = [
  { name: "Maria, 19", country: "Romania 🇷🇴", story: "I saw a classmate being targeted in a group chat because of their religion. I didn't know what to do at first, but after using SpeakUP I found the courage to speak up privately and report the messages." },
  { name: "Jakub, 22", country: "Czech Republic 🇨🇿", story: "I used to scroll past hate comments thinking they weren't my problem. Now I understand that silence is also a choice — and it's usually the wrong one." },
  { name: "Kristiina, 17", country: "Estonia 🇪🇪", story: "Our school organised a SpeakUP session and we made an Anti-Hate Pact together. It felt like our class became closer and more aware of each other's experiences." },
];

export default function CommunityPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", city: "", country: "", role: "", consent: false, display: false });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"pact" | "actions" | "stories">("pact");
  const [localSignatories, setLocalSignatories] = useState(signatories);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.city || !formData.country || !formData.consent) return;
    if (formData.display) {
      setLocalSignatories([
        { name: formData.name, city: formData.city, country: formData.country, flag: "🌍", date: new Date().toISOString().split("T")[0] },
        ...localSignatories,
      ]);
    }
    setSubmitted(true);
  };

  const tabStyle = (tab: string) => ({
    padding: "0.75rem 1.5rem",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "all 0.2s",
    background: activeTab === tab ? "rgb(13,110,253)" : "transparent",
    color: activeTab === tab ? "white" : "rgb(var(--color-text-muted))",
  });

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, rgb(10,15,35) 0%, rgb(0,80,60) 50%, rgb(16,185,129) 100%)",
          padding: "5rem 0 4rem", color: "white", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-30%", right: "-10%", width: "600px", height: "600px",
            borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-flex", background: "rgba(16,185,129,0.2)", color: "rgb(100,255,200)",
              border: "1px solid rgba(16,185,129,0.4)", borderRadius: "999px",
              padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
            }}>{t.communityPage.badge}</span>
            <h1 style={{ color: "white", marginBottom: "1rem", maxWidth: "680px" }}>
              {t.communityPage.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "580px", lineHeight: 1.7 }}>
              {t.communityPage.sub}
            </p>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
              {[
                { val: localSignatories.length + "+", label: "Pact Signatories" },
                { val: "5", label: "Countries" },
                { val: "12+", label: "Community Actions" },
                { val: "3", label: "Youth Stories" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>{s.val}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div style={{ borderBottom: "1px solid rgb(var(--color-border))", background: "white", position: "sticky", top: "68px", zIndex: 50 }}>
          <div className="container" style={{ display: "flex", gap: "0.5rem", padding: "0.75rem 1.5rem" }}>
            <button style={tabStyle("pact")} onClick={() => setActiveTab("pact")}>{t.communityPage.tabPact}</button>
            <button style={tabStyle("actions")} onClick={() => setActiveTab("actions")}>{t.communityPage.tabActions}</button>
            <button style={tabStyle("stories")} onClick={() => setActiveTab("stories")}>{t.communityPage.tabStories}</button>
          </div>
        </div>

        {/* ── PACT TAB ─────────────────────────────────────────────── */}
        {activeTab === "pact" && (
          <section className="section">
            <div className="container">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>

                {/* Pact text */}
                <div>
                  <h2 style={{ marginBottom: "1.5rem" }}>{t.communityPage.pactTitle}</h2>
                  <div style={{
                    background: "rgb(var(--color-surface-2))",
                    border: "1px solid rgb(var(--color-border))",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    fontFamily: "Georgia, serif",
                    lineHeight: 1.9,
                    fontSize: "0.9rem",
                    color: "rgb(var(--color-text))",
                    whiteSpace: "pre-line",
                    marginBottom: "1.5rem",
                  }}>
                    {pactText}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "rgb(var(--color-text-muted))" }}>
                    🔒 By signing, you agree to your name (if consented) being displayed on the public signatory wall. Your email will only be used to send a confirmation. GDPR compliant.
                  </p>
                </div>

                {/* Form / Confirmation */}
                <div>
                  {!submitted ? (
                    <div style={{ background: "white", border: "1px solid rgb(var(--color-border))", borderRadius: "var(--radius-lg)", padding: "2rem", boxShadow: "var(--shadow-md)" }}>
                      <h3 style={{ marginBottom: "0.5rem" }}>{t.communityPage.signPactTitle}</h3>
                      <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                        {t.communityPage.signPactSub}
                      </p>
                      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {[
                          { field: "name", label: t.communityPage.nameLabel, placeholder: "Your name", type: "text" },
                          { field: "email", label: t.communityPage.emailLabel, placeholder: "you@example.com", type: "email" },
                          { field: "city", label: t.communityPage.cityLabel, placeholder: "Your city", type: "text" },
                        ].map(({ field, label, placeholder, type }) => (
                          <div key={field}>
                            <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem", color: "rgb(var(--color-text))" }}>{label}</label>
                            <input
                              type={type}
                              placeholder={placeholder}
                              value={formData[field as keyof typeof formData] as string}
                              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                              required
                              style={{
                                width: "100%", padding: "0.65rem 0.9rem",
                                border: "1.5px solid rgb(var(--color-border))",
                                borderRadius: "var(--radius-md)", fontSize: "0.9rem",
                                outline: "none", transition: "border-color 0.2s",
                                fontFamily: "Inter, sans-serif",
                              }}
                              onFocus={(e) => e.target.style.borderColor = "rgb(13,110,253)"}
                              onBlur={(e) => e.target.style.borderColor = "rgb(var(--color-border))"}
                            />
                          </div>
                        ))}

                        {/* Country select */}
                        <div>
                          <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem" }}>{t.communityPage.countryLabel}</label>
                          <select
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            required
                            style={{
                              width: "100%", padding: "0.65rem 0.9rem",
                              border: "1.5px solid rgb(var(--color-border))",
                              borderRadius: "var(--radius-md)", fontSize: "0.9rem",
                              background: "white", outline: "none",
                            }}>
                            <option value="">Select your country</option>
                            {["Poland", "Estonia", "Czech Republic", "Romania", "Germany", "France", "Spain", "Italy", "Netherlands", "Sweden", "Austria", "Belgium", "Other EU Country"].map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>

                        {/* Role */}
                        <div>
                          <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem" }}>{t.communityPage.roleLabel}</label>
                          <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            style={{
                              width: "100%", padding: "0.65rem 0.9rem",
                              border: "1.5px solid rgb(var(--color-border))",
                              borderRadius: "var(--radius-md)", fontSize: "0.9rem",
                              background: "white", outline: "none",
                            }}>
                             <option value="">{t.communityPage.roleOptions[0]}</option>
                             <option value="youth">{t.communityPage.roleOptions[1]}</option>
                             <option value="educator">{t.communityPage.roleOptions[2]}</option>
                             <option value="ngo">{t.communityPage.roleOptions[3]}</option>
                             <option value="student">{t.communityPage.roleOptions[4]}</option>
                             <option value="other">{t.communityPage.roleOptions[5]}</option>
                          </select>
                        </div>

                        {/* Checkboxes */}
                        {[
                          { field: "consent", label: t.communityPage.consentLabel },
                          { field: "display", label: t.communityPage.displayLabel },
                        ].map(({ field, label }) => (
                          <label key={field} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", cursor: "pointer" }}>
                            <input
                              type="checkbox"
                              checked={formData[field as keyof typeof formData] as boolean}
                              onChange={(e) => setFormData({ ...formData, [field]: e.target.checked })}
                              style={{ marginTop: "0.2rem", accentColor: "rgb(13,110,253)", width: 16, height: 16 }}
                            />
                            <span style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.5 }}>{label}</span>
                          </label>
                        ))}

                        <button type="submit" style={{
                          background: "linear-gradient(135deg, rgb(0,100,80), rgb(16,185,129))",
                          color: "white", border: "none", borderRadius: "999px",
                          padding: "0.85rem 2rem", fontSize: "1rem", fontWeight: 700,
                          cursor: "pointer", marginTop: "0.5rem",
                          boxShadow: "0 4px 14px rgba(16,185,129,0.35)",
                          transition: "all 0.2s",
                        }}>{t.communityPage.signBtn}</button>
                      </form>
                    </div>
                  ) : (
                    <div style={{
                      background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.04))",
                      border: "2px solid rgba(16,185,129,0.3)",
                      borderRadius: "var(--radius-lg)", padding: "3rem 2rem",
                      textAlign: "center",
                    }}>
                      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✊</div>
                      <h3 style={{ color: "rgb(16,185,129)", marginBottom: "0.75rem" }}>{t.communityPage.successTitle}</h3>
                      <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        {t.communityPage.successSub}
                      </p>
                      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <button onClick={() => setActiveTab("actions")} style={{
                          background: "rgb(13,110,253)", color: "white", border: "none",
                          borderRadius: "999px", padding: "0.65rem 1.5rem",
                          fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                        }}>{t.communityPage.takeActionBtn}</button>
                        <Link href="/learn" className="btn btn-outline">📚 Start Learning</Link>
                      </div>
                    </div>
                  )}

                  {/* Signatory count */}
                  <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                    <p style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))" }}>
                      🌍 <strong>{localSignatories.length} people</strong> have already signed from 5+ countries
                    </p>
                  </div>
                </div>
              </div>

              {/* Signatory Wall */}
              <div style={{ marginTop: "4rem" }}>
                <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>{t.communityPage.signatoryWall}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
                  {localSignatories.map((s, i) => (
                    <div key={i} style={{
                      background: "white", border: "1px solid rgb(var(--color-border))",
                      borderRadius: "var(--radius-md)", padding: "0.6rem 1rem",
                      display: "flex", alignItems: "center", gap: "0.5rem",
                      boxShadow: "var(--shadow-sm)", fontSize: "0.85rem",
                    }}>
                      <span>{s.flag}</span>
                      <div>
                        <div style={{ fontWeight: 600 }}>{s.name}</div>
                        <div style={{ fontSize: "0.72rem", color: "rgb(var(--color-text-muted))" }}>{s.city}, {s.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── ACTIONS TAB ──────────────────────────────────────────── */}
        {activeTab === "actions" && (
          <section className="section">
            <div className="container">
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2>{t.communityPage.actionTitle}</h2>
                <p style={{ color: "rgb(var(--color-text-muted))", maxWidth: "500px", margin: "0.75rem auto 0" }}>
                  {t.communityPage.actionSub}
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                {communityActions.map((a) => (
                  <div key={a.title} style={{
                    background: "white", border: "1px solid rgb(var(--color-border))",
                    borderRadius: "var(--radius-lg)", padding: "2rem",
                    borderTop: `4px solid ${a.color}`,
                    transition: "all 0.2s",
                  }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{a.icon}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1rem", margin: 0 }}>{a.title}</h3>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.6, marginBottom: "1.25rem" }}>{a.desc}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{
                        background: a.color + "15", color: a.color,
                        borderRadius: "999px", padding: "0.2rem 0.7rem",
                        fontSize: "0.7rem", fontWeight: 700,
                      }}>{a.tag}</span>
                      <button style={{
                        background: a.color, color: "white", border: "none",
                        borderRadius: "999px", padding: "0.4rem 1rem",
                        fontSize: "0.82rem", fontWeight: 700, cursor: "pointer",
                      }}>Start →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── STORIES TAB ─────────────────────────────────────────── */}
        {activeTab === "stories" && (
          <section className="section">
            <div className="container">
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2>{t.communityPage.storiesTitle}</h2>
                <p style={{ color: "rgb(var(--color-text-muted))", maxWidth: "520px", margin: "0.75rem auto 0" }}>
                  {t.communityPage.storiesSub}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "720px", margin: "0 auto" }}>
                {stories.map((s) => (
                  <div key={s.name} style={{
                    background: "white", border: "1px solid rgb(var(--color-border))",
                    borderRadius: "var(--radius-lg)", padding: "2rem",
                    borderLeft: "4px solid rgb(16,185,129)",
                  }}>
                    <div style={{ fontSize: "1.5rem", color: "rgb(16,185,129)", marginBottom: "1rem", lineHeight: 1 }}>"</div>
                    <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgb(var(--color-text))", marginBottom: "1.25rem", fontStyle: "italic" }}>{s.story}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: "linear-gradient(135deg, rgb(16,185,129), rgb(0,80,60))",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "white", fontWeight: 800, fontSize: "0.9rem",
                      }}>{s.name[0]}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{s.name}</div>
                        <div style={{ fontSize: "0.78rem", color: "rgb(var(--color-text-muted))" }}>{s.country}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit story CTA */}
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <div style={{
                  background: "rgb(var(--color-surface-2))", border: "1px solid rgb(var(--color-border))",
                  borderRadius: "var(--radius-lg)", padding: "2rem", maxWidth: "500px", margin: "0 auto",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✍️</div>
                  <h3 style={{ marginBottom: "0.5rem" }}>{t.communityPage.shareTitle}</h3>
                  <p style={{ fontSize: "0.875rem", color: "rgb(var(--color-text-muted))", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                    {t.communityPage.shareSub}
                  </p>
                  <Link href="/contact" className="btn btn-primary">{t.communityPage.shareBtn}</Link>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
