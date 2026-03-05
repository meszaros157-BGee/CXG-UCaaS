import SectionHeader from "./section-header";
import type { OverviewContent } from "@/content/types";

interface OverviewSectionProps {
  content: OverviewContent;
}

export default function OverviewSection({ content }: OverviewSectionProps) {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
          variant="light"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[#2467e3]/8">
                  <Icon className="size-5 text-[#2467e3]" />
                </div>
                <h3 className="font-heading mb-2 text-base font-bold text-foreground">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
