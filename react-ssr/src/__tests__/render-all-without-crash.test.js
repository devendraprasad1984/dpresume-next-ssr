import {shallow} from "enzyme";
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


describe('testing rendering of components without crashing', () => {
    it('testing app', () => {
        shallow(<App/>)
    })
    it('testing home', () => {
        shallow(<Home/>)
    })
    it('testing eduction', () => {
        shallow(<Education/>)
    })
    it('testing experience', () => {
        shallow(<Experience/>)
    })
    it('testing projects', () => {
        shallow(<Projects/>)
    })
    it('testing certifications', () => {
        shallow(<Certificate/>)
    })
    it('testing skills', () => {
        shallow(<Skills/>)
    })
    it('achievement skills', () => {
        shallow(<Achievement/>)
    })
    it('basic display component', () => {
        shallow(<BasicDisplay/>)
    })
    it('basic display component', () => {
        shallow(<BottomBar/>)
    })
    it('basic display component', () => {
        shallow(<HeaderInfo/>)
    })
    it('basic display component', () => {
        shallow(<HtmlComponent/>)
    })
    it('basic display component', () => {
        shallow(<Nav/>)
    })
    it('basic display component', () => {
        shallow(<NoData/>)
    })
    it('basic display component', () => {
        shallow(<OneLinerHeader/>)
    })
})
