import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles,isLoading}) => {
  return (
    <TouchableOpacity 
    onPress ={handlePress}
    activeOpacity={0.7}
    className= {`bg-orange-400 min-h-[62px] 
        ${containerStyles} 
        ${isLoading?"opacity-50":''} 
         disabled=${isLoading}
        rounded-xl justify-center font-bold items-center`}
    >
    <Text className={` font-semibold text-lg ${textStyles}`}>{title}</Text>

    </TouchableOpacity>
  )
}

export default CustomButton