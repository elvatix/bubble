"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-2xl text-center">
        <span className="text-6xl mb-6 block">⚠️</span>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Er ging iets mis
        </h1>
        <p className="page-subtitle mb-10">
          Sorry, er ging iets mis. Probeer het opnieuw of ga terug naar
          de homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={reset}>
            Opnieuw proberen
          </Button>
          <Button variant="outline" href="/">
            Naar de homepage
          </Button>
        </div>
      </Container>
    </main>
  );
}
