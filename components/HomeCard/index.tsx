import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { LimeHome } from "../../types";
import Heading from "../Heading";
import LocationLine from "../LocationLine";
import Rating from "../Rating";
import { SharedElement } from "react-navigation-shared-element";

export type HomeCardProps = {
  data: LimeHome;
  onSelect: (item: LimeHome) => void;
};
const currency = "€";

function HomeCard({ data, onSelect }: HomeCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(data)}>
      <View style={styles.leftView}>
        <SharedElement id={`item.${data.id}.photo`}>
          <Image source={{ uri: data.images[0].url }} style={styles.image} />
        </SharedElement>
        <Rating style={styles.rating} />
      </View>
      <View style={styles.rightView}>
        <SharedElement id={`item.${data.id}.heading`}>
          <Heading>{data.name}</Heading>
        </SharedElement>
        <SharedElement id={`item.${data.id}.location`}>
          <LocationLine distance={data.distance} />
        </SharedElement>
        <View style={styles.br}></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>From </Text>
          <Text style={styles.price}>
            {data.lowest_price_per_night}
            {currency}
          </Text>
          <Text> / Night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F1E9",
    borderWidth: 1,
    borderColor: "#9D9E9F",
    flex: 1,
    flexDirection: "row",
    height: 120,
    marginLeft: 16,
    borderRadius: 2,
    width: Dimensions.get("window").width - 32,
  },
  leftView: { position: "relative" },
  rating: {
    position: "absolute",
    right: 8,
    top: 6,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  rightView: {
    padding: 16,
  },
  br: {
    height: 1,
    backgroundColor: "#9D9E9F",
    marginVertical: 6,
  },
  price: {
    color: "#B26423",
    fontWeight: "bold",
  },
});
