import  {useEffect, useRef, useState} from 'react';
import classes from './Signup.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";

const Signup = () => {

    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const userRef = useRef()
    const errorRef = useRef()

    const [success, setSuccess] = useState(false)

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatchPassword, setValidMatchPassword] = useState(false)
    const [matchPasswordFocus, setMatchPasswordFocus] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidUser(result)
    }, [user])

    useEffect(() => {
        const result = PASS_REGEX.test(password)
        console.log(result)
        console.log(password)
        setValidPassword(result)

        const match = password === matchPassword;
        setValidMatchPassword(match)
    }, [password, matchPassword])

    useEffect(() => {
        setErrorMessage('')
    }, [user, password, matchPassword])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user)
        const v2 = PASS_REGEX.test(password)
        if (!v1 || !v2) {
            setErrorMessage("Invalid Entry")
            return;
        }
        // Add signup logic here
        console.log('Signup submitted');
        console.log('User:', user);
        console.log('Password:', password);
        setSuccess(true)
    };

    return (<>{success ? (<section>
                <h1>Success!</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>) :

            <section>

                <p ref={errorRef} className={errorMessage ? classes.error_message : classes.off_screen}
                   aria-live='assertive'>
                    {errorMessage}
                </p>
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>
                        Username:
                        <span className={validUser ? classes.valid : classes.hide}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validUser || !user ? classes.hide : classes.invalid}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete='off'
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validUser ? 'false' : 'true'}
                            aria-describedby='uidnote'
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p
                            id='passnote'
                            className={userFocus && user && !validUser ? classes.instructions : classes.off_screen}
                        >
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            4 to 24 characters.<br/>
                            Must begin with a letter.<br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </label>
                    <br/>
                    <label htmlFor='password'>
                        Password:
                        <span className={validPassword ? classes.valid : classes.hide}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validPassword || !password ? classes.hide : classes.invalid}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-invalid={validPassword ? 'false' : 'true'}
                            aria-describedby='passnote'
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <p
                            id='passnote'
                            className={passwordFocus && password && !validPassword ? classes.instructions : classes.off_screen}
                        >
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            8 to 24 characters.
                            <br/>
                            Must include uppercase and lowercase letters, a number and a special character.
                            <br/>
                            Allowed Special Characters: <span aria-label=" exclamation mark">!</span>
                            <span aria-label=" exclamation mark">!</span>
                            <span aria-label=" at symbol">@</span>
                            <span aria-label=" hash tag">#</span>
                            <span aria-label=" dollar sign">$</span>
                            <span aria-label=" percent age">%</span>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </label>
                    <br/>
                    <label htmlFor='confirm-password'>
                        Confirm Password:
                        <span className={validMatchPassword && matchPassword ? classes.valid : classes.hide}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validMatchPassword || !matchPassword ? classes.hide : classes.invalid}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        <input
                            type="password"
                            id="confirm-password"
                            value={matchPassword}
                            onChange={(e) => setMatchPassword(e.target.value)}
                            required
                            aria-invalid={validMatchPassword ? 'false' : 'true'}
                            aria-describedby='confirm-note'
                            onFocus={() => setMatchPasswordFocus(true)}
                            onBlur={() => setMatchPasswordFocus(false)}
                        />
                        <p
                            id='confirm-note'
                            className={matchPasswordFocus && !validMatchPassword ? classes.instructions : classes.off_screen}
                        >
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Must match the first password input field.
                        </p>
                    </label>
                    <br/>
                    <button type="submit"
                            disabled={!validMatchPassword || !validUser || !validPassword}>Signup
                    </button>
                </form>
                <p>Already registered?<br/>
                    <a href='#'> login </a></p>
            </section>}
        </>

    );
};

export default Signup;
