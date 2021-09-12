import Nav from "./common/nav";
import HeaderInfo from "./common/headerInfo";
import BottomBar from "./common/bottomBar";


const Main = props => {
    return <div>
        <header>
            <HeaderInfo/>
            <Nav/>
        </header>
        <section>section</section>
        <footer><BottomBar/></footer>
    </div>
}
export default Main
