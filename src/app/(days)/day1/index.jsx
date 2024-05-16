import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Day one" }} />
      <Text>Day Detail Screen</Text>
    </View>
  );
};

export default DayDetailScreen;

const styles = StyleSheet.create({});
