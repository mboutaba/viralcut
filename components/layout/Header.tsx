"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from 'lucide-react';






export default function Header() {

  const [user, setUser] = useState<any>(null);

  const router = useRouter();


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
  }, []);


  async function logout() {

    await fetch("/api/auth/logout", {
      method: "POST"
    }).then(res => res.json())
      .then(res => {
        if (res.success) {

          router.push("/");
        }
      }
      )


  }


  return (



    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
  <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
    
    {/* Left side (logo / title if you want later) */}
    <div className="flex items-center gap-2">
      {/* Logo or App Name */}
    </div>

    {/* Right side (ALWAYS visible) */}
    {user && ( <div className="flex items-center gap-4">
      
      {/* User info */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold text-white">
          {user?.name?.charAt(0) || "U"}
        </div>

        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-sm font-medium text-white">
            {user?.name}
          </span>
          <span className="text-xs text-slate-400">
            Pro Plan
          </span>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={logout}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
      >
        <LogOut className="w-4 h-4" />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </div>)}

  </div>
</nav>

  )
}
