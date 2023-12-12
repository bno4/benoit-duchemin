import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main>
      <Sidebar />
      <DynamicText />
      <Buttons right="/projet-1" />
    </main>
  );
};

export default Home;
