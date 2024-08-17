import { Profile } from "../types/profile";

type ProfileProps = {
  richard: Profile;
};


const ProfileInfo = ({ richard }: ProfileProps) => {
  return (
    <div className="flex flex-col">
      <div className="max-w-80 ">
        <img src={richard.profilePic} alt="" className="rounded-full" />
      </div>
      <div>
        <div>
          <h1>{richard.name}</h1>
        </div>
        <div>
          <h2>{richard.position}</h2>
        </div>
        <div>
          <p>{richard.motto}</p>
        </div>
        <div>
          <p>{richard.cover}</p>
        </div>
        
          <div className="max-w-40 md:flex-row flex flex-col">
            <img src={richard.stack.html} alt="" />
            <img src={richard.stack.css} alt="" />
            <img src={richard.stack.javaScript} alt="" />
            <img src={richard.stack.jQuery} alt="" />
            <img src={richard.stack.typeScript} alt="" />
            <img src={richard.stack.react} alt="" />
            <img src={richard.stack.tailwindCSS} alt="" />
          </div>
          
      </div>
    </div>
  );
};

export default ProfileInfo;
