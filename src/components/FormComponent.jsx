import React, { useEffect, useRef } from "react";

function FormComponent(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main>
      <h1>Please Fill This Form:</h1>
      <div className="form-group">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          onChange={props.handleChange}
          placeholder="First Name"
          name="firstName"
          value={props.data.firstName}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          onChange={props.handleChange}
          placeholder="Last Name"
          name="lastName"
          value={props.data.lastName}
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          className="form-control"
          onChange={props.handleChange}
          placeholder="Age"
          name="age"
          value={props.data.age}
        />
      </div>

      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            name="gender"
            value="male"
            className="form-check-input"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
      </div>

      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            name="gender"
            value="female"
            className="form-check-input mr-1"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
      </div>
      <br />

      <select
        className="form-group"
        name="destination"
        onChange={props.handleChange}
      >
        <option className="form-control" value="">
          -- Please Enter your destination --
        </option>
        <option className="form-control" value="Iran">
          Iran
        </option>
        <option className="form-control" value="Germany">
          Germany
        </option>
        <option className="form-control" value="Norway">
          Norway
        </option>
        <option className="form-control" value="North People">
          North People
        </option>
        <option className="form-control" value="South People">
          South People
        </option>
      </select>

      <div className="form-check mt-2">
        <label className="form-check-label">
          <input
            type="checkbox"
            name="isVegan"
            className="form-check-input"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />
          Vegan
        </label>
      </div>

      <div className="form-check">
        <label className="form-check-label">
          <input
            type="checkbox"
            name="isKosher"
            className="form-check-input"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />
          Kosher
        </label>
      </div>

      <div className="form-check">
        <label className="form-check-label">
          <input
            type="checkbox"
            name="isLactoseFree"
            className="form-check-input"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />
          Loctose Free
        </label>
      </div>

      <h1>Entered Information:</h1>

      {(props.data.firstName.length > 0 || props.data.lastName.length > 0) && (
        <p>
          Your Name is {props.data.firstName} {props.data.lastName}.
        </p>
      )}

      {props.data.age > 0 && <p>You Are {props.data.age} years old.</p>}

      {props.data.gender.length > 0 && (
        <p>Your Gender is {props.data.gender}.</p>
      )}

      {props.data.destination.length > 0 && (
        <p>Your Destination is {props.data.destination}.</p>
      )}
      <p>Restrictions:</p>
      <p>Vegan: {props.data.isVegan ? "Yes" : "No"}.</p>
      <p>Kosher: {props.data.isKosher ? "Yes" : "No"}.</p>
      <p>Loctose Free: {props.data.isLactoseFree ? "Yes" : "No"}.</p>

      <br />
      <hr />
    </main>
  );
}

export default FormComponent;
