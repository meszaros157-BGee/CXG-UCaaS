import { CheckCircle } from "lucide-react";
import SectionHeader from "./section-header";
import type { AboutContent } from "@/content/types";

interface AboutSectionProps {
  content: AboutContent;
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="bg-[#161616] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
          variant="dark"
        />

        {/* Four Pillars */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {content.pillars.map((pillar) => (
            <div
              key={pillar}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center"
            >
              <span className="size-[6px] bg-[#2467e3]" />
              <span className="text-sm font-bold uppercase tracking-wide text-white">
                {pillar}
              </span>
            </div>
          ))}
        </div>

        {/* 27-year tagline */}
        <p className="mx-auto max-w-3xl text-center text-base font-medium leading-relaxed text-white/55">
          {content.tagline}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-6">
              {content.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-4xl font-black text-[#2467e3]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3">
              {content.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-[#2467e3]" />
                  <span className="text-sm leading-relaxed text-white/75">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
