import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Background from '../components/Background';
import fontFamily from '../constants/fontFamily';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

const Landing = () => {
  const navigation = useNavigation<any>();
  const AnimationValue = useSharedValue(-200);
  const opacityValue = useSharedValue(0);
  const AnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: AnimationValue.value}],
      opacity: opacityValue.value,
    };
  });
  useEffect(() => {
    AnimationValue.value = withTiming(100, {duration: 1500});
    opacityValue.value = withTiming(1, {duration: 1200});
  });
  return (
    <Background>
      <AnimatedSafeAreaView style={[{flex: 1}, AnimationStyle]}>
        <Image
          source={require('../assets/img/logo.png')}
          resizeMode="contain"
          style={{width: 200, height: 250, alignSelf: 'center'}}
        />
        <Text style={LandingStyle.textStyle}>
          Welcome To One React{'\n'}Where You Will Get Free React Native
          Components{'\n'}Created By Vimal Pandey.
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://github.com/Vimal1464/react-native-boilerplate',
            );
          }}
          style={{
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: 'blue',
            alignSelf: 'center',
          }}>
          <Text style={[LandingStyle.textStyle, {color: 'blue'}]}>
            Don't Forget To Give Us A Star
          </Text>
        </TouchableOpacity>

        <CustomButton
          onPress={() => navigation.navigate('Demo')}
          title="Next"
          buttonStyle={{
            alignSelf: 'center',
            marginTop: 30,
            backgroundColor: 'green',
          }}
          textStyle={{
            color: 'white',
            fontSize: 18,
          }}
        />
      </AnimatedSafeAreaView>
    </Background>
  );
};

export default Landing;

const LandingStyle = StyleSheet.create({
  container: {},
  textStyle: {
    textAlign: 'center',
    lineHeight: 24,
    color: 'black',
    fontFamily: fontFamily.black,
    fontSize: 17,
    marginTop:20
  },
});
