import {
  BUY_FREE_COURSE_SUCCESSED,
  DELETE_SEARCH_HISTORY_SUCCESSED,
  GET_CATEGORY_ALL_SUCCESSED,
  GET_RATING_COURSE_SUCCESSED,
  GET_SEARCH_HISTORY_SUCCESSED,
  LOAD_USER_FAVORITE_COURSE_SUCCESSED,
  RATING_COURSE_FAIL,
  RATING_COURSE_SUCCESSED,
  REQUEST_COURSE_DETAIL_SUCCESSED,
  REQUEST_LIST_COURSES_NEW_SUCCESSED,
  REQUEST_LIST_COURSES_SUCCESSED,
  REQUEST_TOP_RATE_SUCCESSED,
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
    case RATING_COURSE_SUCCESSED:
      return {
        ...state,
        isLoadingRatingCourse: false,
      };
    /* case RATING_COURSE_FAIL:
      return {
        ...state,
        isLoadingRatingCourse: false,
      }; */
    case DELETE_SEARCH_HISTORY_SUCCESSED: {
      return {...state};
    }
    case GET_CATEGORY_ALL_SUCCESSED:
      return {
        ...state,
        dataCategoryAll: action.data,
        isLoadingCategoryAll: false,
      };
    case REQUEST_TOP_RATE_SUCCESSED:
      return {
        ...state,
        dataTopRate: action.data,
        isLoadingTopRate: false,
      };
    case BUY_FREE_COURSE_SUCCESSED:
      return {
        ...state,
        isLoadingBuyCourseFree: false,
      };
    default:
      throw new Error();
  }
};
