import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import 'react-native-reanimated';
import "../global.css"

import { useEffect, useState } from 'react';
import SplashScreenComponent from '@/components/SplashScreenComponent';


SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const[isAppReady,setIsAppReady]= useState(false)


  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(()=>{

    if(loaded){
      setTimeout(() => {
        SplashScreen.hideAsync()
        setIsAppReady(true)
      }, 2000);
    }
  },[loaded])
  
  if(!isAppReady) return <SplashScreenComponent/>


  return (
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='index'/>
        <Stack.Screen name="(root)"/>
        <Stack.Screen name="(auth)"/>
      </Stack>
    
  );
}
