import Head from "next/head";


const Meta = ({title, keywords, description}) => {
    return <Head>
        <title>dpresume.com next.js SSR - Server Side Rendering</title>
        <meta name='keywords' content={keywords}/>
        <meta name={title} content={description}/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta name='description' content={description}/>
        <meta charSet='utf-8'/>
        <link rel='icon' href='/favicon.ico'/>
        <title>{title}</title>
    </Head>
}

Meta.defaultProps = {
    title: 'dpresume.com fullstack web & api lead developer',
    keywords: 'web,development,node,react,ssr,python,django,spa,ssr,postgres,flask',
    description: ''
}
export default Meta
