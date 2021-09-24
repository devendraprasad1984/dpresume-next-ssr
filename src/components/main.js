import React from "react";

import { mobileCheck } from "../configs/config";

import BottomBar from "./common/bottomBar";
import HeaderInfo from "./common/headerInfo";
import Nav from "./common/nav";

const isMobileDisplay = mobileCheck();
const gap = isMobileDisplay
  ? {}
  : {
      marginTop: "10rem",
    };
const Main = (props) => {
  return (
    <div>
      <header className="blur topbar fixed">
        <HeaderInfo />
      </header>
      <section className="height400" style={gap}>
        <Nav />
      </section>
      <footer>
        <BottomBar />
      </footer>
    </div>
  );
};
export default Main;
