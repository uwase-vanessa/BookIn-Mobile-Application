import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from '../../services/api';

// Define the Book type for TypeScript
type Book = {
  id: string;
  title: string;
  author: string;
  price: string;
  createdAt?: string;
};

// Default image for books (local asset)
const defaultBookImage = require("@/assets/images/book.png");

export default function Shop() {
  // State for books, search, modal, new book, loading, and error
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [newBook, setNewBook] = useState<Book>({ id: "", title: "", author: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const router = useRouter();

  // Fetch books from the API on mount
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to fetch books from the API
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await api.get<Book[]>('/books');
      setBooks(res.data.reverse()); // Show newest first
    } catch (error) {
      Alert.alert("Error", "Failed to fetch books.");
    }
    setLoading(false);
  };

  // Filter books based on search input
  const filteredBooks = books.filter(
    (book) =>
      book.title?.toLowerCase().includes(search.toLowerCase()) ||
      book.author?.toLowerCase().includes(search.toLowerCase()) ||
      book.id?.toLowerCase().includes(search.toLowerCase())
  );

  // Add new book to the API and update local state
  const handleSubmit = async () => {
    if (!newBook.id || !newBook.title || !newBook.author || !newBook.price) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }
    setAdding(true);
    try {
      const res = await api.post<Book>('/books', newBook);
      setBooks([res.data, ...books]);
      setNewBook({ id: "", title: "", author: "", price: "" });
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Error", "Failed to add book.");
    }
    setAdding(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20 }}>
        {/* Page Title and Add Book Button */}
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-3xl font-bold text-tertiary">Book Store</Text>
          <TouchableOpacity
            className="bg-tertiary px-4 py-2 rounded-lg"
            onPress={() => setModalVisible(true)}
          >
            <Text className="text-white font-semibold">Add Book</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TextInput
          placeholder="Search by title, author, or SNB..."
          value={search}
          onChangeText={setSearch}
          className="bg-white px-4 py-3 rounded-xl mb-5 border border-gray-200"
        />

        {/* Book List */}
        {loading ? (
          <ActivityIndicator size="large" color="#1656AD" className="mt-10" />
        ) : filteredBooks.length === 0 ? (
          <Text className="text-center text-gray-400 mt-10">No books found.</Text>
        ) : (
          filteredBooks.map((book) => (
            <View
              key={book.id}
              className="flex flex-row bg-white p-4 rounded-2xl mb-5 shadow-lg items-center"
            >
              {/* Book Image (always uses default image) */}
              <Image source={defaultBookImage} className="w-20 h-28 rounded-lg" />
              {/* Book Details */}
              <View className="ml-5 flex-1">
                <Text className="text-xl font-semibold mb-1">{book.title}</Text>
                <Text className="text-gray-500 mb-1">{book.author}</Text>
                <Text className="text-xs text-gray-400 mb-1">SNB: {book.id}</Text>
                <Text className="text-tertiary font-bold text-lg mb-3">${book.price}</Text>
                {/* Add to Cart Button */}
                <TouchableOpacity className="bg-tertiary py-2 px-4 rounded-lg self-start">
                  <Text className="text-white font-semibold">Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}

        {/* Cart Summary (static example, make dynamic as needed) */}
        <View className="bg-white rounded-2xl p-5 mt-8 shadow">
          <Text className="text-lg font-semibold mb-2">Cart Summary</Text>
          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-600">Total Books</Text>
            <Text className="font-semibold">{books.length}</Text>
          </View>
          <TouchableOpacity className="bg-tertiary py-3 rounded-xl mt-2">
            <Text className="text-white text-center font-bold text-lg">Proceed to Borrow</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal for Adding a New Book */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View className="flex-1 justify-center items-center bg-black/40">
          <View className="bg-white rounded-2xl p-6 w-11/12">
            <Text className="text-xl font-bold mb-4 text-tertiary">Add New Book</Text>
            <TextInput
              placeholder="Book Name"
              value={newBook.title}
              onChangeText={(text) => setNewBook({ ...newBook, title: text })}
              className="border border-gray-200 rounded-lg px-3 py-2 mb-3"
            />
            <TextInput
              placeholder="Author"
              value={newBook.author}
              onChangeText={(text) => setNewBook({ ...newBook, author: text })}
              className="border border-gray-200 rounded-lg px-3 py-2 mb-3"
            />
            <TextInput
              placeholder="Price (e.g. 22.59)"
              value={newBook.price}
              keyboardType="decimal-pad"
              onChangeText={(text) => setNewBook({ ...newBook, price: text })}
              className="border border-gray-200 rounded-lg px-3 py-2 mb-3"
            />
            <TextInput
              placeholder="Unique ID (e.g. SNB123)"
              value={newBook.id}
              onChangeText={(text) => setNewBook({ ...newBook, id: text })}
              className="border border-gray-200 rounded-lg px-3 py-2 mb-5"
            />
            <View className="flex-row justify-end gap-3">
              <TouchableOpacity
                className="px-4 py-2 rounded-lg bg-gray-200"
                onPress={() => setModalVisible(false)}
                disabled={adding}
              >
                <Text className="text-gray-700 font-semibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="px-4 py-2 rounded-lg bg-tertiary"
                onPress={handleSubmit}
                disabled={adding}
              >
                <Text className="text-white font-semibold">{adding ? "Adding..." : "Add"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
