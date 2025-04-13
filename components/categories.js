import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible"
      >
        {categories.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? "bg-gray-800" : "bg-gray-200";
          let textClass = isActive ? "font-semibold text-gray-800" : "text-gray-500";

          return (
            <View key={index} className="flex justify-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={"p-2 rounded-full shadow "+btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
                
              <Text className={"text-sm text-center "+textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>

  );
}
