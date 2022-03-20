import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 23.181467,
        longitude: 79.986404,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: 23.181467,
          longitude: 79.986404,
        }}
        /*title="Origin"
        description={origin.description}
        identifier="origin"*/
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
