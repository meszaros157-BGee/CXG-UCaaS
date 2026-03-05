import DownloadButton from "@/components/download-button";
import type { AcceptanceContent } from "@/content/types";

interface AcceptanceSectionProps {
  content: AcceptanceContent;
}

export default function AcceptanceSection({ content }: AcceptanceSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#2467e3] px-6 py-20 md:py-28">
      {/* Subtle light shimmer top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-[100px]"
      />
      {/* Subtle depth bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#1c54c8]/60 blur-[80px]"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2">
          <span className="size-[7px] bg-white/60" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            Ready to Proceed
          </span>
        </div>
        <h2 className="font-heading text-3xl font-black tracking-tight text-white sm:text-4xl">
          {content.headline}
        </h2>
        <p className="text-base leading-relaxed text-white/75">{content.description}</p>
        <DownloadButton
          variant="secondary"
          size="lg"
          className="rounded-full bg-white px-8 text-[#2467e3] hover:bg-white/90 border-transparent font-bold"
        />
      </div>
    </section>
  );
}
