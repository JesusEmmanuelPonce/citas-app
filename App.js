
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Cita from './src/components/Cita';

const App = () => {

  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Jesus', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Emmanuel', sintomas: 'No duerme'},
    {id: '3', paciente: 'Native', propietario: 'Joshua', sintomas: 'No se levanta'}
  ])

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>
          Administrador de citas
        </Text>

        <FlatList 
          data={citas}
          renderItem={ ({item}) => <Cita item={item} /> }
          keyExtractor={ cita => cita.id}
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#aa076b',
    flex: 1
  },
  titulo: {
    color: '#fff',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default App;
