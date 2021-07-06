import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const BotaoResetar = ({aoResetar}) => {

    const [numero , setNumero] = useState(0);

    const manipuladorResetar = () =>{
        aoResetar(numero)
    }

    return(
        <TouchableOpacity onPress={manipuladorResetar} style={styles.resetButton} activeOpacity={0.5}>
          <Text style={styles.resetTitle}>Resetar</Text>
        </TouchableOpacity>
    )
};

export default BotaoResetar;