import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

const Projet2 = () => {
  return (
    <main>
      <Sidebar />
      <Buttons left={"/projet-1"} />
      <Buttons right={"/projet-3"} />
      <div className="overlay">
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Project projectNumber={1} />
        </motion.div>
      </div>
    </main>
  );
};

export default Projet2;
