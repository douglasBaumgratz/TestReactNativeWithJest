import * as React from "react";
import { View, Text } from "react-native";
import TextHora from "./app/components/TextHora";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextHora/>
    </View>
  );
}
