import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";

const Projet4 = () => {
  return (
    <main>
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
