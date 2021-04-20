import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

export default function TextHora(props) {
  const [horas, setHoras] = useState(0);
  const [emHoras, setEmHoras] = useState(true);

  const onChangeText = (text) => {
    emHoras ? setHoras(Number(text)) : setHoras(Number(text) * 15);
  };

  return (
    <View>
      <TextInput        
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={emHoras ? horas : horas / 15}
      />
      <Text
        onClick={() => {
          setEmHoras(!emHoras);
        }}
      >
        {emHoras ? "Horas " : "Créditos: "}
        {horas}
      </Text>
    </View>
  );
}
