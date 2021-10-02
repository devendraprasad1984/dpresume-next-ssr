/* eslint-disable */
import React from "react";
import Home from "../components/screens/home";
import Education from "../components/screens/education";
import Achievement from "../components/screens/achievement";
import Certificate from "../components/screens/certificate";
import Experience from "../components/screens/experience";
import Projects from "../components/screens/projects";
import Skills from "../components/screens/skills";
import pageTitles from "./pageTitles";
import Notes from "../components/screens/notes";

const menu = [
  {
    name: "Home",
    action: "",
    uri: "",
    icon: "",
    component: <Home title={pageTitles.home} />,
  },
  {
    name: "Education",
    action: "",
    uri: "",
    icon: "",
    component: <Education title={pageTitles.education} />,
  },
  {
    name: "Achievement",
    action: "",
    uri: "",
    icon: "",
    component: <Achievement title={pageTitles.achievement} />,
  },
  {
    name: "Certification",
    action: "",
    uri: "",
    icon: "",
    component: <Certificate title={pageTitles.certification} />,
  },
  {
    name: "Experience",
    action: "",
    uri: "",
    icon: "",
    component: <Experience title={pageTitles.experience} />,
  },
  {
    name: "Projects",
    action: "",
    uri: "",
    icon: "",
    component: <Projects title={pageTitles.projects} />,
  },
  {
    name: "Skills",
    action: "",
    uri: "",
    icon: "",
    component: <Skills title={pageTitles.skills} />,
  },
  { name: "SomeJs", action: "", uri: "", icon: "" },
  {
    name: "Notes",
    action: "",
    uri: "",
    icon: "",
    component: <Notes title={pageTitles.notes} />,
  },
  // {name: 'Code', action: '', uri: '', icon: ''},
  { name: "Blogs", action: "", uri: "", icon: "" },
];
export default menu;
