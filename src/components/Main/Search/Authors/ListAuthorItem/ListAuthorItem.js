import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ListAuthorsItem = (props) => {
  /* console.log(props.item); */
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.onPressSectionItem(props.item);
      }}>
      <Image
        source={{
          uri: props.item.avatar,
        }}
        style={styles.circle}
      />
      <Text>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

export default ListAuthorsItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
    borderRadius: 50,
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
});
