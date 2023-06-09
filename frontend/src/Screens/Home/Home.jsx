import {useNavigate,Link} from 'react-router-dom'
import useAuth from "../../hooks/useAuth.jsx";
import useLogout from "../../hooks/useLogout.jsx";

function Home() {
    const {setAuth} = useAuth();
    const navigate = useNavigate();


    const logout = useLogout();

     const signOut = async()=>{
         await logout();
         navigate('/ ')

     }
    return (
        <section>
            <h2>This is the Home Page</h2>
            <h2>You are Logged in!!!</h2>
            <ol>
                <li>
                    <Link to="/root"> Go to Root</Link>
                </li>
                <li>
                    <Link to="/admin ">Go to Admin</Link>
                </li>
                <li>
                    <Link to="/editor"> Go to Editor</Link>
                </li>
                <li>
                    <Link to="/">Go to Links Page</Link>
                </li>
            </ol>

            <button onClick={signOut}>SignOut</button>
        </section>
    );
}

export default Home;