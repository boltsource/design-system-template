import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { XPButton } from "@xproduct/ui";

export default function App() {
  return (
    <View style={styles.container}>
      <XPButton
        title="Welcome"
        onPress={() => {
          Alert.alert("Hi", "This is a native alert");
        }}
      />
      <StatusBar style="auto" />
    </View>
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
