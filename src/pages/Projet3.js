import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Projet3 = () => {
  return (
    <main>
      <Sidebar />
      <div className="overlay">
        <Project projectNumber={2} />
      </div>

      <Buttons left={"/projet-2"} />
      <Buttons right={"/projet-4"} />
      <Footer />
    </main>
  );
};

export default Projet3;
