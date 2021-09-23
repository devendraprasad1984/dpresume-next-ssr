import React from "react";

import BottomBar from "./common/bottomBar";
import HeaderInfo from "./common/headerInfo";
import Nav from "./common/nav";

const Main = (props) => {
  return (
    <div>
      <header className="blur topbar fixed">
        <HeaderInfo />
      </header>
      <div style={{ marginTop: "5rem" }}></div>
      <section className="height400">
        <Nav />
      </section>
      <footer>
        <BottomBar />
      </footer>
    </div>
  );
};
export default Main;
