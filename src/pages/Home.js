import React from "react";
// import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main>
      <Sidebar />
      <Buttons right="/projet-1" />
    </main>
  );
};

export default Home;
