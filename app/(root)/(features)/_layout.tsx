
import React from 'react'
import { Stack } from 'expo-router'

const FeaturesLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="notifications"/>
      <Stack.Screen name="Books"/>
    </Stack>
  )
}

export default FeaturesLayout