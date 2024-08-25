import { assets } from "../assets/assests";

const Navbar = () => {
  return (
    <div className=" flex md:flex-row flex-col md:justify-end pt-9 container mx-auto">
      {/* <div className="">
        <img
          src={assets.logos.logo1}
          alt="logo"
          className="w-28 rounded-full"
        />
      </div> */}

      <div className="w-[700px] h-20 md:flex justify-between items-center bg-[#a3c0e2] hidden">
        <a
          href="https://github.com/richardayikwei"
          target="blank"
          className="transition ease-linear duration-500 hover:rotate-45 pl-6"
        >
          <img
            src={assets.social.githubIcon}
            alt="githubIcon"
            className="w-11"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-ayikwei-48b171112/"
          target="blank"
          className="transition ease-linear duration-500 hover:rotate-45"
        >
          <img
            src={assets.social.linkedInIcon}
            alt="linkedInIcon"
            className="w-11"
          />
        </a>
        <a
          href="https://x.com/ayikwei_richard"
          className="transition ease-linear duration-500 hover:rotate-45 pr-6"
        >
          <img src={assets.social.xIcon} alt="xIcon" className="w-11" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
