"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "./section-header";
import type { TermsContent } from "@/content/types";

interface TermsSectionProps {
  content: TermsContent;
}

export default function TermsSection({ content }: TermsSectionProps) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
        />

        <Accordion type="single" collapsible className="w-full">
          {content.sections.map((section, index) => (
            <AccordionItem key={section.title} value={`item-${index}`}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
