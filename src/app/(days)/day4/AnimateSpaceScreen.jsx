import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Link, Stack } from "expo-router";

const AnimateSpaceScreen = () => {
  const animation = useRef(null);
  return (
    <View style={styles.mainscreen}>
      <LottieView
        autoPlay
        ref={animation}
        loop={false}
        style={{
          width: "80%",
          height: 200,
          backgroundColor: "black",
          alignSelf: "center",
        }}
        source={require("../../../../assets/lottie/netflex.json.json")}
      />
    </View>
  );
};

export default AnimateSpaceScreen;

const styles = StyleSheet.create({
  mainscreen: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
