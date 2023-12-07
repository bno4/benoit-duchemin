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
      <Project projectNumber={1} />
      <Buttons left={"/projet-1"} />
      <Buttons right={"/projet-3"} />
    </main>
  );
};

export default Projet2;