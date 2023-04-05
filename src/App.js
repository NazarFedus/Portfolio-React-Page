import './styles/main.css'

//components
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import Home from './pages/Home'



function App() {
  return (
    <div className="App">
        <Navbar></Navbar>

        <Home></Home>

        <Footer></Footer>
    </div>
  );
}

export default App;
