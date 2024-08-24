import "./Header.css";
import { Link, NavLink } from "react-router-dom";
// Header

export default function Header() {
  return (
    <header className="bg-white z-10 bg-opacity-80 backdrop-blur-md border-b border-b-gray-200 sticky top-0">
      <div className="text-base grid grid-cols-3 items-center justify-items-center max-w-[1200px] py-2 m-auto">
        {/* Main Logo */}
        <NavLink to={"/"}>
          <img
            src="/header-logo.png"
            alt="Logo"
            className="w-28 cursor-pointer"
          />
        </NavLink>

        {/* Middle navigation */}
        <ul className="flex gap-10 font-bold">
          <li className="middle_navigation">
            <Link to="/">Каталог</Link>
          </li>
          <li className="middle_navigation">
            <Link to="/delivery">О доставке</Link>
          </li>
          <li className="middle_navigation">
            <Link to="/favorites">Избранное</Link>
          </li>
        </ul>

        {/* Right navigation */}
        <ul className="flex gap-7 font-bold">
          {/* Street */}
          <Link to={"/street"}>
            <div className="rightside_navigation">
              <img
                src="/icons/location.svg"
                alt="Location"
                className="w-4 cursor-pointer"
              />
              <li>Адрес</li>
            </div>
          </Link>

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
