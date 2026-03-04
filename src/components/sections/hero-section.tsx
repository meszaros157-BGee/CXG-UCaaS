import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/content/types";

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 overflow-hidden px-6 py-24 text-center md:py-32">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {content.badge && <Badge variant="secondary">{content.badge}</Badge>}
      <h1 className="relative max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {content.headline}
      </h1>
      <p className="max-w-xl text-xl font-medium text-primary/80">
        {content.subheadline}
      </p>
      <p className="max-w-2xl text-base text-muted-foreground">
        {content.description}
      </p>
      <div className="flex flex-col gap-3 pt-4 sm:flex-row">
        <Button size="lg" asChild>
          <a href={content.primaryCta.href}>{content.primaryCta.label}</a>
        </Button>
        {content.secondaryCta && (
          <Button size="lg" variant="outline" asChild>
            <a href={content.secondaryCta.href}>{content.secondaryCta.label}</a>
          </Button>
        )}
      </div>
    </section>
  );
}
