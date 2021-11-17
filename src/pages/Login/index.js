import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Logo from '../../assets/images/logo.svg';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import ApiService from '../../services/ApiService';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();

  const doLogin = async(email, password) => {
    console.log(email, password);
    ApiService().post('login', {email: email, senha: password})
    .then((response) => {
      if(response?.data?.autenticado){
        ApiService().setUser(response.data);
        navigation.navigate('Tabs');
      }
    })
    .catch((error) => {
      const dataError = error.toJSON();
      console.log(dataError);
      Alert.alert("Ops...", "Usuário ou senha inválidos.",);
    });
  };

  return <>
      <View>
          <View style={styles.container}>
              <Logo style={styles.logo} />
              <Text style={styles.textLogo}>Recycash</Text>
          </View>
          <View style={styles.form}>
            <CustomTextInput 
              style={styles.inputLogin} 
              placeholder="Digite seu e-mail"
              placeholderTextColor="#263238CC" 
              value={email}
              onChangeText={(text) => setEmail(text)} />
            <CustomTextInput 
              style={styles.inputLogin} 
              placeholder="Digite sua senha" 
              textContentType="password"
              placeholderTextColor="#263238CC"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}/>

            <CustomButton 
              onPress={() => doLogin(email, password)}>
                Entrar
              </CustomButton>
            <CustomButton
              style={styles.buttonNewAccount}
              textStyle={styles.buttonNewAccountText}
              onPress={() => navigation.navigate('NewAccount')}
              styleClean={true}>
               Ainda não tem uma conta?
            </CustomButton>
          </View>
      </View>
  </>
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 136
    },
    logo: {
      
    },
    textLogo: {
      fontFamily: 'Mohave-Regular',
      fontSize: 72,
      lineHeight: 100,
      color: '#000000'
    },
    form: {
      paddingHorizontal: 70
    },
    buttonLogin: {
      marginTop: 18,
      alignItems: 'center',
      backgroundColor: '#093269',
      borderRadius: 8,
      borderColor: '#263238',
      borderWidth: 1,
      height: 40,
      justifyContent: 'center'
    },
    buttonLoginText: {
      fontFamily: 'Mohave-Regular',
      fontSize: 18,
      lineHeight: 24,
      color: '#fff'
    },
    buttonNewAccount: {
      marginTop: 18,
      alignItems: 'center',
      height: 18,
      justifyContent: 'center'
    },
    buttonNewAccountText: {
      fontFamily: 'Mohave-Regular',
      fontSize: 16,
      lineHeight: 20,
      textDecorationLine: 'underline' 
    }
  });
