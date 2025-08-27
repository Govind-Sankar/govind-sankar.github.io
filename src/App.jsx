import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ParticlesBackground />
      <Navbar />
      <div className="relative w-[100vw] lg:w-[99vw] z-10 bg-[#070707] border-t-1 border-amber-50"> {/*#111418*/}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;