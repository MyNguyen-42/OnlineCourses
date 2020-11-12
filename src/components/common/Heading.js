import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

const Heading = ({children, style, ...props}) => {
  const {colors} = useTheme();
  return (
    <View>
      <Text {...props} style={[style, styles.text, {color: colors.text}]}>
        {children}
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
});
