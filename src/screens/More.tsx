import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import CustomTextInput from '../components/CustomTextInput';
import IconTextButton from '../components/IconTextButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function More() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  return (
    <Background>
      <SafeAreaView style={{flex: 1}}>
        <Header text="Custom Text Input" />
        <CustomTextInput
          value={input1}
          onChangeText={e => setInput1(e)}
          label="Your Name"
          placeHolder="Name"
          labelVisible
        />
        <CustomTextInput
          value={input2}
          onChangeText={e => setInput2(e)}
          label="Mobile Number"
          placeHolder="Number (without country code)"
          labelVisible
          keypadType="number-pad"
          maxLength={10}
        />
        <CustomTextInput
          value={input3}
          onChangeText={e => setInput3(e)}
          label="Email"
          placeHolder="Email"
          labelVisible
          keypadType="email-address"
        />
        <CustomTextInput
          value={input4}
          onChangeText={e => setInput4(e)}
          label="Password"
          placeHolder="password"
          secure
          labelVisible
        />

        <IconTextButton
          title="Create User"
           buttonStyle={{alignSelf:"center"}}
           textStyle={{
            fontSize:17
           }}
          Icon={() => <AntDesign name="adduser" size={25} color={'white'} />}
        />

        
      </SafeAreaView>
    </Background>
  );
}
