import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.loadingText}>Getting the weather!</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 35,
        paddingVertical: 100,
        backgroundColor: "#fae0df"
    },
    loadingText: {
        color: '#898b8a',
        fontSize: 35,
    },
  });