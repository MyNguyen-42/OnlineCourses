import axios from 'axios';
import {Server} from '../global/Constants';

export const REQUEST_LIST_COURSES_SUCCESSED = 'REQUEST_LIST_COURSES_SUCCESSED';
export const REQUEST_LIST_COURSES_NEW_SUCCESSED =
  'REQUEST_LIST_COURSES_NEW_SUCCESSED';
//nhận vào 1 dispatch, return ra function

const body = {
  page: 1,
  limit: 10,
};

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loadListCourseSell = (dispatch) => () => {
  console.log('loadListCourse');
  axios
    .post(Server + '/course/top-sell', body, options)
    .then((Response) => {
      if (Response.status === 200) {
        console.log(Response.data.message);
        dispatch({
          type: REQUEST_LIST_COURSES_SUCCESSED,
          data: Response.data.payload,
        });
        /* setData(Response.data.payload); */
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {
      /* setIsLoading(false); */
    });
};

export const loadListCourseNew = (dispatch) => () => {
  console.log('loadListCourse');
  axios
    .post(Server + '/course/top-new', body, options)
    .then((Response) => {
      if (Response.status === 200) {
        console.log(Response.data.message);
        dispatch({
          type: REQUEST_LIST_COURSES_NEW_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};
