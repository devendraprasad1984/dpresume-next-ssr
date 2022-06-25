import React, { Fragment } from "react";
import { useRouter } from "next/router";
import config from "../config";
import Link from "next/link";

const btnNav = ["navBtn"].join(" ");

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
      <div>
        <div className={["pageNav", "column"].join(" ")}>
          <div className={["rowGrid", "marginUD"].join(" ")}>
            <span className={"nextjsLogo"}>&nbsp;</span>
            <span className={"reactjsLogo"}>&nbsp;</span>
          </div>

          <span className={["marginUD", "purple"].join(" ")}>
            Welcome to my portfolio
          </span>

          <div className={"colGrid"}>
            <span className={["badge", "bgnavy"].join(" ")}>Created with</span>
            <div className={"rowGrid"}>
              <span className={["badge", "bgred"].join(" ")}>Love</span>
              <span className={["badge", "bggreen"].join(" ")}>Patience</span>
              <span className={["badge", "bgpurple"].join(" ")}>Passion</span>
              <span className={["badge", "bgnavy"].join(" ")}>Care</span>
            </div>
          </div>
          {/*using a for nav/route, it send new request to get new page, means all states will be lost and purpose of SPA will be lost, So use Link
         from next*/}
          <div className={"column"}>
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
            className={"marginUD"}
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
