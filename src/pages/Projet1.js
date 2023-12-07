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
      <Project projectNumber={0} />
      <Buttons left={"/"} />
      <Buttons right={"/projet-2"} />
    </main>
  );
};

export default Projet1;
