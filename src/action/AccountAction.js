import axios from 'axios';
import {Server} from '../global/Constants';

export const LOAD_PROFILE_SUCCESSED = 'LOAD_PROFILE_SUCCESSED';
export const LOAD_PROFILE_FAIL = 'LOAD_PROFILE_FAIL';
export const EDIT_PROFILE_SUCCESSED = 'EDIT_PROFILE_SUCCESSED';
export const EDIT_PROFILE_FAIL = 'EDIT_PROFILE_FAIL';

//nhận vào 1 dispatch, return ra function

export const loadProfile = (dispatch) => (token) => {
  console.log('loadProfile', token);
  axios
    .get(Server + '/user/me', {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then((Response) => {
      console.log('successed loadProfile: ', Response.data);
      dispatch({
        type: LOAD_PROFILE_SUCCESSED,
        data: Response.data,
        message: 'load profile success!',
      });
    })
    .catch((Error) => {
      dispatch({
        type: LOAD_PROFILE_FAIL,
        data: Error.response.request._response,
        message: 'load profile fail!',
      });
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
