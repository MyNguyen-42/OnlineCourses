import React, {useReducer} from 'react';
import {reducer} from '../reducer/CourseReducer';
import {
  loadListCourseSell,
  loadListCourseNew,
  loadCourseDetail,
  likeCourse,
  loadFavoriteCourse,
  search,
  getRatingCourse,
  getSearchHistory,
  getCourseDetail,
  searchByCategory,
} from '../action/CourseAction';

const CourseContext = React.createContext();

const initialState = {
  data: null,
  isLoading: true,
  isError: false,
  dataCoursesNew: null,
  isLoadingCoursesNew: true,
  isErrorCoursesNew: false,
  dataCourseDetail: null,
  isLoadingCourseDetail: true,
  isErrorCoursesDetail: false,
  isLikeCourse: false,
  isLoadingLikeCourse: true,
  dataUserFavoriteCourse: null,
  isLoadingUserFavoriteCourse: true,
  isErrorUserFavoriteCourse: false,
  isLoadingSearch: true,
  currentSearchText: '',
  recentSearches: [],
  searchResult: null,
  ratingCourse: null,
  isGetRatingCourse: true,
  isGetRatingCourseError: false,
  searchHistories: null,
  isLoadingSearchHistories: true,
  searchByCategoryResult: null,
  isLoadingSearchByCategory: true,
};

const CourseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CourseContext.Provider
      value={{
        state,
        loadListCourseSell: loadListCourseSell(dispatch),
        loadListCourseNew: loadListCourseNew(dispatch),
        /* loadCourseDetail: loadCourseDetail(dispatch), */
        likeCourse: likeCourse(dispatch),
        loadFavoriteCourse: loadFavoriteCourse(dispatch),
        search: search(dispatch),
        getRatingCourse: getRatingCourse(dispatch),
        getSearchHistory: getSearchHistory(dispatch),
        getCourseDetail: getCourseDetail(dispatch),
        searchByCategory: searchByCategory(dispatch),
      }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export {CourseProvider, CourseContext};
