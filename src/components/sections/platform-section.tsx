import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "./section-header";
import PlatformTabs from "./platform-tabs";
import type { PlatformContent } from "@/content/types";

interface PlatformSectionProps {
  content: PlatformContent;
}

export default function PlatformSection({ content }: PlatformSectionProps) {
  // Pre-render channel panels server-side so we don't pass functions to client
  const channelLabels = content.channels.map((ch) => ch.name);
  const channelPanels = content.channels.map((channel) => {
    const Icon = channel.icon;
    return (
      <Card key={channel.name} className="flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{channel.name}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {channel.tagline}
                </p>
              </div>
            </div>
            {channel.highlight && (
              <Badge variant="secondary" className="shrink-0">
                {channel.highlight}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <CardDescription className="mb-4 text-sm leading-relaxed">
            {channel.description}
          </CardDescription>
          <div className="mt-auto grid gap-2 sm:grid-cols-2">
            {channel.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2 text-sm">
                <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-primary/60" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  });

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
        />

        {/* Platform Stats */}
        <div className="mb-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Omni-Channel Section ── */}
        <div className="mb-16">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <Badge variant="secondary">Omni-Channel</Badge>
            <h3 className="text-2xl font-bold tracking-tight">
              Every Channel, One Interface
            </h3>
            <p className="max-w-xl text-sm text-muted-foreground">
              However your customers want to get in touch, QContact connects
              over 10 different channels into one unified platform with a single
              customer timeline.
            </p>
          </div>

          <PlatformTabs labels={channelLabels} panels={channelPanels} />
        </div>

        <Separator className="mb-16" />

        {/* ── AI & Automation Section ── */}
        <div className="mb-16">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <Badge variant="secondary">AI & Automation</Badge>
            <h3 className="text-2xl font-bold tracking-tight">
              Intelligence Built Into Every Interaction
            </h3>
            <p className="max-w-xl text-sm text-muted-foreground">
              Six AI capabilities included as standard&mdash;no additional cost.
              Every conversation is analysed, scored, and optimised in real time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.aiCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <Card key={capability.title} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <CardDescription className="mb-3">
                      {capability.description}
                    </CardDescription>
                    <ul className="mt-auto space-y-1.5">
                      {capability.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle className="mt-0.5 size-3 shrink-0 text-primary/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Separator className="mb-16" />

        {/* ── Core Platform Features Section ── */}
        <div className="mb-16">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <Badge variant="secondary">Core Features</Badge>
            <h3 className="text-2xl font-bold tracking-tight">
              CRM, Workflows, IVR & Reporting
            </h3>
            <p className="max-w-xl text-sm text-muted-foreground">
              A 360-degree view of every customer journey with built-in CRM,
              workflow automation, self-service tools, and real-time analytics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {content.coreFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {feature.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-primary/60" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ── CAI Suite Highlight ── */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              Included as Standard
            </Badge>
            <CardTitle className="text-xl">
              {content.caiSuite.headline}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-5 text-sm text-muted-foreground">
              {content.caiSuite.description}
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {content.caiSuite.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm"
                >
                  <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
