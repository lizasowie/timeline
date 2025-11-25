"use client";

import Link from "next/link";
import { Calendar, Plane, UserCheck, Users, PieChart } from "lucide-react";

export default function PlannerDashboard() {
return ( <main className="min-h-screen bg-[#4CABAA] p-6 md:p-10"> <h1 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
Planer Dashboard </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {/* Offene Urlaubsanfragen */}
    <Link href="/urlaub">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer">
        <UserCheck size={40} className="text-[#4CABAA] mb-3" />
        <span className="text-xl font-semibold text-gray-800 text-center">
          Offene Urlaubsanfragen
        </span>
      </div>
    </Link>

    {/* Schichtplanung */}
    <Link href="/schichten">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer">
        <Users size={40} className="text-[#4CABAA] mb-3" />
        <span className="text-xl font-semibold text-gray-800 text-center">
          Schichtplanung
        </span>
      </div>
    </Link>

    {/* Statistiken */}
    <Link href="/stats">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer">
        <PieChart size={40} className="text-[#4CABAA] mb-3" />
        <span className="text-xl font-semibold text-gray-800 text-center">
          Statistiken & Reports
        </span>
      </div>
    </Link>
  </div>

  {/* Wochenübersicht */}
  <div className="bg-white rounded-2xl shadow-xl p-6">
    <div className="flex items-center gap-3 mb-4">
      <Calendar size={28} className="text-[#4CABAA]" />
      <h2 className="text-2xl font-semibold text-gray-800">Diese Woche im Überblick</h2>
    </div>
    <p className="text-gray-600 mb-2">
      Hier könnte eine Vorschau des Wochenplans, der Schichten oder wichtiger Termine stehen.
    </p>
    <Link href="/wochenplan">
      <button className="mt-4 bg-[#156082] text-white py-2 px-5 rounded-xl hover:opacity-90 transition">
        Zum Wochenplan
      </button>
    </Link>
  </div>
</main>

);
}
