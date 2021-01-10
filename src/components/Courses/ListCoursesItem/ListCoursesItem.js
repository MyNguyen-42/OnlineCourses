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
          source={{
            uri: props.item.imageUrl || props.item.courseImage,
          }}
        />
        <View style={styles.title}>
          <Text>{props.item.title || props.item.courseTitle}</Text>
          <Text style={styles.darkText}>
            {props.item['instructor.user.name'] || props.item.instructorName}
          </Text>
          <Text
            style={
              styles.darkText
            }>{`${props.item.createdAt}. ${props.item.totalHours}`}</Text>
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
    /* margin: 5, */
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
