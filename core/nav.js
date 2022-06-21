import React, { Fragment } from "react";
import { useRouter } from "next/router";
import style from "../styles/common.module.scss";
import config from "../config";
import Link from "next/link";

const btnNav = [style.navBtn].join(" ");

// const colorValue = { color: "#7936de" };
const activeClassName = "active";

const activeColor = (menuRef) => {
  const router = useRouter();
  let isHome = router.asPath === "/" && menuRef === "/";
  let match =
    menuRef !== "/" && router.pathname.indexOf(menuRef) !== -1 && !isHome;
  if (isHome) return activeClassName;
  return match ? activeClassName : "";
};

// const MyLinkBtn = React.forwardRef(({ onClick, href, name }, ref) => {
//   return (
//     <a
//       href={href}
//       onClick={onClick}
//       ref={ref}
//       className={`navBtn ${activeColor(href)}`}
//     >
//       {name}
//     </a>
//   );
// });

const Nav = () => {
  return (
    <Fragment>
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
              <span className={[style.badge, style.bgnavy].join(" ")}>
                Care
              </span>
            </div>
          </div>
          {/*using a for nav/route, it send new request to get new page, means all states will be lost and purpose of SPA will be lost, So use Link
         from next*/}
          <div className={style.column}>
            {config.menus.map((menu) => {
              return (
                <Link
                  prefetch={true}
                  key={"id" + menu.name}
                  href={menu.href}
                  passHref
                >
                  {/*<MyLinkBtn name={menu.name} />*/}
                  <span className={`navBtn ${activeColor(menu.href)}`}>
                    {menu.name}
                  </span>
                </Link>
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
    </Fragment>
  );
};

export default Nav;
