import { getAllSlugs } from "@/lib/getCaseStudies";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const baseUrl = "https://loganparke.com";

  const caseStudies = slugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...caseStudies,
  ];
}
