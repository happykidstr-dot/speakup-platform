"use client";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Locale, localeNames } from "@/lib/translations";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: "/learn", label: t.nav.learn },
    { href: "/educators", label: t.nav.educators },
    { href: "/toolkit", label: t.nav.toolkit },
    { href: "/community", label: t.nav.community },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <>
      {/* EU Bar */}
      <div style={{
        background: "rgb(0,51,153)", color: "white",
        fontSize: "0.78rem", textAlign: "center",
        padding: "0.4rem 1rem", fontWeight: 500, letterSpacing: "0.02em",
      }} role="banner" aria-label="EU funding information">
        🇪🇺 {t.euBar}
      </div>

      <header style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgb(var(--color-border))",
        position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
      }}>
        <nav className="container" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px",
        }} aria-label="Main navigation">

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
            <div style={{
              width: 36, height: 36, borderRadius: "10px",
              background: "linear-gradient(135deg, rgb(0,51,153), rgb(13,110,253))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.1rem", boxShadow: "0 3px 10px rgba(13,110,253,0.3)",
            }}>🗣️</div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "rgb(0,51,153)", lineHeight: 1.1 }}>SpeakUP</div>
              <div style={{ fontSize: "0.6rem", color: "rgb(var(--color-text-muted))", fontWeight: 500, letterSpacing: "0.05em" }}>AGAINST HATE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.15rem" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                padding: "0.4rem 0.85rem", borderRadius: "999px",
                fontSize: "0.875rem", fontWeight: 500, color: "rgb(var(--color-text))",
                textDecoration: "none", transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13,110,253,0.08)"; e.currentTarget.style.color = "rgb(13,110,253)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgb(var(--color-text))"; }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Language selector + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            {/* Language selector — now functional */}
            <select
              aria-label="Select language"
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              style={{
                background: "rgb(var(--color-surface-2))",
                border: "1.5px solid rgb(var(--color-border))",
                borderRadius: "999px", padding: "0.38rem 0.8rem",
                fontSize: "0.8rem", fontWeight: 600, cursor: "pointer",
                color: "rgb(var(--color-text))", outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "rgb(13,110,253)"}
              onBlur={(e) => e.target.style.borderColor = "rgb(var(--color-border))"}
            >
              {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>

            <Link href="/learn" className="btn btn-primary" style={{ padding: "0.45rem 1.1rem", fontSize: "0.85rem" }}>
              {t.nav.startLearning}
            </Link>

            {/* Mobile hamburger */}
            <button aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn"
              style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem", fontSize: "1.4rem", color: "rgb(var(--color-text))" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid rgb(var(--color-border))", padding: "1rem",
            background: "white", display: "flex", flexDirection: "column", gap: "0.25rem",
          }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", fontWeight: 500,
                fontSize: "1rem", color: "rgb(var(--color-text))", textDecoration: "none", display: "block",
              }}>{link.label}</Link>
            ))}
            {/* Language picker in mobile */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", padding: "0.5rem 1rem" }}>
              {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                <button key={code} onClick={() => setLocale(code)} style={{
                  padding: "0.35rem 0.75rem", borderRadius: "999px", border: "1.5px solid",
                  borderColor: locale === code ? "rgb(13,110,253)" : "rgb(var(--color-border))",
                  background: locale === code ? "rgba(13,110,253,0.08)" : "transparent",
                  color: locale === code ? "rgb(13,110,253)" : "rgb(var(--color-text-muted))",
                  fontWeight: 700, fontSize: "0.78rem", cursor: "pointer",
                }}>{name}</button>
              ))}
            </div>
            <Link href="/learn" className="btn btn-primary" style={{ marginTop: "0.5rem", justifyContent: "center" }}>
              {t.nav.startLearning}
            </Link>
          </div>
        )}

        <style>{`
          @media (max-width: 900px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: block !important; }
          }
        `}</style>
      </header>
    </>
  );
}
