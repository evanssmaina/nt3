import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Our commitment to protecting your privacy and personal information when using nt3.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <h1 className="lg:text-4xl md:text-3xl text-2xl  text-center  lg:mb-20 mb-10">
        Terms of Service
      </h1>
    </>
  );
}
