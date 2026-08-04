import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState("opacity-0");
  const [btnX, setBtnX] = useState("");

  function handleShow() {
    if (showNav === "opacity-0") {
      setShowNav("opacity-1");
      setBtnX("open");
    } else {
      setShowNav("opacity-0");
      setBtnX("");
    }
  }

  return (
    <header className="relative flex flex-col md:flex-row md:justify-end pt-9 container mx-auto w-[90%]">
      <nav className="hidden md:flex md:w-[700px] h-20 justify-around items-center bg-[#b8a084] rounded-3xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-[#1318a2]"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          About me
        </NavLink>

        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-[#1318a2]"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-[#1318a2]"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-[#1318a2]"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Contact me
        </NavLink>
      </nav>

      <button
        title="hamburger menu"
        type="button"
        id="menu-btn"
        onClick={handleShow}
        className={`block md:hidden hamburger ${btnX} focus:outline-none`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      <nav
        className={`transition-opacity h-32 flex flex-col justify-around items-center md:hidden bg-[#b8a084] rounded-3xl ${showNav}`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-[#1318a2]"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          About me
        </NavLink>

        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-[#1318a2]"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-[#1318a2]"
              : "text-[#010101] text-lg md:hover:text-white"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-[#1318a2]"
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