import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Avatar} from 'react-native-elements';
import {FilledButton} from '../../../common/FilledButton';
import ListCoursesItem from '../../../Courses/ListCoursesItem/ListCoursesItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScreenKey} from '../../../../global/Constants';

const AuthorDetail = (props) => {
  let item = props.route.params.item;
  const {colors} = useTheme();

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Avatar
        rounded
        source={{
          uri: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
        }}
        size={'large'}
      />
      <Text style={[styles.textName, {color: colors.text}]}> {item.name}</Text>
      <Text style={{color: colors.text}}> Pluralsight Author</Text>
      <FilledButton title="FOLLOW" />
      <Text style={{color: colors.text}}>
        Follow to be notified when new courses are published
      </Text>
      <Text style={{color: colors.text}}>{item.description}</Text>
      <View style={styles.icon}>
        <TouchableOpacity>
          <View style={styles.iconItem}>
            <Icon name="facebook-official" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconItem}>
            <Icon name="twitter" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconItem}>
            <Icon name="linkedin-square" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item.course}
        renderItem={({item}) => (
          <ListCoursesItem
            navigation={props.navigation}
            item={item}
            onPressListItem={onPressListItem}
          />
        )}
      />
    </View>
  );
};

export default AuthorDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    margin: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconItem: {
    alignItems: 'center',
    margin: 6,
  },
});
