import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const WidthTitle = screenWidth - 100;

const ListCoursesItem = (props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.item} onPress={() => {}}>
      <View style={styles.containerIconText}>
        <MaterialCommunityIcons
          name="checkbox-blank-circle"
          style={[styles.icon, {color: colors.text}]}
        />
        <Text style={{color: colors.text, width: WidthTitle}}>
          {props.item.name}
        </Text>
      </View>
      <Text style={{color: colors.text}}>{props.item.hours}</Text>
    </TouchableOpacity>
  );
};

export default ListCoursesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    justifyContent: 'space-between',
  },
  containerIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 13,
    marginHorizontal: 5,
  },
});
