import { View, Text, FlatList, Image} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../Components/SearchInput";
import EmptyState from "../Components/EmptyState";
import useAppwrite from "../../lib/useAppwrite";
import { searchPosts, signOut, userPosts } from "../../lib/appwrite";
import VidioCards from "../Components/VidioCards";
import { router, useLocalSearchParams } from "expo-router";
import {useGlobalContext} from "../../context/GlobalContext"
import { TouchableOpacity } from "react-native";
import { icons } from "../../constants";


const Profile = () => {
    const {setIsLogedIn, user, setUser} = useGlobalContext();
    
   
  const {data:posts,refetch,isLoading} = useAppwrite(()=>userPosts(user.$id));

  
  console.log(posts)

  const logout=async ()=>{
    await signOut();
    setUser(null);
    setIsLogedIn(false);

    router.replace('/SignIn')
  }


  return (
    <SafeAreaView className="bg-[#161623]">
      <FlatList
        className=" h-full"
        data={posts}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          
          <VidioCards video={item}/>

        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">

            <TouchableOpacity className="w-full items-end mb-10" onPress={logout}>
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
                
              />
            </TouchableOpacity>

            <View className=" w-16 h-16 justify-center items-center rounded-lg border border-orange-300">
                  <Image
                    source={{uri:user?.avatar}}
                    className="w-[90%] h-[90%] rounded-lg"
                    resizeMode="cover"
                  />
            </View>

          </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState title="No vedios " subtitle={`No such video found for `}/>
        )}

       
      />
    </SafeAreaView>
  );
};

export default Profile;
