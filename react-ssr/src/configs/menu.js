import Home from "../components/screens/home";
import Education from "../components/screens/education";


export default function Menu() {
    return [
        {name: 'Home', action: '', uri: '', icon: '', component: <Home/>},
        {name: 'Education', action: '', uri: '', icon: '', component: <Education/>},
        {name: 'Achievement', action: '', uri: '', icon: ''},
        {name: 'Certification', action: '', uri: '', icon: ''},
        {name: 'Experience', action: '', uri: '', icon: ''},
        {name: 'SomeJs', action: '', uri: '', icon: ''},
        {name: 'Projects', action: '', uri: '', icon: ''},
        {name: 'Skills', action: '', uri: '', icon: ''},
        {name: 'Notes', action: '', uri: '', icon: ''},
        {name: 'Code', action: '', uri: '', icon: ''},
        {name: 'Blogs', action: '', uri: '', icon: ''}
    ]
}
