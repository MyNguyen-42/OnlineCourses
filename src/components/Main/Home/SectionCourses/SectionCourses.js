import React, {useContext} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/SectionCoursesItem';
import SmallRightButton from '../../../common/SmallRightButton';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../../global/Constants';
import {LanguageContext} from '../../../../Provider/LanguageProvider';

const SectionCourses = (props) => {
  const {colors} = useTheme();
  const Courses = props.data;
  const {lang} = useContext(LanguageContext);

  const onPressSectionItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  const renderListItem = (courses) => {
    return courses.map((id) => (
      <SectionCoursesItem
        item={id}
        navigation={props.navigation}
        onPressSectionItem={onPressSectionItem}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[styles.text, {color: colors.text}]}>{props.title}</Text>
        <SmallRightButton
          style={{color: colors.text}}
          text={lang.seeAll}
          name="navigate-next"
          onPress={() => {
            /* props.navigation.navigate(ScreenKey.ListCoursesStack, {
              screen: ScreenKey.ListCourses,
              params: {temp},
            }); */
            props.navigation.navigate(ScreenKey.ListCoursesStack, {
              screen: ScreenKey.ListCourses,
              params: {key: props.title, data: props.data},
            });
          }}
        />
      </View>
      <ScrollView horizontal={true}>{renderListItem(Courses)}</ScrollView>
    </View>
  );
};

export default SectionCourses;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
});
