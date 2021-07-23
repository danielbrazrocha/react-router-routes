import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from "../Contexts/LoginContext";


const AdminRoute = ({component: Component, restricted, ...rest}) => {
    const { loggedUser } = useContext(LoginContext);
    return (

        // Show the component only if you area a user with admin privs
        // Otherwise, redirect the user to / page
        <Route {...rest} render={props => (
            loggedUser.kind === 'admin' ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default AdminRoute;
