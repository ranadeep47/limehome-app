import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import HomeCard from "../../components/HomeCard";
import HomeMapMarker from "../../components/HomeMapMarker";
import useGetHomesByCity from "../../hooks/useGetHomesByCity";
import { LimeHome } from "../../types";

function HomeScreen({ navigation }) {
  const { loading, error, data } = useGetHomesByCity();
  const [selectedHomeId, setSelectedHomeId] = useState<number | null>(null);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 52.5484571,
          longitude: 13.4108582,
          latitudeDelta: 0.091,
          longitudeDelta: 0.0421,
        }}
      >
        {!loading &&
          data &&
          data.map((home) => (
            <Marker
              key={home.id}
              coordinate={{
                latitude: home.location.lat,
                longitude: home.location.lng,
              }}
              onPress={() => setSelectedHomeId(home.id)}
            >
              <HomeMapMarker
                home={home}
                isSelected={home.id === selectedHomeId}
              />
            </Marker>
          ))}
      </MapView>
      {selectedHomeId && data && (
        <View style={{ position: "absolute", bottom: 50 }}>
          <HomeCard
            data={data.find((item) => item.id === selectedHomeId)}
            onSelect={(home: LimeHome) => {
              navigation.push("Details", { propertyId: home.id });
            }}
          />
        </View>
      )}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
