import { Projects } from "../types/projects";

type ProjectsProps = {
  project: Projects;
};

const ProjectCards = (project: ProjectsProps) => {
  return (
    <div className="text-[#1f3550] shadow-2xl md:rounded-3xl bg-white space-y-6 md:max-w-[300px] md:max-h-[500px]">
      <figure>
        <img
          src={project.project.image}
          alt={project.project.title}
          className=" md:rounded-t-3xl"
        />
      </figure>

      <article className="mx-auto flex flex-col w-[90%] h-2/3">
        <div className="text-2xl mt-1 h-[90px] ">
          <h1>{project.project.title}</h1>
        </div>
        <div className=" h-[90px] mt-2">
          <p>{project.project.summary}</p>
        </div>
        <div className=" mb-6 underline text-lg decoration-[#07101a] text-blue-600 mt-3">
          <a href={project.project.link} target="_blank" rel="noopener">
            View project
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProjectCards;
