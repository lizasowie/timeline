"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function UrlaubPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("Urlaub");
  const [comment, setComment] = useState("");

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    const days = diff / (1000 * 60 * 60 * 24) + 1;
    return days > 0 ? days : 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Urlaubsanfrage:", {
      startDate,
      endDate,
      reason,
      comment,
      days: calculateDays(),
    });
    alert("Urlaubsanfrage wurde eingereicht!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#4cabaa] to-[#2b8584]">

      <Navbar name="Benutzer" />

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-4 md:p-10 pb-24 md:pb-10 overflow-auto">

          <div className="bg-[#faf6e3] backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] p-8 md:p-12 max-w-2xl mx-auto border border-white/40">

            <h1 className="text-3xl md:text-4xl font-bold text-[#156082] mb-6 text-center">
              Urlaubsanfrage
            </h1>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

              {/* STARTDATUM */}
              <div>
                <label className="font-medium text-gray-700">Startdatum</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl border border-gray-300 text-black focus:border-[#156082] focus:ring-2 focus:ring-[#156082]/30 outline-none"
                  required
                />
              </div>

              {/* ENDDATUM */}
              <div>
                <label className="font-medium text-gray-700">Enddatum</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl border border-gray-300 text-black focus:border-[#156082] focus:ring-2 focus:ring-[#156082]/30 outline-none"
                  required
                />
              </div>

              {/* GRUND */}
              <div>
                <label className="font-medium text-gray-700">Grund</label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl border border-gray-300 text-black bg-white focus:border-[#156082] focus:ring-2 focus:ring-[#156082]/30 outline-none"
                >
                  <option>Urlaub</option>
                  <option>Krankheit</option>
                  <option>Sonderurlaub</option>
                  <option>Fortbildung</option>
                </select>
              </div>

              {/* KOMMENTAR */}
              <div>
                <label className="font-medium text-gray-700">Kommentar (optional)</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl border border-gray-300 text-black bg-white focus:border-[#156082] focus:ring-2 focus:ring-[#156082]/30 outline-none resize-none"
                  rows={3}
                  placeholder="Weitere Details …"
                />
              </div>

              {/* TAGE */}
              <div className="text-right text-gray-700 font-medium text-lg">
                Dauer: <span className="text-[#156082]">{calculateDays()}</span> Tage
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-[#156082] text-white py-3 px-6 rounded-xl shadow-md text-lg font-medium hover:shadow-lg hover:-translate-y-[2px] transition-all"
              >
                Anfrage senden
              </button>

            </form>

          </div>
        </main>

      </div>
    </div>
  );
}
