/* eslint-disable react/prop-types */
//importing styles
import styles from "./Card.module.css";

const Card = ({
  name,
  brand,
  price,
  seats,
  ccengine,
  year,
  fueltype,
  img,
  // transmission,
  // owner,
  // mileage,
  // kilometer,
  handleShowCard,
}) => {
  //Create the onClick method that shows the full info of the card:
  return (
    <div className={styles.cardcont} onClick={handleShowCard}>
      <div className={styles.conttitle}>
        <div className={styles.title}>{name}</div>
        <div className={styles.brandcont}>
          <img src={brand} alt="brandimg" className={styles.brandimg} />
        </div>
      </div>
      <div className={styles.continfo}>
        <div className={styles.carimg}>
          <img src={img} alt="carimg" className={styles.carimg} />
        </div>
        <div className={styles.carinfocont}>
          Year: {parseInt(year)}
          <br />
          Seats: {parseInt(seats)}
          <br />
          CC: {ccengine}
          <br />
          Fuel-type: {fueltype}
        </div>
      </div>
      <div className={styles.contprice}>${price} USD</div>
    </div>
  );
};

export default Card;
