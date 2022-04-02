import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const LocationLine = ({ style, distance }: any) => {
  return (
    <View style={[styles.container, style ? style : {}]}>
      <MaterialIcons name="location-on" size={24} color="#B26423" />
      <Text style={styles.line}>
        {String(distance).slice(0, 4)} km from city centre
      </Text>
    </View>
  );
};

export default LocationLine;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  line: {
    color: "#4B4B4D",
  },
});
