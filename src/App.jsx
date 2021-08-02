import Topbar from "./Components/Topbar/Topbar";
import Menu from "./Components/Menu/Menu";
import Intro from "./Components/Intro/Intro"
import Portfolio from "./Components/Portfolio/Portfolio"
import Resume from "./Components/Resume/Resume";
import Works from "./Components/Works/Works"
import Contact from "./Components/Contact/Contact"
import  "./app.scss"
import { useState} from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
        <div className="sections"> 
        <Intro/>
        <Portfolio />
        <Resume />
        <Works />
        <Contact />
      </div>
    </div>
    
  );
}

export default App;
