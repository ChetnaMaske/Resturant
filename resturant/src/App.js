import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
         <Header />
         <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/menu' element={<Menu/>}/>
          <Route exact path='/about' element={<About/>} />  
         </Routes>
         <Footer />
      </Router>
    
    </div>
  );
}

export default App;
