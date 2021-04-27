import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function TextHora(props) {
  const [horas, setHoras] = useState(0);
  const [emHoras, setEmHoras] = useState(true);

  const onChangeText = (text) => {
    emHoras ? setHoras(Number(text)) : setHoras(Number(text * 15));
  };

  return (
    <View>
      <Text>Digite a quantidade: </Text>
      <TextInput
        keyboardType={"numeric"}
        onChangeText={onChangeText}
        value={emHoras ? horas : horas / 15}
      />
      <Text
        onClick={() => {
          setEmHoras(!emHoras);
        }}
      >
        {emHoras ? "Horas: " : "Créditos: "}
        {horas}
      </Text>
    </View>
  );
}
