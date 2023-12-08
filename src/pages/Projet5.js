import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

const Projet5 = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <div className="overlay">
        <Project projectNumber={4} />
      </div>
      <Buttons left={"/projet-4"} />
      <Buttons right={"/projet-6"} />
    </main>
  );
};

export default Projet5;
