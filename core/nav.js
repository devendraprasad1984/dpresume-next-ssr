import React from "react";
import { useRouter } from "next/router";
import style from "../styles/common.module.scss";
import config from "../config";

const btnNav = [style.navBtn].join(" ");

// const colorValue = { color: "#7936de" };
const activeClassName = "active";

const Nav = () => {
  const router = useRouter();
  const activeColor = (menuRef) => {
    let isHome = router.asPath === "/" && menuRef === "/";
    let match =
      menuRef !== "/" && router.pathname.indexOf(menuRef) !== -1 && !isHome;
    if (isHome) return activeClassName;
    return match ? activeClassName : null;
  };

  return (
    <div className={[style.marginUD].join(" ")}>
      <div className={[style.pageNav, style.column].join(" ")}>
        <div className={[style.rowGrid, style.marginUD].join(" ")}>
          <span className={style.nextjsLogo}></span>
          <span className={style.reactjsLogo}></span>
        </div>

        <span className={[style.marginUD, style.purple].join(" ")}>
          Welcome to my portfolio
        </span>

        <div className={style.colGrid}>
          <span className={[style.badge, style.bgnavy].join(" ")}>
            Created with
          </span>
          <div className={style.rowGrid}>
            <span className={[style.badge, style.bgred].join(" ")}>Love</span>
            <span className={[style.badge, style.bggreen].join(" ")}>
              Patience
            </span>
            <span className={[style.badge, style.bgpurple].join(" ")}>
              Passion
            </span>
            <span className={[style.badge, style.bgnavy].join(" ")}>Care</span>
          </div>
        </div>
        <div className={style.column}>
          {config.menus.map((menu) => {
            return (
              <a
                key={"id" + menu.name}
                className={`navBtn ${activeColor(menu.href)}`}
                href={menu.href}
                // style={activeColor(menu.href)}
              >
                {menu.name}
              </a>
            );
          })}
        </div>
        <a
          className={[style.marginUD].join(" ")}
          target="_blank"
          href={"https://dpresume.com"}
        >
          https://dpresume.com
        </a>
      </div>
    </div>
  );
};

export default Nav;
