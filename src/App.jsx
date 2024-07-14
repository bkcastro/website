import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photography from './pages/Photography';
import WebProjects from './pages/WebProjects';
import XRProjects from './pages/XRProjects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/webprojects" element={<WebProjects />} />
        <Route path="/xrprojects" element={<XRProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
