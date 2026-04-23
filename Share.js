import React from 'react';
import { View, Image, SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity } from 'react-native';


const LOGO_SOURCE = require('../assets/logo.png');

export const Logo = () => (
  <View style={styles.logoContainer}>
    <Image 
      source={LOGO_SOURCE} 
      style={styles.logo} 
      resizeMode="contain" 
    />
  </View>
);

export const ScreenLayout = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView 
   
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.inner}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#12181F' 
  },

  inner: { 
    flex: 1, 
    justifyContent: 'center', 
    paddingHorizontal: 24 
  },

  logoContainer: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 20

  },

  logo: { 
    width: 180, 
    height: 180, 
    borderRadius:10
   },
});
