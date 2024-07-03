import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Projects from './pages/Projects';
import Art from './pages/Art';
import XR from './pages/XR';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/XR" element={<XR />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Art" element={<Art />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
