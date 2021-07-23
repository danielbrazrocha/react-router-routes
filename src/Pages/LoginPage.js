import React, { useContext } from 'react'
import LogoutBtn from '../Components/LogoutBtn';
import PageList from '../Components/PageList';
import { LoginContext } from "../Contexts/LoginContext";

export default function LoginPage() {
    const { loggedUser, setLoggedUser } = useContext(LoginContext);

    const LoginAsAdmin = () => {
        const loggedUserData = {
            name: "Administrator",
            kind: "admin"
        };
        const token = "fakeJWTToken";

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(loggedUserData));
        setLoggedUser(loggedUserData);
    }

    const LoginAsUser = () => {
        const loggedUserData = {
            name: "User",
            kind: "user"            
        };
        const token = "fakeJWTToken";

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(loggedUserData));
        setLoggedUser(loggedUserData);
    }


      
    return (
        <div>
            <h1>This is our LoginPage</h1>
            <button onClick={LoginAsUser}>LoginAsUser</button>
            <button onClick={LoginAsAdmin}>LoginAsAdmin</button>
            <LogoutBtn />

            {loggedUser ? <h3>You are logged as <span style={{fontSize: 26}}>{loggedUser.kind}</span>.</h3> :
            <h3>You are not authenticated.</h3> }

            <PageList />

        </div>
    )
}
