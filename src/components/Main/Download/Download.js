import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCourses from '../../Courses/ListCourses/ListCourses';
import SmallRightButton from '../../common/SmallRightButton';

const Download = () => {
  return (
    <View>
      <View style={styles.rightButton}>
        <Text style={styles.text}>Downloads</Text>
        <SmallRightButton
          text="Remove all"
          onPress={() => console.log('Remove all')}
        />
      </View>
      <ListCourses />
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  rightButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
});
