import { assets } from "../assets/assests";

const Footer = () => {
  return (
    <footer className=" flex  flex-col items-center mt-9 bg-[#a3c0e2] h-[200px]">
      <div className="flex md:justify-around items-center md:w-[700px] md:h-[150px] h-[100%] py-6 md:flex-row flex-col bg">
        <p className="text-white">
          <em>Email</em>: richardayikweibee@gmail.com
        </p>
        <p className="text-white">
          <em>Contact</em>: +233557500645
        </p>
      </div>

      <nav className="md:w-[300px] md:h-20 md:flex justify-between items-center hidden">
        <a
          href="https://github.com/richardayikwei"
          target="_blank"
          rel="noopener"
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
          target="_blank"
          rel="noopener"
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
          target="_blank"
          rel="noopener"
          className="transition ease-linear duration-500 hover:rotate-45 pr-6"
        >
          <img src={assets.social.xIcon} alt="xIcon" className="w-11" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
