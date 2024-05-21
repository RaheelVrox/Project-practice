import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ApartmentsItems = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.rightcontainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.dis}>
          This cozy studio apartment is located in the heart of downtown San
          Francisco..
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${item.price} night</Text>
          <Text style={styles.price}>★ {item.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default ApartmentsItems;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",

    flexDirection: "row",
    borderRadius: 20,
  },
  image: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 5,
    marginLeft: 10,
  },
  rightcontainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  dis: {
    color: "grey",
  },
  imageContainer: {
    justifyContent: "center",
  },
});
