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

const Landing = () => {
  const navigation = useNavigation<any>();


  return (
    <Background>
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={require('../assets/img/logo.png')}
          resizeMode="contain"
          style={{
            width: '100%',
            height: 450,
            alignSelf: 'center',
            backgroundColor:"red"
          }}
        />

        <Text style={LandingStyle.textStyle}>
          Welcome To One React{'\n'}Where You Will Get Free React Native
          Components{'\n'}Created By Vimal Pandey.
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://github.com/Vimal1464/spring-boot-spring-security-jwt-authentication',
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
            position: 'absolute',
            bottom: 50,
          }}
          textStyle={{
            color: 'white',
            fontSize: 18,
          }}
        />
      </SafeAreaView>
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
  },
});
