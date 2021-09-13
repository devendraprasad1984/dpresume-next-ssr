import React from "react";

import {mount, shallow} from 'enzyme'
import App from "./App";
import Home from "./components/screens/home";
import OneLinerHeader from "./components/common/oneLinerHeader";
import Education from "./components/screens/education";
import Experience from "./components/screens/experience";
import HomeDemo from "./components/screens/homeDemo";
import BasicDisplay from "./components/common/basicDisplay";


//mount: mounts component DOM including child component
//shallow: shallow references to component without rendering child components
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
})

describe('testing Home Component', () => {
    it('testing home contains header', () => {
        const home = shallow(<Home/>)
        const oneliner = shallow(<OneLinerHeader title={'hello'}/>)
        const onelineHeader = <h1 className='active size25'>{'hello'}</h1>
        expect(home.contains(oneliner)).toEqual(true)
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


