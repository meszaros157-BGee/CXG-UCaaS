import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./section-header";
import type { AboutContent } from "@/content/types";

interface AboutSectionProps {
  content: AboutContent;
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="bg-muted/50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Stats */}
          <div className="flex flex-col justify-center gap-8">
            <div className="grid grid-cols-3 gap-4">
              {content.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {content.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
