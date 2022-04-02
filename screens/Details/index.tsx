import { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import useGetProperty from "../../hooks/useGetProperty";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import Heading from "../../components/Heading";
import Rating from "../../components/Rating";
import LocationLine from "../../components/LocationLine";
import { MaterialIcons } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";

const currency = "€";
const VIEWPORT_WIDTH = Dimensions.get("window").width;

function DetailsScreen({ route, navigation }) {
  const { propertyId } = route.params;
  // const propertyId = 99;
  const { loading, error, data } = useGetProperty(propertyId);
  const [activeImage, setActiveImage] = useState(0);
  const roomTypes = [
    "3x1 Bedroom Suites",
    "4x2 Bedroom suites",
    "2x3 Bedroom suites",
  ];
  const renderGalleryItem = useCallback(({ item, index }) => {
    if (index === 0) {
      return (
        <SharedElement id={`item.${propertyId}.photo`}>
          <Image source={{ uri: item.url }} style={styles.cover}></Image>
        </SharedElement>
      );
    }
    return (
      <View>
        <Image source={{ uri: item.url }} style={styles.cover}></Image>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.close}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="close" size={24} color="black" />
      </TouchableOpacity>
      {data ? (
        <View style={{ flex: 1 }}>
          <View
            style={{
              position: "relative",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Carousel
              data={data.images.slice(0, 3)}
              renderItem={renderGalleryItem}
              sliderWidth={VIEWPORT_WIDTH}
              itemWidth={VIEWPORT_WIDTH}
              onSnapToItem={(index) => setActiveImage(index)}
            />
            <Pagination
              dotsLength={data.images.slice(0, 3).length}
              activeDotIndex={activeImage}
              containerStyle={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: -10,
              }}
              dotStyle={styles.dot}
              inactiveDotStyle={styles.inactiveDot}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
          </View>
          <View style={styles.body}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <SharedElement id={`item.${propertyId}.heading`}>
                  <Heading>{data.name}</Heading>
                </SharedElement>
                <SharedElement id={`item.${propertyId}.location`}>
                  <LocationLine distance={data.distance} />
                </SharedElement>
              </View>
              <View>
                <Rating style={{ borderWidth: 1, borderColor: "#4B4B4D" }} />
              </View>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={styles.description} numberOfLines={6}>
                {data.description}
              </Text>
            </View>
            <View style={styles.br}></View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Room types available in this location
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  marginTop: 16,
                }}
              >
                {roomTypes.map((type, i) => (
                  <View key={i} style={styles.roomType}>
                    <Text style={styles.roomTypeText}>{type}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={{ flexDirection: "row" }}>
              <Text>From </Text>
              <Text style={styles.price}>
                {data.lowest_price_per_night}
                {currency} / Night
              </Text>
            </View>
            <TouchableOpacity style={styles.explore}>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "#C9CBAB",
                  fontSize: 18,
                  letterSpacing: 2,
                }}
              >
                Explore
              </Text>
              <MaterialIcons name="arrow-right-alt" size={24} color="#C9CBAB" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  close: {
    position: "absolute",
    left: 12,
    top: 24,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#F7F1E9",
    zIndex: 10,
  },
  cover: {
    width: VIEWPORT_WIDTH,
    height: 260,
    resizeMode: "cover",
  },
  dot: {
    width: 8,
    height: 8,
    marginHorizontal: 0,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  inactiveDot: {
    backgroundColor: "white",
  },
  body: {
    padding: 16,
    flex: 1,
    backgroundColor: "#F7F1E9",
  },
  description: {
    color: "#4B4B4D",
    lineHeight: 28,
    fontSize: 16,
  },
  br: {
    marginVertical: 12,
    backgroundColor: "#4B4B4D",
    height: 1,
  },
  roomType: {
    backgroundColor: "#C9CBAB",
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 2,
  },
  roomTypeText: {
    fontSize: 16,
    color: "#4B4B4D",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: VIEWPORT_WIDTH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#C9CBAB",
  },
  explore: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#4D6447",
    borderRadius: 2,
  },
  price: {
    color: "#B26423",
  },
});
