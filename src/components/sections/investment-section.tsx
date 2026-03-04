import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./section-header";
import type { InvestmentContent } from "@/content/types";

interface InvestmentSectionProps {
  content: InvestmentContent;
}

function formatZAR(amount: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function InvestmentSection({ content }: InvestmentSectionProps) {
  return (
    <section className="bg-muted/50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          description={content.description}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Once-Off */}
          <Card>
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                Once-Off
              </Badge>
              <CardTitle className="text-lg">
                Implementation Investment
              </CardTitle>
              <p className="text-xs text-muted-foreground">Excluding VAT/Tax</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {content.onceOff.items.map((item) => (
                  <div key={item.item}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.item}</span>
                      <span className="text-sm">
                        {formatZAR(item.amount)}
                      </span>
                    </div>
                    {item.note && (
                      <p className="text-xs text-muted-foreground">{item.note}</p>
                    )}
                    <Separator className="mt-3" />
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-bold">Total</span>
                  <span className="text-lg font-bold text-primary">
                    {formatZAR(content.onceOff.total)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly */}
          <Card>
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                Monthly
              </Badge>
              <CardTitle className="text-lg">
                QContact Licenses
              </CardTitle>
              <p className="text-xs text-muted-foreground">Excluding Tax</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Per License</span>
                  <span className="text-sm">
                    {formatZAR(content.monthly.perLicense)}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    Quantity (minimum)
                  </span>
                  <span className="text-sm">
                    {content.monthly.licenseCount}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-bold">Monthly Total</span>
                  <span className="text-lg font-bold text-primary">
                    {formatZAR(content.monthly.total)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {content.monthly.note}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
