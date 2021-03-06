import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/button.component';

const Category = () => {
  const initialValue = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValue);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleChange = (e) => {
    setValue(e.target.getAttribute('name'), e.target.value);
  };

  // useEffect(() => {
  //   const URL = 'http://localhost:8080/category';
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <PageDefault>
      <div style={{ textAlign: 'center' }}>
        <h1>{values.name || 'Register a category'}</h1>
        <form
          onSubmit={function handleSubmit(e) {
            e.preventDefault();
            setCategories([...categories, values]);

            setValues(initialValue);
          }}
        >
          <FormField
            label="Category"
            type="text"
            name="name"
            values={values.name}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Description"
            type="textarea"
            name="description"
            values={values.description}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Color"
            type="color"
            name="color"
            values={values.color}
            onChange={handleChange}
          />
          <br />
          <Button>Register</Button>
        </form>
        <ul>
          {categories.map((category, index) => {
            return <li key={index}>{category.name}</li>;
          })}
        </ul>
        <Link to="/">Go Home</Link>
      </div>
    </PageDefault>
  );
};

export default Category;
