import { View, Text, FlatList, Image, Alert, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../Components/SearchInput";
import Trending from "../Components/Trending";
import EmptyState from "../Components/EmptyState";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import VidioCards from "../Components/VidioCards";

;

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {data:posts,refetch,isLoading} = useAppwrite(getAllPosts);
  const {data:latestpost} = useAppwrite(getLatestPosts);

  // console.log(latestpost)
  const onRefresh = async ()=>{
    setRefreshing(true);
    await refetch()
    setRefreshing(false);
  }
  
  // console.log(posts)

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
                  welcome back
                </Text>
                <Text className="text-2xl text-white font-semibold">User</Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>

              <Trending latestposts={latestpost ?? []}/>

            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState title="No vedios " subtitle="be the first to upload"/>
        )}

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
};

export default Home;
