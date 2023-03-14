import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TextInput,TouchableOpacity, Text, Image } from 'react-native';
import estilo from './src/estilos';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style = {estilo.container}>
    <LinearGradient
    colors = {['black','#FF4500']}
    style = {estilo.gradienteBackground}
    >
  <Image source = {{uri :'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/01/the-last-of-us-serie.jpg?w=876&h=484&crop=1'}}
  style = {estilo.image}
  />

    </LinearGradient>
    {/* View com as entradas de dados */}
    <View style = {estilo.box}>

    <View style = {estilo.viewIcons}>
    <Feather name="user" size={24} color="black" />
    <TextInput style= {estilo.input} placeholder='e-mail' />
    </View>

    <View style = {estilo.viewIcons}>
    <Ionicons name="key" size={24} color="black" />
    <TextInput style= {estilo.input} placeholder='senha' />
    </View>

    <TouchableOpacity style = {{width:'80%'}}>


    <LinearGradient
    colors ={['#D2691E','#FF4500']}
    style ={estilo.button}

    >

    <Text style = {estilo.text}> LOGAR </Text>

    </LinearGradient>
    </TouchableOpacity>

    </View>

    </View>


  );
}

