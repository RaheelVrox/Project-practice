import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: "Day 5: Google map" }}
      />
      <Text>Animate Splash Screen</Text>
      <View style={styles.buttonContainer}>
        <Link href={"/day5/Maps"} asChild>
          <Button title="Go to Editor" />
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
