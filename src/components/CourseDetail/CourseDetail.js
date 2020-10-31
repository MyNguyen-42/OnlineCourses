import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CircleButton from '../common/CircleButton';
import {FilledButton} from '../common/FilledButton';
import Tag from '../common/Tag';
import ListCourses from '../Courses/ListCourses/ListCourses';
const CourseDetail = () => {
  return (
    <ScrollView>
      <View style={styles.video}>
        <Image
          source={require('../../../assets/reactnative.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>React: The Big Picture</Text>
      <Tag title="Cory House" style={styles.author} />
      <View style={styles.containerLevelRelease}>
        <Text>Beginner .</Text>
        <Text> May 6, 2020</Text>
      </View>
      <View style={styles.containerButton}>
        <CircleButton title="Bookmarked" name="bookmark-multiple" />
        <CircleButton title="Add to channel" name="text-box-plus-outline" />
        <CircleButton title="Downloaded" name="download-circle" />
      </View>
      <Text style={styles.description}>Description</Text>
      <View style={styles.containerButtonSmall}>
        <FilledButton
          name="file-multiple-outline"
          title={'Related paths & courses'}
          style={styles.buttonSmall}
          onPress={() => {}}
        />
        <FilledButton
          name="checkbox-multiple-marked-circle-outline"
          title={'Take a learning check'}
          style={styles.buttonSmall}
          onPress={() => {}}
        />
      </View>
      <View style={styles.buttonGroup}>
        <View style={styles.line}>
          <Text> Contents</Text>
        </View>
        <View>
          <Text> Transcript</Text>
        </View>
      </View>
      <ListCourses />
    </ScrollView>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  video: {
    height: 200,
    width: '100%',
    backgroundColor: 'gray',
  },
  image: {
    height: 200,
  },
  title: {
    margin: 10,
    fontSize: 20,
  },
  author: {
    padding: 10,
    width: 100,
  },
  containerLevelRelease: {
    flexDirection: 'row',
    margin: 10,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    margin: 10,
    padding: 10,
  },
  buttonGroup: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  description: {
    margin: 10,
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
  },
  containerButtonSmall: {
    padding: 10,
  },
  buttonSmall: {
    marginVertical: 5,
  },
});
