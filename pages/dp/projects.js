import React from "react";
import ShowProjects from "../../components/showProjects";
import style from "../../styles/common.module.scss";

const Projects = () => {
  return (
    <>
      <h2 className={style.pageHeading}>Projects</h2>
      <ShowProjects />
    </>
  );
};

export default Projects;
