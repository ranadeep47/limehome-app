import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading} numberOfLines={1}>
        {children}
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  heading: {
    maxWidth: 200,
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B4B4D",
  },
});
