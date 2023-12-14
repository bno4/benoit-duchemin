import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Contact = () => {
  return (
    <main>
      <Sidebar />
      <Buttons left="/projet-5" />
      <div className="overlay">
        <div className="contact">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
