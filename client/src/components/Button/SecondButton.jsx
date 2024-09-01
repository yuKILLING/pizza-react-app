export default function SecondButton({ children, ...props }) {
    // Main Button component
    return (
      <button {...props} className="bg-primaryBlue text-white font-bold py-2 px-6 transition duration-300 hover:bg-opacity-80 w-full active:opacity-50">
        {children}
      </button>
    );
  }
  