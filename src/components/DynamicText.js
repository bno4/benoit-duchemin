import React from "react";
import { TypeAnimation } from "react-type-animation";

const DynamicText = () => {
  return (
    <div className="dynamic-text">
      <TypeAnimation
        style={{
          whiteSpace: "pre-line",
          height: "auto",
          display: "block",
          width: "320px",
          lineHeight: "25px",
          fontSize: "1rem",
          color: "$bgcolor2",
        }}
        sequence={[
          `Bienvenue sur mon site ! 
          
          Je suis développeur web, diplômé en juillet 2023.
           
          Après des premières expériences professionnelles très riches en tant que responsable de diffusion au sein d'entreprises culturelles, \nj’ai décidé de vivre de ma passion...
          
          A cette heure, je continue de me former sur les technos plus orientées front-end : JavaScript, Sass/CSS, React. \n Je développe aussi des compétences sur la partie backend, avec Node.js, Express et MongoDB. 

          `, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
          1000,
          "",
        ]}
        repeat={0}
        speed={150}
        deletionSpeed={4500000}
      />
    </div>
  );
};

export default DynamicText;
