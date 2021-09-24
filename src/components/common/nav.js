import React, { useState } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";

import dp from "../../assets/images/dp.png";
import { config, mobileCheck } from "../../configs/config";
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
            <NoData type="404" />
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
      <HashRouter>
        <div className="right">
          <a className="right bl size20" onClick={() => setOpen(!open)}>
            {open ? `${config.chars.close}` : `${config.chars.hamburger}`}
          </a>
        </div>
        <div className="row padding-rl margin-rl">
          {open && (
            <div className="box">
              <div>
                <img className="imgPic img-animate" src={dp} alt={"dp"} />
              </div>
              <nav className="content-left flex1">
                <div className="col">{displayMenu()}</div>
              </nav>
            </div>
          )}
          <div className="content-right box">
            <Switch>
              <Route exact path={"/"}>
                <Home title={config.pageTitles.home} />
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
