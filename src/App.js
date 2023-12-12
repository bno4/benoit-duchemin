import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Projet1 from "./pages/Projet1";
import Projet2 from "./pages/Projet2";
import Projet3 from "./pages/Projet3";
import Projet4 from "./pages/Projet4";
import Projet5 from "./pages/Projet5";
import Projet6 from "./pages/Projet6";
import Contact from "./pages/Contact";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet-1" element={<Projet1 />} />
          <Route path="/projet-2" element={<Projet2 />} />
          <Route path="/projet-3" element={<Projet3 />} />
          <Route path="/projet-4" element={<Projet4 />} />
          <Route path="/projet-5" element={<Projet5 />} />
          <Route path="/projet-6" element={<Projet6 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
