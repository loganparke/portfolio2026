import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { CurrentRole } from "@/components/CurrentRole";
import { SelectedWorkCard } from "@/components/SelectedWorkCard";
import { PageExampleCard } from "@/components/PageExampleCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { getAllCaseStudies } from "@/lib/getCaseStudies";

const selectedWork = [
  {
    name: "Revmatics",
    href: "https://revmatics.ai/",
    logo: {
      src: "/images/revlogo.png",
      width: 844,
      height: 168,
    },
  },
  {
    name: "DataFeedWatch",
    href: "https://www.datafeedwatch.com/pricing",
    logo: {
      src: "/images/dfwlogo.png",
      width: 195,
      height: 50,
    },
  },
  {
    name: "TubeBuddy",
    href: "https://www.tubebuddy.com/",
    logo: {
      src: "/images/tblog.png",
      width: 600,
      height: 234,
    },
    paddedLogo: true,
  },
];

const pageExamples = [
  {
    title: "#TeamWater campaign landing page",
    image: {
      src: "/images/teamwatersmall.png",
      width: 3024,
      height: 1646,
    },
  },
  {
    title: "Tranquila homepage",
    image: {
      src: "/images/tranquila.png",
      width: 3024,
      height: 1616,
    },
  },
  {
    title: "HonorHealth landing page",
    image: {
      src: "/images/honorhealth.png",
      width: 3024,
      height: 1646,
    },
  },
  {
    title: "Malouf landing page",
    image: {
      src: "/images/malouf.png",
      width: 3024,
      height: 1646,
    },
  },
  {
    title: "Rubio’s landing page",
    image: {
      src: "/images/Rubios.png",
      width: 3024,
      height: 1648,
    },
  },
  {
    title: "EZ-A homepage",
    image: {
      src: "/images/eza.png",
      width: 3024,
      height: 1646,
    },
  },
];

const productSlugs = new Set([
  "mortarstack",
  "revmatics-analytics",
  "cro-suite",
  "vacanze",
]);

export default function Home() {
  const products = getAllCaseStudies().filter((study) =>
    productSlugs.has(study.slug),
  );

  return (
    <main>
      <Hero />
      <Profile />
      <CurrentRole />

      <section
        id="selected-work"
        className="scroll-mt-24 pb-subsection-mobile md:pb-subsection"
      >
        <div className="mx-auto max-w-case-study px-6 md:px-container-pad">
          <h2 className="font-display text-h2-mobile md:text-h2 text-ink mb-8 md:mb-12">
            Website Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap-mobile md:gap-card-gap">
            {selectedWork.map((work) => (
              <SelectedWorkCard key={work.name} {...work} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="landing-pages"
        className="scroll-mt-24 pb-subsection-mobile md:pb-subsection"
      >
        <div className="mx-auto max-w-case-study px-6 md:px-container-pad">
          <h2 className="font-display text-h2-mobile md:text-h2 text-ink mb-8 md:mb-12">
            Landing Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-card-gap-mobile md:gap-card-gap">
            {pageExamples.map((example) => (
              <PageExampleCard key={example.title} {...example} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="products"
        className="scroll-mt-24 pb-subsection-mobile md:pb-subsection"
      >
        <div className="mx-auto max-w-case-study px-6 md:px-container-pad">
          <h2 className="font-display text-h2-mobile md:text-h2 text-ink mb-8 md:mb-12">
            Products I&apos;ve Built or Worked On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-card-gap-mobile md:gap-card-gap">
            {products.map((product) => (
              <CaseStudyCard key={product.slug} study={product} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <Footer />
    </main>
  );
}
