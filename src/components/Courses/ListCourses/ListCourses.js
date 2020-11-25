import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ScreenKey} from '../../../global/Constants';
import ListCoursesItem from '../ListCoursesItem/ListCoursesItem';

const ListCourses = (props) => {
  let Courses = props.route.params.Courses;
  /* console.log(props.route.params.Courses); */

  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  return (
    <View>
      <FlatList
        horizontal={false}
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
