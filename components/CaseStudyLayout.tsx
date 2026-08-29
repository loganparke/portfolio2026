import Link from "next/link";
import Image from "next/image";
import type { CaseStudyMeta } from "@/lib/getCaseStudies";

interface CaseStudyLayoutProps {
  meta: CaseStudyMeta;
  children: React.ReactNode;
}

export function CaseStudyLayout({ meta, children }: CaseStudyLayoutProps) {
  return (
    <article className="pt-6 md:pt-8 pb-section-mobile md:pb-section">
      <div className="mx-auto max-w-case-study px-6 md:px-container-pad">
        <Link
          href="/"
          className="inline-block text-caption text-accent hover:underline transition-colors duration-150 mb-6 md:mb-8"
        >
          ← Back
        </Link>

        <header className="mb-8 md:mb-10">
          <h1 className="font-display text-h1-mobile md:text-h1 text-ink">
            {meta.title}
          </h1>
          <p className="mt-3 text-body-mobile md:text-body text-muted italic">
            {meta.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-small text-muted">
            <span>{meta.role}</span>
            <span>{meta.dates}</span>
          </div>
        </header>

        {meta.cover && (
          <div
            className="relative mb-8 aspect-video overflow-hidden rounded-card border border-hairline bg-white md:mb-10"
            style={{ backgroundColor: meta.cover.background }}
          >
            <Image
              src={meta.cover.src}
              alt={`${meta.title} product preview`}
              fill
              sizes="(min-width: 1024px) 896px, calc(100vw - 48px)"
              data-no-dim
              className="object-contain"
            />
          </div>
        )}

        <div className="prose-custom max-w-content">{children}</div>

        <footer className="mt-subsection-mobile md:mt-subsection pt-8 border-t border-hairline">
          <p className="text-small text-muted uppercase tracking-wider mb-3">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {meta.stack.map((tech) => (
              <span
                key={tech}
                className="text-small border border-hairline rounded px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </article>
  );
}
