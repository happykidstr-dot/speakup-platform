import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: { default: "SpeakUP against Hate", template: "%s | SpeakUP against Hate" },
  description: "A multilingual platform empowering youth and educators to recognise, respond to, and counter online hate speech. Co-funded by the European Union – CERV Programme.",
  keywords: ["hate speech", "youth", "education", "EU", "CERV", "online safety", "digital citizenship"],
  openGraph: { title: "SpeakUP against Hate", description: "Empowering young people to stand up against online hate.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
