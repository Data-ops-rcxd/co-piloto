import { createBrowserRouter } from "react-router-dom";

// routes.js
import Error from "../pages/Error";
import Home from "../pages/Home";

const routes = createBrowserRouter([

  {
    path: "/",
    name: "home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "*",
    name: "error",
    element: <Error />,
  },
]);

export default routes;
