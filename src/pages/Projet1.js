import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";

const Projet1 = () => {
  return (
    <main>
      <Sidebar />
      <Project projectNumber={0} />
      <Buttons left={"/"} />
      <Buttons right={"/projet-2"} />
    </main>
  );
};

export default Projet1;
