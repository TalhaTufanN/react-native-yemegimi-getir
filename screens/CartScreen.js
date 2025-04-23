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
import { urlFor } from "../sanity";

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
      if (group[item._id]) {
        group[item._id].push(item);
      } else {
        group[item._id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View className="flex-1 bg-white">
      <View className="p-5 border-b bg-white shadow-sm mt-5" style={{borderBottomColor: themeColors.text,}}>
        <View>
          <Text className="text-lg font-bold text-center">Sepetim</Text>
          <Text className="text-center text-gray-500">
            {restaurant?.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full bg-gray-100 absolute top-6 right-4"
        >
          <Icon name="x" size={30} />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-4 px-4 py-2 bg-white my-5">
        {restaurant?.image ? (
          <Image
            source={{uri: urlFor(restaurant.image).url()}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        ) : (
          <View className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
        )}
        <Text className="flex-1">Teslimat 20-30 dk</Text>
        <TouchableOpacity>
          <Text style={{color: themeColors.text}}>Değiştir</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="divide-y divide-gray-200"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text style={{color: themeColors.text}}>{items.length} x</Text>
              <Image
                className="h-12 w-12 rounded-full"
                source={{uri: urlFor(dish.image).url()}}
              />
              <Text className="flex-1">{dish.name}</Text>
              <Text className="text-gray-600">
                {dish.price * items.length} TL
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({ id: dish._id }))}
              >
                <Text style={{color: themeColors.text}} className="text-xs">Kaldır</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Ara Toplam</Text>
          <Text className="text-gray-400">{cartTotal} TL</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Teslimat Ücreti</Text>
          <Text className="text-gray-400">{deliveryFee} TL</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>Toplam</Text>
          <Text className="font-extrabold">{cartTotal + deliveryFee} TL</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("OrderPrepare")}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="rounded-lg p-4"
        >
          <Text className="text-center text-white text-lg font-bold">
            Sipariş Ver
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
