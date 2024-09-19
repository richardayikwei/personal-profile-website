import { Projects } from "../types/projects";

type ProjectsProps = {
  project: Projects;
};

const ProjectCards = (project: ProjectsProps) => {
  return (
    <div className="text-[#1e3956] shadow-2xl md:rounded-3xl bg-white space-y-6 md:max-w-[300px] md:max-h-[500px]">
      <figure>
        <img
          src={project.project.image}
          alt={project.project.title}
          className=" md:rounded-t-3xl max-w-[100%] max-h-[200px]"
        />
      </figure>

      <article className="mx-auto flex flex-col w-[90%] h-2/3">
        <div className="text-2xl mt-1 h-[60px] ">
          <h2>{project.project.title}</h2>
        </div>
        <div className=" h-[90px] mt-2 text-[18px] leading-relaxed">
          <p>{project.project.summary}</p>
        </div>
        <div className=" mb-6 underline text-lg decoration-[#07101a] text-blue-600 mt-3 py-3">
          <a href={project.project.link} target="_blank" rel="noopener">
            View project
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProjectCards;
