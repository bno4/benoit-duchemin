import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Projet1 = () => {
  return (
    <main>
      <Sidebar />
      <div className="overlay">
        <Project projectNumber={0} />
      </div>
      <Buttons left={"/"} />
      <Buttons right={"/projet-2"} />
      <Footer />
    </main>
  );
};

export default Projet1;
