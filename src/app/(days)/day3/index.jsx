import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
const DayDetailScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: "Day Three: Markdown" }}
      />
      <Text>Day Detail Screen three</Text>
      <Link href={"/day3/editor"} asChild>
        <Button title="Go to Editor" />
      </Link>
    </>
  );
};

export default DayDetailScreen;

const styles = StyleSheet.create({});
