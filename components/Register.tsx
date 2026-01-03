"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage({ switchToLogin }: { switchToLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReg() {
    await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password }),
    }).then(res => res.json())
      .then(res => {
        if (res.success) {
          //location.href = "/login";
          switchToLogin();
        } else {
          setErrorMessage(res.error)
        }
      }
      );

  }




  return (
    <div className="max-h-screen   from-slate-950 via-purple-950 to-slate-950 text-white">

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md rounded-3xl bg-white/6 backdrop-blur border border-white/10 shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome back</h2>

          {errorMessage && <p className="text-sm text-red-400 mb-3">{errorMessage}</p>}

          <label className="block text-sm text-gray-300 mb-1">Full name</label>
          <input
            className="w-full mb-4 px-3 py-2 rounded-md bg-white/5 border placeholder-gray-400"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />

          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            className="w-full mb-4 px-3 py-2 rounded-md bg-white/5 border placeholder-gray-400"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />




          <label className="block text-sm text-gray-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full mb-4 px-3 py-2 rounded-md bg-white/5 border  placeholder-gray-400"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleReg}
              disabled={loading}
              className="flex-1 rounded-md bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-white font-medium disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Register"}
            </button>

            <button
              onClick={switchToLogin}
              className="text-purple-400 hover:underline"
            >
              Log in
            </button>
          </div>



          <p className="text-sm text-gray-400 mt-4">
            By signing in you can generate short calming videos.
          </p>
        </div>
      </main>






    </div>
  );
}

