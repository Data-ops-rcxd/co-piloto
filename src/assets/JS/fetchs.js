//fetch function for the page...
//This function will return a recommended car based on the data provided by the user
const url_predict = "http://ddman.pythonanywhere.com/predict/";
const url_getall = "http://ddman.pythonanywhere.com/get_all";

async function getRecommendedCar(data) {
  const response = await fetch(url_predict, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return [result];
}

// {
//     "Year": ---,
//     "Kilometer": ---,
//     "Fuel": ---,
//     "Transmission": ---,
//     "Owner": ---,
//     "Mileage": ---,
//     "Engine": ---,
//     "Seats": ---,
//     "Price": ---
//   }

async function getallCars(data) {
  const response = await fetch(url_getall, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

export { getRecommendedCar, getallCars };
