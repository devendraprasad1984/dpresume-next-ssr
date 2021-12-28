import React from "react";

import BottomBar from "./common/bottomBar";
import HeaderInfo from "./common/headerInfo";
import Nav from "./common/nav";
import NoPropDrilling from "./noPropDrilling";

const Main = (props) => {
    return (
        <div>
            <header className="blur topbar fixed">
                <HeaderInfo/>
            </header>
            <section className="height400 gapSwitchMobile">
                <Nav/>
            </section>
            <NoPropDrilling/>
            <footer>
                <BottomBar/>
            </footer>
        </div>
    );
};
export default Main;
