import {Link} from 'react-router-dom'
function Home() {
    return (
        <div>
            <Link to="login">login</Link>
            <Link to="signup">SignUp</Link>


        </div>
    );
}

export default Home;