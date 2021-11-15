import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/core';


export default function NewAccount() {
  const navigate = useNavigation();

  return <>
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>
      <View style={styles.inputs}>
        <CustomTextInput 
         placeholder="Digite seu nome" />
        <CustomTextInput 
          placeholder="Digite seu e-mail" />
        <CustomTextInput 
          placeholder="Digite sua senha"
          secureTextEntry={true} />
      </View>
      <View style={styles.buttons}>
        <CustomButton>Criar conta</CustomButton>
        <CustomButton 
          style={styles.backButton} 
          textStyle={styles.backButtonText}
          onPress={() => navigate.pop()}>Voltar</CustomButton>
      </View>
    </View>
  </>   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Mohave-Regular',
    fontSize: 48,
    lineHeight: 67,
    alignSelf: 'center'
  },
  inputs: {
    marginHorizontal: 72
  },
  buttons: {
    width: '100%',
    paddingHorizontal: 32,
    position: 'absolute',
    bottom: 21
  },
  backButton: {
    backgroundColor: 'transparent',
    borderColor: '#093269'

  },
  backButtonText: {
    color: '#093269'
  }
});
