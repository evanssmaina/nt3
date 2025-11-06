import { Menu } from "@/components/menu";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <Menu />
      <main className="flex-1 lg:px-10 px-5 py-6 pt-16 md:pt-16 space-y-8 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  );
}
