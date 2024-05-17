import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { Link, Stack, router } from "expo-router";
const OnboardingStep = [
  {
    icon: "snowflake",
    title: "Wellcome Raheel Mubarik ",
    description: " Daily React native tutorials during Feb",
  },
  {
    icon: "people-arrows",
    title: "Learn and grow together ",
    description: " Learn by building 24 project with react native and expo",
  },
  {
    icon: "people-arrows",
    title: "Eduction for children ",
    description: "contribute to the fundraiser",
  },
];
const OnboardingScreen = () => {
  const [screenIndex, SetScreenIndex] = useState(0);
  const data = OnboardingStep[screenIndex];
  const onContinue = () => {
    const isLastScreen = screenIndex === OnboardingStep.length - 1;
    if (isLastScreen) {
      endboarding();
    } else {
      SetScreenIndex(screenIndex + 1);
    }
  };
  const endboarding = () => {
    SetScreenIndex(0);
    router.back();
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pagecontainer}>
        <FontAwesome5
          style={styles.image}
          name={data.icon}
          size={100}
          color="#cef202"
        />
        <View style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.buttonRow}>
            <Text onPress={endboarding} style={styles.buttontext}>
              Skip{" "}
            </Text>
            <Pressable onPress={onContinue} style={styles.button}>
              <Text style={styles.buttontext}>Continue </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  maincontainer: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141a",
  },
  title: {
    color: "#fdfdfd",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 1,
    marginVertical: 10,
  },
  description: { color: "gray", fontSize: 20, lineHeight: 28 },
  image: {
    alignSelf: "center",
    margin: 20,
  },
  footer: {
    marginTop: "auto",
  },
  pagecontainer: {
    padding: 20,
    flex: 1,
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#382e38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttontext: {
    color: "#fdfdfd",
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    paddingHorizontal: 25,
  },
});
