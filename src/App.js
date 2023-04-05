import './styles/main.css'

//components
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'

//pages
import Home from './pages/Home'
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import { Project } from './pages/Project';



function App() {
  return (
    <div className="App">
        <Navbar></Navbar>

        {/* <Home /> */}
        {/* <Projects /> */}
        <Project />
        {/* <Contacts /> */}

        <Footer></Footer>
    </div>
  );
}

export default App;
