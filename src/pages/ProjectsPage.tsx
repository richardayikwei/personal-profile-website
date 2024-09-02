import { projects } from "../constant/data";
import ProjectCards from "../components/ProjectCards";

const ProjectsPage = () => {
  return (
    <section className="container mx-auto py-10 mt-10 w-[90%]">
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
  );
};

export default ProjectsPage;
