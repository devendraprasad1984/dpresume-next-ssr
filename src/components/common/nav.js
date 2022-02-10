import React, {useState} from "react";
import {HashRouter, NavLink, Route, Switch} from "react-router-dom";

import dp from "../../assets/images/dp.png";
import {config, mobileCheck} from "../../configs/config";
import Home from "../screens/home";

import NoData from "./nodata";

const Nav = (props) => {
    const ismobile = mobileCheck();
    const [open, setOpen] = useState(!ismobile);

    const linkClickPreHandler = () => {
        if (!ismobile) return;
        setOpen(!open);
    };
    const displayMenu = () => {
        return config.menu.map((item, index) => {
            if (item.show === false) return null
            return (
                <span key={"menu-item-" + index} className="link size15 margin-ud">
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
            <div className='row'>
                <span className='xprimary size25'>Welcome, {localStorage.getItem(config.enums.localStorage.name)}!</span>
                {(!ismobile || !open) ? <a className="right bl size35 padding-rl" onClick={() => setOpen(!open)}>
                    {open ? `${config.chars.close}` : `${config.chars.hamburger}`}
                </a>:null}
            </div>
            <HashRouter>
                <div className="row">
                    {open && (
                        <div className="flex1 content-left">
                            {ismobile && <div className='row'>
                                <a className="right  bl size35 padding-rl" onClick={() => setOpen(!open)}>
                                    {open ? `${config.chars.close}` : `${config.chars.hamburger}`}
                                </a>
                            </div>}

                            <img className="imgPic img-animate" src={dp} alt={"dp"}/>

                            {/*{!ismobile && (*/}
                            {/*    <div>*/}
                            {/*        <img className="imgPic img-animate" src={dp} alt={"dp"}/>*/}
                            {/*    </div>*/}
                            {/*)}*/}
                            <h4 className='handwritting size20'>
                                created with
                                <span className='success'>patience</span>
                                <span className='danger'>love</span>
                                <span className='info'>passion</span>
                            </h4>
                            <nav className="">
                                <div className="col">{displayMenu()}</div>
                            </nav>
                        </div>
                    )}
                    <div className="content-right">
                        <Switch>
                            <Route exact path={"/"}>
                                <Home title={config.pageTitles.home}/>
                            </Route>
                            {displayRoute()}
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        </div>
    );
};

export default Nav;
