import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const DayDetailScreen = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Day Two" }} />
      <Text>Day Detail Screen two</Text>
    </>
  );
};

export default DayDetailScreen;

const styles = StyleSheet.create({});
