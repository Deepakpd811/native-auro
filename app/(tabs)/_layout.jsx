import React from 'react'
import { View, Text,Image } from 'react-native'
import {Tabs, Redirect} from "expo-router"
import {icons} from "../../constants"

const TabIcon =({icon, color, name, focused})=>{
    return (
        <View className="items-center justify-center gap-2">
           <Image
           source={icon}
           resizeMode='contain'
           tintColor={color}
           className ="w-6 h-6"
           />
           <Text className={`${focused?`font-psemibold`:"font-preqular"} text-xs`} style={{color:"white"}} >{name}</Text>
        </View>
    )
}


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:"#FFA001",
        tabBarInactiveTintColor:"#CDC01",
        tabBarStyle:{
            backgroundColor:"#161622",
            height:80
        }

        }}>
        <Tabs.Screen  
        name='Home'
        options={{
            title:"Home",
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}

                 />
            )
        }}
        />
        <Tabs.Screen  
        name='Bookmark'
        options={{
            title:"bookmark",
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabIcon 
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}

                 />
            )
        }}
        />
        <Tabs.Screen  
        name='Create'
        options={{
            title:"create",
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabIcon 
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}

                 />
            )
        }}
        />
        <Tabs.Screen  
        name='Profile'
        options={{
            title:"profile",
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabIcon 
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}

                 />
            )
        }}
        />
    </Tabs>
  )
}

export default TabsLayout