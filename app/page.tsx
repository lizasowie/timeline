import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import WeekPlanner from "./components/WeekPlanner";
import ActionCard from "./components/ActionCard";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#faf6e3] flex flex-col">
      {/* Navbar oben, volle Breite */}
      <Navbar name="Max Mustermann" />

      {/* Flex-Container für Sidebar und Content darunter */}
      <div className="flex flex-1">
        {/* Sidebar links, unten der Navbar */}
        <Sidebar />

        {/* Hauptinhalt */}
        <main className="flex-1 flex flex-col">
          <div className="p-6 flex gap-6">
            <WeekPlanner />
          </div>
          <div className="p-6 grid grid-cols-4 gap-6">
            <ActionCard title="Wunschdienst eintragen" onClick={undefined} />
            <ActionCard title="Krankmeldung einreichen" onClick={undefined}/>
            <ActionCard title="Urlaub beantragen" onClick={undefined}/>
            <ActionCard title="Feedback mitteilen" onClick={undefined}/>
            <ActionCard title="Schichtwechsel anfragen" onClick={undefined}/>
          </div>
        </main>
      </div>
    </div>
  );
}
