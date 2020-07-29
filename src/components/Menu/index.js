import React from "react";
import Logo from "../../assets/logo.png";
import "./menu.style.css";
import { Link } from "react-router-dom";
import Button from "../Button/button.component";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Rafaflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/videos">
        New Video
      </Button>
    </nav>
  );
};

export default Menu;
