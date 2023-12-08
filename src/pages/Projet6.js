import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

const Projet6 = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <div className="overlay">
        <Project projectNumber={5} />
      </div>
      <Buttons left={"/projet-5"} />
      <Buttons right={"/contact"} />
    </main>
  );
};

export default Projet6;
