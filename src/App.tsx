import Navbar from "./components/Navbar";
import { assets } from "./assets/assests";
import { profile } from "./constant/data";
import ProfileInfo from "./components/ProfileInfo";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${assets.backgroundImage.beach})` }}
      className="bg-cover min-h-screen bg-no-repeat font-serif"
    >
      <Navbar />
     <Welcome />
        {profile.map((richard, idx) => (
          <ProfileInfo key={idx} richard={richard} />
        ))}
    </div>
  );
}

export default App;
