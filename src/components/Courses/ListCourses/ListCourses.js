import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ScreenKey} from '../../../global/Constants';
import ListCoursesItem from '../ListCoursesItem/ListCoursesItem';
import {recommendedCourses} from '../../../models/CourseModel';

const ListCourses = (props) => {
  /* const courses = [
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
      title: 'Reactjs',
      author: 'Huy Nguyen',
      level: 'Beginner',
      released: 'May 6, 2020',
      duration: '25 hours',
    },
    {
      id: 4,
      title: 'Angular',
      author: 'Hai Pham',
      level: 'Beginner',
      released: 'May 6, 2020',
      duration: '25 hours',
    },
    {
      id: 5,
      title: 'Vuejs',
      author: 'Huy Nguyen',
      level: 'Beginner',
      released: 'May 6, 2020',
      duration: '25 hours',
    },
    {
      id: 6,
      title: 'ios',
      author: 'Huy Nguyen',
      level: 'Beginner',
      released: 'May 6, 2020',
      duration: '25 hours',
    },
    {
      id: 7,
      title: 'Android',
      author: 'Truong Phuoc Loc',
      level: 'Beginner',
      released: 'May 6, 2020',
      duration: '25 hours',
    },
  ]; */
  let Courses = props.route.params.courses;
  console.log(Courses);

  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={Courses}
        renderItem={({item}) => (
          <ListCoursesItem
            item={item}
            navigation={props.navigation}
            onPressListItem={onPressListItem}
          />
        )}
      />
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
});
