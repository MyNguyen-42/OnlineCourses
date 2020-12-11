import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {ScreenKey, Server} from '../../../global/Constants';
import ListCoursesItem from '../ListCoursesItem/ListCoursesItem';
import axios from 'axios';

const Data = [
  {
    id: '25a9f869-819b-4711-81ed-fcf8362a99ef',
    title: 'MASTER REACTJS',
    subtitle: 'master reactjs 24h',
    price: 1000,
    description: 'khoas hoc giup ban tro thanh web dev trong 24h',
    requirement: ['aaaaaaaaa'],
    learnWhat: ['MASTER REACTJS', 'aaaaaaaa'],
    soldNumber: 6,
    ratedNumber: 2,
    videoNumber: 2,
    totalHours: 0.202,
    formalityPoint: 4.5,
    contentPoint: 4.25,
    presentationPoint: 4,
    imageUrl:
      'https://storage.googleapis.com/itedu-bucket/Courses/25a9f869-819b-4711-81ed-fcf8362a99ef/avatar/34a8cba1-cea1-4aec-a85b-68d26a381753.jpg',
    promoVidUrl:
      'https://storage.googleapis.com/itedu-bucket/Courses/25a9f869-819b-4711-81ed-fcf8362a99ef/promo/265879dd-43c1-400c-bdbb-69f32f2cfa53.mov',
    status: 'COMPLETED',
    isHidden: false,
    isDeleted: false,
    createdAt: '2020-11-18T16:24:27.163Z',
    updatedAt: '2020-12-04T01:55:56.636Z',
    instructorId: '5383c7bb-d8bc-4bb6-b197-7ac3b05c7043',
    typeUploadVideoLesson: 1,
    'instructor.user.id': '4c76b35e-6b75-41af-b27b-9d450fcf517b',
    'instructor.user.name': 'taitai kkaka',
  },
  {
    id: '84d0c749-d5ad-40ec-aa3b-c29b0a92b5c1',
    title: 'Game from Zeor to Hero',
    subtitle: 'Lap trinh game can ban',
    price: 10000,
    description: 'Game development tu can ban den nang cao.',
    requirement: ['DAME ME GAME'],
    learnWhat: ['Game is fun', 'gameloft'],
    soldNumber: 5,
    ratedNumber: 1,
    videoNumber: 1,
    totalHours: 0.007,
    formalityPoint: 5,
    contentPoint: 5,
    presentationPoint: 5,
    imageUrl:
      'https://storage.googleapis.com/itedu-bucket/Courses/84d0c749-d5ad-40ec-aa3b-c29b0a92b5c1/avatar/c0e97a20-eb79-44c6-8ae0-db384714576e.jpg',
    promoVidUrl:
      'https://storage.googleapis.com/itedu-bucket/Courses/84d0c749-d5ad-40ec-aa3b-c29b0a92b5c1/promo/3e7b2112-2158-4ab0-bd06-7c4fe02d4992.mp4',
    status: 'COMPLETED',
    isHidden: false,
    isDeleted: false,
    createdAt: '2020-11-24T15:42:38.973Z',
    updatedAt: '2020-12-04T09:50:35.454Z',
    instructorId: '5383c7bb-d8bc-4bb6-b197-7ac3b05c7043',
    typeUploadVideoLesson: 1,
    'instructor.user.id': '4c76b35e-6b75-41af-b27b-9d450fcf517b',
    'instructor.user.name': 'taitai kkaka',
  },
];

const ListCourses = (props) => {
  let Courses = props.route.params.Courses;
  /* console.log(props.route.params.Courses); */

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(Data);

  const body = {
    page: 1,
    limit: 10,
  };

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    //Networking request
    axios
      .post(Server + '/course/top-sell', body, options)
      .then((Response) => {
        if (Response.status === 200) {
          console.log(Response.data.message);
          setData(Response.data.payload);
        } else {
          console.log('fail');
        }
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [body, options]);

  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#8e44ad" />
      ) : (
        <FlatList
          horizontal={false}
          ItemSeparatorComponent={FlatListItemSeparator}
          data={data}
          renderItem={({item}) => (
            <ListCoursesItem
              item={item}
              navigation={props.navigation}
              onPressListItem={onPressListItem}
            />
          )}
        />
      )}
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
});
