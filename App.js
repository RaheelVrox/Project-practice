import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import React from "react";

const dayes = [1, 2, 3, 4, 5, 6];

export default function App() {
  console.log("hi");

  const renderItem = ({ item }) => (
    <View style={styles.box}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dayes}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.colum}
      />
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
