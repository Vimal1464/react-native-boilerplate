import {
  Text,
  ViewStyle,
  TextStyle,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ColorValue,
} from 'react-native';
import React from 'react';
import appColors from '../constants/colors';

interface IconButton {
  Icon: () => React.ReactNode;
  buttonStyle?: ViewStyle;
  onPress?: () => void;
  onPressStyle?: ViewStyle;
  circleSize: number;
  isLoader?: boolean;
  showLoader?: boolean;
  loaderSize?: number | 'small' | 'large' | undefined;
  loaderColor?: ColorValue | undefined;
}

const IconButton = ({
  Icon,
  buttonStyle,
  onPress,
  onPressStyle,
  circleSize,
  isLoader,
  showLoader,
  loaderColor,
  loaderSize,
}: IconButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        IconButtonStyle.container,
        pressed && {opacity: 0.8, ...onPressStyle},
        buttonStyle,
        {width: circleSize, height: circleSize, borderRadius: circleSize / 2},
      ]}>
      {isLoader ? (
        showLoader ? (
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
    </Pressable>
  );
};

export default IconButton;

const IconButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
