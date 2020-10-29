import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Heading = ({children, style, ...props}) => {
  return (
    <View>
      <Text {...props} style={[style, styles.text]}>
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
