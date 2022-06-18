import React from "react";

import commonStyles from "../styles/common.module.scss";

const btnNav = [
    commonStyles.navBtn,
    commonStyles.button32
].join(' ')

const Nav = () => {
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
                <a className={btnNav} href='/dp/achievement'>Achievement</a>
                <a className={btnNav} href='/dp/blogs'>Blogs</a>
                <a className={btnNav} href='/dp/certification'>Certifications</a>
                <a className={btnNav} href='/dp/projects'>Projects</a>
                <a className={btnNav} href='/dp/education'>Education</a>
                <a className={btnNav} href='/dp/notes'>Notes</a>
                <a className={btnNav} href='/dp/skills'>Skills</a>
                <a className={btnNav} href='/dp/somejs'>Some JS + Auth0</a>
            </div>
        </div>
    </div>;
};

export default Nav;
