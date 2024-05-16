import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

const dayes = [1, 2, 3, 4];

export default function App() {
  console.log("hi");
  return (
    <View style={styles.container}>
      {dayes.map((daye) => (
        <View style={styles.box} key={daye}>
          <Text style={styles.text}>{daye}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingVertical: 10,
  },
  box: {
    backgroundColor: "#f9ede3",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
  },
  text: {
    color: "#9b4521",
    fontSize: 24,
  },
  colum: {
    gap: 10,
    padding: 10,
  },
});
