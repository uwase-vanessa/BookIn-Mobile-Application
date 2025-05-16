import { Stack, Tabs } from "expo-router";
import React from "react";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
  return (
    <Tabs

    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: "#005ae1",
    
    }}
    >
      <Tabs.Screen
      name="home"
      options={{
        title:"Home",
        tabBarIcon: ({color,size})=> <Feather name="home" size={size} color={color} />
      }}
      />
      <Tabs.Screen
      name="shop"
      options={{
        title:"Cart",
        tabBarIcon: ({color,size})=> <Feather name="shopping-cart" size={size} color={color} />
      }}
      />
       <Tabs.Screen
      name="service"
      options={{
        title:"Service",
        tabBarIcon: ({color,size})=> <AntDesign name="hearto" size={size} color={color} />

      }}
      />
       <Tabs.Screen
      name="history"
      options={{
        title:"History",
        tabBarIcon: ({color,size})=> <Feather name="clock" size={size} color={color} />

      }}
      />

<Tabs.Screen
      name="profile"
      options={{
        title:"Profile",
        tabBarIcon: ({color,size})=><MaterialCommunityIcons name="account" size={size} color={color} />

      }}
      />

    </Tabs>
  );
};

export default TabsLayout;
