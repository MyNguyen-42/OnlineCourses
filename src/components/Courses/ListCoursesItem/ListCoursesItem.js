import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScreenKey} from '../../../global/Constants';
import {useTheme} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const WidthBoxImageTitle = screenWidth - 40;

const WidthTitle = WidthBoxImageTitle - 110;

const ListCoursesItem = (props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onPressListItem(props.item);
      }}>
      <View style={styles.imageTitle}>
        <Image
          style={styles.image}
          source={require('../../../../assets/React-Native.png')}
        />
        <View style={styles.title}>
          <Text>{props.item.title}</Text>
          <Text style={styles.darkText}>{props.item.author}</Text>
          <Text
            style={
              styles.darkText
            }>{`${props.item.level} . ${props.item.released}. ${props.item.duration}`}</Text>
        </View>
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
  },
  image: {
    height: 100,
    width: 100,
  },
  imageTitle: {
    flexDirection: 'row',
    width: WidthBoxImageTitle,
  },
  title: {
    margin: 5,
    width: WidthTitle,
  },
  darkText: {
    color: 'darkgray',
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
});
