import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserProfile() {
  return (
    <SafeAreaView className="w-full h-full py-5 px-6 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View className="items-center mb-8">
          <Image
            source={require("@/assets/images/sarah.png")}
            className="w-24 h-24 rounded-full border-4 border-primary"
          />
          <Text className="text-2xl font-bold mt-4">Sarah Johnson</Text>
          <Text className="text-gray-500 mb-2">sarah@example.com</Text>
          <TouchableOpacity className="bg-primary px-6 py-2 rounded-full mt-2">
            <Text className="text-white font-semibold">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Account Info */}
        <View className="bg-gray-100 rounded-xl p-5 mb-8">
          <Text className="text-lg font-semibold mb-3">Account Info</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base text-dark-1">Membership:</Text>
            <Text className="text-base text-primary font-semibold">Premium</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base text-dark-1">Borrowed Books:</Text>
            <Text className="text-base text-dark-1 font-semibold">5</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-base text-dark-1">Joined:</Text>
            <Text className="text-base text-dark-1 font-semibold">Jan 2024</Text>
          </View>
        </View>

        {/* Actions */}
        <View className="flex flex-col gap-4">
          <TouchableOpacity className="bg-secondary rounded-lg py-3 px-4">
            <Text className="text-center text-white font-semibold">My Borrowed Books</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-tertiary rounded-lg py-3 px-4">
            <Text className="text-center text-white font-semibold">Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 rounded-lg py-3 px-4">
            <Text className="text-center text-dark-1 font-semibold">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}