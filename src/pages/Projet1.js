import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

const Projet1 = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <Buttons left={"/"} />
      <Buttons right={"/projet-2"} />
      <div className="overlay">
        <Project projectNumber={0} />
      </div>
    </main>
  );
};

export default Projet1;
