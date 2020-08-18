import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 52,
    padding: 16,
    backgroundColor: "#3300dd",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

export type XPButtonProps = TouchableOpacityProps & {
  title: string;
};

export const XPButton: FC<XPButtonProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
