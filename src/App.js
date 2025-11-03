import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import Surprise from "./pages/Surprise";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </Router>
  );
}

export default App;
