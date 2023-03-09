import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import Search from "../components/Search";
import { LocationContext } from "../../../services/restaurants/location/locationContext";
import { RestaurantContext } from "../../../services/restaurants/restaurantContext";
import MapCallout from "../components/MapCallout";

const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastlat = viewport.northeast.lat;
    const southeastlat = viewport.southwest.lat;
    setLatDelta(northeastlat - southeastlat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <View style={styles.container}>
        <MapView
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
          style={styles.map}
        >
          {restaurants.map((restaurant) => {
            return (
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                {/* // If you don't use the callout then instead of the red marker logo text of restaurant name will be render in the respective restaurant location. So callout helps to render inside details */}
                <Callout>
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
