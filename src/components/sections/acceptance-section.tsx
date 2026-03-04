import DownloadButton from "@/components/download-button";
import type { AcceptanceContent } from "@/content/types";

interface AcceptanceSectionProps {
  content: AcceptanceContent;
}

export default function AcceptanceSection({ content }: AcceptanceSectionProps) {
  return (
    <section className="bg-primary px-6 py-16 text-primary-foreground md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {content.headline}
        </h2>
        <p className="text-primary-foreground/80">{content.description}</p>
        <DownloadButton
          variant="secondary"
          size="lg"
          className="bg-white text-primary hover:bg-white/85 border-transparent"
        />
      </div>
    </section>
  );
}
