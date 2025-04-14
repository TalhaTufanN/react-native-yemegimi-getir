import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { themeColors } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();  
  return (
    <TouchableWithoutFeedback
    onPress={()=>navigation.navigate("Restaurant", {...item})}
    >
      <View
      style={{shadowColor:themeColors.bgColor(1)}}
      className="mr-6 bg-neutral-50 pb-1 rounded-s-3xl shadow-xl border-neutral-200">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">
            {item.name}
          </Text>
          <View className="flex-row items-center space-x-1">
            <Image
              className="h-4 w-4"
              source={require("../assets/images/star.png")}
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
               {} ({item.reviews}) - <Text className="font-semibold">{item.category}</Text> </Text>
            </Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-1 px-3">
            <Icon name="map-pin" size={15} />
            <Text className="text-gray-700 text-xs">{item.address}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
