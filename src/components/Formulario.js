
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
  
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
  
    const confirmarFecha = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    const confirmarHora = (time) => {
      console.warn("Time has been picked: ", time);
      hideTimePicker();
    };

    return ( 
        <>
           <View style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente</Text>
                    <TextInput 
                        onChangeText={(text) => console.log(text)}
                        style={styles.input} 
                    />
                </View>
                <View>
                    <Text style={styles.label}>Dueño</Text>
                    <TextInput 
                        onChangeText={(text) => console.log(text)}
                        style={styles.input} 
                    />
                </View>
                <View>
                    <Text style={styles.label}>Teléfono Contacto</Text>
                    <TextInput 
                        onChangeText={(text) => console.log(text)}
                        style={styles.input} 
                        keyboardType='numeric'
                    />
                </View>
                <View>
                    <Button title="Seleccionar fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    />
                </View>
                <View>
                    <Button title="Seleccionar hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Sintomas</Text>
                    <TextInput 
                        multiline
                        onChangeText={(text) => console.log(text)}
                        style={styles.input} 
                    />
                </View>
           </View>
        </>
    );
}
 
const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})
export default Formulario;
