import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoriteContext = React.createContext();

const FavoriteProvider = (props) => {
  const [favoriteCourses, setFavoriteCourses] = useState(new Set());

  /* const addFavoriteCourse = (courseId) => {
    console.log('addFavoriteCourse', courseId);
    var newSet = new Set(favoriteCourses.add(courseId));
    setFavoriteCourses(newSet);
  };

  const removeFavoriteCourse = (courseId) => {
    console.log('removeFavoriteCourse', courseId);
    favoriteCourses.delete(courseId);
    var newSet = new Set(favoriteCourses);
    setFavoriteCourses(newSet);
  }; */
  const addFavoriteCourse = (item) => {
    console.log('addFavoriteCourse', item.id);
    var newSet = new Set(favoriteCourses.add(item));
    setFavoriteCourses(newSet);
  };

  const removeFavoriteCourse = (item) => {
    console.log('removeFavoriteCourse', item.id);
    favoriteCourses.delete(item);
    var newSet = new Set(favoriteCourses);
    setFavoriteCourses(newSet);
  };

  const removeAllFavoriteCourses = () => {
    console.log('removeAllFavoriteCourses');
    favoriteCourses.clear();
    var newSet = new Set(favoriteCourses);
    setFavoriteCourses(newSet);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteCourses,
        setFavoriteCourses,
        addFavoriteCourse,
        removeFavoriteCourse,
        removeAllFavoriteCourses,
      }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export {FavoriteProvider, FavoriteContext};
