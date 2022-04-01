// import {Outlet} from "react-router-dom";
import {Outlet} from "remix";

// export default function posts() {
//     return (<div>
//             <h1>hello this is posts</h1>
//             <Outlet/>
//         </div>)
// }

export default function () {
    return <>
        <h1>hello this is posts</h1>
        <Outlet/>
    </>
}