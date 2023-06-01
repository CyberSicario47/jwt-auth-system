import {useState, useRef, useEffect, useContext} from 'react';
import AuthContext from "../../context/AuthProvider.jsx";
import axios from "../../api/axios"
import classes from './Login.module.css'; // Import the CSS file for styling


const LOGIN_URL = '/auth'
const Login = () => {

    const errRef = useRef()
    const userRef = useRef()
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const {setAuth} = useContext(AuthContext)

    useEffect(() => {
        userRef.current?.focus()
    }, [])

    useEffect(() => {
        setErrMsg("")
    }, [user, password])

    const handleSubmit = async (e) => {
        console.log('this is handle submit')
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
            // setSuccess(true)

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
        <>
            {success ? (
                <section>

                    <h1>You are Logged In</h1>
                    <br/>
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : <section>
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
            </section>}
        </>


    );
};

export default Login;
