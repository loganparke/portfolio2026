import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-h1-mobile md:text-h1 text-ink mb-4">
          Page not found
        </h1>
        <p className="text-body text-muted mb-8">
          Nothing here. Maybe there never was.
        </p>
        <Link
          href="/"
          className="text-accent hover:underline transition-colors duration-150"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
