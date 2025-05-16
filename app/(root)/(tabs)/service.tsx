import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const services = [
  { id: 1, title: "Book Borrowing", description: "Borrow any available book easily." },
  { id: 2, title: "Library Events", description: "Join community reading events near you." },
  { id: 3, title: "Late Fee Calculator", description: "Calculate fees for late returns." },
];

export default function Services() {
  return (
    <SafeAreaView className="w-full h-full py-5 px-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-semibold mb-4">Our Services</Text>
        {services.map(service => (
          <View key={service.id} className="mb-4 p-4 bg-white rounded-xl shadow">
            <Text className="text-lg font-semibold">{service.title}</Text>
            <Text className="text-gray-600 mt-1">{service.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}