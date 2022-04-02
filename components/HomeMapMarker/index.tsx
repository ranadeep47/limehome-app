import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { LimeHome } from "../../types";

export type HomeMapMarkerProps = {
  home: LimeHome;
  isSelected: boolean;
};

const currency = "€";

function HomeMapMarker({ home, isSelected }: HomeMapMarkerProps) {
  return (
    <View style={[styles.container, isSelected ? styles.selected : {}]}>
      <Text style={styles.text}>
        {home.lowest_price_per_night}
        {currency}
      </Text>
      <View
        style={[styles.triangle, isSelected ? styles.selectedTriangle : {}]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#4B4B4D",
    paddingHorizontal: 10,
    paddingVertical: 12,
    position: "relative",
  },
  text: {
    color: "white",
  },
  selected: {
    backgroundColor: "#B26423",
    borderRadius: 12,
  },
  triangle: {
    position: "absolute",
    bottom: -8,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    transform: [{ rotate: "180deg" }],
  },
  selectedTriangle: {
    borderBottomColor: "#B26423",
  },
});

export default HomeMapMarker;
