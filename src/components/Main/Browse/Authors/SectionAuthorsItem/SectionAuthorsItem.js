import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const SectionAuthorsItem = (props) => {
  console.log(props.item);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.onPressSectionItem(props.item);
      }}>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/736x/03/42/87/034287c49d6041b4b98ac96bdd03c3e1.jpg',
        }}
        style={styles.circle}
      />
      <Text>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

export default SectionAuthorsItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  circle: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
});
