import React, { useState }  from "react";
import styles from "./styles";
import {Text,TouchableOpacity} from 'react-native';

const BotaoSubtracao = ({aoSubtrair}) => {
    
    const [numero, setNumero] = useState(0);

    const manipuladorSubtracao =() => {
        aoSubtrair(numero)
    }

    return (
        <TouchableOpacity onPress={manipuladorSubtracao} style={styles.subtractionButton} activeOpacity={0.5}>
        <Text style={styles.subtractionTitle}>Subtrair</Text>
      </TouchableOpacity>
    )
};

export default BotaoSubtracao; 