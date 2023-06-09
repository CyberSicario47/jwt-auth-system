import {Link} from "react-router-dom";

const Links = () => {
    return (
        <section>
            <h2>This includes all the Links of the site</h2>
            <ol>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/signup">SignUp</Link>
                </li>
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
                    <Link to="/links">Go to Links Page</Link>
                </li>
            </ol>
        </section>
    );
};

export default Links;