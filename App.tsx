import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <LinearGradient colors={["green","yellow"]} style={{width:100,height:100}}>

      </LinearGradient>
      <Text style={{fontSize:20,fontFamily:"Roboto-Black"}}>App</Text>
      <Icon
      name="add"
      />
    </SafeAreaView>
  )
}

export default App