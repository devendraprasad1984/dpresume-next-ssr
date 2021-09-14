import React from "react";

import {shallow} from 'enzyme'
import App from "../App";
import toJson from "enzyme-to-json";
import Home from "../components/screens/home";
import Education from "../components/screens/education";

//checks for the unexpected changes in component tree
//one of the importatn checks
describe('snapshot changes of components', () => {
    it('app snapshots', () => {
        const tree = shallow(<App/>)
        expect(toJson(tree)).toMatchSnapshot()
    })
    it('home snapshots', () => {
        const home = shallow(<Home/>)
        expect(toJson(home)).toMatchSnapshot()
    })
    it('eduction snapshots', () => {
        const eduction = shallow(<Education/>)
        expect(toJson(eduction)).toMatchSnapshot()
    })
})
