import {
  LOGIN_FAIL,
  LOGIN_SUCCESSED,
  LOGOUT,
  SEND_EMAIL_FORGET_PASSWORD_FAIL,
  SEND_EMAIL_FORGET_PASSWORD_SUCCESSED,
} from '../action/AuthenticationAction';

export const reducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSED:
      console.log('authentication reducer: ', action);
      return {
        ...prevState,
        isAuthenticated: true,
        token: action.data.token,
        userInfo: action.data.userInfo,
        message: action.message,
      };
    case LOGIN_FAIL:
      console.log('authentication reducer: ', action);
      return {
        ...prevState,
        isAuthenticated: false,
        message: action.message,
      };
    case LOGOUT:
      console.log('authentication reducer: logout');
      return {
        ...prevState,
        isAuthenticated: false,
        token: null,
        userInfo: null,
        message: null,
      };
    case SEND_EMAIL_FORGET_PASSWORD_SUCCESSED:
      console.log('authentication reducer: ', action);
      return {
        ...prevState,
        status: action.status,
        message: action.message,
      };
    case SEND_EMAIL_FORGET_PASSWORD_FAIL:
      console.log('authentication reducer: ', action);
      return {
        ...prevState,
        status: action.status,
        message: action.message,
      };

    default:
      throw new Error();
  }
};
