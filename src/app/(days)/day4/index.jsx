import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: "Day 4: Animate Splash Screen" }}
      />
      <Text>Animate Splash Screen</Text>
      <View style={styles.buttonContainer}>
        <Link href={"/day4/AnimateSpaceScreen"} asChild>
          <Button title="Go to Editor" />
        </Link>
      </View>
      <View style={styles.buttonContainer}>
        <Link href={"/day4/AnimateSpaceScreen"} asChild>
          <Button title="Splash Screen Animate" />
        </Link>
      </View>
    </>
  );
};

export default DayDetailScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
});
