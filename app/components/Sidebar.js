"use client";

import { Home, Calendar, Plane, Heart, PieChart, CloudOff } from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: <Home size={26} />, label: "Home"},
    { icon: <Calendar size={26} />, label: "Calendar" },
    { icon: <Plane size={26} />, label: "Travel" },
    { icon: <Heart size={26} />, label: "Health" },
    { icon: <PieChart size={26} />, label: "Stats" },
  ];

  return (
    <aside className="w-20 h-full py-8 flex flex-col items-center gap-6">
      {items.map((item, i) => (
        <button
          key={i}
          className="w-14 h-14 bg-[#4ea7a3] rounded-xl flex items-center justify-center text-white hover:bg-[#479b98] transition"
        >
          {item.icon}
        </button>
      ))}
    </aside>
  );
}
