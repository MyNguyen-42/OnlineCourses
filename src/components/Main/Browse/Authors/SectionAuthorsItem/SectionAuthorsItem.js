import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SectionAuthorsItem = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/736x/03/42/87/034287c49d6041b4b98ac96bdd03c3e1.jpg',
        }}
        style={styles.circle}
      />
      <Text>{props.item.name}</Text>
    </View>
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
