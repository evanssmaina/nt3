export default function CompanyLayout(props: LayoutProps<"/">) {
  return (
    <div className="container max-w-3xl mx-auto px-6 lg:py-12 py-24  md:mt-24  pb-32">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {props.children}
      </div>
    </div>
  );
}
