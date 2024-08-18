import { Profile } from "../types/profile";
import { assets } from "../assets/assests";
type ProfileProps = {
  richard: Profile;
};

const ProfileInfo = ({ richard }: ProfileProps) => {
  return (
    <div className="flex md:flex-row md:justify-between text-[#1f3550] mt-14 ">
      <div className=" flex flex-col ">
        <div className="md:justify-end flex flex-row md:w-96">
          <img
            src={richard.profilePic}
            alt="profilePic"
            className="rounded-full max-h-96"
          />
        </div>

        {/* <div className=" flex-col flex justify-between md:hidden">
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
          <a
            href=""
            className="transition ease-linear duration-500 hover:rotate-45"
          >
            <img
              src={assets.social.facebookIcon}
              alt="facebookIcon"
              className="w-11"
            />
          </a>
        </div> */}
      </div>

      <div className=" md:flex md:flex-col hidden md:w-96 items-center justify-between">
        <img src={richard.stack.html} alt="" className="max-w-20" />
        <img src={richard.stack.css} alt="" className="max-w-20" />
        <img src={richard.stack.javaScript} alt="" className="max-w-20" />
        <img src={richard.stack.jQuery} alt="" className="max-w-20" />
        <img src={richard.stack.typeScript} alt="" className="max-w-20" />
        <img src={richard.stack.react} alt="" className="max-w-20" />
        <img src={richard.stack.tailwindCSS} alt="" className="max-w-20" />
      </div>
      {/* <div className="space-y-2">
        <div className="text-3xl">
          <h1>{richard.name}</h1>
        </div>
        <div className="text-2xl">
          <h2>{richard.position}</h2>
        </div>
        <div className="text-xl">
          <p>{richard.motto}</p>
        </div>
        <div className="text-lg md:w-1/2 flex">
          <p>{richard.cover}</p>
        </div>

        <div className=" hidden justify-start">
          <img src={richard.stack.html} alt="" className="w-20" />
          <img src={richard.stack.css} alt="" className="w-20" />
          <img src={richard.stack.javaScript} alt="" className="w-20" />
          <img src={richard.stack.jQuery} alt="" className="w-20" />
          <img src={richard.stack.typeScript} alt="" className="w-20" />
          <img src={richard.stack.react} alt="" className="w-20" />
          <img src={richard.stack.tailwindCSS} alt="" className="w-20" />
        </div>
      </div> */}
    </div>
  );
};

export default ProfileInfo;
