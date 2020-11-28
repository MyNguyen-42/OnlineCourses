import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ScreenKey} from '../../../../global/Constants';
import ListCoursesItem from '../../../Courses/ListCoursesItem/ListCoursesItem';

const Courses = (props) => {
  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  return (
    <View>
      <FlatList
        data={props.courseIds}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item}) => (
          <ListCoursesItem
            navigation={props.navigation}
            item={item}
            onPressListItem={onPressListItem}
          />
        )}
      />
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
});
