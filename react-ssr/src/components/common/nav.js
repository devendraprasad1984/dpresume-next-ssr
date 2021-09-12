import {config} from "../../configs/config";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'
import Home from "../screens/home";
import About from "../screens/about";
import NoData from "./nodata";


const Nav = props => {
    const displayMenu = () => {
        return config.menu.map((item, index) => {
            return <li key={'menu-item-' + index}><NavLink exact={true} activeClassName='active' to={'/' + item.name.toLowerCase()}>{item.name}</NavLink></li>
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
                <Route path={'/home'}><Home/></Route>
                <Route path={'/about'}><About/></Route>
                <Route path={'*'}><NoData type='404'/></Route>
            </Switch>
        </BrowserRouter>
    </>
}

export default Nav
