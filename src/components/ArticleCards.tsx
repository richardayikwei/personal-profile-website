import { Articles } from "../types/articles";

type ArtcleProps = {
  article: Articles;
};

const ArticleCards = (project: ArtcleProps) => {
  return (
    <div className="text-[#1e3956] shadow-2xl md:rounded-3xl bg-white space-y-6 md:max-w-[300px] md:max-h-[500px]">
      <figure>
        <img
          src={project.article.image}
          alt={project.article.title}
          className=" md:rounded-t-3xl md:w-[18.75rem] md:h-[7.4rem] w-96 h-[11.9rem]"
        />
      </figure>

      <article className="mx-auto flex flex-col w-[90%] h-2/3">
        <div className="text-2xl mt-1 h-[60px] ">
          <h2>{project.article.title}</h2>
        </div>
        <div className=" h-[90px] mt-2 text-[18px] leading-relaxed">
          <p>{project.article.summary}</p>
        </div>
        <div className=" mb-6 underline text-lg decoration-[#07101a] text-blue-600 mt-3 py-3">
          <a href={project.article.link} target="_blank" rel="noopener">
            View project
          </a>
        </div>
      </article>
    </div>
  );
};

export default ArticleCards;
