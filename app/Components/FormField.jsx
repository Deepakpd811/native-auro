import { View, Text, TextInput, Touchable, Image,TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import CustomButton from './CustomButton'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons } from '../../constants'

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {

    const [showPassword, setshowPassword] = useState(false)
    

  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className=" text-base text-gray-100">{title}</Text>

      <View className=" border-2 items-center flex-row border-gray-500 rounded-xl  focus:border-orange-400 bg-black h-14">
        <TextInput className=" flex-1 text-white px-2 font-semibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title=='Password' && !showPassword}
        />
        {title=="Password" && (
            <TouchableOpacity onPress={()=>setshowPassword(!showPassword)}>
                <Image 
                className="w-6 mx-6"
                resizeMode='contain'
                source={!showPassword?icons.eye:icons.eyeHide}/>
            </TouchableOpacity>
        )}
      </View>





      
    </View>
  )
}

export default FormField