import React from "react";

export default function MoreInfoPage() {
  return (
    <main className="min-h-screen bg-[#4CABAA] p-10 flex justify-center items-center">
      <div className="bg-white max-w-3xl w-full p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-[#156082] mb-6">Timeline</h1>

        <p className="text-gray-700 mb-4 text-lg">
          Timeline ist eine moderne Webanwendung zur automatisierten Erstellung von Dienst- und Einsatzplänen.
          Unser Ziel ist es, Organisationen wie Krankenhäuser, Pflegeeinrichtungen, Gastronomie oder Logistik
          bei einer effizienten, transparenten und fehlerfreien Schichtplanung zu unterstützen.
        </p>

        <h2 className="text-2xl font-semibold text-[#156082] mt-6 mb-3">Was bietet Timeline?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Automatische Erstellung rechtskonformer Dienstpläne</li>
          <li>Berücksichtigung von Verfügbarkeiten, Qualifikationen und Präferenzen</li>
          <li>Intuitive Benutzeroberfläche für Planer:innen und Mitarbeitende</li>
          <li>Benachrichtigungen per E-Mail bei Planänderungen</li>
          <li>Feedback der Mitarbeitenden für KI-basierte Optimierungen</li>
          <li>Export von Schichtplänen als PDF oder in Kalender</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#156082] mt-6 mb-3">Unsere Vision</h2>
        <p className="text-gray-700 mb-4 text-lg">
          Wir möchten die Schichtplanung revolutionieren, indem wir Prozesse digitalisieren, Mitarbeitenden mehr
          Mitbestimmung ermöglichen und Planer:innen entlasten. Timeline soll langfristig ein skalierbares,
          KI-gestütztes Planungssystem für verschiedenste Branchen werden.
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-[#156082] text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition"
        >
          Zurück zur Startseite
        </a>
      </div>
    </main>
  );
}