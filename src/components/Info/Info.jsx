/* eslint-disable react/prop-types */
//importing styles
import styles from "./Info.module.css";
const Info = ({ card, onClose }) => {
  return (
    <div className={styles.info_overlay} onClick={onClose}>
      <div className={styles.info_content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close_button} onClick={onClose}>
          X
        </button>
        <div className={styles.information}>
          <div className={styles.conttitle}>
            <div className={styles.brandcont}>
              <img
                src={card.Brand}
                alt="brandimg"
                className={styles.brandimg}
              />
            </div>
            <div className={styles.title}>{card.Name}</div>

            <img src={card.Image} alt="carimg" className={styles.carimg} />
          </div>
          <div className={styles.continfo}>
            <div className={styles.carinfo}>
              <div>Year</div>
              {parseInt(card.Year)}
            </div>
            <div className={styles.carinfo}>
              <div>Seats</div>
              {parseInt(card.Seats)}
            </div>
            <div className={styles.carinfo}>
              <div>Fuel-type</div>
              {card.Fuel_Type}
            </div>
            <div className={styles.carinfo}>
              <div>CC</div>
              {card.Engine}
            </div>
            <div className={styles.carinfo}>
              <div>Transmission</div>
              {card.Transmission}
            </div>
          </div>

          <div className={styles.otherinfocont}>
              <h2>Other details</h2>
            <div className={styles.otherinfo}>
              <div id={styles.one}>
                Kilometers driven
                <br />
                Owner type
                <br />
                Mileage
              </div>

              <div>
                {parseInt(card.Kilometers_Driven)}
                <br />
                {card.Owner_Type}
                <br />
                {card.Mileage}
              </div>
            </div>
          </div>
          Price
          <div className={styles.contprice}>${card.Price} USD</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
