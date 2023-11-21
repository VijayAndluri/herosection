import './App.css';
import Footer from './Footer';
import HeroSection from './herosection';
import NavBar from './NavBar';
import Services from './Services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
const Contact = () => <div>Contact</div>;
const Home = () => <div>Home Page</div>;


function App() {
  return (
    <div>
      <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact component ={Home} />
          <Route path="/about"  element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    <HeroSection/>
    <Footer/>
    </div>
  );
}

export default App;
