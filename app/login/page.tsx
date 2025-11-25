"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleLogin = (e: React.FormEvent) => {
e.preventDefault();
console.log("Login attempt:", { username, password });
// Hier später echte Login-Logik einfügen
};

return ( <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6"> <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 max-w-md w-full text-center border border-gray-200">

    {/* Titel */}
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
      Timeline
    </h1>

    <p className="text-gray-600 text-lg md:text-xl mb-8">
      Melde dich mit deinen Zugangsdaten an.
    </p>

    {/* Login Formular */}
    <form onSubmit={handleLogin} className="flex flex-col gap-6 text-left border-t border-gray-200 pt-6">

      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Nutzername</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#4CABAA] focus:ring-2 focus:ring-[#4CABAA]/20 outline-none transition"
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
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#4CABAA] focus:ring-2 focus:ring-[#4CABAA]/20 outline-none transition"
          placeholder="••••••••"
          required
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="mt-4 bg-[#4CABAA] text-white py-3 px-6 rounded-xl shadow-md text-lg font-semibold hover:bg-[#3a9a95] hover:shadow-lg transition-all"
      >
        Einloggen
      </button>
    </form>

    {/* Zusatzlinks */}
    <div className="mt-8 flex flex-col items-center gap-2">
      <Link href="/details">
        <span className="text-[#4CABAA] hover:underline cursor-pointer text-sm md:text-base">
          Mehr über Timeline erfahren →
        </span>
      </Link>
    </div>

  </div>
</main>

);
}
