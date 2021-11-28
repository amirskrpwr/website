import React, { useState } from "react";
import FormComponent from "./FormComponent";

const Form = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    age: null,
    gender: "",
    destination: "",
    isVegan: false,
    isKosher: false,
    isLactoseFree: false,
  });

  const handleChange = (event) => {
    const { value, type, checked } = event.target;
    type === "checkbox"
      ? setName({
          ...name,
          [event.target.name]: checked,
        })
      : setName({
          ...name,
          [event.target.name]: value,
        });
  };

  return <FormComponent handleChange={handleChange} data={name} />;
};

export default Form;
