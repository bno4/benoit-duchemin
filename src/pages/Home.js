import React from "react";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";
import DynamicText from "../components/DynamicText";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <Buttons right="/projet-1" />
      <DynamicText />
    </main>
  );
};

export default Home;
