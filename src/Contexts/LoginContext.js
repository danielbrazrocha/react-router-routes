import React, { createContext, useEffect, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedUser(user);
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
