import { useState } from "react";

import "../index.css";
import "../themes.css";
import projects from "../data/projectsData";
import { Link } from "react-router-dom";

function ProjectComponent() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const tags = ["All", ...new Set(projects.map((project) => project.tag))];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.tag === selectedCategory);

  return (
    <section id="projects" className="pt-5 pb-3 scroll-mt-16 section-area" style={{ fontFamily: "SpaceGrotesk", fontSize: "1rem" }} >
      <h2 className="section-heading pb-3">Projects</h2>

      <div className="flex flex-row gap-2 text-white">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(tag)}
            className={`px-3 py-1 rounded-xl ${selectedCategory === tag ? "text-purple-500 border-2 border-purple-500" : "text-gray-700 border-2 border-gray-700"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>



<div className="grid mt-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
  {(showAll ? filteredProjects : filteredProjects.slice(0, 3)).map((project, index) => (
    <a
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="card h-full overflow-hidden">
        <h2 className="font-bold text-[#b859eb] clamp-1">{project.title}</h2>
        <h2 className="font-extralight text-gray-200 clamp-1">{project.tag}</h2>

        <div className="flex flex-row justify-start items-center font-extralight text-gray-400 pb-3 clamp-1">
          {project.sub_tag.map((subtag, subIndex) => (
            <p key={subIndex}>
              {subtag}
              {subIndex < project.sub_tag.length - 1 && <span>&nbsp;|&nbsp;</span>}
            </p>
          ))}
        </div>

        <hr className="border-gray-500 py-2" />
        <p className="card-description clamp-3">{project.description}</p>
      </div>
    </a>
  ))}
</div>

      {filteredProjects.length > 3 && (
        <button className="project-button mt-5" onClick={() => setShowAll(!showAll)} >
          <h2 className="font-bold">
            {showAll ? "Show Less" : "Show more"}
          </h2>
        </button>
      )}
    </section>
  );
}

export default ProjectComponent;