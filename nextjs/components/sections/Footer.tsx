"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";

const linkColumns = [
  {
    title: "Modules",
    links: [
      { label: "Recruitment Sales Switch", href: "/module-recruitment-sales-switch" },
      { label: "Templates Instructions", href: "/module-template-instructies" },
      { label: "Connectieverzoeken", href: "/module-connectieverzoeken" },
      { label: "Custom GPT", href: "/module-custom-gpt" },
      { label: "Reminders", href: "/module-reminders" },
      { label: "Inmails", href: "/module-inmails" },
    ],
  },
  {
    title: "Voor Wie",
    links: [
      { label: "Detacheringsbureaus", href: "/voor-detacheringsbureaus" },
      { label: "Corporate Recruiters", href: "/voor-corporate-recruiters" },
      { label: "Recruitmentbureaus", href: "/voor-recruitmentbureaus" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { label: "Manpower", href: "/case-study-manpower" },
      { label: "Vibe Group", href: "/case-study-vibegroup" },
    ],
  },
  {
    title: "Documentatie",
    links: [
      { label: "Algemene Voorwaarden", href: "/terms" },
      { label: "Privacy Beleid", href: "/privacy" },
    ],
  },
  {
    title: "Informatie",
    links: [
      { label: "Integraties", href: "/integraties-linkedin" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <AnimateOnScroll variant="fadeUp">
        <Container>
          {/* Main Grid */}
          <div className="footer-grid">
            {/* Brand Column  - Left */}
            <div>
              <Link href="/" className="no-underline block mb-5">
                <Image
                  src="/images/elvatix-logo-lightgreen.svg"
                  alt="Elvatix"
                  width={120}
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>
              <div className="text-sm text-white/50 leading-relaxed space-y-1 mb-5">
                <p className="m-0">Elvatix B.V.</p>
                <p className="m-0">KVK 91816637</p>
                <p className="m-0">Fahrenheitweg 24</p>
                <p className="m-0">6101 WR Echt, Nederland</p>
              </div>
              {/* Contact & Social */}
              <div className="flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="text-white/60 no-underline text-sm hover:text-white transition-colors duration-150"
                >
                  Contact
                </Link>
                <a
                  href="https://nl.linkedin.com/in/gianni-linssen-742842315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 no-underline text-sm hover:text-white transition-colors duration-150"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Link Columns */}
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
          <div className="footer-bottom">
            <p className="text-[13px] text-white/40 m-0">
              &copy; 2026 Elvatix B.V. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-5">
              <Link href="/terms" className="text-white/40 no-underline text-[13px] hover:text-white/60 transition-colors duration-150">
                Algemene Voorwaarden
              </Link>
              <Link href="/privacy" className="text-white/40 no-underline text-[13px] hover:text-white/60 transition-colors duration-150">
                Privacy Beleid
              </Link>
            </div>
          </div>
        </Container>
      </AnimateOnScroll>
    </footer>
  );
}
