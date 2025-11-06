import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About`,
  description:
    "Learn about nt3's mission to make AI development more accessible.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-3xl mx-auto px-6 lg:py-12 py-24  md:mt-24  pb-32">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="lg:text-4xl md:text-3xl text-2xl  text-center font-medium  lg:mb-20 mb-10">
          Why we built nt3
        </h1>

        <div className="space-y-6 text-muted-foreground">
          <p className=" leading-relaxed">
            Building AI apps is chaos right now. Every week, a new framework,
            SDK, or model drops and developers waste hours just trying to find
            the right tools. nt3 fixes that by curating the best AI dev tools,
            all in one place.
          </p>

          <section>
            <h2 className="font-medium text-xl  text-foreground mb-3">
              Our Mission
            </h2>
            <p className="leading-relaxed ">
              To make AI development faster, clearer, and more accessible by
              connecting builders with the right tools for their stack.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-xl  tracking-tight text-foreground mb-3">
              What nt3 Offers
            </h2>
            <p className="leading-relaxed">
              We organize and explain tools across the AI ecosystem: frameworks,
              LLMs, SDKs, vector databases, and infrastructure. Whether you’re
              prototyping an agent or scaling to production, nt3 helps you
              discover the tech that actually matters.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-xl  tracking-tight text-foreground mb-3">
              Community-Driven
            </h2>
            <p className="leading-relaxed">
              nt3 is built by AI builders, for AI builders. Contribute a tool,
              share feedback, or help us discover the next big thing in the AI
              dev world.
            </p>
          </section>

          <div className="pt-6 border-t">
            <p className="text-sm">
              Have a tool suggestion or want to contribute?{" "}
              <a
                className="text-primary hover:underline"
                href="https://github.com/nt3ai/nt3"
                rel="noopener noreferrer"
                target="_blank"
              >
                Reach out to us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
