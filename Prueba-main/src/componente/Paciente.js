import React, { useState } from "react";
import { Text,View,StyleSheet, Pressable, SafeAreaView, TextInput, ScrollView } from "react-native"
const Paciente=({item, Modificar, Eliminar})=>{
    const {Paciente,propitario}=item
    const [editMode, setEditMode] =useState(false);
    const [paciente, setPaciente] =useState(item.paciente);
    const [propietario, setPropietario] =useState (item.propietario);
    const [telefono, setTelefono] =useState (item.telefono);
    const [email, setEmail] =useState (item.email);
    const [sintomas, setSintomas] =useState (item.sintomas);

    const handleEditar = () => {
        setEditMode(true);
    };

    const handleGuardar = () => {
        const pacienteActualizado = {...item, paciente, propietario, telefono, email, sintomas};
        Modificar(pacienteActualizado);
        setEditMode(false);
    };

    const handleEliminar = () => {
        Eliminar(item.id);
    };

    return(
        <SafeAreaView style={styles.contenido}>
            <ScrollView>
                <View>
                    {editMode ?(
                     <View>
                         <Text style={styles.label}>Nombre del paciente</Text>
                            <TextInput
                             style={styles.input}
                             placeholder='Nombre del paciente'
                             placeholderTextColor={'#000000'}
                             value={paciente}
                             onChangeText={setPaciente}
                            />
                         <Text style={styles.label}>Nombre del propietario</Text>
                            <TextInput
                             style={styles.input}
                             placeholder='Nombre del propietario'
                             value={propietario}
                             onChangeText={setPropietario}
                            />
                         <Text style={styles.label}>Email</Text>
                            <TextInput
                             style={styles.input}
                             placeholder='Email'
                             placeholderTextColor={'#000000'}
                             value={email}
                             onChangeText={setEmail}
                            />
                         <Text style={styles.label}>Telefono</Text>
                            <TextInput
                             style={styles.input}
                             placeholder='Telefono'
                             placeholderTextColor={'#000000'}
                             value={telefono}
                             keyboardType='number-pad'
                             onChangeText={setTelefono}
                            />
                         <Text style={styles.label}>Sintomas</Text>
                            <TextInput
                             style={styles.input}
                             placeholder='Sintomas'
                             placeholderTextColor={'#000000'}
                             value={sintomas}
                             onChangeText={setSintomas}
                            />

                     </View>
                ) : (
                    <View>
                        <Text style={styles.titulo}>{paciente}</Text>
                        <Text style={styles.titulo}>{propietario}</Text>
                    </View>
                )}
            </View>

            {editMode ? (
                <Pressable style={styles.btnGuardar} onPress={handleGuardar}>
                    <Text style={styles.btnGuardarTexto}>Guardar</Text>
                </Pressable>
            ) : (
                <Pressable style={styles.btnEditar} onPress={handleEditar}>
                    <Text style={styles.btnEditarTexto}>Editar</Text>
                </Pressable>
            )}

            <Pressable style={styles.btnEliminar} onPress={handleEliminar}>
                <Text style={styles.btnEliminarTexto}>Eliminar</Text>
            </Pressable>
            </ScrollView>

        </SafeAreaView>
    );


};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 30
    },
    label: {
        color: '#000000',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: '600'
    },
    contenido: {
        backgroundColor: '#04BAFF'
    },
    titulo: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'left',
        marginTop: 30,
        color: '#000000'
    },
    btnEliminar: {
        backgroundColor: '#00ff00',
        marginVertical: 30,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },
    btnEliminarTexto: {
        backgroundColor: '#00ff00',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    btnEditar: {
        backgroundColor: '#00ff00',
        marginVertical: 30,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },
    btnEditarTexto: {
        backgroundColor: '#00ff00',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    btnGuardar: {
        backgroundColor: '#00ff00',
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 10
    },
    btnGuardarTexto: {
        backgroundColor: '#00ff00',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    }
  });



export default Paciente
