import {useState, useRef, useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "../../api/axios"
import classes from './Login.module.css'; // Import the CSS file for styling
import useAuth from "../../hooks/useAuth.jsx";

const LOGIN_URL = '/auth'
const Login = () => {

    const errRef = useRef()
    const userRef = useRef()
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        userRef.current?.focus()
    }, [])

    useEffect(() => {
        setErrMsg("")
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify(({user, password})),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data))

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;

            setAuth({user, password, roles, accessToken})
            setUser('')
            setPassword('')
            navigate(from, {replace: true});
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response')
            } else if (error.response) {
                setErrMsg("Missing username or Password")
            } else if (error.response?.status === 401) {
                setErrMsg("Unauthorized")
            } else {
                setErrMsg("Login Failed")
            }
            console.log(error)
            errRef.current?.focus();
        }
    }

    return (
         <section>
                <p ref={errRef} className={errMsg ? "error_message" : "off_screen"} aria-live="assertive">
                    {errMsg}
                </p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <br/>
                    <button type="submit">Sign In
                    </button>
                </form>
                <p>
                    Need an Account?<br/>
                    <span className="line">
                    <a href="#">Sign up</a>
                </span>
                </p>
            </section>


    );
};

export default Login;
