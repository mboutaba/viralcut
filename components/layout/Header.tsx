"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  const nickname =
    (session && (session.user as any)?.name) ||
    (session && session.user?.email?.split("@")[0]) ||
    "User";
  const initials = nickname?.[0]?.toUpperCase() || "U";

  return (
    <header className="border-b border-white/10 backdrop-blur bg-black/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Motiva AI
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400 hidden sm:block">
            AI-powered calming video generator
          </span>

          {session ? (
            <div className="flex items-center gap-3">
              <div
                title={nickname}
                className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold"
              >
                {initials}
              </div>

              <span className="text-sm text-gray-200 hidden md:block">
                {nickname}
              </span>

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="ml-2 inline-flex items-center gap-2 rounded-md bg-white/6 px-3 py-1 text-sm text-white hover:bg-white/10"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <Link href="/login" className="text-sm text-white/90">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
