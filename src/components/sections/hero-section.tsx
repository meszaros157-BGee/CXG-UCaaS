import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/content/types";

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-[#161616] text-white">

      {/* ── Text block ── */}
      <div className="relative z-10 flex flex-col items-center gap-7 px-6 pt-20 pb-12 text-center md:pt-28 lg:pt-36">

        {/* CXG red radial glow — top */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#cc2229]/18 blur-[130px]"
        />

        {/* Subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Proposal label */}
        <div className="relative flex items-center gap-2">
          <span className="size-[7px] shrink-0 bg-[#2467e3]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2467e3]">
            UCaaS Proposal
          </span>
        </div>

        <h1 className="font-heading relative max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
          {content.headline}
        </h1>

        <p className="relative text-xl font-semibold text-[#2467e3]">
          {content.subheadline}
        </p>

        <p className="relative max-w-2xl text-base leading-relaxed text-white/60">
          {content.description}
        </p>

        <div className="relative flex flex-col gap-3 pt-2 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-[#2467e3] px-8 text-white hover:bg-[#1c54c8]"
            asChild
          >
            <a href={content.primaryCta.href}>{content.primaryCta.label}</a>
          </Button>
          {content.secondaryCta && (
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={content.secondaryCta.href}>{content.secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>

      {/* ── Laptop mockup image ── */}
      <div className="relative z-10 w-full max-w-5xl px-4 pb-0">
        {/* Image with CSS mask to fade all 4 edges into the dark background */}
        <img
          src="/hero-laptop.webp"
          alt="QContact unified platform dashboard"
          className="relative mx-auto w-full object-contain"
          style={{
            maxHeight: "560px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 80%, transparent 100%), " +
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 80%, transparent 100%), " +
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskComposite: "destination-in",
          }}
        />
        {/* Subtle blue glow under the laptop base */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-32 w-[60%] rounded-full bg-[#2467e3]/25 blur-[50px]"
        />
      </div>
    </section>
  );
}
