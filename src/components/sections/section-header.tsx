interface SectionHeaderProps {
  label?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
}

export default function SectionHeader({
  label,
  headline,
  description,
  align = "center",
  variant = "light",
}: SectionHeaderProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`mb-12 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {label && (
        <div className="flex items-center gap-2">
          <span className="size-[7px] shrink-0 bg-[#2467e3]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2467e3]">
            {label}
          </span>
        </div>
      )}
      <h2
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-foreground"
        }`}
      >
        {headline}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg leading-relaxed ${
            isDark ? "text-white/65" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
