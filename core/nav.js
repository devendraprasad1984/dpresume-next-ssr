import React from "react";
import {useRouter} from "next/router";
import commonStyles from "../styles/common.module.scss";
import config from '../config'

const btnNav = [
    commonStyles.navBtn,
    commonStyles.button32
].join(' ')

const Nav = () => {
    const router = useRouter()
    const activeColor = (menuRef) => {
        let match = router.pathname.indexOf(menuRef) !== -1 || router.pathname === menuRef
        return match ? {color: "tomato"} : null
    }

    return <div className={[
        commonStyles.marginUD
    ].join(' ')}>
        <div className={[
            commonStyles.pageNav,
            commonStyles.column,
        ].join(' ')}>
            <span className={commonStyles.marginUD}>Welcome to my page</span>
            <div className={commonStyles.colGrid}>
                Created with
                <div className={commonStyles.rowGrid}>
                    <span>Love</span>
                    <span>Patience</span>
                    <span>Care</span>
                </div>
            </div>
            <div className={commonStyles.column}>
                {
                    config.menus.map(menu => {
                        return <a
                            key={'id' + menu.name}
                            className={btnNav}
                            href={menu.href}
                            style={activeColor(menu.href)}
                        >
                            {menu.name}
                        </a>
                    })
                }
            </div>
            <div className={[
                commonStyles.rowGrid,
                commonStyles.marginUD
            ].join(' ')}>
                <span className={commonStyles.nextjsLogo}>NextJs</span>
                <span className={commonStyles.reactjsLogo}>React18</span>
            </div>
        </div>
    </div>;
};

export default Nav;
