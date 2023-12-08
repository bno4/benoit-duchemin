import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

const Projet4 = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <div className="overlay">
        <Project projectNumber={3} />
      </div>
      <Buttons left={"/projet-3"} />
      <Buttons right={"/projet-5"} />
    </main>
  );
};

export default Projet4;
