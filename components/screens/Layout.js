import Meta from "../header/meta";
import Nav from "./Nav";
import layoutStyle from '../../styles/Layout.module.css'
import AppHeader from "./AppHeader";


const Layout = ({children}) => {
    return <div className={layoutStyle.container}>
        <Meta/>
        <Nav/>
        <main className={layoutStyle.main}>
            <AppHeader/>
            {children}
        </main>
        <div>Footer goes here</div>
    </div>
}

export default Layout
