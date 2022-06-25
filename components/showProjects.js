import React, { useEffect, useState } from "react";
import getFromApi from "../apis/get";
import config from "../config";

const ShowProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getFromApi(config.endpoints.projects, (res) => {
      setProjects(res);
    });
  }, []);

  if (!projects) return null;
  const projectKeys = Object.keys(projects);
  return (
    <>
      {projectKeys
        .filter((key) => projects[key].length !== 0)
        .map((line, id) => {
          return (
            <div key={"id" + id}>
              <div className={"size30"} key={`line-${id}`}>
                {line}
              </div>
              {typeof projects[line] === "object" &&
                projects[line].map((d) => {
                  return (
                    <div
                      key={"id" + d.name}
                      className={["column", "marginUD"].join(" ")}
                    >
                      <div className={"size20"}>{d.name}</div>
                      <div className={("size15", "para")}>{d.desc}</div>
                    </div>
                  );
                })}
              {typeof projects[line] === "string" && projects[line]}
            </div>
          );
        })}
    </>
  );
};

export default ShowProjects;
