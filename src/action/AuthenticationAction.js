import axios from 'axios';
import {Server} from '../global/Constants';

export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const EDIT_PROFILE_SUCCESSED = 'EDIT_PROFILE_SUCCESSED';
export const EDIT_PROFILE_FAIL = 'EDIT_PROFILE_FAIL';

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
      /* console.log('error', error.response.request._response); */
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

export const updateProfile = (dispatch) => (
  newName,
  avatar,
  newPhone,
  token,
) => {
  console.log('UpdateProfile');
  axios
    .put(
      Server + '/user/update-profile',
      {
        name: newName,
        avatar: avatar,
        phone: newPhone,
      },
      {headers: {Authorization: `Bearer ${token}`}},
    )
    .then((Response) => {
      console.log('successed updateProfile: ', Response.data);
      dispatch({
        type: EDIT_PROFILE_SUCCESSED,
        data: Response.data,
        message: 'Edit profile success!',
      });
    })
    .catch((Error) => {
      dispatch({
        type: EDIT_PROFILE_FAIL,
        data: Error.response.request._response,
        message: 'Edit profile fail!',
      });
    });
};
