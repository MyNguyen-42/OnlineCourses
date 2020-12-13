import axios from 'axios';
import {Server} from '../global/Constants';

export const REGISTER_SUCCESSED = 'REGISTER_SUCCESSED';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const EDIT_PROFILE_SUCCESSED = 'EDIT_PROFILE_SUCCESSED';
export const EDIT_PROFILE_FAIL = 'EDIT_PROFILE_FAIL';
export const LOGOUT = 'LOGOUT';
export const SEND_EMAIL_FORGET_PASSWORD_SUCCESSED =
  'SEND_EMAIL_FORGET_PASSWORD_SUCCESSED';
export const SEND_EMAIL_FORGET_PASSWORD_FAIL =
  'SEND_EMAIL_FORGET_PASSWORD_FAIL';

//nhận vào 1 dispatch, return ra function
export const login = (dispatch) => (username, password) => {
  console.log('Login Action');
  axios
    .post(Server + '/user/login', {
      email: username,
      password: password,
    })
    .then((Response) => {
      console.log('Login Action Response: ', Response.status);
      if (Response.status === 200) {
        dispatch({
          type: LOGIN_SUCCESSED,
          data: Response.data,
          message: 'Login success!',
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          message: 'Invalid user name or password!',
        });
      }
    })
    .catch((error) => {
      dispatch({type: LOGIN_FAIL, message: 'Invalid user name or password!'});
    });
};

export const register = (dispatch) => (username, email, phone, password) => {
  console.log('Register');
  axios
    .post(Server + '/user/register', {
      name: username,
      email: email,
      phone: phone,
      password: password,
    })
    .then((Response) => {
      console.log('RegisterAction Response: ', Response.status);
      dispatch({
        type: REGISTER_SUCCESSED,
        message: 'Create account successfully!',
        status: Response.status,
      });
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_FAIL,
        message: 'Email or phone number is already in use!',
        status: error.response.status,
      });
    });
};

export const sendEmailForgetPassword = (dispatch) => (email) => {
  console.log('Send Email Forget Password');
  axios
    .post(Server + '/user/forget-pass/send-email', {
      email: email,
    })
    .then((Response) => {
      console.log('Send mail Forget Password Response: ', Response.status);
      dispatch({
        type: SEND_EMAIL_FORGET_PASSWORD_SUCCESSED,
        message: 'Email was send successfully!',
        status: Response.status,
      });
    })
    .catch((error) => {
      /* console.log(
        'Send mail Forget Password Response: ',
        error.response.status,
      ); */
      dispatch({
        type: SEND_EMAIL_FORGET_PASSWORD_FAIL,
        message: 'Email is not on system',
        status: error.response.status,
      });
    });
};

export const logout = (dispatch) => () => {
  console.log('Logout');
  dispatch({type: LOGOUT, message: 'Logout!'});
};
