import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../api";
import { urlFor } from "../sanity";
import { themeColors } from "../theme/theme";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible"
      >
        {categories.map((category, index) => {
          let isActive = category._id == activeCategory;
          let btnClass = isActive 
            ? "bg-white" 
            : "bg-gray-100";
          let textClass = isActive 
            ? "font-semibold" 
            : "text-gray-500";

          return (
            <View key={index} className="flex items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={`rounded-full shadow ${btnClass}`}
                style={{ 
                  width: 60, 
                  height: 60,
                  shadowColor: isActive ? themeColors.bgColor(1) : "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  padding: 1,
                  borderWidth: isActive ? 2 : 0,
                  borderColor: isActive ? themeColors.bgColor(1) : "transparent"
                }}
              >
                <Image
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    borderRadius: 30,
                    opacity: isActive ? 1 : 0.8
                  }}
                  source={{ uri: urlFor(category.image).url() }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Text
                className={`text-sm text-center mt-1 ${textClass}`}
                style={{ 
                  width: 80,
                  textAlign: 'center',
                  color: isActive ? themeColors.bgColor(1) : '#6B7280'
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
