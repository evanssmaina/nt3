import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About`,
  description:
    "Learn about nt3's mission to make AI development more accessible.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-3xl mx-auto px-6 py-12 md:mt-24 pb-32">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-medium text-center tracking-tight mb-20">
          Why I built nt3
        </h1>

        <div className="space-y-6 text-muted-foreground">
          <p className=" leading-relaxed">
            nt3 exists to make AI development faster and more accessible — by
            connecting developers with the tools they actually need to build.
          </p>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-foreground mb-3">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              nt3 is the open marketplace for AI builders. We believe that
              building powerful AI applications shouldn't require spending
              countless hours researching and evaluating tools. Our mission is
              to make AI development more accessible by curating the best
              frameworks, SDKs, LLMs, and infrastructure tools in one place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-foreground mb-3">
              What We Do
            </h2>
            <p className="leading-relaxed">
              We explore and catalog tools that help developers create powerful
              AI agents and apps. From vector databases and LLM frameworks to
              deployment platforms and monitoring tools, we provide
              comprehensive information to help you make informed decisions
              about your AI stack.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-foreground mb-3">
              Community-Driven
            </h2>
            <p className="leading-relaxed">
              nt3 is curated by the community, for the community. We're always
              looking for new tools to add and welcome contributions from
              developers who have found great solutions to their AI development
              challenges.
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
