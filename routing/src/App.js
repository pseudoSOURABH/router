
import './App.css';
import About from './components/Navigation/Navbar/Navbarcontent/About/About'
import Contact from './components/Navigation/Navbar/Navbarcontent/Contact Us/Contact'
import Home  from './components/Navigation/Navbar/Navbarcontent/Home/Home'
import Learn from './components/Navigation/Navbar/Navbarcontent/Learn/Learn'
import Navbar from './components/Navigation/Navbar/Navbar';
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import Topics from './components/Navigation/Navbar/Navbarcontent/Topics/Topics';
import Footer from './components/Navigation/Navbar/Navbarcontent/Footer/Footer';
import Header from './components/Navigation/Header/Header';

function App() {
  return (
  <>
  <Header/>
  <Routes>

    <Route path='/' element={<Home/>}  />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Learn' element={<Learn/>} />
      <Route path='/Topics' element={<Topics/>}/>
  
  </Routes>
  <Footer/>
 
  </>
  );
}

export default App;
