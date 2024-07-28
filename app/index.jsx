import {View,Text, StatusBar, ScrollView, Image} from "react-native"
import {Redirect,router} from "expo-router"
import { useContext, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "./Components/CustomButton";
import { useGlobalContext } from "../context/GlobalContext";

export default function App(){
    const {isLoading,isLogedIn}=useGlobalContext();

    

    // if(!isLogedIn && !isLoading) return <Redirect href="Home"/>
    if(!false && !false) return <Redirect href="Home"/>
   

    // if(!isLoading &&!isLogedIn) return Redirect('/Home')
  
  return (
    <SafeAreaView className="bg-black h-full" >
      <ScrollView  contentContainerStyle={{height:'100%'}} >
        <View className="w-full min-h-[84vh] items-center px-4"  >
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
          
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
          
            resizeMode="contain"
          />
          <View>
            <Text className="text-white text-3xl text-center font-bold">
              Discover Endless Possibilites with {' '}
                <Text className=" text-orange-400">Aora</Text>
             </Text>

             <Text className="text-white text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Repellat reiciendis error ipsum doloribus obcaecati</Text>
          </View>

          <CustomButton
            title = "continue with email"
            handlePress={()=>router.push('/SignIn')}
            containerStyles="w-full mt-7"
          />

            {/* <Link href="/Home" className=" text-white bord">go to homee</Link> */}
          
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' />
      
    </SafeAreaView>

   
  )
}



