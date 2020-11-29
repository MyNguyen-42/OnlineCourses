import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ScreenKey} from '../../../../global/Constants';
import ListPathItem from './ListPathItem/ListPathItem';
import {useTheme} from '@react-navigation/native';

const Paths = (props) => {
  const {colors} = useTheme();
  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressSectionItem = (item) => {
    props.navigation.navigate(ScreenKey.PathDetail, {item});
  };

  return (
    <FlatList
      data={props.pathIds}
      ItemSeparatorComponent={FlatListItemSeparator}
      renderItem={({item}) => (
        <ListPathItem item={item} onPressSectionItem={onPressSectionItem} />
      )}
      ListHeaderComponent={
        <Text style={[styles.header, {color: colors.text}]}>
          {props.header}
        </Text>
      }
    />
  );
};

export default Paths;

const styles = StyleSheet.create({
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
  header: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
