import React, { FC } from "react";
import { StyleSheet, ViewProps, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: "#fff",
  },
  cardShadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export type XPCardProps = ViewProps & {};

export const XPCard: FC<XPCardProps> = ({ ...props }) => (
  <View style={[styles.card, styles.cardShadows]} {...props} />
);
