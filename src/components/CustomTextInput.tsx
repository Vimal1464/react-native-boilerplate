import {View, Text, StyleSheet, KeyboardType, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';

interface CustomTextInputProps {
  label: string;
  placeHolder: string;
  onChangeText?: (e: string) => void;
  value: string;
  keypadType?: KeyboardType;
  maxLength?: number;
  placeHolderColor?: string;
  inputColor?: string;
  labelVisible?: boolean;
  secure?: boolean;
  notEditable?: boolean;
  inputStyle?:ViewStyle|TextStyle;
  container?:ViewStyle;
}

const CustomTextInput = (props: CustomTextInputProps) => {
  return (
    <View style={[CustomTextInputStyle.container,props.container]}>
      {props.labelVisible && (
        <Text
          style={[
            CustomTextInputStyle.labelText,
            props.placeHolderColor ? {color: props.placeHolderColor} : {},
          ]}>
          {props.label}
        </Text>
      )}
      <TextInput
        editable={props.notEditable ? false : true}
        value={props.value}
        secureTextEntry={props.secure}
        onChangeText={e => {
          if (props.onChangeText) props.onChangeText(e);
        }}
        placeholder={props.placeHolder}
        style={[
          CustomTextInputStyle.textInput,
          props.inputStyle
        ]}
        keyboardType={props.keypadType ? props.keypadType : 'default'}
        maxLength={props.maxLength}
        placeholderTextColor={
          props.placeHolderColor ? props.placeHolderColor : 'black'
        }
      />
    </View>
  );
};

export default CustomTextInput;
export const CustomTextInputStyle = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderRadius: 8,
    height: 40,
    padding: 5,
    marginTop: 5,
    borderColor: 'black',
    color: 'black',
  },
  container: {
    margin: 10,
    padding: 10,
  },
  labelText: {
    fontSize: 16,
    color: 'black',
    width: '90%',
  },
});
