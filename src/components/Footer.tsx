import { assets } from "../assets/assests";
import { socialLinks } from "../constant/data";

const Footer = () => {
  return (
    <footer className=" flex text-[18px] flex-col items-center mt-9 bg-[#b8a084] h-[200px]">
      <div className="flex md:justify-around items-center md:w-[700px] md:h-[150px] h-[100px] md:py-6 pt-6 md:flex-row flex-col bg">
        <p className="text-[#010101] ">
          <em>Email</em>: richardayikweibee@gmail.com
        </p>
        <p className="text-[#010101] ">
          <em>Contact</em>: +233557500645
        </p>
      </div>

      <nav className="md:w-[300px] md:h-20 flex justify-between items-center w-[200px]">
        <a
          href={socialLinks.gitHub}
          target="_blank"
          rel="noopener"
        >
          <img
            src={assets.social.githubIcon}
            alt="githubIcon"
            className="w-11 h-11"
          />
        </a>
        <a
          href={socialLinks.linkedIn}
          target="_blank"
          rel="noopener"
        >
          <img
            src={assets.social.linkedInIcon}
            alt="linkedInIcon"
            className="w-11 h-11"
          />
        </a>
        <a
          href={socialLinks.x}
          target="_blank"
          rel="noopener"
        >
          <img src={assets.social.xIcon} alt="xIcon" className="w-11 h-11" />
        </a>
      </nav>
      <div className="md:py-6 pt-3 flex text-center">
        <p className="text-[#010101]">
          &copy;<em>2024 Richard Ayikwei, All Rights Reserved.</em>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
