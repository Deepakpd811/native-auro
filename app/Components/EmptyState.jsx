import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className=" justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px] "
        resizeMode="contain"
      />
      <View className=" justify-between items-center flex-row mb-6">
        <View>
          <Text className="font-medium text-sm text-gray-400">{subtitle}</Text>
          <Text className="text-2xl text-center text-white font-semibold">
            {title}
          </Text>
        </View>
      </View>
      <CustomButton title="Create vedio"
       handlePress={()=>router.push('/Create')}
       containerStyles="w-full my-5"
       />
    </View>
  );
};

export default EmptyState;
