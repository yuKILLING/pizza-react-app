export default function Button({ children }) {
  // Main Button component
  return (
    <button className="bg-[#FFF0E6] text-primaryOrange font-bold py-2 px-6 rounded-3xl transition duration-300 hover:bg-[#FFD2B3] active:opacity-50">
      {children}
    </button>
  );
}
