import {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import useRefreshToken from "../hooks/useRefreshToken.jsx";

const PersistLogin = () => {

    const [isLoading, setIsLoading] = useState(false)
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    useEffect(()=>{
        const verifyRefreshToken = async () =>{
            try{
                await refresh()
            }catch (e) {
                console.log(e)
            }finally {
                setIsLoading(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken() :setIsLoading(false)
    },[])

    useEffect(()=>{
        console.log(`isLoading: ${isLoading}`)
        console.log(`accessToken: ${JSON.stringify(auth?.accessToken)}`)
    },[isLoading])

    return (
        <>
            {
                isLoading ? <p>.......Loading</p>:<Outlet/>
            }

        </>
    );
}

export default PersistLogin;