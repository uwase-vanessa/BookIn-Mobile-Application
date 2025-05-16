
import React from 'react'
import { Stack } from 'expo-router'

const TabsLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='(tabs)'/>
        <Stack.Screen name='(features)'/>
        
        
    </Stack>
  )
}

export default TabsLayout