import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import WeekPlanner from "./components/WeekPlanner";
import ActionCard from "./components/ActionCard";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Navbar oben */}
      <Navbar name="Max Mustermann" />

      {/* Flex-Container für Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar links */}
        <Sidebar />

        {/* Hauptinhalt */}
        <main className="flex-1 flex flex-col overflow-auto">
          
          {/* Kalenderbereich */}
          <div className="p-4 md:p-6 flex-1 w-full h-full min-h-[400px] md:min-h-[500px]">
            <WeekPlanner />
          </div>

          {/* ActionCards */}
          <div className="p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <ActionCard title="Wunschdienst eintragen" onClick={undefined} />
            <ActionCard title="Krankmeldung einreichen" onClick={undefined} />
            <Link href="/urlaub">
              <ActionCard title="Urlaub beantragen" onClick={undefined} />
            </Link>
            <ActionCard title="Feedback mitteilen" onClick={undefined} />
            <ActionCard title="Schichtwechsel anfragen" onClick={undefined} />
          </div>

        </main>
      </div>
    </div>
  );
}
