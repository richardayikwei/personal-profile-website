import { Profile } from "../types/profile";
import { assets } from "../assets/assests";
type ProfileProps = {
  richard: Profile;
};

const ProfileInfo = ({ richard }: ProfileProps) => {
  return (
    <section className="flex md:flex-row text-[#1f3550]  mx-auto container w-[90%] mt-6 md:mt-0">
      <div className=" mx-auto flex flex-col md:w-1/2 mb-6 w-[90%]">
        <div className=" flex flex-row justify-between">
          <figure>
            <img
              src={richard.profilePic}
              alt="profile Picture"
              className="rounded-full max-w-72 max-h-96"
            />
          </figure>

          <nav className=" flex-col flex justify-around md:hidden">
            <a
              href="https://github.com/richardayikwei"
              target="_blank"
              rel="noopener"
              className="transition-all ease-linear duration-500 md:hover:rotate-45"
            >
              <img
                src={assets.social.githubIcon}
                alt="github icon"
                className="w-11"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-ayikwei-48b171112"
              target="_blank"
              rel="noopener"
              className="transition ease-linear duration-500 md:hover:rotate-45"
            >
              <img
                src={assets.social.linkedInIcon}
                alt="linkedIn icon"
                className="w-11"
                loading="lazy"
              />
            </a>
            <a
              href="https://x.com/ayikwei_richard"
              target="_blank"
              rel="noopener"
              className="transition ease-linear duration-500 md:hover:rotate-45"
            >
              <img
                src={assets.social.xIcon}
                alt="x icon"
                className="w-11"
                loading="lazy"
              />
            </a>
          </nav>
        </div>
        <div className="space-y-2 mt-6 ">
          <article>
            <h1 className="text-4xl text-white w-[264px]" aria-label="name">{richard.name}</h1>
            <h2 className="text-2xl text-white w-[218px]" aria-label="profession">
              {richard.position}
            </h2>
            <p className="text-xl text-[#1e3956] py-3" aria-label="motto">
              <em>{richard.motto}</em>
            </p>
            <p className="text-lg text-[#1e3956] lg:w-2/3 flex text-[18px] py-3 leading-relaxed" aria-label="introduction">
              {richard.cover}
            </p>
          </article>

          <figure className=" md:hidden justify-start flex-wrap flex">
            <img
              src={richard.stack.html}
              alt=""
              className="w-20"
              loading="lazy"
            />
            <img
              src={richard.stack.css}
              alt=""
              className="w-20"
              loading="lazy"
            />
            <img
              src={richard.stack.javaScript}
              alt=""
              className="w-20"
              loading="lazy"
            />
            <img
              src={richard.stack.jQuery}
              alt=""
              className="w-20"
              loading="lazy"
            />
            <img
              src={richard.stack.typeScript}
              alt=""
              className="w-20"
              loading="lazy"
            />
            <img
              src={richard.stack.react}
              alt=""
              className="w-20"
              loading="lazy"
            />
            <img
              src={richard.stack.tailwindCSS}
              alt=""
              className="w-20"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
      <figure className=" md:flex md:flex-col hidden md:w-1/2 items-end  justify-between">
        <img src={richard.stack.html} alt="" className="max-w-20" />
        <img src={richard.stack.css} alt="" className="max-w-20" />
        <img src={richard.stack.javaScript} alt="" className="max-w-20" />
        <img src={richard.stack.jQuery} alt="" className="max-w-20" />
        <img src={richard.stack.typeScript} alt="" className="max-w-20" />
        <img src={richard.stack.react} alt="" className="max-w-20" />
        <img src={richard.stack.tailwindCSS} alt="" className="max-w-20" />
      </figure>
    </section>
  );
};

export default ProfileInfo;
