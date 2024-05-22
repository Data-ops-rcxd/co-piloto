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

    // Save the user's responses to the localStorage
    localStorage.setItem("userResponses", JSON.stringify(formValues));

    check();
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
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Kilometer"
          value={formValues.Kilometer}
          onChange={handleChange}
          placeholder="Kilometer"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Fuel"
          value={formValues.Fuel}
          onChange={handleChange}
          placeholder="Fuel"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Transmission"
          value={formValues.Transmission}
          onChange={handleChange}
          placeholder="Transmission"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Owner"
          value={formValues.Owner}
          onChange={handleChange}
          placeholder="Owner"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Mileage"
          value={formValues.Mileage}
          onChange={handleChange}
          placeholder="Mileage"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Engine"
          value={formValues.Engine}
          onChange={handleChange}
          placeholder="Engine"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Seats"
          value={formValues.Seats}
          onChange={handleChange}
          placeholder="Seats"
        />
        <input
          className={styles.inputbar}
          type="number"
          name="Price"
          value={formValues.Price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button className={styles.submitB} type="submit" onClick={check}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserQuestions;
