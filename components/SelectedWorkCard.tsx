import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

interface SelectedWorkCardProps {
  name: string;
  href: string;
  logo: {
    src: string;
    width: number;
    height: number;
  };
  paddedLogo?: boolean;
}

export function SelectedWorkCard({
  name,
  href,
  logo,
  paddedLogo = false,
}: SelectedWorkCardProps) {
  return (
    <ScrollFadeIn>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${name}`}
        className="block group h-full"
      >
        <article className="min-h-44 h-full flex items-center justify-center border border-hairline rounded-card bg-white p-container-pad-mobile md:p-container-pad transition-all duration-200 group-hover:scale-[1.01] group-hover:shadow-lg">
          <Image
            src={logo.src}
            alt={`${name} logo`}
            width={logo.width}
            height={logo.height}
            data-no-dim
            className={`${
              paddedLogo ? "h-20 md:h-24" : "h-10 md:h-12"
            } w-auto max-w-full object-contain`}
          />
        </article>
      </a>
    </ScrollFadeIn>
  );
}
