import { mount, shallow } from "enzyme";
import React from "react";

import BasicDisplay from "../components/common/basicDisplay";
import OneLinerHeader from "../components/common/oneLinerHeader";
import HomeDemo from "../components/screens/homeDemo";
import pageTitles from "../configs/pageTitles";

//mount: mounts component DOM including child component
//shallow: shallow references to component without rendering child components
describe("testing Home Component", () => {
  it("testing home contains header", () => {
    const oneliner = shallow(<OneLinerHeader title={pageTitles.home} />);
    const onelineHeader = <h1 className="active size25">{pageTitles.home}</h1>;
    expect(oneliner.contains(onelineHeader)).toEqual(true);
  });
});

describe("testing basic list component props", () => {
  const basicList = ["one", "two"];
  const basicDisplay = mount(<BasicDisplay list={basicList} />);
  it("checking basic display accepts prop", () => {
    expect(basicDisplay.props().list).toEqual(basicList);
  });
});

describe("testing home component demo video button click", () => {
  const homeDemo = mount(<HomeDemo />);
  const label = homeDemo.find(".btn.danger");
  it("video button label & click", () => {
    const onVideoButtonClick = label.simulate("click");
    expect(label.text()).toEqual("Click To see Video Demo");
    expect(onVideoButtonClick.length).toEqual(1);
  });
});
