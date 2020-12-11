import axios from 'axios';
import {Server} from '../global/Constants';

export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGIN_FAIL = 'LOGIN_FAIL';

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
        dispatch({type: LOGIN_SUCCESSED, data: Response.data});
      } else {
        dispatch({type: LOGIN_FAIL, data: Response.data});
      }
    })
    .catch((error) => {
      dispatch({type: LOGIN_FAIL, data: error.response.request._response});
      console.log('error', error.response.request._response);
    });
};

export const Register = (dispatch) => (username, email, phone, password) => {
  console.log('Register');
  axios
    .post(Server + '/user/register', {
      username: username,
      email: email,
      phone: phone,
      password: password,
    })
    .then((Response) => {
      console.log('RegisterAction Response: ', Response.status);
    });
};
