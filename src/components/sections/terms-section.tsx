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
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label={content.sectionLabel}
          headline={content.headline}
          variant="light"
        />

        <Accordion type="single" collapsible className="w-full">
          {content.sections.map((section, index) => (
            <AccordionItem key={section.title} value={`item-${index}`} className="border-neutral-200">
              <AccordionTrigger className="font-heading text-sm font-semibold hover:text-[#2467e3] hover:no-underline">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
