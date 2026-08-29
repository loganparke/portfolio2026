import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export interface CaseStudyMeta {
  title: string;
  subtitle: string;
  role: string;
  dates: string;
  stack: string[];
  slug: string;
  order: number;
  cover?: {
    src: string;
    width: number;
    height: number;
    background?: string;
  };
}

export interface CaseStudy {
  meta: CaseStudyMeta;
  content: string;
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  const files = fs.readdirSync(CASE_STUDIES_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(CASE_STUDIES_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        title: data.title,
        subtitle: data.subtitle,
        role: data.role,
        dates: data.dates,
        stack: data.stack,
        slug,
        order: data.order ?? 0,
        cover: data.cover,
      } as CaseStudyMeta;
    })
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title,
      subtitle: data.subtitle,
      role: data.role,
      dates: data.dates,
      stack: data.stack,
      slug,
      order: data.order ?? 0,
      cover: data.cover,
    },
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
