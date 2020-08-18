import React from "react";
import { XPButton } from "@xproduct/ui";

export default {
  title: "XPButton",
  component: XPButton,
};

const runAlert = () => {
  alert("Pressed");
};

export const Regular = () => <XPButton title="Welcome" onPress={runAlert} />;
