"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
    // Hier würdest du später echte Login-Logik einfügen (API-Call etc.)
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4cabaa] to-[#2b8584] flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] p-10 md:p-14 max-w-lg w-full text-center border border-white/40">

        {/* Titel */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#156082]">
          <span className="text-[#0e3c53]">Timeline</span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
          Melde dich mit deinen Zugangsdaten an.
        </p>

        {/* LOGIN FORMULAR */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5 text-left">

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Nutzername</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border text-black border-gray-300 focus:border-[#156082] focus:ring-2 focus:ring-[#156082]/30 outline-none transition"
              placeholder="Dein Nutzername"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-black border border-gray-300 focus:border-[#156082] focus:ring-2 focus:ring-[#156082]/30 outline-none transition"
              placeholder="••••••••"
              required
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="mt-4 bg-[#156082] text-white py-3 px-6 rounded-xl shadow-md text-lg font-medium hover:shadow-lg hover:-translate-y-[2px] transition-all"
          >
            Einloggen
          </button>
        </form>

        {/* Zusatzlinks */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <Link href="/details">
            <span className="text-[#156082] hover:underline cursor-pointer">
              Mehr über Timeline erfahren →
            </span>
          </Link>
        </div>

      </div>
    </main>
  );
}
