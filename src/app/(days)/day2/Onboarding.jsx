import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const OnboardingScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Onboarding</Text>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  maincontainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor:"#fff"
  },
});
