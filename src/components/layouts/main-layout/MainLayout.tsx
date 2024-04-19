import { NavBar, Sidebar } from "@/components/ui";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />

      <div className="flex">
        <Sidebar />

        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
