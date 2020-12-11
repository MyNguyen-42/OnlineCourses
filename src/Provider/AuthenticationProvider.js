import React, {useReducer} from 'react';
import {reducer} from '../reducer/AuthenticationReducer';
import {login} from '../action/AuthenticationAction';

const AuthenticationContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  userInfo: null,
  token: null,
  message: null,
};

const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthenticationContext.Provider
      value={{
        state,
        login: login(dispatch),
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
