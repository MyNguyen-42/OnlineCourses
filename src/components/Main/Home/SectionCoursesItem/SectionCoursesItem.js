import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ScreenKey} from '../../../../global/Constants';

const SectionCoursesItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        /* props.onPressSectionItem; */
        props.navigation.navigate(ScreenKey.ListCoursesStack);
        console.log(props.item.title);
      }}>
      <Image
        source={require('../../../../../assets/reactnative.png')}
        style={styles.image}
      />
      <View style={{margin: 5}}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.released}. ${props.item.duration}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionCoursesItem;

const styles = StyleSheet.create({
  item: {
    margin: 5,
    width: 200,
    height: 200,
    backgroundColor: 'gray',
  },
  image: {
    height: 100,
    width: 200,
  },
  darkText: {
    color: 'darkgray',
  },
});
