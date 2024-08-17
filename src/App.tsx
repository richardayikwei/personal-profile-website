import Navbar from "./components/Navbar";
import { assets } from "./assets/assests";
import { profile } from "./constant/data";
import ProfileInfo from "./components/ProfileInfo";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${assets.backgroundImage.beach})` }}
      className="bg-cover bg-no-repeat flex h-screen flex-col"
    >
      <Navbar />

      <div className="justify-around flex flex-row">
        {profile.map((richard, idx) => (
          <ProfileInfo key={idx} richard={richard} />
        ))}

        <div>
<h1>hjjjjj</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
