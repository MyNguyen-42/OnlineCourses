import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/SectionCoursesItem';
import SmallRightButton from '../../../common/SmallRightButton';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../../global/Constants';

const SectionCourses = (props) => {
  const {colors} = useTheme();
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

  const onPressSectionItem = () => {
    /* props.navigation.navigate(ScreenKey.ListCourses); */
    /* console.log('test'); */
  };

  const renderListItem = (courses) => {
    return courses.map((id) => (
      <SectionCoursesItem
        item={id}
        navigation={props.navigation}
        /* onPressSectionItem={onPressSectionItem()} */
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[styles.text, {color: colors.text}]}>{props.title}</Text>
        <SmallRightButton
          style={{color: colors.text}}
          text="See all"
          name="navigate-next"
          onPress={() => {
            props.navigation.navigate(ScreenKey.ListCoursesStack);
          }}
        />
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
