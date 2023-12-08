import React from "react";
import { TypeAnimation } from "react-type-animation";

const DynamicText = () => {
  return (
    <div className="overlay">
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
          
          Je suis développeur web, diplômé depuis juillet 2023.\nAprès un premier parcours pro très riche en tant que responsable de diffusion dans le secteur culturel, j’ai décidé de vivre de ma passion...
          
          J'ai suivi une formation de développeur web à plein temps pendant six mois. À cette heure, je suis plus orienté sur le front-end avec JavaScript, Sass/CSS, React. \n Je développe aussi des compétences sur la partie backend, avec Node.js, Express et MongoDB. 

          Je vous invite à naviguer sur ces pages pour retrouver mes réalisations. Je suis pleinement disponible pour échanger autour de vos projets.

          Bonne visite !

          `, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            500,
            "",
          ]}
          repeat={0}
          speed={145}
          deletionSpeed={4500000}
        />
      </div>
    </div>
  );
};

export default DynamicText;
