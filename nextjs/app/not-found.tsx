import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-2xl text-center">
        <span className="text-8xl font-black gradient-text">404</span>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-6 mb-4">
          Pagina niet gevonden
        </h1>
        <p className="page-subtitle mb-10">
          De pagina die je zoekt bestaat niet of is verplaatst. Geen zorgen, je
          bent snel weer op de juiste plek.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/">
            Naar de homepage
          </Button>
          <Button variant="outline" href="/demo">
            Demo aanvragen
          </Button>
        </div>
      </Container>
    </main>
  );
}
