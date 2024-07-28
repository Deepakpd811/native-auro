import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../Components/FormField'
import CustomButton from '../Components/CustomButton'
import { Link, router } from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalContext'

const SignIn = () => {
  const [form,SetForm]=useState({
    email:'',
    password:''
  })

  const {setUser,setIsLogedIn}=useGlobalContext()

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      return Alert.alert("Error", "please fill all the form");
    }
    setSubmitting(true);
    
    try {
    
      await signIn(form.email, form.password);

      const res = getCurrentUser();

      setUser(res);
      setIsLogedIn(true);
      
     
      //set to global state

      Alert.alert("Sucess","User sign is successfull")
      router.replace('/Home');
    } catch (error) {
      Alert.alert("Error",error.message);
    } finally {
      setSubmitting(false);
    }

    console.log("done")
  };

  return (
   <SafeAreaView className="bg-black h-full">
    <ScrollView >
      <View className="min-h-[84vh] justify-center w-full px-4 my-6">
        <Image
          source={images.logo}
          resizeMode='contain'
          className ="h-[35px] w-[115px]"
        />
        <Text className="text-white font-semibold text-2xl mt-10">Log in to Aora</Text>

        {/* input field  */}
        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e)=> SetForm({...form,email:e})}
          otherStyles="mt-7"
        />
        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e)=> SetForm({...form,password:e})}
          otherStyles="mt-7"
        />

        <CustomButton handlePress={handleSubmit} title="Sign In" containerStyles="mt-7"/>

        <Text className=" text-gray-200 text-center mt-7 text-base">
          Dont have a account?  <Link href="SignUp" className="text-orange-400 font-semibold">Sign Up</Link> 
        </Text>

      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SignIn