import {config} from "../../configs/config";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'
import Home from "../screens/home";
import NoData from "./nodata";


const Nav = props => {
    const displayMenu = () => {
        return config.menu.map((item, index) => {
            return <li key={'menu-item-' + index}><NavLink exact={true} activeClassName='active'
                                                           to={'/' + item.name.toLowerCase()}>{item.name}</NavLink></li>
        })
    }
    const displayRoute = () => {
        return config.menu.map((item, index) => {
            return <Route path={'/' + item.name.toLowerCase()}>{item.component}</Route>
        })
    }
    return <>
        <BrowserRouter>
            <nav className='nav'>
                <ul>
                    {displayMenu()}
                </ul>
            </nav>
            <Switch>
                <Route exact path={'/'}><Home/></Route>
                {displayRoute()}
                <Route path={'*'}><NoData type='404'/></Route>
            </Switch>
        </BrowserRouter>
    </>
}

export default Nav
