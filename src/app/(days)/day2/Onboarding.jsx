import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  StatusBar,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { Link, Stack, router } from "expo-router";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
} from "react-native-reanimated";

const OnboardingStep = [
  {
    icon: "snowflake",
    title: "Welcome Raheel Mubarik",
    description: "Daily React native tutorials during Feb",
  },
  {
    icon: "people-arrows",
    title: "Learn and grow together",
    description: "Learn by building 24 projects with react native and expo",
  },
  {
    icon: "people-arrows",
    title: "Education for children",
    description: "Contribute to the fundraiser",
  },
];

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = OnboardingStep[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === OnboardingStep.length - 1;
    if (isLastScreen) {
      endboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const endboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const onFling = (event) => {
    if (event.nativeEvent.state === State.END) {
      const { velocityX } = event.nativeEvent;
      if (velocityX > 0) {
        if (screenIndex > 0) {
          setScreenIndex(screenIndex - 1);
        } else {
          endboarding();
        }
      } else {
        if (screenIndex < OnboardingStep.length - 1) {
          setScreenIndex(screenIndex + 1);
        } else {
          onContinue();
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="light-content" />
      <FlingGestureHandler
        direction={Directions.LEFT}
        onHandlerStateChange={onFling}
      >
        <FlingGestureHandler
          direction={Directions.RIGHT}
          onHandlerStateChange={onFling}
        >
          <Animated.View
            entering={SlideInLeft}
            // exiting={FadeOut}
            key={screenIndex}
            style={styles.pagecontainer}
          >
            <View style={styles.stepsIndicatorecontainer}>
              {OnboardingStep.map((step, index) => (
                <View
                  key={index}
                  style={[
                    styles.stepsIndicator,
                    {
                      backgroundColor:
                        index === screenIndex ? "#cef202" : "grey",
                    },
                  ]}
                />
              ))}
            </View>

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
                  Skip
                </Text>
                <Pressable onPress={onContinue} style={styles.button}>
                  <Text style={styles.buttontext}>Continue</Text>
                </Pressable>
              </View>
            </View>
          </Animated.View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  maincontainer: {
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
  description: {
    color: "gray",
    fontSize: 20,
    lineHeight: 28,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 50,
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
  stepsIndicatorecontainer: {
    flexDirection: "row",
    paddingTop: 20,
    gap: 5,
  },
  stepsIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
