// This file is used to define the layout for the authentication screens
// It uses the Stack component from expo-router to manage navigation between the login and register screens
// It is located in the app/(auth) directory, which is a convention used by expo-router to group related screens
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='login'/>
        <Stack.Screen name='register'/>
    </Stack>
  )
}

export default AuthLayout

// a Stack is a type of navigator that manages a stack of screens,
//  allowing users to navigate forward to new screens and back to previous ones, mimicking the navigation behavior of a call stack or a browser history.