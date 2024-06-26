//importing styles
import styles from "./Home.module.css";

//React stuff
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
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

  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending order

  const handleSort = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
      setlookcars(lookcars.slice().sort((a, b) => b.Price - a.Price));
    } else {
      setSortOrder("asc");
      setlookcars(lookcars.slice().sort((a, b) => a.Price - b.Price));
    }
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

  const totalpages = lookcars.length / itemsPerPage;

  const swipehandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < totalpages) {
        setCurrentPage((old) => old + 1);
      }
    },
    onSwipedRight: () => setCurrentPage((old) => Math.max(old - 1, 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

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
            {recommendedcar.length > 0 ? (
              <div className={styles.recommendationsouterbounds}>
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
                </div>
                <button className={styles.changeP} onClick={resetLocalStorage}>
                  Change Answers
                </button>
              </div>
            ) : (
              <div className={styles.userquestioncont}>
                <h3>
                  Please fill the information below to show recommendations, if
                  you need help click the button on the bottom right corner.
                </h3>
                <UserQuestions check={checkLocalStorage} />
              </div>
            )}
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
            <div {...swipehandlers} className={styles.searchresultscont}>
              <div className={styles.searcharrows}>
                <button
                  className={styles.pagebutton}
                  onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
                  disabled={currentPage === 1}
                >
                  ←
                </button>
                <button
                  className={styles.pagebutton}
                  onClick={() => setCurrentPage((old) => old + 1)}
                  disabled={currentPage * itemsPerPage >= lookcars.length}
                >
                  →
                </button>
              </div>
              {isLoading ? (
                <>Loading info...</>
              ) : (
                <div className={styles.searchresultsinsidecont}>
                  <button className={styles.searchfilter} onClick={handleSort}>
                    Sort by price ({sortOrder === "asc" ? "asc" : "desc"})
                  </button>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
