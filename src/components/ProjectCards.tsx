import { Projects } from "../types/projects";

type ProjectsProps = {
  project: Projects;
};

const ProjectCards = (project: ProjectsProps) => {
  return (
    <div className="text-[#1f3550] shadow-2xl rounded-3xl bg-white space-y-6 max-w-[300px] max-h-[500px]">
      <div className="">
        <img
          src={project.project.image}
          alt={project.project.title}
          className=" rounded-t-3xl"
        />
      </div>
      <div className="mx-auto flex flex-col w-[90%] space-y-6">
        <div>
          <h1>{project.project.title}</h1>
        </div>
        <div>
          <p>{project.project.summary}</p>
        </div>
        <div>
          <a href={project.project.link}>View project</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
