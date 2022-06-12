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
import Canada from "../components/screens/canda";
import AppGlobalActions from "../components/common/appGlobalActions";
import ShowAuth0Info from "../components/screens/showAuth0Info";

const menu = [
    {
        name: "Home",
        action: "",
        uri: "",
        icon: "",
        component: <Home title={pageTitles.home}/>,
        show: true
    },
    {
        name: "Education",
        action: "",
        uri: "",
        icon: "",
        component: <Education title={pageTitles.education}/>,
        show: true
    },
    {
        name: "Achievement",
        action: "",
        uri: "",
        icon: "",
        component: <Achievement title={pageTitles.achievement}/>,
        show: true
    },
    {
        name: "Certification",
        action: "",
        uri: "",
        icon: "",
        component: <Certificate title={pageTitles.certification}/>,
        show: true
    },
    {
        name: "Experience",
        action: "",
        uri: "",
        icon: "",
        component: <Experience title={pageTitles.experience}/>,
        show: false
    },
    {
        name: "Projects",
        action: "",
        uri: "",
        icon: "",
        component: <Projects title={pageTitles.projects}/>,
        show: true
    },
    {
        name: "Skills",
        action: "",
        uri: "",
        icon: "",
        component: <Skills title={pageTitles.skills}/>,
        show: true
    },
    {
        name: "SomeJs+WebAPIs",
        action: "",
        uri: "",
        icon: "",
        show: true,
        component: <AppGlobalActions title={"Some JS and Web APis samples"}/>
    },
    {
        name: "Notes",
        action: "",
        uri: "",
        icon: "",
        component: <Notes title={pageTitles.notes}/>,
        show: true
    },
    {
        name: "User Auth0 Info",
        action: "",
        uri: "",
        icon: "",
        component: <ShowAuth0Info title={pageTitles.auth0Title}/>,
        show: true
    },
    {name: "Blogs", action: "", uri: "", icon: "", show: true},
    {name: "Ca", action: "", uri: "", icon: "", show: false, component: <Canada title={pageTitles.canada}/>,},
];
export default menu;
