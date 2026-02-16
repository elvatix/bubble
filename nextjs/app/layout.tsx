import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Elvatix — #1 AI-Powered LinkedIn Recruitment Copilot",
  description: "Schrijf persoonlijke InMails in seconden. De AI-recruitment copilot die uren handmatig werk bespaart.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
