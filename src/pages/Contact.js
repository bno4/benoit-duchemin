import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <main>
      <Sidebar />
      <Buttons left="/projet-6" />
      <div className="overlay">
        <motion.div
          className="contact"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: 300 }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
