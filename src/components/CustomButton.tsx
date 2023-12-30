import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Pressable,
  TextStyle,
  ActivityIndicator,
  ColorValue,
} from 'react-native';
import React from 'react';
import appColors from '../constants/colors';
import fontFamily from '../constants/fontFamily';
import * as Animation from 'react-native-animatable';
interface CustomButtonProps {
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  onPressStyle?: ViewStyle;
  showLoader?: boolean;
  isLoader?: boolean;
  loaderSize?: number | 'small' | 'large' | undefined;
  loaderColor?: ColorValue | undefined;
}

const CustomButton = ({
  title,
  buttonStyle,
  textStyle,
  onPress,
  onPressStyle,
  isLoader,
  showLoader,
  loaderColor,
  loaderSize,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        CustomButtonStyle.buttonContainer,
        buttonStyle,
        pressed && {opacity: 0.8, ...onPressStyle},
      ]}>
      {showLoader ? (
        <>
          {isLoader && (
            <ActivityIndicator
              size={loaderSize ? loaderSize : 'small'}
              color={loaderColor ? loaderColor : 'white'}
            />
          )}
          <Text style={[CustomButtonStyle.buttonText, textStyle]}>{title}</Text>
        </>
      ) : (
        <Text style={[CustomButtonStyle.buttonText, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default CustomButton;

export const CustomButtonStyle = StyleSheet.create({
  buttonContainer: {
    backgroundColor: appColors.primary,
    padding: 15,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 1},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginVertical: 10,
    flexDirection: 'row',
  },
  buttonText: {
    fontWeight: '500',
    fontFamily: fontFamily.bold,
    color: '#EDE3FC',
    marginLeft: 10,
  },
});
