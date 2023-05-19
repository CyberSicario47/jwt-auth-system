import Login from "./Screens/Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./Screens/Signup/Signup.jsx";
import Home from "./Screens/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
]);

const App = () => <RouterProvider router={router}/>


export default App
