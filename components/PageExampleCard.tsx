import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

interface PageExampleCardProps {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export function PageExampleCard({ title, image }: PageExampleCardProps) {
  return (
    <ScrollFadeIn>
      <a
        href={image.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`View the full ${title} page`}
        className="block group"
      >
        <article className="overflow-hidden rounded-card border border-hairline bg-white transition-all duration-200 group-hover:scale-[1.01] group-hover:shadow-lg">
          <div className="flex h-4 items-center gap-0.5 border-b border-black/10 bg-[#f5f5f5] px-2">
            <span className="h-1 w-1 rounded-full bg-black/15" />
            <span className="h-1 w-1 rounded-full bg-black/15" />
            <span className="h-1 w-1 rounded-full bg-black/15" />
          </div>
          <div className="overflow-hidden bg-white">
            <Image
              src={image.src}
              alt={`${title} page preview`}
              width={image.width}
              height={image.height}
              sizes="(min-width: 768px) 424px, calc(100vw - 48px)"
              data-no-dim
              className="h-auto w-full"
            />
          </div>
          <div className="border-t border-black/10 px-5 py-4 text-[#1A2820]">
            <h3 className="font-sans text-caption font-medium">{title}</h3>
          </div>
        </article>
      </a>
    </ScrollFadeIn>
  );
}
