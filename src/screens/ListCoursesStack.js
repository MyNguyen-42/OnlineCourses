import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenKey} from '../global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import ListCourses from '../components/Courses/ListCourses/ListCourses';
import CourseDetail from '../components/CourseDetail/CourseDetail';
import AuthorDetail from '../components/Main/Browse/AuthorDetail/AuthorDetail';

const Stack = createStackNavigator();

const ListCoursesStack = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenKey.ListCourses}>
      <Stack.Screen
        name={ScreenKey.ListCourses}
        component={ListCourses}
        options={({route}) => ({title: route.params.key})}
      />
      <Stack.Screen
        name={ScreenKey.CourseDetail}
        component={CourseDetail}
        options={({route}) => ({title: route.params.item.title})}
      />
      <Stack.Screen name={ScreenKey.AuthorDetail} component={AuthorDetail} />
    </Stack.Navigator>
  );
};

export default ListCoursesStack;

const styles = StyleSheet.create({});
