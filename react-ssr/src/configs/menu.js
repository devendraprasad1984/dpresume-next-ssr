/* eslint-disable */
import React from "react";
import Home from "../components/screens/home";
import Education from "../components/screens/education";
import Achievement from "../components/screens/achievement";
import Certificate from "../components/screens/certificate";
import Experience from "../components/screens/experience";
import Projects from "../components/screens/projects";
import Skills from "../components/screens/skills";


const menu = [
    {name: 'Home', action: '', uri: '', icon: '', component: <Home title={'Home'}/>},
    {name: 'Education', action: '', uri: '', icon: '', component: <Education title={'Education'}/>},
    {name: 'Achievement', action: '', uri: '', icon: '', component: <Achievement title={'Achievement'}/>},
    {name: 'Certification', action: '', uri: '', icon: '', component: <Certificate title={'Certificate'}/>},
    {name: 'Experience', action: '', uri: '', icon: '', component: <Experience title={'Experience'}/>},
    {name: 'Projects', action: '', uri: '', icon: '', component: <Projects title={'Projects'}/>},
    {name: 'Skills', action: '', uri: '', icon: '', component: <Skills title={'Skills'}/>},
    {name: 'SomeJs', action: '', uri: '', icon: ''},
    {name: 'Notes', action: '', uri: '', icon: ''},
    // {name: 'Code', action: '', uri: '', icon: ''},
    {name: 'Blogs', action: '', uri: '', icon: ''}
]
export default menu
