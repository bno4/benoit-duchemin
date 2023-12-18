import React from "react";

const Social = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul className="content">
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/beno%C3%AEt-duchemin-817584141/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
          </li>
        </a>

        {/* Github */}
        <a
          href="https://github.com/bno4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Social;
