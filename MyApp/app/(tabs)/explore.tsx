import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import coffeeSplash from "@/assets/images/coffee-splash.png";
const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeSplash} style={styles.image}>
        <Text style={styles.text}>Hello</Text>
      </ImageBackground>
    </View>
  );
};

export default explore;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
