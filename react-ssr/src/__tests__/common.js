import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import App from "../App";
import Home from "../components/screens/home";
import pageTitles from "../configs/pageTitles";
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
import Enums from "../components/screens/enums";


const strMsg = ' rendering without crash'
export const appComponents = [
    {name: Enums.app, desc: 'app', component: <App/>},
    {name: Enums.home, desc: 'home', component: <Home title={pageTitles.home}/>},
    {name: Enums.education, desc: 'education', component: <Education title={pageTitles.education}/>},
    {name: Enums.experience, desc: 'experience', component: <Experience title={pageTitles.experience}/>},
    {name: Enums.projects, desc: 'projects', component: <Projects title={pageTitles.projects}/>},
    {name: Enums.certificate, desc: 'certificate', component: <Certificate title={pageTitles.certification}/>},
    {name: Enums.skills, desc: 'skills', component: <Skills title={pageTitles.skills}/>},
    {name: Enums.achievement, desc: 'achievement', component: <Achievement title={pageTitles.achievement}/>},
    {name: Enums.basicDisplay, desc: 'basic display', component: <BasicDisplay list={[]}/>},
    {name: Enums.bottomBar, desc: 'bottom bar', component: <BottomBar/>},
    {name: Enums.headerInfo, desc: 'header', component: <HeaderInfo/>},
    {name: Enums.htmlComponent, desc: 'html component', component: <HtmlComponent text={pageTitles.mockTitle}/>},
    {name: Enums.nav, desc: 'navigation', component: <Nav/>},
    {name: Enums.nodata_ok, desc: 'noData ok text', component: <NoData text={pageTitles.mockTitle} type='200'/>},
    {name: Enums.nodata_404, desc: 'noData 404', component: <NoData text={pageTitles.mockTitle} type='404'/>},
    {name: Enums.onelinerHeader, desc: 'oneliner', component: <OneLinerHeader title={pageTitles.mockTitle}/>}
]

export const getComponentByName = (name) => {
    return appComponents.filter(comp => comp.name === name)[0]
}

export const baseChecker = (desc, component) => {
    it(`testing ${desc} - ${strMsg}`, () => {
        shallow(component)
    })
}

export const snapshotChecker = (desc, component) => {
    it(`${desc} snapshot`, () => {
        const tree = shallow(component)
        expect(toJson(tree)).toMatchSnapshot()
    })
}


describe('ignore', () => {
    it('ignore this', () => {
        expect(1).toEqual(1)
    })
})
