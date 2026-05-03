export default function SiteLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="space-y-4 animate-pulse">
        <div className="h-8 w-48 rounded-lg bg-muted" />
        <div className="h-4 w-96 max-w-full rounded-lg bg-muted" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 rounded-xl bg-muted" />
          ))}
        </div>
      </div>
    </div>
  );
}
