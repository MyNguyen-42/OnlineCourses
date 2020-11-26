import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

const AuthenticationContext = React.createContext();

const AuthenticationProvider = (props) => {
  const [authentication, setAuthentication] = useState();
  return (
    <AuthenticationContext.Provider
      value={{
        authentication,
        setAuthentication,
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};

const FavoritesContext = React.createContext();

const FavoritesProvider = (props) => {
  const [favoriteCourses, setFavoriteCourses] = useState(new Set());

  const addFavoriteCourse = (courseId) => {
    console.log('addFavoriteCourse', courseId);
    var newSet = new Set(favoriteCourses.add(courseId));
    setFavoriteCourses(newSet);
  };

  const removeFavoriteCourse = (courseId) => {
    console.log('removeFavoriteCourse', courseId);
    favoriteCourses.delete(courseId);
    var newSet = new Set(favoriteCourses);
    setFavoriteCourses(newSet);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteCourses,
        setFavoriteCourses,
        addFavoriteCourse,
        removeFavoriteCourse,
      }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export {FavoritesProvider, FavoritesContext};
