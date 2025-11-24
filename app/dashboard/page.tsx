// app/page.js (für Next.js 13+ mit Tailwind)
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f7f4e6] flex flex-col text-black">
      {/* Navbar / Header */}
      <header className="flex items-center p-6">
        <span className="text-2xl font-medium">Willkommen, Name</span>
        <div className="ml-auto">
          {/* Icon für Profil / User */}
          <button className="rounded-full border p-2">{/* Profil Icon */}</button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-20 bg-[#6bcbc2] flex flex-col items-center pt-6 space-y-8">
          {/* Icons für Timeline, Home, Kalender, Flugzeug, Herz etc. */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 grid grid-cols-3 gap-8">
          {/* Wochenübersicht */}
          <section className="col-span-2 bg-white rounded-lg shadow p-4">
            {/* Kalenderdarstellung als Balken (Diagramm) */}
            {/* Die einzelnen Balken auf Tagen abbilden */}
          </section>

          {/* Schichtfeedback */}
          <section className="bg-white rounded-lg shadow p-4 flex flex-col">
            <div className="mb-2 font-semibold">Schichtfeedback:</div>
            <textarea 
              className="flex-1 bg-[#e4f1ee] rounded p-2 mb-2" 
              placeholder="Teile uns mit, was in deiner letzten Schicht gut/schlecht gelaufen ist..."
              />
            <button className="bg-[#6bcbc2] text-white rounded px-4 py-2">➔</button>
          </section>
        </main>
      </div>

      {/* Bottom Buttons */}
      <footer className="flex justify-center space-x-4 p-6">
        <button className="rounded shadow px-6 py-4 bg-white">Wunschdienst eintragen <span className="ml-2">➔</span></button>
        <button className="rounded shadow px-6 py-4 bg-white">Krankmeldung einreichen <span className="ml-2">➔</span></button>
        <button className="rounded shadow px-6 py-4 bg-white">Urlaub beantragen <span className="ml-2">➔</span></button>
        {/* Anzeige nächster Urlaub */}
        <div className="rounded shadow px-4 py-4 bg-white">
          <div className="font-semibold">Nächste Urlaube:</div>
          <ul>
            <li>25.02. - 03.03.2026 <span>✔️</span></li>
            <li>06.06. - 21.06.2026</li>
          </ul>
        </div>
        <button className="rounded shadow px-6 py-4 bg-white">Schichtwechsel <span className="ml-2">➔</span></button>
      </footer>
    </div>
  );
}
