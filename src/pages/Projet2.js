import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Projet2 = () => {
  return (
    <main>
      <Sidebar />
      <div className="overlay">
        <Project projectNumber={1} />
      </div>
      <Buttons left={"/projet-1"} />
      <Buttons right={"/projet-3"} />
      <Footer />
    </main>
  );
};

export default Projet2;
