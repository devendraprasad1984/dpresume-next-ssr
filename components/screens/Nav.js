import Link from "next/link";
import navStyles from '../../styles/Nav.module.css'

export default function Nav(props){
    return <>
        <nav className={[navStyles.nav].join('')}>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
            </ul>
        </nav>
    </>
}
