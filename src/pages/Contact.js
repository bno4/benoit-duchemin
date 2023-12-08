import React from "react";
import Sidebar from "../components/Sidebar";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Logo />
      <Sidebar />
      <Buttons left="/projet-5" />
      <div className="overlay">
        <div className="contact">
          {" "}
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
