import {View, Text, StyleSheet, ViewStyle, ColorValue} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '../constants/colors';

interface BackgroundProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  colors?: (string | number)[];
}

const Background = ({children, style, colors}: BackgroundProps) => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={[BackgroundStyles.container, style]}
      colors={
        colors
          ? colors
          : [
              appColors.gradientStart,
              appColors.gradientMiddle,
              appColors.gradientEnd,
            ]
      }>
      {children}
    </LinearGradient>
  );
};

export default (Background);

const BackgroundStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
