import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon
} from "react-native-heroicons/outline"

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pt-5">
      <Text className="text-red-500">
        {/* Header  */}
        <View className="flex-row pb-3 item-center mx-4 space-x-2">
          <Image
            source={{
              uri: "http://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View>
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
