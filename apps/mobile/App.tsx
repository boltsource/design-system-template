import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { XPButton, XPCard } from "@xproduct/ui";

export default function App() {
  return (
    <View style={styles.container}>
      <XPCard>
        <Text>
          Ipsum ad deserunt consectetur laborum esse anim cillum anim tempor
          nulla in enim. Sunt pariatur incididunt amet eu dolor irure
          consectetur voluptate id enim aliquip est voluptate Lorem. Aliqua
          laboris deserunt officia reprehenderit mollit tempor consectetur nulla
          laborum mollit labore ut. Fugiat duis dolor est eu laborum enim sint
          voluptate anim labore sit do ad consequat. Lorem cillum labore ad
          adipisicing. Irure est amet nostrud esse excepteur. Ea ad laborum nisi
          id est excepteur eu labore laboris culpa cillum.
        </Text>
        <View style={{ margin: 16 }} />
        <XPButton title="Action" onPress={() => {}} />
      </XPCard>
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
