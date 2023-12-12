import React from "react";
import Project from "../components/Project";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

const Projet1 = () => {
  return (
    <main>
      <Sidebar />
      <Buttons left={"/"} />
      <Buttons right={"/projet-2"} />
      <div className="overlay">
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Project projectNumber={0} />
        </motion.div>
      </div>
    </main>
  );
};

export default Projet1;
