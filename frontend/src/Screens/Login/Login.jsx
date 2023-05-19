import {useState} from 'react';
import classes from './Login.module.css'; // Import the CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login submitted');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className={classes.login_outLine}>
            <div className={classes.login_container}>
                <h2 className={classes.login_heading}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label className={classes.login_label}>
                        Email:
                        <input className={classes.login_input} type="email" value={email} onChange={handleEmailChange}/>
                    </label>
                    <br/>
                    <label className={classes.login_label}>
                        Password:
                        <input className={classes.login_input} type="password" value={password}
                               onChange={handlePasswordChange}/>
                    </label>
                    <br/>
                    <button className={classes.login_button} type="submit">Login</button>
                </form>
            </div>
        </div>

    );
};

export default Login;
