/* eslint-disable react/prop-types */

import styles from "./Help.module.css";
const Help = ({ onClose }) => {
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
          <ul>
            <li>
              <strong>Year:</strong> 1990-20221
            </li>
            <li>
              <strong>Kilometer:</strong> 0-100.000
            </li>
            <li>
              <strong>Owner:</strong> 0 - first owner, 1 - 4th or above, 2 - 2nd
              owner, 3 - 3rd owner
            </li>
            <li>
              <strong>Transmission:</strong> 0 - automatic, 1 - manual
            </li>
            <li>
              <strong>Fuel:</strong> 0 - GNC, 1 - Diesel, 2 - LPG, 3 - Petrol
            </li>
            <li>
              <strong>Mileage:</strong> 15-40
            </li>
            <li>
              <strong>Engine:</strong> 800-6000
            </li>
            <li>
              <strong>Seats:</strong> 2-10
            </li>
            <li>
              <strong>Price:</strong> 1000-300.000
            </li>
          </ul>
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
