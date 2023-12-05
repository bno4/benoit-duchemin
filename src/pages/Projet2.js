import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";

const Projet2 = () => {
  return (
    <main>
      <Sidebar />
      <Project projectNumber={1} />
      <Buttons left={"/projet-1"} />
      <Buttons right={"/projet-3"} />
    </main>
  );
};

export default Projet2;
