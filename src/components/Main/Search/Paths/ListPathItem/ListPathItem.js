import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListPathItem = (props) => {
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
      <View>
        <Text>{props.item.title}</Text>
        <Text>{props.item.countCourses}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListPathItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
});
