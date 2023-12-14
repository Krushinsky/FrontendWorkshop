import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MyProfile from './MyProfile';

const Logout = () =>{

    const { logout, isAuthenticated } = useAuth0();
    
    return(
        isAuthenticated && (
        <div>
            <button onClick={() => logout()}>
                Log Out
            </button>
            <MyProfile/>
            
           
        </div>
    ))
}

export default Logout;