import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Rating} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

const MyRating = (props) => {
  const {colors} = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Rating
        imageSize={20}
        tintColor={colors.background}
        readonly={true}
        ratingCount={5}
        startingValue={props.rating}
        style={styles.rating}
        fractions={1}
      />
      <Text style={{color: 'darkgray', fontSize: 15}}>
        {/* ({props.item.ratingNumber}) */}
        {props.ratingNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 20,
  },
  icon: {
    width: 15,
    margin: 2,
    height: 15,
  },
  rating: {
    alignSelf: 'center',
  },
});

export default MyRating;
