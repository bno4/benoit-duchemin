import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Buttons left="/projet-5" />
      <div className="overlay">
        <div className="contact">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
