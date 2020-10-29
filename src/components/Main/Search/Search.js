import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListCourse from '../../Courses/ListCourses/ListCourses';

const Search = () => {
  const SearchView = () => {
    return (
      <>
        <View style={styles.search}>
          <Ionicons name="md-search-outline" style={styles.icon} />
          <TextInput style={styles.textInput} placeholder="Search" />
          <Ionicons name="close-circle-outline" style={styles.icon} />
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.line}>
            <Text> All</Text>
          </View>
          <View>
            <Text> Courses</Text>
          </View>
          <View>
            <Text> Paths</Text>
          </View>
          <View>
            <Text> Author</Text>
          </View>
        </View>
        <ListCourse />
      </>
    );
  };

  return <SearchView />;
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
  },
  icon: {
    margin: 15,
    fontSize: 20,
  },
  textInput: {
    flex: 1,
  },
  buttonGroup: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
  },
});
