import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import React from "react";
import DayListItem from "../component/core/DayListItem";

const dayes = [...Array(26)].map((val, index) => index + 1);

export default function HomeScreen() {
  console.log("hi");
  return (
    <View style={styles.container}>
      <FlatList
        data={dayes}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
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
  colum: {
    gap: 10,
    padding: 10,
  },
});
