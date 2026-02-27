import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme/theme";
import Icon from "@expo/vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../slices/cartSlice";
import { urlFor } from "../sanity";

export default function DishRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item._id),
  );
  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };
  return (
    <View
      style={{ shadowColor: themeColors.bgColor(1) }}
      className="flex-row items-center bg-white rounded-3xl pt-1  mb-3 mx-2  shadow-lg"
    >
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{ uri: urlFor(item.image).url() }}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-lg">{item.description} </Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="font-bold text-lg text-gray-800">
            {item.price} TL
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="rounded-full p-1"
            >
              <Icon name="minus" size={20} color="white"></Icon>
            </TouchableOpacity>
            <Text className="p-2 font-bold text-lg">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="rounded-full p-1 mr-2"
            >
              <Icon name="plus" size={20} color="white"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
