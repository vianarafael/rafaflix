import React from "react";
import { FooterBase } from "./styles";

import logo from "../../assets/logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={logo} alt="Logo Rafaflix" />
      </a>
      <p>
        Created by <a href="https://www.rafaelviana.io/">Rafael Viana</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
