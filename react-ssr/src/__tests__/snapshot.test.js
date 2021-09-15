import React from "react";
import pageTitles from "../configs/pageTitles";
import App from "../App";
import Home from "../components/screens/home";
import Education from "../components/screens/education";
import {snapshotChecker} from "./common";
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

//checks for the unexpected changes in component tree
//one of the importatn checks
describe('snapshot changes of components', () => {
    snapshotChecker('app', <App/>)
    snapshotChecker('home', <Home title={pageTitles.mockTitle}/>)
    snapshotChecker('education', <Education title={pageTitles.mockTitle}/>)
    snapshotChecker('experience', <Experience title={pageTitles.mockTitle}/>)
    snapshotChecker('projects', <Projects title={pageTitles.mockTitle}/>)
    snapshotChecker('certificate', <Certificate title={pageTitles.mockTitle}/>)
    snapshotChecker('skills', <Skills title={pageTitles.mockTitle}/>)
    snapshotChecker('achievement', <Achievement title={pageTitles.mockTitle}/>)
    snapshotChecker('basic display', <BasicDisplay list={[]}/>)
    snapshotChecker('bottom bar', <BottomBar title={pageTitles.mockTitle}/>)
    snapshotChecker('header info', <HeaderInfo title={pageTitles.mockTitle}/>)
    snapshotChecker('html component', <HtmlComponent title={pageTitles.mockTitle}/>)
    snapshotChecker('nav', <Nav/>)
    snapshotChecker('noData ok text', <NoData text={pageTitles.mockTitle} type='200'/>)
    snapshotChecker('noData 404', <NoData text={pageTitles.mockTitle} type='404'/>)
    snapshotChecker('oneliner', <OneLinerHeader title={pageTitles.mockTitle}/>)

})
