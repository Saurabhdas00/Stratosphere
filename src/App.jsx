import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Feedback from "./components/Feedback";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Auth" element={<Auth setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;