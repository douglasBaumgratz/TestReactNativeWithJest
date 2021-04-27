import React, { useState } from "react";
import { View, Button } from "react-native";
import TextHora from "./app/components/TextHora";

export default function App() {
  const [inputFields, setInputField] = useState([{ horas: 0 }]);
  
  const calcularSomatorio = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  const adicionarCampos = () => {
    console.log("add fields");
    setInputField([...inputFields, { horas: "" }]);
  };

  const removerCampos = (index) => {
    console.log("index: ", index);
    if (index != 0) {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputField(values);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {inputFields.map((inputField, index) => (
        <View key={index}>
          <TextHora />
          <Button title="+" onPress={adicionarCampos} />
          <Button title="-" onPress={() => removerCampos(index)} />
        </View>
      ))}
      <Button title="Calcular" onPress={calcularSomatorio} />
    </View>
  );
}
