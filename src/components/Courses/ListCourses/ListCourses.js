import React, {useEffect, useReducer, useContext} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {ScreenKey, Server} from '../../../global/Constants';
import ListCoursesItem from '../ListCoursesItem/ListCoursesItem';
import axios from 'axios';
import {CourseContext} from '../../../Provider/CourseProvider';

const ListCourses = (props) => {
  /* let Courses = props.route.params.Courses; */
  const CoursesContext = useContext(CourseContext);
  console.log(CourseContext);

  useEffect(() => {
    console.log(props);
    CoursesContext.loadListCourseSell();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  return (
    <View>
      {CoursesContext.state.isLoading ? (
        <ActivityIndicator size="large" color="#8e44ad" />
      ) : (
        <FlatList
          horizontal={false}
          ItemSeparatorComponent={FlatListItemSeparator}
          data={CoursesContext.state.data}
          renderItem={({item}) => (
            <ListCoursesItem
              item={item}
              navigation={props.navigation}
              onPressListItem={onPressListItem}
            />
          )}
        />
      )}
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
