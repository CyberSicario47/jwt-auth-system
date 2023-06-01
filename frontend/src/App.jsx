// import Login from "./Screens/Login/Login";
import "./index.css";
import {
    createBrowserRouter
} from "react-router-dom";
import Signup from "./Screens/Signup/Signup.jsx";
import Login from "./Screens/Login/Login.jsx";
import Home from "./Screens/Home/Home.jsx";
// import Root from "./routes/routes.jsx";
// import ErrorPage from "./Screens/Error/Error.jsx";
// import Contact from "./Screens/Contact/Contact.jsx";

export const app = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/signup",
        element: <Signup />,
        // errorElement: <ErrorPage />,
        // children: [
        //     {
        //         path: "contacts/:contactId",
        //         element: <Signup />,
        //     },
        // ],
    },
    {
        path: "/login",
        element: <Login/>
    }
]);

