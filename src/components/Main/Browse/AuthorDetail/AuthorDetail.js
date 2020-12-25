import React, {useReducer, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Avatar} from 'react-native-elements';
import {FilledButton} from '../../../common/FilledButton';
import ListCoursesItem from '../../../Courses/ListCoursesItem/ListCoursesItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScreenKey, Server} from '../../../../global/Constants';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

export const LOAD_INSTRUCTOR_DETAIL_SUCCESSED =
  'LOAD_INSTRUCTOR_DETAIL_SUCCESSED';

const initialState = {
  instructorDetail: null,
  isLoadingInstructorDetail: true,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_INSTRUCTOR_DETAIL_SUCCESSED:
      return {
        ...state,
        instructorDetail: action.data,
        isLoadingInstructorDetail: false,
      };
    default:
      throw new Error();
  }
};

const AuthorDetail = (props) => {
  let item = props.route.params.item;
  const {colors} = useTheme();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('load Instructors');
    axios
      .get(`${Server}/instructor/detail/${item.id}`)
      .then((Response) => {
        if (Response.status === 200) {
          console.log('Action: ', Response.data.message);
          dispatch({
            type: LOAD_INSTRUCTOR_DETAIL_SUCCESSED,
            data: Response.data.payload,
          });
        } else {
          console.log('fail');
        }
      })
      .catch((error) => {})
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(state);

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {state.isLoadingInstructorDetail ? (
        <ActivityIndicator size="large" color="#8e44ad" />
      ) : (
        <>
          <Avatar
            rounded
            source={{
              uri: state.instructorDetail.avatar,
            }}
            size={'large'}
          />
          <Text style={[styles.textName, {color: colors.text}]}>
            {' '}
            {state.instructorDetail.name}
          </Text>
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
        </>
      )}
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
