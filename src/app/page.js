'use client';
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <SessionProvider>
      <main>
        <Link href="/dashboard">Go to Dashboard</Link>
      </main>
    </SessionProvider>
  );
}
