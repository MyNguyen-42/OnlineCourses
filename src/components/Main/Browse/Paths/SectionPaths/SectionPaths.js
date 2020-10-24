import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SectionPathsItem from '../SectionPathsItem/SectionPathsItem';

const SectionPaths = (props) => {
  const courses = [
    {
      id: 1,
      title: 'Configuration Management Using Puppet',
      totalCourses: 3,
    },
    {
      id: 2,
      title: 'Pluralsight LIVE 2020',
      totalCourses: 94,
    },
    {
      id: 3,
      title: 'Windows SerVer Administation Concepts',
      totalCourses: 6,
    },
  ];

  const renderListItem = (courses) => {
    return courses.map((id) => <SectionPathsItem item={id} />);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <ScrollView horizontal={true}>{renderListItem(courses)}</ScrollView>
    </View>
  );
};

export default SectionPaths;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    margin: 5,
    fontSize: 20,
  },
});
