import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import fontFamily from '../constants/fontFamily';

interface Headerprops {
  text: string;
}

const Header = ({text}: Headerprops) => {
  return (
    <View style={HeaderStyle.headerContainer}>
      <Text style={HeaderStyle.headerText}>{text}</Text>
    </View>
  );
};

export default Header;

const HeaderStyle = StyleSheet.create({
  headerContainer: {
    margin: 10,
    borderBottomWidth: 0.8,
    borderColor: 'black',
    paddingLeft: 4,
    paddingBottom: 5,
  },
  headerText: {
    color: 'black',
    fontFamily: fontFamily.regular,
    fontSize: 18,
  },
});
