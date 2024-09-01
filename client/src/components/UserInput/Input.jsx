export default function Input({ className, ...props }) {
    return (
      <input
        {...props}
        className={`px-1 bg-black bg-opacity-5 border outline-none h-10 focus:border-black focus:bg-white transition ${className} `}
      />
    );
  }
  