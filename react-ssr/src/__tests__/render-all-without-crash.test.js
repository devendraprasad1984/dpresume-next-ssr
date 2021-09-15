import App from "../App";
import Home from "../components/screens/home";
import Education from "../components/screens/education";
import Experience from "../components/screens/experience";
import Projects from "../components/screens/projects";
import Certificate from "../components/screens/certificate";
import Skills from "../components/screens/skills";
import Achievement from "../components/screens/achievement";
import BasicDisplay from "../components/common/basicDisplay";
import BottomBar from "../components/common/bottomBar";
import HeaderInfo from "../components/common/headerInfo";
import HtmlComponent from "../components/common/htmlComponent";
import Nav from "../components/common/nav";
import NoData from "../components/common/nodata";
import OneLinerHeader from "../components/common/oneLinerHeader";
import React from "react";
import pageTitles from "../configs/pageTitles";
import {baseChecker} from "./common";


const strMsg = ' rendering without crash'
describe('testing just rendering of components without crashing', () => {
    baseChecker('app', <App/>)
    baseChecker('home', <Home title={pageTitles.mockTitle}/>)
    baseChecker('eduction', <Education title={pageTitles.mockTitle}/>)
    baseChecker('experience', <Experience title={pageTitles.mockTitle}/>)
    baseChecker('projects', <Projects title={pageTitles.mockTitle}/>)
    baseChecker('certificate', <Certificate title={pageTitles.mockTitle}/>)
    baseChecker('skills', <Skills title={pageTitles.mockTitle}/>)
    baseChecker('achievement', <Achievement title={pageTitles.mockTitle}/>)
    baseChecker('basic display', <BasicDisplay list={[]}/>)
    baseChecker('bottom bar', <BottomBar title={pageTitles.mockTitle}/>)
    baseChecker('header info', <HeaderInfo title={pageTitles.mockTitle}/>)
    baseChecker('html component', <HtmlComponent title={pageTitles.mockTitle}/>)
    baseChecker('nav', <Nav/>)
    baseChecker('noData ok text', <NoData text={pageTitles.mockTitle} type='200'/>)
    baseChecker('noData 404', <NoData text={pageTitles.mockTitle} type='404'/>)
    baseChecker('oneliner', <OneLinerHeader title={pageTitles.mockTitle}/>)
})
