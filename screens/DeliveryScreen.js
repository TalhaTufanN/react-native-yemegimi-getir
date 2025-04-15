import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import  MapView , {Marker} from 'react-native-maps';
import { themeColors } from '../theme/theme';
import Icon from "react-native-vector-icons/Feather";

export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation()
  return (
    <View className="flex-1">
        {/* Haritalandıma */}
        <MapView
        initialRegion={{
            longitude: restaurant.lng,
            latitude: restaurant.lat,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
        >
            <Marker 
            coordinate={{
                latitude:restaurant.lat,
                longitude:restaurant.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
            pinColor={themeColors.bgColor(1)}
            />

        </MapView>
        <View className="rounded-t-3xl -mt-12 bg-white relative">
            <View className="flex-row justify-between px-5 pt-10">
                <View>
                    <Text className="text-lg text-gray-700 font-semibold">
                        Tahmini Ulaşım Süresi
                    </Text>
                    <Text className="text-3xl text-gray-700 font-extrabold">
                        25-30 dakika
                    </Text>
                    <Text className=" text-gray-700 font-semibold">
                        Siparişiniz yolda.
                    </Text>
                </View>
                    <Image className="w-24 h-24" source={require("../assets/images/delivery-bike.png")}></Image>
            </View>
            <View
                style={{backgroundColor:themeColors.bgColor(0.8)}}
                className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
            >
                <View className="p-1 rounded-full"
                style={{backgroundColor: "rgba(255,255,255,0.4)"}}>
                    <Image className="h-16 w-16 rounded-full"
                    source={{ uri: 'https://avatars.githubusercontent.com/u/132274371' }}
                    />
                </View>
                <View className="flex-1 ml-3">
                    <Text className="text-lg font-bold text-white" >
                        Talha Tufan
                    </Text>
                    <Text className="font-semibold text-white" >
                        Getiren 
                    </Text>
                </View>
                <View className="flex-row items-center space-x-3 mr-3">
                    <TouchableOpacity className="bg-white p-2 rounded-full">
                    <Icon name='phone' color={themeColors.bgColor(1)} size={25}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")} className="bg-white p-2 rounded-full">
                    <Icon name='x' color={themeColors.bgColor(1)} size={25}  ></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}