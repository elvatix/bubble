"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <AnimateOnScroll variant="fadeUp">
        <div className="section-inner">
          <div className="footer-grid mb-12">
            <div>
              <Link href="/" className="no-underline block mb-4">
                <Image
                  src="/images/elvatix-logo-lightgreen.svg"
                  alt="Elvatix"
                  width={120}
                  height={28}
                  className="h-6 w-auto"
                />
              </Link>
              <p className="text-sm text-white/50 leading-relaxed">
                De #1 AI-Powered LinkedIn Recruitment Copilot. Schrijf persoonlijke InMails en connectieverzoeken in seconden.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-white/40">Modules</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {[
                  { label: "InMails", href: "/features/inmails" },
                  { label: "Connectieverzoeken", href: "/features/connections" },
                  { label: "Reminders", href: "/features/reminders" },
                  { label: "Analytics", href: "/features/analytics" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/60 no-underline text-sm hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-white/40">Voor Wie</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {[
                  { label: "Recruitmentbureaus", href: "/solutions" },
                  { label: "Corporate Recruiters", href: "/solutions" },
                  { label: "Detacheringsbureaus", href: "/solutions" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/60 no-underline text-sm hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-white/40">Bedrijf</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {[
                  { label: "Over Ons", href: "/over-ons" },
                  { label: "Case Studies", href: "/cases" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/60 no-underline text-sm hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-3">
            <p className="text-[13px] text-white/40">&copy; 2026 Elvatix. Alle rechten voorbehouden.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-white/40 no-underline text-[13px] hover:text-white/70 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-white/40 no-underline text-[13px] hover:text-white/70 transition-colors">Voorwaarden</Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
