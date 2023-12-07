import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

const Projet3 = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <Project projectNumber={2} />
      <Buttons left={"/projet-2"} />
      <Buttons right={"/projet-4"} />
    </main>
  );
};

export default Projet3;
