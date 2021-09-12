import {config} from "../../configs/config";


const Nav = props => {
    const displayMenu = () => {
        return config.menu.map((item, index) => {
            return <li key={'menu-item-' + index}>{item.name}</li>
        })
    }
    return <nav className='nav'>
        <ul>
            {displayMenu()}
        </ul>
    </nav>
}

export default Nav
