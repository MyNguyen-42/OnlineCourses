import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

const FavoriteContext = React.createContext();

const FavoriteProvider = (props) => {
  const [favoriteCourses, setFavoriteCourses] = useState(new Set());
  const [downloadCourses, setDownloadCourses] = useState(new Set());

  const addFavoriteCourse = (item) => {
    console.log('addFavoriteCourse', item.id);
    var newSet = new Set(favoriteCourses.add(item));
    setFavoriteCourses(newSet);
  };

  const addDownloadCourse = (item) => {
    console.log('addDownloadCourse', item.id);
    var newSet = new Set(downloadCourses.add(item));
    setDownloadCourses(newSet);
  };

  const removeFavoriteCourse = (item) => {
    console.log('removeFavoriteCourse', item.id);
    favoriteCourses.delete(item);
    var newSet = new Set(favoriteCourses);
    setFavoriteCourses(newSet);
  };

  const removeDownloadCourse = (item) => {
    console.log('removeDownloadCourse', item.id);
    downloadCourses.delete(item);
    var newSet = new Set(downloadCourses);
    setDownloadCourses(newSet);
  };

  const removeAllFavoriteCourses = () => {
    Alert.alert(
      'Are You Sure?',
      "You won't be able to revert this!",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log('removeAllFavoriteCourses');
            favoriteCourses.clear();
            var newSet = new Set(favoriteCourses);
            setFavoriteCourses(newSet);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const removeAllDownloadCourses = () => {
    Alert.alert(
      'Are You Sure?',
      "You won't be able to revert this!",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log('removeAllDownloadCourses');
            downloadCourses.clear();
            var newSet = new Set(downloadCourses);
            setDownloadCourses(newSet);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const countDownloadCourses = () => {
    return downloadCourses.size;
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteCourses,
        setFavoriteCourses,
        addFavoriteCourse,
        removeFavoriteCourse,
        removeAllFavoriteCourses,
        downloadCourses,
        setDownloadCourses,
        addDownloadCourse,
        removeDownloadCourse,
        removeAllDownloadCourses,
        countDownloadCourses,
      }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export {FavoriteProvider, FavoriteContext};
