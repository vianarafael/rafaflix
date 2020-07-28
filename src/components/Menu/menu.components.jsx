import React from "react";
import Logo from "../../assets/logo.png";
import "./menu.style.css";

import Button from "../Button/button.component";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Rafaflix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        New Video
      </Button>
    </nav>
  );
};

export default Menu;
