import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import { doc, setDoc } from "firebase/firestore"
import { db } from '../firebase/Config'


export default function GuardarScreen() {

  const [id, setid] = useState("")
  const [titulo, settitulo] = useState("")
  const [descripcion, setdescripcion] = useState("")


  async function guardarTarea(){

    await setDoc(doc(db, "tareas", id), {

      titulo: titulo,
      descripcion: descripcion

    });

    console.log("Tarea guardada")

  }


  return (
    <View>

      <Text>GuardarScreen</Text>


      <TextInput
        placeholder='Ingrese Id'
        style={GlobalStyles.input}
        onChangeText={(texto)=> setid(texto)}
        value={id}
      />


      <TextInput
        placeholder='Ingrese Titulo'
        style={GlobalStyles.input}
        onChangeText={(texto)=> settitulo(texto)}
        value={titulo}
      />


      <TextInput
        placeholder='Ingrese Descripción'
        style={GlobalStyles.input}
        onChangeText={(texto)=> setdescripcion(texto)}
        value={descripcion}
      />


      <Button 
        title='Guardar'
        onPress={()=>guardarTarea()}
        color={"teal"}
      />


    </View>
  )
}


const styles = StyleSheet.create({})