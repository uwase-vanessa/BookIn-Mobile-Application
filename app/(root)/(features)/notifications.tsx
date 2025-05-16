import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo';
import { data } from '@/constants';
import { Check, Heart, Shoppingbag } from '@/components/svgs';


const Notifications = () => {
  return (
    <SafeAreaView className='login-gradient w-full h-full flex-1 py-6 px-6'>
        <ScrollView
        contentContainerStyle={{
            flexGrow:1,
        }}
        showsVerticalScrollIndicator={false}
        >
            <View className='w-full h-full  flex gap-6'>
                <View className='w-full relative  flex items-center flex-row justify-center'>
                    <Text className='text-2xl font-medium'>Notifications</Text>
                    <TouchableOpacity className='absolute left-0 bg-tertiary px-1 flex items-center justify-center rounded-lg'>
                    <Entypo name="chevron-left" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {data.notifications.map((group)=>(
                    <View key={group.title} className='flex flex-col gap-2'>
                        <Text className='text-xl font-medium'>{group.title}</Text>
                        <View className='w-full bg-white shadow-md px-3 py-3 flex items-start gap-3 rounded-lg'>
                            {group.data.map((notification)=>(
                                <View key={notification.id} className='flex-1 flex gap-2 flex-row items-center'>
                                    <View className='w-auto h-auto py-2 px-2  bg-light rounded-lg flex items-center justify-center'>
                                        {notification.type === "shopping" ? <Shoppingbag/> : notification.type === "normal" ? <Check/>: <Heart/> }
                                    </View>
                                    <Text className='flex-1'>{notification.body}</Text>


                                </View>
                            ))}

                        </View>
                    </View>
                ))}
            </View>
            
        </ScrollView>

    </SafeAreaView>
  )
}

export default Notifications