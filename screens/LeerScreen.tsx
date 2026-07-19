import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/Config'
import { GlobalStyles } from '../styles/GlobalStyles'

export default function LeerScreen() {

  const [id, setid] = useState("")
  const [titulo, settitulo] = useState("")
  const [descripcion, setdescripcion] = useState("")

  async function leerTarea() {

    const querySnapshot = await getDocs(collection(db, "tareas"));

    querySnapshot.forEach((doc) => {

      console.log(`${doc.id} =>`, doc.data());

      if (doc.id == id) {

        settitulo(doc.data().titulo);

        setdescripcion(doc.data().descripcion);

      }

    });

  }

  return (
    <View>

      <Text>LeerScreen</Text>

      <TextInput
        placeholder='Ingrese Id'
        style={GlobalStyles.input}
        onChangeText={(texto) => setid(texto)}
        value={id}
      />

      <Button
        title='Buscar'
        onPress={() => leerTarea()}
        color={"teal"}
      />

      <View>

        <Text>
          Titulo: {titulo}
        </Text>

        <Text>
          Descripción: {descripcion}
        </Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({})