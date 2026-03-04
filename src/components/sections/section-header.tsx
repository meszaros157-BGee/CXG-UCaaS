import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  label?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  headline,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {label && <Badge variant="secondary">{label}</Badge>}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline}</h2>
      {description && (
        <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
