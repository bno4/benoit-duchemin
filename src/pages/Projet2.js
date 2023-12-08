import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

const Projet2 = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <Buttons left={"/projet-1"} />
      <Buttons right={"/projet-3"} />
      <div className="overlay">
        <Project projectNumber={1} />
      </div>
    </main>
  );
};

export default Projet2;
