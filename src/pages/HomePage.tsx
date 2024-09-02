


import { profile } from "../constant/data";

import ProfileInfo from "../components/ProfileInfo";

import Welcome from "../components/Welcome";

const HomePage = () => {
 

  return (
    <div
    >
      <Welcome />
      {profile.map((richard, idx) => (
        <ProfileInfo key={idx} richard={richard} />
      ))}
    </div>
  );
};

export default HomePage;
