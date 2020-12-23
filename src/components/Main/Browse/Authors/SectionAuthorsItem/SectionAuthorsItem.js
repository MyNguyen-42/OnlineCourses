import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

const SectionAuthorsItem = (props) => {
  /* console.log(props.item); */
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.onPressSectionItem(props.item);
      }}>
      <Image
        source={{
          uri: props.item['user.avatar'],
        }}
        style={styles.circle}
      />
      <Text style={{color: colors.text}}>{props.item['user.name']}</Text>
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
