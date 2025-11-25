"use client";

import { useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { de } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { de: de };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

type ShiftType = "früh" | "spät" | "nacht";

interface ShiftEvent extends Event {
  type: ShiftType;
}

// Beispiel-Daten
const shifts: ShiftEvent[] = [
  {
    title: "Frühschicht",
    start: new Date(2025, 10, 24, 6, 0), // 24.11.2025 06:00
    end: new Date(2025, 10, 24, 14, 0),
    type: "früh",
  },
  {
    title: "Spätschicht",
    start: new Date(2025, 10, 24, 14, 0),
    end: new Date(2025, 10, 24, 22, 0),
    type: "spät",
  },
  {
    title: "Nachtschicht",
    start: new Date(2025, 10, 24, 22, 0),
    end: new Date(2025, 10, 24, 23, 0), // geht über Mitternacht
    type: "nacht",
  },
];

export default function WeekPlanner() {
  const [events] = useState<ShiftEvent[]>(shifts);

  // Farbzuordnung
  const eventStyleGetter = (event: ShiftEvent) => {
    let backgroundColor = "#4caf50"; // default grün

    switch (event.type) {
      case "früh":
        backgroundColor = "#4caf50"; // grün
        break;
      case "spät":
        backgroundColor = "#ffeb3b"; // gelb
        break;
      case "nacht":
        backgroundColor = "#1e3a8a"; // dunkelblau
        break;
    }

    const style = {
      backgroundColor,
      color: event.type === "nacht" ? "white" : "black",
      borderRadius: "8px",
      border: "none",
      padding: "2px 4px",
      fontSize: "0.85rem",
    };

    return { style };
  };

  return (
    <div className="p-4 md:p-10 min-h-screen">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">
          Dienstplan
        </h1>

        <Calendar
          localizer={localizer}
          events={events}
          defaultView="week"
          views={["week"]}
          step={60}
          timeslots={1}
          defaultDate={new Date(2025, 10, 24)}
          style={{ height: 700 }}
          eventPropGetter={eventStyleGetter}
          
        />
      </div>
    </div>
  );
}
