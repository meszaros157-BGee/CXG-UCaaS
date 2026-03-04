import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "./section-header";
import type { TrackRecordContent } from "@/content/types";

interface TrackRecordSectionProps {
  content: TrackRecordContent;
}

export default function TrackRecordSection({ content }: TrackRecordSectionProps) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
        />

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {content.awards.map((award) => {
            const cardContent = (
              <>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{award.title}</CardTitle>
                    {award.href && (
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                    {award.description}
                  </p>
                </CardContent>
              </>
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
                  <Card className="border-l-2 border-l-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground [&:hover_h3]:text-primary-foreground">
                    {cardContent}
                  </Card>
                </a>
              );
            }

            return (
              <Card key={award.title} className="border-l-2 border-l-primary">
                {cardContent}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
