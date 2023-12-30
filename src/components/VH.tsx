import {View, Text} from 'react-native';
import React from 'react';

interface VHProps {
  marginVertical: number;
}

const VH = ({marginVertical}: VHProps) => {
  return (
    <View
      style={{width: '100%', height: 1, marginVertical: marginVertical}}></View>
  );
};

export default VH;
