import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-display text-h2-mobile md:text-h2 text-ink mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-sans text-h3-mobile md:text-h3 text-ink mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-body-mobile md:text-body text-ink mb-6 leading-relaxed"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="text-body-mobile md:text-body text-ink mb-6 pl-6 list-disc space-y-2"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="text-body-mobile md:text-body text-ink mb-6 pl-6 list-decimal space-y-2"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-[3px] border-accent pl-8 my-8 italic text-ink"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-code-mobile md:text-code bg-hairline px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="font-mono text-code-mobile md:text-code bg-ink text-paper p-6 rounded-card overflow-x-auto mb-6"
      {...props}
    />
  ),
  img: (props) => {
    const { src, alt, width, height } = props as {
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    };
    if (!src) return null;
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={width ?? 960}
        height={height ?? 540}
        className="rounded mb-6"
      />
    );
  },
  a: (props) => (
    <a
      className="text-ink underline underline-offset-[3px] decoration-hairline hover:text-accent transition-colors duration-150"
      {...props}
    />
  ),
};
