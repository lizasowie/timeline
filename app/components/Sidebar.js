"use client";

import { Home, Calendar, Plane, Heart, PieChart } from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: <Home size={26} />, label: "Home" },
    { icon: <Calendar size={26} />, label: "Calendar" },
    { icon: <Plane size={26} />, label: "Travel" },
    { icon: <Heart size={26} />, label: "Health" },
    { icon: <PieChart size={26} />, label: "Stats" },
  ];

  return (
    <aside
      className="
        fixed bottom-0 left-0 w-full h-20 shadow-lg flex justify-around items-center px-4
        md:static md:w-20 md:h-full md:py-8 md:flex-col md:justify-start md:items-center md:gap-6 md:shadow-none
      "
    >
      {items.map((item, i) => (
        <button
          key={i}
          className="
            w-14 h-14 bg-[#faf6e3] rounded-xl flex items-center justify-center text-black 
            hover:bg-[#479b98] transition
          "
        >
          {item.icon}
        </button>
      ))}
    </aside>
  );
}
