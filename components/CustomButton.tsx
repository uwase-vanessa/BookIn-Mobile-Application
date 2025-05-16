import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomButtonProps } from '@/types'

const CustomButton = ({onPress,
    containerStyle,
    textStyle="text-white",
    title}:CustomButtonProps) => {
  return (
    <TouchableOpacity 
    className={`flex items-center justify-center text-center py-3 ${containerStyle} rounded-lg`}
    onPress={onPress}
    
    >
        <Text className={`text-lg font-medium leading-7  ${textStyle}`}>{title}</Text>


    </TouchableOpacity>
  )
}

export default CustomButton