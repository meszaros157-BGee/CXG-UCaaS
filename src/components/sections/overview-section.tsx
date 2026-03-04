import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeader from "./section-header";
import type { OverviewContent } from "@/content/types";

interface OverviewSectionProps {
  content: OverviewContent;
}

export default function OverviewSection({ content }: OverviewSectionProps) {
  return (
    <section className="bg-muted/50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.points.map((point) => {
            const Icon = point.icon;
            return (
              <Card key={point.title}>
                <CardHeader>
                  <Icon className="mb-2 size-8 text-primary" />
                  <CardTitle>{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{point.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
