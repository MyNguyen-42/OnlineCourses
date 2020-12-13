import React, {useReducer} from 'react';
import {reducer} from '../reducer/AuthenticationReducer';
import {login, updateProfile} from '../action/AuthenticationAction';

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
        updateProfile: updateProfile(dispatch),
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
