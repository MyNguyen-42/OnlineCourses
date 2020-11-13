import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../../global/Constants';
import {Rating, AirbnbRating} from 'react-native-elements';
import {color} from 'react-native-reanimated';

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
        /* props.navigation.navigate(ScreenKey.ListCoursesStack);
        console.log(props.item.title); */
      }}>
      <Image
        source={require('../../../../../assets/reactnative.png')}
        style={styles.image}
      />
      <View style={{margin: 5}}>
        <Text style={{color: colors.text}}>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.released}. ${props.item.duration}`}</Text>

        <Rating
          type="star"
          ratingCount={5}
          imageSize={20}
          ratingBackgroundColor={colors.card}
          onFinishRating={ratingCompleted}
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
});
