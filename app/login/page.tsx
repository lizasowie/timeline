import React from "react";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#4CABAA] flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#156082]">
          Willkommen bei Timeline
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Die Plattform für automatisierte, transparente und effiziente Dienstplanung.
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <Link href="/dashboard">
          <button className="bg-[#156082] text-white py-3 px-6 rounded-xl shadow hover:opacity-90 transition">
            Login
          </button>
          </Link>
          <Link href="/details">
            <button className="border-2 border-[#156082] text-[#156082] py-3 px-6 rounded-xl hover:bg-[#156082] hover:text-white transition">
              Mehr erfahren
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
