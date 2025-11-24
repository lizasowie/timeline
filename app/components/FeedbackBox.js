export default function FeedbackBox() {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 flex flex-col shadow-md">
      <p className="text-gray-700 mb-2">Schichtfeedback:</p>

      <textarea
        className="w-full h-64 bg-[#a9d4d1] text-gray-700 rounded-md p-3 outline-none"
        placeholder="Teile uns mit, was in deiner letzten Schicht gut/schlecht gelaufen ist..."
      />

      <button className="w-12 h-12 bg-[#5fb9b5] rounded-full mt-3 self-center flex items-center justify-center">
        →
      </button>
    </div>
  );
}
