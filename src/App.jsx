import './App.css'
import LandingPage from "./LandingPage";
import About from './About';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";


function App() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Piekut</title>
        
      </Helmet>
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
