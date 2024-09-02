
const Navbar = () => {
  return (
    <header className=" flex md:flex-row flex-col md:justify-end pt-9 container mx-auto w-[90%]">
      <nav className="w-[700px] h-20 md:flex justify-around items-center bg-[#a3c0e2] hidden rounded-3xl">
        <a
          href=""
          target=""
          rel=""
          className="text-[#1f3550] text-lg hover:text-white"
        >
          About me
        </a>
        <a
          href=""
          target=""
          rel=""
          className="text-[#1f3550] text-lg hover:text-white"
        >
          Projects
        </a>
        <a
          href=""
          target=""
          rel=""
          className="text-[#1f3550] text-lg hover:text-white"
        >
          Contact me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
