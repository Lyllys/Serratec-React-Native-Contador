import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const BotaoSomar = ({ aoSalvar }) => {

  const [numero, setNumero] = useState(0);

  const manipuladorSomar = () => {
    aoSalvar(numero)
  }

  return (
    <TouchableOpacity onPress={manipuladorSomar}  style={styles.sumButton} activeOpacity={0.5}>
      <Text style={styles.sumTitle} >Somar</Text>
    </TouchableOpacity>
  )
}

export default BotaoSomar;