import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ScreenKey} from '../../../../global/Constants';
import ListAuthorsItem from './ListAuthorItem/ListAuthorItem';
import {useTheme} from '@react-navigation/native';

const Authors = (props) => {
  const {colors} = useTheme();
  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressSectionItem = (item) => {
    props.navigation.navigate(ScreenKey.AuthorDetail, {item});
  };

  return (
    <View>
      <FlatList
        data={props.authorIds}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item}) => (
          <ListAuthorsItem
            navigation={props.navigation}
            item={item}
            onPressSectionItem={onPressSectionItem}
          />
        )}
        ListHeaderComponent={
          <Text style={[styles.header, {color: colors.text}]}>
            {props.header}
          </Text>
        }
      />
    </View>
  );
};

export default Authors;

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
