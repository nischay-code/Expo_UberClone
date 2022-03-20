import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../slices/components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
      <View style={[tw`p-5`]}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          enablePoweredByContainer={false}
          minLength={2}
          /*query={{
            key: GOOGLE_MAPS_APIKEY,
            language:"en",
          }}*/
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
