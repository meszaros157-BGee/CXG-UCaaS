import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pillars = [
  {
    title: "Strategic Alignment",
    description:
      "Aligning brand experience with business objectives to drive measurable outcomes.",
  },
  {
    title: "Customer Experience",
    description:
      "Designing seamless journeys that meet customers where they are and exceed expectations.",
  },
  {
    title: "Operational Excellence",
    description:
      "Streamlining processes and technology to deliver consistency at scale.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center md:py-32">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Engen Integrated Experience
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A strategic proposal to transform the customer journey through
          alignment, innovation, and operational excellence.
        </p>
      </section>

      {/* Pillar Cards */}
      <section className="mx-auto grid w-full max-w-5xl gap-6 px-6 pb-16 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title}>
            <CardHeader>
              <CardTitle>{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{pillar.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-4 px-6 pb-24 text-center">
        <h2 className="text-2xl font-semibold">Ready to explore the details?</h2>
        <p className="max-w-md text-muted-foreground">
          Dive into the full proposal to see how each pillar comes together.
        </p>
        <Button size="lg">View Full Proposal</Button>
      </section>
    </div>
  );
}
