import { View, Text, FlatList} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../Components/SearchInput";
import EmptyState from "../Components/EmptyState";
import useAppwrite from "../../lib/useAppwrite";
import { searchPosts, userPosts } from "../../lib/appwrite";
import VidioCards from "../Components/VidioCards";
import { useLocalSearchParams } from "expo-router";


const Search = () => {
  const {query} = useLocalSearchParams();


  const {data:posts,refetch,isLoading} = useAppwrite(()=>searchPosts(query));
  // console.log(posts,query)

  useEffect(()=>{
    refetch();
  },[query])
  

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
          <View className="my-3 px-4 space-y-6">
            <View className=" justify-between items-center flex-row mb-6">
              <View>
                <Text className="font-medium text-sm text-gray-400">
                  Search
                </Text>
                <Text className="text-2xl text-white font-semibold">{query}</Text>
              </View>

             
            </View>

            <SearchInput  initialQuery={query}  />

           
          </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState title="No vedios " subtitle={`No such video found for ${query} `}/>
        )}

       
      />
    </SafeAreaView>
  );
};

export default Search;
