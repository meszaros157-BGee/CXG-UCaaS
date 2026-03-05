import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./section-header";
import type { TrackRecordContent } from "@/content/types";

interface TrackRecordSectionProps {
  content: TrackRecordContent;
}

export default function TrackRecordSection({ content }: TrackRecordSectionProps) {
  return (
    <section className="bg-[#f5f5f7] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
          variant="light"
        />

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-black text-[#2467e3] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {content.awards.map((award) => {
            const inner = (
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#2467e3]/40 hover:shadow-md">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    {award.title}
                  </h3>
                  {award.href && (
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-[#2467e3]" />
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {award.description}
                </p>
              </div>
            );

            if (award.href) {
              return (
                <a
                  key={award.title}
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  {inner}
                </a>
              );
            }

            return <div key={award.title}>{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
