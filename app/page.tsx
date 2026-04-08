"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const stats = [
  { value: "5", label: "Countries", icon: "🌍" },
  { value: "5", label: "Languages", icon: "🗣️" },
  { value: "6", label: "Learning Modules", icon: "📚" },
  { value: "24", label: "Month Project", icon: "📅" },
];

const features = [
  {
    icon: "📚",
    title: "Youth Learning Area",
    desc: "6 interactive modules covering hate speech recognition, safe responses, and digital citizenship. Available in 5 languages.",
    href: "/learn",
    color: "rgba(13,110,253,0.08)",
    accent: "rgb(13,110,253)",
  },
  {
    icon: "👩‍🏫",
    title: "Educator Resources",
    desc: "Lesson plans, workshop guides, and professional development tools to bring hate speech education into the classroom.",
    href: "/educators",
    color: "rgba(16,185,129,0.08)",
    accent: "rgb(16,185,129)",
  },
  {
    icon: "🤖",
    title: "AI Awareness Tool",
    desc: "An educational AI tool that helps young people recognise patterns of online hate. Safe, ethical, and GDPR-compliant.",
    href: "/toolkit",
    color: "rgba(255,100,55,0.08)",
    accent: "rgb(255,100,55)",
  },
  {
    icon: "🤝",
    title: "Community Actions",
    desc: "Join Anti-Hate Pacts, share your story, and take micro-actions to make the internet safer for everyone.",
    href: "/community",
    color: "rgba(139,92,246,0.08)",
    accent: "rgb(139,92,246)",
  },
];

const modules = [
  { num: "01", title: "What is Online Hate Speech?", tag: "Foundation" },
  { num: "02", title: "Recognising Hate Online", tag: "Awareness" },
  { num: "03", title: "Responding Safely", tag: "Skills" },
  { num: "04", title: "Reporting & Protecting Yourself", tag: "Action" },
  { num: "05", title: "Creating Counter-Narratives", tag: "Creative" },
  { num: "06", title: "Digital Citizenship & Rights", tag: "Rights" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{
          padding: "6rem 0 5rem",
          position: "relative",
          overflow: "hidden",
          background: `
            radial-gradient(circle at 20% 80%, rgba(255,204,0,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%),
            linear-gradient(135deg, rgb(0,51,153) 0%, rgb(13,80,200) 40%, rgb(60,130,255) 75%, rgb(30,160,200) 100%)
          `,
        }}>
          {/* Background decoration */}
          <div style={{
            position: "absolute", top: "-20%", right: "-10%",
            width: "600px", height: "600px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,204,0,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "720px" }}>

              {/* EU Badge */}
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="badge" style={{
                  background: "rgba(255,204,0,0.15)",
                  color: "rgb(255,204,0)",
                  border: "1px solid rgba(255,204,0,0.3)",
                  fontSize: "0.72rem",
                }}>
                  🇪🇺 CERV Project · EU-Funded Platform
                </span>
              </div>

              <h1 className="animate-fade-up" style={{ color: "white", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                Stand Up.
                <br />
                <span style={{ color: "rgb(255, 204, 0)" }}>Speak Up.</span>
                <br />
                Against Hate.
              </h1>

              <p className="animate-fade-up delay-100" style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1.15rem",
                maxWidth: "580px",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}>
                A multilingual platform empowering young people and educators to recognise, respond to, and counter online hate speech — across 5 European countries.
              </p>

              <div className="animate-fade-up delay-200" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/learn" className="btn btn-accent btn-lg animate-pulse-glow">
                  🚀 Start Learning Free
                </Link>
                <Link href="/toolkit" className="btn btn-ghost btn-lg" style={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.08)",
                }}>
                  🤖 Explore AI Tool
                </Link>
              </div>

              {/* Stats */}
              <div className="animate-fade-up delay-300" style={{
                display: "flex", gap: "2rem", marginTop: "3rem", flexWrap: "wrap",
              }}>
                {stats.map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {s.icon} {s.value}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What is online hate? ──────────────────────────────────── */}
        <section className="section" style={{ background: "rgb(var(--color-surface-2))" }}>
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}>
              <div>
                <span className="badge badge-primary" style={{ marginBottom: "1rem", display: "inline-flex" }}>What We Stand Against</span>
                <h2 style={{ marginBottom: "1rem" }}>Online hate speech affects millions of young people every day</h2>
                <p style={{ color: "rgb(var(--color-text-muted))", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                  From social media to gaming platforms, young people face hateful messages, discrimination, and harassment online. Without the right tools and knowledge, it can be overwhelming to know how to respond.
                </p>
                <p style={{ color: "rgb(var(--color-text-muted))", marginBottom: "2rem", fontSize: "1.05rem" }}>
                  SpeakUP against Hate gives youth and educators practical, evidence-based tools to understand, recognise, and constructively counter online hate — in 5 European languages.
                </p>
                <Link href="/about" className="btn btn-outline">
                  Learn About the Project →
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { icon: "😰", stat: "70%", desc: "of young Europeans have witnessed hate speech online" },
                  { icon: "🤐", stat: "52%", desc: "feel unable to respond when they see hate online" },
                  { icon: "📱", stat: "4 in 5", desc: "hate speech incidents go unreported" },
                  { icon: "✊", stat: "89%", desc: "want more education on how to respond safely" },
                ].map((item) => (
                  <div key={item.stat} className="card" style={{ padding: "1.25rem", textAlign: "center" }}>
                    <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "rgb(var(--color-primary))", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.stat}
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="badge badge-primary" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>Platform Sections</span>
              <h2>Everything you need to fight hate online</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {features.map((f) => (
                <Link key={f.href} href={f.href} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: "2rem", height: "100%" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = f.accent;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.1)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--color-border))";
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                    }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: "14px",
                      background: f.color, display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem",
                    }}>
                      {f.icon}
                    </div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{f.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "rgb(var(--color-text-muted))", lineHeight: 1.6 }}>{f.desc}</p>
                    <div style={{ marginTop: "1rem", fontSize: "0.85rem", fontWeight: 600, color: f.accent }}>
                      Explore →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Modules Preview ──────────────────────────────────────── */}
        <section className="section" style={{ background: "rgb(var(--color-surface-2))" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge badge-accent" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>Learning Path</span>
              <h2>6 Free Modules. 5 Languages.</h2>
              <p style={{ color: "rgb(var(--color-text-muted))", marginTop: "0.75rem", maxWidth: "500px", margin: "0.75rem auto 0" }}>
                Start your journey to becoming a confident digital citizen and anti-hate advocate.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {modules.map((m) => (
                <Link key={m.num} href={`/learn/modules/${m.num}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "white",
                    border: "1px solid rgb(var(--color-border))",
                    borderRadius: "var(--radius-md)",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "all var(--transition)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgb(13,110,253)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--color-border))";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "12px",
                      background: "linear-gradient(135deg, rgb(0,51,153), rgb(13,110,253))",
                      color: "white", fontWeight: 800, fontSize: "0.9rem",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      flexShrink: 0,
                    }}>
                      {m.num}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "rgb(var(--color-text))" }}>{m.title}</div>
                      <span className="badge badge-primary" style={{ fontSize: "0.65rem", marginTop: "0.3rem" }}>{m.tag}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/learn" className="btn btn-primary btn-lg">
                📚 Start with Module 1 — Free
              </Link>
            </div>
          </div>
        </section>

        {/* ── Anti-Hate Pact CTA ───────────────────────────────────── */}
        <section className="section" style={{
          background: "linear-gradient(135deg, rgb(10,15,35), rgb(0,51,153))",
          color: "white",
        }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✊</div>
            <h2 style={{ color: "white", marginBottom: "1rem" }}>Sign the Anti-Hate Pact</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto 2rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
              Join thousands of young people and educators across Europe committing to make online spaces safer and more respectful for everyone.
            </p>
            <Link href="/community/pacts" className="btn btn-accent btn-lg">
              🤝 Sign the Pact
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
