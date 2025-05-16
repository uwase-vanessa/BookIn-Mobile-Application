import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { EyeClose, EyeOpen } from '@/components/svgs'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = () => {
  const [formData,setFormData]= useState({
    names:'',
    email:'',
    password:'',
    confirmPassword:''
  })
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <SafeAreaView className='flex w-full h-full login-background'>
      < ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1
      }}
      >
        <View className='flex-1 w-full px-6 py-10 flex gap-6 items-center justify-center'>
          {/* Logo and title*/}
          <View className='w-full flex flex-col gap-4 items-center'>

          <Text className='text-3xl text-tertiary font-semibold'>BookIn Register</Text>

          </View>
          <View className='w-full flex gap-6'>
           <View className='w-full flex flex-col gap-4'>
           <CustomInput 
            labelText='Names' 
            value={formData.names}
            onChangeText={(text)=>setFormData({...formData,names:text})}
            />
            <CustomInput 
            labelText='Email' 
            value={formData.email}
            onChangeText={(text)=>setFormData({...formData,email:text})}
            />
            <CustomInput 
             labelText='Password' 
             value={formData.password}
             onChangeText={(text)=>setFormData({...formData,password:text})}
             secureTextEntry={!showPassword}
             iconRight={{
             close: <EyeClose onPress={() => setShowPassword(!showPassword)} />,
             open: <EyeOpen onPress={() => setShowPassword(!showPassword)} />
       }}
    />
         <CustomInput 
  labelText='Confirm Password' 
  value={formData.confirmPassword}
  onChangeText={(text)=>setFormData({...formData,confirmPassword:text})}
  secureTextEntry={!showConfirmPassword}
  iconRight={{
    close: <EyeClose onPress={() => setShowConfirmPassword(!showConfirmPassword)} />,
    open: <EyeOpen onPress={() => setShowConfirmPassword(!showConfirmPassword)} />
  }}
/>


           </View>
            <CustomButton 
            title='REGISTER' 
            containerStyle="w-full bg-tertiary"
            onPress={()=>router.push("/(root)/(tabs)/home")}
            />
            <Text className='text-center font-normal text-[14px]'>
              Already have an account? 
              <Link href="/(auth)/login" className='font-semibold cursor-pointer text-tertiary'><Text> Login</Text></Link>
              </Text>

           </View>

           <Text className='text-lg text-center text-dark-1'>By continuing you agree to our 
           <Text className='text-blue-600'>Terms & Privacy Policy</Text></Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register