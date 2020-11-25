import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SectionPathsItem = (props) => {
  return (
    <View style={styles.item}>
      <Image
        source={require('../../../../../../assets/reactnative.png')}
        style={styles.image}
      />
      <View style={styles.containerText}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.countCourses}</Text>
      </View>
    </View>
  );
};

export default SectionPathsItem;

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 5,
    width: 200,
    height: 200,
    backgroundColor: '#f0ffff',
  },
  containerText: {
    marginHorizontal: 10,
  },
  image: {
    height: 100,
    width: 200,
  },
  darkText: {
    color: 'darkgray',
  },
});
