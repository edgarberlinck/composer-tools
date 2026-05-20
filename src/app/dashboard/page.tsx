import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-8">
      <section className="w-full max-w-3xl rounded-lg border border-dashed border-zinc-300 p-8 dark:border-zinc-700">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-2 text-zinc-500">Empty dashboard placeholder.</p>
        <p className="mt-6 text-sm text-zinc-500">
          Logged in as <span className="font-medium">{session.user.email}</span>
        </p>
        <Link
          className="mt-6 inline-flex text-sm underline"
          href="/api/auth/signout"
        >
          Sign out
        </Link>
      </section>
    </main>
  );
}
