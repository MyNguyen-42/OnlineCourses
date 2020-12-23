import React, {useReducer} from 'react';
import {reducer} from '../reducer/AccountReducer';
import {updateProfile, loadProfile} from '../action/AccountAction';

const AccountContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  userInfo: null,
  message: null,
  isLoadingUserInfo: true,
};

const AccountProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AccountContext.Provider
      value={{
        state,
        loadProfile: loadProfile(dispatch),
        updateProfile: updateProfile(dispatch),
      }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export {AccountProvider, AccountContext};
