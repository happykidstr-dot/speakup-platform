import Link from "next/link";

const partners = [
  { name: "FERI", country: "Poland", flag: "🇵🇱", role: "Coordinator" },
  { name: "Skill Empowerment", country: "Estonia", flag: "🇪🇪", role: "Partner" },
  { name: "Mission: Reconnect", country: "Czech Republic", flag: "🇨🇿", role: "Partner" },
  { name: "ULBS", country: "Romania", flag: "🇷🇴", role: "Partner" },
  { name: "Smart Secure Networks", country: "Poland", flag: "🇵🇱", role: "Partner" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "rgb(10, 15, 35)",
      color: "rgba(255,255,255,0.8)",
      marginTop: "auto",
    }}>
      {/* Partner strip */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "2rem 0",
      }}>
        <div className="container">
          <p style={{ fontSize: "0.75rem", textAlign: "center", color: "rgba(255,255,255,0.4)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Project Partners
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
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(255,255,255,0.5)" }}>
              Empowering young people and educators to recognise, respond to, and counter online hate speech.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Learn
            </h4>
            {[
              ["Youth Learning Area", "/learn"],
              ["Educator Resources", "/educators"],
              ["Toolkit & AI Tool", "/toolkit"],
              ["Resource Library", "/resources"],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                {label}
              </Link>
            ))}
          </div>

          {/* Community */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Community
            </h4>
            {[
              ["Community Actions", "/community"],
              ["News & Events", "/news"],
              ["Policy Briefs", "/policy"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                {label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Legal
            </h4>
            {[
              ["Privacy Policy", "/legal/privacy"],
              ["GDPR Notice", "/legal/gdpr"],
              ["Accessibility", "/accessibility"],
              ["Safeguarding", "/legal/safeguarding"],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            background: "rgba(0, 51, 153, 0.4)",
            border: "1px solid rgba(0, 51, 153, 0.5)",
            borderRadius: "var(--radius-md)",
            padding: "0.6rem 1rem",
          }}>
            <span style={{ fontSize: "1.5rem" }}>🇪🇺</span>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgb(255,204,0)" }}>Co-funded by the European Union</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)" }}>CERV — Citizens, Equality, Rights and Values Programme</div>
            </div>
          </div>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} SpeakUP against Hate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
