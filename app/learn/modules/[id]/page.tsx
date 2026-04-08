"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const moduleData: Record<string, {
  num: string; title: string; icon: string; tagColor: string; tag: string; duration: string; level: string;
  intro: string; sections: { title: string; content: string }[];
  quiz: { q: string; options: string[]; correct: number }[];
  next: string | null;
}> = {
  "01": {
    num: "01", title: "What is Online Hate Speech?", icon: "💬",
    tagColor: "rgb(13,110,253)", tag: "Foundation", duration: "20 min", level: "Beginner",
    intro: "Online hate speech is one of the defining challenges of our digital age. Understanding what it is — and what it isn't — is the essential first step to responding effectively.",
    sections: [
      {
        title: "Definition",
        content: "Hate speech is any communication that targets individuals or groups based on protected characteristics such as race, ethnicity, religion, gender, sexual orientation, disability, or national origin — with the intent or effect of promoting hatred, discrimination, or violence.\n\nOnline hate speech follows the same logic, but spreads faster, reaches more people, and can be harder to escape. It includes posts, comments, messages, images, memes, and video content.",
      },
      {
        title: "European Legal Context",
        content: "The EU and its member states have frameworks to address hate speech. The EU Framework Decision on Combating Racism and Xenophobia requires member states to criminalise public incitement to violence or hatred. The Digital Services Act (DSA) requires platforms to act against illegal content, including hate speech.\n\nHowever, free expression is also protected. The line between hate speech and protected speech is context-dependent, and this is why education — not just law — is essential.",
      },
      {
        title: "Types of Online Hate",
        content: "Hate speech online takes many forms:\n\n• **Explicit hate** — direct slurs, dehumanising language, calls for violence\n• **Coded language / dog whistles** — words that seem neutral but signal hate to a specific audience\n• **Memes and visual hate** — images designed to spread stereotypes or dehumanise\n• **Stochastic terrorism** — inciting violence indirectly through rhetoric\n• **Pile-ons** — coordinated harassment campaigns targeting individuals",
      },
      {
        title: "Why Does It Matter?",
        content: "Research consistently shows that exposure to online hate speech has real-world effects:\n\n• Targets report anxiety, depression, and withdrawal from online life\n• Communities become less visible and less able to participate in democratic discourse\n• Hate speech online often precedes real-world violence\n• Young people are disproportionately affected, especially those with marginalised identities\n\nFighting hate speech is not about silencing debate — it's about protecting the conditions that make meaningful participation possible for everyone.",
      },
    ],
    quiz: [
      {
        q: "Which of the following best describes hate speech?",
        options: ["Any speech that someone finds offensive", "Communication targeting groups based on protected characteristics to promote hatred or violence", "Political criticism of government policies", "Online arguments between strangers"],
        correct: 1,
      },
      {
        q: "What is a 'dog whistle' in the context of online hate?",
        options: ["A tool used by animal trainers", "Coded language that appears neutral but signals hate to a specific audience", "A type of spam email", "A platform reporting tool"],
        correct: 1,
      },
      {
        q: "Why is it important to distinguish hate speech from protected speech?",
        options: ["Because all speech should be unlimited", "Because hate speech laws can restrict freedom of expression if applied too broadly", "Because only governments can define hate speech", "Because hate speech doesn't cause real harm"],
        correct: 1,
      },
    ],
    next: "02",
  },
  "02": {
    num: "02", title: "Recognising Hate Online", icon: "🔍",
    tagColor: "rgb(245,158,11)", tag: "Awareness", duration: "25 min", level: "Beginner",
    intro: "Recognising hate speech is harder than it sounds. Modern online hate is often subtle, coded, and deliberately designed to blur the line between acceptable speech and harmful content.",
    sections: [
      {
        title: "Spectrum of Hate",
        content: "Hate speech exists on a spectrum. At one end is explicit, unambiguous hate — slurs, threats, calls for violence. At the other end is more subtle content: stereotyping, erasure, dog whistles, and coded language designed to evade moderation.\n\nRecognising the full spectrum requires context, cultural knowledge, and critical thinking — not just pattern-matching.",
      },
      {
        title: "Coded Language & Dog Whistles",
        content: "Dog whistles are words or phrases that sound innocent to outsiders but carry specific hateful meanings to a target audience. Examples include numbers like '14' or '88' (neo-Nazi codes), or phrases like 'just asking questions' used to spread conspiracy theories while maintaining plausible deniability.\n\nMemes are another powerful vehicle for coded hate — combining visual humour with dehumanising messages to make them more shareable.",
      },
      {
        title: "Context is Everything",
        content: "The same words can be hate speech in one context and reclaimed identity language in another. Slurs used by members of the targeted community to describe themselves have a different character than the same slurs used by outsiders as attacks.\n\nContext includes: who is speaking, who is targeted, the platform, the audience, and the broader cultural moment.",
      },
      {
        title: "Intersectionality",
        content: "People with multiple marginalised identities often experience compound hate speech that targets several aspects of their identity simultaneously. A Muslim woman, for example, may face both Islamophobia and misogyny — often fused into specific forms of hate that don't fit neatly into single categories.\n\nRecognising intersectional hate requires looking beyond single identity categories.",
      },
    ],
    quiz: [
      {
        q: "What makes coded hate speech particularly difficult to address?",
        options: ["It is always very long", "It appears neutral on the surface but signals hate to specific audiences", "It is only found on specific platforms", "It only targets celebrities"],
        correct: 1,
      },
      {
        q: "Why is context important when identifying hate speech?",
        options: ["It doesn't matter — hate speech is always obvious", "Context determines whether language is reclaimed, satirical, or genuinely hateful", "Context only matters for journalists", "Only the words matter, not who says them or why"],
        correct: 1,
      },
    ],
    next: "03",
  },
};

// Fallback for modules 03-06
const fallbackModule = (num: string) => ({
  num, title: `Module ${num}`, icon: "📚",
  tagColor: "rgb(13,110,253)", tag: "Learning", duration: "25 min", level: "Intermediate",
  intro: "This module is part of the SpeakUP against Hate learning journey.",
  sections: [{ title: "Coming Soon", content: "Full content for this module is being prepared and will be available shortly." }],
  quiz: [],
  next: num === "06" ? null : String(parseInt(num) + 1).padStart(2, "0"),
});

export default function ModulePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const mod = moduleData[id] || fallbackModule(id);
  const [currentSection, setCurrentSection] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizDone, setQuizDone] = useState(false);

  const score = quizAnswers.filter((a, i) => a === mod.quiz[i]?.correct).length;

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Module header */}
        <section style={{
          background: `linear-gradient(135deg, ${mod.tagColor}20, ${mod.tagColor}08)`,
          borderBottom: "1px solid rgb(var(--color-border))",
          padding: "2.5rem 0",
        }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <Link href="/learn" style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))", textDecoration: "none" }}>
                ← All Modules
              </Link>
              <span style={{ color: "rgb(var(--color-border))" }}>›</span>
              <span style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))" }}>Module {mod.num}</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
              <div style={{
                width: 72, height: 72, borderRadius: "18px", flexShrink: 0,
                background: `linear-gradient(135deg, ${mod.tagColor}20, ${mod.tagColor}10)`,
                border: `2px solid ${mod.tagColor}30`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem",
              }}>{mod.icon}</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                  <span style={{
                    background: mod.tagColor + "15", color: mod.tagColor,
                    border: `1px solid ${mod.tagColor}30`,
                    borderRadius: "999px", padding: "0.2rem 0.75rem",
                    fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em",
                  }}>{mod.tag}</span>
                  <span style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))" }}>⏱ {mod.duration}</span>
                  <span style={{ fontSize: "0.82rem", color: "rgb(var(--color-text-muted))" }}>· {mod.level}</span>
                </div>
                <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", margin: 0 }}>{mod.title}</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Progress bar */}
        <div style={{ background: "rgb(var(--color-surface-2))", borderBottom: "1px solid rgb(var(--color-border))", padding: "0.75rem 0" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ fontSize: "0.78rem", color: "rgb(var(--color-text-muted))", whiteSpace: "nowrap" }}>
                Section {currentSection + 1} of {mod.sections.length}
              </span>
              <div style={{ flex: 1, height: 6, background: "rgb(var(--color-border))", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: "999px",
                  background: mod.tagColor,
                  width: `${((currentSection + 1) / mod.sections.length) * 100}%`,
                  transition: "width 0.4s ease",
                }} />
              </div>
              <span style={{ fontSize: "0.78rem", color: mod.tagColor, fontWeight: 700 }}>
                {Math.round(((currentSection + 1) / mod.sections.length) * 100)}%
              </span>
            </div>
          </div>
        </div>

        <div className="container" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "2.5rem", padding: "2.5rem 1.5rem", alignItems: "start" }}>

          {/* Sidebar nav */}
          <div style={{ position: "sticky", top: "120px" }}>
            <div style={{ background: "white", border: "1px solid rgb(var(--color-border))", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
              {mod.sections.map((s, i) => (
                <button key={i} onClick={() => setCurrentSection(i)} style={{
                  width: "100%", padding: "0.85rem 1rem", textAlign: "left",
                  background: i === currentSection ? mod.tagColor + "10" : "transparent",
                  borderLeft: `3px solid ${i === currentSection ? mod.tagColor : "transparent"}`,
                  border: "none", borderBottom: "1px solid rgb(var(--color-border))",
                  cursor: "pointer", fontSize: "0.85rem", fontWeight: i === currentSection ? 700 : 400,
                  color: i === currentSection ? mod.tagColor : "rgb(var(--color-text))",
                  transition: "all 0.2s",
                }}>
                  {i + 1}. {s.title}
                </button>
              ))}
              {mod.quiz.length > 0 && (
                <button onClick={() => { setQuizStarted(true); setCurrentSection(mod.sections.length); }} style={{
                  width: "100%", padding: "0.85rem 1rem", textAlign: "left",
                  background: "transparent", border: "none",
                  cursor: "pointer", fontSize: "0.85rem", fontWeight: 600,
                  color: "rgb(var(--color-text-muted))",
                }}>
                  ✅ Quiz ({mod.quiz.length} questions)
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div>
            {!quizStarted ? (
              <div>
                {currentSection === 0 && (
                  <div style={{
                    background: mod.tagColor + "08", border: `1px solid ${mod.tagColor}20`,
                    borderRadius: "var(--radius-md)", padding: "1.5rem", marginBottom: "2rem",
                  }}>
                    <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgb(var(--color-text))", margin: 0, fontStyle: "italic" }}>
                      {mod.intro}
                    </p>
                  </div>
                )}

                <h2 style={{ marginBottom: "1.25rem" }}>{mod.sections[currentSection].title}</h2>
                <div style={{ lineHeight: 1.9, color: "rgb(var(--color-text))", fontSize: "1rem" }}>
                  {mod.sections[currentSection].content.split("\n").map((line, i) => (
                    <p key={i} style={{ marginBottom: line === "" ? 0 : "1rem" }}>{line}</p>
                  ))}
                </div>

                {/* Nav buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3rem", borderTop: "1px solid rgb(var(--color-border))", paddingTop: "1.5rem" }}>
                  <button onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                    disabled={currentSection === 0}
                    style={{
                      background: "rgb(var(--color-surface-2))", border: "1px solid rgb(var(--color-border))",
                      borderRadius: "999px", padding: "0.65rem 1.5rem",
                      fontSize: "0.9rem", fontWeight: 600, cursor: currentSection === 0 ? "not-allowed" : "pointer",
                      opacity: currentSection === 0 ? 0.4 : 1, color: "rgb(var(--color-text))",
                    }}>← Previous</button>
                  {currentSection < mod.sections.length - 1 ? (
                    <button onClick={() => setCurrentSection(currentSection + 1)} style={{
                      background: mod.tagColor, color: "white", border: "none",
                      borderRadius: "999px", padding: "0.65rem 1.5rem",
                      fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                    }}>Next Section →</button>
                  ) : mod.quiz.length > 0 ? (
                    <button onClick={() => setQuizStarted(true)} style={{
                      background: "rgb(16,185,129)", color: "white", border: "none",
                      borderRadius: "999px", padding: "0.65rem 1.5rem",
                      fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                    }}>Take the Quiz ✅</button>
                  ) : (
                    <Link href={mod.next ? `/learn/modules/${mod.next}` : "/learn"} className="btn btn-primary">
                      {mod.next ? `Next Module →` : "Back to All Modules"}
                    </Link>
                  )}
                </div>
              </div>
            ) : !quizDone ? (
              /* Quiz */
              <div>
                <h2 style={{ marginBottom: "1.5rem" }}>Module {mod.num} Quiz</h2>
                {mod.quiz.map((q, qi) => (
                  <div key={qi} style={{
                    background: "white", border: "1px solid rgb(var(--color-border))",
                    borderRadius: "var(--radius-md)", padding: "1.5rem", marginBottom: "1.25rem",
                  }}>
                    <p style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "1rem" }}>
                      Q{qi + 1}. {q.q}
                    </p>
                    {q.options.map((opt, oi) => (
                      <button key={oi} onClick={() => {
                        const newAnswers = [...quizAnswers];
                        newAnswers[qi] = oi;
                        setQuizAnswers(newAnswers);
                      }} style={{
                        display: "block", width: "100%", textAlign: "left",
                        padding: "0.75rem 1rem", marginBottom: "0.5rem",
                        borderRadius: "var(--radius-sm)", cursor: "pointer",
                        border: `2px solid ${quizAnswers[qi] === oi ? mod.tagColor : "rgb(var(--color-border))"}`,
                        background: quizAnswers[qi] === oi ? mod.tagColor + "10" : "rgb(var(--color-surface-2))",
                        fontSize: "0.9rem", color: "rgb(var(--color-text))", fontWeight: quizAnswers[qi] === oi ? 600 : 400,
                        transition: "all 0.15s",
                      }}>{String.fromCharCode(65 + oi)}. {opt}</button>
                    ))}
                  </div>
                ))}
                <button onClick={() => setQuizDone(true)}
                  disabled={quizAnswers.length < mod.quiz.length}
                  style={{
                    background: mod.tagColor, color: "white", border: "none",
                    borderRadius: "999px", padding: "0.75rem 2rem",
                    fontSize: "0.95rem", fontWeight: 700, cursor: quizAnswers.length < mod.quiz.length ? "not-allowed" : "pointer",
                    opacity: quizAnswers.length < mod.quiz.length ? 0.5 : 1,
                  }}>Submit Answers</button>
              </div>
            ) : (
              /* Results */
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
                  {score === mod.quiz.length ? "🏆" : score >= mod.quiz.length / 2 ? "👍" : "📖"}
                </div>
                <h2 style={{ marginBottom: "0.5rem" }}>
                  {score}/{mod.quiz.length} Correct
                </h2>
                <p style={{ color: "rgb(var(--color-text-muted))", marginBottom: "2rem" }}>
                  {score === mod.quiz.length
                    ? "Perfect score! You're ready for the next module."
                    : score >= mod.quiz.length / 2
                    ? "Good work! Review the sections and try again if needed."
                    : "Keep learning! Review the module content and try again."}
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  {score < mod.quiz.length && (
                    <button onClick={() => { setQuizDone(false); setQuizAnswers([]); }} style={{
                      background: "rgb(var(--color-surface-2))", border: "1px solid rgb(var(--color-border))",
                      borderRadius: "999px", padding: "0.65rem 1.5rem", cursor: "pointer", fontWeight: 600,
                    }}>Retry Quiz</button>
                  )}
                  {mod.next ? (
                    <Link href={`/learn/modules/${mod.next}`} className="btn btn-primary">
                      Next Module →
                    </Link>
                  ) : (
                    <Link href="/learn" className="btn btn-primary">🏆 Back to All Modules</Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
