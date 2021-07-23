import React, { useContext } from 'react';
import { LoginContext } from "../Contexts/LoginContext";

export default function LogoutBtn() {
    const { setLoggedUser } = useContext(LoginContext);
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLoggedUser(null);
        window.location.reload();
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}
