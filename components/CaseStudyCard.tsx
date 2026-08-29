import Link from "next/link";
import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";
import type { CaseStudyMeta } from "@/lib/getCaseStudies";

export function CaseStudyCard({ study }: { study: CaseStudyMeta }) {
  return (
    <ScrollFadeIn>
      <Link href={`/work/${study.slug}`} className="block group h-full">
        <article className="h-full overflow-hidden border border-black/10 rounded-card bg-white transition-all duration-200 group-hover:scale-[1.01] group-hover:shadow-lg">
          {study.cover && (
            <div
              className="relative aspect-video border-b border-hairline bg-white"
              style={{ backgroundColor: study.cover.background }}
            >
              <Image
                src={study.cover.src}
                alt={`${study.title} product preview`}
                fill
                sizes="(min-width: 768px) 424px, calc(100vw - 48px)"
                data-no-dim
                className="object-contain"
              />
            </div>
          )}
          <div className="p-container-pad-mobile md:p-container-pad">
            <h3 className="font-sans text-h3-mobile md:text-h3 text-[#1A2820]">
              {study.title}
            </h3>
            <p className="mt-2 text-caption text-[#1A2820]/70 italic">
              {study.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-small uppercase tracking-wider text-[#1A2820] border border-black/15 rounded px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </ScrollFadeIn>
  );
}
