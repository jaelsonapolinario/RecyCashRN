import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Logo from '../../assets/images/logo.svg';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

export default function Login() {
  const navigation = useNavigation();

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
              placeholderTextColor="#263238CC" />
            <CustomTextInput 
              style={styles.inputLogin} 
              placeholder="Digite sua senha" 
              textContentType="password"
              placeholderTextColor="#263238CC"
              secureTextEntry={true} />

            <CustomButton 
              onPress={() => navigation.navigate('Tabs')}>
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
