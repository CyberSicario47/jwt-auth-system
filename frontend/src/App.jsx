import "./index.css";
import {
    Routes, Route
} from "react-router-dom";
import Signup from "./Screens/Signup/Signup.jsx";
import Login from "./Screens/Login/Login.jsx";
import Home from "./Screens/Home/Home.jsx";
import Layout from "./components/Layout.jsx";
import Root from "./routes/routes.jsx";
import ErrorPage from "./Screens/Error/Error.jsx";
import Contact from "./Screens/Contact/Contact.jsx";
import Admin from "./components/Admin.jsx";
import Editor from "./components/Editor.jsx";
import Unauthorized from "./components/Unauthorized.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import PersistLogin from "./components/PersistLogin.jsx";
import Links from "./Screens/Links/Links.jsx";

const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="login" element={<Login/>}></Route>
                <Route path="signup" element={<Signup/>}></Route>
                <Route path="unauthorized" element={<Unauthorized/>}></Route>
                <Route path="contact" element={<Contact/>}></Route>
                <Route path="/" element={<Links/>}></Route>


                <Route element={<PersistLogin/>}>
                    <Route element={<RequireAuth allowedRoles={[ROLES.user]}/>}>
                        <Route path="root" element={<Root/>}></Route>
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Editor]}/>}>
                        <Route path="editor" element={<Editor/>}></Route>
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
                        <Route path="admin" element={<Admin/>}></Route>
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
                        <Route path="/home" element={<Home/>}></Route>
                    </Route>
                </Route>

                <Route path="*" element={<ErrorPage/>}></Route>
            </Route>
        </Routes>
    )
}

export default App

