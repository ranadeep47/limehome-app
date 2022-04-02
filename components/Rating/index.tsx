import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Rating = ({ style }: any) => {
  return (
    <View style={[styles.container, style ? style : {}]}>
      <Text style={styles.rating}>4.5</Text>
      <MaterialIcons name="star-rate" size={16} color="#B26423" />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F7F1E9",
    padding: 4,
    borderRadius: 4,
  },
  rating: {
    fontWeight: "bold",
    color: "#4B4B4D",
  },
});
