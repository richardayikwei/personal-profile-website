import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" flex md:flex-row flex-col md:justify-end pt-9 container mx-auto w-[90%]">
      <nav className="md:w-[700px] h-20 hidden md:flex justify-around items-center bg-[#a3c0e2] rounded-3xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-white"
              : "text-[#1f3550] text-lg hover:text-white"
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/projects"
           className={({ isActive }) =>
            isActive
              ? "text-lg text-white"
              : "text-[#1f3550] text-lg hover:text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="nk"
          target=""
          rel=""
           className={({ isActive }) =>
            isActive
              ? "text-lg text-white"
              : "text-[#1f3550] text-lg hover:text-white"
          }
        >
          Contact me
        </NavLink>
      </nav>

      <nav className=" h-32 flex flex-col justify-around items-center bg-[#a3c0e2] rounded-3xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-white"
              : "text-[#1f3550] text-lg hover:text-white"
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/projects"
           className={({ isActive }) =>
            isActive
              ? "text-lg text-white"
              : "text-[#1f3550] text-lg hover:text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="nk"
          target=""
          rel=""
           className={({ isActive }) =>
            isActive
              ? "text-lg text-white"
              : "text-[#1f3550] text-lg hover:text-white"
          }
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
