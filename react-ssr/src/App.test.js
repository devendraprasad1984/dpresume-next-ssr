import React from "react";

import {shallow} from 'enzyme'
import App from "./App";
import Home from "./components/screens/home";
import OneLinerHeader from "./components/common/oneLinerHeader";
import Education from "./components/screens/education";
import Experience from "./components/screens/experience";


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
