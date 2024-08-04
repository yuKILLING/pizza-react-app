import "./Header.css";
// Header

export default function Header() {
  return (
    <header className="bg-white z-10 bg-opacity-80 backdrop-blur-md border-b border-b-gray-200 w-full fixed top-0">
      <div className="text-base grid grid-cols-3 items-center justify-items-center max-w-[1200px] py-2 m-auto">
        {/* Main Logo */}
        <img
          src="/header-logo.png"
          alt="Logo"
          className="w-28 cursor-pointer"
        />

        {/* Middle navigation */}
        <ul className="flex gap-10 font-bold">
          <li className="middle_navigation">Каталог</li>
          <li className="middle_navigation">Избранное</li>
          <li className="middle_navigation">О доставке</li>
        </ul>

        {/* Right navigation */}
        <ul className="flex gap-7 font-bold">
          {/* Street */}
          <div className="rightside_navigation">
            <img
              src="/icons/location.svg"
              alt="Location"
              className="w-4 cursor-pointer"
            />
            <li>Адрес</li>
          </div>

          {/* Profile */}
          <div className="rightside_navigation">
            <img
              src="/icons/profile.svg"
              alt="Location"
              className="w-4 cursor-pointer"
            />
            <li>Профиль</li>
          </div>
        </ul>
      </div>
    </header>
  );
}
