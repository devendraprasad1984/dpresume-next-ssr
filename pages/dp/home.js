import React from 'react'
import getFromApi from "../../apis/get";

// export async function getStaticProps(context) {
//     return {
//         props: {
//             data: 'home content fetched'
//         }
//     }
// }


function Home({data}) {
    console.log(data)
    const handleClick = () => {
        getFromApi('/resources/summary.json', (res) => {
            console.log('data summary', res
            )
        })
    }

    return <div>
        Home Content
        <button onClick={handleClick}>Pull Data Test</button>
    </div>
}

export default Home


export async function getServerSideProps(context) {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    return {
        props: {
            data: 'home content fetched'
        }
    }
}
