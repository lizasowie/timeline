export default function ActionCard({ title, onClick }) {
  return (
    <div className="border-gray-300 bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
      <p className="mb-4 text-gray-700">{title}</p>

      <button
        onClick={onClick}
        className="w-12 h-12 flex items-center justify-center bg-[#5fb9b5] rounded-full hover:bg-[#4ca6a2] transition"
      >
        →
      </button>
    </div>
  );
}
