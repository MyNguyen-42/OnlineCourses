import React, {useReducer} from 'react';
import {reducer} from '../reducer/AuthenticationReducer';
import {
  login,
  logout,
  sendEmailForgetPassword,
} from '../action/AuthenticationAction';

const AuthenticationContext = React.createContext();

const initialState = {
  isAuthenticating: true,
  isAuthenticated: false,
  userInfo: null,
  token: null,
  message: null,
  status: null,
};

const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthenticationContext.Provider
      value={{
        state,
        login: login(dispatch),
        logout: logout(dispatch),
        sendEmailForgetPassword: sendEmailForgetPassword(dispatch),
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
