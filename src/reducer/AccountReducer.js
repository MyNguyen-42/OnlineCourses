import {
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESSED,
  LOAD_PROFILE_SUCCESSED,
  LOAD_PROFILE_FAIL,
} from '../action/AccountAction';

export const reducer = (prevState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESSED:
      console.log('Account reducer: ', action);
      return {
        ...prevState,
        isAuthenticated: true,
        userInfo: action.data.payload,
        message: action.message,
      };
    case LOAD_PROFILE_FAIL:
      console.log('Account reducer: ', action);
      return {
        ...prevState,
        isAuthenticated: false,
        message: action.message,
      };
    case EDIT_PROFILE_SUCCESSED:
      console.log('Account reducer: ', action);
      return {
        ...prevState,
        isAuthenticated: true,
        /* token: action.data.token, */
        userInfo: action.data.payload,
        message: action.message,
      };
    case EDIT_PROFILE_FAIL:
      console.log('Account reducer: ', action);
      return {
        ...prevState,
        isAuthenticated: false,
        message: action.message,
      };
    default:
      throw new Error();
  }
};
