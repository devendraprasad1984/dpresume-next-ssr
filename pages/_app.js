import '../styles/globals.css'
import Header from "../components/header/header";


function MyApp({Component, pageProps}) {
    return <Component {...pageProps}>
        <Header/>
    </Component>
}

export default MyApp
