import { assets } from "../assets/assests";

const Navbar = () => {
  return (
    <div className=" container mx-auto flex md:flex-row flex-col md:justify-between pt-9 items-center text-center">

      <div className="">
        <img
          src={assets.logos.logo1}
          alt="logo"
          className="w-28 rounded-full"
        />
      </div>

      <div className="w-[500px] md:flex-row flex-col flex justify-between text-[#1f3550]  text-[18px]">
        <a
          href="https://github.com/richardayikwei"
          target="blank"
          className="hover:text-[#5089cf]"
        >
          Repository
        </a>
        <a
          href="https://www.linkedin.com/in/richard-ayikwei-48b171112/" target="blank"
          className="hover:text-[#5089cf]"
        >
          LinkedIn
        </a>
        <a href="" className="hover:text-[#5089cf]">
          Facebook
        </a>
      </div>
    </div>
  );
};

export default Navbar;
