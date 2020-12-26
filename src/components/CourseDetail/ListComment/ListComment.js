import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import ListCommentItem from '../ListCommentItem/ListCommentItem';

const ListComment = (props) => {
  const {colors} = useTheme();

  const Comments = props.data;
  /* console.log('Comment Course Detail: ', props.data); */

  const onPressSectionItem = (item) => {
    /* props.navigation.navigate(ScreenKey.AuthorDetail, {item}); */
  };

  const renderListItem = (Comments) => {
    return Comments.map((id) => (
      <ListCommentItem
        item={id}
        navigation={props.navigation}
        onPressSectionItem={onPressSectionItem}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: colors.text}]}>comments</Text>
      <ScrollView horizontal={false}>
        {renderListItem(Comments.ratingList)}
      </ScrollView>
    </View>
  );
};

export default ListComment;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    margin: 5,
    fontSize: 20,
  },
});
