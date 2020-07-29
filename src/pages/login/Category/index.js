import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/pageDefault";

const LoginCategory = () => {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">Go Home</Link>
    </PageDefault>
  );
};

export default LoginCategory;
