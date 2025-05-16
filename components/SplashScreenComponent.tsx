import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('window');

const SplashScreenComponent = () => {
  return (
    <LinearGradient
      colors={['#2c4fc2', '#1f8bf6']} 
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>BookIn</Text>
        <Text style={styles.subtitle}>Your book Your Leisure</Text>
      </View>

      <Image
        source={require('@/assets/images/books.png')}
        style={styles.booksImage}
        resizeMode="contain"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: height * 0.2,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,     
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
  },
  booksImage: {
    width: '100%',
    height: height * 0.25,
    position: 'absolute',
    bottom: 4,
  },
});

export default SplashScreenComponent;
