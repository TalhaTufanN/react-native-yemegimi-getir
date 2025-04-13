import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Feather";
import { themeColors } from "../theme/theme";
import Categories from "../components/categories";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-slate-50">
      <StatusBar barStyle="dark-content" />
      {/* Arama Barı */}
      <View className="flex-row items-center space-x-2 mt-1 px-3 mr-14 pb-2">
        <View className="flex-row items-center justify-between p-2 bg-white shadow-sm rounded-full border border-gray-300">
          <Icon name="search" color="gray" size={20} />
          <TextInput
            placeholder="Restoran ara"
            className="text-gray-500 flex-1 ml-2"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300 pl-2 mr-2">
            <Icon name="map-pin" color="gray" size={20} />
            <Text className="text-gray-500">İstanbul</Text>
          </View>
        </View>
          <View style={{backgroundColor:themeColors.bgColor(1),borderRadius:100}} className="p-3">
            <Icon name="sliders" color="white" size={20} />
          </View>
      </View>
      {/* Ana ekran içeriği */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>

      {/* kategoriler */}
       <Categories></Categories>
      </ScrollView>


    </SafeAreaView>
  );
}
