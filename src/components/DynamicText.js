import React from "react";
import { TypeAnimation } from "react-type-animation";

const DynamicText = () => {
  return (
    <div className="overlay">
      <div className="dynamic-text">
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            height: "500px",
            display: "block",
            width: "320px",
            lineHeight: "25px",
            fontSize: "1.5rem",
            color: "$bgcolor2",
          }}
          sequence={[
            `Bienvenue sur mon site ! 
          
          Je suis développeur web, diplômé depuis 2023.\n
          Je m'intéresse essentiellement aux technologies du front-end :\n React, JavaScript, Sass, CSS,
          et continue de me former côté back-end avec Node, MongoDB, Express.

          Je reste à l'écoute en page "contact" pour échanger autour de vos projets. 

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
