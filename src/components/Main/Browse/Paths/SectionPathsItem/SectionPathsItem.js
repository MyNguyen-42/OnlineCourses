import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

const SectionPathsItem = (props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.item, {backgroundColor: colors.card}]}
      onPress={() => {
        props.onPressSectionItem(props.item);
        /* props.navigation.navigate(ScreenKey.ListCoursesStack);
        console.log(props.item.title); */
      }}>
      <Image
        source={require('../../../../../../assets/reactnative.png')}
        style={styles.image}
      />
      <View style={styles.containerText}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.countCourses}</Text>
      </View>
    </TouchableOpacity>
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
