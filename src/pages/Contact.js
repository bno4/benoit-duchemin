import React from "react";
import Sidebar from "../components/Sidebar";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";

const Contact = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <Buttons left="/projet-5" />
    </main>
  );
};

export default Contact;
