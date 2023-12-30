import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ColorValue,
} from 'react-native';
import React, {FC} from 'react';
import {CustomButtonStyle} from './CustomButton';
import appColors from '../constants/colors';

interface IconButtonProps {
  Icon: () => React.ReactNode;
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  onPressStyle?: ViewStyle;
  loaderSize?: number | 'small' | 'large' | undefined;
  loaderColor?: ColorValue | undefined;
  showLoader?: boolean;
  isLoader?: boolean;
}

const IconTextButton = ({
  Icon,
  title,
  buttonStyle,
  onPress,
  onPressStyle,
  textStyle,
  isLoader,
  loaderColor,
  loaderSize,
  showLoader,
}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        IconTextButtonStyle.buttonContainer,
        pressed && {opacity: 0.8, ...onPressStyle},
        buttonStyle,
      ]}>
      {showLoader ? (
        isLoader ? (
          <ActivityIndicator
            size={loaderSize ? loaderSize : 'small'}
            color={loaderColor ? loaderColor : 'white'}
          />
        ) : (
          <Icon />
        )
      ) : (
        <Icon />
      )}
      <Text style={[CustomButtonStyle.buttonText, textStyle, {marginLeft: 10}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default IconTextButton;

const IconTextButtonStyle = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '90%',
    margin: 10,
  },
});
