import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from "../Contexts/LoginContext";


const PrivateRoute = ({component: Component, restricted, ...rest}) => {
    const { loggedUser } = useContext(LoginContext);
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to / page
        <Route {...rest} render={props => (
            loggedUser ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;
