
import React, { useState } from 'react';

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import styles from './styles';


const App =() => {
  

  const [numero, setNumero] = useState(0);

  const manipuladorSomar = () => {
    setNumero(numero + 1)

  }

  const manipuladorSubtracao = () => {
    setNumero(numero - 1)
  }

  const manipuladorResetar = () => {
    setNumero(0)
  }

  return (
    <View style={styles.container}>
       <StatusBar 
           barStyle="dark-content" 
           backgroundColor="transparent"
           translucent
           />

      <Text style={styles.title}>Contador</Text>
      <View style={styles.buttons}>
      <TouchableOpacity onPress={manipuladorSomar} style={styles.sumButton} activeOpacity={0.5}>
        <Text style={styles.sumTitle} >Somar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={manipuladorSubtracao} style={styles.subtractionButton} activeOpacity={0.5}> 
        <Text style={styles.subtractionTitle}>Subtrair</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={manipuladorResetar} style={styles.resetButton} activeOpacity={0.5}>
        <Text style={styles.resetTitle}>Resetar</Text>
      </TouchableOpacity>
      </View>
     
      <Text style={styles.result}>{numero}</Text>
    </View>
  )
  
};


export default App;
