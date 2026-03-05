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
            const isLink = !!point.href;
            const card = (
              <div
                key={point.title}
                className={`group rounded-2xl border p-6 shadow-sm transition-all duration-200 ${
                  isLink
                    ? "cursor-pointer border-neutral-200 bg-white hover:border-[#2467e3] hover:bg-[#2467e3] hover:shadow-lg"
                    : "border-neutral-200 bg-white hover:shadow-md"
                }`}
              >
                <div className={`mb-4 flex size-11 items-center justify-center rounded-xl transition-colors duration-200 ${isLink ? "bg-[#2467e3]/8 group-hover:bg-white/20" : "bg-[#2467e3]/8"}`}>
                  <Icon className={`size-5 transition-colors duration-200 ${isLink ? "text-[#2467e3] group-hover:text-white" : "text-[#2467e3]"}`} />
                </div>
                <h3 className={`font-heading mb-2 text-base font-bold transition-colors duration-200 ${isLink ? "text-foreground group-hover:text-white" : "text-foreground"}`}>
                  {point.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-200 ${isLink ? "text-muted-foreground group-hover:text-white/80" : "text-muted-foreground"}`}>
                  {point.description}
                </p>
              </div>
            );
            return isLink ? (
              <a key={point.title} href={point.href} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : card;
          })}
        </div>
      </div>
    </section>
  );
}
