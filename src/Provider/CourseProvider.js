import React, {useReducer} from 'react';
import {reducer} from '../reducer/CourseReducer';
import {loadListCourseSell, loadListCourseNew} from '../action/CourseAction';

const CourseContext = React.createContext();

const initialState = {
  data: null,
  isLoading: true,
  isError: false,
  dataCoursesNew: null,
  isLoadingCoursesNew: true,
  isErrorCoursesNew: false,
};

const CourseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CourseContext.Provider
      value={{
        state,
        loadListCourseSell: loadListCourseSell(dispatch),
        loadListCourseNew: loadListCourseNew(dispatch),
      }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export {CourseProvider, CourseContext};
