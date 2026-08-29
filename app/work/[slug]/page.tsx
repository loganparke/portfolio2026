import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getCaseStudyBySlug } from "@/lib/getCaseStudies";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { mdxComponents } from "@/lib/mdxComponents";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};

  return {
    title: study.meta.title,
    description: study.meta.subtitle,
    openGraph: {
      title: `${study.meta.title} | Logan Parke`,
      description: study.meta.subtitle,
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyLayout meta={study.meta}>
      <MDXRemote source={study.content} components={mdxComponents} />
    </CaseStudyLayout>
  );
}
