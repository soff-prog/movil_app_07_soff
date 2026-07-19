import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/Config'

export default function EliminarScreen() {

  const [id, setid] = useState("")

  function eliminarTarea(){

    Alert.alert(
      "Peligro",
      "¿Deseas borrar la tarea?",
      [
        {
          text: "Borrar",
          onPress: async () => {

            await deleteDoc(doc(db, "tareas", id))

            console.log("Tarea eliminada")

          }
        },
        {
          text: "Cancelar"
        }
      ]
    )

  }

  return (
    <View>

      <Text>EliminarScreen</Text>

      <TextInput
        placeholder='Ingrese Id'
        style={GlobalStyles.input}
        onChangeText={(texto)=>setid(texto)}
        value={id}
      />

      <Button
        title='Eliminar'
        onPress={()=>eliminarTarea()}
        color={"teal"}
      />

    </View>
  )
}

const styles = StyleSheet.create({})