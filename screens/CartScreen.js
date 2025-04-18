import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../slices/cartSlice";

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const deliveryFee = 40;
  const dispatch = useDispatch();
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
  return (
    <View className="flex-1 bg-white">
      <View className="relative mt-10">
        {/* Geri Butonu */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: themeColors.bgColor(1),
            shadowColor: themeColors.bgColor(1),
          }}
          className="absolute z-10 left-4 p-2 rounded-full shadow-lg border-2 border-neutral-300"
        >
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Sepetim</Text>
          <Text className="text-center text-gray-500"> {restaurant.name} </Text>
        </View>
      </View>
      {/* Teslimat Süresi */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center mt-2"
      >
        <Image
          source={require("../assets/images/delivery-bike.png")}
          className="w-16 h-16"
        />
        <Text className="flex-1 pl-16 font-medium">Yaklaşık 20-30 dk</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Değiştir
          </Text>
        </TouchableOpacity>
      </View>
      {/* Sepetteki Yemekler */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              shadowColor={themeColors.bgColor(1)}
              className="flex-row items-center space-x-3 border-b-4 border-b-neutral-200 py-2 px-4 bg-white rounded-full shadow-lg"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} x
              </Text>
              <Image className="w-14 h-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="text-base font-semibold ">{dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon name="minus" size={20} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* Toplam Tutar */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-6 rounded-t-3xl space-y-1 mb-0"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Sipariş Ücreti</Text>
          <Text className="text-gray-700">{cartTotal} TL</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Kargo Ücreti</Text>
          <Text className="text-gray-700">{deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Toplam</Text>
          <Text className="text-gray-700 font-extrabold">
            {cartTotal + deliveryFee} TL
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPrepare")}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Sipariş Ver
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
