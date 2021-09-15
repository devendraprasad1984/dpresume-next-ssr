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


export const appComponents = [
    {name: 'app', desc: 'app', component: <App/>},
    {name: 'home', desc: 'home', component: <Home title={pageTitles.home}/>},
    {name: 'education', desc: 'education', component: <Education title={pageTitles.education}/>},
    {name: 'experience', desc: 'experience', component: <Experience title={pageTitles.experience}/>},
    {name: 'projects', desc: 'projects', component: <Projects title={pageTitles.projects}/>},
    {name: 'certificate', desc: 'certificate', component: <Certificate title={pageTitles.certification}/>},
    {name: 'skills', desc: 'skills', component: <Skills title={pageTitles.skills}/>},
    {name: 'achievement', desc: 'achievement', component: <Achievement title={pageTitles.achievement}/>},
    {name: 'basicdisplay', desc: 'basic display', component: <BasicDisplay list={[]}/>},
    {name: 'bottombar', desc: 'bottom bar', component: <BottomBar/>},
    {name: 'headerinfo', desc: 'header', component: <HeaderInfo/>},
    {name: 'htmlcomponent', desc: 'html component', component: <HtmlComponent text={pageTitles.mockTitle}/>},
    {name: 'nav', desc: 'navigation', component: <Nav/>},
    {name: 'nodata_ok', desc: 'noData ok text', component: <NoData text={pageTitles.mockTitle} type='200'/>},
    {name: 'nodata_404', desc: 'noData 404', component: <NoData text={pageTitles.mockTitle} type='404'/>},
    {name: 'onelinerheader', desc: 'oneliner', component: <OneLinerHeader title={pageTitles.mockTitle}/>}
]

const strMsg = ' rendering without crash'
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
