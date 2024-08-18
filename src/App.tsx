import Navbar from "./components/Navbar";
import { assets } from "./assets/assests";
import { profile } from "./constant/data";
import ProfileInfo from "./components/ProfileInfo";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${assets.backgroundImage.beach})` }}
      className="bg-cover bg-no-repeat flex md:h-screen  flex-col"
    >
      <Navbar />
        {profile.map((richard, idx) => (
          <ProfileInfo key={idx} richard={richard} />
        ))}
    </div>
  );
}

export default App;
