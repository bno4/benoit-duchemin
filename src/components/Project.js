import React, { useState } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);
  // console.log(projectsData[0]);
  return (
    <div className="project-container">
      <div className="head-container">
        <img src={currentProject.img} alt={currentProject.title} />
        <div className="title-ctn">
          <h2>{currentProject.title}</h2>
        </div>
      </div>

      <div className="infos-site">
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages &&
            currentProject.languages.map((item) => {
              return <li key={item}>{item}</li>;
            })}
        </ul>
        <p>{currentProject.infos}</p>

        <div
          className={
            currentProject.link.length > 1 ? "button-container" : "off"
          }
        >
          <a
            href={currentProject.link}
            target="_blank"
            rel="noreferrer"
            className="hover"
          >
            <span className={currentProject.link.length > 1 ? "button" : "off"}>
              Voir le site
            </span>
          </a>
        </div>
        <div className="button-git">
          <a
            href={currentProject.git}
            target="_blank"
            rel="noreferrer"
            className="hover"
          >
            <span className="button">
              <i className="fa-brands fa-github"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
