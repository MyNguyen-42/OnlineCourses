import axios from 'axios';
import {Server} from '../global/Constants';

export const REQUEST_LIST_COURSES_SUCCESSED = 'REQUEST_LIST_COURSES_SUCCESSED';
export const REQUEST_LIST_COURSES_NEW_SUCCESSED =
  'REQUEST_LIST_COURSES_NEW_SUCCESSED';
export const REQUEST_LIST_COURSES_USER_FAVORITE_SUCCESSED =
  'REQUEST_LIST_COURSES_USER_FAVORITE_SUCCESSED';
export const REQUEST_COURSE_DETAIL_SUCCESSED =
  'REQUEST_COURSE_DETAIL_SUCCESSED';
export const UPDATE_LIKE_COURSE_SUCCESSED = 'UPDATE_LIKE_COURSE_SUCCESSED';
export const UPDATE_LIKE_COURSE_FAIL = 'UPDATE_LIKE_COURSE_FAIL';
export const LOAD_USER_FAVORITE_COURSE_SUCCESSED =
  'LOAD_USER_FAVORITE_COURSE_SUCCESSED';
export const LOAD_USER_FAVORITE_COURSE_FAIL = 'LOAD_USER_FAVORITE_COURSE_FAIL';
export const SEARCH_COURSE_SUCCESSED = 'SEARCH_COURSE_SUCCESSED';
export const GET_RATING_COURSE_SUCCESSED = 'GET_RATING_COURSE_SUCCESSED';
export const GET_RATING_COURSE_FAIL = 'GET_RATING_COURSE_FAIL';
export const GET_SEARCH_HISTORY_SUCCESSED = 'GET_SEARCH_HISTORY_SUCCESSED';
export const GET_SEARCH_HISTORY_FAIL = 'GET_SEARCH_HISTORY_FAIL';
export const SEARCH_BY_CATEGORY_SUCCESSED = 'SEARCH_BY_CATEGORY_SUCCESSED';
export const RATING_COURSE_SUCCESSED = 'RATING_COURSE_SUCCESSED';
export const RATING_COURSE_FAIL = 'RATING_COURSE_FAIL';
export const DELETE_SEARCH_HISTORY_SUCCESSED =
  'DELETE_SEARCH_HISTORY_SUCCESSED';
export const DELETE_SEARCH_HISTORY_FAIL = 'DELETE_SEARCH_HISTORY_FAIL';
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
        console.log('Action: ', Response.data.message);
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
    .post(`${Server}/course/top-new`, body, options)
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
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

/* export const loadListCourseUserFavorite = (dispatch) => (userId) => {
  console.log('loadListCourse');
  axios
    .post(Server + '/course/courses-user-favorite-categories', body, options)
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: REQUEST_LIST_COURSES_USER_FAVORITE_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
}; */

/* export const loadCourseDetail = (dispatch) => (token, id) => {
  console.log('loadCourseDetail');
  axios
    .get(Server + '/course/get-course-info?id=' + id, {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: REQUEST_COURSE_DETAIL_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
}; */

export const likeCourse = (dispatch) => (token, courseId) => {
  console.log('UpdateProfile');
  axios
    .post(
      `${Server}/user/like-course`,
      {
        courseId: courseId,
      },
      {headers: {Authorization: `Bearer ${token}`}},
    )
    .then((Response) => {
      console.log('successed updateLikeCourses: ', Response.data);
      dispatch({
        type: UPDATE_LIKE_COURSE_SUCCESSED,
        data: Response.data.likeStatus,
        message: 'update like course success!',
      });
    })
    .catch((Error) => {
      dispatch({
        type: UPDATE_LIKE_COURSE_FAIL,
        data: Error.response.request._response,
        message: 'update like course fail!',
      });
    });
};

export const loadFavoriteCourse = (dispatch) => (token) => {
  console.log('loadFavoriteCourse');
  axios
    .get(`${Server}/user/get-favorite-courses`, {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: LOAD_USER_FAVORITE_COURSE_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};

export const search = (dispatch) => (keyword, token) => {
  return axios
    .post(`${Server}/course/searchV2`, {keyword: keyword, token: token})
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: SEARCH_COURSE_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    });
};

export const getRatingCourse = (dispatch) => (token, courseId) => {
  console.log('getRatingCourse');
  axios
    .get(`${Server}/course/get-rating/${courseId}`, {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: GET_RATING_COURSE_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};

export const getSearchHistory = (dispatch) => (token) => {
  console.log('getCourseHistory');
  axios
    .get(`${Server}/course/search-history`, {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: GET_SEARCH_HISTORY_SUCCESSED,
          data: Response.data.payload.data,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};

export const getCourseDetailWithLesson = (dispatch) => (token) => {
  console.log('getCourseHistory');
  axios
    .get(`${Server}/course/search-history`, {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: GET_SEARCH_HISTORY_SUCCESSED,
          data: Response.data.payload.data,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};

export const getCourseDetail = (dispatch) => (id) => {
  console.log('loadCourseDetail');
  axios
    .get(`${Server}/course/get-course-detail/${id}/null`)
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: REQUEST_COURSE_DETAIL_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};

export const searchByCategory = (dispatch) => (categoryId) => {
  console.log('searchByCategory');
  axios
    .post(`${Server}/search`, {
      keyword: '',
      opt: {
        category: [categoryId],
      },
    })
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: SEARCH_BY_CATEGORY_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};

export const ratingCourse = (dispatch) => (
  token,
  courseId,
  ratingNumber,
  content,
) => {
  console.log('ratingCourse');
  axios
    .post(
      `${Server}/course/rating-course`,
      {
        courseId: courseId,
        formalityPoint: ratingNumber,
        contentPoint: ratingNumber,
        presentationPoint: ratingNumber,
        content: content,
      },
      {headers: {Authorization: `Bearer ${token}`}},
    )
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: RATING_COURSE_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};

export const deleteSearchHistory = (dispatch) => (token, searchId) => {
  console.log('deleteSearchHistory');
  axios
    .delete(`${Server}/course/delete-search-history/${searchId}`, {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then((Response) => {
      if (Response.status === 200) {
        console.log('Action: ', Response.data.message);
        dispatch({
          type: DELETE_SEARCH_HISTORY_SUCCESSED,
          data: Response.data.payload,
        });
      } else {
        console.log('fail');
      }
    })
    .catch((error) => {})
    .finally(() => {});
};
