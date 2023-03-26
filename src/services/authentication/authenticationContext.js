import React, { useState, createContext } from "react";
import { loginRequest } from "./authenticationService";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    loginRequest(email, password)
      .then((u) => {
        setIsAuthenticated(true);
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
