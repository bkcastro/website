import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebProjects from './pages/WebProjects';
import XRProjects from './pages/XRProjects';
import TimeMachine from './pages/TimeMachine';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeMachine" element={<TimeMachine />} />
        <Route path="/webprojects" element={<WebProjects />} />
        <Route path="/xrprojects" element={<XRProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
