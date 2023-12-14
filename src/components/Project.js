import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion, easeInOut } from "framer-motion";

const Project = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);

  return (
    <div className="project-container">
      <motion.div
        className="head-container"
        initial={{ opacity: 0.5, x: 300 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <img src={currentProject.img} alt={currentProject.title} />
        <motion.div
          className="title-ctn"
          initial={{ opacity: 0.5, scaleX: 0, originX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          <h2>{currentProject.title}</h2>
        </motion.div>
      </motion.div>

      <div className="infos-site">
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages &&
            currentProject.languages.map((item) => {
              return <li key={item}>{item}</li>;
            })}
        </ul>
        <p>{currentProject.infos}</p>
        <div className="extern-links">
          {" "}
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
              <span
                className={currentProject.link.length > 1 ? "button" : "off"}
              >
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
    </div>
  );
};

export default Project;
