import {
  GET_RATING_COURSE_SUCCESSED,
  GET_SEARCH_HISTORY_SUCCESSED,
  LOAD_USER_FAVORITE_COURSE_SUCCESSED,
  REQUEST_COURSE_DETAIL_SUCCESSED,
  REQUEST_LIST_COURSES_NEW_SUCCESSED,
  REQUEST_LIST_COURSES_SUCCESSED,
  SEARCH_BY_CATEGORY_SUCCESSED,
  SEARCH_COURSE_SUCCESSED,
  UPDATE_LIKE_COURSE_SUCCESSED,
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
    case REQUEST_COURSE_DETAIL_SUCCESSED:
      return {
        ...state,
        dataCourseDetail: action.data,
        isLoadingCourseDetail: false,
      };
    case UPDATE_LIKE_COURSE_SUCCESSED:
      return {
        ...state,
        isLikeCourse: action.data,
        isLoadingLikeCourse: false,
      };
    case LOAD_USER_FAVORITE_COURSE_SUCCESSED:
      return {
        ...state,
        dataUserFavoriteCourse: action.data,
        isLoadingUserFavoriteCourse: false,
      };
    case SEARCH_COURSE_SUCCESSED:
      return {...state, searchResult: action.data, isLoadingSearch: false};
    case GET_RATING_COURSE_SUCCESSED:
      return {...state, ratingCourse: action.data, isGetRatingCourse: false};
    case GET_SEARCH_HISTORY_SUCCESSED:
      return {
        ...state,
        searchHistories: action.data,
        isLoadingSearchHistories: false,
      };
    case SEARCH_BY_CATEGORY_SUCCESSED:
      return {
        ...state,
        searchByCategoryResult: action.data,
        isLoadingSearchByCategory: false,
      };
    default:
      throw new Error();
  }
};
