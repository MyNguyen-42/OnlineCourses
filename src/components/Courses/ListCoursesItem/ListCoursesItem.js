import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Share,
} from 'react-native';

const ListCoursesItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        Alert.alert('Alert', 'nay la alert', [
          {text: 'ok'},
          {
            text: 'share',
            onPress: () => {
              Share.share({message: 'share ne'});
            },
          },
        ])
      }>
      <Image
        style={styles.image}
        source={require('../../../../assets/amicat.png')}
      />
      <View style={{margin: 5}}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.released}. ${props.item.duration}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCoursesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 5,
  },
  image: {
    height: 100,
    width: 100,
  },
  darkText: {
    color: 'darkgray',
  },
});
