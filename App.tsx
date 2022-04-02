import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

import MapView from "./screens/MapView";
import DetailsScreen from "./screens/Details";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={MapView} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          sharedElements={(route, otherRoute, showing) => {
            const { propertyId } = route.params;
            return [
              `item.${propertyId}.photo`,
              `item.${propertyId}.heading`,
              `item.${propertyId}.location`,
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
