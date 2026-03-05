import { CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "./section-header";
import PlatformTabs from "./platform-tabs";
import type { PlatformContent } from "@/content/types";

interface PlatformSectionProps {
  content: PlatformContent;
}

export default function PlatformSection({ content }: PlatformSectionProps) {
  const channelLabels = content.channels.map((ch) => ch.name);
  const channelPanels = content.channels.map((channel) => {
    const Icon = channel.icon;
    return (
      <div
        key={channel.name}
        className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#2467e3]/15">
              <Icon className="size-5 text-[#2467e3]" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold text-white">{channel.name}</h4>
              <p className="text-xs text-white/50">{channel.tagline}</p>
            </div>
          </div>
          {channel.highlight && (
            <span className="shrink-0 rounded-full bg-[#2467e3]/15 px-3 py-1 text-xs font-semibold text-[#2467e3]">
              {channel.highlight}
            </span>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-white/65">{channel.description}</p>
        <div className="mt-auto grid gap-2 sm:grid-cols-2">
          {channel.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-sm">
              <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-[#2467e3]/70" />
              <span className="text-white/55">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <section className="bg-[#161616] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
          variant="dark"
        />

        {/* Platform Stats */}
        <div className="mb-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-black text-[#2467e3] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Omni-Channel */}
        <div className="mb-16">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <span className="size-[7px] bg-[#2467e3]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2467e3]">Omni-Channel</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">Every Channel, One Interface</h3>
            <p className="max-w-xl text-sm text-white/60">
              However your customers want to get in touch, QContact connects over 10 different channels into one unified platform with a single customer timeline.
            </p>
          </div>
          <PlatformTabs labels={channelLabels} panels={channelPanels} />
        </div>

        <Separator className="mb-16 bg-white/10" />

        {/* AI & Automation */}
        <div className="mb-16">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <span className="size-[7px] bg-[#2467e3]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2467e3]">AI &amp; Automation</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">Intelligence Built Into Every Interaction</h3>
            <p className="max-w-xl text-sm text-white/60">
              Six AI capabilities included as standard&mdash;no additional cost. Every conversation is analysed, scored, and optimised in real time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.aiCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div key={capability.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-[#2467e3]/15">
                    <Icon className="size-5 text-[#2467e3]" />
                  </div>
                  <h4 className="font-heading mb-2 text-sm font-bold text-white">{capability.title}</h4>
                  <p className="mb-3 text-xs leading-relaxed text-white/60">{capability.description}</p>
                  <ul className="mt-auto space-y-1.5">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-white/50">
                        <CheckCircle className="mt-0.5 size-3 shrink-0 text-[#2467e3]/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <Separator className="mb-16 bg-white/10" />

        {/* Core Features */}
        <div className="mb-16">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <span className="size-[7px] bg-[#2467e3]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2467e3]">Core Features</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">CRM, Workflows, IVR &amp; Reporting</h3>
            <p className="max-w-xl text-sm text-white/60">
              A 360-degree view of every customer journey with built-in CRM, workflow automation, self-service tools, and real-time analytics.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {content.coreFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-[#2467e3]/15">
                    <Icon className="size-5 text-[#2467e3]" />
                  </div>
                  <h4 className="font-heading mb-1 text-sm font-bold text-white">{feature.title}</h4>
                  <p className="mb-3 text-xs text-white/60">{feature.description}</p>
                  <ul className="space-y-1.5">
                    {feature.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-[#2467e3]/60" />
                        <span className="text-white/60">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* CAI Suite Highlight */}
        <div className="relative overflow-hidden rounded-2xl border border-[#2467e3]/30 bg-[#2467e3]/8 p-8">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-[300px] rounded-full bg-[#2467e3]/10 blur-[80px]" />
          <div className="flex items-center gap-2 mb-4">
            <span className="size-[7px] bg-[#2467e3]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2467e3]">Included as Standard</span>
          </div>
          <h3 className="font-heading mb-3 text-xl font-bold text-white">{content.caiSuite.headline}</h3>
          <p className="mb-5 text-sm leading-relaxed text-white/60">{content.caiSuite.description}</p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {content.caiSuite.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-[#2467e3]" />
                <span className="text-white/75">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
