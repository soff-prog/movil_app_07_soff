import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/Config'


export default function EditarScreen() {

  const [id, setid] = useState("")
  const [titulo, settitulo] = useState("")
  const [descripcion, setdescripcion] = useState("")


  async function editarTarea(){

    const tareaRef = doc(db, "tareas", id)


    await updateDoc(tareaRef,{

      titulo: titulo,
      descripcion: descripcion

    })


    console.log("Tarea actualizada")

  }


  return (
    <View>

      <Text>EditarScreen</Text>


      <TextInput
        placeholder='Ingrese Id'
        style={GlobalStyles.input}
        onChangeText={(texto)=>setid(texto)}
        value={id}
      />


      <TextInput
        placeholder='Ingrese nuevo titulo'
        style={GlobalStyles.input}
        onChangeText={(texto)=>settitulo(texto)}
        value={titulo}
      />


      <TextInput
        placeholder='Ingrese nueva descripcion'
        style={GlobalStyles.input}
        onChangeText={(texto)=>setdescripcion(texto)}
        value={descripcion}
      />


      <Button
        title='Editar'
        onPress={()=>editarTarea()}
        color={"teal"}
      />


    </View>
  )
}


const styles = StyleSheet.create({})