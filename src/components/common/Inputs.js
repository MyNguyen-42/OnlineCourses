import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

const Inputs = (props) => {
  /*   const [IsFocus, setIsFocus] = useState(false);

  const onFocusChange = () => {
    setIsFocus(true);
  };
 */

  const {colors} = useTheme();
  return (
    <View
      style={[styles.container, props.style, {backgroundColor: colors.card}]}>
      <Input
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        /* onFocus={onFocusChange} */
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        leftIcon={
          <FontAwesome
            name={props.leftIcon}
            size={22}
            /* color={IsFocus ? '#0779e4' : 'grey'} */
          />
        }
        rightIcon={<FontAwesome name={props.rightIcon} size={22} />}
      />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  inputText: {
    color: '#0779e4',
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#ccc',
    width: '100%',
    padding: 13,
    borderRadius: 8,
  },
});
