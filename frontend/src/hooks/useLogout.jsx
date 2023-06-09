import UseAuth from "./useAuth.jsx";
import privateInstance from "../api/axios.js";

const UseLogout = () => {

    const {setAuth} = UseAuth()

    const logout = async()=>{
        setAuth({})

        try {
            const response = await privateInstance('/logout',{
                withCredentials: true
            });
        } catch (e) {
            console.log(e)
        }
    }

    return logout
};

export default UseLogout;