import Home from "../components/screens/home";
import Education from "../components/screens/education";
import Achievement from "../components/screens/achievement";
import Certificate from "../components/screens/certificate";
import Experience from "../components/screens/experience";
import Projects from "../components/screens/projects";
import Skills from "../components/screens/skills";


export default function Menu() {
    return [
        {name: 'Home', action: '', uri: '', icon: '', component: <Home/>},
        {name: 'Education', action: '', uri: '', icon: '', component: <Education/>},
        {name: 'Achievement', action: '', uri: '', icon: '', component: <Achievement/>},
        {name: 'Certification', action: '', uri: '', icon: '', component: <Certificate/>},
        {name: 'Experience', action: '', uri: '', icon: '', component: <Experience/>},
        {name: 'Projects', action: '', uri: '', icon: '', component: <Projects/>},
        {name: 'Skills', action: '', uri: '', icon: '', component: <Skills/>},
        {name: 'SomeJs', action: '', uri: '', icon: ''},
        {name: 'Notes', action: '', uri: '', icon: ''},
        // {name: 'Code', action: '', uri: '', icon: ''},
        {name: 'Blogs', action: '', uri: '', icon: ''}
    ]
}
