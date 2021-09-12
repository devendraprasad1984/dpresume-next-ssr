import Nav from "./common/nav";
import HeaderInfo from "./common/headerInfo";


const Main = props => {
    return <div>
        <header>
            <HeaderInfo/>
            <Nav/>
        </header>
        <section>section</section>
        <footer>footer</footer>
    </div>
}
export default Main
