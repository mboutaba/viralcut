"use client";

import { useState } from "react";
 

export default function LoginPage({ switchToRegister }: { switchToRegister: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(res => res.json())
      .then(res => {
        if (res.success) {
          console.log("logged in");
          location.href = "/dashboard";
        } else {
          setErrorMessage(res.error)
        }
      }
      )
  }

  return (
    <div className="max-h-screen   from-slate-950 via-purple-950 to-slate-950 text-white">

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md rounded-3xl bg-white/6 backdrop-blur  p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome back</h2>

          {errorMessage && <p className="text-sm text-red-400 mb-3">{errorMessage}</p>}

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
              onClick={handleLogin}
              disabled={loading}
              className="flex-1 rounded-md bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-white font-medium disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>

            <button
              onClick={switchToRegister}
              className="text-purple-400 hover:underline"
            >
              Create account
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
