import { ScrollFadeIn } from "./ScrollFadeIn";

const skills = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript, Python, PHP, HTML, CSS, SQL",
  },
  {
    label: "Frontend",
    items: "React, Next.js, Tailwind CSS, Redux, Accessibility, Design Systems",
  },
  {
    label: "Backend / Data",
    items: "Node.js, Express, Flask, MongoDB, MySQL, GraphQL, REST APIs, Webhooks",
  },
  {
    label: "MarTech",
    items:
      "HubSpot, GoHighLevel, WordPress, Shopify, Stripe, GA4, Meta Ads, Google Tag Manager, A/B Testing, CRO, SEO",
  },
  {
    label: "Cloud / DevOps",
    items:
      "GCP, Docker Compose, nginx, GitHub Actions, Vercel, Heroku, Render, Cloudflare, Git",
  },
  {
    label: "AI Tooling",
    items:
      "Claude Code, Codex, LLM API Integration, Prompt Engineering, Structured Outputs",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-40 py-subsection-mobile md:scroll-mt-24 md:py-subsection"
    >
      <div className="mx-auto max-w-case-study px-6 md:px-container-pad">
        <h2 className="font-display text-h2-mobile md:text-h2 text-ink mb-8 md:mb-12">
          Skills
        </h2>
        <ScrollFadeIn>
          <div className="flex flex-col gap-4">
            {skills.map((row) => (
              <div
                key={row.label}
                className="flex flex-col sm:flex-row sm:gap-6"
              >
                <span className="text-small uppercase tracking-wider text-muted w-[150px] flex-shrink-0 mb-1 sm:mb-0 sm:pt-[3px]">
                  {row.label}
                </span>
                <span className="text-body-mobile md:text-body text-ink">
                  {row.items}
                </span>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
