import './App.css';
import Footer from './Footer';
import HeroSection from './herosection';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <div>
      <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
    <HeroSection/>
    <Footer/>
    </div>
  );
}

export default App;
