import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { themeColors } from "../theme/theme";
import DishRow from "../components/dishRow";
import InfoCart from "../components/infoCart";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  // console.log('restaurant: ', item);
  return (
    <View className="flex-1">
      <InfoCart/>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-10 left-4 p-2 rounded-full border-2 border-neutral-300"
            style={{backgroundColor:themeColors.bgColor(1)}}
          >
            <Icon name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  className="h-4 w-4"
                  source={require("../assets/images/star.png")}
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    {} ({item.reviews}) -{" "}
                    <Text className="font-semibold">{item.category}</Text>{" "}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1 px-3">
                <Icon name="map-pin" size={15} />
                <Text className="text-gray-700 text-xs">{item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white" >
          <Text className="px-4 py-4 text-2xl font-bold">Menü</Text>
          {/* Yemekler */}
          {
            item.dishes.map((dish,index)=> <DishRow item={{...dish}} key={index} />)
          }
        </View>
      </ScrollView>
    </View>
  );
}
