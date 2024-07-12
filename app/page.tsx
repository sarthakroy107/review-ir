//app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center gap-7 p-20">
      <h1 className="text-3xl font-semibold">Home page</h1>
      <Link href="/login" className="bg-black text-white px-4 py-2 font-semibold rounded-sm">
        Login
      </Link>
    </main>
  );
}
