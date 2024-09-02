import { Profile } from "../types/profile";
import { assets } from "../assets/assests";
type ProfileProps = {
  richard: Profile;
};

const ProfileInfo = ({ richard }: ProfileProps) => {
  return (
    <section className="flex md:flex-row text-[#1f3550]  mx-auto container w-[90%] ">
      <div className=" mx-auto flex flex-col md:w-1/2 mb-6 w-[90%]">
        <div className=" flex flex-row justify-between">
          <figure>
            <img
              src={richard.profilePic}
              alt="profilePic"
              className="rounded-full max-h-96"
            />
          </figure>

          <nav className=" flex-col flex justify-between md:hidden  ">
            <a
              href="https://github.com/richardayikwei"
              target="_blank"
              rel="noopener"
              className="transition ease-linear duration-500 hover:rotate-45"
            >
              <img
                src={assets.social.githubIcon}
                alt="github"
                className="w-11"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-ayikwei-48b171112"
              target="_blank"
              rel="noopener"
              className="transition ease-linear duration-500 hover:rotate-45"
            >
              <img
                src={assets.social.linkedInIcon}
                alt="linkedIn"
                className="w-11"
                loading="lazy"
              />
            </a>
            <a
              href="https://x.com/ayikwei_richard"
              target="_blank"
              rel="noopener"
              className="transition ease-linear duration-500 hover:rotate-45"
            >
              <img
                src={assets.social.xIcon}
                alt="x"
                className="w-11"
                loading="lazy"
              />
            </a>
          </nav>
        </div>
        <div className="space-y-2 mt-6 ">
          <article>
            <h1 className="text-4xl bg-[#a3c0e2] w-[264px]">{richard.name}</h1>
            <h2 className="text-2xl bg-[#a3c0e2] w-[218px]">
              {richard.position}
            </h2>
            <p className="text-xl">{richard.motto}</p>
            <p className="text-lg lg:w-2/3 flex">{richard.cover}</p>
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
