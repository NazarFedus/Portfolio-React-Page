import './styles/main.css'

//components
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'

//pages
import Home from './pages/Home'
import Projects from './pages/Projects';



function App() {
  return (
    <div className="App">
        <Navbar></Navbar>

        {/* <Home></Home> */}
        <Projects></Projects>

        <Footer></Footer>
    </div>
  );
}

export default App;
