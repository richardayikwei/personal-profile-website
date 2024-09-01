import { Projects } from "../types/projects";

type ProjectsProps = {
  project: Projects;
};

const ProjectCards = (project: ProjectsProps) => {
  return (
    <section className="text-[#1f3550] shadow-2xl md:rounded-3xl bg-white space-y-6 md:max-w-[300px]">
      <div>
        <img
          src={project.project.image}
          alt={project.project.title}
          className=" md:rounded-t-3xl"
        />
      </div>
      <div className="mx-auto flex flex-col w-[90%] ">
        <div className="text-2xl mt-1">
          <h1>{project.project.title}</h1>
        </div>
        <div className="mt-5">
          <p>{project.project.summary}</p>
        </div>
        <div className="mt-16 mb-6 underline text-lg decoration-[#07101a]">
          <a href={project.project.link} target="blank">
            View project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
