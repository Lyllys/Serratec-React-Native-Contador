
import React, { useState } from 'react';

import {
  Text,
  View,
  StatusBar
} from 'react-native';
import styles from './styles';
import BotaoSomar from './Componentes/BotaoSomar';
import BotaoSubtracao from './Componentes/BotaoSubtracao.js';
import BotaoResetar from './Componentes/BotaoResetar';


const App = () => {


  const [numeros, setNumero] = useState(0);

  const adicionaNumero = (numero) => {
    setNumero(numero + 1 + numeros)
  }

  const subtraiNumero = (numero) => {
    setNumero(numeros - 1 - numero)
  }

  const resetaNumero= () => {
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

        <BotaoSomar aoSalvar={adicionaNumero} />

        <BotaoSubtracao aoSubtrair={subtraiNumero} />

        <BotaoResetar aoResetar={resetaNumero} />
       
        
      </View>

      <Text style={styles.result} >{numeros}</Text>
   
    </View>
  )

};


export default App;
