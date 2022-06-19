import React from "react";
import MainApp from "../mainApp";
import ShowProjects from "../../components/showProjects";
import style from "../../styles/common.module.scss";

const Projects = () => {
  return (
    <MainApp>
      <h2 className={style.pageHeading}>Projects</h2>
      <ShowProjects />
    </MainApp>
  );
};

export default Projects;
