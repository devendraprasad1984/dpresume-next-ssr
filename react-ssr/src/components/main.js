import React from "react";
import Nav from "./common/nav";
import HeaderInfo from "./common/headerInfo";
import BottomBar from "./common/bottomBar";

const Main = (props) => {
  return (
    <div>
      <header>
        <HeaderInfo />
      </header>
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
