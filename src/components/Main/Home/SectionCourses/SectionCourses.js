import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/SectionCoursesItem';
import SmallRightButton from '../../../common/SmallRightButton';

const SectionCourses = (props) => {
  const Courses = [
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
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>{props.title}</Text>
        <SmallRightButton text="See all" name="navigate-next" />
      </View>
      <ScrollView horizontal={true}>{renderListItem(Courses)}</ScrollView>
    </View>
  );
};

export default SectionCourses;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
});
