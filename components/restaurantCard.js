import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { themeColors } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();  
  return (
    <TouchableWithoutFeedback
    onPress={()=>navigation.navigate("Restaurant", {...item})}
    >
      <View
      style={{shadowColor:themeColors.bgColor(1)}}
      className="mr-6 bg-neutral-50 pb-3 rounded-t-3xl shadow-xl">
        <Image className="h-36 w-64 rounded-t-3xl" source={{uri: urlFor(item.image).url()}} />
        <View className="px-3 pb-2 space-y-1">
          <Text className="text-lg font-bold pt-2">
            {item.name}
          </Text>
          <View className="flex-row items-center space-x-1">
            <Image
              className="h-4 w-4"
              source={require("../assets/images/star.png")}
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.rating}</Text>
              <Text className="text-gray-700">
               ({item.reviews}) - <Text className="font-semibold">{item.category?.name}</Text> </Text>
            </Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-1 px-3">
            <Icon name="map-pin" size={15} color={themeColors.text} />
            <Text className="text-gray-700 text-xs flex-1" numberOfLines={1}>{item.adress}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
