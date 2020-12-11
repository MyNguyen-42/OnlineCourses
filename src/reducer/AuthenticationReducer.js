import {LOGIN_FAIL, LOGIN_SUCCESSED} from '../action/AuthenticationAction';

export const reducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSED:
      console.log(action);
      return {
        ...prevState,
        isAuthenticated: true,
        token: action.data.token,
        userInfo: action.data.userInfo,
        message: action.data.message,
      };
    case LOGIN_FAIL:
      console.log(action);
      return {
        ...prevState,
        isAuthenticated: false,
        /* message: action.data.message, */
      };
    default:
      throw new Error();
  }
};
