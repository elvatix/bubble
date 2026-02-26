export default function JsonLd({ schema }: { schema: Record<string, any> }) {
  // We stringify the JSON object and replace "<" to prevent XSS attacks
  // which is a Next.js / React best practice for JSON-LD injection.
  const jsonLdString = JSON.stringify(schema).replace(/</g, '\\u003c');
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
}
