import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SpeakUP against Hate",
    template: "%s | SpeakUP against Hate",
  },
  description:
    "A multilingual platform empowering youth and educators to recognise, respond to, and counter online hate speech. Co-funded by the European Union – CERV Programme.",
  keywords: ["hate speech", "youth", "education", "EU", "CERV", "online safety", "digital citizenship"],
  openGraph: {
    title: "SpeakUP against Hate",
    description: "Empowering young people to stand up against online hate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* EU Co-funded mandatory bar */}
        <div className="eu-funded-bar" role="banner" aria-label="EU funding information">
          <span className="eu-flag">🇪🇺</span>
          Co-funded by the European Union – CERV Programme &nbsp;|&nbsp; Citizens, Equality, Rights &amp; Values
        </div>

        {children}
      </body>
    </html>
  );
}
