import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/pageDefault";

const LoginCategory = () => {
  return (
    <PageDefault>
      <h1>Category Registration</h1>
      <form>
        <label>
          Category:
          <input type="text" />
        </label>
        <button>Register</button>
      </form>
      <Link to="/">Go Home</Link>
    </PageDefault>
  );
};

export default LoginCategory;
