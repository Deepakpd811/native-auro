import { View, Text, TextInput, Touchable, Image,TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
import React from 'react'
import CustomButton from './CustomButton'

import { icons } from '../../constants'
import { router, usePathname } from 'expo-router'

const SearchInput = ({title,value,initialQuery,placeholder,handleChangeText,otherStyles,...props}) => {

    const pathname = usePathname();
   
    const [query, setQuery] = useState(initialQuery||'');  
    

  return (
    

      <View className=" border-2 items-center flex-row border-gray-500 rounded-xl  focus:border-orange-400 bg-black h-14 space-x-4">
        <TextInput className=" flex-1 text-white px-2 font-semibold text-base mt-0.5 "
            value={query}
            placeholder="search a vedio topic  "
            placeholderTextColor="#7b7b8b"
            // onChangeText={handleChangeText}
            onChangeText={(e)=>setQuery(e)}
        />
       <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert("Missing qquery", "Please input something");
          }
      
          if (pathname.startsWith('/search')) {
            router.setParams({query});
          } else {
            router.push(`/search/${query}`);
          }
        }}
       >
            
            <Image source={icons.search} className="w-5 h-5 mx-2" resizeMode='contain'/>
       </TouchableOpacity>
      </View>





      
   
  )
}

export default SearchInput