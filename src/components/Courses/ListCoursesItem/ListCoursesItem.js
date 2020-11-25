import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScreenKey} from '../../../global/Constants';
import {useTheme} from '@react-navigation/native';

const ListCoursesItem = (props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onPressListItem(props.item);
      }}>
      <Image
        style={styles.image}
        source={require('../../../../assets/React-Native.png')}
      />
      <View style={{margin: 5}}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.released}. ${props.item.duration}`}</Text>
      </View>
      <MaterialCommunityIcons
        name="dots-horizontal"
        style={[styles.icon, {color: colors.text}]}
        onPress={() => {
          console.log('clicked item');
        }}
      />
    </TouchableOpacity>
  );
};

export default ListCoursesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    justifyContent: 'space-around',
  },
  image: {
    height: 100,
    width: 100,
  },
  darkText: {
    color: 'darkgray',
  },
  icon: {
    fontSize: 20,
  },
});
