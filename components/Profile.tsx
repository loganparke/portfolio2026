import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

export function Profile() {
  return (
    <section className="pb-8 md:pb-12">
      <div className="mx-auto max-w-content px-6 md:px-container-pad">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="relative w-[120px] h-[145px] md:w-[160px] md:h-[190px] overflow-hidden rounded-card border border-hairline bg-hairline flex-shrink-0">
            <Image
              src={withBasePath("/images/logan.png")}
              alt="Logan Parke"
              fill
              sizes="(min-width: 768px) 160px, 120px"
              priority
              data-no-dim
              className="object-cover translate-y-[4%] scale-[1.15]"
            />
          </div>
          <p className="text-body-mobile md:text-body text-ink leading-relaxed">
            I&apos;m a full-stack engineer and product builder with experience
            across architecture, frontend, backend, infrastructure, and
            MarTech. As Head of MarTech at Revmatics, I manage HubSpot, Stripe,
            automation, analytics, integrations, and landing page testing. I
            also built the company&apos;s Retail Intelligence platform and helped
            redesign its CRO Suite. Outside of Revmatics, I rebuilt
            TubeBuddy&apos;s 50-plus-page WordPress site, shipped the landing page
            for MrBeast&apos;s #TeamWater campaign, and founded Vacanze.
          </p>
        </div>
      </div>
    </section>
  );
}
