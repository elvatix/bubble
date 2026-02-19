export default function Loading() {
  return (
    <main className="pt-40 pb-16 flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-linkedin-light border-t-linkedin rounded-full animate-spin" />
        <p className="text-text-muted text-sm font-medium">Laden...</p>
      </div>
    </main>
  );
}
