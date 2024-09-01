import Navbar from "./components/Navbar";
import { assets } from "./assets/assests";
import { profile } from "./constant/data";
import { projects } from "./constant/data";
import ProfileInfo from "./components/ProfileInfo";
import ProjectCards from "./components/ProjectCards";
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
      <section className="container mx-auto bg-[#a3c0e2] py-10 rounded-3xl mt-10">
        <div className="flex justify-center">
          <h1 className="text-5xl text-[#1f3550]">Projects</h1>
        </div>
        <div className="justify-center flex md:flex-row flex-col pt-8">
          <div className="md:grid md:grid-rows-2 md:grid-cols-3 md:gap-10 space-y-6 md:space-y-0">
            {projects.map((project, idx) => (
              <ProjectCards project={project} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
