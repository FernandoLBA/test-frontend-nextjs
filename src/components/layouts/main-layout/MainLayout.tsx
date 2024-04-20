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

        <div className="w-full ml-20 mt-20 sm:ml-64" >
          {children}
        </div>
      </div>
    </section>
  );
}
