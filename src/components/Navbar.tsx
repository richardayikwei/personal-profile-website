import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" flex md:flex-row flex-col md:justify-end pt-9 container mx-auto w-[90%]">
      <nav className="w-[700px] h-20 md:flex justify-around items-center bg-[#a3c0e2] hidden rounded-3xl">
        <Link
          to="/"
          className="text-[#1f3550] text-lg hover:text-white"
        >
          About me
        </Link>
        <Link
          to="/projects"
          className="text-[#1f3550] text-lg hover:text-white"
        >
          Projects
        </Link>
        <Link
          to=""
          target=""
          rel=""
          className="text-[#1f3550] text-lg hover:text-white"
        >
          Contact me
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
