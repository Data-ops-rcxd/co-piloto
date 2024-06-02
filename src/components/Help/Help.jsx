/* eslint-disable react/prop-types */

import styles from "./Help.module.css";
const Help = ({ onClose }) => {
  const liststyle = {
    color: "lightgreen",
  };
  return (
    <div className={styles.info_overlay}>
      <div className={styles.info_content}>
        <button className={styles.close_button} onClick={onClose}>
          X
        </button>
        <div className={styles.information}>
          Co-piloto important information
          <br />
          <div className={styles.info}>
            Clicking on a card will display more information about the Car.
          </div>
        </div>
        <div className={styles.about}>
          What is Co-piloto?
          <br />
          <br />
          Co-piloto is your personal assistant for car buying. Our app uses
          advanced data analysis algorithms to provide you with personalized car
          recommendations based on your preferences and needs. From the most
          popular vehicles to tailored suggestions and intuitive search tools,
          Co-piloto helps you find the perfect car quickly and easily. Explore
          our recommendations and find your next vehicle with confidence!
          <br />
          <br />
          <span style={{ color: "cyan" }}>
            This site will not grand if the car is available or not, it will
            only tell the existance of the car.
          </span>
          <br />
          <span style={{ color: "#d90429" }}>Recommendations information:</span>
          <br />
          This information will help you to figure out what information do you
          need in order to get recommendations, please think of what are your
          needs.
          <ul>
            <li>
              <strong style={liststyle}>Year:</strong> between 1990-2022
            </li>
            <li>
              <strong style={liststyle}>Kilometer driven:</strong> between
              0-100.000
            </li>
            <li>
              <strong style={liststyle}>Owner type:</strong> first owner, 2nd
              owner, 3rd owner, 4th or above
            </li>
            <li>
              <strong style={liststyle}>Transmission:</strong> Automatic or
              Manual
            </li>
            <li>
              <strong style={liststyle}>Fuel types:</strong> GNC, Diesel, LPG,
              Petrol
            </li>
            <li>
              <strong style={liststyle}>Mileage [Car efficiency]:</strong>{" "}
              between 15-40
            </li>
            <li>
              <strong style={liststyle}>Engine CC:</strong> between 800-6000
            </li>
            <li>
              <strong style={liststyle}>Seats:</strong> between 2-10
            </li>
            <li>
              <strong style={liststyle}>Price:</strong> between 1000-300.000
            </li>
          </ul>
          <br />
          This prototype uses an Indian Car dataset for... prototyping purposes.
          <br />
          <br />
          Created By:
          <br />
          David Tache - Daniel Díaz - Juan Diego García
        </div>
      </div>
    </div>
  );
};

export default Help;
