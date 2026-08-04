"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ minHeight: "65vh", display: "flex", alignItems: "center", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🔍</div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Page Not Found</h1>
          <p style={{ color: "rgb(var(--color-text-muted))", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track!
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary btn-lg">
              🏠 Go to Homepage
            </Link>
            <Link href="/learn" className="btn btn-outline btn-lg">
              📚 Explore Learning Modules
            </Link>
            <Link href="/toolkit" className="btn btn-ghost btn-lg">
              🤖 Try AI Toolkit
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
