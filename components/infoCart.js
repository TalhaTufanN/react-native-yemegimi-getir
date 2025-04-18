import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function InfoCart() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems.length) return;
  return (
    <View className="absolute bottom-0 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-2 rounded-xl p-3 mb-2"
      >
        <View className="p-1 ml-1 rounded-full px-3 items-center border-2 border-neutral-200 ">
          <Text className="font-mono text-white text-base text-center items-center">
            {cartItems.length}
          </Text>
        </View>
        <Text className="flex-1 text-center items-center font-mono text-white text-lg">
          Sepete Git
        </Text>
        <View
          className="p-1 rounded-full px-4 items-center"
          style={{ backgroundColor: "rgba(90,20,20,0)" }}
        >
          <Text className="font-mono text-white text-lg text-center items-center">
            {cartTotal} TL
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
