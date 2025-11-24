export default function WeekPlanner() {
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 flex-1">
      <div className="grid grid-cols-7 text-center mb-4 text-lg font-light">
        {days.map((day, i) => (
          <div key={i} className={`${day === "Di" ? "text-red-500" : "text-gray-700"}`}>
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 h-[420px] gap-2">
        {/* Your events would go here */}
        {/* We can add dynamic events later if you want */}
      </div>
    </div>
  );
}
