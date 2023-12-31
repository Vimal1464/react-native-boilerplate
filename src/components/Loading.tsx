import {
  View,
  Text,
  ActivityIndicator,
  ColorValue,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Background from './Background';
import fontFamily from '../constants/fontFamily';

interface LoadingProps {
  message?: string;
  loaderSize?: number | 'small' | 'large' | undefined;
  loaderColor?: ColorValue;
  LoaderComponent?: () => React.ReactNode;
}

const Loading = ({
  LoaderComponent,
  loaderColor,
  loaderSize,
  message,
}: LoadingProps) => {
  return (
    <Background style={{justifyContent: 'center', alignItems: 'center'}}>
      {LoaderComponent ? (
        <LoaderComponent />
      ) : (
        <>
          <ActivityIndicator
            size={loaderSize ? loaderSize : 'large'}
            color={loaderColor ? loaderColor : 'black'}
          />
          <Text style={style.text}>
            {message ? message : 'Please wait ...'}
          </Text>
        </>
      )}
    </Background>
  );
};

export default Loading;

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: fontFamily.regular,
    marginTop: 10,
  },
});
