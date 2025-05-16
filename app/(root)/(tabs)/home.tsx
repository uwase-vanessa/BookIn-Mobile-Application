import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell } from "@/components/svgs";
import CustomInput from "@/components/CustomInput";
import SearchInput from "@/components/SearchInput";
import { Link, router } from "expo-router";
import { data } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Home = () => {
  const [searhValue, setSearchValue] = useState("");
  return (
    <SafeAreaView className="w-full h-full flex py-5 px-6">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full h-full flex flex-col gap-5">
          <View className="w-full flex flex-row justify-between items-center">
            <View className="flex flex-row gap-4 items-center">
              <View className="w-20 h-20 overflow-hidden rounded-full">
                <Image
                  className=" w-full h-full"
                  source={require("@/assets/images/sarah.png")}
                />
              </View>
              <View className="flex flex-col gap-2">
                <Text className="text-2xl font-semibold">Hello, Vanessa</Text>
                <Text className="text-black/50 text-lg">Good Morning!</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Bell  onPress={() => router.push("/(root)/(features)/notifications")}/>
            </TouchableOpacity>
          </View>

          {/* Searchbar */}
          <SearchInput
            onChangeText={(text) => setSearchValue(text)}
            placeholder="Search"
          />

          <View className="w-full h-auto px-4 py-2  bg-white shadow-md rounded-2xl">
            <View className="w-full flex flex-row justify-between items-center">
              <View className="flex gap-1">
                <Text className="text-xl font-semibold">
                  In Love With Books?
                </Text>
                <Text className="text-sm text-tertiary font-medium">
                  Get all what you need for them
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full flex flex-row justify-between items-center">
            <Text className="text-lg font-semibold text-dark-1">Category</Text>
            <Link href="/(root)/(tabs)/home">
              <Text className="text-black/60">See all</Text>
            </Link>
          </View>
          <View className="w-full flex flex-row justify-between overflow-hidden flex-nowrap">
            {data.categories.map((category) => (
              <View
                key={category.id}
                className="flex flex-col gap-1 items-center"
              >
                <Image className="w-16 h-16" source={category.image} />
                <Text>{category.title}</Text>
              </View>
            ))}
          </View>
          <View className="w-full flex flow-row justify-between">
            <Text className="text-lg font-semibold text-dark-1">Event</Text>
          </View>
          <View className="w-full h-[140px] bg-white py-3 px-4 rounded-2xl">
            <View className="w-full flex-row justify-between items-center h-full">
              <View className="flex-1 pr-4 justify-between h-full">
                <Text className="font-semibold text-base">
                  Find Near Libraries For Reading Events!
                </Text>
                <CustomButton
                  containerStyle="bg-tertiary w-[100px] mt-2"
                  title="See More"
                  onPress={() => router.push("/(root)/(features)/notifications")}
                />
              </View>

              <Image
                source={require("@/assets/images/reading_event.png")}
                className="w-36 h-36 rounded-2xl"
                style={{ resizeMode: "cover" }}
              />
            </View>
          </View>
          <View className="w-full flex flow-row justify-between">
            <Text className="text-lg font-semibold text-dark-1">New Books</Text>
          </View>
          <View className="w-full h-[140px] bg-white py-3 px-4 rounded-2xl">
            <View className="w-full flex-row justify-between items-center h-full">
              <View className="flex-1 pr-4 justify-between h-full">
                <Text className="font-semibold text-base">
                The Summer I Turned Pretty 
                </Text>
                <CustomButton
                  containerStyle="bg-tertiary w-[100px] mt-2"
                  title="Find More"
                  onPress={() => router.push("/(root)/(features)/notifications")}
                />
              </View>

              <Image
                source={require("@/assets/images/book.png")}
                className="w-36 h-36 rounded-2xl"
                style={{ resizeMode: "cover" }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
