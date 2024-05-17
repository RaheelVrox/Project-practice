import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
const DayDetailScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: "Day Two: Onboarding" }}
      />
      <Text>Day Detail Screen two</Text>
      <Link href={"/day2/Onboarding"} asChild>
        <Button title="Go to Onboarding" />
      </Link>
    </>
  );
};

export default DayDetailScreen;

const styles = StyleSheet.create({});
