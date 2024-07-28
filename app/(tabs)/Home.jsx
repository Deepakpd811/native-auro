import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../Components/SearchInput";
import Trending from "../Components/Trending";
import EmptyState from "../Components/EmptyState";

const Home = () => {
  return (
    <SafeAreaView className="bg-[#161622]">
      <FlatList
        className=" h-full"
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className=" text-3xl text-white ">{item.id}</Text>
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

              <Trending posts={[{id:1},{id:2},{id:3}] ?? []}/>

            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState title="No vedios " subtitle="be the first to upload"/>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
