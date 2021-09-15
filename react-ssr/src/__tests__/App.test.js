// import 'jsdom-global/register';
import React from "react";

import {mount, shallow} from 'enzyme'
import App from "../App";
import Home from "../components/screens/home";
import OneLinerHeader from "../components/common/oneLinerHeader";
import Education from "../components/screens/education";
import Experience from "../components/screens/experience";
import HomeDemo from "../components/screens/homeDemo";
import BasicDisplay from "../components/common/basicDisplay";
import pageTitles from "../configs/pageTitles";
import Achievement from "../components/screens/achievement";
import Skills from "../components/screens/skills";
import Certificate from "../components/screens/certificate";
import Projects from "../components/screens/projects";
import BottomBar from "../components/common/bottomBar";
import HeaderInfo from "../components/common/headerInfo";
import HtmlComponent from "../components/common/htmlComponent";
import Nav from "../components/common/nav";
import NoData from "../components/common/nodata";


//mount: mounts component DOM including child component
//shallow: shallow references to component without rendering child components

describe('testing Home Component', () => {
    it('testing home contains header', () => {
        const home = shallow(<Home/>)
        const oneliner = shallow(<OneLinerHeader title={pageTitles.home}/>)
        // const onelinerRef = render(<OneLinerHeader title={pageTitles.home}/>)
        const onelineHeader = <h1 className='active size25'>{pageTitles.home}</h1>
        // expect(home).toContainInstanceOf(onelinerRef)
        expect(oneliner.contains(onelineHeader)).toEqual(true)
    })
})

describe('testing basic list component props', () => {
    const basicList = ["one", "two"]
    const basicDisplay = mount(<BasicDisplay list={basicList}/>)
    it('checking basic display accepts prop', () => {
        expect(basicDisplay.props().list).toEqual(basicList)
    })
})

describe('testing home component demo video button click', () => {
    const homeDemo = mount(<HomeDemo/>)
    const label = homeDemo.find('.btn.danger').text()
    it('video button label & click', () => {
        expect(label).toEqual('Click To see Video Demo')
    })
})


