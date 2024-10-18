import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState('opacity-0');
  const [btnX, setBtnX] = useState('');

  function handleShow() {
    showNav === "opacity-0" ? setShowNav("opacity-1") : setShowNav("opacity-0");
    showNav === "opacity-0" ? setBtnX("open") : setBtnX("");
  }

  return (
    <header className="relative flex md:flex-row flex-col md:justify-end pt-9 container mx-auto w-[90%] ">
      <nav className="md:w-[700px] h-20 hidden md:flex justify-around items-center bg-[#b8a084] rounded-3xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-white drop-shadow-2xl"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-white drop-shadow-2xl"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          target=""
          rel=""
          className={({ isActive }) =>
            isActive
              ? "text-lg text-white drop-shadow-2xl"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Contact me
        </NavLink>
      </nav>

      <button
        title="hamburger menu"
        type="button"
        onClick={handleShow}
        id="menu-btn"
        className={`block ${btnX} hamburger md:hidden focus:outline-none`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      <nav
        className={` transition-opacity h-32 flex ${showNav} flex-col justify-around items-center md:hidden bg-[#b8a084] rounded-3xl`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-white drop-shadow-2xl"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-white drop-shadow-2xl"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          target=""
          rel=""
          className={({ isActive }) =>
            isActive
              ? "text-lg text-white drop-shadow-2xl"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
