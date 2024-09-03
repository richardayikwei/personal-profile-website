import { Outlet } from "react-router-dom"
import { assets } from "../assets/assests";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
     const backgroundImage = {
       backgroundImage: `url(${assets.backgroundImage.beach})`,
    };
    
  return (
    <div
      style={backgroundImage}
      className="bg-cover min-h-screen bg-no-repeat font-serif"
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout