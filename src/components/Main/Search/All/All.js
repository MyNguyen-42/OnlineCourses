import React from 'react';
import {StyleSheet, Text, ScrollView, FlatList, View} from 'react-native';
/* import ListPathItem from '../Paths/ListPathItem/ListPathItem';
import ListCoursesItem from '../../../Courses/ListCoursesItem/ListCoursesItem';
import ListAuthorsItem from '../Authors/ListAuthorItem/ListAuthorItem'; */
import Paths from '../Paths/Paths';
import Courses from '../Courses/Courses';
import Authors from '../Authors/Authors';

const All = (props) => {
  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };
  return (
    <ScrollView>
      {/* <FlatList
        data={props.courseIds.slice(0, 4)}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item}) => (
          <ListCoursesItem navigation={props.navigation} item={item} />
        )}
        ListHeaderComponent={<Text>Courses</Text>}
      /> */}
      <Courses
        courseIds={props.courseIds.slice(0, 4)}
        navigation={props.navigation}
        header="Paths"
      />
      {/* <FlatList
        data={props.pathIds.slice(0, 4)}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item}) => <ListPathItem item={item} />}
        ListHeaderComponent={<Text>Paths</Text>}
      /> */}
      <Paths
        pathIds={props.pathIds.slice(0, 4)}
        navigation={props.navigation}
        header="Paths"
      />
      {/* <Text>Authors</Text>
      <FlatList
        data={props.authorIds.slice(0, 4)}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item}) => (
          <ListAuthorsItem navigation={props.navigation} item={item} />
        )}
      /> */}
      <Authors
        authorIds={props.authorIds.slice(0, 4)}
        navigation={props.navigation}
        header="Authors"
      />
    </ScrollView>
  );
};

export default All;

const styles = StyleSheet.create({
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
});
