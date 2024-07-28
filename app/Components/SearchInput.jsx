import { View, Text, TextInput, Touchable, Image,TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import CustomButton from './CustomButton'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons } from '../../constants'

const SearchInput = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {

    const [showPassword, setshowPassword] = useState(false)
    

  return (
    

      <View className=" border-2 items-center flex-row border-gray-500 rounded-xl  focus:border-orange-400 bg-black h-14 space-x-4">
        <TextInput className=" flex-1 text-white px-2 font-semibold text-base mt-0.5 "
            value={value}
            placeholder="search a vedio topic  "
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title=='Password' && !showPassword}
        />
       <TouchableOpacity>
            <Image source={icons.search} className="w-5 h-5 mx-2" resizeMode='contain'/>
       </TouchableOpacity>
      </View>





      
   
  )
}

export default SearchInput