import {config} from "../../configs/config";
import {HashRouter, NavLink, Route, Switch} from 'react-router-dom'
import Home from "../screens/home";
import NoData from "./nodata";


const Nav = props => {
    const displayMenu = () => {
        return config.menu.map((item, index) => {
            return <li key={'menu-item-' + index}>
                <NavLink exact={true} activeClassName='active'
                         to={'/' + item.name.toLowerCase()}>{item.name}</NavLink></li>
        })
    }
    const displayRoute = () => {
        return config.menu.map((item, index) => {
            let path = '/' + item.name.toLowerCase()
            let routekey = 'route-item-' + index
            if (item.component === undefined) return <Route key={routekey} path={path}><NoData type='404'/></Route>
            return <Route key={routekey} path={path}>{item.component}</Route>
        })
    }
    return <>
        <HashRouter>
            <div className='row'>
                <nav className='content-left'>
                    <ul>
                        {displayMenu()}
                    </ul>
                </nav>
                <div className='content-right'>
                    <Switch>
                        <Route exact path={'/'}><Home/></Route>
                        {displayRoute()}
                    </Switch>
                </div>
            </div>
        </HashRouter>
    </>
}

export default Nav
