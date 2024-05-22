import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

// import Login from "./pages/Login";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
