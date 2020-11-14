import React from 'react';
import {StyleSheet} from 'react-native';
import ListCourses from '../../Courses/ListCourses/ListCourses';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../global/Constants';
import {Header} from 'react-native-elements';

const Download = (props) => {
  const {colors} = useTheme();
  const onPress = () => {
    props.navigation.navigate(ScreenKey.SettingStackScreens);
  };
  return (
    <>
      <Header
        placement="left"
        centerComponent={{
          text: 'Downloads',
          style: {color: colors.text, fontSize: 20, fontWeight: 'bold'},
        }}
        rightComponent={{
          icon: 'home',
          color: colors.text,
          onPress: onPress,
        }}
        backgroundColor={colors.card}
        containerStyle={styles.containerStyle}
      />
      {/* <View style={styles.rightButton}>
        <Text style={styles.text}>Downloads</Text>
        <SmallRightButton
          text="Remove all"
          onPress={() => console.log('Remove all')}
        />
      </View> */}
      <ListCourses navigation={props.navigation} />
    </>
  );
};

export default Download;

const styles = StyleSheet.create({
  rightButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
});
