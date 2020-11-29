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
            'http://www.dotplays.com/wp-content/uploads/2019/02/1C3kxjCrJy-aWSMpe2chfaA.png',
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
