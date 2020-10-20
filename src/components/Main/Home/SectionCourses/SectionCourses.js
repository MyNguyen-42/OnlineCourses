import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SectionCoursesItem from '../SectionCoursesItem/SectionCoursesItem';

const SectionCourses = (props) => {
  const courses = [
    {
      id: 1,
      title: 'React Native',
      author: 'Hai Pham',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '30 hours',
    },
    {
      id: 2,
      title: 'ios',
      author: 'Huy Nguyen',
      level: 'Beginner',
      released: 'May 6, 2020',
      duration: '25 hours',
    },
    {
      id: 3,
      title: 'ios',
      author: 'Huy Nguyen',
      level: 'Beginner',
      released: 'May 6, 2020',
      duration: '25 hours',
    },
  ];

  const renderListItem = (courses) => {
    return courses.map((id) => <SectionCoursesItem item={id} />);
  };

  return (
    <View>
      <View>
        <Text>{props.title}</Text>
      </View>
      <ScrollView horizontal={true}>{renderListItem(courses)}</ScrollView>
    </View>
  );
};

export default SectionCourses;
