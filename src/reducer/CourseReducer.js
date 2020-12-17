import {
  REQUEST_LIST_COURSES_NEW_SUCCESSED,
  REQUEST_LIST_COURSES_SUCCESSED,
} from '../action/CourseAction';

export const reducer = (state, action) => {
  switch (action.type) {
    case REQUEST_LIST_COURSES_SUCCESSED:
      return {...state, data: action.data, isLoading: false};
    case REQUEST_LIST_COURSES_NEW_SUCCESSED:
      return {
        ...state,
        dataCoursesNew: action.data,
        isLoadingCoursesNew: false,
      };
    default:
      throw new Error();
  }
};
