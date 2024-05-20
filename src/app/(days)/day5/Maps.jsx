import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Link, Stack } from "expo-router";
im;
const Maps = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false, title: "" }} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="1 bd apertment"
          description="Hello websols"
        />
        <Marker
          coordinate={{ latitude: 37.78125, longitude: -122.4424 }}
          title="2 bd apertment"
          description="Hello websols"
        />
      </MapView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
