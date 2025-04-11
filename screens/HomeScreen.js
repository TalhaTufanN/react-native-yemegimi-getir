import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Feather';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-slate-50">
      <StatusBar barStyle="dark-content"/>
      {/* Search Bar */}
      <View className="flex-row items-center justify-between p-2 bg-white shadow-sm rounded-xl mx-4 mt-2 border-y-2 border-y-gray-200">
        <View className="flex-row items-center space-x-2">
          <Icon name='search' color="gray" size={20} />
          <TextInput placeholder="Restoran ara" className="text-gray-500 flex-1 ml-2"/>
        </View>
      </View>

    
    
    </SafeAreaView>
  )
}