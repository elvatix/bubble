"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";

const linkColumns = [
  {
    title: "Modules",
    links: [
      { label: "InMails", href: "/features/inmails" },
      { label: "Connectieverzoeken", href: "/features/connections" },
      { label: "Reminders", href: "/features/reminders" },
      { label: "Analytics", href: "/features/analytics" },
    ],
  },
  {
    title: "Voor Wie",
    links: [
      { label: "Recruitmentbureaus", href: "/solutions" },
      { label: "Corporate Recruiters", href: "/solutions" },
      { label: "Detacheringsbureaus", href: "/solutions" },
    ],
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over Ons", href: "/over-ons" },
      { label: "Case Studies", href: "/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Probeer gratis", href: "/probeer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <AnimateOnScroll variant="fadeUp">
        <Container>
          {/* Main Grid: Logo + 3 link columns, evenly distributed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-14">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="no-underline block mb-5">
                <Image
                  src="/images/elvatix-logo-lightgreen.svg"
                  alt="Elvatix"
                  width={120}
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>
              <p className="text-sm text-white/50 leading-relaxed max-w-[260px] mb-6">
                De #1 AI-Powered LinkedIn Recruitment Copilot. Schrijf persoonlijke InMails en connectieverzoeken in seconden.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/elvatix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Link Columns — each takes equal width */}
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                  {col.title}
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-3">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/60 no-underline text-sm hover:text-white transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-4">
            <p className="text-[13px] text-white/40">
              &copy; 2026 Elvatix. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-5">
              <Link href="/privacy" className="text-white/40 no-underline text-[13px] hover:text-white/60 transition-colors duration-150">
                Privacy
              </Link>
              <Link href="/terms" className="text-white/40 no-underline text-[13px] hover:text-white/60 transition-colors duration-150">
                Voorwaarden
              </Link>
            </div>
          </div>
        </Container>
      </AnimateOnScroll>
    </footer>
  );
}
