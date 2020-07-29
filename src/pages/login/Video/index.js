import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/pageDefault";

const LoginVideo = () => {
  return (
    <PageDefault>
      <h1>Cadastro de video</h1>
      <Link to="/category">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default LoginVideo;
