import Home from "../components/screens/home";
import NoData from "../components/common/nodata";
import Education from "../components/screens/education";


export default function Menu() {
    return [
        {name: 'Home', action: '', uri: '', icon: '', component: <Home/>},
        {name: 'Education', action: '', uri: '', icon: '', component: <Education/>},
        {name: 'Achievement', action: '', uri: '', icon: '', component: <NoData type='404'/>},
        {name: 'Certification', action: '', uri: '', icon: '', component: <NoData type='404'/>},
        {name: 'Experience', action: '', uri: '', icon: '', component: <NoData type='404'/>},
        {name: 'SomeJs', action: '', uri: '', icon: '', component: <NoData type='404'/>},
        {name: 'Projects', action: '', uri: '', icon: '', component: <NoData type='404'/>},
        {name: 'Skills', action: '', uri: '', icon: '', component: <NoData type='404'/>},
        {name: 'Notes', action: '', uri: '', icon: '', component: <NoData type='404'/>},
        {name: 'Code', action: '', uri: '', icon: '', component: <NoData type='404'/>},
        {name: 'Blogs', action: '', uri: '', icon: '', component: <NoData type='404'/>}
    ]
}
