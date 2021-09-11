import Nav from "./Nav";
import layoutStyle from '../../styles/Layout.module.css'
import AppHeader from "./AppHeader";
import Meta from "../common/meta";
import React from "react";


const Layout = ({children}) => {
    return <div className={layoutStyle.container}>
        <Nav/>
        <Meta/>
        <main className={layoutStyle.main}>
            <AppHeader/>
            {children}
        </main>
        <div>Footer goes here</div>
    </div>
}

export default Layout
