"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/educators", label: "Educators" },
  { href: "/toolkit", label: "Toolkit & AI" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgb(var(--color-border))",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
    }}>
      <nav className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "68px",
      }} aria-label="Main navigation">

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <div style={{
            width: 38,
            height: 38,
            borderRadius: "10px",
            background: "linear-gradient(135deg, rgb(0,51,153), rgb(13,110,253))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            boxShadow: "0 4px 12px rgba(13,110,253,0.3)",
          }}>
            🗣️
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1rem", color: "rgb(0,51,153)", lineHeight: 1.1 }}>
              SpeakUP
            </div>
            <div style={{ fontSize: "0.65rem", color: "rgb(var(--color-text-muted))", fontWeight: 500, letterSpacing: "0.05em" }}>
              AGAINST HATE
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              padding: "0.45rem 0.9rem",
              borderRadius: "var(--radius-full)",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "rgb(var(--color-text))",
              textDecoration: "none",
              transition: "all var(--transition)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(13,110,253,0.08)";
              e.currentTarget.style.color = "rgb(13,110,253)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgb(var(--color-text))";
            }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Lang */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Language selector */}
          <select aria-label="Select language" style={{
            background: "rgb(var(--color-surface-2))",
            border: "1px solid rgb(var(--color-border))",
            borderRadius: "var(--radius-full)",
            padding: "0.4rem 0.75rem",
            fontSize: "0.82rem",
            fontWeight: 500,
            cursor: "pointer",
            color: "rgb(var(--color-text))",
          }}>
            <option value="en">🇬🇧 EN</option>
            <option value="pl">🇵🇱 PL</option>
            <option value="ro">🇷🇴 RO</option>
            <option value="cz">🇨🇿 CZ</option>
            <option value="et">🇪🇪 ET</option>
          </select>

          <Link href="/learn" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}>
            Start Learning
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "rgb(var(--color-text))",
              fontSize: "1.5rem",
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          borderTop: "1px solid rgb(var(--color-border))",
          padding: "1rem",
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-md)",
                fontWeight: 500,
                fontSize: "1rem",
                color: "rgb(var(--color-text))",
                textDecoration: "none",
                display: "block",
              }}>
              {link.label}
            </Link>
          ))}
          <Link href="/learn" className="btn btn-primary" style={{ marginTop: "0.5rem", width: "100%", justifyContent: "center" }}>
            Start Learning
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
  );
}
