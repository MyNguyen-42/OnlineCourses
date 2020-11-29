import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ScreenKey} from '../../../../global/Constants';
import ListCoursesItem from '../../../Courses/ListCoursesItem/ListCoursesItem';
import {useTheme} from '@react-navigation/native';

const Courses = (props) => {
  const {colors} = useTheme();
  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  return (
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
      ListHeaderComponent={
        <Text style={[styles.header, {color: colors.text}]}>
          {props.header}
        </Text>
      }
    />
  );
};

export default Courses;

const styles = StyleSheet.create({
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
  header: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
