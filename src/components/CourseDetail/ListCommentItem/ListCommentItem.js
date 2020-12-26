import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import MyRating from '../../common/MyRating';

const ListCommentItem = (props) => {
  const {colors} = useTheme();
  return (
    <View
      style={styles.container}
      onPress={() => {
        props.onPressSectionItem(props.item);
      }}>
      <Image
        source={{
          uri: props.item.user.avatar,
        }}
        style={styles.circle}
      />
      <View style={styles.contentView}>
        <Text style={[{color: colors.text}, styles.textName]}>
          {props.item.user.name}
        </Text>
        <Text style={{color: colors.text}}>{props.item.content}</Text>
        <MyRating
          ratingNumber={
            props.item.presentationPoint || props.item.courseContentPoint
          }
          rating={props.item.presentationPoint || props.item.courseContentPoint}
        />
      </View>
    </View>
  );
};

export default ListCommentItem;

const styles = StyleSheet.create({
  container: {
    /* alignItems: 'center', */
    margin: 10,
    flexDirection: 'row',
  },
  circle: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  contentView: {
    marginHorizontal: 10,
  },
  textName: {
    fontWeight: 'bold',
  },
});
