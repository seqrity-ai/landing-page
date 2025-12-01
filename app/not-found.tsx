export default function NotFound() {
  return (
    <section className="min-h-[60vh] section">
      <div className="app-container flex flex-col items-center justify-center text-center gap-4">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          404 • Page not found
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
          This page doesn't exist in seqrity.ai yet.
        </h1>
        <p className="max-w-md text-sm text-slate-400">
          The route you're looking for is missing or has been moved. Head back
          to the homepage to keep working from your unified Signals view.
        </p>
        <a
          href="/"
          className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-100 hover:border-primary/60 hover:text-primary transition-colors"
        >
          Back to homepage
        </a>
      </div>
    </section>
  );
}
