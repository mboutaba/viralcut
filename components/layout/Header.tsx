"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Settings, ChevronDown, Play } from "lucide-react";

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/api/me");
      const data = await res.json();

      if (!data.success) {
        router.push("/login");
        return;
      }

      setUser(data.user);
    }

    fetchUser();
  }, [router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  async function logout() {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    const data = await res.json();

    if (data.success) {
      router.push("/");
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left side */}
        <div className="pt-8">
         <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">ShortGen</span>
          </div>
        </div>

        {/* Right side */}
        {user && (
          <div className="relative" ref={dropdownRef}>
            {/* Profile button */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold text-white">
                {user?.name?.charAt(0) || "U"}
              </div>

              <div className="hidden sm:flex flex-col leading-tight text-left">
                <span className="text-sm font-medium text-white">
                  {user?.name}
                </span>
                <span className="text-xs text-slate-400">
                  Pro Plan
                </span>
              </div>

              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown menu */}
            <div
              className={`absolute right-0 mt-2 w-48 rounded-xl bg-slate-900 border border-white/10 shadow-xl overflow-hidden
              transition-all duration-200 ease-out
              ${
                open
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              <button
                onClick={() => {
                  setOpen(false);
                  router.push("/settings");
                }}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>

              <div className="h-px bg-white/10" />

              <button
                onClick={logout}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
