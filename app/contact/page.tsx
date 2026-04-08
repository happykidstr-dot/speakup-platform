"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactReasons = [
  { value: "general", label: "General Enquiry", icon: "💬" },
  { value: "educator", label: "Educator Partnership", icon: "👩‍🏫" },
  { value: "partner", label: "Project Partnership", icon: "🤝" },
  { value: "media", label: "Media & Press", icon: "📰" },
  { value: "story", label: "Share My Story", icon: "✍️" },
  { value: "technical", label: "Technical Issue", icon: "🔧" },
  { value: "safeguarding", label: "Safeguarding Concern", icon: "🛡️" },
];

const partners = [
  { name: "FERI (Coordinator)", country: "Poland 🇵🇱", email: "info@feri.org.pl" },
  { name: "Skill Empowerment", country: "Estonia 🇪🇪", email: "info@skillempowerment.eu" },
  { name: "Mission: Reconnect", country: "Czech Republic 🇨🇿", email: "info@missionreconnect.cz" },
  { name: "ULBS", country: "Romania 🇷🇴", email: "speakup@ulbsibiu.ro" },
  { name: "Smart Secure Networks", country: "Poland 🇵🇱", email: "contact@ssn.pl" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", organisation: "", country: "", reason: "", message: "", consent: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [activePartner, setActivePartner] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.reason || !form.message || !form.consent) return;
    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("form-name", "contact");
      Object.entries(form).forEach(([k, v]) => formData.append(k, String(v)));

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(Object.fromEntries(formData) as Record<string, string>).toString(),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      {/* Hidden Netlify form for detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="organisation" />
        <input type="text" name="country" />
        <select name="reason" />
        <textarea name="message" />
        <input type="checkbox" name="consent" />
      </form>

      <main id="main-content">

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, rgb(10,15,35) 0%, rgb(0,51,153) 60%, rgb(13,110,253) 100%)",
          padding: "5rem 0 4rem", color: "white", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-20%", left: "-5%", width: "400px", height: "400px",
            borderRadius: "50%", background: "radial-gradient(circle, rgba(255,204,0,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-flex", background: "rgba(255,204,0,0.15)", color: "rgb(255,204,0)",
              border: "1px solid rgba(255,204,0,0.3)", borderRadius: "999px",
              padding: "0.3rem 0.9rem", fontSize: "0.72rem", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem",
            }}>✉️ Get in Touch</span>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>Contact Us</h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "520px", lineHeight: 1.7 }}>
              Questions, partnerships, media enquiries, or safeguarding concerns — we're here to help. We aim to respond within 3 working days.
            </p>
          </div>
        </section>

        {/* Main Grid */}
        <section className="section">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }}>

              {/* Left column — info */}
              <div>
                {/* Quick contact */}
                <h3 style={{ marginBottom: "1.25rem" }}>Quick Contact</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                  {[
                    { icon: "📧", label: "General", value: "contact@speakupagainsthate.eu", href: "mailto:contact@speakupagainsthate.eu" },
                    { icon: "📰", label: "Media & Press", value: "media@speakupagainsthate.eu", href: "mailto:media@speakupagainsthate.eu" },
                    { icon: "🛡️", label: "Safeguarding", value: "safeguarding@speakupagainsthate.eu", href: "mailto:safeguarding@speakupagainsthate.eu" },
                  ].map((c) => (
                    <a key={c.label} href={c.href} style={{
                      display: "flex", alignItems: "center", gap: "1rem",
                      background: "white", border: "1px solid rgb(var(--color-border))",
                      borderRadius: "var(--radius-md)", padding: "1rem 1.25rem",
                      textDecoration: "none", transition: "all 0.2s",
                      color: "rgb(var(--color-text))",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgb(13,110,253)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--color-border))";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}>
                      <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: "0.72rem", color: "rgb(var(--color-text-muted))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{c.label}</div>
                        <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "rgb(13,110,253)" }}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social */}
                <h4 style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}>Follow the Project</h4>
                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem" }}>
                  {[
                    { icon: "𝕏", label: "Twitter / X", color: "rgb(15,20,25)" },
                    { icon: "in", label: "LinkedIn", color: "rgb(0,119,181)" },
                    { icon: "f", label: "Facebook", color: "rgb(24,119,242)" },
                    { icon: "▶", label: "YouTube", color: "rgb(255,0,0)" },
                  ].map((s) => (
                    <button key={s.label} title={s.label} style={{
                      width: 40, height: 40, borderRadius: "10px",
                      background: s.color, color: "white", border: "none",
                      fontWeight: 800, fontSize: "0.9rem", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = "0.8"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                      {s.icon}
                    </button>
                  ))}
                </div>

                {/* Partner contacts */}
                <h4 style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}>Contact a Partner Directly</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {partners.map((p, i) => (
                    <div key={p.name}>
                      <button onClick={() => setActivePartner(activePartner === i ? null : i)} style={{
                        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "0.75rem 1rem", borderRadius: "var(--radius-md)",
                        background: activePartner === i ? "rgba(13,110,253,0.06)" : "rgb(var(--color-surface-2))",
                        border: `1px solid ${activePartner === i ? "rgba(13,110,253,0.3)" : "rgb(var(--color-border))"}`,
                        cursor: "pointer", transition: "all 0.2s",
                      }}>
                        <div style={{ textAlign: "left" }}>
                          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "rgb(var(--color-text))" }}>{p.name}</div>
                          <div style={{ fontSize: "0.72rem", color: "rgb(var(--color-text-muted))" }}>{p.country}</div>
                        </div>
                        <span style={{
                          color: "rgb(13,110,253)", fontSize: "1rem",
                          transform: activePartner === i ? "rotate(45deg)" : "none",
                          transition: "transform 0.2s",
                        }}>+</span>
                      </button>
                      {activePartner === i && (
                        <div style={{
                          padding: "0.75rem 1rem",
                          background: "rgba(13,110,253,0.04)",
                          border: "1px solid rgba(13,110,253,0.15)",
                          borderTop: "none", borderRadius: "0 0 var(--radius-md) var(--radius-md)",
                        }}>
                          <a href={`mailto:${p.email}`} style={{ fontSize: "0.83rem", color: "rgb(13,110,253)", fontWeight: 600 }}>
                            📧 {p.email}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — form */}
              <div>
                {status === "success" ? (
                  <div style={{
                    background: "rgba(16,185,129,0.06)", border: "2px solid rgba(16,185,129,0.25)",
                    borderRadius: "var(--radius-xl)", padding: "3.5rem 2rem", textAlign: "center",
                  }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
                    <h2 style={{ color: "rgb(16,185,129)", marginBottom: "0.75rem" }}>Message Sent!</h2>
                    <p style={{ color: "rgb(var(--color-text-muted))", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                      Thank you, <strong>{form.name}</strong>. We've received your message and will get back to you at <strong>{form.email}</strong> within 3 working days.
                    </p>
                    <button onClick={() => { setForm({ name:"",email:"",organisation:"",country:"",reason:"",message:"",consent:false }); setStatus("idle"); }} style={{
                      background: "rgb(16,185,129)", color: "white", border: "none",
                      borderRadius: "999px", padding: "0.65rem 1.5rem",
                      fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                    }}>Send Another Message</button>
                  </div>
                ) : (
                  <div style={{
                    background: "white", border: "1px solid rgb(var(--color-border))",
                    borderRadius: "var(--radius-xl)", padding: "2.5rem",
                    boxShadow: "var(--shadow-md)",
                  }}>
                    <h2 style={{ marginBottom: "0.4rem" }}>Send Us a Message</h2>
                    <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "0.875rem", marginBottom: "2rem" }}>
                      All fields marked * are required. We respond within 3 working days.
                    </p>

                    <form onSubmit={handleSubmit} name="contact" data-netlify="true" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      <input type="hidden" name="form-name" value="contact" />

                      {/* Name + Email */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        {[
                          { name: "name", label: "Full Name *", type: "text", placeholder: "Your name" },
                          { name: "email", label: "Email Address *", type: "email", placeholder: "you@example.com" },
                        ].map((f) => (
                          <div key={f.name}>
                            <label style={{ display: "block", fontWeight: 600, fontSize: "0.82rem", marginBottom: "0.35rem", color: "rgb(var(--color-text))" }}>{f.label}</label>
                            <input
                              type={f.type} name={f.name} placeholder={f.placeholder}
                              value={form[f.name as keyof typeof form] as string}
                              onChange={handleChange} required={f.name !== "organisation"}
                              style={{
                                width: "100%", padding: "0.65rem 0.9rem",
                                border: "1.5px solid rgb(var(--color-border))",
                                borderRadius: "var(--radius-md)", fontSize: "0.88rem",
                                outline: "none", fontFamily: "Inter, sans-serif",
                                transition: "border-color 0.2s",
                              }}
                              onFocus={(e) => e.target.style.borderColor = "rgb(13,110,253)"}
                              onBlur={(e) => e.target.style.borderColor = "rgb(var(--color-border))"}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Organisation + Country */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div>
                          <label style={{ display: "block", fontWeight: 600, fontSize: "0.82rem", marginBottom: "0.35rem" }}>Organisation</label>
                          <input
                            type="text" name="organisation" placeholder="School, NGO, University..."
                            value={form.organisation} onChange={handleChange}
                            style={{
                              width: "100%", padding: "0.65rem 0.9rem",
                              border: "1.5px solid rgb(var(--color-border))",
                              borderRadius: "var(--radius-md)", fontSize: "0.88rem",
                              outline: "none", fontFamily: "Inter, sans-serif", transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => e.target.style.borderColor = "rgb(13,110,253)"}
                            onBlur={(e) => e.target.style.borderColor = "rgb(var(--color-border))"}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontWeight: 600, fontSize: "0.82rem", marginBottom: "0.35rem" }}>Country</label>
                          <select name="country" value={form.country} onChange={handleChange}
                            style={{
                              width: "100%", padding: "0.65rem 0.9rem",
                              border: "1.5px solid rgb(var(--color-border))",
                              borderRadius: "var(--radius-md)", fontSize: "0.88rem",
                              background: "white", outline: "none", fontFamily: "Inter, sans-serif",
                            }}>
                            <option value="">Select country</option>
                            {["Poland", "Estonia", "Czech Republic", "Romania", "Germany", "France", "Spain", "Italy", "Netherlands", "Sweden", "Austria", "Belgium", "Other EU"].map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Reason */}
                      <div>
                        <label style={{ display: "block", fontWeight: 600, fontSize: "0.82rem", marginBottom: "0.5rem" }}>Reason for Contact *</label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                          {contactReasons.map((r) => (
                            <button key={r.value} type="button"
                              onClick={() => setForm((p) => ({ ...p, reason: r.value }))}
                              style={{
                                padding: "0.45rem 0.9rem", borderRadius: "999px",
                                border: "1.5px solid",
                                borderColor: form.reason === r.value ? "rgb(13,110,253)" : "rgb(var(--color-border))",
                                background: form.reason === r.value ? "rgba(13,110,253,0.08)" : "white",
                                color: form.reason === r.value ? "rgb(13,110,253)" : "rgb(var(--color-text-muted))",
                                fontWeight: 600, fontSize: "0.78rem", cursor: "pointer",
                                transition: "all 0.15s",
                              }}>
                              {r.icon} {r.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ display: "block", fontWeight: 600, fontSize: "0.82rem", marginBottom: "0.35rem" }}>Message *</label>
                        <textarea
                          name="message" placeholder="Tell us how we can help you..."
                          value={form.message} onChange={handleChange} required rows={5}
                          style={{
                            width: "100%", padding: "0.75rem 0.9rem",
                            border: "1.5px solid rgb(var(--color-border))",
                            borderRadius: "var(--radius-md)", fontSize: "0.88rem",
                            outline: "none", fontFamily: "Inter, sans-serif",
                            resize: "vertical", lineHeight: 1.6, transition: "border-color 0.2s",
                          }}
                          onFocus={(e) => e.target.style.borderColor = "rgb(13,110,253)"}
                          onBlur={(e) => e.target.style.borderColor = "rgb(var(--color-border))"}
                        />
                      </div>

                      {/* Consent */}
                      <label style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", cursor: "pointer" }}>
                        <input
                          type="checkbox" name="consent"
                          checked={form.consent} onChange={handleChange}
                          style={{ marginTop: "0.2rem", accentColor: "rgb(13,110,253)", width: 16, height: 16, flexShrink: 0 }}
                        />
                        <span style={{ fontSize: "0.78rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.6 }}>
                          I agree to my data being processed in accordance with the <a href="/legal/privacy" style={{ color: "rgb(13,110,253)" }}>Privacy Policy</a> for the purpose of responding to this enquiry. *
                        </span>
                      </label>

                      {/* Safeguarding note */}
                      {form.reason === "safeguarding" && (
                        <div style={{
                          background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)",
                          borderRadius: "var(--radius-md)", padding: "1rem",
                          fontSize: "0.82rem", color: "rgb(var(--color-text))", lineHeight: 1.6,
                        }}>
                          🛡️ <strong>Safeguarding concern?</strong> If this is urgent or relates to the immediate safety of a young person, please contact your local emergency services or national child protection authority directly. We aim to respond to safeguarding enquiries within 24 hours.
                        </div>
                      )}

                      {/* Submit */}
                      {status === "error" && (
                        <div style={{ padding: "0.75rem 1rem", background: "rgba(239,68,68,0.08)", borderRadius: "var(--radius-md)", fontSize: "0.85rem", color: "rgb(239,68,68)" }}>
                          ❌ Something went wrong. Please try again or email us directly.
                        </div>
                      )}
                      <button type="submit" disabled={status === "sending" || !form.consent} style={{
                        background: status === "sending" ? "rgb(var(--color-border))" : "linear-gradient(135deg, rgb(0,51,153), rgb(13,110,253))",
                        color: "white", border: "none", borderRadius: "999px",
                        padding: "0.9rem 2rem", fontSize: "1rem", fontWeight: 700,
                        cursor: status === "sending" || !form.consent ? "not-allowed" : "pointer",
                        opacity: !form.consent ? 0.6 : 1,
                        boxShadow: form.consent ? "0 4px 14px rgba(13,110,253,0.35)" : "none",
                        transition: "all 0.2s",
                      }}>
                        {status === "sending" ? "⏳ Sending..." : "📨 Send Message"}
                      </button>

                      <p style={{ fontSize: "0.75rem", color: "rgb(var(--color-text-muted))", textAlign: "center" }}>
                        🔒 Your data is protected under GDPR. We will never share your information with third parties.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Response time strip */}
        <section className="section-sm" style={{ background: "rgb(var(--color-surface-2))", borderTop: "1px solid rgb(var(--color-border))" }}>
          <div className="container">
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { icon: "⏱", label: "General enquiries", value: "3 working days" },
                { icon: "📰", label: "Media requests", value: "24–48 hours" },
                { icon: "🛡️", label: "Safeguarding concerns", value: "Within 24 hours" },
                { icon: "🤝", label: "Partnership proposals", value: "5 working days" },
              ].map((s) => (
                <div key={s.label} style={{
                  background: "white", border: "1px solid rgb(var(--color-border))",
                  borderRadius: "var(--radius-md)", padding: "1rem 1.5rem",
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  minWidth: 220,
                }}>
                  <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "rgb(var(--color-text-muted))", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{s.label}</div>
                    <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "rgb(var(--color-text))" }}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
