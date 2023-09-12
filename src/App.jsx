import './App.css'
import LandingPage from "./LandingPage";
import About from './About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  /*
  <Route path="/about">
  <About />
  </Route>        
  */

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
