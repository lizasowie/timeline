"use client";

import { Clock, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ name = "Name" }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full px-6 py-3 bg-[#faf6e3] flex items-center justify-between border-b border-neutral-300">
      
      {/* left side */}
      <div className="flex items-center gap-4">
        <div className="bg-[#5fb9b5] text-gray-800 rounded-xl px-3 py-3 flex flex-col items-center justify-center shadow-sm">
          <Clock size={28} strokeWidth={1.5} />
          <span className="text-[11px] opacity-80 -mt-1">Timeline</span>
        </div>

        <span className="text-xl text-gray-700 font-light">
          Willkommen, {name}
        </span>
      </div>

      {/* right side */}
      <button className="p-2 rounded-full border-2 border-gray-600 hover:bg-gray-200 transition">
        <User size={32} strokeWidth={1.5} />
      </button>
    </nav>
  );
}
