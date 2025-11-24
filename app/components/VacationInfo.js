import { Calendar, Clock } from "lucide-react";

export default function VacationInfo() {
  return (
    <div className="border border-gray-300 bg-white rounded-xl p-4 shadow-sm flex flex-col justify-between">
      <p className="text-gray-600 text-sm mb-4">Nächste Urlaube:</p>

      <div className="flex items-center gap-2 text-gray-700">
        <Calendar size={20} />
        <span>25.02. – 03.03.2026</span>
      </div>

      <div className="flex items-center gap-2 mt-2 text-gray-700">
        <Clock size={20} />
        <span>06.06. – 21.06.2026</span>
      </div>

      <button className="mt-4 w-12 h-12 bg-[#5fb9b5] rounded-full flex items-center justify-center">
        →
      </button>
    </div>
  );
}
