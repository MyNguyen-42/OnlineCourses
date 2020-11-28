import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ScreenKey} from '../../../../global/Constants';
import ListAuthorsItem from './ListAuthorItem/ListAuthorItem';

const Authors = (props) => {
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
});
