import React, { useMemo, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import ApartmentsItems from "../../../component/core/ApartmentsItems";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const items = [
  {
    id: 1,
    latitude: 37.7749,
    longitude: -122.4194,
    price: 150,
    title: "Cozy Studio in Downtown SF",
    numberofstars: 4,
    rating: 4.5,
    image: "https://source.unsplash.com/600x400/?apartment",
  },
  {
    id: 2,
    latitude: 37.7837,
    longitude: -122.4089,
    price: 200,
    title: "Luxurious Apartment with Bay View",
    numberofstars: 5,
    rating: 4.8,
    image: "https://source.unsplash.com/600x400/?house",
  },
  {
    id: 3,
    latitude: 37.7577,
    longitude: -122.4376,
    price: 120,
    title: "Charming Victorian House near Golden Gate Park",
    numberofstars: 4,
    rating: 4.3,
    image: "https://source.unsplash.com/600x400/?loft",
  },
  {
    id: 4,
    latitude: 37.7884,
    longitude: -122.4079,
    price: 180,
    title: "Modern Loft in SoMa District",
    numberofstars: 4,
    rating: 4.6,
    image: "https://source.unsplash.com/600x400/?penthouse",
  },
  {
    id: 5,
    latitude: 37.7981,
    longitude: -122.4056,
    price: 250,
    title: "Penthouse with Panoramic City Views",
    numberofstars: 5,
    rating: 4.9,
    image: "https://source.unsplash.com/600x400/?penthouse",
  },
];

const Maps = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const snapPoints = useMemo(() => ["5.5%", "40%", "80%"], []);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // initialRegion={mapRegion}
        region={mapRegion}
      >
        {items.map((item) => (
          <Marker
            key={item.id}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={item.title}
            description={`Price: $${item.price}, Rating: ${item.rating}`}
            onPress={() => setSelectedItem(item)}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>$ {item.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
      {selectedItem && (
        <View
          style={{
            position: "absolute",
            bottom: 52,
            left: 10,
            right: 10,
          }}
        >
          <ApartmentsItems item={selectedItem} />
        </View>
      )}

      <BottomSheet index={0} snapPoints={snapPoints}>
        <Text style={{ textAlign: "center", fontWeight: "900" }}>
          Over {items.length} Places
        </Text>
        <View style={styles.contentContainer}>
          <FlatList
            data={items}
            renderItem={({ item }) => <ApartmentsItems item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </BottomSheet>
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
  marker: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
  },
  markerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  contentContainer: {
    padding: 16,
  },
});
