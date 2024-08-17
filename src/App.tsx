import Navbar from "./components/Navbar";
import { assets } from "./assets/assests";

function App() {
  

  return (
    <div style={{backgroundImage: `url(${assets.backgroundImage.beach})`}} className="bg-cover h-[100vh] w-[100vw]">
 <Navbar />
    </div>
  )
}

export default App
