import { redirect } from "next/navigation";

import { appRoutes } from "@/constants";

export default async function Home() {
  // * Redirige a explora
  redirect(appRoutes.EXPLORA);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Tienes que redirigirme a {"localhost"}/explora
      </div>
    </main>
  );
}
