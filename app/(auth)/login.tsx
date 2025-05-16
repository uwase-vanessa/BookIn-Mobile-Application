import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { EyeClose, EyeOpen } from '@/components/svgs'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView className='flex-1 w-full h-full bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1
        }}
      >
        <View className='flex-1 w-full px-6 py-10 gap-8 items-center justify-center'>
          {/* Logo and title */}
          <View className='w-full flex flex-col gap-4 items-center'>
            {/* Replace with your actual logo image */}
            <Image
              source={require('@/assets/images/splash_new.jpg')}
              className="w-24 h-24 mb-2"
              resizeMode="contain"
            />
            <Text className='text-3xl text-tertiary font-bold'>BookIn Login</Text>
          </View>
          <View className='w-full flex gap-6'>
            <View className='w-full flex flex-col gap-4'>
              <CustomInput
                labelText='Email'
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
              />
              <View className='w-full flex gap-3'>
                <CustomInput
                  labelText='Password'
                  value={formData.password}
                  onChangeText={(text) => setFormData({ ...formData, password: text })}
                  iconRight={{ close: <EyeClose />, open: <EyeOpen /> }}
                  secureTextEntry
                />
                {/* Uncomment if you want a "Forgot Password" link */}
                {/* <Text className='text-center font-normal text-[14px]'>
                  Forgot Password?
                  <Link href="/(auth)/forgot" className='font-semibold cursor-pointer text-tertiary'><Text> Click Here</Text></Link>
                </Text> */}
              </View>
            </View>
            <CustomButton
              title='LOGIN'
              containerStyle="w-full bg-tertiary"
              onPress={() => router.push("/(root)/(tabs)/home")}
            />
            <Text className='text-center font-normal text-[14px]'>
              Do not have an account?
              <Link href="/(auth)/register" className='font-semibold cursor-pointer text-tertiary'><Text> Register</Text></Link>
            </Text>
            <View className='bg-tertiary h-[1px] w-full' />

            <CustomButton
              title='LOGIN WITH EMAIL'
              containerStyle="w-full bg-tertiary"
              onPress={() => router.push("/(root)/(tabs)/home")}
            />
          </View>
          <Text className='text-lg text-center text-dark-1 mt-3'>By continuing you agree to our
            <Text className='text-tertiary'> Terms & Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login