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
          uri:
            'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
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
