import {shallow} from "enzyme";
import toJson from "enzyme-to-json";


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
