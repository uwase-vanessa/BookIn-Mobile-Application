import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CustomInputProps } from '@/types'

const CustomInput = ({

  onChangeText,
  labelText,
  labelStyle,
  placeholder,
  containerStyle,
  secureTextEntry = false,
  value,
  iconRight
}:CustomInputProps) => {
  const [isPasswordVisible,setIsPasswordVisible]= useState(!secureTextEntry)

  const togglePasswordVisibility =()=>{
    setIsPasswordVisible((prev)=>!prev);
  }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding": "height"}
    >
      <TouchableWithoutFeedback 
      onPress={()=>Keyboard.dismiss()} 
      className=''>
        <View className={`w-full flex flex-col gap-1z items-start ${containerStyle}`}>
          <Text className={`text-black/80 text-[16px] font-normal capitalize ${labelStyle}`}>{labelText}</Text>
          <View className='w-full relative'>
          <TextInput 
          className='w-full px-3 py-3 bg-transparent border-[1px] border-tertiary rounded-lg'
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          multiline={false}
          numberOfLines={1}
          placeholder={placeholder}
          />
          {iconRight && 
          <TouchableOpacity
          onPress={togglePasswordVisibility}
          className='absolute right-2 flex h-full justify-center'
          >
            {isPasswordVisible ?  iconRight.close:  iconRight.open}
        
          </TouchableOpacity>}
          </View>
        </View>

      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  )
}

export default CustomInput