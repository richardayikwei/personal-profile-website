import { assets } from "../assets/assests";

const Navbar = () => {
  return (
    <div className=" flex md:flex-row flex-col md:justify-end pt-3">
      {/* <div className="">
        <img
          src={assets.logos.logo1}
          alt="logo"
          className="w-28 rounded-full"
        />
      </div> */}

      <div className="w-[700px] md:flex justify-around text-[#1f3550] hidden">
        <a
          href="https://github.com/richardayikwei"
          target="blank"
          className="transition ease-linear duration-500 hover:rotate-45"
        >
          <img src={assets.social.githubIcon} alt="" className="w-11" />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-ayikwei-48b171112/"
          target="blank"
          className="transition ease-linear duration-500 hover:rotate-45"
        >
          <img src={assets.social.linkedInIcon} alt="" className="w-11" />
        </a>
        <a href="" className="transition ease-linear duration-500 hover:rotate-45">
          <img
            src={assets.social.facebookIcon}
            alt="facebookIcon"
            className="w-11"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
