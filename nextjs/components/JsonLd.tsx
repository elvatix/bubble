export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elvatix",
    url: "https://elvatix.com",
    logo: "https://elvatix.com/opengraph-image.png",
    description:
      "AI-Powered LinkedIn Recruitment Copilot. Schrijf persoonlijke InMails in seconden.",
    foundingDate: "2023",
    sameAs: [
      "https://www.linkedin.com/company/elvatix",
      "https://www.instagram.com/elvatix_ai/",
      "https://twitter.com/elvatix"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://elvatix.com/contact",
      availableLanguage: ["Dutch", "English"]
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Elvatix",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-recruitment copilot die persoonlijke LinkedIn InMails genereert in 30 seconden. Bespaar 4-6 uur per week.",
    url: "https://elvatix.com",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Gratis trial beschikbaar",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
