import React from "react";
import {useRouter} from "next/router";
import commonStyles from "../styles/common.module.scss";

const btnNav = [
    commonStyles.navBtn,
    commonStyles.button32
].join(' ')

const menus = [
    {href: '/dp/achievement', name: 'Achievement'},
    {href: '/dp/blogs', name: 'Blogs'},
    {href: '/dp/certification', name: 'Certifications'},
    {href: '/dp/projects', name: 'Projects'},
    {href: '/dp/education', name: 'Education'},
    {href: '/dp/notes', name: 'Notes'},
    {href: '/dp/skills', name: 'Skills'},
    {href: '/dp/somejs', name: 'Some JS + Auth0'},
]

const Nav = () => {
    const router = useRouter()
    const activeColor = (menuRef) => router.pathname.indexOf(menuRef) !== -1 ? {color: "tomato"} : null

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
                    menus.map(menu => {
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
        </div>
    </div>;
};

export default Nav;
