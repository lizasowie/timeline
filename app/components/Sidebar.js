"use client";

import { Home, Calendar, Plane, Heart, PieChart } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const items = [
    { icon: <Home size={26} />, label: "Home", href: "/" },
    { icon: <Calendar size={26} />, label: "Calendar", href: "/calender" },
    { icon: <Plane size={26} />, label: "Urlaub", href: "/urlaub" },
    { icon: <Heart size={26} />, label: "Krankheit", href: "/sick" },
    { icon: <PieChart size={26} />, label: "Stats", href: "/stats" },
  ];

  return (
    <aside
      className="
        fixed bottom-0 left-0 w-full h-20 shadow-lg flex justify-around items-center px-4
        md:static md:w-20 md:h-full md:py-8 md:flex-col md:justify-start md:items-center md:gap-6 md:shadow-none
      "
    >
      {items.map((item, i) => (
  <Link
    key={i}
    href={item.href}
    className="
      w-14 h-14 bg-[#faf6e3] rounded-xl flex items-center justify-center text-black 
      hover:bg-[#479b98] transition
    "
  >
    {item.icon}
  </Link>
))}
    </aside>
  );
}
