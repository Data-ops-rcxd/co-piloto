//importing styles
import styles from "./Home.module.css";

//React stuff
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import UserQuestions from "../../components/Userquestions";
import Info from "../../components/Info";
import Help from "../../components/Help";
import { getRecommendedCar, getallCars } from "../../assets/JS/fetchs";

const Home = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [isHelpVisible, setHelpVisible] = useState(false);
  // New state for the current card's information
  const [currentCard, setCurrentCard] = useState(null);
  const [recommendedcar, setRecommendedCar] = useState([]);
  const [lookcars, setlookcars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userResponses, setUserResponses] = useState(
    JSON.parse(localStorage.getItem("userResponses"))
  );

  const handleShowCard = (cardInfo) => {
    // Set the current card's information
    setCurrentCard(cardInfo);
    setCardVisible(true);
  };

  const handleCloseCard = () => {
    setCardVisible(false);
  };

  const handleShowHelp = () => {
    setHelpVisible(true);
  };

  const handleCloseHelp = () => {
    setHelpVisible(false);
  };

  const checkLocalStorage = () => {
    setUserResponses(JSON.parse(localStorage.getItem("userResponses")));
    //here
  };

  const resetLocalStorage = () => {
    setUserResponses([]);
    setRecommendedCar([]);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    setIsLoading(true);
    getallCars().then((data) => {
      setlookcars(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (userResponses) {
      getRecommendedCar(userResponses).then((data) => setRecommendedCar(data));
    }
  }, [userResponses]);

  return (
    <>
      <div className={styles.maincontainer}>
        {isCardVisible && <Info card={currentCard} onClose={handleCloseCard} />}
        {isHelpVisible && <Help onClose={handleCloseHelp} />}

        <div className={styles.titlecont}>
          <img
            className={styles.imgcont}
            src="/CoP_logo.png"
            alt="copilotologo"
          />
          Co-piloto
        </div>
        <div className={styles.intro}>
          <h3>Welcome to Co-Piloto</h3>
          <p>
            Co-Piloto is your personal car recommendation tool. By answering a
            few simple questions, we can help you find the perfect car that fits
            your needs and preferences. <br />
            Start by filling the form below (using numbers) and let Co-Piloto
            guide you to your next car.
          </p>
        </div>
        <div className={styles.pagecontainer}>
          <button className={styles.helpB} onClick={handleShowHelp}></button>
          <div className={styles.recommendations}>
            <div className={styles.titles}>Recommendations</div>
            <div className={styles.recomendationscont}>
              {recommendedcar.length > 0 ? (
                <div className={styles.justacont}>
                  {recommendedcar.map((item, index) => (
                    <Card
                      key={index}
                      name={item.Name}
                      brand={item.Brand}
                      price={item.Price}
                      seats={item.Seats}
                      ccengine={item.Engine}
                      year={item.Year}
                      fueltype={item.Fuel_Type}
                      img={item.Image}
                      handleShowCard={() => handleShowCard(item)}
                    />
                  ))}
                  <button
                    className={styles.changeP}
                    onClick={resetLocalStorage}
                  >
                    Change Answers
                  </button>
                </div>
              ) : (
                <div className={styles.userquestioncont}>
                  <h3>
                    Please fill the information below to show recommendations
                  </h3>
                  <UserQuestions check={checkLocalStorage} />
                </div>
              )}
            </div>
          </div>
          <div className={styles.searchcont}>
            <div className={styles.titles}>Looking for a car?</div>
            {/* Feature for later... 
            <div className={styles.searchbarcont}>
              <input
                className={styles.searchbar}
                type="text"
                placeholder="Type here..."
              />
              <button type="submit" className={styles.searchfilter}>
                Filter
              </button>
            </div> */}
            <div className={styles.searchresultscont}>
              <button
                className={styles.pagebutton}
                onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
                disabled={currentPage === 1}
              >
                ←
              </button>
              {isLoading ? (
                <>Loading info...</>
              ) : (
                <div className={styles.searchresults}>
                  {lookcars
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((item, index) => (
                      <Card
                        key={index}
                        name={item.Name}
                        brand={item.Brand}
                        price={item.Price}
                        seats={item.Seats}
                        ccengine={item.Engine}
                        year={item.Year}
                        fueltype={item.Fuel_Type}
                        img={item.Image}
                        handleShowCard={() => handleShowCard(item)}
                      />
                    ))}
                </div>
              )}
              <button
                className={styles.pagebutton}
                onClick={() => setCurrentPage((old) => old + 1)}
                disabled={currentPage * itemsPerPage >= lookcars.length}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
