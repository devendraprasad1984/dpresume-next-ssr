import React, {useState} from "react";
import "./App.css";
import "./console.css";
import Main from "./components/main";
import Welcome from "./components/screens/welcome";

function App() {
    const [canWeShowWelcome, setCanWeShowWelcome] = useState(true)
    const handleCloseWelcome = () => {
        console.log('closing in main app')
        setCanWeShowWelcome(false)
    }
    return canWeShowWelcome ? (<Welcome onClose={handleCloseWelcome}/>) : <Main/>
}

export default App;
