import React from 'react';
import {StyleSheet, Text, ScrollView, FlatList, View} from 'react-native';
import ListPathItem from '../Paths/ListPathItem/ListPathItem';
import ListCoursesItem from '../../../Courses/ListCoursesItem/ListCoursesItem';
import ListAuthorsItem from '../Authors/ListAuthorItem/ListAuthorItem';
const All = (props) => {
  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };
  return (
    <ScrollView>
      <Text>Courses</Text>
      <FlatList
        data={props.courseIds}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item}) => (
          <ListCoursesItem navigation={props.navigation} item={item} />
        )}
      />
      <Text>Paths</Text>
      <FlatList
        data={props.pathIds}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item}) => <ListPathItem item={item} />}
      />
      <Text>Authors</Text>
      <FlatList
        data={props.authorIds}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item}) => (
          <ListAuthorsItem navigation={props.navigation} item={item} />
        )}
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
