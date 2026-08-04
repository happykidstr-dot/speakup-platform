"use client";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

const partners = [
  { name: "FERI", country: "Poland", flag: "🇵🇱", role: "Coordinator" },
  { name: "Skill Empowerment", country: "Estonia", flag: "🇪🇪", role: "Partner" },
  { name: "Mission: Reconnect", country: "Czech Republic", flag: "🇨🇿", role: "Partner" },
  { name: "ULBS", country: "Romania", flag: "🇷🇴", role: "Partner" },
  { name: "Smart Secure Networks", country: "Poland", flag: "🇵🇱", role: "Partner" },
];

const learnHrefs = ["/learn", "/educators", "/toolkit", "/resources"];
const communityHrefs = ["/community", "/news", "/policy", "/contact"];
const legalHrefs = ["/legal/privacy", "/legal/gdpr", "/accessibility", "/legal/safeguarding"];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ background: "rgb(10, 15, 35)", color: "rgba(255,255,255,0.8)", marginTop: "auto" }}>
      {/* Partner strip */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "2rem 0" }}>
        <div className="container">
          <p style={{ fontSize: "0.75rem", textAlign: "center", color: "rgba(255,255,255,0.4)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {t.footer.partners}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
            {partners.map((p) => (
              <div key={p.name} style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.flag}</span>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginTop: "0.2rem" }}>{p.name}</div>
                {p.role === "Coordinator" && (
                  <div style={{ fontSize: "0.65rem", color: "rgb(255,204,0)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Coordinator</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container" style={{ padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>🗣️</span>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "white" }}>SpeakUP</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>AGAINST HATE</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(255,255,255,0.5)" }}>{t.footer.tagline}</p>
          </div>

          {/* Learn links */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              {t.nav.learn}
            </h4>
            {t.footer.learnLinks.map((label, i) => (
              <Link key={i} href={learnHrefs[i]} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                {label}
              </Link>
            ))}
          </div>

          {/* Community links */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              {t.nav.community}
            </h4>
            {t.footer.communityLinks.map((label, i) => (
              <Link key={i} href={communityHrefs[i]} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                {label}
              </Link>
            ))}
          </div>

          {/* Legal links */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Legal
            </h4>
            {t.footer.legalLinks.map((label, i) => (
              <Link key={i} href={legalHrefs[i]} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* EU Disclaimer Card with EU Logo on Left */}
        <div style={{
          marginTop: "2.5rem",
          padding: "1.5rem",
          background: "rgba(0, 51, 153, 0.25)",
          border: "1px solid rgba(0, 51, 153, 0.5)",
          borderRadius: "var(--radius-lg)",
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
          {/* EU Logo on Left */}
          <div style={{ flexShrink: 0, background: "white", padding: "0.5rem", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/eu-cofunded-logo.svg" alt="Co-funded by the European Union" style={{ width: "130px", height: "auto", display: "block" }} />
          </div>

          {/* Disclaimer Content on Right */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "rgb(255,204,0)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {t.footer.disclaimerTitle || "Disclaimer"}
              </span>
              <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.1)", padding: "0.15rem 0.5rem", borderRadius: "999px" }}>
                {t.footer.cerv}
              </span>
            </div>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0 }}>
              {t.footer.disclaimer}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
