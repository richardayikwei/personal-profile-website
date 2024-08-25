import { Profile } from "../types/profile";
import { assets } from "../assets/assests";
type ProfileProps = {
  richard: Profile;
};

const ProfileInfo = ({ richard }: ProfileProps) => {
  return (
    <div className="flex md:flex-row text-[#1f3550]  mx-auto container ">
      <div className=" mx-auto flex flex-col md:w-1/2 mb-6 w-[90%]">
        <div className=" flex flex-row justify-between">
          <div>
            <img
              src={richard.profilePic}
              alt="profilePic"
              className="rounded-full max-h-96"
            />
          </div>

          <div className=" flex-col flex justify-between md:hidden  ">
            <a
              href="https://github.com/richardayikwei"
              target="blank"
              className="transition ease-linear duration-500 hover:rotate-45"
            >
              <img src={assets.social.githubIcon} alt="" className="w-11" />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-ayikwei-48b171112"
              target="blank"
              className="transition ease-linear duration-500 hover:rotate-45"
            >
              <img src={assets.social.linkedInIcon} alt="" className="w-11" />
            </a>
            <a
              href="https://x.com/ayikwei_richard"
              className="transition ease-linear duration-500 hover:rotate-45"
            >
              <img
                src={assets.social.xIcon}
                alt="facebookIcon"
                className="w-11"
              />
            </a>
          </div>
        </div>

        <div className="space-y-2 mt-6 ">
          <div className="text-4xl bg-[#a3c0e2] w-[264px]">
            <h1 className="">{richard.name}</h1>
          </div>
          <div className="text-2xl bg-[#a3c0e2] w-[218px]">
            <h2>{richard.position}</h2>
          </div>
          <div className="text-xl">
            <p>{richard.motto}</p>
          </div>
          <div className="text-lg lg:w-2/3 flex">
            <p>{richard.cover}</p>
          </div>

          <div className=" md:hidden justify-start flex-wrap flex">
            <img src={richard.stack.html} alt="" className="w-20" />
            <img src={richard.stack.css} alt="" className="w-20" />
            <img src={richard.stack.javaScript} alt="" className="w-20" />
            <img src={richard.stack.jQuery} alt="" className="w-20" />
            <img src={richard.stack.typeScript} alt="" className="w-20" />
            <img src={richard.stack.react} alt="" className="w-20" />
            <img src={richard.stack.tailwindCSS} alt="" className="w-20" />
          </div>
        </div>
      </div>

      <div className=" md:flex md:flex-col hidden md:w-1/2 items-end  justify-between">
        <img src={richard.stack.html} alt="" className="max-w-20" />
        <img src={richard.stack.css} alt="" className="max-w-20" />
        <img src={richard.stack.javaScript} alt="" className="max-w-20" />
        <img src={richard.stack.jQuery} alt="" className="max-w-20" />
        <img src={richard.stack.typeScript} alt="" className="max-w-20" />
        <img src={richard.stack.react} alt="" className="max-w-20" />
        <img src={richard.stack.tailwindCSS} alt="" className="max-w-20" />
      </div>
    </div>
  );
};

export default ProfileInfo;
