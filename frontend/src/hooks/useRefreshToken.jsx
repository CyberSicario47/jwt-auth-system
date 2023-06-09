import useAuth from "./useAuth.jsx";
import instance from "../api/axios.js";
const UseRefreshToken=()=> {

    const {setAuth} = useAuth();

    const refresh = async() =>{
        const response = await instance.get('/refresh',{
            withCredentials: true
        });
        setAuth(prev =>{
            console.log(JSON.stringify(prev))
            console.log(response.data.accessToken);
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken
    }

    return refresh;
}

export default UseRefreshToken;