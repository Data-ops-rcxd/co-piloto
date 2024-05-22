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
