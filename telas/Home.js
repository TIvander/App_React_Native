import React, { useRef, useEffect } from 'react';
import { Animated, Button, Text, View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import Constants from 'expo-constants';
import Collors from '../styles/Collors';
import AssetExample from '../components/LogoHome';
import MyButton from '../components/MyButton';
import Separar from '../components/separar';
import { Card } from 'react-native-paper';

const FadeInView = (props) => {
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default function App({ navigation }) {

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  const acessar = () => {
      if(text!= '' && number != '' ){
          alert('seja bem-vindo')
      }else{
        alert('Preencha os campos ou faça um cadastro')
      }
  }
  
  return (
    <View style={Collors.bodyColorHome}>
      <FadeInView>
        <AssetExample />
      </FadeInView>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="**********"
          keyboardType="numeric"
        />
      </SafeAreaView>

      <FadeInView>
        <MyButton
          title="Login"
          color="blue"
          navigation={navigation}
          destino="Tabs"
        />
        <Separar />
        <MyButton
          title="Cadastre-se"
          color="#baed2f"
          navigation={navigation}
          destino="AbrirConta"
        />
      </FadeInView>
      <Separar />
      <Separar />
      <MyButton
        title="App Avaliacao 1"
        color="orange"
        navigation={navigation}
        destino="AppBalao"
      />
      <Separar />
      <MyButton
        title="App Avaliacao 2"
        color="red"
        navigation={navigation}
        destino="AppBanco"
      />
      <Separar />
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});