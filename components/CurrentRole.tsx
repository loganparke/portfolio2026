import { ScrollFadeIn } from "./ScrollFadeIn";

const areas = [
  {
    title: "CRM & Automation",
    description: "HubSpot workflows, lifecycle automation, and integrations.",
  },
  {
    title: "Analytics",
    description: "GA4, Google Tag Manager, and reporting.",
  },
  {
    title: "CRO",
    description: "Landing pages, A/B testing, and the Revmatics CRO Suite.",
  },
  {
    title: "Product Engineering",
    description: "Retail Intelligence, customer-facing tools, and technical demos.",
  },
];

export function CurrentRole() {
  return (
    <section
      id="current-role"
      className="scroll-mt-40 pb-subsection-mobile md:scroll-mt-24 md:pb-subsection"
    >
      <div className="mx-auto max-w-case-study px-6 md:px-container-pad">
        <h2 className="mb-8 font-display text-h2-mobile text-ink md:mb-12 md:text-h2">
          Current Role
        </h2>

        <ScrollFadeIn>
          <article className="overflow-hidden rounded-card border border-black/10 bg-white transition-all duration-200 hover:scale-[1.005] hover:shadow-lg">
            <div className="p-container-pad-mobile md:p-container-pad">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-small uppercase tracking-wider text-accent">
                    Revmatics
                  </p>
                  <h3 className="mt-2 font-sans text-h3-mobile text-[#1A2820] md:text-h3">
                    Head of MarTech
                  </h3>
                </div>
                <a
                  href="https://revmatics.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-caption text-[#1A2820]/65 underline decoration-black/20 underline-offset-4 transition-colors duration-150 hover:text-accent"
                >
                  Visit Revmatics ↗
                </a>
              </div>

              <p className="mt-6 max-w-[720px] text-body-mobile leading-relaxed text-[#1A2820]/75 md:text-body">
                I manage the systems that connect marketing, sales, payments,
                analytics, and product experimentation. My work ranges from
                HubSpot automation and Stripe integrations to landing page
                testing and customer-facing product development.
              </p>
            </div>

            <div className="grid grid-cols-1 border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area, index) => (
                <div
                  key={area.title}
                  className={`p-5 md:p-6 ${
                    index > 0 ? "border-t border-black/10 sm:border-t-0" : ""
                  } ${
                    index % 2 === 1 ? "sm:border-l sm:border-black/10" : ""
                  } ${
                    index >= 2
                      ? "sm:border-t sm:border-black/10 lg:border-t-0"
                      : ""
                  } ${index > 0 ? "lg:border-l lg:border-black/10" : ""}`}
                >
                  <h4 className="text-small uppercase tracking-wider text-[#1A2820]">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-caption text-[#1A2820]/65">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
