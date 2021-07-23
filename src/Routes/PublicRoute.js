import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from "../Contexts/LoginContext";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const { loggedUser } = useContext(LoginContext);
    return (
        // restrict is only applicable if you cant see a route after login (inapplicable here)
        <Route {...rest} render={props => (
            loggedUser && restricted ?
                <Redirect to="/landing" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
