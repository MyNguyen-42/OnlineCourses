import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../../global/Constants';
import {Rating, AirbnbRating} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import MyRating from '../../../common/MyRating';
import moment from 'moment';

const SectionCoursesItem = (props) => {
  const {colors} = useTheme();
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };
  return (
    <TouchableOpacity
      style={[styles.item, {backgroundColor: colors.card}]}
      onPress={() => {
        props.onPressSectionItem(props.item);
      }}>
      <Image
        source={{
          uri: props.item.imageUrl || props.item.courseImage,
        }}
        style={styles.image}
      />
      <View style={{margin: 5}}>
        <Text style={{color: colors.text}}>
          {props.item.title || props.item.courseTitle}
        </Text>
        <Text style={styles.darkText}>
          {props.item['instructor.user.name'] || props.item.instructorName}
        </Text>
        <Text
          style={
            styles.darkText
          }>{` ${props.item.createdAt}. ${props.item.totalHours}`}</Text>

        <MyRating
          ratingNumber={
            props.item.ratingNumber ||
            props.item.courseContentPoint ||
            props.item.courseFormalityPoint
          }
          rating={
            props.item.rating ||
            props.item.courseContentPoint ||
            props.item.formalityPoint
          }
        />
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
  },
  image: {
    height: 100,
    width: 200,
  },
  darkText: {
    color: 'darkgray',
  },
  rating: {
    alignSelf: 'center',
  },
});
