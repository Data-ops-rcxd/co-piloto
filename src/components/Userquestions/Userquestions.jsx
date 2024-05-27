/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Userquestions.module.css";

const UserQuestions = ({ check }) => {
  const [formValues, setFormValues] = useState({
    Year: "",
    Kilometer: "",
    Fuel: "",
    Transmission: "",
    Owner: "",
    Mileage: "",
    Engine: "",
    Seats: "",
    Price: "",
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation function
    const isValid = () => {
      const {
        Year,
        Kilometer,
        Fuel,
        Transmission,
        Owner,
        Mileage,
        Engine,
        Seats,
        Price,
      } = formValues;

      if (!Year || Year < 1990 || Year > 2022) return false;
      if (!Kilometer || Kilometer < 0 || Kilometer > 100000) return false;
      if (Fuel === "" || Fuel < 0 || Fuel > 3) return false;
      if (Transmission === "" || Transmission < 0 || Transmission > 1)
        return false;
      if (Owner === "" || Owner < 0 || Owner > 3) return false;
      if (!Mileage || Mileage < 15 || Mileage > 40) return false;
      if (!Engine || Engine < 800 || Engine > 6000) return false;
      if (!Seats || Seats < 2 || Seats > 10) return false;
      if (!Price || Price < 1000 || Price > 300000) return false;

      return true;
    };

    if (isValid()) {
      // Save the user's responses to the localStorage
      localStorage.setItem("userResponses", JSON.stringify(formValues));

      check();
    } else {
      alert("Please fill all the fields correctly...  Using older values.");
      check();
    }
  };

  return (
    <div className={styles.userquestionscont}>
      <form className={styles.formscont} onSubmit={handleSubmit}>
        <input
          className={styles.inputbar}
          type="number"
          name="Year"
          value={formValues.Year}
          onChange={handleChange}
          placeholder="Year"
          min="1990"
          max="2022"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Kilometer"
          value={formValues.Kilometer}
          onChange={handleChange}
          placeholder="Kilometer"
          min="0"
          max="100000"
        />
        <select
          className={styles.inputbar}
          name="Fuel"
          value={formValues.Fuel}
          onChange={handleChange}
        >
          <option value="" disabled defaultValue>
            Fuel
          </option>
          <option value="0">GNC</option>
          <option value="1">Diesel</option>
          <option value="2">LPG</option>
          <option value="3">Petrol</option>
        </select>
        <select
          className={styles.inputbar}
          name="Transmission"
          value={formValues.Transmission}
          onChange={handleChange}
        >
          <option value="" disabled defaultValue>
            Transmission
          </option>
          <option value="0">Automatic</option>
          <option value="1">Manual</option>
        </select>
        <select
          className={styles.inputbar}
          name="Owner"
          value={formValues.Owner}
          onChange={handleChange}
        >
          <option value="" disabled defaultValue>
            Owner
          </option>
          <option value="0">First owner</option>
          <option value="1">4th or above</option>
          <option value="2">2nd owner</option>
          <option value="3">3rd owner</option>
        </select>
        <input
          className={styles.inputbar}
          type="number"
          name="Mileage"
          value={formValues.Mileage}
          onChange={handleChange}
          placeholder="Mileage"
          min="15"
          max="40"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Engine"
          value={formValues.Engine}
          onChange={handleChange}
          placeholder="Engine"
          min="800"
          max="6000"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Seats"
          value={formValues.Seats}
          onChange={handleChange}
          placeholder="Seats"
          min="2"
          max="10"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Price"
          value={formValues.Price}
          onChange={handleChange}
          placeholder="Price"
          min="1000"
          max="300000"
        />
        <button className={styles.submitB} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserQuestions;