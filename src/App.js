import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
