import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';

export default function HeaderTags() {
  const [activeTab, setActiveTab]= useState("Home")
  return (
    <View style={{flexDirection:"row", alignSelf:"center"}}>
    <HeaderButton 
      text="Home" 
      btnColor="black" 
      textColor="white" 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
    />

    <HeaderButton 
      text="Events For You" 
      btnColor="white" 
      textColor="black" 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
    />
    </View>
  )
}

const HeaderButton = (props) => (

    <TouchableOpacity 
      style={{
        backgroundColor:props.activeTab == props.text ? "black" : "white",
        paddingVertical:6,
        paddingHorizontal:16,
        borderRadius:30,
      }}

      onPress={()=>props.setActiveTab(props.text)}
    
    >
      <Text 
        style={{
          color:props.activeTab == props.text ? "white" : "black", 
          fontSize:15, 
          fontWeight:"900"
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>

);
