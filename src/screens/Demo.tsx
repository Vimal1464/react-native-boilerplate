import React, {useEffect, useState} from 'react';
import Background from '../../src/components/Background';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../src/components/CustomButton';
import IconTextButton from '../../src/components/IconTextButton';
import IconButton from '../components/IconButton';
import {LogBox, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import appColors from '../constants/colors';
import DropDown from '../components/DropDown';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Loading from '../components/Loading';
const genderArray = [
  {
    id: 1,
    label: 'Male',
  },
  {
    id: 2,
    label: 'Female',
  },
];
const monthsArray = [
  {id: 1, month: 'January'},
  {id: 2, month: 'February'},
  {id: 3, month: 'March'},
  {id: 4, month: 'April'},
  {id: 5, month: 'May'},
  {id: 6, month: 'June'},
  {id: 7, month: 'July'},
  {id: 8, month: 'August'},
  {id: 9, month: 'September'},
  {id: 10, month: 'October'},
  {id: 11, month: 'November'},
  {id: 12, month: 'December'},
];

const Demo = () => {
  LogBox.ignoreLogs([
    ' WARN  Sending `onAnimatedValueUpdate` with no listeners registered',
  ]); // for ios when we navigate back
  const navigation = useNavigation<any>();
  const [dropDownValue1, setDropdownValue1] = useState<any>(); // type depend on your dropdown data
  const [dropDownValue2, setDropdownValue2] = useState<any>(); // type depend on your dropdown data
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadTrigger = setTimeout(() => {
      // setLoading(false)
    }, 2000);

    return () => {
      clearTimeout(loadTrigger);
    };
  }, []);
  if (loading) {
    return (
      <Loading
        message='Custom Loader'
      />
    );
  }
  return (
    <Background>
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <Header text="Custom DropDown" />
          <DropDown
            labelTextStyle={{
              color: 'white',
            }}
            dropDownIconColor={'white'}
            bannerStyle={{
              backgroundColor: appColors.primary,
              borderColor: 'white',
            }}
            selectedValue={dropDownValue1}
            setterSelectedValue={e => setDropdownValue1(e)}
            data={genderArray}
            access="label"
            label="Custom Dropdown"
            placeHolder="Select Value"
          />
          <DropDown
            labelTextStyle={{
              color: 'white',
            }}
            dropDownIconColor={'white'}
            bannerStyle={{
              backgroundColor: appColors.primary,
              borderColor: 'white',
            }}
            selectedValue={dropDownValue2}
            setterSelectedValue={e => setDropdownValue2(e)}
            data={monthsArray}
            access="month"
            isSearch
            label="Custom Dropdown With Search"
            placeHolder="Select Value"
          />
          <Header text="Icon Button" />
          <ScrollView
            overScrollMode="auto"
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
            style={{maxHeight: 100}}>
            <IconButton
              circleSize={50}
              Icon={() => {
                return (
                  <AntDesign name="stepbackward" size={23} color={'white'} />
                );
              }}
            />
            <IconButton
              circleSize={50}
              Icon={() => {
                return <AntDesign name="play" size={23} color={'white'} />;
              }}
            />
            <IconButton
              circleSize={50}
              Icon={() => {
                return (
                  <AntDesign name="stepforward" size={23} color={'white'} />
                );
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: 'green'}}
              circleSize={50}
              Icon={() => {
                return <Ionicons name="add" size={23} color={'white'} />;
              }}
            />

            <IconButton
              buttonStyle={{backgroundColor: 'orange'}}
              circleSize={50}
              Icon={() => {
                return (
                  <AntDesign name="shoppingcart" size={23} color={'white'} />
                );
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: 'purple'}}
              showLoader
              isLoader
              loaderColor={'white'}
              loaderSize={'small'}
              circleSize={50}
              Icon={() => {
                return (
                  <EvilIcons name="share-google" size={35} color={'white'} />
                );
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: 'red'}}
              circleSize={50}
              Icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={25}
                    color={'white'}
                  />
                );
              }}
            />

            <IconButton
              buttonStyle={{backgroundColor: 'green'}}
              circleSize={50}
              Icon={() => {
                return (
                  <Ionicons name="call-outline" size={23} color={'white'} />
                );
              }}
            />
          </ScrollView>
          <ScrollView
            overScrollMode="auto"
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
            style={{maxHeight: 100}}>
            <IconButton
              buttonStyle={{backgroundColor: '#5562EB'}}
              circleSize={50}
              Icon={() => {
                return (
                  <MaterialIcons name="discord" size={30} color={'white'} />
                );
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: 'black'}}
              circleSize={50}
              Icon={() => {
                return <AntDesign name="github" size={30} color={'white'} />;
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: 'white'}}
              circleSize={50}
              Icon={() => {
                return <AntDesign name="youtube" size={30} color={'red'} />;
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: '#0766FF'}}
              circleSize={50}
              Icon={() => {
                return (
                  <EvilIcons name="sc-facebook" size={40} color={'white'} />
                );
              }}
            />
            <IconButton
              circleSize={50}
              Icon={() => {
                return <AntDesign name="google" size={30} color={'white'} />;
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: 'black'}}
              circleSize={50}
              Icon={() => {
                return <AntDesign name="apple1" size={30} color={'white'} />;
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: 'white'}}
              circleSize={50}
              Icon={() => {
                return <AntDesign name="youtube" size={30} color={'red'} />;
              }}
            />
            <IconButton
              circleSize={50}
              Icon={() => {
                return <AntDesign name="google" size={30} color={'white'} />;
              }}
            />
            <IconButton
              buttonStyle={{backgroundColor: 'black'}}
              circleSize={50}
              Icon={() => {
                return <AntDesign name="apple1" size={30} color={'white'} />;
              }}
            />
          </ScrollView>

          <Header text="Custom Button" />
          <View style={{alignItems: 'center'}}>
            <CustomButton title="Default" />

            <CustomButton
              title="Custom"
              buttonStyle={{
                backgroundColor: '#E9708C',
              }}
              onPressStyle={{
                backgroundColor: '#FF93AC',
                elevation: 10,
                shadowColor: 'green',
                shadowOffset: {height: 3, width: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
              }}
              textStyle={{
                color: 'white',
              }}
            />
            <CustomButton
              title="Loader Also"
              showLoader
              isLoader
              buttonStyle={{
                backgroundColor: appColors.cheryRed,
              }}
              onPressStyle={{
                backgroundColor: appColors.lightRed,
                elevation: 10,
                shadowColor: 'green',
                shadowOffset: {height: 3, width: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
              }}
              textStyle={{
                color: 'white',
              }}
            />
            <IconTextButton
              Icon={() => {
                return <Ionicons name="add" size={23} color={'white'} />;
              }}
              title="Add Something"
            />
            <IconTextButton
              showLoader
              buttonStyle={{
                backgroundColor: appColors.thinBlue,
                padding: 15,
              }}
              textStyle={{color: 'black'}}
              isLoader
              loaderColor={'black'}
              Icon={() => {
                return <Ionicons name="add" size={23} color={'white'} />;
              }}
              title="Custom Icon Button With Loader"
            />
            <CustomButton
              title="Next Page for More.."
              onPress={() => {
                navigation.navigate('More');
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

export default Demo;
