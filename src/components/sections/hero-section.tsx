import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/content/types";

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-[#05070f] text-white">

      {/* ── Aurora colour blobs ── */}

      {/* Red — upper-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          top: "-120px",
          left: "-100px",
          width: "680px",
          height: "520px",
          background: "radial-gradient(ellipse, #cc2229 0%, transparent 70%)",
          opacity: 0.38,
          filter: "blur(50px)",
          animation: "hero-blob-1 14s ease-in-out infinite",
        }}
      />

      {/* Purple — upper-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          top: "-80px",
          right: "-120px",
          width: "760px",
          height: "620px",
          background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)",
          opacity: 0.32,
          filter: "blur(60px)",
          animation: "hero-blob-2 18s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      {/* Dark blue — bottom, centred */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          bottom: "-60px",
          left: "calc(50% - 450px)",
          width: "900px",
          height: "380px",
          background: "radial-gradient(ellipse, #1e3a8a 0%, transparent 70%)",
          opacity: 0.55,
          filter: "blur(70px)",
          animation: "hero-blob-3 20s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />

      {/* Grey — mid-section, adds depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          top: "30%",
          left: "18%",
          width: "480px",
          height: "360px",
          background: "radial-gradient(ellipse, #6b7280 0%, transparent 70%)",
          opacity: 0.18,
          filter: "blur(80px)",
          animation: "hero-blob-4 16s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />

      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Text block ── */}
      <div className="relative z-10 flex flex-col items-center gap-7 px-6 pt-20 pb-12 text-center md:pt-28 lg:pt-36">

        {/* Proposal label */}
        <div className="flex items-center gap-2">
          <span className="size-[7px] shrink-0 bg-[#2467e3]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2467e3]">
            UCaaS Proposal
          </span>
        </div>

        <h1 className="font-heading relative max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
          {content.headline}
        </h1>

        {/* Gradient subheadline — Red → Purple → Dark Blue */}
        <p
          className="relative text-xl font-bold"
          style={{
            background: "linear-gradient(135deg, #cc2229 0%, #7c3aed 50%, #1e6bd6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {content.subheadline}
        </p>

        <p className="relative max-w-2xl text-base leading-relaxed text-white/55">
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
              className="rounded-full border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/12 hover:text-white"
              asChild
            >
              <a href={content.secondaryCta.href}>{content.secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>

      {/* ── Laptop mockup image ── */}
      <div className="relative z-10 w-full max-w-5xl px-4 pb-0">
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
        {/* Blue glow under the laptop base */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-32 w-[60%] rounded-full bg-[#2467e3]/25 blur-[50px]"
        />
      </div>
    </section>
  );
}
