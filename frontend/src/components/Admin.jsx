import Users from "./Users.jsx";
import {Link} from "react-router-dom";
function Admin(props) {
    return (
        <section>
            <h1>Admin page</h1>
            <br/>
            <Users/>
            <br/>
            <div className="flexGrow">
                <Link to='/'>Home</Link>
            </div>
        </section>
    );
}

export default Admin;