import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailScreen = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Day One" }} />
      <Text>Day Detail Screen one</Text>
    </>
  );
};

export default DayDetailScreen;

const styles = StyleSheet.create({});
