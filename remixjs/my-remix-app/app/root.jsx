import {Link, Links, LiveReload, Meta, Outlet} from 'remix'
import globalStyleUrl from '~/styles/global.css'

export const links = () => {
    return [{rel: 'stylesheet', href: globalStyleUrl}]
}
export default function () {
    return <Document>
        <Layout>
            <Outlet/>
        </Layout>
    </Document>
}

export const meta = () => {
    const description = 'A cool blog built with Remix'
    const keywords = 'remix, react, javascript'

    return {
        description, keywords,
    }
}

function Document({children, title}) {
    return (<html lang='en'>
    <head>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='width=device-width,initial-scale=1'/>
        <Meta/>
        <Links/>
        <title>{title}</title>
    </head>
    <body>
    {children}
    {process.env.NODE_ENV === 'development' && <LiveReload/>}
    </body>
    </html>)
}

function Layout({children}) {
    return (<>
        <nav className='navbar'>
            <Link to='/' className='logo'>Remix</Link>
            <ul>
                <li><Link to='/posts'>posts</Link></li>
            </ul>
        </nav>
        <div className='container'>{children}</div>
    </>)
}

export function ErrorBoundary({error}) {
    console.log(error)
    return (<Document>
        <Layout>
            <h1>Error</h1>
            <p>{error.message}</p>
        </Layout>
    </Document>)
}
