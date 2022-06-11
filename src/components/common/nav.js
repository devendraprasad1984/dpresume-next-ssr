import React, {useState} from "react";
import {HashRouter, NavLink, Route, Switch} from "react-router-dom";
import {config, mobileCheck} from "../../configs/config";
import Home from "../screens/home";

import NoData from "./nodata";

let initRandomColorNum = Math.floor(Math.random() * config.bgColors.length);

const Nav = (props) => {
    const ismobile = mobileCheck();
    const [open, setOpen] = useState(!ismobile);
    const [bgColor, setBgColor] = useState(config.bgColors[initRandomColorNum]);

    const linkClickPreHandler = () => {
        let num = Math.floor(Math.random() * config.bgColors.length);
        let _bgcolor = config.bgColors[num] || "white";
        setBgColor(_ => _bgcolor)

        if (!ismobile) return;
        setOpen(!open);
    };
    const displayMenu = () => {
        return config.menu.map((item, index) => {
            if (item.show === false) return null
            // let isHome = window.location.hash === '#/' && item.name.toLowerCase() === 'home'
            let isItemCurrent = window.location.hash.indexOf(item.name.toLowerCase()) !== -1
            let activeParentClass = isItemCurrent ? 'active-parent' : ""
            return (
                <span key={"menu-item-" + index}
                      className={"pad10 size15 margin-ud " + activeParentClass + " " + (ismobile ? "xwhite" : "")}
                >
                  <NavLink
                      exact={true}
                      activeClassName="active"
                      to={"/" + item.name.toLowerCase()}
                      onClick={linkClickPreHandler}
                  >
                    {item.name}
                  </NavLink>
                </span>
            );
        });
    };
    const displayRoute = () => {
        return config.menu.map((item, index) => {
            let path = "/" + item.name.toLowerCase();
            let routekey = "route-item-" + index;
            if (item.component === undefined)
                return (
                    <Route key={routekey} path={path}>
                        <NoData type="404"/>
                    </Route>
                );
            return (
                <Route key={routekey} path={path}>
                    {item.component}
                </Route>
            );
        });
    };
    return (
        <div>
            <div className='row center'>
                <span className='react-loading-icon'></span>
                <span className='size20'>Welcome, {localStorage.getItem(config.enums.localStorage.name)}!</span>
                <span className='size10 bl'>React18</span>
                {(!ismobile || !open) ? <span href='#' className="right bl xwhite size35 padding-rl" onClick={() => setOpen(!open)}>
                    {open ? `${config.chars.close}` : `${config.chars.hamburger}`}
                </span> : null}
            </div>
            <HashRouter>
                <div className="row">
                    {open && (
                        <div className="sidePicRight flex1 content-left" style={{backgroundColor: bgColor}}>
                            {ismobile && <div className='row'>
                                <span className="right  bl size35 padding-rl" onClick={() => setOpen(!open)}>
                                    {open ? `${config.chars.close}` : `${config.chars.hamburger}`}
                                </span>
                            </div>}

                            <div className='col'>
                                {/*<img className="imgPic img-animate" src={dp} alt={"dp"}/>*/}
                                <span>created with...</span>
                                <div className='size10'>
                                    <span className='pad5 roundCorner success'>patience</span>
                                    <span className='pad5 roundCorner danger'>love</span>
                                    <span className='pad5 roundCorner info'>passion</span>
                                </div>
                            </div>
                            <div className='front col whiteLeftPanel h100'>{displayMenu()}</div>
                        </div>
                    )}
                    <div id='sidePicLeft' className="content-right sidePicLeft">
                        <div className='whiteRightPanel front h100' style={{backgroundColor: bgColor}}>
                            <Switch>
                                <Route exact path={"/"}>
                                    <Home title={config.pageTitles.home}/>
                                </Route>
                                {displayRoute()}
                            </Switch>
                        </div>
                    </div>
                </div>
            </HashRouter>
        </div>
    );
};

export default React.memo(Nav);
