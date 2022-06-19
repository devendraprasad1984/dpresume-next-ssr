import MainApp from "./mainApp";
import Home from "./dp/home";

export default function ({data}) {
    return <MainApp>
        <Home/>
    </MainApp>
}


//it runs from index only
export async function getServerSideProps(context) {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    return {
        props: {
            data: 'home content fetched - injected common app props from server - init level props that wont be visible client side'
        }
    }
}
