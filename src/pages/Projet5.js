import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";

const Projet5 = () => {
  return (
    <main>
      <Sidebar />
      <Project projectNumber={4} />
      <Buttons left={"/projet-4"} />
      <Buttons right={"/contact"} />
    </main>
  );
};

export default Projet5;
