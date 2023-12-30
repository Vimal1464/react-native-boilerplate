import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Touchable,
  ScrollView,
  TextInput,
  ColorValue,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import fontFamily from '../constants/fontFamily';
import colors from '../constants/colors';
import VH from './VH';
import {CustomTextInputStyle} from './CustomTextInput';
interface Props {
  data: any[];
  label: string;
  placeHolder: string;
  selectedValue: any;
  access: string;
  isSearch?: boolean;
  setterSelectedValue: (item: any) => void;
  bannerStyle?: ViewStyle;
  dropDownIconColor?: ColorValue;
  listContainerStyle?: ViewStyle;
  listItemContainer?: ViewStyle;
  listItemText?: TextStyle;
  SearchText?: TextStyle;
  SearchContainer?: ViewStyle;
  searchPlaceHolder?: string;
  searchPlaceHolderColor?: ColorValue;
  labelTextStyle?:TextStyle
}

const IconSize: number = 28;

const DropDown = ({
  data,
  access,
  label,
  placeHolder,
  selectedValue,
  isSearch,
  setterSelectedValue,
  bannerStyle,
  dropDownIconColor,
  SearchContainer,
  SearchText,
  listContainerStyle,
  listItemContainer,
  listItemText,
  searchPlaceHolder,
  searchPlaceHolderColor,
  labelTextStyle
}: Props) => {
  useEffect(() => {
    setArrayData(data);
  }, [data]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [arrayData, setArrayData] = useState(data);
  const onSearch = (e: string) => {
    setSearch(e);
    if (e !== '') {
      let tempData = data.filter(item => {
        return item[access].toLowerCase().indexOf(e.toLowerCase()) > -1;
      });
      setArrayData(tempData);
    } else {
      setArrayData(data);
    }
  };
  return (
    <View>
      <VH marginVertical={5} />
      <Text
        style={{
          marginHorizontal: 20,
          fontFamily: fontFamily.regular,
          fontSize: 16,
          color: 'black',
        }}>
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={[DropDownStyle.container, bannerStyle]}>
        <Text style={[CustomTextInputStyle.labelText,labelTextStyle]}>
          {selectedValue
            ? !selectedValue[access]
              ? placeHolder
              : selectedValue[access]
            : placeHolder}
        </Text>
        <Icon
          name={`${isOpen ? 'up' : 'down'}`}
          style={{}}
          color={dropDownIconColor ? dropDownIconColor : 'black'}
          size={IconSize}
        />
      </TouchableOpacity>

      {isOpen && (
        <>
          {isSearch && (
            <View style={[DropDownStyle.searchContainer, SearchContainer]}>
              <TextInput
                style={[DropDownStyle.searchBox, SearchText]}
                placeholderTextColor={
                  searchPlaceHolderColor ? searchPlaceHolderColor : 'black'
                }
                value={search}
                placeholder={searchPlaceHolder ? searchPlaceHolder : 'Search'}
                onChangeText={(e: string) => onSearch(e)}
              />
            </View>
          )}

          <ScrollView
            nestedScrollEnabled
            style={[DropDownStyle.listContainer, listContainerStyle]}>
            {arrayData.length > 0 ? (
              arrayData.map((item: any, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      setterSelectedValue(item);
                      setIsOpen(false);
                      setSearch("")
                    }}
                    style={[DropDownStyle.listView, listItemContainer]}>
                    <Text style={[DropDownStyle.listText, listItemText]}>
                      {item[access]}
                    </Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <View style={[DropDownStyle.listView, listItemContainer]}>
                <Text style={[DropDownStyle.listText, listItemText]}>
                  {' '}
                  No Values
                </Text>
              </View>
            )}
          </ScrollView>
        </>
      )}

      <VH marginVertical={5} />
    </View>
  );
};

export default memo(DropDown);

const DropDownStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    marginHorizontal: 20,
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
    maxHeight: 200,
    backgroundColor: 'transparent', // its default
  },
  listContainer: {
    alignSelf: 'center',
    marginTop: 5,
    maxHeight: 200,
    width: '90%',
    padding: 5,
    backgroundColor: colors.MainBackground,
    borderRadius: 3,
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  listView: {
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 10,
    marginVertical: 5,
  },
  listText: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: 'black',
  },

  searchBox: {
    borderWidth: 0.3,
    borderColor: 'grey',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 3,
    color: 'black',
  },
  searchContainer: {
    alignSelf: 'center',
    marginTop: 5,
    maxHeight: 200,
    width: '90%',
    padding: 5,
    backgroundColor: colors.MainBackground,
    borderRadius: 3,
    marginBottom: -9,
  },
});
