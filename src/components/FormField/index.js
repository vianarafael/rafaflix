import React from "react";
import styled from "styled-components";

const Field = styled.div`
  font-size: 2rem;
  margin-top: 36px;
  input {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #e50914;
    background: black;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const FormField = ({ values, label, type, onChange, name }) => {
  console.log("child", values);
  return (
    <Field>
      <input
        type={type}
        value={values}
        onChange={onChange}
        name={name}
        placeholder={label}
      />
    </Field>
  );
};

export default FormField;
