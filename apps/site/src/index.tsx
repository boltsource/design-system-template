import React from "react";
import ReactDOM from "react-dom";
import { Text, View, StyleSheet } from "react-native";
import { XPCard, XPButton } from "@xproduct/ui";
import './styles.css';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: '100%'
  },
});

const App: React.FC = () => {
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
    </View>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
